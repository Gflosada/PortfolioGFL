"use client"

import React, { useEffect, useRef, useState } from "react"

const projectFacts = [
  { label: "Role", value: "Product Designer / UX Researcher / UI Designer", detail: "Research, strategy, flows, UI system" },
  { label: "Timeline", value: "9 weeks", detail: "Research, wireframes, testing, high fidelity" },
  { label: "Tools", value: "Figma, FigJam, Maze", detail: "Prototype testing, notes, design QA" },
  { label: "Project type", value: "Solo product case study", detail: "End-to-end mobile fintech experience" },
]

const overview = [
  {
    title: "Product",
    body: "A mobile financial app designed to help users understand their money, track transactions, make payments, and review spending insights with less cognitive effort.",
  },
  {
    title: "Business context",
    body: "Financial products compete on trust and clarity. The app needed to feel secure, approachable, and efficient while supporting everyday account actions that users repeat often.",
  },
  {
    title: "User need",
    body: "Users wanted a faster way to see account health, understand recent activity, and complete payments without feeling anxious about making mistakes.",
  },
  {
    title: "Product vision",
    body: "Create a calm, mobile-first financial experience that turns essential money tasks into clear, guided flows for busy users and first-time digital finance adopters.",
  },
]

const problemPoints = [
  "Many financial apps overload users with balances, charts, offers, and alerts before explaining what needs attention.",
  "Account actions can feel risky when labels, confirmation states, and feedback patterns are unclear.",
  "Poor information hierarchy forces users to search for everyday tasks like transaction review, transfers, and budget progress.",
  "Accessibility gaps in contrast, tap targets, and data labels reduce trust for users who need a more inclusive experience.",
]

const metrics = [
  { value: "93%", label: "Core task completion", note: "Prototype users completed overview, transfer, and transaction tasks without help." },
  { value: "-38%", label: "Onboarding drop-off", note: "Projected reduction from shorter steps and clearer account-setup guidance." },
  { value: "+31%", label: "Daily engagement", note: "Target lift from faster access to spending insights and account health." },
  { value: "4.6/5", label: "Usability score", note: "Average rating from moderated prototype feedback sessions." },
]

const researchFindings = [
  {
    title: "Confidence depends on confirmation",
    body: "Users were more comfortable with payments and transfers when the app previewed fees, recipient details, timing, and confirmation states before submission.",
  },
  {
    title: "Financial language needs translation",
    body: "Participants preferred plain-language labels such as available balance, scheduled payment, and spending limit over technical banking terms.",
  },
  {
    title: "Overview screens should prioritize action",
    body: "Users wanted to see the current balance, recent movement, upcoming obligations, and one clear next step before exploring deeper insights.",
  },
  {
    title: "Accessibility is part of trust",
    body: "Readable type, strong contrast, large touch targets, and non-color-only feedback helped the app feel more dependable.",
  },
]

const personas = [
  {
    name: "Maya",
    type: "Busy professional",
    need: "Needs a quick daily money check before making purchases or transfers.",
    frustration: "Feels overwhelmed when budgeting tools require too much setup.",
  },
  {
    name: "Daniel",
    type: "New digital banking user",
    need: "Needs clear labels, reassurance, and step-by-step payment confirmation.",
    frustration: "Worries about sending money to the wrong account or missing fees.",
  },
  {
    name: "Sofia",
    type: "Goal-focused saver",
    need: "Needs spending insights and savings progress that feel motivating, not judgmental.",
    frustration: "Loses trust when apps show charts without explaining what changed.",
  },
]

const flows = [
  {
    title: "Onboarding",
    body: "A shorter setup flow asks for only essential information first, then introduces security, account connection, and preferences with clear progress cues.",
  },
  {
    title: "Account overview",
    body: "The home screen prioritizes available balance, recent transactions, upcoming payments, spending insight, and primary actions.",
  },
  {
    title: "Transaction tracking",
    body: "Search, filters, merchant labels, categories, and status states help users understand where money moved and why.",
  },
  {
    title: "Payments and transfers",
    body: "The transfer flow uses recipient review, amount confirmation, fee visibility, and success feedback to reduce anxiety.",
  },
  {
    title: "Budgeting insights",
    body: "Spending patterns are summarized in plain language with visual cues, category breakdowns, and suggested next actions.",
  },
  {
    title: "Settings and profile",
    body: "Security, notifications, personal information, accessibility preferences, and support stay grouped in predictable locations.",
  },
]

