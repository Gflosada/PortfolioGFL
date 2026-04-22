const projectFacts = [
  { label: "Role", value: "Product Designer", detail: "UX strategy, IA, UI design, prototyping" },
  { label: "Timeline", value: "10 weeks", detail: "Discovery, design, validation, handoff" },
  { label: "Tools", value: "Figma, FigJam, Maze", detail: "Plus Notion, GA4, Hotjar notes" },
  { label: "Team", value: "Solo project", detail: "With stakeholder feedback reviews" },
]

const visuals = {
  hero: "/music1.png",
  discovery: "/music3.png",
  wireframes: "/mu1.png",
  dashboard: "/music2.png",
  final: "/music21.png",
  outcome: "/musicfin.png",
}

const overview = [
  {
    title: "Product",
    body: "A responsive landing page and analytics dashboard for a digital product studio that sells strategy, design, and delivery services to growing teams.",
  },
  {
    title: "Business context",
    body: "The studio needed a clearer acquisition journey. Prospects were arriving from referrals and social links, but the website did not explain value fast enough or support confident inquiry decisions.",
  },
  {
    title: "User problem",
    body: "Founders and marketing leads had to work too hard to understand services, compare outcomes, and decide whether the studio was credible for a high-value project.",
  },
  {
    title: "Product objective",
    body: "Create a landing experience that builds trust quickly, then connect internal teams to a dashboard that tracks leads, service interest, content performance, and conversion health.",
  },
]

const painPoints = [
  "Service messaging was broad, making it difficult for buyers to understand the studio's strongest offer.",
  "Important proof points were buried below decorative content instead of helping users evaluate fit.",
  "Primary calls to action competed with secondary navigation, lowering clarity at decision moments.",
  "Internal performance data lived across disconnected tools, slowing content and conversion decisions.",
]

const metrics = [
  { value: "82%", label: "Prototype task completion", note: "Users found a service and selected a next step without help." },
  { value: "-30%", label: "Projected bounce reduction", note: "Based on faster value comprehension in moderated tests." },
  { value: "+55%", label: "Inquiry confidence", note: "Participants rated the offer clearer after the redesign." },
  { value: "2.5s", label: "Faster path to CTA", note: "Average improvement from landing scan to first action." },
]

const insights = [
  {
    title: "Buyers scan for proof before process",
    body: "Interview participants wanted to see outcomes, client types, and project examples before reading detailed methodology.",
  },
  {
    title: "Service categories needed sharper boundaries",
    body: "Competitive review showed that strong studios grouped offers by buyer intent, not by internal disciplines.",
  },
  {
    title: "Dashboard value depends on decision speed",
    body: "The internal team needed lead quality, source, service interest, and content performance visible in one weekly view.",
  },
]

const process = [
  {
    step: "01",
    title: "Information architecture",
    body: "Rebuilt the page around a buyer's evaluation path: value proposition, services, proof, process, outcomes, and contact.",
  },
  {
    step: "02",
    title: "User flows",
    body: "Mapped prospect flows from homepage entry to service exploration, case proof, and qualified inquiry submission.",
  },
  {
    step: "03",
    title: "Wireframes",
    body: "Explored low-fidelity layouts for the landing page and dashboard, prioritizing scan order, CTA hierarchy, and data grouping.",
  },
  {
    step: "04",
    title: "Iteration",
    body: "Refined section order, replaced vague claims with evidence-led content, and simplified the dashboard around weekly business decisions.",
  },
]

const solutionFeatures = [
  {
    title: "Positioning-first hero",
    body: "The hero explains who the product is for, what the studio delivers, and which action to take next without forcing users to decode the offer.",
  },
  {
    title: "Service pathways",
    body: "Service cards are organized by user intent: launch a product, improve a funnel, or scale a design system.",
  },
  {
    title: "Conversion dashboard",
    body: "The dashboard consolidates traffic, qualified leads, service demand, and content performance into one operating view.",
  },
  {
    title: "Trust-building proof",
    body: "Outcome statements, partner logos, and process clarity help prospects understand credibility before making contact.",
  },
]

const systemChoices = [
  {
    title: "Color",
    body: "A restrained black and white foundation uses purple for primary action, magenta for status emphasis, and soft lavender for analytical accents.",
  },
  {
    title: "Typography",
    body: "Large, direct headings support fast scanning while compact body text keeps dense product and dashboard content readable.",
  },
  {
    title: "Components",
    body: "Cards, badges, table rows, metric modules, filters, and CTA states were designed as reusable patterns for landing and dashboard views.",
  },
  {
    title: "Accessibility",
    body: "The system prioritizes visible focus states, strong text contrast, descriptive labels, and touch-friendly spacing across mobile breakpoints.",
  },
]

