"use client"

import styles from "@/components/landing-cyberpunk.module.css"

export function SectionHeading({ title, subtitle, number = "01", mobileScrollReveal = false }) {
  return (
    <div
      className={styles.sectionHeading}
      data-landing-reveal
      data-mobile-scroll-reveal={mobileScrollReveal ? true : undefined}
    >
      <div className={styles.sectionKicker}>
        <span>{number}</span>
        <span>//{subtitle}</span>
        <span>TOT. 06</span>
      </div>
      <h2 className={styles.sectionTitle}>{title}_</h2>
      <div className={styles.sectionRule} />
    </div>
  )
}
