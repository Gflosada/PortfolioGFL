import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  Gauge,
  Image as ImageIcon,
  Layers3,
  Lightbulb,
  Sparkles,
  Wand2,
} from "lucide-react"

import { ProjectSideNavigation } from "@/components/project-side-navigation"

const assets = {
  home: "/autovision/home.png",
  admin: "/autovision/admin-view.png",
  gallery: "/autovision/ai-gallery.png",
  garage: "/autovision/garage.png",
  upload: "/autovision/wizard-upload.png",
  details: "/autovision/wizard-details.png",
  customize: "/autovision/wizard-customize.png",
  prompt: "/autovision/wizard-prompt.png",
  review: "/autovision/wizard-review.png",
  result: "/autovision/before-after.png",
}

const projectFacts = [
  { label: "Role", value: "Product Designer", detail: "UX/UI, product strategy, IA, visual system" },
  { label: "Timeline", value: "8 weeks", detail: "Discovery, flows, interface design, prototype" },
  { label: "Team", value: "Solo concept", detail: "End-to-end product design case study" },
  { label: "Tools", value: "Figma, FigJam, AI tools", detail: "Wireframes, dashboard UI, design system" },
]

const overviewCards = [
  {
    title: "Consumer experience",
    body: "Car owners can upload their actual vehicle, describe a desired build, and generate realistic previews before committing to expensive modifications.",
  },
  {
    title: "Business workflow",
    body: "Wrap shops, paint studios, detailers, and custom garages can use AI previews to guide consultations, present concepts, and move clients toward quotes faster.",
  },
  {
    title: "SaaS opportunity",
    body: "A credit-based platform supports individual enthusiasts while scaling into shop seats, client libraries, branded galleries, and quote-ready project workflows.",
  },
]

const problems = [
  "Customers struggle to imagine paint, wraps, rims, lighting, decals, or body kits on their exact vehicle.",
  "Shops lose time explaining ideas with reference images, basic mockups, or verbal descriptions that do not build enough confidence.",
  "Traditional configurators are limited to generic models and rarely match real vehicle angles, lighting, paint condition, or aftermarket combinations.",
  "The path from inspiration to purchase has too much friction: users browse ideas, hesitate, ask for opinions, and delay service decisions.",
  "High-value modifications require trust before payment, especially when the final result is visual, personal, and hard to reverse.",
]

const goals = [
  "Improve confidence before purchase by showing realistic concepts on the user's own vehicle.",
  "Reduce friction with a guided customization workflow that makes AI generation feel approachable.",
  "Help shops present concepts faster during consultations and follow-up conversations.",
  "Support both creative exploration and controlled business workflows inside one SaaS product.",
  "Make a technically advanced AI tool feel premium, simple, and reliable.",
  "Use saved projects and galleries to encourage iteration, comparison, and conversion.",
]

const insights = [
  {
    title: "Realism creates trust",
    body: "Users are more likely to act when the preview preserves vehicle identity, angle, shadows, and context instead of producing a generic fantasy render.",
  },
  {
    title: "Customization can cause decision paralysis",
    body: "Paint finish, rim style, wrap color, decals, lighting, and body kits create many combinations. The interface needs to sequence choices without reducing creative control.",
  },
  {
    title: "Shops need speed and record keeping",
    body: "Business users need saved client builds, project notes, quote context, and reusable inspiration to reduce repeated consultation work.",
  },
  {
    title: "Prompting needs product design",
    body: "AI image tools are powerful but inconsistent for non-experts. Structured controls and examples help users write better prompts without learning prompt engineering.",
  },
]

const ecosystem = [
  "Landing page",
  "Dashboard",
  "New build flow",
  "My Garage",
  "AI Gallery",
  "Billing",
  "Shop Mode",
  "Before/After results",
]

