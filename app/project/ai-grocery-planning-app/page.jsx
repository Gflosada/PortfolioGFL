import { ProjectSideNavigation } from "@/components/project-side-navigation"

const img = {
  heroBanner: "/grocery-case-study/hero-grocery-planning-banner.png",
  appDemo: "/grocery-case-study/app-demo.mp4",
  smartLists: "/grocery-case-study/smart-grocery-lists.png",
  nutritionProducts: "/grocery-case-study/nutrition-aware-products.png",
  saveRegulars: "/grocery-case-study/save-your-regulars.png",
  mealPlansToLists: "/grocery-case-study/turn-meal-plans-into-lists.png",
  home: "/grocery-case-study/fresh-groceries-home.png",
  browseGrid: "/grocery-case-study/product-grid-browse.png",
  addedToast: "/grocery-case-study/added-to-grocery-list-toast.png",
  savedToast: "/grocery-case-study/saved-grocery-toast.png",
  breadDetail: "/grocery-case-study/whole-wheat-bread-detail.png",
  breadCreateList: "/grocery-case-study/whole-wheat-bread-create-list.png",
  breadAdded: "/grocery-case-study/whole-wheat-bread-added.png",
  aiGoal: "/grocery-case-study/ai-meal-planner-goal.png",
  aiSetup: "/grocery-case-study/ai-meal-planner-setup.png",
  aiLoading: "/grocery-case-study/ai-meal-creating-loading.png",
  aiResultsComposite: "/grocery-case-study/ai-meal-results-composite.png",
  mealResults: "/grocery-case-study/smart-meal-plan-results.png",
  mergedList: "/grocery-case-study/merged-grocery-list.png",
  chooseList: "/grocery-case-study/choose-grocery-list-modal.png",
  listsOverview: "/grocery-case-study/grocery-lists-overview.png",
  listInitial: "/grocery-case-study/grocery-list-initial-progress.png",
  listChecked: "/grocery-case-study/grocery-list-checked-progress.png",
  settings: "/grocery-case-study/household-preferences-settings.png",
}

const heroFacts = [
  { label: "Role", value: "Product Designer / Mobile UX/UI Designer / Front-End Developer" },
  { label: "Stack", value: "Expo, React Native, TypeScript, Supabase, OpenAI" },
  { label: "Focus", value: "Mobile UX, AI planning, list management, production-ready implementation" },
]

const problemPoints = [
  "Grocery planning is repetitive, time-consuming, and often rebuilt from scratch every week.",
  "Users forget staples, household preferences, allergies, disliked ingredients, and budget constraints.",
  "Meal planning and grocery shopping often live in separate tools, creating extra manual work.",
  "Nutrition information is hard to compare when users are making quick shopping decisions.",
  "Building grocery lists manually from recipes is inefficient and easy to get wrong.",
]

const solutionPoints = [
  "Onboarding communicates the core value before users enter the product.",
  "Users can browse groceries, review nutrition-aware products, and save regular items.",
  "AI meal planning captures goals, household size, preferences, allergies, and budget before generation.",
  "Generated meal plans return structured meals plus merged grocery-list-ready ingredients.",
  "Users can choose an existing list, create a new one, and manage progress in a practical checklist flow.",
]

