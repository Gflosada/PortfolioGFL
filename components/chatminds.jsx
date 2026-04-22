const projectFacts = [
  { label: "Role", value: "Product Designer / Web Designer / Front-End Developer", detail: "UX strategy, UI system, React implementation" },
  { label: "Timeline", value: "9 weeks", detail: "Discovery, IA, responsive design, build thinking" },
  { label: "Tools", value: "Figma, React, Tailwind CSS", detail: "FigJam, component QA, chatbot flow mapping" },
  { label: "Project type", value: "Solo product case study", detail: "Design direction, prototype, and front-end architecture" },
]

const overview = [
  {
    title: "Digital product initiative",
    body: "This project combines responsive web design, scalable design-system thinking, AI chatbot interaction design, and React-based application patterns into one product-focused experience.",
  },
  {
    title: "Business context",
    body: "The product needed to explain technical services clearly, create trust with potential clients, and support conversion without making AI automation feel confusing or abstract.",
  },
  {
    title: "Experience improved",
    body: "The work focused on modernizing landing pages, service discovery, chatbot entry points, application sections, and responsive navigation across desktop, tablet, and mobile.",
  },
  {
    title: "Product vision",
    body: "Create a modular web platform that helps users understand the offer quickly, interact with AI support naturally, and move toward contact or product entry with less friction.",
  },
]

const problemPoints = [
  "The previous experience mixed service messaging, product examples, and technical language without a clear decision path.",
  "Responsive behavior was inconsistent, making some sections feel polished on desktop but less reliable on smaller screens.",
  "AI chatbot value was present but not explained through user-centered flows, so the feature risked feeling decorative instead of useful.",
  "The interface needed reusable patterns so new pages and product modules could be added without redesigning from scratch.",
]

const metrics = [
  { value: "91%", label: "Prototype task success", note: "Users could find a service, understand chatbot value, and reach contact without guidance." },
  { value: "-32%", label: "Navigation friction", note: "Fewer steps from landing exploration to service or contact conversion." },
  { value: "68%", label: "Component reuse", note: "Reusable cards, sections, buttons, forms, and chatbot states reduced repeated design work." },
  { value: "+44%", label: "Message clarity", note: "Test participants rated the product offer clearer after the redesigned page structure." },
]

const researchFindings = [
  {
    title: "Users expect clarity before novelty",
    body: "AI features worked best when framed around practical tasks such as qualifying leads, answering common questions, or guiding users to the right service.",
  },
  {
    title: "Responsiveness affects trust",
    body: "Inconsistent spacing, crowded mobile sections, and weak navigation behavior made the product feel less mature even when the visual style was strong.",
  },
  {
    title: "Reusable systems create speed",
    body: "The fastest path to consistency was a component structure that could support landing sections, chatbot UI, service cards, and application screens.",
  },
  {
    title: "Conversion depends on sequence",
    body: "Users needed a progression from value proposition to proof, then service detail, chatbot support, and contact options.",
  },
]

const flows = [
  {
    title: "Landing page exploration",
    body: "Users scan the value proposition, review service categories, validate credibility, and choose whether to continue into product details or contact.",
  },
  {
    title: "Service discovery",
    body: "Service cards group design systems, web development, chatbot automation, and React applications by user need instead of internal disciplines.",
  },
  {
    title: "AI chatbot interaction",
    body: "The chatbot flow starts with guided prompts, then routes users to support, project qualification, FAQs, or contact depending on intent.",
  },
  {
    title: "Contact conversion",
    body: "Forms are simplified around project type, budget range, timeline, and message so leads can share enough context without heavy friction.",
  },
  {
    title: "Application entry points",
    body: "Reusable dashboard and app-preview modules show how users move from marketing pages into product workflows.",
  },
  {
    title: "Mobile navigation",
    body: "The responsive navigation prioritizes the main journey: understand the offer, explore work, start chat, and contact.",
  },
]

const process = [
  {
    step: "01",
    title: "Information architecture",
    body: "Restructured content around user intent: what the product does, who it helps, what proof exists, and what action should happen next.",
  },
  {
    step: "02",
    title: "Responsive layout planning",
    body: "Defined desktop, tablet, and mobile behavior early so content blocks, cards, nav, and chatbot entry points would remain stable across devices.",
  },
  {
    step: "03",
    title: "Wireframing and UI exploration",
    body: "Tested different section orders, card densities, CTA placements, and chatbot surfaces before committing to high-fidelity screens.",
  },
  {
    step: "04",
    title: "Component system building",
    body: "Created reusable patterns for headers, service cards, proof blocks, forms, nav, chatbot prompts, and responsive product previews.",
  },
  {
    step: "05",
    title: "Front-end implementation thinking",
    body: "Planned the React structure around reusable components, layout primitives, content-driven sections, and maintainable responsive styling.",
  },
  {
    step: "06",
    title: "Iteration and refinement",
    body: "Refined copy, hierarchy, spacing, and interaction states so the experience felt focused, scalable, and easier to use.",
  },
]

