"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  { slug: "dashboard-landing", title: "Dashboard & Landing Page Design" },
  { slug: "financial-app", title: "Financial App" },
  { slug: "investment-dashboard", title: "Investment Dashboard UI/UX Design" },
  { slug: "web-design-development", title: "Web Design & Development" },
  { slug: "digital-marketing-agency", title: "Digital Marketing Agency" },
  { slug: "nft-website", title: "NFT Website" },
  { slug: "meal-plan-app", title: "Meal Plan App" },
]

const projectsSectionLink = {
  href: "/#projects",
  title: "Back to Projects",
}

function NavLink({ direction, project }) {
  const isPrevious = direction === "previous"
  const Icon = isPrevious ? ChevronLeft : ChevronRight
  const label = isPrevious ? "Previous project" : "Next project"

  return (
    <Link
      href={project.href || `/project/${project.slug}`}
      aria-label={`${label}: ${project.title}`}
      className={`group fixed top-1/2 z-[60] hidden -translate-y-1/2 items-center gap-3 rounded-md border border-white/15 bg-zinc-950/80 px-3 py-3 text-white shadow-xl shadow-black/30 backdrop-blur transition hover:border-blue-400/70 hover:bg-zinc-900 lg:flex ${
        isPrevious ? "left-4" : "right-4"
      }`}
    >
      {isPrevious ? <Icon className="h-5 w-5" /> : null}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-56 group-hover:opacity-100">
        {project.title}
      </span>
      {!isPrevious ? <Icon className="h-5 w-5" /> : null}
    </Link>
  )
}

export function ProjectSideNavigation() {
  const pathname = usePathname()
  const currentSlug = pathname?.split("/").filter(Boolean).at(-1)
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug)

  if (currentIndex === -1) return null

  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = currentIndex === projects.length - 1 ? projectsSectionLink : projects[currentIndex + 1]

  return (
    <>
      <NavLink direction="previous" project={previousProject} />
      <NavLink direction="next" project={nextProject} />

      <nav
        aria-label="Project navigation"
        className="fixed inset-x-4 bottom-4 z-[60] grid grid-cols-2 gap-3 lg:hidden"
      >
        <Link
          href={`/project/${previousProject.slug}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-zinc-950/85 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 backdrop-blur transition hover:border-blue-400/70"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </Link>
        <Link
          href={nextProject.href || `/project/${nextProject.slug}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-zinc-950/85 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 backdrop-blur transition hover:border-blue-400/70"
        >
          {nextProject.href ? "Projects" : "Next"}
          <ChevronRight className="h-5 w-5" />
        </Link>
      </nav>
    </>
  )
}
