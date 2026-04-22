"use client"

import { useEffect, useMemo, useState } from "react"

const projectFacts = [
  { label: "Role", value: "Product Designer", detail: "UX research, flows, UI system, prototype" },
  { label: "Timeline", value: "8 weeks", detail: "Discovery, IA, design, validation, handoff" },
  { label: "Tools", value: "Figma, FigJam, Maze", detail: "Plus Notion, Hotjar notes, design QA" },
  { label: "Team", value: "Solo case study", detail: "Designed with stakeholder-style review cycles" },
]

const overview = [
  {
    title: "Platform",
    body: "A next-generation investment dashboard for retail investors and early wealth builders who need one clear place to monitor portfolio health, asset performance, market movement, and account activity.",
  },
  {
    title: "Business context",
    body: "Fintech products win trust when users can understand risk, momentum, and action quickly. The dashboard needed to make complex data feel calm, credible, and useful without hiding important detail.",
  },
  {
    title: "User need",
    body: "Investors wanted faster answers to practical questions: What changed today, what is driving performance, what needs attention, and where should I go next?",
  },
  {
    title: "Product vision",
    body: "Create an elegant command center that supports daily portfolio review, deeper asset analysis, and confident investing decisions across desktop and tablet experiences.",
  },
]

const painPoints = [
  "Portfolio views often surface too many numbers at once, making it difficult to identify what matters first.",
  "Charts lack clear labels, comparisons, or time context, so users hesitate before making decisions.",
  "Transaction and watchlist data are frequently separated from performance insights, forcing users to jump between screens.",
  "Important status messages can feel alarming or vague when financial language is not clear enough.",
]

const metrics = [
  { value: "+34%", label: "Dashboard engagement", note: "Target lift from clearer entry points and visible portfolio priorities." },
  { value: "88%", label: "Task completion", note: "Prototype testers completed portfolio review and watchlist tasks without guidance." },
  { value: "-27%", label: "Navigation friction", note: "Fewer steps from overview to asset performance and transaction detail." },
  { value: "+41%", label: "Decision confidence", note: "Users reported higher confidence after reviewing contextual insights." },
]

const researchFindings = [
  {
    title: "Clarity beats density",
    body: "Users preferred fewer priority modules with better hierarchy over dense screens that tried to show every metric at once.",
  },
  {
    title: "Trust depends on context",
    body: "Competitive analysis showed that clear labels, date ranges, tooltips, and neutral language made financial dashboards feel more credible.",
  },
  {
    title: "Speed matters in daily review",
    body: "Most users wanted to scan performance, allocation, watchlist changes, and recent activity within the first minute.",
  },
  {
    title: "Risk needs plain language",
    body: "Users responded better to risk indicators when they explained the signal and next action instead of relying on color alone.",
  },
]

const flows = [
  {
    title: "Onboarding",
    body: "Collect investment goals, risk comfort, and account connections with progressive steps that explain why each data point matters.",
  },
  {
    title: "Dashboard overview",
    body: "Surface net value, daily movement, allocation health, alerts, and next actions before asking users to analyze details.",
  },
  {
    title: "Portfolio monitoring",
    body: "Group holdings by performance, allocation, and account type so users can understand exposure and concentration risk quickly.",
  },
  {
    title: "Asset performance review",
    body: "Combine price movement, historical charting, news context, and position impact in one decision-support view.",
  },
  {
    title: "Transaction history",
    body: "Use filters, status indicators, and readable transaction labels to help users audit activity without finance jargon.",
  },
  {
    title: "Watchlist management",
    body: "Let users track market opportunities, set alerts, and compare watched assets against portfolio goals.",
  },
]

const process = [
  {
    step: "01",
    title: "Information architecture",
    body: "Structured the product around review, investigate, and act. This kept daily monitoring separate from deeper analysis without creating a disconnected experience.",
  },
  {
    step: "02",
    title: "Wireframing",
    body: "Explored multiple density levels for KPI cards, chart modules, allocation views, and transaction tables before moving into high fidelity.",
  },
  {
    step: "03",
    title: "Layout iteration",
    body: "Balanced dark analytical surfaces with light case-study sections to keep the portfolio page readable while preserving the fintech product mood.",
  },
  {
    step: "04",
    title: "Component decisions",
    body: "Defined reusable cards, tabs, tables, chart legends, status pills, buttons, and insight blocks for a scalable dashboard system.",
  },
]

const solutionFeatures = [
  "Portfolio summary with total value, daily change, risk signal, and goal progress.",
  "Asset allocation view that explains exposure by sector, account, and asset class.",
  "Performance charts with time ranges, comparison lines, and readable labels.",
  "Market trends panel for index movement, watchlist shifts, and relevant news signals.",
  "Recent transactions table with status, date, account, amount, and audit-friendly filters.",
  "Quick actions for deposit, rebalance review, alert setup, and report export.",
  "Notifications that distinguish informational updates from urgent account issues.",
  "Watchlist management with asset cards, price movement, and saved alert states.",
]