const userFlow = [
  "Discover product",
  "Sign in",
  "Open dashboard",
  "Start new build",
  "Upload vehicle image",
  "Add vehicle details",
  "Choose customization types",
  "Build AI prompt",
  "Review and generate",
  "Compare before/after",
  "Save to garage or share",
  "Use shop features",
]

const walkthrough = [
  {
    label: "A",
    title: "Dashboard Home",
    image: assets.home,
    alt: "AutoVision AI dashboard home screen",
    body: "The dashboard gives users a clear operating center for new builds, credits, saved designs, and recent projects. The primary CTA stays visible because the most important action is starting a new vehicle concept.",
    points: ["Build overview", "Generation credits", "Saved design access", "Recent project history"],
  },
  {
    label: "C",
    title: "Before / After Result",
    image: assets.result,
    alt: "AutoVision AI before and after comparison result",
    body: "The result view is the flagship moment. Users can compare the original vehicle with the generated concept, review project details, and understand which prompt created the output.",
    points: ["Original vs generated preview", "Prompt transparency", "Project metadata", "Decision-ready comparison"],
  },
  {
    label: "D",
    title: "My Garage",
    image: assets.garage,
    alt: "AutoVision AI garage project library",
    body: "My Garage organizes saved concepts into a browsable library. It supports iteration, history, and retrieval for users who want to compare builds over time.",
    points: ["Saved builds", "Project browsing", "Filtering", "Iteration history"],
  },
  {
    label: "E",
    title: "AI Gallery",
    image: assets.gallery,
    alt: "AutoVision AI inspiration gallery",
    body: "The gallery turns inspiration into a product loop. Users can browse generated styles, discover trends, and use visual references to shape their own prompt decisions.",
    points: ["Style discovery", "Template inspiration", "Trend browsing", "Community-ready structure"],
  },
  {
    label: "F",
    title: "Shop Mode / Admin View",
    image: assets.admin,
    alt: "AutoVision AI shop mode admin dashboard",
    body: "Shop Mode extends the product into a B2B workflow for client projects, quote conversations, business profiles, and service conversion.",
    points: ["Client project management", "Quote workflow support", "Shop profile", "Business value layer"],
  },
]

const wizardSteps = [
  {
    title: "Upload vehicle",
    image: assets.upload,
    body: "The first step anchors the workflow around the user's real vehicle, making the output personal and trustworthy from the start.",
  },
  {
    title: "Vehicle details",
    image: assets.details,
    body: "Make, model, year, angle, and current condition add context for more believable generation and cleaner project records.",
  },
  {
    title: "Choose customizations",
    image: assets.customize,
    body: "Structured modification categories reduce ambiguity while still allowing broad creative exploration.",
  },
  {
    title: "Prompt builder",
    image: assets.prompt,
    body: "Freeform description works with guided controls, examples, and realism cues to reduce blank-state friction.",
  },
  {
    title: "Review and generate",
    image: assets.review,
    body: "The final checkpoint helps users confirm inputs, understand credit usage, and generate with confidence.",
  },
]

const uxDecisions = [
  "A guided wizard replaces a large freeform setup screen so users can focus on one decision at a time.",
  "Vehicle imagery is treated as the core interface object because the product value depends on visual confidence.",
  "Cards, tags, filters, and status chips make dense SaaS information easy to scan.",
  "Side navigation gives the product a familiar dashboard structure for both individual and business users.",
  "The visual language balances creative aspiration with operational clarity.",
  "Image-heavy layouts use consistent framing so the product feels premium without becoming noisy.",
]

const promptThinking = [
  "Structured inputs define color, finish, style, angle, realism level, background, and customization categories.",
  "Freeform description gives enthusiasts room to describe a specific build without forcing them into rigid templates.",
  "Prompt examples help users start faster and understand what a useful request looks like.",
  "Vehicle-preservation guidance keeps the AI focused on the user's actual car, not a different model or fantasy render.",
  "Review states make the prompt visible before generation so users can understand and improve their results.",
]

