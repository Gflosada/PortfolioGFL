import { ProjectSideNavigation } from "@/components/project-side-navigation"

const projectFacts = [
  { label: "Role", value: "UI/UX Designer & Front-End Developer", detail: "Product strategy, interface design, React implementation" },
  { label: "Platform", value: "Found Music App", detail: "Music discovery, artist profiles, messaging" },
  { label: "Tools", value: "Figma, React, Next.js", detail: "Tailwind CSS, Firebase, component-based UI" },
  { label: "Scope", value: "Design + build", detail: "Responsive UI, auth flows, real-time messaging" },
]

const visuals = {
  hero: "/music1.png",
  discovery: "/music3.png",
  wireframes: "/mu1.png",
  dashboard: "/music2.png",
  final: "/musicfin.png",
  outcome: "/musicfin.png",
}

const overview = [
  {
    title: "Product",
    body: "Found is a music discovery and connection platform designed to help independent artists present their work professionally and build stronger relationships with fans and industry professionals.",
  },
  {
    title: "User experience",
    body: "The platform supports artist browsing, profile exploration, music content discovery, authentication flows, and real-time messaging between users.",
  },
  {
    title: "Product objective",
    body: "The goal was to design and build a responsive, modern, user-centered platform that balances artist identity, discovery, and communication.",
  },
  {
    title: "Implementation",
    body: "The project combined Figma product design with front-end implementation using React, Next.js, Tailwind CSS, Firebase authentication, and reusable UI components.",
  },
]

const painPoints = [
  "Independent artists need better digital spaces to present their music, identity, visuals, and updates in a professional way.",
  "Music discovery platforms can feel crowded or impersonal, making it harder for emerging artists to stand out.",
  "Fans and industry users need clearer ways to browse artists, view profiles, and move from discovery into meaningful interaction.",
  "The product needed clean information architecture and scalable front-end patterns that could support profiles, messaging, and content modules.",
]

const metrics = [
  { value: "3", label: "Core user groups", note: "Artists, fans, and industry professionals shaped the platform structure." },
  { value: "100%", label: "Responsive coverage", note: "Layouts were planned for desktop, tablet, and mobile viewing contexts." },
  { value: "Reusable", label: "Component system", note: "Cards, profile modules, navigation, and message patterns were built for scale." },
  { value: "Live", label: "Firebase flows", note: "Authentication and real-time messaging informed the product architecture." },
]

const insights = [
  {
    title: "Artist identity needs structure",
    body: "Artists need more than a feed. Profiles have to communicate sound, image, credibility, and current activity in a way that feels curated.",
  },
  {
    title: "Discovery has to stay lightweight",
    body: "Fans need quick ways to browse, scan, and decide where to go next without dense navigation or overloaded content blocks.",
  },
  {
    title: "Messaging turns browsing into connection",
    body: "Real-time communication adds product value by helping users move from passive discovery into direct artist, fan, or industry interaction.",
  },
]

const process = [
  {
    step: "01",
    title: "Information architecture",
    body: "Mapped the platform around discovery, artist profiles, content browsing, account access, and communication flows.",
  },
  {
    step: "02",
    title: "User flows",
    body: "Defined paths for signing in, browsing artists, opening profiles, engaging with content, and starting real-time conversations.",
  },
  {
    step: "03",
    title: "Interface design",
    body: "Created responsive Figma screens for platform browsing, profile modules, dashboard content, navigation, and messaging patterns.",
  },
  {
    step: "04",
    title: "Front-end implementation",
    body: "Translated the system into reusable React and Next.js components styled with Tailwind CSS and supported by Firebase flows.",
  },
]

const solutionFeatures = [
  {
    title: "Discovery-first structure",
    body: "The experience makes artist discovery feel immediate, giving users clear paths into profiles, featured content, and platform actions.",
  },
  {
    title: "Artist profile modules",
    body: "Profile areas were designed to support identity, music content, visual presentation, and professional credibility.",
  },
  {
    title: "Messaging experience",
    body: "Real-time messaging patterns support direct communication between artists, fans, and industry professionals.",
  },
  {
    title: "Scalable front-end system",
    body: "Reusable React components, Tailwind utility patterns, and Firebase integrations keep the product easier to extend.",
  },
]