const systemParts = [
  {
    title: "Color system",
    body: "Deep ink surfaces create focus, off-white areas improve reading, green signals gains, red is reserved for loss or risk, and cyan highlights active chart data.",
  },
  {
    title: "Typography",
    body: "A compact type scale separates financial values, module headings, labels, helper text, and tabular data without forcing users to decode hierarchy.",
  },
  {
    title: "Grid and spacing",
    body: "A 12-column desktop grid and 8px spacing rhythm keep cards, charts, tables, and side navigation predictable across responsive layouts.",
  },
  {
    title: "Components",
    body: "Reusable cards, buttons, tabs, chart legends, tables, status indicators, icon buttons, and empty states support product-ready expansion.",
  },
]

const trustItems = [
  "High contrast values and labels for fast portfolio scanning.",
  "Chart legends paired with labels and time ranges instead of relying only on color.",
  "Status indicators that combine text, icon treatment, and color for accessibility.",
  "Clear destructive and high-risk actions with confirmation patterns.",
  "Readable tables with consistent alignment for dates, values, and transaction states.",
]

const impact = [
  {
    title: "Faster understanding",
    body: "The dashboard helps users identify portfolio movement, risk signals, and recent activity without digging through separate pages.",
  },
  {
    title: "Higher confidence",
    body: "Clear hierarchy, plain-language insights, and consistent status patterns reduce hesitation around dense financial information.",
  },
  {
    title: "Scalable product system",
    body: "The UI system can support additional investing workflows such as goal planning, recommendations, and deeper analytics.",
  },
]

const nextSteps = [
  "Add personalized insights that explain why portfolio changes happened.",
  "Explore AI-assisted recommendations with transparent reasoning and risk education.",
  "Expand deeper analytics for allocation drift, tax lots, and benchmark comparisons.",
  "Optimize mobile flows for fast daily review and secure quick actions.",
  "Introduce goal-based investing tools tied to milestones and contribution plans.",
  "Test collaborative investing features for shared household planning or advisor review.",
]

const palette = [
  { name: "Ink 950", hex: "#070A12", text: "text-white" },
  { name: "Surface 900", hex: "#111827", text: "text-white" },
  { name: "Panel 800", hex: "#172033", text: "text-white" },
  { name: "Gain 500", hex: "#16A34A", text: "text-white" },
  { name: "Risk 500", hex: "#DC2626", text: "text-white" },
  { name: "Insight 400", hex: "#22D3EE", text: "text-[#071014]" },
  { name: "Focus 500", hex: "#4F46E5", text: "text-white" },
  { name: "Paper", hex: "#F7F8FB", text: "text-[#111827]" },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener?.("change", update)
    return () => query.removeEventListener?.("change", update)
  }, [])

  return reduced
}