const systemItems = [
  "Dark premium theme",
  "Black and charcoal surfaces",
  "Electric blue accents",
  "Subtle glow and contrast",
  "Modern typography",
  "Reusable cards",
  "Stepper components",
  "Dashboard side nav",
  "Tags and status chips",
  "Comparison modules",
  "Form controls",
  "Strong spacing and alignment",
]

const accessibility = [
  "Clear hierarchy supports quick scanning across dashboards, forms, and gallery layouts.",
  "Readable typography and strong contrast keep dense information usable in a dark interface.",
  "Guided steps reduce cognitive load by separating upload, vehicle details, customization, prompt, and review.",
  "Labels, chips, filters, and navigation states clarify what is selectable, active, or complete.",
  "Touch-friendly controls support future mobile and tablet use in garages, shops, and consultation environments.",
]

const strategy = [
  {
    title: "Free",
    body: "Limited credits, personal projects, gallery browsing, and a low-risk way to test vehicle previews.",
  },
  {
    title: "Pro",
    body: "More generations, higher-quality outputs, saved build libraries, advanced prompt controls, and sharing.",
  },
  {
    title: "Business",
    body: "Shop seats, client builds, quote context, branded project galleries, usage tracking, and consultation tools.",
  },
]

const outcomes = [
  "Clearer customization decisions through realistic before/after previews.",
  "Better consultation workflow for shops that need fast visual concepting.",
  "Higher engagement potential through saved garages, galleries, and iteration history.",
  "A more scalable workflow than manual mockups or one-off design requests.",
  "A product direction that blends utility, aspiration, and premium SaaS UX.",
]

const nextSteps = [
  "AI video previews for rolling shots, lighting changes, and walkaround concepts.",
  "Mobile-first flow for users capturing vehicle photos from a garage or parking lot.",
  "Quote request integration for wrap, paint, tint, wheel, and body kit services.",
  "Collaborative shop/client feedback with comments, approvals, and selected versions.",
  "Personalized style recommendations based on vehicle type, budget, and saved inspiration.",
  "Business analytics for quote conversion, popular styles, and credit usage.",
  "Advanced preset templates for track builds, luxury wraps, overland kits, and show-car concepts.",
]

function SectionHeader({ kicker, title, body, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{body}</p> : null}
    </div>
  )
}

