import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Investment Dashboard UI/UX Desig",
      description:"complete UI/UX design system for a next-gen investment fintech dashboard—streamlined components, intuitive user flows, and data-driven visuals that empower smarter investing.",
      tags: ["Figma", "User Research", "Prototyping", "Mockups"],
      image: "/dashboard.png?w-full h-full object-contain",
      demoUrl: "https://www.behance.net/gallery/224271611/Investment-Dashboard-UIUX",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Web Design & Development",
      description: "design and develop responsive design systems, create AI-powered chatbots, and build ReactJS applications to enhance digital experiences. My focus is on efficiency, scalability, and user-centric innovation.",
      tags: ["Figma", "User Research", "Prototyping", "Mockups"],
      image: "/chatmindsmockup.png?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/224271611/Investment-Dashboard-UIUX",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Digital Marketing Agency",
      description: "I conducted design research, prototyping, and UI/UX development to craft intuitive and high-impact digital marketing experiences. From strategy to execution, I ensured seamless user interactions and visually compelling interfaces.",
      tags: ["Figma", "User Research", "Prototyping", "Mockups"],
      image: "/digitalweb.png?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/200146167/UIUX-Digital-Marketing-Agency-website",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Financial App",
      description: "I conducted comprehensive user research, UX design, and UI development to create a seamless, intuitive financial application. My approach focused on user needs,accessibility, and engagement, ensuring a smooth and efficient experience.Let me know if you’d like any refinements!",
      tags: ["Figma", "User Research", "Prototyping", "Mockups"],
      image: "/financialapp.png?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/154064523/Gravity-UIUX",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "NFT Website",
      description: "I designed and developed a modern Web3 platform for NFT experiences, integrating intuitive UI, seamless UX, and scalable blockchain solutions. My work balanced innovation with accessibility to create an engaging, user-friendly space in the decentralized ecosystem.",
      tags: ["Figma", "React.js", "Javascript", "Tailwind CSS"],
      image: "/NFTWebsite.png?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/227639011/Web3-App",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Meal Plan App",
      description: "I designed intuitive mockups and UI/UX for a meal plan app, focusing on user-friendly navigation, accessibility, and engaging visuals. The goal was to create a seamless experience that helps users plan, track, and optimize their meals effortlessly. Let me know if you’d like any refinements!",
      tags: ["Figma", "User Research", "Prototyping", "Mockups"],
      image: "/mealapp.png?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/227379677/NFT-Website",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Graphic Design",
      description: "I designed eye-catching ads, banners, and social media posts, crafting visually compelling content to boost engagement and brand presence. My work focused on clarity, aesthetics, and strategic messaging to maximize impact across digital platforms.",
      tags: ["Photoshop", "Illustrator", "Advertising"],
      image: "/GDesign.webp?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/124119831/Graphic-Design",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "AI Platform Web & Brochure Design",
      description: "I designed a sleek and intuitive web interface for an AI platform, ensuring a user-friendly experience with clean aesthetics and seamless functionality. Additionally, I created engaging brochures and media assets, presenting the platform’s capabilities in a visually compelling and informative way.",
      tags: ["Figma","Photoshop", "Illustrator", "Advertising"],
      image: "/brochure.jpg?height=400&width=600",
      demoUrl: "https://www.behance.net/gallery/186800883/Webs-Design-UIUX",
      repoUrl: "https://github.com/Gflosada",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/portfolio.png?height=400&width=600",
      demoUrl: "https://www.behance.net/germanlosada",
      repoUrl: "https://github.com/Gflosada",
    },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