function SectionHeader({ kicker, title, body, tone = "light", centered = false }) {
  const isDark = tone === "dark"

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-cyan-300" : "text-[#2563EB]"}`}>
        {kicker}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${isDark ? "text-white" : "text-[#10131A]"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isDark ? "text-white/70" : "text-[#4B5563]"}`}>
          {body}
        </p>
      ) : null}
    </div>
  )
}

function ImageFrame({ src, alt, caption, className = "" }) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-white/10 bg-[#0B1020] shadow-sm ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {caption ? (
        <figcaption className="border-t border-white/10 bg-[#0B1020] px-4 py-3 text-sm leading-6 text-white/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function MetricCard({ value, label, note }) {
  return (
    <article className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
      <p className="text-3xl font-semibold text-[#10131A]">{value}</p>
      <h3 className="mt-3 text-base font-semibold text-[#10131A]">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5B6472]">{note}</p>
    </article>
  )
}

function ShowcaseGallery() {
  const slides = useMemo(
    () => [
      { src: "/inve1.png", alt: "Investment dashboard overview screen" },
      { src: "/inve2.png", alt: "Investment dashboard chart and transactions screen" },
      { src: "/inve3.png", alt: "Investment dashboard portfolio analytics screen" },
      { src: "/inve4.png", alt: "Investment dashboard reporting screen" },
    ],
    [],
  )
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion, slides.length])

  return (
    <div
      className="overflow-hidden rounded-lg border border-[#CBD5E1] bg-[#0B1020]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] w-full">
        {slides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ opacity: slideIndex === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
        <p className="text-sm text-white/70">Prototype screens: overview, charts, transactions, and analytics states.</p>
        <div className="flex shrink-0 items-center gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show dashboard screen ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-2.5 rounded-full transition-all ${
                slideIndex === index ? "w-7 bg-cyan-300" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function InvestmentDashboardCaseStudy() {
  return (
    <main className="bg-[#F7F8FB] text-[#10131A]">
      <section className="relative overflow-hidden bg-[#070A12] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-cyan-300/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Fintech UX/UI Case Study
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Investment Dashboard UI/UX Design
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A complete UI/UX design system for a next-generation investment dashboard, built to make portfolio
              monitoring, performance review, and financial decision-making clearer for modern investors.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectFacts.map((item) => (
                <article key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/50">
            <ImageFrame
              src="/InvestDash.png"
              alt="Investment dashboard hero mockup with portfolio charts and key metrics"
              className="border-white/10"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ["Portfolio value", "$420.8K"],
                ["Daily change", "+3.1%"],
                ["Risk level", "Balanced"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-[#111827] p-3">
                  <p className="text-xs text-white/50">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Project overview"
            title="A high-trust investment experience for people who need clarity before action."
            body="The dashboard was designed as a fintech command center for individual investors who want to understand portfolio performance without feeling buried in data. The product supports daily review, deeper asset analysis, transaction auditing, and watchlist decision-making."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {overview.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#D9DEE8] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#10131A]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#566071]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            kicker="Problem statement"
            title="Investment dashboards often show data without helping users decide what to do next."
            body="Financial information can be dense, intimidating, and poorly prioritized. The UX challenge was to make the dashboard feel powerful without overwhelming users, so investors could understand performance, trust the numbers, and move through key tasks with less friction."
          />
          <div className="grid gap-4">
            {painPoints.map((point, index) => (
              <article key={point} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#10131A] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Goals and success metrics"
            title="Success meant making financial data easier to read, navigate, and trust."
            body="I framed the design goals around task clarity, portfolio comprehension, navigation efficiency, and investor confidence. The metrics below represent realistic product indicators for prototype validation and future launch measurement."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070A12] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="Research and discovery"
              title="The strongest opportunity was not more data. It was better prioritization."
              body="Research focused on how investors scan dashboards, interpret charts, and decide whether a financial signal is worth action. Competitive analysis of fintech tools showed that trust is built through context, legible hierarchy, and consistent system behavior."
              tone="dark"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {researchFindings.map((item) => (
                <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <ImageFrame
            src="/InvestDash2.png"
            alt="Large investment dashboard interface with charts, navigation, and transaction data"
            caption="Discovery focus: information hierarchy, chart interpretation, portfolio visibility, and transaction confidence."
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="User flows and product thinking"
            title="The product flow supports fast review first, then deeper investigation."
            body="The dashboard experience was organized around common investor behaviors: onboarding, daily overview, portfolio monitoring, asset review, transaction history, and watchlist management. Each flow reduces the distance between a signal and the next useful action."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flows.map((flow, index) => (
              <article key={flow.title} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#2563EB]">Flow {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#10131A]">{flow.title}</h3>
                <p className="mt-3 leading-7 text-[#566071]">{flow.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Design process"
            title="From information architecture to UI system, every screen was designed for decision support."
            body="The process moved from structure to interface detail: define what users need first, test screen density, refine chart and table behavior, then package the dashboard as a scalable fintech design system."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <p className="text-sm font-semibold text-[#2563EB]">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#10131A]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#566071]">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ShowcaseGallery />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Final solution"
              title="An elegant, data-rich dashboard that makes investing easier to understand."
              body="The final interface combines portfolio summary, asset allocation, performance charts, market trends, watchlist data, recent transactions, quick actions, and insight notifications into a focused investment workspace."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {solutionFeatures.map((feature) => (
                <div key={feature} className="rounded-lg border border-[#D9DEE8] bg-white p-4 shadow-sm">
                  <p className="text-sm leading-6 text-[#4B5563]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <ImageFrame
            src="/iPadMini.png"
            alt="Investment dashboard displayed on tablet mockup"
            caption="Final product direction: structured enough for analysis, calm enough for everyday portfolio review."
            className="border-[#CBD5E1] bg-white"
          />
        </div>
      </section>

      <section className="bg-[#070A12] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Design system and UI system"
            title="A scalable fintech system for cards, charts, tables, controls, and financial states."
            body="The UI system was built to support high-density financial data while keeping patterns predictable. It defines color, typography, grids, spacing, buttons, tabs, chart styles, tables, status indicators, and icon behavior."
            tone="dark"
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((color) => (
              <article key={color.name} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <div className={`flex h-24 items-end p-4 ${color.text}`} style={{ backgroundColor: color.hex }}>
                  <span className="text-sm font-semibold">{color.hex}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{color.name}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {systemParts.map((part) => (
              <article key={part.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">{part.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{part.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            kicker="Accessibility and trust"
            title="Financial UI has to feel clear, explainable, and consistent."
            body="The design uses hierarchy, labeling, contrast, and predictable component behavior to make important information easier to interpret. Accessibility considerations were especially important for charts, tables, alerts, and high-impact financial actions."
          />
          <div className="grid gap-4">
            {trustItems.map((item, index) => (
              <article key={item} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#16A34A] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Outcome and impact"
            title="The redesign turns portfolio data into a calmer, more actionable product experience."
            body="The solution helps investors understand what changed, why it matters, and where to go next. As a Product Designer, the key lesson was that fintech UX is less about visualizing every data point and more about designing the right sequence of attention."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {impact.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-6">
                <h3 className="text-xl font-semibold text-[#10131A]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#566071]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="Future opportunities for a smarter investing experience."
            body="The next phase would expand personalization, deeper analytics, mobile optimization, and guidance patterns that help investors act with more confidence."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {nextSteps.map((step, index) => (
              <article key={step} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#10131A] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
