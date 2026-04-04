import { useEffect, useState } from "react";
import founderPortrait from "./assets/hero.png";

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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyWidget, setShowStickyWidget] = useState(true);

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

  const tiers = [
    { amount: "$25", label: "Helps cover groceries" },
    { amount: "$50", label: "Helps cover essentials" },
    { amount: "$100", label: "Relieves immediate pressure" },
    { amount: "$250", label: "Supports urgent needs" },
    { amount: "$500", label: "Supports one graduate" },
  ];

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

  useEffect(() => {
    if (document.getElementById("gfm-script")) return;

    const script = document.createElement("script");
    script.src = "https://www.gofundme.com/static/js/embed.js";
    script.defer = true;
    script.id = "gfm-script";
    document.body.appendChild(script);
  }, []);

  const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const closeMenu = () => setMobileMenuOpen(false);
  const hideStickyWidget = () => setShowStickyWidget(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_DONATE_URL);
      alert("Link copied! Share it anywhere.");
    } catch {
      alert("Copy failed — please copy manually.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
        <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-blue-600" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <div>
            <div className="text-base font-semibold sm:text-lg">The Nigerian Bridge Fund</div>
            <div className="text-[11px] text-slate-500 sm:text-xs">Community-led nonprofit initiative</div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#bridge" className="hover:text-emerald-700">The Bridge</a>
            <a href="#testimonials" className="hover:text-emerald-700">Testimonials</a>
            <a href="#how" className="hover:text-emerald-700">How it Works</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
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
              <a href="#bridge" onClick={closeMenu} className="hover:text-emerald-700">The Bridge</a>
              <a href="#testimonials" onClick={closeMenu} className="hover:text-emerald-700">Testimonials</a>
              <a href="#how" onClick={closeMenu} className="hover:text-emerald-700">How it Works</a>
              <a href="#faq" onClick={closeMenu} className="hover:text-emerald-700">FAQ</a>
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
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs text-amber-900 sm:px-6 sm:text-sm">
            <span className="font-semibold">More people are stepping in to support this fund.</span>
            <span className="hidden sm:inline">Your gift can help support the next graduate.</span>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              A temporary delay should not define a graduate’s future.
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <span>🇳🇬 Nigeria</span>
              <span>→</span>
              <span>🇺🇸 United States</span>
            </div>

            <p className="mt-5 text-lg text-slate-600">
              Many recent Nigerian graduates in the U.S. are ready to begin their careers but are unable to work due to delays in employment authorization processing. For some, that delay means rent becomes stressful, food budgets shrink, and a moment that should feel hopeful starts to feel frightening. This fund exists to provide temporary, dignified support during that waiting period.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="w-full rounded-2xl bg-emerald-700 px-6 py-3 text-center font-semibold text-white shadow-sm sm:w-auto"
              >
                Support the Fund
              </button>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl border px-6 py-3 text-center sm:w-auto"
              >
                Apply for Support
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">Transparent • Community-driven • One-time direct support</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              A gift today can help protect someone’s housing, groceries, transportation, and peace of mind while they wait for the chance to start work.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-80 blur-2xl" />
            <div className="relative rounded-3xl border bg-white p-6 shadow-lg">
              <div className="text-sm text-slate-500">Current Campaign</div>
              <div className="mt-1 text-3xl font-bold">$25,000 Goal</div>
              <p className="mt-3 text-sm text-slate-600">
                Supporting up to 50 graduates with one-time $500 assistance.
              </p>
              <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <span className="font-semibold">$500 helps one graduate stay afloat.</span> Even smaller gifts matter when many people give together.
              </div>
              <div className="mt-4 border-t pt-4 text-sm text-slate-500">
                All applications are reviewed. Funds are distributed directly. Updates are shared regularly.
              </div>
            </div>
          </div>
        </section>

        <section id="bridge" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-green-50 via-white to-blue-50 p-8 shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  A bridge between two realities
                </p>
                <h2 className="mt-3 text-3xl font-bold">From graduation in hope to employment in waiting.</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This initiative sits at the intersection of Nigerian ambition and American opportunity. It exists to support graduates caught in the space between earning their degree and receiving the authorization needed to begin work.
                </p>
              </div>

              <div className="relative h-64 rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <div className="absolute left-8 top-12 flex items-center gap-2 text-sm font-medium text-green-700">
                  <MapPinIcon className="h-4 w-4" /> Lagos
                </div>
                <div className="absolute bottom-12 right-8 flex items-center gap-2 text-sm font-medium text-blue-700">
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
            <div className="text-sm font-semibold uppercase tracking-wide text-amber-800">Why people give</div>
            <p className="mt-2 leading-7 text-slate-700">
              This is not about charity for charity’s sake. It is about helping talented graduates through a temporary administrative gap so a short delay does not spiral into a much bigger setback.
            </p>
          </div>
        </section>

        <section id="about" className="border-t border-green-100 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-100 via-white to-emerald-100 opacity-90 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
                <div className="relative">
                  <img
                    src={founderPortrait}
                    alt="Portrait of founder Tayo Kashogi"
                    className="h-[26rem] w-full object-cover object-[center_28%] brightness-[1.03] saturate-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent px-6 pb-6 pt-16 text-white">
                    <div className="text-xl font-semibold">Tayo Kashogi</div>
                    <div className="mt-1 text-sm text-white/80">Founder</div>
                  </div>
                </div>
                <div className="border-t border-slate-100 px-6 py-5">
                  <div className="text-sm font-medium text-slate-900">Founder’s Note</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A community-led response to help Nigerian graduates navigate work authorization delays with dignity and temporary support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold">A note from the founder</h2>
              <p className="mt-4 leading-7 text-slate-600">
                This fund was created after seeing firsthand how administrative delays can place talented graduates in difficult financial situations through no fault of their own.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                These are individuals who have done everything right — completed their education, secured opportunities, and are ready to contribute. This initiative exists to provide temporary support during that transition.
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">A moment like this can mean:</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• choosing between groceries and other basic bills</li>
                  <li>• struggling to cover rent while waiting for authorization</li>
                  <li>• carrying emotional stress at the very start of adult life</li>
                </ul>
              </div>
              <p className="mt-4 font-medium text-slate-800">— Tayo Kashogi</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-amber-100 bg-amber-50/60 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Testimonial</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">A real story behind the waiting</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Behind every delayed authorization is a graduate trying to stay steady, care for family, and hold on to hope.
              </p>
            </div>

            <div className="mt-10">
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

        <section id="how" className="mx-auto max-w-7xl border-t border-blue-100 px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-center text-3xl font-bold">How the fund works</h2>
          <div className="mt-8 grid gap-4 text-center sm:mt-10 sm:gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">Apply</div>
              <p className="mt-2 text-sm text-slate-600">
                Graduates submit a short application with verification
              </p>
            </div>
            <div>
              <div className="font-semibold">Review</div>
              <p className="mt-2 text-sm text-slate-600">
                Applications are reviewed based on eligibility and need
              </p>
            </div>
            <div>
              <div className="font-semibold">Support</div>
              <p className="mt-2 text-sm text-slate-600">
                Approved applicants receive one-time financial assistance
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">$25</div>
              <div className="mt-1 text-sm text-slate-600">can help cover groceries for a few days</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">$100</div>
              <div className="mt-1 text-sm text-slate-600">can ease immediate financial pressure</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">$500</div>
              <div className="mt-1 text-sm text-slate-600">can fully support one graduate through this gap</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-slate-200 px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Live Campaign</div>

            <div className="mt-6">
              <div
                className="gfm-embed"
                data-url="https://www.gofundme.com/f/the-bridge-fund-2026-supporting-nigerian-graduates-in-amer/widget/medium?sharesheet=undefined&attribution_id=sl:ddcb0959-a41f-4d19-b954-3477d68d905c"
              ></div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              This is a live view of the fundraiser. Progress updates automatically, so every new gift brings the community one step closer to supporting another graduate.
            </p>

            <div className="mt-6">
              <button
                onClick={() => openExternal(PRIMARY_DONATE_URL)}
                className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Donate on GoFundMe
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-5 text-center shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">A simple act of relief</div>
            <p className="mt-2 leading-7 text-slate-700">
              For a graduate living in uncertainty, even a modest gift can create breathing room, preserve dignity, and remind them they are not facing this season alone.
            </p>
          </div>
        </section>

        <section
          id="donate"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-4 border-t border-green-100 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-10 lg:grid-cols-5"
        >
          {tiers.map((tier) => (
            <button
              key={tier.amount}
              onClick={() => openExternal(PRIMARY_DONATE_URL)}
              className="min-h-[116px] rounded-2xl border p-5 text-left transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <div className="text-2xl font-bold">{tier.amount}</div>
              <div className="mt-2 text-sm text-slate-600">{tier.label}</div>
            </button>
          ))}
        </section>

        <section
          id="apply"
          className="border-t border-blue-100 bg-slate-50 px-4 py-12 text-center sm:px-6 sm:py-16"
        >
          <h2 className="text-3xl font-bold">Need Support?</h2>
          <p className="mt-4 text-slate-600">If you meet the eligibility criteria, apply by clicking below.</p>
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full rounded-xl bg-black px-6 py-3 text-white sm:w-auto"
          >
            Apply for Support
          </a>
        </section>

        <section id="faq" className="border-t border-amber-100 bg-amber-50/50 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">FAQ</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Common questions, answered simply</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                This section is here to answer the questions people are most likely to ask before emailing the team.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
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

        <section id="contact" className="border-t border-emerald-100 bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact Us</div>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Questions about the NGO or support process?</h2>
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

        <section className="bg-gradient-to-r from-green-700 via-emerald-700 to-blue-700 px-4 py-12 text-center text-white sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold">Help someone stay hopeful while they wait</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7">
            Your contribution helps provide stability for graduates navigating a temporary but challenging moment. It tells someone at the start of their career: you are seen, your struggle matters, and this delay will not define your future.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openExternal(PRIMARY_DONATE_URL)}
              className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow-sm sm:w-auto"
            >
              Donate with compassion
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

        {showStickyWidget && (
          <div className="fixed bottom-4 right-4 z-30 hidden w-[340px] xl:block">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl">
              <button
                type="button"
                aria-label="Close floating fundraiser"
                onClick={hideStickyWidget}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-600 shadow-sm"
              >
                ✕
              </button>
              <div className="border-b border-slate-100 px-4 pb-3 pt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Live Fundraiser</div>
                <div className="mt-1 text-sm text-slate-700">Give while you browse</div>
              </div>
              <div className="max-h-[420px] overflow-auto bg-slate-50 p-3">
                <div
                  className="gfm-embed"
                  data-url="https://www.gofundme.com/f/the-bridge-fund-2026-supporting-nigerian-graduates-in-amer/widget/medium?sharesheet=undefined&attribution_id=sl:ddcb0959-a41f-4d19-b954-3477d68d905c"
                ></div>
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
}
