"use client"

import InvestmentDashboardCaseStudy from "@/components/investmentDash"
import { ProjectSideNavigation } from "@/components/project-side-navigation"

export default function InvestmentDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectSideNavigation />
      <InvestmentDashboardCaseStudy />
    </div>
  )
}