const process = [
  {
    step: "01",
    title: "Information architecture",
    body: "Grouped the app around overview, activity, payments, insights, and profile so the core financial tasks remained easy to locate.",
  },
  {
    step: "02",
    title: "Wireframing",
    body: "Mapped low-fidelity versions of onboarding, dashboard, transactions, transfer confirmation, and budgeting screens.",
  },
  {
    step: "03",
    title: "UX decisions",
    body: "Reduced screen density, added confirmation steps, improved labels, and moved high-frequency tasks closer to the home screen.",
  },
  {
    step: "04",
    title: "Iteration",
    body: "User feedback shaped the final hierarchy, especially around payment reassurance, spending context, and navigation clarity.",
  },
  {
    step: "05",
    title: "UI refinement",
    body: "Built a calm visual system with readable cards, friendly charts, accessible controls, and consistent feedback patterns.",
  },
]

const solutionFeatures = [
  "Financial overview with balance, account health, upcoming payments, and recent movement.",
  "Transaction history with searchable activity, merchant labels, category tags, and status feedback.",
  "Transfer and payment actions with recipient review, timing, fee visibility, and confirmation screens.",
  "Budgeting insights that explain spending patterns in plain language and highlight useful next steps.",
  "Notifications for deposits, transfers, bills, low balance, budget progress, and security events.",
  "Clear bottom navigation that keeps overview, activity, payments, insights, and profile within reach.",
  "Accessible UI patterns with strong contrast, readable values, and touch-friendly financial controls.",
]

const uiSystem = [
  {
    title: "Typography",
    body: "Large financial values, clear labels, and compact supporting copy make balances and actions easy to scan on mobile.",
  },
  {
    title: "Color system",
    body: "A high-trust navy and charcoal foundation pairs with green for positive money movement, blue for actions, and rose for warnings.",
  },
  {
    title: "Iconography",
    body: "Simple line icons support key tasks such as transfer, card, bill, security, search, categories, and profile settings.",
  },
  {
    title: "Cards and forms",
    body: "Account cards, transaction rows, amount inputs, recipient fields, and confirmation panels follow consistent spacing and state rules.",
  },
  {
    title: "Navigation",
    body: "The tab structure uses familiar mobile patterns with strong active states and labels that avoid ambiguous finance jargon.",
  },
  {
    title: "Feedback patterns",
    body: "Success, warning, pending, declined, and secure states combine color, labels, and icon support instead of relying on color alone.",
  },
]

const accessibility = [
  "Color contrast was checked for primary financial values, buttons, forms, and transaction states.",
  "Touch targets were sized for thumb reach across bottom navigation, quick actions, and transfer controls.",
  "Labels explain what each amount, fee, status, and category means without requiring financial expertise.",
  "Charts and insights include text summaries so users do not need to interpret visuals alone.",
  "Confirmation states help prevent costly mistakes during payments, transfers, and account changes.",
]

const impact = [
  {
    title: "More confidence",
    body: "Users can review account health, understand transaction movement, and complete financial actions with clearer reassurance.",
  },
  {
    title: "Lower friction",
    body: "The core flows reduce unnecessary steps and make everyday actions easier to repeat on mobile.",
  },
  {
    title: "Stronger product foundation",
    body: "The UI system supports future growth across budgeting, savings, recommendations, and accessibility settings.",
  },
]

const nextSteps = [
  "Add smarter financial insights that explain spending changes and recurring patterns.",
  "Introduce personalization for budgets, reminders, savings goals, and financial education.",
  "Explore AI-powered recommendations with transparent reasoning and user control.",
  "Improve budgeting tools with monthly planning, category limits, and progress coaching.",
  "Add deeper analytics for retention, onboarding drop-off, transfer completion, and feature usage.",
  "Expand accessibility enhancements with screen-reader testing and reduced-motion preferences.",
]

const palette = [
  { name: "Trust Navy", hex: "#0F172A", text: "text-white" },
  { name: "Surface", hex: "#F7F8FB", text: "text-[#101113]" },
  { name: "Action Blue", hex: "#2563EB", text: "text-white" },
  { name: "Success Green", hex: "#16A34A", text: "text-white" },
  { name: "Warning Rose", hex: "#E11D48", text: "text-white" },
  { name: "Data Cyan", hex: "#22D3EE", text: "text-[#071014]" },
]

