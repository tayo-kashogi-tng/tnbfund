import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import founderPortrait from "./assets/tayo-salawu-outpaint-themed.jpeg";
import ibrahimAkoredePortrait from "./assets/ibrahim-akorede-themed.jpeg";
import yemiAdedejiPortrait from "./assets/yemi-adedeji-themed-v3.jpeg";

const PAYPAL_HOSTED_BUTTON_ID = "925WKXMXYYL6C";
const PAYPAL_DONATE_URL = `https://www.paypal.com/donate/?hosted_button_id=${PAYPAL_HOSTED_BUTTON_ID}`;

function PayPalDonateButton({ className = "" }) {
  return (
    <a
      href={PAYPAL_DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[#c9def7] bg-[#ffc439] px-5 py-2.5 text-sm font-semibold text-[#003087] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffb800] ${className}`}
    >
      Donate on PayPal
    </a>
  );
}

function DonationChoicePair({
  donateUrl,
  centered = false,
  stackedOnMobile = false,
  withTopMargin = true,
  goFundMeLabel = "Donate on GoFundMe",
  goFundMeClassName = "",
  equalWidth = false,
  compact = false,
}) {
  const layoutClassName = `${centered ? "justify-center" : ""} ${withTopMargin ? "mt-6" : ""} flex flex-wrap items-stretch gap-3 ${stackedOnMobile ? "flex-col sm:flex-row" : ""}`;
  const sharedButtonClassName = compact
    ? "min-h-[52px] rounded-2xl px-5 py-3 text-base"
    : "min-h-[46px] rounded-xl px-5 py-2.5 text-sm";
  const widthClassName = equalWidth ? "flex-1 min-w-[220px]" : "";

  return (
    <div className={layoutClassName}>
      <a
        href={donateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-800 ${sharedButtonClassName} ${widthClassName} bg-emerald-700 ${goFundMeClassName}`}
      >
        {goFundMeLabel}
      </a>
      <PayPalDonateButton className={`${sharedButtonClassName} ${widthClassName}`} />
    </div>
  );
}

function SocialIcon({ label, children, href, onClick }) {
  if (href) {
    return (
      <a
        aria-label={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full p-2 transition hover:bg-white/10"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="rounded-full p-2 transition hover:bg-white/10"
      type="button"
    >
      {children}
    </button>
  );
}

function MapPinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 0 0 3.2 5a2.01 2.01 0 0 0 2.03 2 2.01 2.01 0 0 0 2.02-2A2 2 0 0 0 5.25 3ZM20.8 13.06c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.37 1.87V8.5H9.74c.05.9 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.54V20H20.8v-6.94Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.35l.4-3h-2.75V9.1c0-.87.24-1.46 1.5-1.46H16.4V5.02c-.24-.03-1.05-.1-2-.1-1.98 0-3.4 1.2-3.4 3.43V11H8.7v3H11v7h2.5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H21l-4.58 5.24L21.8 21h-5.62l-4.4-5.75L6.76 21H4.64l4.9-5.6L2.4 3h5.76l3.97 5.24L18.9 3Zm-.98 16.3h1.17L7.52 4.62H6.26l11.66 14.69Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" rx="2" />
      <path
        d="m5 7 7 6 7-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoardMemberCard({
  name,
  role,
  image,
  alt,
  summary,
  imageClassName,
  instagram,
  placeholder = false,
}) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-100 via-white to-emerald-100 opacity-70 blur-xl" />
      <div className="relative">
        {placeholder ? (
          <div className="flex h-[24rem] items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-10">
            <img
              src="/icons.svg"
              alt="The Nigerian Bridge Fund logo"
              className="h-32 w-32 opacity-90 drop-shadow-[0_20px_40px_rgba(15,23,42,0.35)]"
            />
          </div>
        ) : (
          <img
            src={image}
            alt={alt}
            className={`h-[24rem] w-full object-cover brightness-[1.03] saturate-[1.02] ${imageClassName ?? "object-center"}`}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent px-6 pb-6 pt-16 text-white">
          <div className="text-xl font-semibold">{name}</div>
          <div className="mt-1 text-sm text-white/80">{role}</div>
        </div>
      </div>
      <div className="relative border-t border-slate-100 px-6 py-5">
        <p className="text-sm leading-6 text-slate-600">{summary}</p>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100"
          >
            <InstagramIcon />
            <span>View Instagram</span>
          </a>
        )}
      </div>
    </article>
  );
}

function formatCurrency(amount, currency) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toLocaleString("en-US")}`;
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showFullStory, setShowFullStory] = useState(false);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const [emailFeedback, setEmailFeedback] = useState(null);
  const [shareFeedback, setShareFeedback] = useState(null);
  const [metrics, setMetrics] = useState({
    status: "loading",
    data: null,
    error: null,
  });

  const CONTACT_EMAIL = "info@thenigerianbridgefund.org";
  const APPLICATION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd52rxfTvOw64VYkuiv7B_NZiN-YdO7NYpyl5MpnBRloZW27A/viewform";
  const PRIMARY_DONATE_URL =
    "https://www.gofundme.com/f/the-bridge-fund-2026-supporting-nigerian-graduates-in-amer?_gl=1*12c8kbs*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwyr3OBhD0ARIsALlo-OkugAhwTxtzh_9tEl9_jpMFOrUGa3Ae62cPvSipadhuJ0JbN8jXwrwaAvl7EALw_wcB&gbraid=0AAAAADj5gIAf_ykZj_YAe7QyMyHGUhZX2";
  const PAGE_URL = PRIMARY_DONATE_URL;

  const encodedPage = encodeURIComponent(PAGE_URL);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPage}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedPage}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedPage}&text=${encodeURIComponent(
      "Support The Nigerian Bridge Fund"
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent("Support The Nigerian Bridge Fund: " + PAGE_URL)}`,
    email: `mailto:?subject=${encodeURIComponent("Support The Nigerian Bridge Fund")}&body=${encodeURIComponent(
      `I wanted to share this initiative with you: ${PAGE_URL}`
    )}`,
    instagram: PAGE_URL,
  };

  const testimonials = [
    {
      shortQuote:
        "Living in the United States without work authorization has been deeply demanding, especially while caring for my daughter and trying to stay hopeful.",
      quote:
        "Living in the United States, where bills never seem to stop and the cost of survival is high, life without a job or a driver's license has been incredibly demanding, especially as I care for my daughter. After completing my master's degree in December 2025, I have faced one immigration hurdle after another, each requiring significant financial sacrifice. Just as I was celebrating that my work authorization was on the way, my country was suddenly placed on a temporary hold. Since then, I have been surviving on my savings and the kindness of loved ones while doing everything I can to provide for my daughter. Even through these setbacks, I remain hopeful and resilient. My greatest motivation is building a stable future for both of us, and I am determined to keep pushing forward.",
      name: "Temitope",
      location: "Houston, Texas",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for support?",
      answer:
        "The fund is for Nigerian graduates in the United States facing financial strain while waiting for work authorization or a similar transition-related gap.",
    },
    {
      question: "How is support decided?",
      answer:
        "Applications are reviewed for eligibility, urgency, and available funds. Support is intended as one-time relief for essential needs during a temporary gap.",
    },
    {
      question: "What kind of expenses can this help with?",
      answer:
        "Support may help cover groceries, rent pressure, transportation, and other urgent essentials during a temporary waiting period.",
    },
    {
      question: "How can I ask a question before applying?",
      answer:
        "If your question is not covered here, use the support card below to copy the team email or open your email app directly.",
    },
  ];

  const boardMembers = [
    {
      name: "Tayo Salawu",
      role: "Founder & Director",
      image: founderPortrait,
      alt: "Portrait of Tayo Salawu",
      imageClassName: "object-center brightness-[0.98] saturate-[0.92] contrast-[1.04]",
      instagram: "https://www.instagram.com/tayokashogi/",
      summary:
        "Tayo is an AI and IT leader with 10+ years of experience leading strategic platform transformation and complex digital systems.\n\nHe brings a practical, people-centered approach to efforts that protect stability, dignity, and opportunity when they matter most.",
    },
    {
      name: "Yemi Adedeji",
      role: "Director & Secretary",
      image: yemiAdedejiPortrait,
      alt: "Portrait of Yemi Adedeji",
      imageClassName: "object-[center_18%]",
      instagram: "https://www.instagram.com/deyemzy_/",
      summary:
        "Yemi is a Cloud Platform Architect and DevSecOps Engineer with deep experience in AWS, cloud security, and infrastructure engineering.\n\nHe builds secure, resilient systems and backs initiatives that create stability and possibility during pivotal moments.",
    },
    {
      name: "Ibrahim Akorede",
      role: "Director & Treasurer",
      image: ibrahimAkoredePortrait,
      alt: "Portrait of Ibrahim Akorede",
      imageClassName: "object-[center_18%]",
      instagram: "https://www.instagram.com/yomi.ai/",
      summary:
        "Ibrahim is a Technical Project Manager with deep experience in cloud contact centers, stakeholder governance, and AWS-architected solutions.\n\nHe brings operational discipline and accountability to community efforts that strengthen stability.",
    },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_DONATE_URL);
      setShareFeedback({
        tone: "success",
        message: "Link copied. You can share it anywhere.",
      });
    } catch {
      setShareFeedback({
        tone: "error",
        message: "Copy failed. Please copy the fundraiser link manually.",
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setEmailFeedback({
        tone: "success",
        message: "Email address copied. You can paste it anywhere.",
      });
    } catch {
      setEmailFeedback({
        tone: "error",
        message: "Copy failed. Please copy the email address manually.",
      });
    }
  };

  useEffect(() => {
    if (!shareFeedback) return undefined;

    const timeoutId = window.setTimeout(() => {
      setShareFeedback(null);
    }, 2500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shareFeedback]);

  useEffect(() => {
    if (!emailFeedback) return undefined;

    const timeoutId = window.setTimeout(() => {
      setEmailFeedback(null);
    }, 2500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [emailFeedback]);

  useEffect(() => {
    let cancelled = false;

    async function loadMetrics() {
      try {
        const response = await fetch("/api/metrics");
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load transparency metrics");
        }

        if (!cancelled) {
          setMetrics({
            status: "ready",
            data: payload,
            error: null,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setMetrics({
            status: "error",
            data: null,
            error: error instanceof Error ? error.message : "Unable to load transparency metrics",
          });
        }
      }
    }

    loadMetrics();

    return () => {
      cancelled = true;
    };
  }, []);

  const transparencyValueText =
    metrics.status === "ready"
      ? {
          totalRaised: formatCurrency(metrics.data.totalRaised, metrics.data.currency),
          deployedFunds: formatCurrency(metrics.data.deployedFunds, metrics.data.currency),
          currentBalance: formatCurrency(metrics.data.currentBalance, metrics.data.currency),
        }
      : metrics.status === "error"
        ? {
            totalRaised: "Temporarily unavailable",
            deployedFunds: "Temporarily unavailable",
            currentBalance: "Temporarily unavailable",
          }
        : {
            totalRaised: "Loading...",
            deployedFunds: "Loading...",
            currentBalance: "Loading...",
          };

  const transparencyCards = [
    {
      label: "Total Received",
      helper: metrics.data?.breakdown ? "Funds received across all sources" : "Funds received into the initiative",
      accent: "border-emerald-200",
      value: transparencyValueText.totalRaised,
    },
    {
      label: "Support Distributed",
      helper: "Funds already used for support",
      accent: "border-amber-200",
      value: transparencyValueText.deployedFunds,
    },
    {
      label: "Current Balance",
      helper: "Funds currently available for impact",
      accent: "border-blue-200",
      value: transparencyValueText.currentBalance,
    },
  ];

  const transparencyBreakdown =
    metrics.status === "ready" && metrics.data?.breakdown ? metrics.data.breakdown : null;

  const transparencyBreakdownCards = transparencyBreakdown
    ? [
        {
          label: "GoFundMe",
          value: formatCurrency(transparencyBreakdown.goFundMeReceived, metrics.data.currency),
          accent: "border-emerald-100 bg-emerald-50/70",
        },
        {
          label: "PayPal",
          value: formatCurrency(transparencyBreakdown.paypalReceived, metrics.data.currency),
          accent: "border-amber-100 bg-amber-50/70",
        },
        {
          label: "Other",
          value: formatCurrency(transparencyBreakdown.otherReceived, metrics.data.currency),
          accent: "border-blue-100 bg-blue-50/70",
        },
      ]
    : [];

  const transparencyMethodologyNote =
    metrics.status === "ready"
      ? metrics.data.note ??
        "Total received includes reconciled contributions from GoFundMe, PayPal, and other approved sources."
      : null;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
        <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-blue-600" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-2">
            <div className="max-w-[14rem] text-base font-semibold leading-tight sm:max-w-none sm:text-lg">
              The Nigerian Bridge Fund
            </div>
            <div className="text-[11px] leading-tight text-slate-500 sm:text-xs">
              Community-led nonprofit initiative
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#how" className="hover:text-emerald-700">How it Works</a>
            <a href="#live-totals" className="hover:text-emerald-700">Transparency</a>
            <a href="#apply" className="hover:text-emerald-700">Apply</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#donate"
              className="hidden rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:inline-flex"
            >
              Donate
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#about" onClick={closeMenu} className="hover:text-emerald-700">About</a>
              <a href="#how" onClick={closeMenu} className="hover:text-emerald-700">How it Works</a>
              <a href="#live-totals" onClick={closeMenu} className="hover:text-emerald-700">Transparency</a>
              <a href="#apply" onClick={closeMenu} className="hover:text-emerald-700">Apply</a>
              <a href="#faq" onClick={closeMenu} className="hover:text-emerald-700">FAQ</a>
              <a
                href="#donate"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-emerald-700 px-4 py-2 text-left text-white"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="border-b border-amber-100 bg-amber-50/80">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs leading-relaxed text-amber-900 sm:px-6 sm:text-sm">
            <span className="font-semibold">Community-led emergency relief for Nigerian graduates in the U.S.</span>
            <span className="hidden sm:inline">Every gift helps protect stability during a difficult waiting period.</span>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-start gap-7 px-4 py-7 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <div className="max-w-2xl">
            <h1 className="text-[2.7rem] font-bold leading-[1.02] sm:text-[3.35rem] md:text-[3.9rem] md:leading-[1.04]">
              Emergency relief for Nigerian graduates in the U.S.
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <span>🇳🇬 Nigeria</span>
              <span>→</span>
              <span>🇺🇸 United States</span>
            </div>

            <div className="mt-4">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                #LiftTheHold
              </span>
            </div>

            <p className="mt-5 max-w-xl text-[1.05rem] leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              We support Nigerian graduates facing work authorization delays and financial pressure while they wait to begin work legally in the US.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              The fund exists to protect essentials and help people stay steady during a difficult gap.
            </p>

            <div className="mt-7 grid gap-3 sm:max-w-xl sm:grid-cols-2">
              <a
                href="#donate"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-center text-base font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                See ways to give
              </a>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl border border-slate-900 bg-white px-5 py-3 text-center text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-700"
              >
                Apply for Emergency Support
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">Transparent • Community-driven • One-time direct support</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-80 blur-2xl" />
            <div className="relative rounded-3xl border bg-white p-5 shadow-lg sm:p-7">
              <div className="text-sm text-slate-500">Campaign Overview</div>
              <div className="mt-2 text-3xl font-bold leading-tight">Current fundraiser</div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Support the active fundraiser and choose the giving option that works best for you.
              </p>
              <div className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
                <span className="font-semibold">Current campaign goal: $25,000.</span> Contributions of any size help reduce pressure on graduates facing a temporary delay.
              </div>
              <div className="mt-5 border-t pt-5 text-sm leading-6 text-slate-500">
                Applications are reviewed carefully and support is distributed directly to eligible applicants.
              </div>
              <div className="mt-6">
                <DonationChoicePair
                  donateUrl={PRIMARY_DONATE_URL}
                  goFundMeLabel="Donate on GoFundMe"
                  equalWidth
                  compact
                />
                <p className="mt-3 text-sm text-slate-500">
                  The transparency section below remains the source of truth for this fund.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 sm:pb-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Board-led oversight",
                body: "Managed by a growing board committed to responsible stewardship.",
              },
              {
                title: "Transparent reporting",
                body: "Fund activity and balances are published in the transparency section below.",
              },
              {
                title: "Careful applicant review",
                body: "Support decisions are reviewed based on eligibility, urgency, and available funds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="bridge" className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-green-50 via-white to-blue-50 p-6 shadow-sm sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Support between graduation and employment
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Bridging the gap between graduation and legal work authorization.
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This initiative supports Nigerian graduates caught between finishing school in the US and getting the authorization they need to work, earn income, and move forward with dignity.
                </p>
              </div>

              <div className="relative h-64 rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <div className="absolute left-5 top-10 flex items-center gap-2 text-sm font-medium text-green-700 sm:left-8 sm:top-12">
                  <MapPinIcon className="h-4 w-4" /> Lagos
                </div>
                <div className="absolute bottom-10 right-5 flex items-center gap-2 text-sm font-medium text-blue-700 sm:bottom-12 sm:right-8">
                  <MapPinIcon className="h-4 w-4" /> United States
                </div>
                <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="bridgeLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#16a34a" />
                      <stop offset="50%" stopColor="#94a3b8" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <circle cx="70" cy="70" r="10" fill="#16a34a" />
                  <circle cx="330" cy="150" r="10" fill="#2563eb" />
                  <path
                    d="M 80 75 C 160 20, 240 205, 320 145"
                    stroke="url(#bridgeLine)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 110 115 L 145 115 M 172 115 L 207 115 M 234 115 L 269 115"
                    stroke="#cbd5e1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  The bridge fund
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
          <div className="rounded-[2rem] border border-amber-100 bg-amber-50 px-6 py-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-amber-800">Why donors give</div>
            <p className="mt-2 leading-7 text-slate-700">
              Administrative delays can quickly become housing stress, food insecurity, and financial instability for graduates who are ready to work but still unable to begin.
            </p>
          </div>
        </section>

        <section id="about" className="border-t border-green-100 bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Leadership</div>
              <h2 className="mt-3 text-3xl font-bold">A board-led nonprofit built for trust, relief, and accountability</h2>
              <p className="mt-4 leading-7 text-slate-600">
                The Nigerian Bridge Fund is led by a growing board committed to responsible stewardship, transparent support, and practical relief for Nigerian graduates in the United States facing work authorization delays.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {boardMembers.map((member) => (
                <BoardMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  alt={member.alt}
                  summary={member.summary}
                  imageClassName={member.imageClassName}
                  instagram={member.instagram}
                  placeholder={member.placeholder}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-bold">Why The Nigerian Bridge Fund exists</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  The fund provides temporary support for recent Nigerian graduates in the U.S. who are ready to work but delayed by administrative hurdles outside their control.
                </p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">At a glance</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• short-term relief during a temporary gap</li>
                    <li>• support for graduates already positioned to move forward</li>
                    <li>• board-led oversight with a focus on dignity and stability</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setShowFullStory((value) => !value)}
                  className="mt-4 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                >
                  {showFullStory ? "Show less" : "Read more about the fund"}
                </button>
                {showFullStory && (
                  <p className="mt-3 leading-7 text-slate-600">
                    These are graduates who have finished school, secured opportunities, and are ready to contribute. The initiative helps them stay afloat while they wait for legal work authorization.
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Work authorization delays can mean:</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• choosing between groceries and other basic bills</li>
                  <li>• struggling to cover rent while waiting for authorization</li>
                  <li>• carrying emotional stress at the very start of adult life</li>
                </ul>
                <p className="mt-4 font-medium text-slate-800">Community-led. Transparent. Built for relief.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl border-t border-blue-100 px-4 py-9 sm:px-6 sm:py-16">
          <h2 className="text-center text-3xl font-bold">How emergency support for applicants works</h2>
          <div className="mt-8 grid gap-4 text-center sm:mt-10 sm:gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">Apply</div>
              <p className="mt-2 text-sm text-slate-600">
                Submit a short application and basic verification
              </p>
            </div>
            <div>
              <div className="font-semibold">Review</div>
              <p className="mt-2 text-sm text-slate-600">
                The team reviews eligibility, urgency, and available funds
              </p>
            </div>
            <div>
              <div className="font-semibold">Support</div>
              <p className="mt-2 text-sm text-slate-600">
                Approved applicants receive one-time emergency assistance
              </p>
            </div>
          </div>
        </section>

        <section id="live-totals" className="mx-auto max-w-7xl border-t border-slate-200 px-4 py-7 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Current Fundraiser</div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Current public fundraiser</h3>
            <div className="mt-5 rounded-2xl bg-emerald-50 px-5 py-4 text-left text-emerald-950">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Campaign Goal</div>
              <div className="mt-2 text-3xl font-bold">$25,000</div>
              <p className="mt-3 text-sm leading-6 text-emerald-900">
                Visit the public fundraiser page to see the latest campaign progress.
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Use this page for public campaign activity.
            </p>

            <a
              href={PRIMARY_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              View latest campaign info on GoFundMe
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Transparency Dashboard</div>
                <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl lg:text-[1.8rem] lg:leading-tight xl:whitespace-nowrap">
                  Funds received, support distributed, and current balance
                </h3>
              </div>
              {metrics.status === "ready" && metrics.data?.lastUpdated && (
                <div className="shrink-0 whitespace-nowrap text-sm text-slate-500">
                  Last updated: {metrics.data.lastUpdated}
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {transparencyCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-[1.5rem] border ${card.accent} bg-white p-5 shadow-sm`}
                >
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">{card.label}</div>
                  <div
                    className={`mt-3 break-words text-2xl font-bold sm:text-3xl ${
                      metrics.status === "ready" ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {card.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.helper}</p>
                </div>
              ))}
            </div>

            {metrics.status === "ready" ? (
              <div className={`mt-6 grid gap-4 ${transparencyBreakdown ? "xl:grid-cols-[0.9fr_1.1fr]" : ""}`}>
                {transparencyBreakdown && (
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Source breakdown
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Total received is reconciled across the contribution sources below.
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                      {transparencyBreakdownCards.map((source) => (
                        <div
                          key={source.label}
                          className={`rounded-xl border px-4 py-3 ${source.accent}`}
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {source.label}
                          </div>
                          <div className="mt-2 text-xl font-bold text-slate-900">{source.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    How totals are reconciled
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {transparencyMethodologyNote}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                      Figures are updated by the team after source records are reviewed and reconciled.
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                      Current balance reflects total received minus support already distributed.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                {metrics.status === "error" ? (
                  <p>
                    Transparency data is temporarily unavailable right now. You can still view the public fundraiser while the live dashboard reconnects.
                  </p>
                ) : (
                  <p>Loading transparency data...</p>
                )}
              </div>
            )}
          </div>
        </section>

        <section id="testimonials" className="border-t border-amber-100 bg-amber-50/60 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Testimonial</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">A real story behind the waiting</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Behind every delayed authorization is a graduate trying to stay steady, care for family, and keep hope alive.
              </p>
            </div>

            <div className="mt-8">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="text-5xl leading-none text-amber-300">"</div>
                  <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">
                    {showFullTestimonial ? testimonial.quote : testimonial.shortQuote}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowFullTestimonial((value) => !value)}
                    className="mt-4 text-sm font-semibold text-amber-800 transition hover:text-amber-900"
                  >
                    {showFullTestimonial ? "Show less" : "Read full story"}
                  </button>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="donate"
          className="mx-auto max-w-5xl border-t border-green-100 px-4 py-7 sm:px-6 sm:py-10"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-6 text-center shadow-sm sm:px-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Give Freely</div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Every amount makes a meaningful difference</h3>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Every contribution helps strengthen the relief available to Nigerian graduates facing a temporary work authorization delay.
            </p>
            <DonationChoicePair
              donateUrl={PRIMARY_DONATE_URL}
              centered
              goFundMeLabel="Donate on GoFundMe"
            />
          </div>
        </section>

        <section
          id="apply"
          className="border-t border-blue-100 bg-slate-50 px-4 py-10 text-center sm:px-6 sm:py-16"
        >
          <h2 className="text-3xl font-bold">Apply for emergency support</h2>
          <p className="mt-4 text-slate-600">If you are a Nigerian graduate in the U.S. and meet the eligibility criteria, submit your application below.</p>
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full rounded-xl bg-black px-6 py-3 text-white sm:w-auto"
          >
            Apply for Emergency Support
          </a>
        </section>

        <section id="faq" className="border-t border-amber-100 bg-amber-50/50 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">FAQ</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Common questions from applicants and donors</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                A quick guide to the questions people ask most before reaching out.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                      <span className="shrink-0 text-amber-700">
                        <ChevronIcon open={isOpen} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-amber-100 px-5 pb-5 pt-4">
                        <p className="leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Still have a question?
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Reach the team directly if you still need clarity
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    If your question is not covered above, copy the shared inbox address below or open your email app as a fallback.
                  </p>
                </div>

                <div className="grid gap-3 sm:min-w-[17rem]">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                  >
                    Copy email address
                  </button>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-slate-400"
                  >
                    Open email app
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Shared inbox</div>
                <div className="mt-2 break-all text-lg font-semibold text-slate-900 sm:text-xl">{CONTACT_EMAIL}</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  To reduce spam and keep communication manageable, inquiries are handled through one shared inbox.
                </p>
              </div>

              <div aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm">
                {emailFeedback && (
                  <p
                    className={`font-medium ${
                      emailFeedback.tone === "success" ? "text-emerald-700" : "text-amber-800"
                    }`}
                  >
                    {emailFeedback.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-700 via-emerald-700 to-blue-700 px-4 py-10 text-center text-white sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold">Help a Nigerian graduate stay hopeful while they wait</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7">
            Your donation helps provide stability for Nigerian graduates navigating a difficult work authorization delay. It reminds someone at the start of their career that this delay does not have to define their future.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <DonationChoicePair
              donateUrl={PRIMARY_DONATE_URL}
              centered
              withTopMargin={false}
              stackedOnMobile
              goFundMeLabel="Donate on GoFundMe"
              goFundMeClassName="bg-emerald-800/90 shadow-[0_10px_24px_rgba(6,95,70,0.25)] hover:bg-emerald-900 border border-emerald-500/30"
            />
            <div className="flex min-h-[46px] flex-wrap items-center justify-center gap-2 rounded-xl border border-white/30 px-3 py-2">
              <SocialIcon label="Share on LinkedIn" href={shareLinks.linkedin}><LinkedInIcon /></SocialIcon>
              <SocialIcon label="Share on Facebook" href={shareLinks.facebook}><FacebookIcon /></SocialIcon>
              <SocialIcon label="Share on X" href={shareLinks.twitter}><XIcon /></SocialIcon>
              <SocialIcon label="Share on WhatsApp" href={shareLinks.whatsapp}>
                <span className="text-xs font-bold">WA</span>
              </SocialIcon>
              <SocialIcon label="Copy Link" onClick={handleCopyLink}>
                <span className="text-xs font-bold">🔗</span>
              </SocialIcon>
              <SocialIcon label="Share by email" href={shareLinks.email}><MailIcon /></SocialIcon>
              <SocialIcon label="Open fund link" href={shareLinks.instagram}><InstagramIcon /></SocialIcon>
            </div>
            <div aria-live="polite" className="min-h-[1.5rem] text-sm">
              {shareFeedback && (
                <p
                  className={`font-medium ${
                    shareFeedback.tone === "success" ? "text-emerald-100" : "text-amber-100"
                  }`}
                >
                  {shareFeedback.message}
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-6px_20px_rgba(15,23,42,0.08)] backdrop-blur xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Live fundraiser
              </div>
              <div className="text-sm leading-5 text-slate-700 sm:truncate">Every gift helps another graduate stay afloat</div>
            </div>
            <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:flex sm:items-stretch">
              <a
                href={PRIMARY_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-emerald-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:px-4"
              >
                GoFundMe
              </a>
              <a
                href={PAYPAL_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#ffc439] px-3 py-2 text-sm font-semibold text-[#003087] shadow-sm sm:px-4"
              >
                PayPal
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t pb-28 pt-10 text-center text-sm text-slate-500 md:pb-10">
        <div className="mb-4 h-1 w-full bg-gradient-to-r from-green-600 via-white to-blue-600" />
        <p>The Nigerian Bridge Fund • Community-led • Transparent</p>
        <p className="mt-2">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald-700">
            {CONTACT_EMAIL}
          </a>
        </p>
      </footer>
      <Analytics />
    </div>
  );
}
