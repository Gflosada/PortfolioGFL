"use client"
import FintechCaseStudy from "@/components/financialApp"
import { ProjectSideNavigation } from "@/components/project-side-navigation"

export default function FinancialAppPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FB]">
      <ProjectSideNavigation />
      <FintechCaseStudy />
    </div>
  )
}