const personaSlides = ["/targetper.png", "/persona2.png", "/persona3.png", "/persona4.png"]

function SectionHeader({ kicker, title, body, centered = false, tone = "light" }) {
  const isDark = tone === "dark"

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-cyan-300" : "text-[#2563EB]"}`}>
        {kicker}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${isDark ? "text-white" : "text-[#101113]"}`}>
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
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {caption ? (
        <figcaption className="border-t border-white/10 bg-[#101113] px-4 py-3 text-sm leading-6 text-white/75">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function PersonaCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setIdx((current) => (current + 1) % personaSlides.length), 4200)
    return () => window.clearInterval(timer)
  }, [])

  const prev = () => setIdx((current) => (current - 1 + personaSlides.length) % personaSlides.length)
  const next = () => setIdx((current) => (current + 1) % personaSlides.length)

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#D9DEE8] bg-white shadow-sm">
      <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
        {personaSlides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Financial app research persona ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-700 ${
              index === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prev}
        aria-label="Previous persona"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#101113] px-3 py-2 text-white"
        type="button"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next persona"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#101113] px-3 py-2 text-white"
        type="button"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {personaSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setIdx(index)}
            className={`h-2.5 rounded-full transition-all ${index === idx ? "w-7 bg-[#2563EB]" : "w-2.5 bg-[#94A3B8]"}`}
            aria-label={`Go to persona ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}

export default function FintechCaseStudy() {
  return (
    <main className="bg-[#F7F8FB] text-[#101113]">
      <section className="relative overflow-hidden bg-[#0F172A] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-cyan-300/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Mobile Fintech UX/UI Case Study
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Financial App
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A user-centered financial application designed through research, UX strategy, and UI development to make
              everyday money management clearer, calmer, and easier to trust.
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
              src="/iPhonefin.png"
              alt="Financial app mobile screens hero preview"
              caption="Hero preview: mobile-first financial overview, clear actions, and high-trust visual direction."
              className="border-white/10"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ["Task success", "93%"],
                ["Usability", "4.6/5"],
                ["Core flows", "6"],
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
            title="A seamless financial product designed to simplify money management."
            body="The app supports users who want to understand their finances quickly, complete high-confidence account actions, and build better financial habits without feeling overwhelmed by banking complexity."
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
            title="Financial apps often make simple money tasks feel more complicated than they need to be."
            body="The UX challenge was to reduce cognitive overload while increasing trust. Users needed clearer flows, stronger accessibility, more predictable feedback, and better information hierarchy for everyday financial interactions."
          />
          <div className="grid gap-4">
            {problemPoints.map((point, index) => (
              <article key={point} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#101113] text-sm font-semibold text-white">
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
            title="Success meant making financial tasks easier, safer, and more understandable."
            body="I defined success around usability, confidence, engagement, onboarding completion, and reduced friction in core mobile flows such as account review, transaction tracking, and transfers."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="Research and discovery"
              title="Research showed that trust is built through clarity, not feature density."
              body="The project was grounded in user interviews, pain-point mapping, behavioral insights, and opportunity mapping. The biggest pattern was consistent: users wanted financial tools that explain what is happening and help them avoid mistakes."
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
            src="/roadfib.png"
            alt="Financial app research and journey planning board"
            caption="Discovery focus: money-management anxiety, trust moments, task clarity, and accessible mobile behavior."
            className="border-white/10"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="User personas and needs"
            title="The design supports users with different confidence levels around money."
            body="Personas helped keep the product centered on practical needs: quick review, reassurance during financial actions, spending awareness, and accessible language."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="grid gap-4">
              {personas.map((persona) => (
                <article key={persona.name} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">{persona.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#101113]">{persona.name}</h3>
                  <p className="mt-3 leading-7 text-[#4B5563]">
                    <span className="font-semibold text-[#101113]">Needs: </span>
                    {persona.need}
                  </p>
                  <p className="mt-2 leading-7 text-[#4B5563]">
                    <span className="font-semibold text-[#101113]">Frustration: </span>
                    {persona.frustration}
                  </p>
                </article>
              ))}
            </div>
            <PersonaCarousel />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="User flows and experience strategy"
            title="Core flows were simplified to support speed, trust, and clarity."
            body="The experience strategy keeps important financial actions visible, breaks risky tasks into understandable steps, and gives users feedback before and after each decision."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flows.map((flow, index) => (
              <article key={flow.title} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <p className="text-sm font-semibold text-[#2563EB]">Flow {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#101113]">{flow.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{flow.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <ImageCompare frontSrc="/phonecard1.png" backSrc="/phonecard2.png" alt="iPhone screen evolution" aspect="9/19" />
          </div>
          <div>
            <SectionHeader
              kicker="Design process"
              title="From low-fidelity structure to a high-trust mobile interface."
              body="The before-and-after comparison preserves the original interaction: drag the handle to compare screen evolution from early structure to refined UI. Research shaped the hierarchy, labels, confirmation states, and navigation decisions."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {process.map((item) => (
                <article key={item.step} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#2563EB]">{item.step}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#101113]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Final solution"
            title="An intuitive, modern financial app built around clarity and confidence."
            body="The final app combines essential account information, transaction visibility, transfer actions, budgeting insights, notifications, and accessible navigation into a mobile experience that feels calm and easy to use."
            centered
          />
          <div className="mt-10">
            <ImageFrame
              src="/phonesrend.png"
              alt="Final financial app screens"
              caption="Final mobile experience: overview, activity, payments, insights, and accessible UI patterns."
              className="bg-white"
            />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutionFeatures.map((feature) => (
              <article key={feature} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-4">
                <p className="text-sm leading-6 text-[#4B5563]">{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="UI system and visual design"
            title="A calm, high-trust visual language for everyday financial decisions."
            body="The UI system makes the app feel consistent, scalable, and product-ready through typography, color, iconography, cards, forms, buttons, navigation, and status feedback patterns."
            tone="dark"
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uiSystem.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            kicker="Accessibility and usability"
            title="Accessibility was treated as a trust requirement from the start."
            body="Because financial actions can carry real consequences, accessibility decisions were integrated into layout, labels, touch targets, contrast, charts, and feedback patterns rather than added after the visual design."
          />
          <div className="grid gap-4">
            {accessibility.map((item, index) => (
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
            title="The redesign makes everyday financial management feel more understandable and less stressful."
            body="The final solution supports engagement, clarity, and confidence by reducing unnecessary complexity in the moments where users need reassurance most. The biggest lesson was that financial UX succeeds when the interface makes risk, action, and feedback easy to understand."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {impact.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-6">
                <h3 className="text-xl font-semibold text-[#101113]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="Future opportunities for a smarter, more personalized financial product."
            body="The next phase would expand intelligence, personalization, accessibility, and analytics so the app can continue learning from user behavior while staying clear and trustworthy."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {nextSteps.map((step, index) => (
              <article key={step} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#2563EB] text-sm font-semibold text-white">
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

function ImageCompare({ frontSrc, backSrc, alt = "", aspect = "16/9" }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(0.5)

  const updateFromEvent = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const clientX = (e.touches && e.touches[0]?.clientX) ?? e.clientX
    const next = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    setPos(next)
  }

  const startDrag = (e) => {
    e.preventDefault()
    updateFromEvent(e)
    const move = (ev) => updateFromEvent(ev)
    const up = () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
      window.removeEventListener("touchmove", move)
      window.removeEventListener("touchend", up)
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)
    window.addEventListener("touchmove", move, { passive: false })
    window.addEventListener("touchend", up)
  }

  const percent = pos * 100

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border-4 border-white bg-black/5"
      style={{ aspectRatio: aspect }}
      onTouchStart={startDrag}
    >
      <img src={backSrc} alt={alt || "before"} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        <img src={frontSrc} alt={alt || "after"} className="h-full w-full object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${percent}%`, transform: "translateX(-0.5px)" }}
      />
      <button
        type="button"
        aria-label="Drag to compare"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="absolute top-1/2 -translate-y-1/2 translate-x-[-50%] rounded-full bg-white/90 p-2 shadow-md"
        style={{ left: `${percent}%` }}
      >
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow-inner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        </div>
      </button>
    </div>
  )
}
