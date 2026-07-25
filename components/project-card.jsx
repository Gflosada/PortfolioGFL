"use client"

import Link from "next/link"
import { ArrowUpRight, Github, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import styles from "@/components/landing-cyberpunk.module.css"

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
  websiteUrl,
  slug,
  hideActions = false,
  imageFit = "cover",
}) {
  const fitClass = imageFit === "contain" ? "object-contain p-3" : "object-cover"

  return (
    <article className={styles.projectCard} data-landing-card>
      <div className={styles.projectImage}>
        <img src={image || "/placeholder.svg"} alt={title} className={`${fitClass}`} />
      </div>

      <div className={styles.projectBody}>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {!hideActions ? (
          <div className={styles.cardActions}>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="rounded-none text-zinc-300 hover:bg-white/10 hover:text-white" asChild>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
              {websiteUrl ? (
                <Button variant="ghost" size="sm" className="rounded-none text-zinc-300 hover:bg-white/10 hover:text-white" asChild>
                  <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    Website
                  </Link>
                </Button>
              ) : null}
            </div>
            <Button
              size="sm"
              className="rounded-none border border-[#caff25]/70 bg-white text-[#166534] hover:bg-[#f4ffe6] hover:text-[#14532d]"
              asChild
            >
              <Link href={`/project/${slug}`} className={styles.projectCta}>
                Show Case
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : demoUrl ? (
          <div className={styles.cardActions}>
            <Button
              size="sm"
              className="rounded-none border border-[#caff25]/70 bg-white text-[#166534] hover:bg-[#f4ffe6] hover:text-[#14532d]"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  )
}