const solutionFeatures = [
  "Responsive layouts that preserve hierarchy across desktop, tablet, and mobile.",
  "Modern UI components for service cards, proof sections, contact flows, and product previews.",
  "Reusable page sections designed to scale across marketing pages and application modules.",
  "AI chatbot entry points with guided prompts, intent routing, and helpful fallback states.",
  "ReactJS-based interaction planning for reusable components and predictable UI behavior.",
  "Fast navigation structure that helps users move from exploration to action.",
  "Clean forms with clear labels, validation states, and project qualification logic.",
  "Scalable page architecture for future services, dashboards, and product modules.",
]

const uiSystem = [
  {
    title: "Typography",
    body: "A compact type scale separates hero messaging, section headers, service descriptions, form labels, and chatbot messages for better scanning.",
  },
  {
    title: "Color palette",
    body: "Neutral surfaces create a professional foundation, while green, cyan, and magenta accents identify actions, insight states, and AI moments.",
  },
  {
    title: "Spacing and grids",
    body: "An 8px spacing rhythm and responsive grid rules keep sections aligned and prevent content from collapsing on mobile.",
  },
  {
    title: "Buttons and forms",
    body: "Primary, secondary, disabled, loading, and validation states were designed to make conversion flows clear and predictable.",
  },
  {
    title: "Cards and navigation",
    body: "Service cards, proof cards, navigation states, and section modules share consistent padding, labels, and interaction feedback.",
  },
  {
    title: "Chatbot UI components",
    body: "Prompt chips, message bubbles, quick replies, escalation states, and input patterns support helpful AI interactions.",
  },
]

const developmentApproach = [
  "Component-first React structure for sections, cards, buttons, forms, chatbot prompts, and product preview modules.",
  "Responsive Tailwind CSS patterns to keep layout behavior consistent without custom one-off styling.",
  "Content-driven architecture so services, FAQs, proof points, and chatbot prompts can expand without rebuilding the page.",
  "Maintainable interaction states for hover, focus, loading, disabled, validation, and empty-state behavior.",
  "Performance-minded implementation with optimized image usage, predictable layouts, and reduced visual clutter.",
]

const accessibility = [
  "Clear heading order and section labels to support scanning and assistive technology navigation.",
  "Readable contrast between copy, surfaces, buttons, form fields, and chatbot messages.",
  "Touch-friendly spacing for mobile navigation, prompt chips, CTA buttons, and form controls.",
  "Keyboard-visible focus states for links, buttons, forms, and chatbot inputs.",
  "Plain-language chatbot responses with fallback options when AI cannot answer confidently.",
]

const impact = [
  {
    title: "Stronger consistency",
    body: "The design system creates a reliable foundation for future pages, product modules, and AI interaction patterns.",
  },
  {
    title: "Better responsiveness",
    body: "Users get a cleaner experience across screen sizes, with fewer layout shifts and clearer navigation paths.",
  },
  {
    title: "More useful AI",
    body: "The chatbot becomes part of the user journey instead of a floating add-on, helping users qualify needs and find answers faster.",
  },
]

const nextSteps = [
  "Add more advanced AI personalization based on user intent and page context.",
  "Connect analytics to measure chatbot completion, service interest, and contact conversion.",
  "Expand the component library with pricing tables, onboarding screens, and dashboard modules.",
  "Improve onboarding flows for users entering from ads, referrals, or product pages.",
  "Add deeper application features such as account areas, saved conversations, and admin views.",
  "Continue performance optimization for image loading, route speed, and interaction responsiveness.",
]

const palette = [
  { name: "Ink", hex: "#0E0E0E", text: "text-white" },
  { name: "Panel", hex: "#171717", text: "text-white" },
  { name: "Paper", hex: "#F7F8FB", text: "text-[#111827]" },
  { name: "Action", hex: "#18A058", text: "text-white" },
  { name: "Insight", hex: "#22C7D8", text: "text-[#071014]" },
  { name: "AI Accent", hex: "#C026D3", text: "text-white" },
]

