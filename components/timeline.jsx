"use client"

import { useMobile } from "@/src/hooks/use-mobile"
import styles from "@/components/landing-cyberpunk.module.css"

const experiences = [
  {
    title: "Assistant Product Manager - Design & Solutions, Global Case Manager",
    company: "Scotiabank",
    period: "March 2025 - Present",
    location: "Toronto, Canada",
    description:
      "I support the AML Technology and Global Compliance Transformation Program, contributing to the migration of Oracle ECM environments from 8.0.8 to 8.1.2 with a focus on data integrity, system stability, and regulatory compliance. I lead data migration validation and Business Acceptance Testing activities across NFT and QAT environments, validating database objects, comparing large in-scope datasets with SQL and Python in Jupyter Notebook, and producing structured, audit-ready evidence. I collaborate with QA, Data Governance, Compliance, and Engineering teams on testing strategy, discrepancy resolution, GAP assessments, data migration plans, Test Exit Reports, stakeholder dashboards, and sign-off readiness.",
  },
  {
    title: "Product Designer, Entrepreneur, AI Chatbot & Web Development",
    company: "Chatminds Development",
    period: "2023 - Present",
    location: "Toronto, Ontario, CA",
    description:
      "I founded Chatminds to provide fintech clients with cutting-edge web development and AI chatbot solutions, enhancing customer engagement across digital platforms. I specialize in scalable, SEO-optimized APIs that drive AI-powered experiences, improving retention rates. With expertise in modern frameworks like React and Vue.js, I create responsive B2B applications with seamless UX/UI. On the backend, I integrate PostgreSQL for efficient data management and analytics while ensuring security with robust, SEO-friendly code. My Agile development approach, combined with rigorous testing, guarantees high-performance, reliable applications.",
  },
  {
    title: "Product Designer & Frontend Developer",
      company: "FMF Glass Hardware",
      period: "2024 - 2025",
      location: "Toronto, Ontario, CA",
      description:
        "I enhanced FMF’s web applications by leveraging Java, JavaScript, and React to create responsive, cross-browser-compatible interfaces. Leading the development of a custom CMS with a Java backend and React frontend, I optimized content management workflows, SEO, and usability. My expertise in reusable UI components ensured cohesive design across web and mobile platforms. Collaborating closely with product managers, designers, and marketing teams, I delivered high-performance, visually engaging solutions. Using Git for version control, I streamlined collaboration with efficient workflows. I also conducted website performance audits to improve speed and engagement while implementing web security best practices to protect user data and platform integrity.",
  },
  {
    title: "Product Designer",
      company: "Gravity inc",
      period: "2022 - 2024",
      location: "Toronto, Ontario, CA",
      description:
        "I led product design and web development for financial and fintech startups, prioritizing usability and cross-device functionality. I developed interactive, responsive websites with cross-browser compatibility and accessibility in mind. Collaborating within Agile teams, I refined UX and functionality for product launches, ensuring alignment with business goals. Using Figma, I designed UI/UX wireframes and prototypes for seamless development handoff.",
  },
  {
    title: "Intern",
      company: "Bancolombia Bank",
      period: "2019 - 2021",
      location: "Bogota, Colombia",
      description:
        "I conducted user research to refine user flows and enhance digital experiences. I designed wireframes, prototypes, and high-fidelity UI, ensuring intuitive interactions. Collaborating with developers and stakeholders, I aligned design with business goals while simplifying complex workflows for seamless usability. I also established and maintained design systems to ensure consistency across projects.",
  },
  {
    title: "Entrepreneur & Product Designer",
    company: "Pasta Di Casa Company",
    period: "March 2017 – October 2021",
    location: "Bogotá, Colombia",
    description:
      "Designed and developed digital sales and delivery systems. Created and optimized digital marketing strategies, resulting in a 60% increase in sales through targeted social media campaigns.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l before:border-white/20 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            data-landing-card
          >
            <div className={`${styles.hudPanel} p-6`}>
              <div className="relative">
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <div className="mb-2 text-zinc-400">
                  {experience.company} | {experience.location}
                </div>
                <div className="text-zinc-500 mb-4 text-sm">{experience.period}</div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="z-10 flex h-6 w-6 items-center justify-center border border-white/30 bg-black shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                <div className="h-2 w-2 bg-white"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
