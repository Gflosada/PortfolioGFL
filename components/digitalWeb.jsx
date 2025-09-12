'use client'

import React from 'react'

/**
 * DigitalWeb
 * --------------------------------------------------------------
 * Clean JSX component based on your snippet.
 * - Responsive, centered layout
 * - Title + KPI chips
 * - Two images (hero mock + long section)
 *
 * Usage: <DigitalWeb />
 * Optional props: heroSrc, footerSrc to swap images.
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

          {/* First image (mock) — now a draggable before/after slider */}
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
      <img src={footerSrc} alt="Detail sections" className="h-auto mx-auto " />
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
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
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
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <circle cx="6" cy="12" r="2" fill="currentColor"/>
            <circle cx="18" cy="12" r="2" fill="currentColor"/>
          </svg>
        </div>
      </button>
    </div>
  )
}

