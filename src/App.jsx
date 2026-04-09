import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import founderPortrait from "./assets/tayo-salawu-outpaint-themed.jpeg";
import ibrahimAkoredePortrait from "./assets/ibrahim-akorede-themed.jpeg";
import yemiAdedejiPortrait from "./assets/yemi-adedeji-themed-v3.jpeg";

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
        "The fund is designed for Nigerian graduates in the United States who are experiencing financial strain while waiting for work authorization or facing a similar transition-related gap.",
    },
    {
      question: "How is support decided?",
      answer:
        "Applications are reviewed based on eligibility, urgency, and available funds. Support is intended to be one-time relief for essential needs during a temporary difficult period.",
    },
    {
      question: "What kind of expenses can this help with?",
      answer:
        "Support may help with urgent basics like groceries, rent pressure, transportation, and other immediate essentials while someone is waiting for stability.",
    },
    {
      question: "How can I ask a question before applying?",
      answer:
        "Use the contact section below to email the team directly if you need clarity on eligibility, documentation, or how the process works.",
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
        "Tayo is an AI and IT technical leader with over a decade of experience in enterprise technology strategy, platform transformation, and scalable digital solutions. He has led impactful initiatives across complex environments, helping shape systems, strategy, and innovation with a practical, people-centered approach.\n\nHe is dedicated to supporting efforts that preserve stability, dignity, and opportunity when they matter.",
    },
    {
      name: "Yemi Adedeji",
      role: "Director & Secretary",
      image: yemiAdedejiPortrait,
      alt: "Portrait of Yemi Adedeji",
      imageClassName: "object-[center_18%]",
      instagram: "https://www.instagram.com/deyemzy_/",
      summary:
        "Yemi is a Cloud Platform Architect and DevSecOps Engineer with deep expertise in AWS, cloud security, and infrastructure engineering. He has led critical cloud initiatives across enterprise and public sector environments, delivering secure, scalable, and compliant systems.\n\nHe is passionate about designing resilient solutions and backing initiatives that create stability and possibility during pivotal moments.",
    },
    {
      name: "Ibrahim Akorede",
      role: "Director & Treasurer",
      image: ibrahimAkoredePortrait,
      alt: "Portrait of Ibrahim Akorede",
      imageClassName: "object-[center_18%]",
      instagram: "https://www.instagram.com/yomi.ai/",
      summary:
        "Ibrahim is a Technical Project Manager with deep expertise in cloud contact center implementations, stakeholder governance, and AWS-architected solutions. He has led cross-functional initiatives across complex delivery environments, helping ensure accountability, structure, and strong operational execution.\n\nHe is driven to apply disciplined leadership in ways that strengthen communities.",
    },
  ];

  const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const closeMenu = () => setMobileMenuOpen(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_DONATE_URL);
      alert("Link copied! Share it anywhere.");
    } catch {
      alert("Copy failed — please copy manually.");
    }
  };

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
            <a href="#donate" className="hover:text-emerald-700">Donate</a>
            <a href="#apply" className="hover:text-emerald-700">Apply</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openExternal(PRIMARY_DONATE_URL)}
              className="hidden rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:inline-flex"
            >
              Donate
            </button>

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
              <a href="#donate" onClick={closeMenu} className="hover:text-emerald-700">Donate</a>
              <a href="#apply" onClick={closeMenu} className="hover:text-emerald-700">Apply</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-emerald-700">Contact</a>
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="mt-2 rounded-xl bg-emerald-700 px-4 py-2 text-left text-white"
              >
                Donate
              </button>
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

        <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-[3.35rem] md:text-[3.9rem] md:leading-[1.04]">
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

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              We support graduates facing work authorization delays and short-term financial pressure while they wait to begin work legally in the United States.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="w-full rounded-2xl bg-emerald-700 px-6 py-3 text-center font-semibold text-white shadow-sm sm:w-auto"
              >
                Donate to Support a Graduate
              </button>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl border px-6 py-3 text-center sm:w-auto"
              >
                Apply for Emergency Support
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">Transparent • Community-driven • One-time direct support</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Donations help protect essentials and peace of mind while graduates wait for legal authorization to begin work.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-80 blur-2xl" />
            <div className="relative rounded-3xl border bg-white p-6 shadow-lg">
              <div className="text-sm text-slate-500">Campaign Overview</div>
              <div className="mt-1 text-3xl font-bold">Current fundraiser</div>
              <p className="mt-3 text-sm text-slate-600">
                Support the active GoFundMe campaign and view the latest public totals directly on the fundraiser page.
              </p>
              <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <span className="font-semibold">Current campaign goal: $25,000.</span> Contributions of any size help reduce pressure on graduates facing a temporary delay.
              </div>
              <div className="mt-4 border-t pt-4 text-sm text-slate-500">
                Applications are reviewed carefully and support is distributed directly to eligible applicants.
              </div>
              <div className="mt-5">
                <a
                  href={PRIMARY_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  View fundraiser on GoFundMe
                </a>
              </div>
            </div>
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
                  This nonprofit initiative supports Nigerian graduates caught between completing their education in the United States and receiving the legal authorization they need to start work, earn income, and move forward with dignity.
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
              Donors give because a temporary administrative delay can quickly become housing stress, food insecurity, and financial instability for graduates who are ready to work but legally unable to begin yet.
            </p>
          </div>
        </section>

        <section id="about" className="border-t border-green-100 bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Leadership</div>
              <h2 className="mt-3 text-3xl font-bold">A board-led nonprofit built for trust, relief, and accountability</h2>
              <p className="mt-4 leading-7 text-slate-600">
                The Nigerian Bridge Fund is not a sole-proprietor initiative. It is led by a growing board committed to responsible stewardship, transparent support, and practical relief for Nigerian graduates in the United States facing work authorization delays.
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
                  The Nigerian Bridge Fund was created after seeing how administrative and immigration delays can place recent Nigerian graduates in the United States under severe financial pressure through no fault of their own.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  These are graduates who have completed their education, secured opportunities, and are ready to contribute. This initiative exists to provide temporary support while they wait for the authorization needed to begin working legally.
                </p>
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

        <section id="how" className="mx-auto max-w-7xl border-t border-blue-100 px-4 py-10 sm:px-6 sm:py-16">
          <h2 className="text-center text-3xl font-bold">How emergency support for applicants works</h2>
          <div className="mt-8 grid gap-4 text-center sm:mt-10 sm:gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">Apply</div>
              <p className="mt-2 text-sm text-slate-600">
                Nigerian graduates submit a short support application with verification
              </p>
            </div>
            <div>
              <div className="font-semibold">Review</div>
              <p className="mt-2 text-sm text-slate-600">
                Applications are reviewed based on eligibility, urgency, and available funds
              </p>
            </div>
            <div>
              <div className="font-semibold">Support</div>
              <p className="mt-2 text-sm text-slate-600">
                Approved applicants receive one-time emergency financial assistance
              </p>
            </div>
          </div>
        </section>

        <section id="live-totals" className="mx-auto max-w-7xl border-t border-slate-200 px-4 py-8 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Current Fundraiser</div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Support the campaign directly on GoFundMe</h3>
            <div className="mt-5 rounded-2xl bg-emerald-50 px-5 py-4 text-left text-emerald-950">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Campaign Goal</div>
              <div className="mt-2 text-3xl font-bold">$25,000</div>
              <p className="mt-3 text-sm leading-6 text-emerald-900">
                Visit the official GoFundMe campaign page to view the latest amount raised, current progress, and donation activity.
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              GoFundMe remains the source of truth for the latest public totals, campaign progress, and donation activity.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Donate on GoFundMe
              </button>
              <a
                href={PRIMARY_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                View latest campaign totals
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-5 sm:px-6 sm:py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Transparency Dashboard</div>
                <h3 className="mt-2 max-w-3xl text-xl font-bold text-slate-900 sm:text-2xl lg:text-[2rem] lg:leading-tight">
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
              {[
                {
                  label: "Total Received",
                  helper: "Funds received into the initiative",
                  accent: "border-emerald-200",
                  value:
                    metrics.status === "ready"
                      ? formatCurrency(metrics.data.totalRaised, metrics.data.currency)
                      : "Loading...",
                },
                {
                  label: "Support Distributed",
                  helper: "Funds already deployed to support graduates",
                  accent: "border-amber-200",
                  value:
                    metrics.status === "ready"
                      ? formatCurrency(metrics.data.deployedFunds, metrics.data.currency)
                      : "Loading...",
                },
                {
                  label: "Current Balance",
                  helper: "Funds currently available for impact",
                  accent: "border-blue-200",
                  value:
                    metrics.status === "ready"
                      ? formatCurrency(metrics.data.currentBalance, metrics.data.currency)
                      : "Loading...",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`rounded-[1.5rem] border ${card.accent} bg-white p-5 shadow-sm`}
                >
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">{card.label}</div>
                  <div className="mt-3 break-words text-2xl font-bold text-slate-900 sm:text-3xl">
                    {card.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.helper}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
              {metrics.status === "ready" ? (
                <p>
                  {metrics.data.note ??
                    "These figures are maintained by the team and published here to support transparency around funds received, support distributed, and available balance."}
                </p>
              ) : metrics.status === "error" ? (
                <p>
                  Transparency data is temporarily unavailable. You can still view the fundraiser directly on GoFundMe while the dashboard source is being configured.
                </p>
              ) : (
                <p>Loading transparency data...</p>
              )}
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-amber-100 bg-amber-50/60 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Testimonial</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">A real story behind the waiting</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Behind every delayed authorization is a graduate trying to stay steady, care for family, and hold on to hope.
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
                    {testimonial.quote}
                  </p>
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
              There is no fixed giving cap on this campaign. Every contribution, large or small, helps strengthen the relief available to Nigerian graduates navigating a temporary work authorization delay.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm"
              >
                Donate any amount on GoFundMe
              </button>
              <a
                href={PRIMARY_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700"
              >
                View fundraiser details
              </a>
            </div>
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
                This section is here to answer the questions people are most likely to ask before emailing the team.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-amber-100 bg-white px-5 py-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-emerald-100 bg-white px-4 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact Us</div>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Questions about the nonprofit or support process?</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  If you have questions about eligibility, donations, partnerships, or the mission of the fund, reach out by email and the team will respond as soon as possible.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-6 inline-flex rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-sm"
                >
                  Email the team
                </a>
                <p className="mt-3 text-sm text-slate-500">
                  To reduce spam and keep communication manageable, inquiries are handled through a shared email inbox.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Question about support application")}`}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-emerald-300"
                >
                  <div className="font-semibold text-slate-900">Application Questions</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Reach out if you are unsure whether you qualify or need clarity before applying.
                  </p>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Donation or partnership inquiry")}`}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-emerald-300"
                >
                  <div className="font-semibold text-slate-900">Donation and Partnership Questions</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use this for sponsorships, collaborations, media outreach, or donor-related questions.
                  </p>
                </a>

                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <div className="font-semibold text-slate-900">Primary Email</div>
                  <p className="mt-2 text-sm text-slate-600">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-700 via-emerald-700 to-blue-700 px-4 py-10 text-center text-white sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold">Help a Nigerian graduate stay hopeful while they wait</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7">
            Your donation helps provide stability for Nigerian graduates navigating a temporary but deeply challenging work authorization delay. It reminds someone at the start of their career that this delay does not have to define their future.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openExternal(PRIMARY_DONATE_URL)}
              className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow-sm sm:w-auto"
            >
              Donate to the fund
            </button>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/30 px-3 py-2">
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
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-6px_20px_rgba(15,23,42,0.08)] backdrop-blur xl:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Live fundraiser
              </div>
              <div className="truncate text-sm text-slate-700">Every gift helps another graduate stay afloat</div>
            </div>
            <button
              onClick={() => openExternal(PRIMARY_DONATE_URL)}
              className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Donate Now
            </button>
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
      <SpeedInsights />
    </div>
  );
}
