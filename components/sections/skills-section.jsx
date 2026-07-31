import { SectionHeading } from "@/components/section-heading"
import { SkillBadge } from "@/components/skill-badge"
import styles from "@/components/landing-cyberpunk.module.css"

export function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", stackLabel: "Tech Stack" },
    { name: "JavaScript\nTypeScript", stackLabel: "Tech Stack" },
    { name: "React.js", stackLabel: "Tech Stack" },
    { name: "Next.js", stackLabel: "Tech Stack" },
    { name: "Angular", stackLabel: "Tech Stack" },
    { name: "Tailwind CSS", stackLabel: "Tech Stack" },
    { name: "UI/UX Design", stackLabel: "Design Stack" },
    { name: "Figma/Adobe XD", stackLabel: "Design Stack" },
    { name: "Photoshop\nIllustrator", stackLabel: "Design Stack" },
    { name: "PHP/SQL", stackLabel: "Tech Stack" },
    { name: "PostgreSQL", stackLabel: "Tech Stack" },
    { name: "APIs", stackLabel: "Tech Stack" },
    { name: "SEO", stackLabel: "Tech Stack" },
    { name: "Digital Marketing", stackLabel: "Design Stack" },
    { name: "3D Modeling", stackLabel: "Design Stack" },
    { name: "Agile/Scrum", stackLabel: "Design Stack" },
    { name: "User Research", stackLabel: "Design Stack" },
    { name: "Prototyping", stackLabel: "Design Stack" },
    { name: "Wireframing", stackLabel: "Design Stack" },
    { name: "A/B Testing", stackLabel: "Design Stack" },
  ]

  return (
    <section id="skills" className={styles.cyberSection}>
      <div className="container relative z-10">
        <SectionHeading number="04" title="My Skills" subtitle="Tool Stack" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} stackLabel={skill.stackLabel} />
          ))}
        </div>
      </div>
    </section>
  )
}
