"use client"

import styles from "@/components/landing-cyberpunk.module.css"

export function SkillBadge({ name }) {
  return (
    <div className={styles.skillBadge} data-landing-card>
      <div className="relative z-10">
        <div className={styles.skillName}>{name}</div>
        <div className={styles.skillMeta}>Knowledge</div>
      </div>
    </div>
  )
}
