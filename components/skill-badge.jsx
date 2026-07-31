"use client"

import styles from "@/components/landing-cyberpunk.module.css"

export function SkillBadge({ name, stackLabel = "Tech Stack" }) {
  return (
    <div className={styles.skillBadge} data-landing-card>
      <div className="relative z-10">
        <div className={styles.skillName}>{name}</div>
        <div className={styles.skillMeta}>{stackLabel}</div>
      </div>
    </div>
  )
}
