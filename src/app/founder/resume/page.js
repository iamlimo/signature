import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const profileStats = [
  { label: "Years in production", value: "5+" },
  { label: "Feature / series projects", value: "12+" },
  { label: "Streaming distribution", value: "Worldwide" },
  { label: "Languages", value: "Yoruba + English" },
];

const competencies = [
  "Film and television production",
  "Creative development and script evaluation",
  "Production budgeting and cost control",
  "Production planning and scheduling",
  "Cast, crew, and vendor management",
  "Location scouting and production logistics",
  "Post-production supervision",
  "Quality control and delivery coordination",
  "Film financing and co-production",
  "Content acquisition and distribution partnerships",
  "Intellectual property and rights management",
  "Film marketing and festival submissions",
  "Production risk management",
  "Contract and stakeholder coordination",
];

const filmography = [
  {
    title: "ÌLẸ̀KẸ̀ (The Hidden Heir)",
    year: "2025",
    role: "Producer / Executive Producer",
    format: "TV Series",
    genre: "Drama",
    runtime: "2hrs 20mins",
    language: "Yoruba",
    company: "Signature Pictures Network",
    director: "Gafar Amoo",
    writer: "Ahmed Oyediran",
    status: "Completed",
    cover: "/Key%20Art%20Selected%20Abstract.png",
    synopsis:
      "Desperate for an heir, King Adeoye is unaware his true son, Beyioku, is raised secretly by the Iya Agba.",
    contribution:
      "Incredibly proud of my work on ÌLẸ̀KẸ̀ - The Hidden Heir. I wore multiple hats on this one, Executive Producer, Producer, Financier, and leading post-production. Excited for everyone to experience the world we’ve built.",
    distribution: "Released / Licensed",
  },
  {
    title: "ELÉRE - The Spirit Child",
    year: "2025",
    role: "Producer / Executive Producer",
    format: "Short Film",
    genre: "Drama",
    runtime: "11mins",
    language: "Yoruba",
    company: "Signature Pictures Network",
    director: "Olaide Abidoye",
    writer: "Ahmed Oyediran",
    status: "Completed",
    cover: "/Éléré_ The Spirit Child.png",
    synopsis:
      "Thrust into the spirit realm during prayer, an aging Islamic cleric discovers the Elére, souls bound by ancient covenants who are not all evil, but victims and vessels.",
    contribution:
      "Contributed across development, financing, and delivery for ELÉRE - The Spirit Child as Executive Producer, Producer, and Financier, with direct oversight of post-production to ensure the highest narrative and technical quality from start to finish.",
    distribution: "Released / Licensed",
  },
];

const experience = [
  {
    title: "Founder",
    company: "Signature Pictures Network",
    period: "June 2021 – Present",
    description:
      "Oversaw the development and production of film and television projects from concept through completion. Managed production budgets, schedules, resources, and operational requirements. Coordinated directors, writers, cast, crew, suppliers, and post-production teams. Supervised production milestones to maintain creative objectives, timelines, and quality standards. Collaborated with distributors, broadcasters, and streaming platforms.",
  },
];

const rightsAndDistribution = [
  "Streaming Platform Experience: Signature TV",
  "Distribution and Licensing: 12 Months License",
  "Territorial Rights Management: Worldwide",
  "Content Delivery: Delivered master export deliverables across multiple releases, ensuring full compliance with SVOD, TVOD, VOD, and linear delivery specifications.",
  "Technical Quality Control: Technical masters, localized timed text assets, layered promotional artwork, and structured metadata.",
  "Content Protection: Managed chain-of-title clearances, copyright registrations, and anti-piracy efforts.",
  "Commercial Performance: Delivered commercially resilient productions that secured tier-1 streaming distribution and achieved strong platform rankings.",
];

const rightsChecklist = [
  "Evidence of ownership or authority to license the film",
  "Signed producer, director, writer, and contributor agreements",
  "Cast and crew releases and appearance permissions",
  "Music licences and synchronisation rights",
  "Script, adaptation, underlying-work, and other applicable rights",
  "Location, artwork, archival footage, and third-party clearances",
  "Copyright registration or supporting ownership records",
  "Distribution history and existing licence restrictions",
  "Chain-of-title documentation",
  "Any other documents required for acquisition and distribution",
];

const languageList = ["Yoruba - Native / Fluent", "English - Fluent"];

