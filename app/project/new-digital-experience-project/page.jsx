"use client"

import { ArrowDown, ArrowRight, CheckCircle2, Code2, Layers3, Play, Smartphone, Sparkles, Target, Wand2 } from "lucide-react"
import { motion } from "framer-motion"

import { ProjectSideNavigation } from "@/components/project-side-navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const heroBadges = [
  ["Role", "Product Designer & Front-End Developer"],
  ["Tools", "Figma, React, Tailwind CSS, GSAP"],
  ["Timeline", "Concept case study"],
  ["Focus", "UI/UX Design, Front-End Development, Motion Design"],
]

const processCards = [
  {
    title: "Visual Direction",
    body: "Premium layout, cinematic spacing, clean typography, and strong hierarchy create a polished portfolio-ready presentation.",
    icon: Layers3,
  },
  {
    title: "Motion Experience",
    body: "Smooth scroll animations, sticky-feeling sections, and video-led storytelling make the experience feel more immersive.",
    icon: Wand2,
  },
  {
    title: "Conversion Strategy",
    body: "Clear messaging, focused CTAs, and trust-building visuals guide visitors toward the most important project moments.",
    icon: Target,
  },
]

const featureCards = [
  ["Responsive design", "Layouts scale cleanly from mobile screens to wide desktop presentations."],
  ["Scroll-based animation", "Subtle reveals support the story without distracting from the product work."],
  ["Video storytelling", "The project walkthrough is framed as the main proof point of the final experience."],
  ["Premium landing page layout", "Dark surfaces, luminous accents, and refined spacing create a modern SaaS feel."],
]

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ eyebrow, title, body, centered = false }) {
  return (
    <FadeIn className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{body}</p> : null}
    </FadeIn>
  )
}

function BrowserVideoFrame({ label = "Project preview", className = "" }) {
  return (
    <figure className={`overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-blue-950/35 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="hidden rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs font-medium text-slate-400 sm:block">
          {label}
        </div>
        <div className="h-3 w-16 rounded-full bg-white/10" />
      </div>
      <div className="bg-slate-950 p-2 sm:p-3">
        <video
          src="/videos/ScrollCapture-2026-05-20-at-17.54.50.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>
    </figure>
  )
}

function GlassCard({ children, className = "" }) {
  return <article className={`rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 ${className}`}>{children}</article>
}

export default function NewDigitalExperienceProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050A] text-white">
      <ProjectSideNavigation />

      <section className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(88,80,236,0.24),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(4,5,10,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Badge className="border border-blue-300/25 bg-blue-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 hover:bg-blue-300/10">
              UX/UI Case Study
            </Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              New Digital Experience Project
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A premium interactive web experience designed to showcase smooth motion, modern UI, and conversion-focused storytelling.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroBadges.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="min-h-12 rounded-lg bg-white px-6 text-slate-950 hover:bg-blue-50" asChild>
                <a href="#video-showcase">
                  <Play className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
              <Button variant="outline" className="min-h-12 rounded-lg border-white/15 bg-white/[0.04] px-6 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#overview">
                  Explore Case Study
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-3xl" />
            <BrowserVideoFrame label="Interactive web experience" className="relative" />
          </motion.div>
        </div>
      </section>

      <section id="video-showcase" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Video showcase"
            title="A product story led by motion, polish, and clear interface flow."
            body="The video preview anchors the case study around the final experience, giving visitors a fast sense of pacing, transitions, hierarchy, and visual quality."
            centered
          />
          <FadeIn className="mt-12">
            <BrowserVideoFrame label="Scroll capture demo" />
          </FadeIn>
        </div>
      </section>

      <section id="overview" className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Project overview"
            title="Transforming a standard website into a more engaging digital experience."
            body="This project explores how scroll-based interaction, cinematic motion, and clean interface design can transform a standard website into a more engaging digital experience. The goal was to create a premium visual flow that helps users understand the service quickly while keeping the experience modern, immersive, and conversion-focused."
          />
          <FadeIn delay={0.08} className="grid gap-4 sm:grid-cols-2">
            {[
              ["Experience goal", "Create a stronger first impression with motion, hierarchy, and visual rhythm."],
              ["Design approach", "Use polished interface moments and generous spacing to make the page feel premium."],
              ["Interaction model", "Let video and scroll flow explain the product instead of relying on dense copy."],
              ["Business lens", "Keep calls to action visible and focused throughout the case study narrative."],
            ].map(([title, body]) => (
              <GlassCard key={title}>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
              </GlassCard>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Design process"
            title="Three design decisions shaped the final storytelling system."
            body="The page was structured to make the project feel cinematic while staying practical for a UX/UI portfolio case study."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processCards.map((item, index) => {
              const Icon = item.icon

              return (
                <FadeIn key={item.title} delay={index * 0.07}>
                  <GlassCard className="h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-300/10 text-blue-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{item.body}</p>
                  </GlassCard>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070A13] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Feature highlights"
            title="A compact system for responsive storytelling and premium presentation."
            body="The experience uses familiar product-page patterns, but frames them with portfolio-grade polish and a video-first proof point."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map(([title, body], index) => {
              const icons = [Smartphone, Sparkles, Play, Code2]
              const Icon = icons[index]

              return (
                <FadeIn key={title} delay={index * 0.06}>
                  <GlassCard className="h-full">
                    <Icon className="h-6 w-6 text-blue-200" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
                  </GlassCard>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.16),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <SectionHeader
            eyebrow="Final result"
            title="Final Experience"
            body="The final result is a modern web experience that feels polished, interactive, and visually memorable. It combines product design, front-end development, and motion to create a stronger first impression for potential clients."
          />
          <FadeIn delay={0.08}>
            <BrowserVideoFrame label="Final experience" />
          </FadeIn>
        </div>

        <FadeIn className="relative mx-auto mt-12 max-w-7xl">
          <div className="grid gap-4 rounded-lg border border-blue-300/20 bg-blue-300/10 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
            <CheckCircle2 className="h-7 w-7 text-blue-100" />
            <p className="text-base leading-7 text-blue-50">
              The case study is designed to work as both a portfolio project page and a Behance-ready product design narrative.
            </p>
            <Button className="rounded-lg bg-white text-slate-950 hover:bg-blue-50" asChild>
              <a href="#video-showcase">
                Replay Video
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
