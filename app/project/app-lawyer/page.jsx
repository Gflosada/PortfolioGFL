import Link from "next/link"
import { ArrowLeft, ArrowRight, House, UserRound, Compass } from "lucide-react"

import { ProjectSideNavigation } from "@/components/project-side-navigation"
import { IntakeGallery } from "./intake-gallery"

export const metadata = {
  title: "App Lawyer Case Study | German Losada",
  description:
    "UI/UX design, reusable interface patterns, and React-based prototyping for App Lawyer / YuYo, a Canadian immigration preparation product in development.",
}

const projectScreens = Array.from({ length: 21 }, (_, index) => {
  const order = index + 1

  return {
    order,
    image: `/appLawyer/${order}.jpeg`,
    // This capture includes extra blank space beneath the bottom action buttons.
    cropBottom: order === 12 ? 80 : 0,
  }
})

const screenByOrder = new Map(projectScreens.map((screen) => [screen.order, screen]))

const projectFacts = [
  { label: "My role", value: "Product Designer (UI/UX) & Front-End Prototyping" },
  { label: "Team", value: "1 Product Designer, 1 UX Designer, 2 Developers" },
  { label: "Platform", value: "Mobile application" },
  { label: "Focus", value: "UI/UX, Design Systems, React Prototyping" },
  { label: "Status", value: "Product in development" },
]

const journeyStages = [
  {
    label: "01",
    eyebrow: "Launch and trust",
    title: "A focused opening moment gives the product a clear legal-tech identity.",
    body: "The splash screen introduces App Lawyer with a friendly brand signal while keeping the product grounded in immigration support and case preparation.",
    screens: [
      {
        ...screenByOrder.get(1),
        alt: "App Lawyer splash screen with product mascot and app name",
      },
    ],
    points: ["Brand launch", "Mobile-first framing", "Approachable tone"],
    layout: "single",
  },
  {
    label: "02",
    eyebrow: "Onboarding",
    title: "The first-run experience explains the product promise in small, clear steps.",
    body: "The onboarding sequence introduces immigration pathfinding, AI-assisted guidance, and document preparation without overwhelming the user before sign-in.",
    screens: [2, 3, 4].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer onboarding screen ${order - 1}`,
    })),
    points: ["Value proposition", "Progressive disclosure", "Step-by-step introduction"],
    layout: "triple",
  },
  {
    label: "03",
    eyebrow: "Authentication",
    title: "Sign-in is designed as a calm gateway into a personal case workspace.",
    body: "The sign-in design brings account access before the case workspace. Email and social options are visible interface choices; this screen alone does not establish authentication integrations or data security.",
    screens: [
      {
        ...screenByOrder.get(5),
        alt: "App Lawyer sign-in screen with email and social authentication options",
      },
    ],
    points: ["Account access", "Privacy framing", "Sign-in options"],
    layout: "single",
  },
  {
    label: "04",
    eyebrow: "Case workspace",
    title: "Users choose an application, start a new case, or continue where they left off.",
    body: "Home gives application selection a clear starting point. The intended flow carries that choice into a new case without asking again, while saved cases resume in their own context. The case cards shown here pair progress with a next action; their risk labels are a refinement priority, not an approval prediction.",
    screens: [
      {
        order: "home-video",
        video: "/WhatsApp Video 2026-10-15 at 8.59.48 AM.mp4",
        alt: "App Lawyer home screen showing users which application they can start",
      },
      {
        ...screenByOrder.get(7),
        alt: "App Lawyer continue case screen with active applications and progress",
      },
    ],
    points: ["Application selection", "Active cases", "Next recommended steps"],
    layout: "double",
  },
  {
    label: "05",
    eyebrow: "Document organization",
    title: "Documents are treated as part of the workflow, not a detached file cabinet.",
    body: "The document detail separates file status from review status and explicitly labels mock processing. That distinction matters: an uploaded file is not automatically verified evidence. The intended AI guidance would explain missing or relevant documents; its accuracy and integration still require validation.",
    screens: [8, 9].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer document workflow screen ${order}`,
    })),
    points: ["Document upload", "Status review", "Evidence support"],
    layout: "double",
  },
  {
    label: "06",
    eyebrow: "Case setup and intake",
    title: "Structured intake turns a complex legal path into a guided product flow.",
    body: "These screens show case setup and grouped intake questions. The visitor-visa screen pairs a step count with completion progress and a save confirmation, giving users both orientation and feedback. The intended Home-to-intake flow preserves the selected application; cross-session saving still needs validation.",
    screens: [10, 11, 12].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer case setup and intake screen ${order}`,
    })),
    points: ["Goal selection", "Independent case setup", "Structured answers"],
    layout: "triple",
  },
  {
    label: "07",
    eyebrow: "Deadlines and forms",
    title: "Dates and intake details become visible, editable parts of the case.",
    body: "Deadline selection and detailed form fields help users move from vague uncertainty into concrete data that the workspace can track and review.",
    screens: [13, 14, 15].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer deadline and intake detail screen ${order}`,
    })),
    points: ["Deadline tracking", "Detailed intake", "Intake continuity"],
    layout: "triple",
  },
  {
    label: "08",
    eyebrow: "CASE INTAKE",
    title: "Structured case details are intended to give guidance relevant context.",
    body: "The intake groups personal ties, host details, immigration history, and documents into distinct steps. My interaction-design focus is keeping labels, selection controls, and navigation consistent as the questions change. Any use of these answers for AI guidance needs clear consent and case boundaries.",
    screens: [16, 17, 18, 19].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer case intake screen ${order}`,
    })),
    points: ["Case intake", "Personalized AI", "User profile", "Immigration history", "Case context"],
    layout: "quad",
    featured: true,
  },
  {
    label: "09",
    eyebrow: "Case-aware AI",
    title: "AI is designed as a workflow layer, not a standalone chat tab.",
    body: "The assistant screen identifies the active application, labels case-specific guidance, and reminds users that AI can make mistakes. These cues connect the conversation to its context while setting expectations. Their presence does not establish legal accuracy or a live AI integration.",
    screens: [20, 21].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer AI assistant and checklist screen ${order}`,
    })),
    points: ["Case context", "Actionable responses", "Document checklist"],
    layout: "double",
  },
]