export default function FounderResumePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f6f3f1] text-[#121212]">
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-[#111111] text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.4fr_0.6fr] md:px-10 lg:px-14 lg:py-12">
              <div>
                <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4d4d8]">
                  Film Producer – Professional CV
                </p>
                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  Sanni Dhikrulah Olaniyi
                </h1>

                <p className="mt-4 text-lg text-[#f1f1f1] md:text-xl">
                  Film Producer | Executive Producer | Film Tech
                </p>

                <div className="mt-5 space-y-2 text-sm text-[#e7e7e7]">
                  <p>Location: Lagos, Nigeria</p>
                  <p>Phone: +2348162059633</p>
                  <p>Email: ceo@signaturetv.co</p>
                  <p>Website: <a href="https://signaturepicture.co/"></a></p>
                  <p>
                   LinkedIn  <a href="https://www.linkedin.com/in/sanni-dhikrulah-olaniyi-0a1b3b1b6/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c72537]">
                    https://www.linkedin.com/in/sanni-dhikrulah-olaniyi-0a1b3b1b6/
                    </a>
                  </p>
                  
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:ceo@signaturetv.co"
                    className="rounded-full bg-[#c72537] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#de384d]"
                  >
                    Contact Me
                  </a>
                  <a
                    href="/founder-speech"
                    className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Founder Story
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#c72537] via-[#9d162b] to-[#2a0a12] shadow-2xl">
                  <img
                    src="/sanni.png"
                    alt="Sanni Dhikrulah Olaniyi"
                    className="h-[340px] w-full object-cover object-center grayscale"
                  />
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#f7d7dc]">
                      Professional profile
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-white">
                      Film Producer
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#f3dfe2]">
                      Developing, producing, managing and delivering film projects
                      with a focus on authentic African storytelling and
                      commercially viable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {profileStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#e7ddd9] bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-black text-[#c72537]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#4f4f4f]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              1. Professional Profile
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-[#efe4e0]">
            <p className="text-lg leading-8 text-[#2d2d2d]">
              An experienced film producer with 5 years of experience in
              developing, producing, managing, and delivering film projects.
              Specialises in feature films, short films, television series,
              documentaries and music, with expertise in production management,
              budgeting, creative development, cast and crew coordination, and
              post-production supervision.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#2d2d2d]">
              Demonstrates a strong commitment to authentic African
              storytelling, production quality, and the development of
              commercially viable content for diverse audiences. Experienced in
              collaborating with actors, directors, writers, production
              companies, distributors, and other industry stakeholders to bring
              projects from concept to completion.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#2d2d2d]">
              Seeking to build strategic relationships with streaming platforms,
              broadcasters, distributors, and content acquisition partners to
              expand the reach and commercial potential of quality film and
              television productions.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              2. Core Competencies
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {competencies.map((skill) => (
              <div
                key={skill}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#efe4e0]"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c72537]" />
                <span className="text-base text-[#303030]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              3. Filmography – Selected Productions
            </p>
          </div>

          <div className="space-y-8">
            {filmography.map((film) => (
              <article
                key={film.title}
                className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-[#efe4e0]"
              >
                {film.cover && (
                  <div className="mb-6 overflow-hidden rounded-[20px] border border-[#efe4e0] bg-[#f9f1f1]">
                    <img
                      src={film.cover}
                      alt={`${film.title} key art`}
                      className="h-[260px] w-full object-cover object-center md:h-[360px]"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-[#111111]">
                      {film.title}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#c72537]">
                      {film.year} • {film.format}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#f9e9eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a1d2a]">
                    {film.status}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 text-sm text-[#3b3b3b] md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Production Role:
                    </span>
                    <br />
                    {film.role}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">Genre:</span>
                    <br />
                    {film.genre}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Runtime:
                    </span>
                    <br />
                    {film.runtime}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Language:
                    </span>
                    <br />
                    {film.language}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-[#3a3a3a] md:grid-cols-2">
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Production Company:
                    </span>{" "}
                    {film.company}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Director:
                    </span>{" "}
                    {film.director}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Screenwriter:
                    </span>{" "}
                    {film.writer}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">
                      Distribution:
                    </span>{" "}
                    {film.distribution}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#f9f1f1] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c72537]">
                    Synopsis
                  </p>
                  <p className="mt-2 text-base leading-7 text-[#2d2d2d]">
                    {film.synopsis}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c72537]">
                    Producer&apos;s Contribution
                  </p>
                  <p className="mt-2 text-base leading-7 text-[#2d2d2d]">
                    {film.contribution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              4. Professional Experience
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.title}
                className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-[#efe4e0]"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-[#111111]">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-lg text-[#c72537]">{job.company}</p>
                  </div>
                  <span className="rounded-full bg-[#f9e9eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a1d2a]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-4 text-lg leading-8 text-[#2f2f2f]">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              5. Streaming Distribution and Content Delivery Experience
            </p>
          </div>

          <div className="rounded-[28px] bg-[#111111] p-8 text-white shadow-lg">
            <ul className="space-y-4 text-base leading-7 text-[#efefef]">
              {rightsAndDistribution.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c72537]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              6. Intellectual Property and Rights Documentation
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-[#efe4e0]">
            <ul className="space-y-3 text-base leading-7 text-[#2d2d2d]">
              {rightsChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c72537]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-[#efe4e0]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
                7. Languages
              </p>
              <ul className="mt-5 space-y-3 text-lg text-[#2d2d2d]">
                {languageList.map((language) => (
                  <li key={language} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c72537]" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-[#f9e9eb] p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
                Recommended Attachments
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#2d2d2d]">
                <li>Producer&apos;s CV and selected filmography.</li>
                <li>Individual film synopsis and technical specifications.</li>
                <li>Official poster or key art and approved still images.</li>
                <li>
                  Trailer or screener link, with appropriate access permissions.
                </li>
                <li>Cast and crew list.</li>
                <li>Production and copyright ownership information.</li>
                <li>Rights and distribution availability statement.</li>
                <li>Available technical delivery information.</li>
                <li>
                  Contact details for the authorised rights holder or sales
                  representative.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-[#efe4e0]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c72537]">
              Declaration
            </p>
            <p className="mt-4 text-lg leading-8 text-[#2d2d2d]">
              I confirm that the information provided in this CV is accurate to
              the best of my knowledge and that all listed production credits
              and professional achievements reflect my actual involvement.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                  Full Name
                </p>
                <p className="mt-2 text-lg text-[#2d2d2d]">
                  Sanni Dhikrulah Olaniyi
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                  Signature
                </p>
                <p className="mt-2 text-lg text-[#2d2d2d]">—</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                  Date
                </p>
                <p className="mt-2 text-lg text-[#2d2d2d]">
                  16th October, 2026
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
