"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/src/hooks/use-mobile"

const experiences = [
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
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <div className="text-zinc-400 mb-2">
                  {experience.company} | {experience.location}
                </div>
                <div className="text-zinc-500 mb-4 text-sm">{experience.period}</div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-slate-500 to-blue-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
