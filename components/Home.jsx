import { ScrollProgress } from "@/components/scroll-progress"
import { LandingMotion } from "@/components/landing-motion"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import styles from "@/components/landing-cyberpunk.module.css"

export default function Home() {
  return (
    <LandingMotion>
      <div className={styles.pageShell}>
        <ScrollProgress />

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </LandingMotion>
  )
}
