import { SectionHeading } from "@/components/section-heading"
import { Timeline } from "@/components/timeline"
import styles from "@/components/landing-cyberpunk.module.css"

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.cyberSection}>
      <div className="container relative z-10">
        <SectionHeading number="03" title="Work Experience" subtitle="Professional Journey" />

        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  )
}
