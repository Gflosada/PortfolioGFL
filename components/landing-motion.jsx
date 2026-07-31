"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import styles from "@/components/landing-cyberpunk.module.css"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function LandingMotion({ children }) {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const q = gsap.utils.selector(root)
      const revealItems = q("[data-landing-reveal]")
      const cardItems = q("[data-landing-card]")
      const heroCopy = q("[data-landing-hero-copy]")
      const heroVisual = q("[data-landing-hero-visual]")
      const parallaxItems = q("[data-landing-parallax]")
      const bannerVideos = q("[data-landing-banner-video]")
      const pointerGlow = q("[data-landing-glow]")[0]
      const mm = gsap.matchMedia()

      gsap.set([...revealItems, ...cardItems], { autoAlpha: 0, y: 34 })
      gsap.set(heroCopy, { autoAlpha: 0, y: 28 })
      gsap.set(heroVisual, { autoAlpha: 0, y: 38, scale: 0.97 })

      let moveGlow = null

      if (pointerGlow) {
        const xTo = gsap.quickTo(pointerGlow, "x", { duration: 0.45, ease: "power3" })
        const yTo = gsap.quickTo(pointerGlow, "y", { duration: 0.45, ease: "power3" })

        moveGlow = (event) => {
          const rect = root.getBoundingClientRect()
          xTo(event.clientX - rect.left)
          yTo(event.clientY - rect.top)
        }

        root.addEventListener("pointermove", moveGlow)
      }

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions

          if (reduceMotion) {
            gsap.set([...revealItems, ...cardItems, ...heroCopy, ...heroVisual], {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              clearProps: "transform",
            })
            return
          }

          const videoCleanups = []

          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(heroCopy, { autoAlpha: 1, y: 0, duration: 0.82, stagger: 0.08 })
            .to(heroVisual, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, "-=0.5")

          ScrollTrigger.batch(revealItems, {
            start: "top 84%",
            end: "bottom 16%",
            interval: 0.08,
            batchMax: desktop ? 6 : 3,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.72,
                ease: "power3.out",
                stagger: 0.07,
                overwrite: true,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                autoAlpha: 0,
                y: 24,
                duration: 0.34,
                ease: "power2.out",
                overwrite: true,
              }),
          })

          ScrollTrigger.batch(cardItems, {
            start: "top 88%",
            interval: 0.08,
            batchMax: desktop ? 8 : 4,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.64,
                ease: "power3.out",
                stagger: 0.05,
                overwrite: true,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                autoAlpha: 0,
                y: 18,
                duration: 0.3,
                ease: "power2.out",
                overwrite: true,
              }),
          })

          if (desktop) {
            parallaxItems.forEach((item, index) => {
              gsap.to(item, {
                y: index % 2 === 0 ? -62 : -38,
                scale: index === 0 ? 1.035 : 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              })
            })
          }

          bannerVideos.forEach((video) => {
            const playVideo = () => {
              video.muted = true
              video.loop = true
              video.playsInline = true
              video.play().catch(() => {
                // Muted autoplay is broadly supported, but some browsers retry after scroll.
              })
            }

            video.addEventListener("loadedmetadata", playVideo)
            video.addEventListener("canplay", playVideo)
            video.addEventListener("ended", playVideo)
            window.addEventListener("focus", playVideo)
            document.addEventListener("visibilitychange", playVideo)
            videoCleanups.push(() => {
              video.removeEventListener("loadedmetadata", playVideo)
              video.removeEventListener("canplay", playVideo)
              video.removeEventListener("ended", playVideo)
              window.removeEventListener("focus", playVideo)
              document.removeEventListener("visibilitychange", playVideo)
            })

            playVideo()
          })

          return () => {
            videoCleanups.forEach((cleanup) => cleanup())
          }
        },
      )

      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener("load", refresh)

      return () => {
        window.removeEventListener("load", refresh)
        if (moveGlow) root.removeEventListener("pointermove", moveGlow)
        mm.revert()
      }
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className={styles.landingRoot}>
      <div className={styles.pointerGlow} data-landing-glow aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
      {children}
    </div>
  )
}
