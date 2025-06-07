import { SectionHeading } from "@/components/section-heading"
import { SkillBadge } from "@/components/skill-badge"

export function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "Angular", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "UI/UX Design", level: 95 },
    { name: "Figma/Adobe XD", level: 95 },
    { name: "Photoshop/Illustrator", level: 85 },
    { name: "PHP/SQL", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "APIs", level: 85 },
    { name: "SEO", level: 80 },
    { name: "Digital Marketing", level: 85 },
    { name: "3D Modeling", level: 85 },
    { name: "Agile/Scrum", level: 90 },
    { name: "User Research", level: 95 },
    { name: "Prototyping", level: 90 },
    { name: "Wireframing", level: 90 },
    { name: "Version Control", level: 85 },
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}