function SectionHeader({ eyebrow, title, body, centered = false, light = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-indigo-200" : "text-indigo-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#151824]"
        }`}
      >
        {title}
      </h2>
      {body ? <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/72" : "text-[#626B7C]"}`}>{body}</p> : null}
    </div>
  )
}

function PhoneFrame({ src, video, alt, cropBottom = 0, priority = false, className = "" }) {
  return (
    <figure
      className={`mx-auto h-fit w-full max-w-[250px] self-start overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-indigo-950/12 ${className}`}
    >
      {video ? (
        <video
          src={video}
          aria-label={alt}
          muted
          autoPlay
          loop
          playsInline
          controls
          preload="metadata"
          className="block h-auto w-full rounded-[1.5rem] bg-black"
        >
          Your browser does not support embedded video playback.
        </video>
      ) : (
        <div
          className="w-full overflow-hidden rounded-[1.5rem]"
          style={cropBottom ? { aspectRatio: `946 / ${2048 - cropBottom}` } : undefined}
        >
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="block h-auto w-full"
          />
        </div>
      )}
    </figure>
  )
}

function VideoFrame({ src, poster, title, caption }) {
  return (
    <figure className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-2 shadow-2xl shadow-black/25">
      <video
        src={src}
        title={title}
        poster={poster}
        muted
        autoPlay
        loop
        playsInline
        controls
        preload="auto"
        className="aspect-[9/16] max-h-[680px] w-full rounded-[1.55rem] bg-black object-contain"
      >
        Your browser does not support embedded video playback.
      </video>
      {caption ? <figcaption className="px-4 py-4 text-sm leading-6 text-white/70">{caption}</figcaption> : null}
    </figure>
  )
}

function FeatureCard({ icon: Icon, title, body, dark = false }) {
  return (
    <article
      className={`rounded-lg border p-5 shadow-sm ${
        dark ? "border-white/10 bg-white/[0.055]" : "border-slate-200 bg-white"
      }`}
    >
      {Icon ? <Icon className={`h-6 w-6 ${dark ? "text-indigo-200" : "text-indigo-600"}`} /> : null}
      <h3 className={`mt-4 text-lg font-semibold leading-7 ${dark ? "text-white" : "text-[#151824]"}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/68" : "text-[#626B7C]"}`}>{body}</p>
    </article>
  )
}

