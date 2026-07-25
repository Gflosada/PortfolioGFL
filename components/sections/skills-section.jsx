import { SectionHeading } from "@/components/section-heading"
import { SkillBadge } from "@/components/skill-badge"
import styles from "@/components/landing-cyberpunk.module.css"

export function SkillsSection() {
  const skills = [
    "HTML/CSS",
    "JavaScript\nTypeScript",
    "React.js",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "UI/UX Design",
    "Figma/Adobe XD",
    "Photoshop\nIllustrator",
    "PHP/SQL",
    "PostgreSQL",
    "APIs",
    "SEO",
    "Digital Marketing",
    "3D Modeling",
    "Agile/Scrum",
    "User Research",
    "Prototyping",
    "Wireframing",
    "A/B Testing",
  ]

  return (
    <section id="skills" className={styles.cyberSection}>
      <div className="container relative z-10">
        <SectionHeading number="04" title="My Skills" subtitle="Tool Stack" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
