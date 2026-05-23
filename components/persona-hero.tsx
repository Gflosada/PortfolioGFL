"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export type PersonaId = "creative" | "dynamic" | "execution"

export type Persona = {
  id: PersonaId
  title: string
  heroWord: string
  image: string
  description: string
}

export const personas: Persona[] = [
  {
    id: "creative",
    title: "Creative",
    heroWord: "CREATIVE",
    image: "/images/3.png",
    description:
      "I turn ideas into polished digital experiences through visual design, storytelling, and strong UI direction.",
  },
  {
    id: "dynamic",
    title: "Dynamic",
    heroWord: "DYNAMIC",
    image: "/images/4.png",
    description:
      "I build interactive, responsive, and animated interfaces that feel modern, smooth, and engaging.",
  },
  {
    id: "execution",
    title: "Execution",
    heroWord: "EXECUTION",
    image: "/images/5.png",
    description:
      "I connect design, development, and strategy to deliver products that are clear, functional, and ready to launch.",
  },
]

const getPersonaIndex = (personaId: PersonaId) => personas.findIndex((persona) => persona.id === personaId)

function getPersonaLayout(personaId: PersonaId, activePersonaId: PersonaId, isMobile: boolean) {
  const personaIndex = getPersonaIndex(personaId)
  const activeIndex = getPersonaIndex(activePersonaId)
  const relativePosition = (personaIndex - activeIndex + personas.length) % personas.length

  if (relativePosition === 0) {
    return {
      x: 0,
      y: isMobile ? -10 : -26,
      scale: isMobile ? 1.05 : 1.3,
      autoAlpha: 1,
      zIndex: 30,
    }
  }

  if (relativePosition === 1) {
    return {
      x: isMobile ? 124 : 315,
      y: isMobile ? 92 : 88,
      scale: isMobile ? 0.5 : 0.7,
      autoAlpha: 0.74,
      zIndex: 12,
    }
  }

  return {
    x: isMobile ? -124 : -315,
    y: isMobile ? 92 : 88,
    scale: isMobile ? 0.5 : 0.7,
    autoAlpha: 0.74,
    zIndex: 12,
  }
}

type PersonaHeroProps = {
  activePersonaId: PersonaId
  onSelectPersona: (personaId: PersonaId) => void
}

export function PersonaHero({ activePersonaId, onSelectPersona }: PersonaHeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const didInitRef = useRef(false)
  const activeTweenRef = useRef<gsap.core.Timeline | null>(null)
  const personaRefs = useRef<Record<PersonaId, HTMLButtonElement | null>>({
    creative: null,
    dynamic: null,
    execution: null,
  })

  useEffect(() => {
    personas.forEach((persona) => {
      const image = new window.Image()
      image.src = persona.image
    })
  }, [])

  const animatePersonaLayout = (nextPersonaId: PersonaId, duration = 0.65) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    const resolvedDuration = reduceMotion ? 0 : duration
    const timeline = gsap.timeline({
      defaults: { duration: resolvedDuration, ease: "expo.out", overwrite: "auto" },
    })

    activeTweenRef.current?.kill()

    personas.forEach((persona) => {
      const personaElement = personaRefs.current[persona.id]
      const layout = getPersonaLayout(persona.id, nextPersonaId, isMobile)
      const isActive = persona.id === nextPersonaId

      if (!personaElement) return

      personaElement.style.zIndex = String(layout.zIndex)

      timeline.to(personaElement, {
        x: layout.x,
        y: layout.y,
        scale: layout.scale,
        autoAlpha: layout.autoAlpha,
        filter: isActive ? "saturate(1.1)" : "saturate(0.9)",
        onComplete: () => {
          personaElement.style.zIndex = String(layout.zIndex)
        },
      }, 0)
    })

    activeTweenRef.current = timeline
  }

  useGSAP(
    () => {
      const characterElements = personas
        .map((persona) => personaRefs.current[persona.id])
        .filter(Boolean) as HTMLButtonElement[]

      gsap.set(characterElements, {
        transformOrigin: "50% 88%",
        willChange: "transform, opacity",
      })
      gsap.set(glowRef.current, {
        willChange: "transform, opacity",
      })

      animatePersonaLayout(activePersonaId, 0)
      didInitRef.current = true

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (!reduceMotion) {
        gsap.to(glowRef.current, {
          x: 24,
          scale: 1.06,
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }

      return () => {
        activeTweenRef.current?.kill()
      }
    },
    { scope: rootRef },
  )

  useEffect(() => {
    if (!didInitRef.current) return

    animatePersonaLayout(activePersonaId)
  }, [activePersonaId])

  return (
    <div
      ref={rootRef}
      className="relative z-10 h-[440px] w-full max-w-[820px] overflow-visible sm:h-[520px] md:h-[clamp(560px,78vh,760px)] lg:max-w-[940px]"
      aria-label="Interactive professional persona character stage"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute bottom-6 left-1/2 h-40 w-[82%] -translate-x-1/2 rounded-[50%] bg-white/24 blur-3xl"
      />
      <div className="pointer-events-none absolute bottom-4 left-1/2 h-28 w-[76%] -translate-x-1/2 rounded-[50%] bg-blue-950/10 blur-xl" />
      <div className="absolute inset-0 flex items-end justify-center">
        {personas.map((persona) => {
          const isActive = persona.id === activePersonaId

          return (
            <button
              key={persona.id}
              ref={(node) => {
                personaRefs.current[persona.id] = node
              }}
              type="button"
              aria-label={`Show ${persona.title} persona`}
              aria-pressed={isActive}
              onClick={() => onSelectPersona(persona.id)}
              className={`absolute bottom-0 flex h-[360px] w-[265px] origin-bottom items-end justify-center rounded-lg outline-none transition-[filter] duration-300 focus-visible:ring-2 focus-visible:ring-white sm:h-[450px] sm:w-[330px] md:h-[clamp(500px,70vh,700px)] md:w-[min(42vw,460px)] ${
                isActive ? "saturate-110" : "saturate-95"
              }`}
            >
              <span
                className={`absolute bottom-1 h-12 rounded-full bg-blue-950/22 blur-xl ${
                  isActive ? "w-52 md:w-72" : "w-36 md:w-48"
                }`}
              />
              <img
                src={persona.image}
                alt={`${persona.title} persona character`}
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_26px_38px_rgba(8,47,73,0.32)]"
                draggable={false}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
