import Link from "next/link"
import { ArrowLeft, Github, Globe, ExternalLink, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


// Project data - you can move this to a separate file later
const projectsData = {
  "dashboard-landing": {
    title: "Dashboard & Landing Page Design",
    description: "I designed a sleek and intuitive web interface for a platform, ensuring a user-friendly experience with clean aesthetics and seamless functionality. Additionally, I created engaging brochures and media assets, presenting the platform's capabilities in a visually compelling and informative way.",
    longDescription: "This project involved creating a comprehensive design system for a modern web platform. The dashboard features intuitive navigation, data visualization components, and responsive design that works seamlessly across all devices. The landing page was designed to effectively communicate the platform's value proposition while maintaining visual consistency with the overall brand identity.",
    tags: ["Figma", "Photoshop", "Illustrator", "Advertising"],
    image: "/appMusic.jpg",
    demoUrl: "https://www.behance.net/gallery/232073939/Produc-Design-Dashboard",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "UI/UX Design",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Design Systems"],
    features: [
      "Responsive dashboard design",
      "Interactive data visualization",
      "Brand identity development",
      "Marketing material creation"
    ]
  },
  "dashboard-investment": {
    title: "Investment Dashboard UI/UX Design",
    description: "Complete UI/UX design system for a next-gen investment fintech dashboard—streamlined components, intuitive user flows, and data-driven visuals that empower smarter investing.",
    longDescription: "This fintech dashboard was designed to provide investors with a comprehensive view of their portfolio performance, market trends, and investment opportunities. The design focuses on clarity, accessibility, and user trust while handling complex financial data in an intuitive way.",
    tags: ["Figma", "User Research", "Prototyping", "Mockups"],
    image: "/dashboard.png",
    demoUrl: "/project/dashboard-investment",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Fintech UI/UX",
    technologies: ["Figma", "User Research", "Prototyping", "Design Systems"],
    features: [
      "Portfolio analytics dashboard",
      "Real-time market data visualization",
      "Investment tracking tools",
      "Risk assessment interfaces"
    ]
  },
  "web-design-development": {
    title: "Web Design & Development",
    description: "Design and develop responsive design systems, create AI-powered chatbots, and build ReactJS applications to enhance digital experiences. My focus is on efficiency, scalability, and user-centric innovation.",
    longDescription: "This project showcases a full-stack approach to web development, combining modern design principles with cutting-edge technology. The solution includes AI-powered features, responsive design systems, and scalable architecture that can adapt to growing business needs.",
    tags: ["Figma", "User Research", "Prototyping", "Mockups"],
    image: "/chatmindsmockup.png",
    demoUrl: "https://www.behance.net/gallery/211331271/Web-DesignDevelopment",
    websiteUrl: "https://chatmindsdevelopment.com/",
    repoUrl: "https://github.com/Gflosada",
    date: "2024",
    category: "Full-Stack Development",
    technologies: ["React.js", "AI Integration", "Responsive Design", "Chatbot Development"],
    features: [
      "AI-powered chatbot integration",
      "Responsive design system",
      "Modern React.js architecture",
      "Scalable backend solutions"
    ]
  },
  "digital-marketing-agency": {
    title: "Digital Marketing Agency",
    description: "I conducted design research, prototyping, and UI/UX development to craft intuitive and high-impact digital marketing experiences. From strategy to execution, I ensured seamless user interactions and visually compelling interfaces.",
    longDescription: "This project involved creating a complete digital presence for a marketing agency, including website design, brand identity, and marketing materials. The focus was on creating a professional, trustworthy image that would attract potential clients while showcasing the agency's capabilities.",
    tags: ["Figma", "User Research", "Prototyping", "Mockups"],
    image: "/digitalweb.png",
    demoUrl: "https://www.behance.net/gallery/200146167/UIUX-Digital-Marketing-Agency-website",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Brand & Web Design",
    technologies: ["Figma", "Brand Design", "Web Development", "Marketing Strategy"],
    features: [
      "Complete brand identity",
      "Responsive website design",
      "Marketing material creation",
      "Client onboarding system"
    ]
  },
  "financial-app": {
    title: "Financial App",
    description: "I conducted comprehensive user research, UX design, and UI development to create a seamless, intuitive financial application. My approach focused on user needs, accessibility, and engagement, ensuring a smooth and efficient experience.",
    longDescription: "This mobile-first financial application was designed to help users manage their finances, track expenses, and make informed financial decisions. The design prioritizes security, ease of use, and accessibility to ensure all users can effectively manage their financial health.",
    tags: ["Figma", "User Research", "Prototyping", "Mockups"],
    image: "/financialapp.png",
    demoUrl: "https://www.behance.net/gallery/154064523/Gravity-UIUX",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Mobile App Design",
    technologies: ["Figma", "Mobile UI/UX", "User Research", "Prototyping"],
    features: [
      "Expense tracking system",
      "Budget management tools",
      "Financial goal setting",
      "Secure transaction handling"
    ]
  },
  "nft-website": {
    title: "NFT Website",
    description: "I designed and developed a modern Web3 platform for NFT experiences, integrating intuitive UI, seamless UX, and scalable blockchain solutions. My work balanced innovation with accessibility to create an engaging, user-friendly space in the decentralized ecosystem.",
    longDescription: "This Web3 platform was built to showcase and trade NFTs with a focus on user experience and accessibility. The design bridges the gap between complex blockchain technology and everyday users, making NFT trading accessible to everyone.",
    tags: ["Figma", "React.js", "Javascript", "Tailwind CSS"],
    image: "/NFTWebsite.png",
    demoUrl: "https://www.behance.net/gallery/227639011/Web3-App",
    websiteUrl: "https://nexuscrypto-dac0c.web.app/",
    repoUrl: "https://github.com/Gflosada",
    date: "2024",
    category: "Web3 Development",
    technologies: ["React.js", "Web3", "Blockchain", "NFT Integration"],
    features: [
      "NFT marketplace functionality",
      "Wallet integration",
      "Blockchain transaction handling",
      "Responsive Web3 interface"
    ]
  },
  "meal-plan-app": {
    title: "Meal Plan App",
    description: "I designed intuitive mockups and UI/UX for a meal plan app, focusing on user-friendly navigation, accessibility, and engaging visuals. The goal was to create a seamless experience that helps users plan, track, and optimize their meals effortlessly.",
    longDescription: "This mobile application was designed to help users plan their meals, track nutrition, and discover new recipes. The design focuses on simplicity and motivation, making healthy eating accessible and enjoyable for users of all backgrounds.",
    tags: ["Figma", "User Research", "Prototyping", "Mockups"],
    image: "/mealapp.png",
    demoUrl: "https://www.behance.net/gallery/117864547/App-Aura-UXUI-Design",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Mobile App Design",
    technologies: ["Figma", "Mobile UI/UX", "Nutrition Tracking", "Recipe Management"],
    features: [
      "Meal planning interface",
      "Nutrition tracking",
      "Recipe discovery",
      "Shopping list generation"
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    description: "I designed eye-catching ads, banners, and social media posts, crafting visually compelling content to boost engagement and brand presence. My work focused on clarity, aesthetics, and strategic messaging to maximize impact across digital platforms.",
    longDescription: "This collection showcases various graphic design projects including social media campaigns, advertising materials, and brand assets. Each piece was designed with specific target audiences in mind, using strategic color psychology and typography to maximize engagement and brand recognition.",
    tags: ["Photoshop", "Illustrator", "Advertising"],
    image: "/GDesign.webp",
    demoUrl: "https://www.behance.net/gallery/124119831/Graphic-Design",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Graphic Design",
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Brand Design", "Social Media"],
    features: [
      "Social media campaign design",
      "Brand identity development",
      "Advertising material creation",
      "Print and digital assets"
    ]
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "This portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "A modern, responsive portfolio website showcasing my work and skills. Built with Next.js for optimal performance, Tailwind CSS for styling, and Framer Motion for smooth animations. The site features a clean, professional design that effectively presents my projects and experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/portfolio.png",
    demoUrl: "https://www.behance.net/germanlosada",
    repoUrl: "https://github.com/Gflosada",
    websiteUrl: null,
    date: "2024",
    category: "Web Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Project showcase",
      "Contact integration"
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-zinc-400 mb-8">The project you're looking for doesn't exist.</p>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="text-zinc-400 hover:text-white" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="flex gap-2">
              {project.repoUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
              )}
              {project.websiteUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </Link>
                </Button>
              )}
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Behance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-zinc-600 text-zinc-300">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700/50 mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">About This Project</h2>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Page-specific components are now routed via /project/<slug> dedicated pages */}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-300">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-300">German Losada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-300">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-zinc-700 text-zinc-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-600" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Behance
                    </Link>
                  </Button>
                  {project.websiteUrl && (
                    <Button variant="outline" className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-700" asChild>
                      <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Live Website
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-700" asChild>
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