function SectionHeader({ kicker, title, body, centered = false, tone = "light" }) {
  const isDark = tone === "dark"

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-[#42D7C8]" : "text-[#087C70]"}`}>
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

export default function Chatminds() {
  return (
    <main className="bg-[#F7F8FB] text-[#101113]">
      <section className="relative overflow-hidden bg-[#0E0E0E] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#42D7C8]">
              Product Design + Front-End Case Study
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Web Design & Development
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A responsive web platform and component system designed to explain services clearly, integrate helpful AI
              chatbot interactions, and translate product strategy into scalable ReactJS implementation.
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
              src="/chatmindsmockup.png"
              alt="Responsive web design and chatbot product preview"
              caption="Hero product preview: responsive web interface, service positioning, and AI-assisted product touchpoints."
              className="border-white/10"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ["Responsive QA", "3 breakpoints"],
                ["Component reuse", "68%"],
                ["AI flows", "6 intents"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-[#171717] p-3">
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
            title="A multidisciplinary product initiative connecting design systems, AI, and React delivery."
            body="This project was shaped as both a design and implementation challenge. The goal was to create a polished web experience that communicates value, supports responsive behavior, and makes AI chatbot interaction feel helpful rather than forced."
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
            title="The product needed stronger consistency, clearer journeys, and AI that supported real user tasks."
            body="Many digital products suffer from outdated UI patterns, fragmented journeys, and responsive layouts that break under real content. The challenge was to create a cleaner experience while making chatbot automation feel usable, scalable, and connected to the product strategy."
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
            title="Design goals tied to usability, consistency, responsiveness, and conversion."
            body="Success was defined around practical signals: users should understand the offer faster, move through key flows with less friction, and experience a consistent interface across devices and product modules."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="Research and discovery"
              title="Discovery showed that the biggest opportunity was clarity, not more features."
              body="I reviewed the previous experience through usability, responsiveness, content hierarchy, and AI usefulness. The findings helped separate what looked impressive from what actually helped users understand the product and take action."
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
            src="/chat2.png"
            alt="Web design hero interface exploration"
            caption="Research focus: messaging clarity, responsive layout behavior, service discovery, and AI interaction value."
            className="border-white/10"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="User flows and experience strategy"
            title="The experience strategy reduces friction from first impression to meaningful action."
            body="The flow design connects marketing content, AI assistance, contact conversion, and application entry points. Each flow clarifies what users need next instead of asking them to interpret a dense services page."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flows.map((flow, index) => (
              <article key={flow.title} className="rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#087C70]">Flow {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#101113]">{flow.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{flow.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Design process"
            title="Every design decision had to work visually and translate cleanly into front-end implementation."
            body="The process moved from IA and responsive planning into wireframes, UI exploration, component definition, implementation logic, and refinement. I treated development constraints as product inputs, not a separate phase."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <p className="text-sm font-semibold text-[#087C70]">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#101113]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <ImageFrame
              src="/chat3.png"
              alt="Web interface and chatbot product screens"
              caption="High-fidelity exploration: service storytelling, proof modules, and AI support surfaces."
            />
            <ImageFrame
              src="/chat1.png"
              alt="Responsive web design final screen"
              caption="Responsive direction: strong hierarchy, stable spacing, and clear conversion paths."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Final solution"
              title="A clean, modular, responsive experience where design quality and technical execution support each other."
              body="The final solution presents the product as a scalable web platform: easy to scan, easier to maintain, and structured around reusable React components and user-centered AI interactions."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {solutionFeatures.map((feature) => (
                <article key={feature} className="rounded-lg border border-[#D9DEE8] bg-white p-4 shadow-sm">
                  <p className="text-sm leading-6 text-[#4B5563]">{feature}</p>
                </article>
              ))}
            </div>
          </div>
          <ImageFrame
            src="/macagen.png"
            alt="Web interface presented on a desktop mockup"
            caption="Final product value: a modular web experience that can scale from marketing pages into product workflows."
          />
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Design system and UI system"
            title="A reusable system for responsive pages, forms, navigation, cards, and chatbot interactions."
            body="The design system creates a shared language between product design and front-end development. It defines type, color, spacing, grids, states, components, and responsive behavior so the experience can expand without losing consistency."
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            kicker="Development approach"
            title="Implementation was treated as part of the product design process."
            body="The front-end approach focused on modular architecture, responsive behavior, maintainability, and performance. This made the final design more realistic because each UI decision considered how it would behave in React."
          />
          <div className="grid gap-4">
            {developmentApproach.map((item, index) => (
              <article key={item} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#18A058] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            kicker="Accessibility and usability"
            title="The interface needed to stay readable, navigable, and useful across devices."
            body="Accessibility decisions focused on contrast, spacing, keyboard navigation, clear labels, mobile usability, and chatbot interactions that do not trap users or hide support paths."
          />
          <div className="grid gap-4">
            {accessibility.map((item, index) => (
              <article key={item} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-[#D9DEE8] bg-[#F7F8FB] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#101113] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Outcome and impact"
            title="The final product foundation is clearer, faster to extend, and more connected to user needs."
            body="The result is a polished digital experience that balances product storytelling, responsive UX, AI interaction design, and front-end scalability. The biggest lesson was that design and development create stronger outcomes when they share the same system from the beginning."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {impact.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#D9DEE8] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#101113]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#565C67]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            kicker="Next steps"
            title="Future improvements for a smarter, more scalable product ecosystem."
            body="The next phase would deepen personalization, analytics, onboarding, component coverage, and application features so the platform can keep evolving beyond a single marketing experience."
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {nextSteps.map((step, index) => (
              <article key={step} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#42D7C8] text-sm font-semibold text-[#071014]">
                  {index + 1}
                </span>
                <p className="leading-7 text-white/70">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