// Static, semantic diagrams keep the narrative readable without client-side JavaScript.
function FlowDiagram({ title, description, steps }) {
  return (
    <figure className="mt-8">
      <figcaption className="mb-5 max-w-3xl">
        <h3 className="text-lg font-semibold text-[#151824]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#626B7C]">{description}</p>
      </figcaption>
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map(([label, body, branches], index) => (
          <li key={label} className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
              {index < steps.length - 1 ? <ArrowRight aria-hidden="true" className="h-5 w-5 rotate-90 text-indigo-600 md:rotate-0" /> : null}
            </div>
            <p className="mt-4 font-semibold leading-6 text-[#151824]">{label}</p>
            <p className="mt-2 text-sm leading-6 text-[#626B7C]">{body}</p>
            {branches ? <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#626B7C]">{branches.map((branch) => <li key={branch}>{branch}</li>)}</ul> : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}

const proposedJourney = [
  ["Discover requirements", "Find what applies", "Rules feel scattered", "Explain requirements in plain language"],
  ["Choose application", "Choose the right path", "Unsure which route fits", "Keep the selected path in context"],
  ["Complete intake", "Share personal details", "Too much to answer at once", "Break questions into clear steps"],
  ["Upload documents", "Gather supporting files", "Unclear what is still needed", "Show what is missing and received"],
  ["AI review", "Understand potential gaps", "Feedback can feel generic", "Link findings to a correction"],
  ["Prepare application", "Check what remains", "Hard to judge readiness", "Summarize preparation status"],
]

function ProposedJourneyMap() {
  return (
    <figure className="mt-10">
      <figcaption className="mb-5 max-w-3xl">
        <h3 className="text-lg font-semibold text-[#151824]">A proposed applicant journey</h3>
        <p className="mt-2 text-sm leading-6 text-[#626B7C]">Design assumption for discussion; this journey is not based on observed user research.</p>
      </figcaption>
      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {proposedJourney.map(([stage, action, friction, opportunity], index) => (
          <li key={stage} className="relative min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-sm font-bold text-indigo-700">{String(index + 1).padStart(2, "0")}</span>
              <h4 className="font-semibold text-[#151824]">{stage}</h4>
              {index < proposedJourney.length - 1 ? <ArrowRight aria-hidden="true" className="ml-auto hidden h-4 w-4 text-indigo-500 xl:block" /> : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-[#626B7C]"><span className="font-semibold text-[#151824]">Action · </span>{action}</p>
            <p className="mt-2 text-sm leading-6 text-[#626B7C]"><span className="font-semibold text-[#151824]">Friction · </span>{friction}</p>
            <p className="mt-2 text-sm leading-6 text-[#626B7C]"><span className="font-semibold text-indigo-700">Opportunity · </span>{opportunity}</p>
          </li>
        ))}
      </ol>
    </figure>
  )
}

function InformationArchitecture() {
  const navigation = [
    { title: "Home", status: "Screens shown", items: ["Start application · choose type", "Recent applications", "Continue an application"] },
    { title: "Cases", status: "Screens shown", items: ["All applications", "Open an individual case ↓"] },
    { title: "Ask YuYo AI", status: "UI shown · live AI unverified", items: ["General immigration questions", "Case context · when authorized"] },
    { title: "Documents", status: "Status UI shown · actions unverified", items: ["Case-linked files", "Upload · view · replace · remove", "Verification and review status"] },
    { title: "Profile / Settings", status: "Planned / unverified", items: ["Account information", "Privacy and AI consent", "Account / data deletion"] },
  ]
  const workflow = [
    { title: "Application overview", status: "Screen shown" },
    { title: "Smart intake", status: "Visitor Visa implemented" },
    { title: "Document checklist & uploads", status: "Processing mocked" },
    { title: "AI application review", status: "Planned" },
    { title: "Contextual AI assistance", status: "Interface shown · live AI unverified" },
    { title: "Application package", status: "Planned" },
  ]
  return (
    <figure className="mt-10">
      <figcaption className="mb-5"><h3 className="text-lg font-semibold text-[#151824]">Information architecture</h3><p className="mt-2 text-sm leading-6 text-[#626B7C]">Global navigation opens into independent cases. Visitor Visa is the implemented intake shown here; other workflow capabilities are labeled by their current evidence.</p></figcaption>
      <div className="rounded-lg border border-slate-200 bg-white p-5 sm:p-8">
        <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-3 font-semibold text-indigo-950"><House aria-hidden="true" className="h-5 w-5" />YuYo</div>
        <div className="mx-auto h-7 w-px bg-slate-300" aria-hidden="true" />
        <div className="mx-auto mb-2 max-w-xs text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Global navigation</div>
        <div className="relative pt-5">
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-0 hidden h-px bg-slate-300 lg:block" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {navigation.map(({ title, status, items }) => <section key={title} className="relative min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4 lg:min-h-[174px]">
              <div aria-hidden="true" className="absolute -top-5 left-1/2 hidden h-5 w-px bg-slate-300 lg:block" />
              <h4 className="text-center text-sm font-semibold leading-5 text-[#151824]">{title}</h4>
              <p className="mt-1 text-center text-[10px] leading-4 text-indigo-700">{status}</p>
              <ul className="mt-3 space-y-2 border-t border-slate-200 pt-3">{items.map((item) => <li key={item} className="text-center text-xs leading-5 text-[#626B7C]">{item}</li>)}</ul>
            </section>)}
          </div>
        </div>
        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700"><span aria-hidden="true" className="h-5 w-px bg-indigo-300" />Cases ↓ individual case<span aria-hidden="true" className="h-5 w-px bg-indigo-300" /></div>
        <section className="mt-2 rounded-lg border border-indigo-200 bg-indigo-50/60 p-4 sm:p-5" aria-label="Individual case workflow">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-semibold text-[#151824]">Inside an individual case</h4>
            <span className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">Visitor Visa · primary implemented workflow</span>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {workflow.map(({ title, status }, index) => <li key={title} className="relative flex min-w-0 flex-col rounded-md border border-slate-200 bg-white p-3 text-center shadow-sm">
              {index < workflow.length - 1 ? <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-indigo-500 xl:block" /> : null}
              <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-2 text-xs font-semibold leading-5 text-[#151824]">{title}</span>
              <span className="mt-2 text-[11px] leading-4 text-[#626B7C]">{status}</span>
            </li>)}
          </ol>
        </section>
        <p className="mt-4 text-center text-xs leading-5 text-[#626B7C]">Planned and unverified mark requested product scope without claiming those features are implemented.</p>
      </div>
    </figure>
  )
}

function CaseSection({ id, eyebrow, title, body, children, tinted = false }) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-slate-200 px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${tinted ? "bg-indigo-50" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title} body={body} />
        {children}
      </div>
    </section>
  )
}

function ReviewSequence({ label, steps }) {
  return (
    <ol aria-label={label} className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold leading-6 text-indigo-950">
      {steps.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
    </ol>
  )
}

function ScreensGrid({ stage }) {
  if (stage.featured) {
    return (
      <IntakeGallery>
        {stage.screens.map((screen) => (
          <PhoneFrame key={screen.order} src={screen.image} alt={screen.alt} cropBottom={screen.cropBottom} />
        ))}
      </IntakeGallery>
    )
  }

  const gridClass =
    stage.layout === "quad"
      ? "grid-cols-2 lg:grid-cols-4"
      : stage.layout === "triple"
        ? "grid-cols-1 sm:grid-cols-3"
        : stage.layout === "double"
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1"

  return (
    <div className={`grid items-start gap-5 ${gridClass} ${stage.layout === "single" ? "place-items-center" : ""}`}>
      {stage.screens.map((screen, index) => (
        <PhoneFrame
          key={screen.order}
          src={screen.image}
          video={screen.video}
          cropBottom={screen.cropBottom}
          alt={screen.alt}
          priority={screen.order <= 4}
          className={!stage.screens.some((item) => item.video) && index % 2 === 1 ? "sm:mt-8" : ""}
        />
      ))}
    </div>
  )
}

function ScreenStoryBlock({ stage }) {
  return (
    <article
      className={`rounded-lg border p-5 shadow-sm sm:p-8 ${
        stage.featured ? "border-indigo-200 bg-indigo-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              {stage.label}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">{stage.eyebrow}</p>
          </div>
          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-normal text-[#151824] sm:text-3xl">
            {stage.title}
          </h3>
          <p className="mt-4 leading-8 text-[#626B7C]">{stage.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stage.points.map((point) => (
              <span key={point} className="rounded-full bg-indigo-100 px-3 py-2 text-sm font-semibold text-indigo-700">
                {point}
              </span>
            ))}
          </div>
        </div>
        <ScreensGrid stage={stage} />
      </div>
    </article>
  )
}

export default function AppLawyerCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#151824]">
      <ProjectSideNavigation />

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#EEF2FF] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.22),transparent_34%),radial-gradient(circle_at_8%_10%,rgba(14,165,233,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-indigo-700 shadow-sm">
              Product Design / Immigration Support / Coded Prototyping
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#151824] sm:text-6xl lg:text-7xl">
              App Lawyer
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-indigo-950 sm:text-3xl">
              Simplifying Complex Immigration Journeys
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#535D72]">
              App Lawyer / YuYo is an AI-assisted mobile product in development for people preparing Canadian immigration applications.
              I focused on UI and interaction design, reusable components, and React-based prototypes to help make requirements, documents, and next steps understandable.
              The product supports preparation; it does not provide legal representation, official IRCC advice, or guaranteed outcomes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectFacts.map((fact) => (
                <div key={fact.label} className="rounded-lg border border-slate-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-[#151824]">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#product-journey"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                View the product journey
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-indigo-300/25 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-2 shadow-2xl shadow-indigo-950/16 backdrop-blur">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/35 via-transparent to-indigo-300/20" />
              <img
                src="/appLawyer/ChatGPT Image Jun 18, 2026, 04_27_10 PM.png"
                alt="App Lawyer product concept illustration"
                className="relative h-auto max-h-[620px] w-full rounded-[1.55rem] bg-indigo-950 object-contain"
              />
            </figure>
          </div>
        </div>
      </section>

      <CaseSection id="problem" eyebrow="02 - The problem" title="A complex process needs a clear next step." body="Applicants must interpret unfamiliar instructions, understand requirements, gather supporting documents, and keep track of what still needs attention. When those tasks are spread across different sources, it can be difficult to see how they fit together.">
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FeatureCard title="Problem" body="Complex requirements, scattered information, and uncertainty about documents and next steps make immigration preparation difficult to navigate." />
          <FeatureCard title="Design challenge" body="How might we simplify application preparation through a guided, transparent, AI-assisted experience?" />
        </div>
      </CaseSection>

      <CaseSection id="ux-process" eyebrow="03 - UX discovery and direction" title="Start with the applicant’s uncertainty." body="These artifacts make the design framing visible. The persona and journey are working assumptions for the product direction, not validated research findings." tinted>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700"><UserRound className="h-8 w-8" /></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Proto-Persona (Design Assumption)</p><h3 className="mt-1 text-xl font-semibold text-[#151824]">Sofia Martinez</h3><p className="text-sm text-[#626B7C]">Independent Applicant · 28</p></div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#626B7C]">Preparing a Canadian Visitor Visa application. Comfortable with technology, with limited immigration knowledge.</p>
            <div className="mt-5 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
              <div><h4 className="text-sm font-semibold text-[#151824]">Goal</h4><p className="mt-1 text-sm leading-6 text-[#626B7C]">Prepare her application independently.</p></div>
              <div><h4 className="text-sm font-semibold text-[#151824]">Frictions</h4><p className="mt-1 text-sm leading-6 text-[#626B7C]">Complex requirements, unclear documents, uncertain progress.</p></div>
              <div className="sm:col-span-2"><h4 className="text-sm font-semibold text-[#151824]">Needs</h4><p className="mt-1 text-sm leading-6 text-[#626B7C]">Step-by-step guidance, organized documents, and clear feedback.</p></div>
            </div>
          </article>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3"><Compass aria-hidden="true" className="h-5 w-5 text-indigo-600" /><h3 className="text-lg font-semibold text-[#151824]">Design principles</h3></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Guided experience", "Break complex applications into manageable steps."],
                ["Clear progress", "Show what is complete and what needs attention."],
                ["Document transparency", "Distinguish missing, uploaded, reviewing, and accepted states."],
                ["Actionable AI", "Connect review findings to specific corrections."],
              ].map(([title, body], index) => <div key={title} className="border-l-2 border-indigo-200 pl-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">0{index + 1}</p><h4 className="mt-1 font-semibold text-[#151824]">{title}</h4><p className="mt-1 text-sm leading-6 text-[#626B7C]">{body}</p></div>)}
            </div>
          </div>
        </div>
        <ProposedJourneyMap />
        <InformationArchitecture />
        <figure className="mt-10">
          <figcaption className="mb-5 max-w-3xl">
            <h3 className="text-lg font-semibold text-[#151824]">YuYo workflow diagrams</h3>
            <p className="mt-2 text-sm leading-6 text-[#626B7C]">Explore the architecture, individual case workflow, main journey, and document relationships. These diagrams show intended product structure; Visitor Visa intake is the primary implemented workflow.</p>
          </figcaption>
          <IntakeGallery
            label="YuYo workflow diagrams"
            labels={["Information architecture", "Inside a YuYo case", "Main user workflow", "How documents connect"]}
          >
            {[
              ["ChatGPT Image Oct 15, 2026, 12_38_15 PM-1.png", "Information architecture diagram showing YuYo global navigation and the case workspace."],
              ["ChatGPT Image Oct 15, 2026, 12_38_16 PM-2.png", "Diagram of the sections inside one independent YuYo application case."],
              ["ChatGPT Image Oct 15, 2026, 12_38_17 PM-3.png", "Proposed user workflow from choosing an application through package preparation."],
              ["ChatGPT Image Oct 15, 2026, 12_38_18 PM-4.png", "Diagram showing how case intake, documents, and AI assistance relate."],
            ].map(([image, alt]) => (
              <figure key={image} className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={`/appLawyer/${image}`} alt={alt} loading="lazy" className="mx-auto block h-auto max-h-[70vh] w-full object-contain" />
              </figure>
            ))}
          </IntakeGallery>
        </figure>
      </CaseSection>

      <CaseSection id="team" eyebrow="04 - My role and team collaboration" title="Four people, with shared design decisions." body="I worked alongside a UX Designer and two Developers. My contribution focused on UI hierarchy, interaction design, reusable interface patterns, design-system foundations, and functional front-end prototyping. We shared experience decisions; the developers contributed engineering implementation and feasibility input.">
        <figure className="mt-8">
          <figcaption className="mb-5 text-lg font-semibold">Team structure and collaboration</figcaption>
          <ul className="grid gap-5 lg:grid-cols-3">
            {[
              ["UX Designer", "Shared UX direction", "UX collaboration, information architecture, and experience design, connecting individual screens to the wider application journey."],
              ["My role", "Product Designer (UI/UX) & Front-End Prototyping", "I translated experience requirements into UI hierarchy, reusable components, interaction states, and React-based prototypes for design-to-development discussion."],
              ["Two Developers", "Engineering collaboration", "Engineering implementation and technical feasibility input, helping connect interface behaviour with data dependencies and implementation constraints."],
            ].map(([title, role, body]) => <li key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 font-semibold text-indigo-700">{role}</p><p className="mt-3 text-sm leading-6 text-[#626B7C]">{body}</p></li>)}
          </ul>
          <p className="mt-5 rounded-lg border border-indigo-200 bg-indigo-50 p-5 text-sm leading-7 text-indigo-950">We connected UX direction, UI detail, and engineering through shared decisions. My contribution was making the visual and interactive intent concrete enough for the team to discuss and refine.</p>
        </figure>
      </CaseSection>

      <CaseSection id="product-journey" eyebrow="05 - Product UI exploration" title="One case provides the context for each task." body="The proposed product flow separates immigration applications into independent cases. Intake answers, documents, guidance, and progress belong to the relevant case, helping users understand what information applies to their current task.">
        <FlowDiagram title="Application user journey" description="Intended end-to-end scope, from account access to submission guidance. The screens below demonstrate parts of the interface; document processing is explicitly mocked, and persistence, AI review, package generation, and live integrations remain unverified." steps={[
          ["Welcome → Home", "Welcome and authentication lead to the Home dashboard, where users choose an application type or find a saved case."],
          ["Start or resume a case", "Keep each application's answers, documents, and progress together.", ["New: select the application on Home → create its case → open the relevant intake, without selecting the type again.", "Existing: select a saved case → return to its current progress point."]],
          ["Complete intake and save", "Collect personal and application information in manageable steps, with visible progress.", ["Incomplete: identify missing fields → edit and save → return to the last relevant intake step.", "Complete: save the information → continue to the document checklist."]],
          ["Prepare and check documents", "Explain required documents, accept uploads, and distinguish processing from verification.", ["Not ready: identify missing files or upload/verification errors → explain requirements → replace or remove files → check again.", "Ready: continue to AI-assisted application review."]],
          ["Review findings and correct", "Connect each finding to the relevant intake answer or document, with an explanation of why it matters.", ["Issues found: ask YuYo AI for context → correct information or replace documents → re-review when needed.", "No unresolved requirements: continue to the final readiness checklist."]],
          ["Check readiness and prepare export", "Assess preparation completeness, not the likelihood of government approval.", ["Not ready: show outstanding requirements and progress → return to the relevant intake or document step.", "Ready: generate a supported application package → provide guidance for official IRCC submission. This is intended scope, not a demonstrated export or submission service."]],
        ]} />
        <div className="mt-12 grid gap-8">{journeyStages.map((stage) => <ScreenStoryBlock key={stage.label} stage={stage} />)}</div>
      </CaseSection>

      <CaseSection id="design-system" eyebrow="06 - Design system and component architecture" title="Building a Consistent and Scalable Interface" body="I focused on reusable UI patterns so intake, case management, and document tasks could share a consistent interaction language. Design-system work connects visual foundations to states and behaviour, not only styling. The artifacts show recurring patterns; a complete production library and token inventory are not verified.">
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FeatureCard title="Foundations and tokens" body="Colour roles distinguish primary actions, supporting surfaces, and feedback. Type hierarchy separates task titles, labels, and help; spacing and rounded surfaces group related information. Naming these decisions as colour, type, spacing, and radius tokens would make changes reusable across screens. Exact mobile values and a design-to-code token mapping remain to be documented." />
          <FeatureCard title="Document detail and status" body="Purpose: connect one document to its status and next action. The shown detail includes File: Uploaded, Review: Ok, Mock Processing, Open file, and Ask AI. Reusing the pattern across document types requires keeping file and review states separate. Engineering must map each state to available actions; missing, uploading, failed, replace, and remove paths still need specification and validation." />
          <FeatureCard title="Intake fields and actions" body="Purpose: reuse clear data entry across intake steps. The visitor-visa screen shows labeled fields, a Required marker, a selection control, a muted Back action, and Save and next. I focus on consistent hierarchy and interaction patterns. Implementation needs associated labels, appropriate input semantics, preserved values, and understandable validation; visible styling alone does not prove accessible or disabled behaviour." />
          <FeatureCard title="Application progress" body="Purpose: keep the current stage and next action visible. Intake shows Step 1 of 8, 13% complete, and Changes saved; case cards pair completeness with a next task. Reuse the pattern while distinguishing intake progress from overall readiness. Engineering needs defined calculation and save states, responsive labels, and accessible announcements. These percentages describe example screen content, not measured outcomes." />
        </div>
        <FlowDiagram title="Design system to development architecture" description="The intended architecture: share foundations, encode repeatable decisions, and compose screens from agreed patterns. This supports consistent updates and fewer repeated design decisions; complete token implementation remains to be documented." steps={[
          ["Design foundations", "Define roles for colour, type, spacing, radius, and layout."],
          ["Design tokens", "Name reusable values so intent can be discussed and maintained."],
          ["Reusable components", "Specify controls, content patterns, variants, and feedback."],
          ["Product screens", "Compose consistent patterns around the user’s task."],
          ["Consistent experience", "Review design-to-code behaviour with developers and reuse the patterns as workflows expand."],
        ]} />
      </CaseSection>

      <section id="prototype" className="scroll-mt-24 bg-[#111827] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="07 - From design to functional prototypes" title="Make the interaction available for discussion." body="My role included React-based front-end prototyping alongside UI and interaction design. A working prototype gives the team a concrete way to discuss how users move between screens, interact with components, and recover from errors. The recordings show a product demonstration; live integrations and production readiness remain unverified." light />
          <div className="mt-8 rounded-lg border border-white/15 bg-white p-6">
            <h3 className="font-semibold text-[#151824]">Design-to-prototype workflow</h3>
            <p className="mt-2 text-sm leading-6 text-[#626B7C]">A review approach for connecting interface decisions with behaviour and engineering feedback.</p>
            <ReviewSequence label="Design-to-prototype workflow" steps={["UI design", "Interaction specifications", "React-based prototype", "Team review", "Refinement", "Engineering implementation"]} />
          </div>
          <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
            <VideoFrame src="/appLawyer/video AI bot.mp4" poster="/appLawyer/6.jpeg" title="App Lawyer product flow video" caption="Product-flow demonstration: use the transitions to discuss navigation, task order, and where users need feedback." />
            <VideoFrame src="/appLawyer/video app.mp4" poster="/appLawyer/20.jpeg" title="App Lawyer case-aware AI and document workflow video" caption="AI and document-workflow demonstration: discuss how case context, document status, and guidance connect." />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/80">My focus is translating reusable interface patterns into interactions the team can inspect. Prototypes also give us a place to explore narrow layouts, incomplete answers, and error recovery before committing to implementation. These are review priorities; the recordings are not formal usability-test results.</p>
        </div>
      </section>

      <CaseSection id="collaboration" eyebrow="08 - Working with developers" title="Use the interface to make implementation questions concrete." body="I worked alongside the UX designer and two developers. UI and front-end knowledge help me describe intended behaviour in terms the team can inspect: which state is active, what changes after an action, and what happens when something fails.">
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FeatureCard title="What design needs to communicate" body="Component behaviour, navigation, field requirements, loading and error states, and how the interface responds to incomplete information. These details make a design discussion more specific than a static screen alone." />
          <FeatureCard title="What engineering needs to inform" body="Developers bring feasibility, platform constraints, data dependencies, and integration behaviour into the discussion. For document feedback, the interface needs to reflect the actual processing state before it can offer a meaningful next action." />
        </div>
        <h3 className="mt-8 text-lg font-semibold">A review loop for continued development</h3>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[#626B7C]">Carry questions back into UX and UI exploration as prototype behaviour and implementation constraints become clearer.</p>
        <ReviewSequence label="Developer collaboration review loop" steps={["UX exploration", "UI design", "Functional prototype", "Developer feedback", "Refinement"]} />
      </CaseSection>

      <CaseSection id="accessibility-trust" eyebrow="09 - Accessibility, trust and sensitive workflows" title="Clarity matters most when the information is sensitive." body="An immigration experience can involve personal records and uncertain outcomes. The design must help people understand both the task and the limits of the product. These are design considerations and validation priorities, not compliance or security certifications." tinted>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FeatureCard title="Readable and understandable" body="Review text size, hierarchy, contrast, and plain-language instructions. Form errors should identify the issue and explain how to correct it without depending on colour alone." />
          <FeatureCard title="Perceivable interaction states" body="Test keyboard access, focus, screen-reader announcements, and loading feedback. Clearly distinguish uploaded, processed, and verified documents so completion indicators do not create false confidence." />
          <FeatureCard title="Sensitive information" body="Explain why information is requested and how it will be used. Data handling, retention, access controls, and privacy expectations require product and engineering validation beyond the interface shown here." />
          <FeatureCard title="Transparent AI guidance" body="Identify AI-generated explanations, communicate uncertainty, and avoid misleading approval predictions. Guidance should not be confused with official requirements, legal advice, or an immigration decision." />
        </div>
      </CaseSection>

      <CaseSection id="outcomes" eyebrow="10 - Outcomes and learnings" title="A design direction to evaluate, with development still in progress." body="The outcome so far is a mobile interface direction and recorded prototype experience covering key preparation tasks. The product remains in development; formal usability and business outcomes have not been measured here.">
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <FeatureCard title="What was delivered" body="The case study includes screen designs for onboarding, case intake, documents, and contextual AI, plus Home and product-flow recordings. My contribution centered on UI, reusable interaction patterns, and front-end prototyping within the four-person team." />
          <FeatureCard title="What I take forward" body="The distinction between an uploaded file and reviewed evidence is a key lesson from this interface. Progress also needs a clear scope: finishing intake is not the same as preparing a complete case. Reusable patterns and working prototypes give those distinctions a concrete form to discuss with developers." />
          <FeatureCard title="What comes next" body="Evaluate task completion, case switching, document status comprehension, and error recovery with users. Test accessibility and AI expectations, then use the findings to prioritize iteration with the team." />
        </div>
      </CaseSection>

      <section className="border-t border-slate-200 bg-[#111827] px-5 pb-32 pt-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-200">Final reflection</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            For complex, regulated experiences, I want to make the next action clear, the system’s limits visible,
            and design decisions concrete enough for the whole team to evaluate.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-indigo-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-100"
            >
              Have a complex product idea?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
