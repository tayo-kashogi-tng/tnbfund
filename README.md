# The Nigerian Bridge Fund

Static React + Vite site for The Nigerian Bridge Fund, deployed on Vercel.

## Security hardening

This project now includes a Vercel header configuration in [vercel.json](./vercel.json) with:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- long-term caching for built assets in `/assets`

### CSP notes

The site links out to GoFundMe and may evolve to include other trusted third-party services. The CSP is intentionally strict by default and should be updated carefully whenever you add:

- a form provider
- analytics
- a widget or embed
- an external image or font CDN

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Vercel deployment checklist

Use this checklist whenever you update the live site:

1. Confirm the correct production domain is attached in Vercel.
2. Confirm HTTPS is active on the production domain.
3. Turn on MFA for:
   GitHub
   Vercel
   Google account used for the application form
   domain registrar
4. Verify the Google Form and linked Sheet are only accessible to the minimum required admins.
5. Deploy the latest commit to Vercel.
6. After deployment, check the homepage and confirm:
   the GoFundMe donation links open correctly
   the Google Form link opens correctly
   email links still open correctly
   the FAQ, contact, transparency, and donation sections render normally
7. Confirm response headers in production. For example:

```bash
curl -I https://your-domain.example
```

Check for these headers:

- `content-security-policy`
- `strict-transport-security`
- `referrer-policy`
- `x-content-type-options`
- `x-frame-options`
- `permissions-policy`

8. If any new third-party service stops loading after a security change, review `Content-Security-Policy` first.
9. Avoid adding inline scripts, new third-party embeds, or new external services without reviewing the CSP.
10. Keep dependencies updated intentionally and deploy from the lockfile-backed install.

## Operational recommendations

- Use a dedicated shared inbox or aliases like `contact@...` and `support@...` if you move to a custom domain email setup.
- If you replace the public email with a contact form later, choose a provider with built-in anti-spam protection.
- If you collect more sensitive applicant data in the future, reconsider Google Forms and move to a workflow with stronger privacy and access controls.

## Transparency dashboard

This project now includes a simple transparency dashboard powered by a Vercel Function at `api/metrics.js`.

The site supports three modes:

- `manual`
- `google_sheets`
- `airtable`

Set the source with:

```bash
METRICS_SOURCE=manual
```

### Manual mode

This is the fastest option and works immediately with Vercel environment variables.

Required variables:

```bash
METRICS_SOURCE=manual
MANUAL_TOTAL_RAISED=10000
MANUAL_DEPLOYED_FUNDS=2500
MANUAL_CURRENT_BALANCE=7500
MANUAL_GOFUNDME_RECEIVED=7000
MANUAL_PAYPAL_RECEIVED=2500
MANUAL_OTHER_RECEIVED=500
MANUAL_CURRENCY=USD
MANUAL_LAST_UPDATED=2026-04-04
MANUAL_NOTE=Total received includes GoFundMe, PayPal, and other reconciled contributions.
```

### Google Sheets mode

Use this if you want the site to read values from a Google Sheet.

Required variables:

```bash
METRICS_SOURCE=google_sheets
GOOGLE_SHEETS_API_KEY=your_google_api_key
GOOGLE_SHEETS_SPREADSHEET_ID=your_sheet_id
GOOGLE_SHEETS_RANGE=Dashboard!A2:B7
```

Recommended sheet layout:

```text
gofundme_received 12000
paypal_received    3500
other_received      500
total_raised      16000
deployed_funds     4200
current_balance   11800
last_updated      2026-04-11
currency          USD
note              Total received includes GoFundMe, PayPal, and other reconciled contributions.
```

Notes:

- The simplest setup is a read-only sheet that is viewable by link.
- The function uses the official Google Sheets API `spreadsheets.values.get` endpoint.
- `total_raised` can be supplied directly, or derived from `gofundme_received + paypal_received + other_received`.

### Airtable mode

Use this if you want Airtable as the source of truth.

Required variables:

```bash
METRICS_SOURCE=airtable
AIRTABLE_PAT=your_airtable_personal_access_token
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Metrics
AIRTABLE_VIEW=Grid view
```

Recommended Airtable setup:

- Table name: `Metrics`
- One record per metric, with fields like:
  - `Metric`
  - `Value`

Example rows:

```text
Metric            Value
gofundme_received 12000
paypal_received    3500
other_received      500
total_raised      16000
deployed_funds     4200
current_balance   11800
last_updated      2026-04-11
currency          USD
note              Total received includes GoFundMe, PayPal, and other reconciled contributions.
```

Notes:

- The function uses Airtable's web API with a Personal Access Token.
- Airtable access depends on your Airtable workspace limits, not your Vercel plan.

## Vercel plan notes

This implementation can run on Vercel Hobby because Vercel Functions are available there.

However:

- Hobby is best for lightweight, low-traffic usage and testing.
- If this becomes a production transparency dashboard for an organization with regular traffic or stricter operational needs, Pro is the safer long-term choice.

For Airtable specifically:

- It can work on Vercel Hobby.
- The more important limit is Airtable API quota and rate limits, not Vercel itself.

For Google Sheets specifically:

- It can also work on Vercel Hobby.
- The main considerations are API key usage, sheet visibility, and your refresh/update process.