const journeyBlocks = [
  {
    label: "A",
    eyebrow: "Onboarding / Value Proposition",
    title: "The first-run experience introduces the product through four clear value pillars.",
    body: "The onboarding screens explain what the app does without overloading the user: create smart grocery lists, browse nutrition-aware products, save regular items, and turn meal plans into organized grocery lists.",
    layout: "four",
    images: [
      { src: img.smartLists, alt: "Create smart grocery lists onboarding screen" },
      { src: img.nutritionProducts, alt: "Browse nutrition-aware products onboarding screen" },
      { src: img.saveRegulars, alt: "Save your regulars onboarding screen" },
      { src: img.mealPlansToLists, alt: "Turn meal plans into lists onboarding screen" },
    ],
    points: ["List creation", "Product browsing", "Favorites", "AI meal plan conversion"],
  },
  {
    label: "B",
    eyebrow: "Home / Browse Experience / AI-powered grocery planning.",
    title: "From product search to AI-powered grocery planning.",
    body: "Users can search for products, browse items, and build their grocery list manually with a fast and intuitive experience. For a smarter shortcut, they can tap the AI button and generate a personalized grocery list based on their preferences, goals, budget, and dietary needs.",
    layout: "four",
    images: [
      { src: img.home, alt: "Fresh groceries home screen" },
      { src: img.browseGrid, alt: "Product grid showing strawberries bananas gala apples and avocados" },
      { src: img.addedToast, alt: "Added to grocery list toast state" },
      { src: img.savedToast, alt: "Saved grocery toast state" },
    ],
    points: ["Manual list building", "Category discovery", "Quick add", "AI-generated lists"],
  },
  {
    label: "C",
    eyebrow: "Product Details",
    title: "AI meal plans turn into actionable grocery lists.",
    body: "Once a meal plan is generated, the app transforms the selected meals into a merged grocery list, making it easy for users to review ingredients and add them directly to a shopping list. This flow helps users move from planning to action quickly, with a simple experience for organizing groceries into an existing list or creating a new one.",
    layout: "three",
    images: [
      { src: img.breadDetail, alt: "Whole Wheat Bread product detail screen" },
      { src: img.breadCreateList, alt: "Whole Wheat Bread screen with create new list CTA" },
      { src: img.breadAdded, alt: "Whole Wheat Bread added to grocery list confirmation" },
    ],
    points: ["Nutrition visibility", "Staple saving", "List selection", "Confirmation state"],
  },
  {
    label: "D",
    eyebrow: "List management feels simple, visual, and fast.",
    title: "Build and manage grocery lists with quick product actions.",
    body: "Users can manage their grocery list from one clear interface while browsing products and taking quick actions. They can add items directly to a grocery list, save products for later, and receive immediate confirmation through toast feedback. This makes the experience more efficient and helps users stay organized while shopping.",
    layout: "three",
    images: [
      { src: img.aiGoal, alt: "AI Meal Planner goal selection screen" },
      { src: img.aiSetup, alt: "AI Meal Planner form with household preferences allergies and budget" },
      { src: img.aiLoading, alt: "AI meal creating loading progress screen" },
    ],
    points: ["Goal selection", "Quick add actions", "Organized shopping", "Save for later"],
  },
  {
    label: "E",
    eyebrow: "AI Meal Plan Results",
    title: "The meal plan becomes grocery-list-ready, not just a set of suggestions.",
    body: "This is the strongest product moment. The AI returns structured meals by day, preparation context, and ingredient groupings. The system then merges duplicate ingredients into a grocery-ready list and lets users choose where to save it.",
    layout: "wide",
    images: [{ src: img.aiResultsComposite, alt: "AI meal plan results and grocery list conversion composite" }],
    points: ["Meals by day", "Structured ingredients", "Merged grocery list", "Choose or create list"],
    featured: true,
  },
  {
    label: "F",
    eyebrow: "Grocery List Management",
    title: "Converted ingredients become an operational checklist.",
    body: "Once meals are converted into a list, the product shifts from planning to execution. The overview shows item counts, update state, and progress. The detail screen supports item completion, quantity adjustment, deletion, and clear progress tracking.",
    layout: "three",
    images: [
      { src: img.listsOverview, alt: "Grocery lists overview screen" },
      { src: img.listInitial, alt: "Demo Smart Meal Plan list detail with 0 of 8 completed" },
      { src: img.listChecked, alt: "Demo Smart Meal Plan list detail with 3 of 8 completed" },
    ],
    points: ["List overview", "Checklist progress", "Quantity controls", "Operational shopping flow"],
  },
  {
    label: "G",
    eyebrow: "Settings / Household Preferences",
    title: "Household context makes future planning more relevant.",
    body: "The settings area stores household preferences locally so the product can support smarter meal generation and grocery planning over time. This also demonstrates a flexible guest/local-first model before full account sync.",
    layout: "single",
    images: [{ src: img.settings, alt: "Settings and household preferences screen" }],
    points: ["Household size", "Diet preferences", "Allergies", "Local-first flexibility"],
  },
]

const features = [
  ["Onboarding and value communication", "Four concise screens explain the core product promise before users start shopping."],
  ["Grocery browsing by category", "A clean home and product grid support quick discovery and repeat shopping behavior."],
  ["Nutrition-aware product details", "Product screens surface serving size, calories, protein, tags, and item context."],
  ["Favorites / saved grocery items", "Users can save regular products so frequent choices become easier to repeat."],
  ["Grocery list management", "Lists support item counts, progress, quantity controls, completion, and deletion."],
  ["AI meal planner", "Goal and preference inputs guide generation without requiring prompt-writing."],
  ["Merged grocery list generation", "Meal plan ingredients are grouped and converted into list-ready grocery items."],
  ["Progress tracking", "Completion states make the shopping flow feel practical and accountable."],
  ["Local-first guest mode", "Device persistence supports useful behavior before full account sync."],
  ["Scalable backend with Supabase and RLS", "The backend model supports profiles, lists, favorites, meal plans, and secure access patterns."],
]

