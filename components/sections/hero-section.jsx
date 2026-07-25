import Link from "next/link"
import { ArrowDown, ArrowRight, Download, Eye, Github, Linkedin, Mail, Upload } from "lucide-react"

import styles from "@/components/landing-cyberpunk.module.css"
import { MatrixText } from "@/components/ui/matrix-text"

const socialLinks = [
  { href: "https://github.com/Gflosada", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/innovativedesigner", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.behance.net/germanlosada", label: "Behance", icon: Eye },
  { href: "mailto:gflosadaz@gmail.com", label: "Email", icon: Mail },
]

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const tickerItems = [
  "AI Interfaces",
  "React / Next.js",
  "Product Design",
  "Front-End Development",
]

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Portfolio introduction">
      <div className={styles.heroShell}>
        <nav className={styles.heroNav} aria-label="Primary navigation" data-landing-hero-copy>
          <Link href="/" className={styles.glyphLogo} aria-label="German Losada home">
            <span>German</span>
            <span>Losada_</span>
          </Link>

          <div className={styles.heroNavLinks}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.heroNavActions}>
            <Link href="/ResumeGL .docx.pdf" download className={styles.resumeButton}>
              Download Resume
            </Link>
          </div>
        </nav>

        <div className={styles.heroPanel}>
          <div className={styles.heroBackground} aria-hidden="true" data-landing-parallax>
            <video
              src="/appLawyer/Design_Factory.mp4"
              poster="/appLawyer/ChatGPT%20Image%20Jul%2010,%202026,%2003_49_00%20PM.png"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              data-landing-banner-video
            >
              Your browser does not support embedded video playback.
            </video>
          </div>

          <div className={styles.heroCenter}>
            <p className={styles.heroBadge} data-landing-hero-copy>
              Portfolio OS / Product Design / Front-End
            </p>

            <h1 className={styles.heroTitle} data-landing-hero-copy>
              <MatrixText
                text="Build"
                className={styles.heroTitleLine}
                letterClassName={styles.heroTitleLetter}
                initialDelay={780}
                letterAnimationDuration={360}
                letterInterval={78}
              />
              <span className={styles.heroTitleLine}>
                <MatrixText
                  text="Smarter"
                  className={styles.heroTitleWord}
                  letterClassName={styles.heroTitleLetter}
                  initialDelay={980}
                  letterAnimationDuration={360}
                  letterInterval={58}
                />
                <MatrixText
                  text="With"
                  className={styles.heroTitleWord}
                  letterClassName={styles.heroTitleLetter}
                  initialDelay={1430}
                  letterAnimationDuration={360}
                  letterInterval={64}
                />
              </span>
              <span className={styles.heroTitleLine}>
                <MatrixText
                  text="German"
                  className={styles.heroTitleWord}
                  letterClassName={styles.heroTitleLetter}
                  initialDelay={1260}
                  letterAnimationDuration={420}
                  letterInterval={54}
                />
                <MatrixText
                  text="Losada"
                  className={styles.heroTitleWord}
                  letterClassName={styles.heroTitleLetter}
                  initialDelay={1580}
                  letterAnimationDuration={420}
                  letterInterval={54}
                />
              </span>
            </h1>

            <p className={styles.heroCopy} data-landing-hero-copy>
              End-to-end product thinking that connects strategy, UX, AI interfaces, and launch-ready development.
            </p>

            <div className={styles.heroUpload} data-landing-hero-copy>
              <Link href="#projects" className={styles.uploadButton}>
                View projects
                <Upload aria-hidden="true" />
              </Link>
              <Link href="#about" className={styles.scrollButton} aria-label="Scroll to about">
                <ArrowDown aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.heroFeatureGrid}>
            <article className={styles.heroFeatureCard} data-landing-hero-visual data-landing-card>
              <div>
                <h2>Product Design + Front-End</h2>
                <p>High-impact interfaces, motion systems, and production-ready React/Next.js builds.</p>
                <div className={styles.heroSocials} aria-label="Social links">
                  {socialLinks.map((item) => {
                    const Icon = item.icon
                    const isExternal = item.href.startsWith("http")

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                      >
                        <Icon aria-hidden="true" />
                      </Link>
                    )
                  })}
                </div>
              </div>
              <ArrowRight aria-hidden="true" />
            </article>

            <article className={styles.heroFeatureCard} data-landing-hero-visual data-landing-card>
              <div>
                <h2>5+ Years Overall Experience</h2>
                <p>Design systems, fintech workflows, AI-enhanced UX, and responsive web applications.</p>
                <div className={styles.heroStats}>
                  <span>UX</span>
                  <span>AI</span>
                  <span>WEB</span>
                </div>
              </div>
              <Download aria-hidden="true" />
            </article>
          </div>

          <div className={styles.heroMobileActions} data-landing-hero-copy>
            <Link href="#projects" className={styles.heroAction}>
              View projects
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="#contact" className={`${styles.heroAction} ${styles.heroActionAlt}`}>
              Contact
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.heroMobileSocials} data-landing-hero-copy aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon
              const isExternal = item.href.startsWith("http")

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`${styles.heroAction} ${styles.heroActionAlt} ${styles.socialAction}`}
                  aria-label={item.label}
                >
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.heroTicker} data-landing-hero-copy>
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