const systemChoices = [
  {
    title: "Color",
    body: "A dark digital platform foundation uses purple, magenta, and lavender accents to create a modern music-tech interface.",
  },
  {
    title: "Typography",
    body: "Large headings support artist identity and discovery, while compact body text keeps profiles, cards, and message areas readable.",
  },
  {
    title: "Components",
    body: "Cards, navigation, profile sections, content layouts, auth states, and messaging modules were designed as reusable patterns.",
  },
  {
    title: "Accessibility",
    body: "The system prioritizes strong contrast, clear labels, predictable navigation, and touch-friendly spacing across responsive breakpoints.",
  },
]

const impact = [
  {
    title: "Stronger artist presence",
    body: "Found gives independent artists a more polished digital space to present their work, identity, and activity.",
  },
  {
    title: "Improved engagement",
    body: "Discovery, profiles, and messaging work together to help fans and industry users move from browsing to connection.",
  },
  {
    title: "Scalable product foundation",
    body: "The combination of Figma design systems, React components, Next.js structure, Tailwind CSS, and Firebase creates a practical base for growth.",
  },
]

const nextSteps = [
  "Expand artist profile customization with richer media sections, verified links, and release highlights.",
  "Add smarter discovery filters for genre, location, availability, and professional opportunities.",
  "Improve messaging with read states, conversation search, attachments, and safety controls.",
  "Extend the component system with more empty states, validation states, and dashboard analytics modules.",
]

