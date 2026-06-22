import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileText,
  FolderOpen,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react"

import { ProjectSideNavigation } from "@/components/project-side-navigation"

export const metadata = {
  title: "App Lawyer Case Study | German Losada",
  description:
    "A product design and mobile development case study for App Lawyer, an AI-guided Canadian immigration workflow app.",
}

const projectScreens = Array.from({ length: 21 }, (_, index) => {
  const order = index + 1

  return {
    order,
    image: `/appLawyer/${order}.jpeg`,
  }
})

const screenByOrder = new Map(projectScreens.map((screen) => [screen.order, screen]))

const projectFacts = [
  { label: "Role", value: "Product Designer and Front-End Developer" },
  { label: "Platform", value: "iOS and Android" },
  { label: "Stack", value: "React Native, Expo, TypeScript, Expo Router, Zustand, Supabase-ready" },
  { label: "Focus", value: "UX strategy, AI workflows, mobile UI, product architecture" },
  { label: "Status", value: "Product in development" },
]

const goals = [
  {
    title: "Simplify complexity",
    body: "Break Canadian immigration workflows into clear tasks, understandable language, and manageable next steps.",
  },
  {
    title: "Centralize case information",
    body: "Keep intake answers, documents, deadlines, risk notes, and progress in one connected case workspace.",
  },
  {
    title: "Make AI context-aware",
    body: "Use case details to support more relevant answers instead of treating every question as isolated chat.",
  },
  {
    title: "Support user action",
    body: "Move users from questions into checklists, document review, deadlines, and preparation tasks.",
  },
  {
    title: "Maintain responsible boundaries",
    body: "Position the product as information and preparation support, not a replacement for authorized legal advice.",
  },
]

const roleItems = [
  "Defined the product vision and MVP scope",
  "Mapped the immigration case journey and information architecture",
  "Designed onboarding, authentication, case creation, intake, document, deadline, review, and AI flows",
  "Built a reusable mobile interface system for legal-tech workflows",
  "Developed the app foundation with React Native, Expo, TypeScript, Expo Router, and Zustand",
  "Prepared the architecture for Supabase authentication, database records, file storage, and future AI orchestration",
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
    body: "The onboarding sequence introduces immigration pathfinding, specialized IRCC AI agents, and document preparation without overwhelming the user before sign-in.",
    screens: [2, 3, 4].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer onboarding screen ${order - 1}`,
    })),
    points: ["Value proposition", "Progressive disclosure", "Lower cognitive load"],
    layout: "triple",
  },
  {
    label: "03",
    eyebrow: "Authentication",
    title: "Sign-in is designed as a calm gateway into a personal case workspace.",
    body: "The authentication screen supports email and social sign-in paths while reinforcing that case information belongs inside a structured, private product experience.",
    screens: [
      {
        ...screenByOrder.get(5),
        alt: "App Lawyer sign-in screen with email and social authentication options",
      },
    ],
    points: ["Account access", "Privacy framing", "Fast entry"],
    layout: "single",
  },
  {
    label: "04",
    eyebrow: "Case workspace",
    title: "Returning users see active cases, progress, deadlines, and next actions.",
    body: "The home and case continuation screens create a case-first experience. Users can start a new matter, resume an existing one, and understand what requires attention.",
    screens: [
      {
        ...screenByOrder.get(7),
        alt: "App Lawyer continue case screen with active applications and progress",
      },
    ],
    points: ["Active cases", "Progress visibility", "Next recommended steps"],
    layout: "single",
  },
  {
    label: "05",
    eyebrow: "Document organization",
    title: "Documents are treated as part of the workflow, not a detached file cabinet.",
    body: "The product gives users a place to upload, categorize, review, and connect evidence to their immigration case while the AI assistant can explain missing or relevant documentation.",
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
    body: "Users choose an immigration goal, decide whether to start or continue a case, and answer structured intake questions that can later inform documents, deadlines, review, and AI guidance.",
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
    points: ["Deadline tracking", "Detailed intake", "Save-and-continue behavior"],
    layout: "triple",
  },
  {
    label: "08",
    eyebrow: "CASE INTAKE",
    title: "Users add their case details so the AI can understand their situation.",
    body: "This workflow collects the user’s personal information, immigration history, goals, documents, and concerns so the AI assistant can give more relevant guidance based on their own case, not a generic answer.",
    screens: [16, 17, 18, 19].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer case dashboard and review screen ${order}`,
    })),
    points: ["Case intake", "Personalized AI", "User profile", "Immigration history", "Case context"],
    layout: "quad",
    featured: true,
  },
  {
    label: "09",
    eyebrow: "Case-aware AI",
    title: "AI is designed as a workflow layer, not a standalone chat tab.",
    body: "The assistant can answer questions in the context of the active case, then connect guidance to checklists, documents, missing information, and next actions.",
    screens: [20, 21].map((order) => ({
      ...screenByOrder.get(order),
      alt: `App Lawyer AI assistant and checklist screen ${order}`,
    })),
    points: ["Case context", "Actionable responses", "Document checklist"],
    layout: "double",
  },
]