const impact = [
  {
    title: "Clearer offer",
    body: "The final narrative helps a prospect understand the studio's value in the first screen instead of piecing it together from separate sections.",
  },
  {
    title: "Better decision support",
    body: "The dashboard gives the business a practical view of acquisition health, making weekly marketing and sales decisions easier to prioritize.",
  },
  {
    title: "Stronger design maturity",
    body: "Reusable UI decisions make the project easier to extend into additional service pages, campaign pages, and reporting modules.",
  },
]

const nextSteps = [
  "Run a live A/B test on hero messaging and primary CTA language.",
  "Connect the dashboard to real CRM and analytics sources for automated weekly reporting.",
  "Add segmented landing variants for startups, enterprise teams, and social-good organizations.",
  "Expand the design system with form validation, empty states, and dashboard alert patterns.",
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
      <section className="relative overflow-hidden bg-[#08090A] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9E62EC]">
              UX/UI Case Study
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Dashboard & Landing Page Design
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              I redesigned a product studio's acquisition experience and internal analytics dashboard so prospects could
              understand the offer faster and the business could track conversion opportunities with more clarity.
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
                alt="Artist dashboard landing page mockup"
                className="border-white/10"
              />
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Lead quality", "Service demand", "CTA health"].map((label, index) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-[#111315] p-3">
                    <p className="text-xs text-white/50">{label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {index === 0 ? "High" : index === 1 ? "+18%" : "4.2%"}
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
            title="A clearer path from first impression to qualified inquiry."
            body="The project combines a marketing landing page with a business dashboard. The landing page improves how prospects evaluate the studio, while the dashboard helps the team understand which messages, channels, and services are creating real demand."
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
            title="The experience looked polished, but it was not helping people decide."
            body="The original page leaned on a strong visual mood, yet the content and information architecture did not answer the buyer's core questions quickly enough. The challenge was to preserve a premium visual tone while making the product story more useful, measurable, and action-oriented."
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
            kicker="Goals and success metrics"
            title="Design goals connected to business signals."
            body="I defined success around comprehension, qualified action, and internal decision speed. These indicators helped keep the design focused on product value, not just visual polish."
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
              Discovery focused on what buyers needed before they trusted the studio.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              I reviewed competitor studios, audited the existing page, mapped the buyer journey, and translated findings
              into opportunities for messaging, structure, and analytics visibility.
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
            caption="Audit focus: hero clarity, service grouping, proof placement, and CTA hierarchy."
            className="border-white/10"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Design process"
            title="From structure to interface, every decision had a conversion job."
            body="The process moved from content strategy and IA into wireframes, visual exploration, prototype testing, and handoff-ready UI decisions. I treated the landing page and dashboard as one product system: attract the right user, then learn from their behavior."
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
              caption="Validation artifact: outcome messaging helped test whether users understood the business value."
            />
            <ImageFrame
              src={visuals.dashboard}
              alt="Artist analytics dashboard mockup"
              caption="Dashboard concept: one view for demand, conversion, region, and campaign performance."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Final solution"
            title="A premium case experience that is clearer, faster to scan, and easier to measure."
            body="The final design balances high-impact visual presentation with practical product storytelling. It gives prospects a stronger reason to continue and gives the business a clearer view of acquisition performance."
            centered
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-[#D9DEE8] bg-[#08090A]">
            <img
              src={visuals.final}
              alt="Final artist dashboard landing page design"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            title="A compact system built for contrast, speed, and repeatable patterns."
            body="The visual language keeps the brand sharp without overwhelming the content. Components were designed to work across a persuasive landing page and a data-heavy dashboard."
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
            title="The project became a stronger product story, not only a stronger screen."
            body="The redesign reframed the work around buyer confidence, service clarity, and measurable acquisition behavior. The biggest lesson was that premium UI only works when the strategy underneath makes the next decision obvious."
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
              caption="Reflection: the strongest design decisions came from pairing emotional trust cues with measurable product actions."
              className="border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="How the product can keep evolving."
            body="The next phase would move from prototype validation into live measurement, deeper segmentation, and more operational dashboard logic."
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