function SectionHeader({ kicker, title, body, centered = false, tone = "light" }) {
  const isDark = tone === "dark"

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-[#9E62EC]" : "text-[#7F56D9]"}`}>
        {kicker}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${isDark ? "text-white" : "text-[#101113]"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isDark ? "text-white/70" : "text-[#4B4F58]"}`}>
          {body}
        </p>
      ) : null}
    </div>
  )
}

function MetricCard({ value, label, note }) {
  return (
    <article className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
      <p className="text-3xl font-semibold text-[#101113]">{value}</p>
      <h3 className="mt-3 text-base font-semibold text-[#101113]">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5D6370]">{note}</p>
    </article>
  )
}

function ImageFrame({ src, alt, caption, className = "" }) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-[#D9DEE8] bg-[#101113] shadow-sm ${className}`}>
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
      {caption ? (
        <figcaption className="border-t border-white/10 bg-[#101113] px-4 py-3 text-sm text-white/75">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function DashboardLandingCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#101113]">
      <ProjectSideNavigation />
      <section className="relative overflow-hidden bg-[#08090A] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9E62EC]">
              UX/UI Case Study
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Product Design Dashboard
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A product design and front-end development project for Found, a music platform that connects independent
              artists with fans and industry professionals through responsive discovery, profiles, authentication, and
              real-time messaging.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectFacts.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-12 top-10 hidden h-48 w-48 border border-[#9E62EC]/30 lg:block" />
            <div className="relative rounded-lg border border-white/20 bg-white/[0.05] p-3 shadow-2xl shadow-black/40">
              <ImageFrame
                src={visuals.hero}
                alt="Found music platform dashboard and discovery interface"
                className="border-white/10"
              />
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Artist profiles", "Messaging", "Responsive UI"].map((label, index) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-[#111315] p-3">
                    <p className="text-xs text-white/50">{label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {index === 0 ? "Designed" : index === 1 ? "Live" : "Built"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Project overview"
            title="A responsive music platform for discovery, identity, and connection."
            body="Found was designed as a digital product experience where independent artists can showcase themselves professionally and users can discover, browse, and communicate through a clean platform interface."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {overview.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#D9DEE8] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#101113]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            kicker="Problem statement"
            title="Independent artists need a better way to be discovered and contacted."
            body="The challenge was to design a product that balances music discovery, artist identity, and direct communication in one cohesive experience, then translate that system into scalable front-end views."
          />
          <div className="grid gap-4">
            {painPoints.map((point, index) => (
              <div key={point} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-[#F5F7FA] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#101113] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B4F58]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Goals and product objectives"
            title="Design goals focused on discovery, engagement, and scalable implementation."
            body="The project needed to feel modern and intuitive for users while also being practical to build with reusable components, responsive layouts, Firebase authentication, and real-time messaging."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08090A] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E62EC]">Research and discovery</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Product thinking focused on artist needs, fan engagement, and digital discoverability.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              I approached Found as both a UX design challenge and a front-end product system. The experience needed
              clear browsing, expressive artist profiles, simple account access, and communication flows that worked
              across devices.
            </p>
            <div className="mt-8 grid gap-4">
              {insights.map((item) => (
                <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/60">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <ImageFrame
            src={visuals.discovery}
            alt="Artist dashboard interface detail"
            caption="Product focus: profile hierarchy, content discovery, navigation clarity, and messaging access."
            className="border-white/10"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Platform experience design"
            title="From product structure to implemented front-end views."
            body="The workflow moved from information architecture and responsive Figma design into React and Next.js implementation. The goal was to make the platform feel cohesive from browsing to profiles to messaging."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#7F56D9]">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#101113]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
            <ImageFrame
              src={visuals.wireframes}
              alt="Wireframe and interface progression from the artist dashboard project"
              caption="Exploration artifact: layout hierarchy for discovery, profile content, and platform navigation."
            />
            <ImageFrame
              src={visuals.dashboard}
              alt="Artist analytics dashboard mockup"
              caption="Core interface concept: responsive platform structure for music discovery and user engagement."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Core product interfaces"
            title="A polished platform experience for artists, fans, and music industry users."
            body="The final solution combines responsive platform screens, artist profile interfaces, browsing flows, messaging patterns, and reusable UI decisions that translate cleanly into front-end views."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutionFeatures.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-[#D9DEE8] bg-[#F5F7FA] p-5">
                <h3 className="text-lg font-semibold text-[#101113]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5D6370]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            kicker="Design system and UI decisions"
            title="A scalable UI system for a modern music platform."
            body="The visual system aligns Figma design work with coded implementation. Typography, spacing, cards, navigation, profile modules, content layouts, and messaging patterns were designed to stay consistent across screen sizes."
          />
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Ink", hex: "#08090A", text: "text-white" },
                { name: "Surface", hex: "#F5F7FA", text: "text-[#101113]" },
                { name: "Action", hex: "#9E62EC", text: "text-white" },
                { name: "Signal", hex: "#D8066E", text: "text-white" },
                { name: "Insight", hex: "#7F56D9", text: "text-white" },
                { name: "Text", hex: "#4B4F58", text: "text-white" },
              ].map((color) => (
                <div key={color.name} className="overflow-hidden rounded-lg border border-[#D9DEE8] bg-white">
                  <div className={`flex h-24 items-end p-4 ${color.text}`} style={{ backgroundColor: color.hex }}>
                    <span className="text-sm font-semibold">{color.hex}</span>
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold text-[#101113]">{color.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {systemChoices.map((choice) => (
                <article key={choice.title} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#101113]">{choice.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5D6370]">{choice.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08090A] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Outcome and impact"
            title="A stronger digital product foundation for artists and fans."
            body="The project demonstrates how product design and front-end development can work together: a polished UX/UI concept supported by responsive implementation, reusable components, authentication, and real-time interaction patterns."
            centered
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {impact.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ImageFrame
              src={visuals.outcome}
              alt="Final artist dashboard outcome section"
              caption="Reflection: the strongest product decisions came from connecting artist identity, discovery behavior, and communication into one coherent system."
              className="border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="How Found can keep evolving."
            body="The next phase would deepen artist tools, improve discovery quality, and expand the messaging and dashboard system while preserving the reusable React, Next.js, Tailwind CSS, and Firebase foundation."
          />
          <div className="grid gap-4">
            {nextSteps.map((step, index) => (
              <article key={step} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6941C6] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B4F58]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
