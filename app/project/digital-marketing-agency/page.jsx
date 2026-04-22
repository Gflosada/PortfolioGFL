"use client"

import DigitalWeb from "@/components/digitalWeb"
import { ProjectSideNavigation } from "@/components/project-side-navigation"

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectSideNavigation />
      <DigitalWeb />
    </div>
  )
}
