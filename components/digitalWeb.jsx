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
