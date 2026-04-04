import { useEffect, useState } from "react";

const founderPortrait =
  "data:image/jpeg;base64,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";

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
  const [todayDonors] = useState(14);
  const [showStickyWidget, setShowStickyWidget] = useState(true);

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
            <a href="#how" className="hover:text-emerald-700">How it Works</a>
            <a href="#donate" className="hover:text-emerald-700">Donate</a>
            <a href="#apply" className="hover:text-emerald-700">Apply</a>
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
              <a href="#how" onClick={closeMenu} className="hover:text-emerald-700">How it Works</a>
              <a href="#donate" onClick={closeMenu} className="hover:text-emerald-700">Donate</a>
              <a href="#apply" onClick={closeMenu} className="hover:text-emerald-700">Apply</a>
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
            <span className="font-semibold">{todayDonors} people donated today.</span>
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
              <div className="mt-1 text-3xl font-bold">$10,000 Goal</div>
              <p className="mt-3 text-sm text-slate-600">
                Supporting up to 20 graduates with one-time $500 assistance.
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
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-90 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
                <div className="relative">
                  <img
                    src={founderPortrait}
                    alt="Portrait of founder Tayo Kashogi"
                    className="h-[26rem] w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent px-6 pb-6 pt-16 text-white">
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
              <div className="truncate text-sm text-slate-700">{todayDonors} people donated today</div>
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
        <p className="mt-2">thebridgefund2026@gmail.com</p>
      </footer>
    </div>
  );
}