const designDecisions = [
  "A clean mobile-first layout keeps planning, browsing, and shopping actions easy to scan.",
  "Card-based structures make grocery products, meals, and lists feel familiar and modular.",
  "Green acts as both the primary action color and success state, creating a consistent decision language.",
  "Snackbars and confirmation states make add/save actions feel immediate and trustworthy.",
  "Progressive disclosure moves users from browse to detail to add, then from plan to convert to manage.",
  "Visual clutter is minimized so nutrition, preferences, and grocery actions remain readable on small screens.",
]

const techItems = [
  "Expo",
  "React Native",
  "TypeScript",
  "Expo Router",
  "Supabase",
  "PostgreSQL",
  "Supabase Auth",
  "Row Level Security",
  "Supabase Edge Functions",
  "OpenAI API",
  "Zustand",
  "TanStack Query",
  "AsyncStorage / Secure Store",
  "NativeWind / Tailwind CSS",
]

function SectionHeader({ eyebrow, title, body, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#20BF55]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#172018] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-[#5D685F] sm:text-lg">{body}</p> : null}
    </div>
  )
}

function PhoneFrame({ src, alt, className = "", priority = false }) {
  return (
    <figure
      className={`mx-auto flex h-[390px] w-[226px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#DCE8DD] bg-white p-2 shadow-2xl shadow-[#14351F]/10 sm:h-[430px] sm:w-[250px] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full rounded-[1.45rem] object-contain"
      />
    </figure>
  )
}

function FeatureCard({ title, body }) {
  return (
    <article className="rounded-lg border border-[#DCE8DD] bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold leading-7 text-[#172018]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5D685F]">{body}</p>
    </article>
  )
}

function VideoFrame({ src, title }) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-2 shadow-2xl shadow-black/30">
      <video
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="aspect-[9/16] max-h-[640px] w-full rounded-[1.55rem] bg-black object-contain"
      />
    </figure>
  )
}

function FlowStep({ index, children }) {
  return (
    <div className="flex gap-4 rounded-lg border border-[#DCE8DD] bg-white p-4 shadow-sm">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#20BF55] text-sm font-bold text-white">
        {String(index).padStart(2, "0")}
      </span>
      <p className="self-center text-sm font-semibold leading-6 text-[#26372A] sm:text-base">{children}</p>
    </div>
  )
}

function ImageGrid({ block }) {
  if (block.layout === "wide") {
    const image = block.images[0]

    return (
      <figure className="overflow-hidden rounded-[1.5rem] border border-[#DCE8DD] bg-white p-2 shadow-2xl shadow-[#14351F]/10">
        <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full rounded-[1.2rem] object-cover" />
      </figure>
    )
  }

  const gridClass =
    block.layout === "single"
      ? "place-items-center"
      : block.layout === "two"
        ? "grid-cols-1 sm:grid-cols-2"
      : block.layout === "four"
        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-3"

  return (
    <div className={`grid gap-5 ${gridClass}`}>
      {block.images.map((image, index) => (
        <PhoneFrame
          key={image.src}
          src={image.src}
          alt={image.alt}
          priority={block.label === "A"}
          className={index % 2 === 1 ? "sm:mt-8" : ""}
        />
      ))}
    </div>
  )
}

function ImageStoryBlock({ block }) {
  return (
    <article
      className={`rounded-[2rem] border p-5 shadow-sm sm:p-8 ${
        block.featured ? "border-[#A8DDB4] bg-[#F0FAF2]" : "border-[#DCE8DD] bg-white"
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20BF55] text-lg font-bold text-white">
              {block.label}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#20BF55]">{block.eyebrow}</p>
          </div>
          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#172018] sm:text-3xl">
            {block.title}
          </h3>
          <p className="mt-4 leading-8 text-[#5D685F]">{block.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {block.points.map((point) => (
              <span key={point} className="rounded-full bg-[#EAF7ED] px-3 py-2 text-sm font-semibold text-[#26733B]">
                {point}
              </span>
            ))}
          </div>
        </div>
        <ImageGrid block={block} />
      </div>
    </article>
  )
}

export default function AIGroceryPlanningCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#FAFBF7] text-[#172018]">
      <ProjectSideNavigation />

      <section className="overflow-hidden border-b border-[#DCE8DD] bg-[#F4FAF0] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#BFE6C6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#20BF55]">
              Mobile product case study
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-[#172018] sm:text-6xl lg:text-7xl">
              AI-Powered Grocery Planning Mobile App
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5D685F]">
              Grocery List Mobile is a production-ready grocery planning app built with Expo, React Native, TypeScript,
              Supabase, and OpenAI. It helps users browse grocery products, manage shopping lists, save favorites, track
              nutrition, and generate AI-powered meal plans that convert directly into organized grocery lists.
            </p>
            <div className="mt-8 grid gap-3">
              {heroFacts.map((fact) => (
                <div key={fact.label} className="rounded-lg border border-[#DCE8DD] bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#879489]">{fact.label}</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-[#172018]">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <figure className="overflow-hidden rounded-[2rem] border border-[#DCE8DD] bg-white/80 p-2 shadow-2xl shadow-[#14351F]/10">
              <img
                src={img.heroBanner}
                alt="AI-powered grocery planning app hero composition"
                loading="eager"
                className="h-auto w-full rounded-[1.55rem] object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Overview"
            title="A grocery planning app enhanced by AI meal planning."
            body="The product is designed for busy shoppers and households who want a clearer bridge between deciding what to eat and knowing what to buy. Unlike a simple grocery list app, it combines product browsing, nutrition visibility, saved items, household context, and AI-generated meal plans that can become organized grocery lists."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-[#DCE8DD] bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#172018]">The Problem</h3>
              <div className="mt-6 grid gap-3">
                {problemPoints.map((point, index) => (
                  <FlowStep key={point} index={index + 1}>
                    {point}
                  </FlowStep>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#DCE8DD] bg-[#F0FAF2] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#172018]">The Solution</h3>
              <div className="mt-6 grid gap-3">
                {solutionPoints.map((point, index) => (
                  <FlowStep key={point} index={index + 1}>
                    {point}
                  </FlowStep>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DCE8DD] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="User flow storytelling"
            title="From value proposition to grocery execution."
            body="The case study follows the product in the same order a user experiences it: learn the value, browse groceries, inspect product details, generate a plan, convert meals into a grocery list, manage the checklist, and save household preferences."
            centered
          />
          <div className="mt-12 grid gap-8">
            {journeyBlocks.map((block) => (
              <ImageStoryBlock key={block.label} block={block} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Key features"
            title="A feature set designed around repeat grocery behavior."
            body="The product pairs everyday grocery utility with AI assistance, making the advanced workflow feel grounded in familiar shopping habits."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, body]) => (
              <FeatureCard key={title} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DCE8DD] bg-[#F0FAF2] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="Design decisions"
            title="The interface makes planning feel direct, not heavy."
            body="The visual system uses a restrained mobile-first layout, green success language, and progressive disclosure so users can move from discovery to planning without losing context."
          />
          <div className="grid gap-4">
            {designDecisions.map((decision, index) => (
              <FlowStep key={decision} index={index + 1}>
                {decision}
              </FlowStep>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#172018] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7DEB98]">Technical implementation</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Designed in Figma and implemented as a production-ready Expo app.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              The architecture supports authenticated and guest flows, persistent local device state, secure server-side
              AI generation, and a scalable data model for profiles, lists, favorites, meal plans, and meal plan items.
              Supabase Edge Functions keep OpenAI calls server-side while returning structured data the app can turn into
              meals, ingredients, and merged grocery lists.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {techItems.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white/86">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <VideoFrame src={img.appDemo} title="AI-powered grocery planning app demo video" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Outcome / Reflection"
            title="A grounded AI product that connects UX strategy with real product execution."
            body="This project demonstrates end-to-end product thinking: identifying a practical consumer problem, designing a mobile flow that reduces planning friction, and implementing the experience with a scalable technical foundation. The strongest product decision was treating AI as a utility layer, not a gimmick. Users define goals, receive structured meal plans, and convert decisions directly into grocery actions."
            centered
          />
          <div className="mt-10 rounded-lg border border-[#BFE6C6] bg-white p-6 text-left shadow-sm">
            <p className="text-lg leading-8 text-[#2C6E3C]">
              From a product designer perspective, the app shows strength in systems thinking, mobile UX, and front-end
              execution. It connects product browsing, saved behavior, household preferences, AI generation, and checklist
              management into one coherent consumer workflow.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