function ImageFrame({ src, alt, caption, className = "", imgClassName = "object-contain" }) {
  return (
    <figure
      className={`overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-cyan-950/25 ${className}`}
    >
      <img src={src} alt={alt} className={`h-auto w-full ${imgClassName}`} />
      {caption ? <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-slate-400">{caption}</figcaption> : null}
    </figure>
  )
}

function GlassCard({ children, className = "" }) {
  return <article className={`rounded-lg border border-white/10 bg-white/[0.045] p-6 ${className}`}>{children}</article>
}

function NumberedItem({ index, children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-400 text-sm font-bold text-slate-950">
        {index}
      </span>
      <p className="leading-7 text-slate-300">{children}</p>
    </div>
  )
}

export default function AutoVisionAICaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070B] text-white">
      <ProjectSideNavigation />

      <section className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              UX/UI Case Study
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              AutoVision AI
            </h1>
            <p className="mt-4 text-xl font-medium text-cyan-100">AI Vehicle Customization SaaS Dashboard</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A premium AI-powered SaaS platform that helps car owners and automotive shops visualize realistic
              customization concepts before committing to wraps, paint, rims, body kits, decals, lights, and carbon fiber
              upgrades.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectFacts.map((item) => (
                <GlassCard key={item.label} className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.detail}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-cyan-300/20 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/40">
              <ImageFrame src={assets.home} alt="AutoVision AI dashboard hero showcase" className="border-cyan-300/20" />
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  ["AI previews", "Real vehicle"],
                  ["Shop mode", "B2B workflow"],
                  ["Credits", "SaaS model"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-slate-950/80 p-3">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{value}</p>
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
            title="A vehicle customization platform built for imagination, confidence, and conversion."
            body="AutoVision AI connects consumer creativity with professional automotive workflows. Users can move from inspiration to realistic preview, while shops can turn those previews into clearer client conversations and faster service decisions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {overviewCards.map((item) => (
              <GlassCard key={item.title}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.body}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <ImageFrame src={assets.gallery} alt="AutoVision AI gallery screen" className="lg:col-span-2" />
            <ImageFrame src={assets.admin} alt="AutoVision AI shop mode admin screen" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            kicker="Problem"
            title="Customization decisions are visual, expensive, and difficult to trust without seeing the result first."
            body="The core design challenge was reducing uncertainty. The product needed to help users explore ambitious ideas while giving shops a practical way to turn those ideas into credible presentations."
          />
          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <NumberedItem key={problem} index={index + 1}>
                {problem}
              </NumberedItem>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Goals and objectives"
            title="Design goals focused on confidence, guidance, and business usefulness."
            body="The experience needed to feel advanced without becoming intimidating. Every major flow was designed to make the next step obvious and keep the user's vehicle at the center of the decision."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <GlassCard key={goal} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                <p className="leading-7 text-slate-300">{goal}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070B12] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Research and insights"
              title="Discovery showed that the biggest UX issue was not generation. It was decision confidence."
              body="I compared automotive configurators, design tools, aftermarket shopping flows, and AI image workflows. The strongest opportunity was a guided experience that preserved realism while making exploration fast."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {insights.map((item) => (
                <GlassCard key={item.title}>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <ImageFrame
            src={assets.result}
            alt="AutoVision AI generated vehicle comparison"
            caption="The result screen validates the product promise: realistic comparison on the user's actual vehicle."
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Information architecture"
            title="A product ecosystem for discovery, generation, organization, and shop conversion."
            body="The architecture separates consumer exploration from business operations while keeping both inside the same SaaS platform."
            centered
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item, index) => {
              const icons = [Sparkles, Gauge, Wand2, Car, ImageIcon, BadgeCheck, Building2, Layers3]
              const Icon = icons[index]
              return (
                <GlassCard key={item} className="p-5">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-lg font-semibold text-white">{item}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="User flow"
            title="The core journey moves from inspiration to generated concept to saved decision artifact."
            body="The flow is linear where users need guidance and flexible where users need comparison, saving, sharing, or shop support."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {userFlow.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-cyan-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Key screens"
            title="Product walkthrough"
            body="The screens below form the main case study story: dashboard orientation, guided generation, visual result comparison, project organization, inspiration, and business workflows."
            centered
          />

          <div className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300 font-bold text-slate-950">B</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">New Build Wizard</p>
                <h3 className="text-2xl font-semibold text-white">A step-by-step flow that turns complex AI setup into guided decisions.</h3>
              </div>
            </div>
            <div className="grid gap-5">
              {wizardSteps.map((step, index) => (
                <article key={step.title} className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div className="p-2 sm:p-4">
                    <p className="text-sm font-semibold text-cyan-300">Step {index + 1}</p>
                    <h4 className="mt-2 text-2xl font-semibold text-white">{step.title}</h4>
                    <p className="mt-3 leading-7 text-slate-400">{step.body}</p>
                  </div>
                  <ImageFrame src={step.image} alt={`AutoVision AI wizard ${step.title.toLowerCase()} screen`} />
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8">
            {walkthrough.map((screen) => (
              <article key={screen.title} className="grid gap-6 rounded-lg border border-white/10 bg-slate-950/60 p-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <ImageFrame src={screen.image} alt={screen.alt} />
                <div className="p-2 sm:p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300 font-bold text-slate-950">
                    {screen.label}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold text-white">{screen.title}</h3>
                  <p className="mt-4 leading-8 text-slate-300">{screen.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {screen.points.map((point) => (
                      <span key={point} className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070B12] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            kicker="UX strategy"
            title="Design decisions that made the product feel powerful without making users feel lost."
            body="The experience is built around progressive disclosure. Users start with familiar inputs, then move into more advanced controls only when they have enough context."
          />
          <div className="grid gap-4">
            {uxDecisions.map((decision, index) => (
              <NumberedItem key={decision} index={index + 1}>
                {decision}
              </NumberedItem>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ImageFrame src={assets.prompt} alt="AutoVision AI prompt builder screen" />
          <div>
            <SectionHeader
              kicker="Prompt-builder UX"
              title="The prompt builder turns AI generation into a usable design tool."
              body="The goal was to help non-expert users get realistic outputs without needing advanced prompting skills. Structured controls provide reliability, while freeform text preserves creative direction."
            />
            <div className="mt-8 grid gap-3">
              {promptThinking.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <Lightbulb className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Visual design system"
            title="A dark luxury interface system for AI, performance, and professional SaaS use."
            body="The system uses black and charcoal surfaces, electric blue accents, restrained glow, compact typography, and reusable modules to match premium automotive expectations while keeping the product operational."
            centered
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Carbon", "#05070B"],
                ["Charcoal", "#111827"],
                ["Electric blue", "#22D3EE"],
                ["Signal blue", "#3B82F6"],
                ["Mist", "#E2E8F0"],
                ["Slate", "#64748B"],
              ].map(([name, hex]) => (
                <div key={name} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
                  <div className="flex h-24 items-end p-4" style={{ backgroundColor: hex }}>
                    <span className="text-sm font-semibold text-white drop-shadow">{hex}</span>
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold text-white">{name}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {systemItems.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-slate-950/65 p-4">
                  <p className="font-medium text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            kicker="Accessibility and usability"
            title="The interface reduces cognitive load while handling a feature-rich product."
            body="Because the product combines AI, automotive terminology, image generation, galleries, credits, and business tools, usability depends on clear hierarchy and predictable patterns."
          />
          <div className="grid gap-4">
            {accessibility.map((item, index) => (
              <NumberedItem key={item} index={index + 1}>
                {item}
              </NumberedItem>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070B12] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Business model"
            title="A SaaS strategy with B2C adoption and B2B expansion."
            body="The product can start with enthusiasts generating personal previews, then expand into professional shop workflows where saved projects, client reviews, and quote conversion create deeper value."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {strategy.map((tier) => (
              <GlassCard key={tier.title}>
                <h3 className="text-2xl font-semibold text-white">{tier.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{tier.body}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <ImageFrame src={assets.admin} alt="AutoVision AI shop dashboard business workflow" />
            <ImageFrame src={assets.garage} alt="AutoVision AI saved garage business and consumer library" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Outcome and impact"
            title="A complete product direction that connects visual aspiration with practical workflow value."
            body="AutoVision AI is designed to help users make clearer customization decisions and help shops communicate concepts with less manual effort. From a product design perspective, the strongest opportunity is turning AI output into a trusted decision-making experience."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {outcomes.map((item) => (
              <GlassCard key={item} className="md:col-span-1">
                <Gauge className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-sm leading-6 text-slate-300">{item}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-lg leading-8 text-cyan-50">
              Reflection: the project reinforced that AI product design is not only about powerful generation. The design
              work is in shaping inputs, building trust in outputs, and giving users a clear next action after the image is
              created.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="Future opportunities for deeper realism, collaboration, and business intelligence."
            body="The next phase would extend AutoVision AI from a generation dashboard into a collaborative sales and customization workspace for shops and clients."
          />
          <div className="grid gap-4">
            {nextSteps.map((step) => (
              <div key={step} className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="leading-7 text-slate-300">{step}</p>
                <ArrowRight className="h-5 w-5 text-cyan-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