const aiCapabilities = [
  "Immigration questions and case-specific explanations",
  "Intake clarification and missing-context prompts",
  "Personalized document checklist generation",
  "Missing-document explanations and preparation guidance",
  "Refusal-letter and risk review support",
  "Deadline explanations and suggested next steps",
]

const technicalItems = [
  "React Native",
  "Expo",
  "TypeScript",
  "Expo Router",
  "Zustand",
  "Reusable mobile components",
  "Supabase-ready authentication",
  "Supabase-ready database and file storage",
  "Secure storage planning",
  "Notification planning",
  "Document upload integration",
  "Separated AI service layer",
]

const productDecisions = [
  {
    title: "Case-first architecture",
    body: "AI conversations, documents, deadlines, and review states are attached to a specific immigration matter.",
  },
  {
    title: "Structured intake before guidance",
    body: "The product gathers relevant facts before relying on AI support, reducing generic or under-contextual responses.",
  },
  {
    title: "Action-oriented AI",
    body: "AI responses are designed to lead into tasks, checklists, documents, drafts, or follow-up questions.",
  },
  {
    title: "Progressive disclosure",
    body: "Complex immigration details are introduced gradually so users can keep moving without reading dense legal content first.",
  },
  {
    title: "Clear legal boundaries",
    body: "The interface separates preparation support from advice that should come from a licensed lawyer or authorized representative.",
  },
]

const outcomes = [
  "Complete mobile product concept and visual system",
  "End-to-end immigration case workflow",
  "Functional React Native and Expo application foundation",
  "Reusable component architecture",
  "Case-aware AI workflow design",
  "Document, intake, deadline, and review experiences",
  "Supabase-ready data and backend architecture",
  "Product prepared for further validation and production integration",
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

function PhoneFrame({ src, alt, priority = false, className = "" }) {
  return (
    <figure
      className={`mx-auto flex w-full max-w-[250px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-indigo-950/12 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="aspect-[946/2048] h-auto w-full rounded-[1.45rem] object-contain"
      />
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
        playsInline
        controls
        preload="metadata"
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

function FlowDiagram({ steps, dark = false }) {
  return (
    <div className="grid gap-3">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border p-4 ${
            dark ? "border-white/10 bg-white/[0.055]" : "border-slate-200 bg-white"
          }`}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold ${
              dark ? "bg-indigo-200 text-indigo-950" : "bg-indigo-600 text-white"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className={`text-sm font-semibold leading-6 sm:text-base ${dark ? "text-white/82" : "text-[#2F3547]"}`}>{step}</p>
        </div>
      ))}
    </div>
  )
}

