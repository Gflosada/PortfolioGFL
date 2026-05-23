"use client"

import { useRef, useState } from "react"
import { flushSync } from "react-dom"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Eye } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"
import { PersonaHero, personas } from "@/components/persona-hero"

gsap.registerPlugin(useGSAP)

export function HeroSection() {
  const sectionRef = useRef(null)
  const copyRef = useRef(null)
  const wordRef = useRef(null)
  const wordTrackRef = useRef(null)
  const wordLoopRef = useRef(null)
  const personaTimelineRef = useRef(null)
  const [activePersonaId, setActivePersonaId] = useState("execution")
  const [displayPersonaId, setDisplayPersonaId] = useState("execution")

  const activePersona = personas.find((persona) => persona.id === activePersonaId) ?? personas[2]
  const displayPersona = personas.find((persona) => persona.id === displayPersonaId) ?? personas[2]

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions
          const targets = [".hero-eyebrow", ".hero-title", ".hero-copy", ".hero-actions", ".hero-socials", ".hero-selector", ".hero-visual"]

          gsap.set(wordTrackRef.current, { willChange: "transform" })

          if (reduceMotion) {
            gsap.set(targets, { autoAlpha: 1, y: 0 })
            return
          }

          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.1,
            },
          )
        },
      )

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  useGSAP(
    () => {
      const wordContainer = wordRef.current
      const wordTrack = wordTrackRef.current

      if (!wordContainer || !wordTrack) return

      wordLoopRef.current?.kill()

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const containerWidth = wordContainer.offsetWidth
      const trackWidth = wordTrack.scrollWidth
      const startX = containerWidth + 48
      const endX = -trackWidth - 48
      const travelDistance = startX - endX
      const duration = Math.max(7, travelDistance / 115)

      if (reduceMotion) {
        gsap.set(wordTrack, { x: 0 })
        return
      }

      gsap.set(wordTrack, { x: startX })
      wordLoopRef.current = gsap.to(wordTrack, {
        x: endX,
        duration,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.18,
      })

      return () => {
        wordLoopRef.current?.kill()
      }
    },
    { scope: sectionRef, dependencies: [displayPersona.heroWord] },
  )

  const selectPersona = contextSafe((nextPersonaId) => {
    if (nextPersonaId === activePersonaId) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setActivePersonaId(nextPersonaId)
    personaTimelineRef.current?.kill()

    if (reduceMotion) {
      setDisplayPersonaId(nextPersonaId)
      return
    }

    personaTimelineRef.current = gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .to([copyRef.current, wordRef.current], { autoAlpha: 0, y: 10, duration: 0.18 })
      .add(() => {
        flushSync(() => setDisplayPersonaId(nextPersonaId))
        gsap.set([copyRef.current, wordRef.current], { autoAlpha: 0, y: 10 })
      })
      .to([copyRef.current, wordRef.current], { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.04 })
  })

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_28%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(135deg,#148af7_0%,#4eb3ff_52%,#1b8df4_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_52%,rgba(0,87,186,0.14))]"></div>
      </div>

      <div className="container relative z-10 grid min-h-screen grid-cols-1 items-end gap-4 pt-14 lg:grid-cols-[0.38fr_0.62fr] lg:pt-16">
        <div className="space-y-5 pb-16 sm:space-y-6 lg:pb-[8vh]">
          <div className="hero-eyebrow inline-block">
            <div className="relative px-5 py-2 pl-8 text-sm font-bold rounded-full bg-blue-950/55 text-white shadow-lg shadow-blue-950/20 ring-1 ring-white/20 mb-4 backdrop-blur-sm">
              <span className="relative z-10">Product Designer & Web Developer</span>
              <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/90"></span>
            </div>
          </div>
          <h1 className="hero-title text-5xl font-black tracking-normal leading-[0.95] sm:text-6xl md:text-7xl xl:text-8xl">
            <span className="block text-white drop-shadow-[0_6px_18px_rgba(37,99,235,0.24)]">Hi, I'm</span>
            <span className="block text-blue-950 drop-shadow-[0_5px_16px_rgba(255,255,255,0.35)]">
              German Losada
            </span>
          </h1>
          <p ref={copyRef} className="hero-copy max-w-[560px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
            {displayPersona.description}
          </p>
          <div className="hero-actions flex flex-wrap gap-4 pt-4">
            <Button className="relative overflow-hidden group h-12 rounded-lg bg-blue-950/70 px-6 font-bold text-white shadow-xl shadow-blue-950/25 hover:bg-blue-950">
              <Link href="#projects" className="relative z-10 flex items-center">
                View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
           
            <Button variant="outline" className="h-12 rounded-lg border-white/70 bg-white px-6 font-bold text-blue-600 shadow-xl shadow-blue-600/15 hover:bg-blue-50 hover:text-blue-700">
              <Link href="/ResumeGL .docx.pdf" download className="relative z-10 flex items-center">
                Download Resume <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="hero-socials flex gap-4 pt-4">
            <Link href="https://github.com/Gflosada" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-blue-600 shadow-lg shadow-blue-600/15 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/innovativedesigner" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-blue-600 shadow-lg shadow-blue-600/15 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.behance.net/germanlosada" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-blue-600 shadow-lg shadow-blue-600/15 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
              >
                <Eye className="h-5 w-5" />
                <span className="sr-only">Behance</span>
              </Button>
            </Link>
            <Link href="mailto:gflosadaz@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-blue-600 shadow-lg shadow-blue-600/15 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          <div className="hero-selector grid w-full max-w-[430px] grid-cols-3 rounded-lg bg-white/18 p-1 shadow-xl shadow-blue-950/10 backdrop-blur-sm">
            {personas.map((persona) => {
              const isActive = persona.id === activePersona.id

              return (
                <button
                  key={persona.id}
                  type="button"
                  aria-label={`Show ${persona.title} persona`}
                  aria-pressed={isActive}
                  onClick={() => selectPersona(persona.id)}
                  className={`relative h-12 rounded-md px-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? "bg-blue-950/80 text-white shadow-lg shadow-blue-950/25"
                      : "text-white/80 hover:bg-white/12 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.92)]" />
                  )}
                  {persona.title}
                </button>
              )
            })}
          </div>
        </div>
        <div className="hero-visual relative flex min-h-[460px] items-end justify-center overflow-visible px-6 sm:min-h-[540px] md:min-h-[min(84vh,800px)] lg:justify-end lg:px-10">
          <div
            ref={wordRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[18%] z-0 w-[calc(100%-3rem)] max-w-[980px] -translate-x-1/2 select-none overflow-hidden text-[4.2rem] font-black uppercase leading-none tracking-normal text-white/25 md:top-[13%] md:w-[calc(100%-5rem)] md:text-[clamp(6.5rem,10vw,11.5rem)]"
          >
            <span ref={wordTrackRef} className="block w-max whitespace-nowrap">
              {displayPersona.heroWord}
            </span>
          </div>
          <PersonaHero activePersonaId={activePersonaId} onSelectPersona={selectPersona} />
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/70 flex justify-center items-start p-1 shadow-lg shadow-blue-600/10">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
