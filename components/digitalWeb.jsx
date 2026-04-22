'use client'

import React from 'react'

/**
 * DigitalWeb
 * --------------------------------------------------------------
 * Clean JSX component based on your snippet.
 * - Responsive, centered layout
 * - Title + KPI chips
 * - Before/after slider
 * - Footer with background image + links
 */

export default function DigitalWeb({
  heroSrc = '/wb1.png',
  footerSrc = '/macagen.png',
  compareSrc = '/w1.png',
}) {
  const stats = [
    '+48% lead generation',
    'Redesign reaching 65% of visitors',
    'Consistent design system',
    'Trust-driven UX',
  ]

  const overview = [
    {
      title: 'Client challenge',
      body: 'The agency needed a website that explained services quickly, built credibility, and guided visitors toward a clear contact path.',
    },
    {
      title: 'My role',
      body: 'I shaped the UX strategy, page structure, visual direction, responsive UI, and front-end implementation for the redesigned experience.',
    },
    {
      title: 'Audience',
      body: 'Small business owners, founders, and marketing teams comparing agency partners before booking a consultation.',
    },
    {
      title: 'Goal',
      body: 'Turn a visually interesting site into a conversion-focused experience with stronger hierarchy, proof, and service discovery.',
    },
  ]

  const strategySections = [
    {
      eyebrow: '01',
      title: 'Sharper Service Positioning',
      body: 'Services were grouped around buyer needs so visitors could understand what the agency offers without reading long paragraphs.',
    },
    {
      eyebrow: '02',
      title: 'Trust Before Contact',
      body: 'Proof points, project visuals, and outcome-driven messaging were placed earlier to reduce hesitation before the CTA.',
    },
    {
      eyebrow: '03',
      title: 'Responsive Journey',
      body: 'The layout was rebuilt with stable spacing, readable typography, and clear sections across desktop, tablet, and mobile.',
    },
  ]

  const conversionDetails = [
    {
      metric: '65%',
      label: 'Visitors reached redesign content',
      body: 'Important proof and service sections were moved higher to support faster evaluation.',
    },
    {
      metric: '+48%',
      label: 'Lead generation lift',
      body: 'Clearer CTAs and better content order created a stronger path from browsing to inquiry.',
    },
    {
      metric: '4',
      label: 'Core page paths',
      body: 'Hero, services, proof, and contact modules work together as one conversion flow.',
    },
  ]

  const designSystem = [
    'High-contrast black and white foundation for a premium agency feel.',
    'Large Barlow headings paired with compact body copy for fast scanning.',
    'Reusable cards, buttons, image modules, and content bands for consistent pages.',
    'CTA hierarchy designed around one primary action and supportive secondary links.',
  ]

  const outcomes = [
    {
      title: 'Clearer first impression',
      body: 'The new opening screen communicates what the agency does, who it helps, and why visitors should keep scrolling.',
    },
    {
      title: 'Stronger conversion path',
      body: 'Each section now has a job: clarify value, build trust, answer objections, or move users toward contact.',
    },
    {
      title: 'More scalable UI',
      body: 'The content structure and reusable patterns make it easier to expand the site with new services and campaign pages.',
    },
  ]

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Content container */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-24 pb-16 opacity-95">
        <div className="flex flex-col items-center gap-10">
          {/* Title */}
          <h1 className="text-center font-semibold leading-tight tracking-tight [font-family:Barlow] text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
            Digital Marketing Agency <br className="hidden sm:block" /> Website Redesign & Development
          </h1>

          {/* KPI chips */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-xl px-10 py-6 backdrop-blur-md">
            {stats.map((s) => (
              <div key={s} className="flex items-center justify-center gap-2 rounded-lg bg-[#262626] px-4 py-3">
                <span className="[font-family:Barlow] text-[22px]">{s}</span>
              </div>
            ))}
          </div>

          {/* First image (mock) — draggable before/after slider */}
          <ImageCompare
            frontSrc={heroSrc}
            backSrc={compareSrc}
            alt="Website redesign comparison"
            aspect="1199/1441"
          />

          <div>
            <h1 className="text-center font-semibold leading-tight tracking-tight [font-family:Barlow] text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
              Designing for Clarity, <br className="hidden sm:block" /> Built for Conversion
            </h1>
          </div>

          <section className="w-full pt-4">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 [font-family:Barlow]">
                Project overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight [font-family:Barlow] sm:text-4xl">
                A digital agency experience rebuilt around faster understanding and stronger inquiry intent.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
                The redesign turns the website into a clearer sales tool. It uses direct messaging, service-focused
                content, visible proof, and responsive UI patterns to help visitors decide whether the agency is the
                right partner.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {overview.map((item) => (
                <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
                  <h3 className="[font-family:Barlow] text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid w-full gap-8 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 [font-family:Barlow]">
                UX strategy
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight [font-family:Barlow] sm:text-4xl">
                The page structure was designed to answer buyer questions in order.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/65">
                Instead of relying only on visual polish, each section supports a decision moment: what the agency does,
                why it is credible, what outcomes it creates, and how to start a conversation.
              </p>
            </div>

            <div className="grid gap-4">
              {strategySections.map((item) => (
                <article key={item.title} className="grid gap-4 rounded-lg border border-white/10 bg-[#111111] p-5 sm:grid-cols-[auto_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-black">
                    {item.eyebrow}
                  </span>
                  <div>
                    <h3 className="[font-family:Barlow] text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="w-full pt-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 [font-family:Barlow]">
                Conversion architecture
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight [font-family:Barlow] sm:text-4xl">
                Clear hierarchy, earlier proof, and stronger calls to action.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {conversionDetails.map((item) => (
                <article key={item.label} className="rounded-lg border border-white/10 bg-white text-black p-6">
                  <p className="[font-family:Barlow] text-4xl font-semibold">{item.metric}</p>
                  <h3 className="mt-4 [font-family:Barlow] text-xl font-semibold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/65">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid w-full gap-8 pt-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 [font-family:Barlow]">
                Design system
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight [font-family:Barlow]">
                A compact visual system for premium, readable marketing pages.
              </h2>
              <div className="mt-6 grid gap-3">
                {designSystem.map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-black p-4">
                    <p className="text-sm leading-6 text-white/65">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#111111] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 [font-family:Barlow]">
                Outcome
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight [font-family:Barlow]">
                The final page feels sharper and works harder.
              </h2>
              <div className="mt-6 grid gap-4">
                {outcomes.map((item) => (
                  <article key={item.title}>
                    <h3 className="[font-family:Barlow] text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Second full-width image */}
      <img src={footerSrc} alt="Detail sections" className="h-auto mx-auto" />

      {/* FOOTER with same image as HERO */}
      <footer className="relative border-t border-white/10">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/wb4.png"
            alt="Footer background"
            className="w-full h-[38vh] sm:h-[45vh] md:h-[52vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content pinned to bottom */}
        <div className="relative z-10 min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Ready to build data-driven experiences?
              </h3>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Let’s craft dashboards that turn complexity into clarity.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:germanlosada.dev@gmail.com"
                  className="rounded-xl bg-white text-black px-5 py-2.5 font-semibold hover:bg-white/90 transition"
                >
                  Contact me
                </a>
                <a
                  href="https://www.behance.net/germanlosada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/30 px-5 py-2.5 font-semibold hover:bg-white/10 transition"
                >
                  Behance
                </a>
                <a
                  href="https://github.com/Gflosada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/30 px-5 py-2.5 font-semibold hover:bg-white/10 transition"
                >
                  GitHub
                </a>
              </div>

              <p className="text-xs text-white/70 mt-6">
                © {new Date().getFullYear()} German Losada — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ————————————————————————————————————————————————————————
// Before/After image compare component
// ————————————————————————————————————————————————————————
function ImageCompare({ frontSrc, backSrc, alt = '', aspect = '16/9' }) {
  const ref = React.useRef(null)
  const [pos, setPos] = React.useState(0.5) // 0..1

  const updateFromEvent = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const clientX = (e.touches && e.touches[0]?.clientX) ?? e.clientX
    const next = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    setPos(next)
  }

  const startDrag = (e) => {
    e.preventDefault()
    updateFromEvent(e)
    const move = (ev) => updateFromEvent(ev)
    const up = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchmove', move, { passive: false })
    window.addEventListener('touchend', up)
  }

  const percent = pos * 100

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border-4 border-white"
      style={{ aspectRatio: aspect }}
      onTouchStart={startDrag}
    >
      {/* Back image */}
      <img src={backSrc} alt={alt || 'before'} className="absolute inset-0 h-full w-full object-cover" />

      {/* Front image (revealed) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        <img src={frontSrc} alt={alt || 'after'} className="h-full w-full object-cover" />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${percent}%`, transform: 'translateX(-0.5px)' }}
      />

      {/* Handle */}
      <button
        type="button"
        aria-label="Drag to compare"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="absolute top-1/2 -translate-y-1/2 translate-x-[-50%] rounded-full bg-white/90 p-2 shadow-md"
        style={{ left: `${percent}%` }}
      >
        <div className="h-8 w-8 rounded-full bg-white text-black shadow-inner grid place-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="6" cy="12" r="2" fill="currentColor" />
            <circle cx="18" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      </button>
    </div>
  )
}