function ScreensGrid({ stage }) {
  const gridClass =
    stage.layout === "quad"
      ? "grid-cols-2 lg:grid-cols-4"
      : stage.layout === "triple"
        ? "grid-cols-1 sm:grid-cols-3"
        : stage.layout === "double"
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1"

  return (
    <div className={`grid gap-5 ${gridClass} ${stage.layout === "single" ? "place-items-center" : ""}`}>
      {stage.screens.map((screen, index) => (
        <PhoneFrame
          key={screen.order}
          src={screen.image}
          alt={screen.alt}
          priority={screen.order <= 4}
          className={index % 2 === 1 ? "sm:mt-8" : ""}
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
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
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
              AI Legal-Tech - Product Design - Mobile App Development
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#151824] sm:text-6xl lg:text-7xl">
              App Lawyer
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-indigo-950 sm:text-3xl">
              Designing an AI-guided immigration platform that turns complex IRCC processes into clear, manageable steps.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#535D72]">
              App Lawyer helps users organize Canadian immigration cases, understand requirements, prepare documents,
              track deadlines, and receive personalized support from a case-aware AI assistant. It provides information
              and preparation support, not a replacement for a licensed lawyer or authorized immigration representative.
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
            <div className="absolute inset-8 rounded-full bg-indigo-300/20 blur-3xl" />
            <PhoneFrame
              src="/appLawyer/6.jpeg"
              alt="App Lawyer home dashboard with active cases and AI assistant entry points"
              priority
              className="relative max-w-[315px]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Project summary"
            title="Immigration information exists, but the experience is fragmented."
            body="Canadian immigration applications can involve unfamiliar terminology, multiple documents, changing deadlines, government sources, personal notes, online forums, and case-specific uncertainty. App Lawyer brings those pieces into one structured mobile experience."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              icon={FolderOpen}
              title="The challenge"
              body="Users need to understand which path applies, what documents are required, what information is missing, and what should happen next without relying on disconnected tools."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="The solution"
              body="The app connects case intake, requirements, documents, deadlines, risk review, and AI support around an active immigration matter."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="My role"
              title="I connected product strategy, UX design, mobile UI, and front-end implementation."
              body="I designed App Lawyer from product concept through mobile implementation, defining the workflow, interface system, AI experience, and technical foundation."
            />
          </div>
          <FlowDiagram steps={roleItems} />
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Product flow"
              title="Experience the complete product flow."
              body="The first product video shows how the mobile experience moves through case setup, navigation, AI support, and task-oriented legal-tech workflows."
              light
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["User profile", "Case intake", "Personalized case workspace"],
                ["Documents", "Deadlines", "Case-aware AI guidance"],
              ].map((items) => (
                <div key={items.join("-")} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                  {items.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-200 text-xs font-bold text-indigo-950">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-white/84">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <VideoFrame
            src="/appLawyer/video AI bot.mp4"
            poster="/appLawyer/6.jpeg"
            title="App Lawyer product flow video"
            caption="Product overview video with muted inline playback and native controls."
          />
        </div>
      </section>

      <section id="product-journey" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="APP WORKFLOW"
            title="A complete journey through the App Lawyer experience."
            body="This section presents the app flow from launch and onboarding to case creation, document organization, deadlines, and case-aware AI support, showing how each feature connects into one guided immigration preparation experience."
            centered
          />
          <div className="mt-12 grid gap-8">
            {journeyStages.map((stage) => (
              <ScreenStoryBlock key={stage.label} stage={stage} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-indigo-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product goals"
            title="The product is designed to make a complex process feel clear, connected, and responsible."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {goals.map((goal) => (
              <FeatureCard key={goal.title} icon={CheckCircle2} title={goal.title} body={goal.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="AI experience"
            title="From a generic chatbot to a case-aware assistant."
            body="The assistant is designed to work with the rest of the product. It can use the active case, intake answers, uploaded documents, deadlines, and previous chat context to provide more relevant support while keeping legal boundaries visible."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {aiCapabilities.map((capability, index) => {
              const icons = [MessageSquareText, BrainCircuit, FileText, UploadCloud, Scale, Bot]
              const Icon = icons[index]

              return <FeatureCard key={capability} icon={Icon} title={capability} body="Designed as part of the product workflow rather than isolated from case progress." />
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <VideoFrame
            src="/appLawyer/video app.mp4"
            poster="/appLawyer/20.jpeg"
            title="App Lawyer case-aware AI and document workflow video"
            caption="Second product video focused on AI, documents, and case workflow support."
          />
          <div>
            <SectionHeader
              eyebrow="AI architecture"
              title="Case-aware AI in action."
              body="The AI layer should separate known facts from assumptions, identify missing context, avoid guaranteeing outcomes, reference official sources when available, and recommend professional help for high-risk situations."
              light
            />
            <div className="mt-8">
              <FlowDiagram
                dark
                steps={[
                  "User question",
                  "Active case selected",
                  "Case data gathered from profile, intake, documents, deadlines, and chat history",
                  "Relevant immigration information considered",
                  "AI response generated with safety and boundary checks",
                  "Personalized response returns with next actions",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="UX workflow"
            title="The core workflow connects onboarding, case intake, documents, AI, deadlines, and review."
            centered
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Onboarding",
              "Account creation",
              "Create a case",
              "Complete intake",
              "Generate requirements",
              "Upload documents",
              "Ask case-specific questions",
              "Track deadlines and tasks",
              "Review missing items and risks",
              "Prepare the case package",
            ].map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-indigo-600">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-semibold leading-6 text-[#151824]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Information architecture"
            title="Global tools and case-specific spaces work together."
            body="The architecture supports quick access to important tools while keeping case-specific information connected to the active immigration matter."
          />
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 font-mono text-sm leading-7 text-slate-700 shadow-sm">
            <p>App Lawyer</p>
            <p>|-- Home</p>
            <p>|-- Cases</p>
            <p>|   |-- Case overview</p>
            <p>|   |-- Intake</p>
            <p>|   |-- Documents</p>
            <p>|   |-- Deadlines</p>
            <p>|   |-- AI chat</p>
            <p>|   |-- Review</p>
            <p>|-- Ask AI</p>
            <p>|-- Documents</p>
            <p>|-- Profile</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Design system"
              title="A mobile interface system for clarity, trust, and support."
              body="The visual system uses soft lavender surfaces, strong purple action states, concise cards, progress indicators, document states, deadline cards, AI message modules, and friendly brand illustration moments to make a serious workflow feel approachable."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Typography", "Color palette", "Buttons", "Form fields", "Status tags", "Progress indicators", "AI messages", "Document cards"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-[#151824]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Palette</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Trust purple", "#6166F5"],
                ["Soft lavender", "#EEF2FF"],
                ["Deep ink", "#151824"],
                ["Slate text", "#626B7C"],
                ["Signal amber", "#F59E0B"],
                ["Success green", "#22C55E"],
              ].map(([name, hex]) => (
                <div key={name} className="grid grid-cols-[72px_1fr_auto] items-center gap-4">
                  <span className="h-12 rounded-lg border border-slate-200" style={{ backgroundColor: hex }} />
                  <span className="font-semibold text-[#151824]">{name}</span>
                  <span className="font-mono text-sm text-slate-500">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-indigo-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="Development"
            title="Designing the interface and building the product."
            body="The product was implemented as a mobile application foundation, not only a static prototype. The architecture separates navigation, screens, reusable components, application state, AI orchestration, and future backend integration."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalItems.map((item) => (
              <div key={item} className="rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <p className="mt-3 font-semibold leading-6 text-[#151824]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product decisions"
            title="Key decisions that shaped the product experience."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {productDecisions.map((decision) => (
              <FeatureCard key={decision.title} title={decision.title} body={decision.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Challenges and learnings"
            title="Designing for complexity, trust, and uncertainty."
            body="The hardest design work was balancing useful AI support with responsible boundaries, translating complex immigration language into user actions, and making structured workflows feel supportive for users who may be stressed or uncertain."
          />
          <FlowDiagram
            steps={[
              "Create trust without positioning the AI as a licensed lawyer.",
              "Connect conversational AI with structured case workflows.",
              "Balance friendly branding with a serious legal context.",
              "Maintain consistency across many document, deadline, and review states.",
              "Design an architecture that can grow beyond mock data.",
            ]}
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="Results and status"
            title="A complete product foundation currently in development."
            body="App Lawyer demonstrates how product thinking, UX design, interface systems, AI experience design, and front-end development can transform a highly complex service into a clearer and more actionable mobile product."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                <p className="mt-3 font-semibold leading-7 text-[#151824]">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#111827] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-200">Final reflection</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            More than individual screens, this project connects user data, immigration workflows, documents, deadlines,
            and conversational AI into one product experience.
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
