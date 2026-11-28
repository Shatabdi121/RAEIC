import campusGate from "./assets/OIP.jpg";
import posterTemplate from "./assets/Poster_Template_AISIGHSD-2026.pptx?url";
import sdgGoal4 from "./assets/sdg-goal-4.png";
import sdgGoal6 from "./assets/sdg-goal-6.png";
import sdgGoal7 from "./assets/sdg-goal-7.png";
import sdgGoal9 from "./assets/sdg-goal-9.png";
import sdgGoal11 from "./assets/sdg-goal-11.png";
import sdgGoal13 from "./assets/sdg-goal-13.png";
import registrationQr from "./assets/QRCODE.jpeg";


const Icon = ({ children, className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const SectionHeading = ({ children }) => (
  <h2 className="rounded-t-lg bg-[#123c7a] px-3 py-1.5 text-center text-sm font-extrabold uppercase tracking-wide text-white">
    {children}
  </h2>
);

const InfoCard = ({ icon, title, children }) => (
  <article className="flex gap-3 rounded-xl border border-slate-200 bg-[#f7faff] p-3 shadow-sm sm:p-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123c7a] text-white">
      {icon}
    </span>
    <div className="min-w-0">
      <h3 className="mb-1 text-[13px] font-extrabold uppercase leading-tight text-[#123c7a]">
        {title}
      </h3>
      <div className="text-[12px] leading-snug text-slate-900 sm:text-[13px]">
        {children}
      </div>
    </div>
  </article>
);

const PrizeCard = ({ place, amount, words, color }) => (
  <article className="grid h-full min-h-[82px] w-full grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 rounded-xl border border-white/60 bg-gradient-to-br from-[#fff4cb] via-[#d7b99b] to-[#422b2a] px-3 py-2 text-white shadow-sm">
    <div
      className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-[3px] border-white/70 ${color} text-center text-[#5b381d] shadow-inner`}
    >
      <span className="text-xl font-black leading-none">{place}</span>
      <span className="text-[9px] font-bold">PLACE</span>
    </div>
    <div className="min-w-0 text-center">
      <p className="text-xl font-black leading-tight text-[#60331e] sm:text-2xl">
        {amount}
      </p>
      <p className="text-xs font-bold leading-tight sm:text-base">{words}</p>
    </div>
  </article>
);

const PosterPresentation = () => {
  
  return (
    <main className="bg-slate-100 px-2 py-4 sm:px-5 sm:py-8">
      <article className="mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:p-5 lg:p-6">
        <section className="mb-4 grid gap-3 lg:grid-cols-[1.65fr_1fr] lg:items-end">
          <div>
            <h1 className="font-black leading-[1.06] text-[#123c7a]">
              <span className="block text-2xl sm:text-3xl lg:text-[34px]">
                2026 International Conference on AI-Enabled Smart Solutions for
                Industry, Governance, Healthcare, and Sustainable Development
                (AISIGH-SD)
              </span>
            </h1>
            <div className="mt-3 space-y-2 text-sm font-bold text-slate-900 sm:text-base">
              <p className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0 text-[#123c7a]">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </Icon>
                28th–30th December 2026
              </p>
              <p className="flex items-start gap-2">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#123c7a]">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </Icon>
                Centurion University of Technology and Management, Bhubaneswar
              </p>
            </div>
          </div>
          <img
            src={campusGate}
            alt="Centurion University entrance gate"
            className="h-36 w-full rounded-xl object-cover object-center sm:h-44 lg:h-40"
          />
        </section>

        <h2 className="mb-2 rounded-full bg-[#07833d] px-4 py-2 text-center text-2xl font-black text-white sm:text-3xl">
          Poster Presentation
        </h2>
        <p className="mb-4 rounded-full bg-[#123c7a] px-3 py-2 text-center text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
          Showcase your ideas. Build a better tomorrow!
        </p>

        <section className="mb-4 grid gap-3 lg:grid-cols-2">
          <div className="space-y-2">
            <InfoCard
              title="Who can participate"
              icon={
                <Icon className="h-6 w-6">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20" />
                </Icon>
              }
            >
              UG/PG Students: Max 2 Members
            </InfoCard>
            <InfoCard
              title="What to present"
              icon={
                <Icon className="h-6 w-6">
                  <path d="M9 18h6M10 22h4M8.2 14.5A7 7 0 1 1 16 14c-.8.6-1.3 1.4-1.5 2.2h-5c-.2-.7-.6-1.2-1.3-1.7Z" />
                  <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
                </Icon>
              }
            >
              Innovative Models of Poster Presentations on AI, Sustainability,
              Healthcare, Smart Governance, Industry 4.0 &amp; Related Themes.
            </InfoCard>
            <InfoCard
              title="Registration fees"
              icon={
                <Icon className="h-6 w-6">
                  <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </Icon>
              }
            >
              <p>Free for IEEE Student Member</p>
              <p>₹500 for Non-IEEE Student Member</p>
            </InfoCard>
            <InfoCard
              title="Poster presentation award"
              icon={
                <Icon className="h-6 w-6">
                  <circle cx="12" cy="8" r="6" />
                  <path d="m8.2 13-1.1 8 4.9-2.5 4.9 2.5-1.1-8M9.5 8l1.7 1.7L14.5 6" />
                </Icon>
              }
            >
              Centurion University will provide cash prizes to the winners of
              1st, 2nd and 3rd positions to further and strengthen their
              research journey.
            </InfoCard>
          </div>

          <section className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#fffaf0]">
            <SectionHeading>Cash prizes</SectionHeading>
            <div className="grid flex-1 grid-rows-[repeat(3,minmax(0,1fr))] gap-2 p-2">
              <PrizeCard place="1st" amount="₹8000/-" words="Eight thousand rupees" color="bg-[#efba31]" />
              <PrizeCard place="2nd" amount="₹5000/-" words="Five thousand rupees" color="bg-[#c6c9c8]" />
              <PrizeCard place="3rd" amount="₹3000/-" words="Three thousand rupees" color="bg-[#d58a26]" />
            </div>
          </section>
        </section>

        <section className="mb-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr]">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <SectionHeading>Guidelines</SectionHeading>
            <ul className="space-y-1.5 p-3 text-[11px] font-semibold leading-snug text-slate-900 sm:text-xs">
              {[
                { text: "Individual or Team (Max 2 members)" },
                { text: "Poster Size: 4ft X 3ft (H x W)" },
                { text: "Theme must adhere to the conference scope" },
                { text: "Certificate for all participants" },
                { text: "Top 3 winners will receive cash prizes" },
                {
                  text: "The flex banner should follow the prescribed template",
                  download: true,
                },
              ].map(({ text, download }) => (
                <li key={text} className="flex gap-1.5">
                  <span className="font-black text-green-600">●</span>
                  <span>
                    {text}
                    {download && (
                      <>
                        {" ("}
                        <a
                          href={posterTemplate}
                          download="Poster_Template_AISIGHSD-2026.pptx"
                          className="font-bold text-[#123c7a] underline underline-offset-2 hover:text-[#07833d]"
                        >
                           Download
                        </a>
                        {")"}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <SectionHeading>Important dates</SectionHeading>
            <div className="space-y-3 p-3 text-xs sm:text-sm">
              <p className="flex gap-2">
                <Icon className="h-7 w-7 shrink-0 text-[#123c7a]">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </Icon>
                <span>
                  <strong className="block">Last Registration Date</strong>
                  <span className="font-bold text-green-700">15.12.2026</span>
                </span>
              </p>
              <p className="flex gap-2">
                <Icon className="h-7 w-7 shrink-0 text-[#123c7a]">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </Icon>
                <span>
                  <strong className="block">Conference Dates</strong>
                  <span className="font-bold text-green-700">28.12.2026 to 30.12.2026</span>
                </span>
              </p>
              <p className="flex gap-2">
                <Icon className="h-7 w-7 shrink-0 text-[#123c7a]">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M7 8h10M7 12h6M7 16h10" />
                </Icon>
                <span>
                  <strong className="block">Presentation Date</strong>
                  <span className="font-bold text-green-700">28.12.2026</span>
                </span>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <h2 className="bg-[#07833d] px-2 py-1.5 text-center text-xs font-extrabold uppercase text-white">
              Sustainable Development Goals (SDGs)
            </h2>
            <div className="grid grid-cols-3 gap-1 p-2">
              {[
                { src: sdgGoal13, alt: "UN Sustainable Development Goal 13: Climate Action" },
                { src: sdgGoal11, alt: "UN Sustainable Development Goal 11: Sustainable Cities and Communities" },
                { src: sdgGoal9, alt: "UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure" },
                { src: sdgGoal7, alt: "UN Sustainable Development Goal 7: Affordable and Clean Energy" },
                { src: sdgGoal4, alt: "UN Sustainable Development Goal 4: Quality Education" },
                { src: sdgGoal6, alt: "UN Sustainable Development Goal 6: Clean Water and Sanitation" },
              ].map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="aspect-square w-full object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4 grid items-stretch gap-3 md:grid-cols-[1.2fr_1fr]">
          <img
            src={campusGate}
            alt="Centurion University campus gate"
            className="h-40 w-full rounded-xl object-cover sm:h-48 md:h-full md:min-h-[240px]"
          />
          <div className="flex min-h-[240px] flex-col">
            <h2 className="rounded-full bg-[#07833d] px-3 py-2 text-center text-lg font-black text-white sm:text-xl">
              Be an innovator. Be recognised.
            </h2>
            <p className="mt-1 rounded-full bg-[#123c7a] px-3 py-1.5 text-center text-sm font-bold text-white">
              Present | Compete | Get Rewarded
            </p>
            <a
              href="/#/registration"
              className="flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 text-center hover:bg-slate-50"
            >
              <img
                src={registrationQr}
                alt="QR code to register for poster presentation"
                className="h-20 w-20 border border-slate-200 object-contain sm:h-24 sm:w-24"
              />
              <span className="text-xs font-bold text-[#123c7a]">
                Scan to register in Poster Presentation
              </span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmjCuBjgbf75siq-j2ouPBeoJLByr-K3eNhlRL8ErfSL1lNw/viewform"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#123c7a] px-5 py-2.5 text-center text-lg font-black text-white shadow-sm transition-colors hover:bg-[#0e3062] focus:outline-none focus:ring-2 focus:ring-[#123c7a] focus:ring-offset-2 sm:text-xl"
            >
              Click here to Register
            </a>
          </div>
        </section>

        <section className="mb-4 grid gap-3 md:grid-cols-2">
          <article className="rounded-xl border border-slate-300 p-3">
            <h2 className="mb-2 flex items-center justify-center gap-2 rounded-full bg-[#123c7a] px-2 py-1 text-xs font-bold text-white">
              <Icon className="h-4 w-4">
                <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                <path d="M6 10v5c3 3 9 3 12 0v-5M22 8v6" />
              </Icon>
              Faculty Advisor
            </h2>
            <p className="text-center text-sm font-extrabold">Dr. Sujata Chakravarty</p>
            <a
              href="mailto:aisighsd2026@cutm.ac.in"
              className="mt-2 flex items-center justify-center gap-1 text-xs font-semibold text-slate-800"
            >
              <Icon className="h-4 w-4">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </Icon>
              aisighsd2026@cutm.ac.in
            </a>
          </article>

          <article className="rounded-xl border border-slate-300 p-3">
            <h2 className="mb-2 flex items-center justify-center gap-2 rounded-full bg-[#123c7a] px-2 py-1 text-xs font-bold text-white">
              <Icon className="h-4 w-4">
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20v-1a6 6 0 0 1 12 0v1M16 11a3 3 0 1 0 0-6M18 14a5 5 0 0 1 3 4.5V20" />
              </Icon>
              Student Volunteer
            </h2>
            <div className="space-y-2 text-xs font-semibold">
              <a href="tel:9348969984" className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z" />
                </Icon>
                Naunit Samanta Singhar — 9348969984
              </a>
              <a href="tel:6371757252" className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z" />
                </Icon>
                Payal Priyadarshini Jena — 6371757252
              </a>
            </div>
          </article>
        </section>

        <footer className="mt-3 text-center text-xs font-bold leading-snug text-[#123c7a] sm:text-sm">
          School of Computing and Data Science (SoCDS), Centurion University of
          Technology and Management, Bhubaneswar, Odisha.
        </footer>
      </article>
    </main>
  );
};

export default PosterPresentation;
