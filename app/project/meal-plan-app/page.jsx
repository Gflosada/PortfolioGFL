"use client"

import AuraCaseStudy from "@/components/auraApp"
import { ProjectSideNavigation } from "@/components/project-side-navigation"

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectSideNavigation />
      <AuraCaseStudy />
    </div>
  )
}
