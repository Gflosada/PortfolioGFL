"use client"

import { ProjectSideNavigation } from "@/components/project-side-navigation"

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <ProjectSideNavigation />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Graphic Design</h1>
        <p className="text-zinc-300 mt-2">Add your component for this project here.</p>
      </div>
    </div>
  )
}



