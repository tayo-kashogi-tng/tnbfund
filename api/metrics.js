const DEFAULT_SOURCE = "manual";
const PUBLIC_METRICS_ERROR = "Transparency data is temporarily unavailable.";

function sendJson(res, status, body) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(status).json(body);
}

function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return null;

  const normalized = value.replace(/[^0-9.-]/g, "");
  if (!normalized) return null;

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatDateValue(value) {
  if (value === null || value === undefined || value === "") return null;

  function formatDate(dateInfo) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(dateInfo);
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    const utcDays = Math.floor(value - 25569);
    const utcValue = utcDays * 86400;
    const dateInfo = new Date(utcValue * 1000);

    if (!Number.isNaN(dateInfo.getTime())) {
      return formatDate(dateInfo);
    }
  }

  const parsed = new Date(String(value));
  if (!Number.isNaN(parsed.getTime())) {
    return formatDate(parsed);
  }

  return String(value);
}

function normalizeKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

function pickMetricValue(map, keys) {
  for (const key of keys) {
    const value = map[normalizeKey(key)];
    if (value !== undefined && value !== null && value !== "") return value;
  }

  return null;
}

function requireEnvValue(env, key) {
  const value = env[key];

  if (value === undefined || value === null || value === "") {
    throw new Error(`Missing required manual metric: ${key}`);
  }

  return value;
}

function buildBreakdown(raw) {
  const goFundMeReceived = parseNumber(
    pickMetricValue(raw, ["gofundme_received", "gofundme received", "gofundme"])
  );
  const paypalReceived = parseNumber(
    pickMetricValue(raw, ["paypal_received", "paypal received", "paypal"])
  );
  const otherReceived = parseNumber(
    pickMetricValue(raw, ["other_received", "other received", "other"])
  );

  if ([goFundMeReceived, paypalReceived, otherReceived].every((value) => value === null)) {
    return null;
  }

  return {
    goFundMeReceived: goFundMeReceived ?? 0,
    paypalReceived: paypalReceived ?? 0,
    otherReceived: otherReceived ?? 0,
  };
}

function coerceMetrics(raw, sourceLabel) {
  const breakdown = buildBreakdown(raw);
  const explicitTotalRaised = parseNumber(
    pickMetricValue(raw, ["total_raised", "total raised", "raised", "donations_received"])
  );
  const totalRaised =
    explicitTotalRaised ??
    (breakdown
      ? breakdown.goFundMeReceived + breakdown.paypalReceived + breakdown.otherReceived
      : null);
  const deployedFunds = parseNumber(
    pickMetricValue(raw, ["deployed_funds", "deployed funds", "support_distributed", "spent"])
  );
  const currentBalance = parseNumber(
    pickMetricValue(raw, ["current_balance", "current balance", "balance", "available_balance"])
  );
  const lastUpdated = formatDateValue(
    pickMetricValue(raw, ["last_updated", "last updated", "updated_at", "updated"]) ?? null
  );
  const currency = pickMetricValue(raw, ["currency", "currency_code"]) ?? "USD";
  const note =
    pickMetricValue(raw, ["note", "notes", "summary"]) ??
    (breakdown
      ? "Total received includes GoFundMe, PayPal, and other reconciled contributions."
      : null);

  if ([totalRaised, deployedFunds, currentBalance].some((value) => value === null)) {
    throw new Error(
      `Metrics source "${sourceLabel}" is missing one or more required values: total_raised, deployed_funds, current_balance`
    );
  }

  return {
    source: sourceLabel,
    totalRaised,
    deployedFunds,
    currentBalance,
    lastUpdated,
    currency,
    note,
    breakdown,
  };
}

function readManualMetrics(env) {
  return coerceMetrics(
    {
      total_raised: requireEnvValue(env, "MANUAL_TOTAL_RAISED"),
      deployed_funds: requireEnvValue(env, "MANUAL_DEPLOYED_FUNDS"),
      current_balance: requireEnvValue(env, "MANUAL_CURRENT_BALANCE"),
      gofundme_received: env.MANUAL_GOFUNDME_RECEIVED ?? null,
      paypal_received: env.MANUAL_PAYPAL_RECEIVED ?? null,
      other_received: env.MANUAL_OTHER_RECEIVED ?? null,
      last_updated: env.MANUAL_LAST_UPDATED ?? null,
      currency: env.MANUAL_CURRENCY ?? "USD",
      note: env.MANUAL_NOTE ?? "Updated manually by the team.",
    },
    "manual"
  );
}

async function readGoogleSheetsMetrics(env) {
  const spreadsheetId = env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = env.GOOGLE_SHEETS_RANGE;
  const apiKey = env.GOOGLE_SHEETS_API_KEY;

  if (!spreadsheetId || !range || !apiKey) {
    throw new Error(
      "Missing Google Sheets configuration. Expected GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_RANGE, and GOOGLE_SHEETS_API_KEY."
    );
  }

  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}`
  );
  url.searchParams.set("key", apiKey);
  url.searchParams.set("majorDimension", "ROWS");
  url.searchParams.set("valueRenderOption", "UNFORMATTED_VALUE");

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const rows = payload.values ?? [];
  const raw = {};

  for (const row of rows) {
    const [key, value] = row;
    if (!key) continue;
    raw[normalizeKey(key)] = value;
  }

  return coerceMetrics(raw, "google_sheets");
}

async function readAirtableMetrics(env) {
  const pat = env.AIRTABLE_PAT;
  const baseId = env.AIRTABLE_BASE_ID;
  const table = env.AIRTABLE_TABLE_NAME;
  const view = env.AIRTABLE_VIEW;

  if (!pat || !baseId || !table) {
    throw new Error(
      "Missing Airtable configuration. Expected AIRTABLE_PAT, AIRTABLE_BASE_ID, and AIRTABLE_TABLE_NAME."
    );
  }

  const url = new URL(`https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(table)}`);
  if (view) url.searchParams.set("view", view);
  url.searchParams.set("maxRecords", "20");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Airtable request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const records = payload.records ?? [];
  const raw = {};

  for (const record of records) {
    const fields = record.fields ?? {};

    if (fields.Metric || fields.metric || fields.Key || fields.key || fields.Name || fields.name) {
      const key = fields.Metric ?? fields.metric ?? fields.Key ?? fields.key ?? fields.Name ?? fields.name;
      const value =
        fields.Value ?? fields.value ?? fields.Amount ?? fields.amount ?? fields.Text ?? fields.text ?? null;
      if (key && value !== null) raw[normalizeKey(key)] = value;
    }

    for (const [fieldKey, fieldValue] of Object.entries(fields)) {
      raw[normalizeKey(fieldKey)] = fieldValue;
    }
  }

  return coerceMetrics(raw, "airtable");
}

export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  if (req.method && req.method !== "GET") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const source = process.env.METRICS_SOURCE ?? DEFAULT_SOURCE;

  try {
    let metrics;

    if (source === "google_sheets") {
      metrics = await readGoogleSheetsMetrics(process.env);
    } else if (source === "airtable") {
      metrics = await readAirtableMetrics(process.env);
    } else {
      metrics = readManualMetrics(process.env);
    }

    return sendJson(res, 200, metrics);
  } catch (error) {
    console.error("Failed to load metrics", {
      source,
      error: error instanceof Error ? error.message : error,
    });

    return sendJson(res, 500, {
      error: PUBLIC_METRICS_ERROR,
    });
  }
}
