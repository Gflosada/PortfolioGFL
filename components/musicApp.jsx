'use client'

import React, { useEffect, useMemo, useState } from 'react'

/* =====================================================================
   CrossfadeGallery (clean, with clearer indicators)
===================================================================== */
function CrossfadeGallery({
  images,
  alt = 'Gallery image',
  intervalMs = 3500,
  transitionMs = 700,
  aspect = '1440/1025', // keep one consistent frame
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReduced = usePrefersReducedMotion()
  const safe = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images])

  useEffect(() => {
    if (prefersReduced || paused || safe.length <= 1) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % safe.length),
      Math.max(transitionMs + 50, intervalMs),
    )
    return () => clearInterval(id)
  }, [prefersReduced, paused, safe.length, intervalMs, transitionMs])

  if (!safe.length) return null

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Consistent frame for all slides */}
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        {safe.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={alt}
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain transition-opacity"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${transitionMs}ms`,
            }}
          />
        ))}
      </div>

      {/* Indicators */}
      {safe.length > 1 && (
        <>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {safe.map((_, i) => (
              <span
                key={i}
                className={[
                  'relative inline-block h-3 w-3 rounded-full transition',
                  i === index
                    ? 'bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.25)] scale-110'
                    : 'bg-white/40',
                ].join(' ')}
              />
            ))}
          </div>
          {/* Progress bar */}
          <ProgressBar key={index} durationMs={intervalMs} />
        </>
      )}
    </div>
  )
}



function ProgressBar({ durationMs = 3500 }) {
  return (
    <>
      <style>{`
        @keyframes cm-progress-fill { from { width: 0% } to { width: 100% } }
      `}</style>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-white/15">
        <div
          className="h-full bg-white/80"
          style={{
            animationName: 'cm-progress-fill',
            animationDuration: `${durationMs}ms`,
            animationTimingFunction: 'linear',
            animationFillMode: 'forwards',
          }}
        />
      </div>
    </>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(!!mql.matches)
    onChange()
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

/* =====================================================================
   Small UI atoms for the palette
===================================================================== */
function Swatch({ n, hex, darkText, codeText }) {
  const textClass = darkText ? 'text-black' : 'text-white'
  return (
    <div
      className="flex h-28 w-full flex-col justify-between rounded-xl border border-black/40 p-2"
      style={{ backgroundColor: hex }}
    >
      <div className={`text-sm font-medium ${textClass}`}>{n}</div>
      <div className={`text-xs ${textClass}`}>{codeText ?? hex}</div>
    </div>
  )
}

function PaletteSection({ title, desc, wrapperBg = 'white', chipsA = [], chipsB = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
          <p className="max-w-prose text-gray-200">{desc}</p>
        </div>
        <div className="rounded-xl border border-white/15 p-6" style={{ background: wrapperBg }}>
          <div className="grid gap-5 sm:grid-cols-2">
            {chipsA.map((c) => (
              <Swatch key={`${title}-A-${c.n}`} {...c} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {chipsB.map((c) => (
              <Swatch key={`${title}-B-${c.n}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================================
   Main component
===================================================================== */
export default function ArtistPlatformCaseStudy({
  heroSrc = '/music1.png',
  midCardSrc = '/music2.png',
  rightShot = '/music3.png',
  longHero = '/music21.png',
  wireframeWide = '/mu1.png',
  longEnd = '/musicfin.png',

  wireframeGallery = ['/mu1.png', '/mu2.png', '/mu3.png', '/mu4.png', '/mu5.png', '/mu6.png', '/mu7.png'],
}) {
  const featureChips = [
    'Unified Dashboard',
    'Style Adaptation',
    'Smart Discovery Hub',
    'Integrated Messaging & Bookings',
    'Engagement Insights',
  ]

  const outcomes = [
    { title: 'Consistency', body: 'Reduced design + dev time by ~40%.' },
    { title: 'Scalability', body: 'Easier onboarding for devs, faster feature rollout.' },
    { title: 'Identity', body: 'Artists adapt visuals to match their brand without losing UX.' },
  ]

  const primaryA = [
    { n: '55', hex: '#9E62EC', darkText: true },
    { n: '60', hex: '#000000', darkText: false, codeText: '#000000' },
    { n: '70', hex: '#76D679', darkText: true },
    { n: '80', hex: '#FD756B', darkText: true, codeText: '#FFEB99' },
  ]
  const primaryB = [
    { n: '90', hex: '#FFF5CC', darkText: true },
    { n: '95', hex: '#FFFAE5', darkText: true },
    { n: '97', hex: '#FFFCF0', darkText: true },
    { n: '99', hex: '#FFFEFA', darkText: true, codeText: '#FBFBFE' },
  ]

  const darkA = [
    { n: '08', hex: '#141414' },
    { n: '10', hex: '#1A1A1A' },
    { n: '15', hex: '#262626' },
    { n: '20', hex: '#333333' },
  ]
  const darkB = [
    { n: '25', hex: '#404040' },
    { n: '30', hex: '#4D4D4D' },
    { n: '35', hex: '#595959' },
    { n: '40', hex: '#666666' },
  ]

  const greyA = [
    { n: '50', hex: '#7E7E81' },
    { n: '60', hex: '#98989A' },
    { n: '70', hex: '#B3B3B3' },
    { n: '80', hex: '#CCCCCC' },
  ]
  const greyB = [
    { n: '90', hex: '#E4E4E7', darkText: true },
    { n: '95', hex: '#F1F1F3', darkText: true },
    { n: '97', hex: '#F7F7F8', darkText: true },
    { n: '99', hex: '#FCFCFD', darkText: true },
  ]

  const wireframes = useMemo(() => {
    const arr = Array.isArray(wireframeGallery) ? [...wireframeGallery] : []
    const i = arr.indexOf(wireframeWide)
    if (i === -1) arr.unshift(wireframeWide)
    else if (i > 0) {
      arr.splice(i, 1)
      arr.unshift(wireframeWide)
    }
    return arr.slice(0, 7)
  }, [wireframeGallery, wireframeWide])

  return (
    <div className="w-full bg-[#0A0D17] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroSrc} alt="Hero background" className="mx-auto h-auto w-full object-contain" />
        <div className="relative -mt-px bg-[#35236D]">
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-2 md:pt-20 lg:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                Empowering Artists to Discover, Perform, and Connect Through Design.
              </h1>
              <p className="mt-6 text-base/7 text-gray-100 sm:text-lg md:text-xl">
                A product dashboard designed as a creative hub, where artists manage their journey, showcase performances,
                and expand their network in styles that reflect their individuality.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-2 py-1 text-sm font-semibold text-[#7F56D9]">
                <span>Design Changes</span>
                <span className="rounded-2xl bg-[#6941C6] px-3 py-1 text-white ring-1 ring-[#E9D7FE]">What I Built</span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {featureChips.map((chip) => (
                  <button
                    key={chip}
                    className="rounded-lg border border-white/20 bg-white px-5 py-3 text-base font-semibold text-[#7F56D9] shadow-sm hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    type="button"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 w-full">
              <img src={midCardSrc} alt="Dashboard preview" className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">The Vision</h2>
            <p className="max-w-prose text-gray-300">We set out to create a dashboard for artists that was more than numbers—it became a space to:</p>
            <div className="grid gap-4">
              <div className="rounded-xl border border-white/20 bg-purple-600/90 p-4">
                <p className="font-semibold text-black/90 md:text-white">Showcase performances and tracks.</p>
                <p className="mt-2 font-semibold text-white">Discover collaboration opportunities.</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-black p-4">
                <p className="font-semibold">Connect directly with venues and labels.</p>
                <p className="mt-2 font-semibold">Adapt the platform to their personal style.</p>
              </div>
            </div>
          </div>

          <img src={rightShot} alt="Right side UI shot" className="mx-auto w-full max-w-2xl rounded-xl object-cover" />
        </div>
      </section>

      {/* RESEARCH → WIREFRAMES → PROTOTYPING CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-6 md:pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-[#3E1C96] p-6">
            <h3 className="text-2xl font-semibold">Research</h3>
            <p className="mt-2 text-gray-200">Interviews with artists and music managers revealed the need for a platform mixing career insights with creative identity.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[#252B37] p-6">
            <h3 className="text-2xl font-semibold text-[#E8E3F6]">Wireframes</h3>
            <p className="mt-2 text-gray-300">Early sketches balanced data (views, streams, bookings) with storytelling (videos, media uploads).</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[#252B37] p-6">
            <h3 className="text-2xl font-semibold">Prototyping</h3>
            <p className="mt-2 text-gray-300">Ensuring accuracy and trust through clear data visualization.</p>
          </div>
        </div>
      </section>

      {/* Palettes */}
      <PaletteSection title="Primary Colors" desc="Primary Colors - The foundational color representing brand identity" wrapperBg="white" chipsA={primaryA} chipsB={primaryB} />
      <PaletteSection title="Dark Shades" desc="Dark Colors - Setting the thematic tone and serving as the predominant background hues" wrapperBg="#7F56D9" chipsA={darkA} chipsB={darkB} />
      <PaletteSection title="Grey Shades" desc="Grey Colors - Employed for creating inviting and readable text elements" wrapperBg="#7F56D9" chipsA={greyA} chipsB={greyB} />

      {/* LARGE SHOWCASE IMAGE */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <img src={longHero} alt="Showcase section" className="w-full rounded-2xl object-cover" />
      </section>

      {/* FOUNDATIONS & OUTCOMES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold sm:text-3xl">Foundations</h2>
            <p className="mt-3 max-w-prose text-gray-300">
              A flexible design system with adaptive colors, clear typography, and reusable components ensured consistency, scalability, and gave artists the freedom to reflect their unique style.
            </p>
            <div className="mt-6 grid gap-3">
              {['Feedback & States', 'Responsiveness', 'Accessibility', 'Core UI'].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-gray-100 px-3 py-2 text-black">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-center text-3xl font-semibold">Outcomes of the Design System</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {outcomes.slice(0, 2).map((o) => (
                <div key={o.title} className="rounded-2xl border border-white/30 bg-[#2E073F] p-6 text-center">
                  <div className="text-2xl font-semibold">{o.title}</div>
                  <p className="mt-2 text-gray-300">{o.body}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-4 max-w-md">
              <div className="rounded-2xl border border-white/30 bg-[#2E073F] p-6 text-center">
                <div className="text-2xl font-semibold">{outcomes[2].title}</div>
                <p className="mt-2 text-gray-300">{outcomes[2].body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIREFRAME → HI-FI (animated) */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-20">
        <CrossfadeGallery images={wireframes} alt="Wireframe to Hi-Fi progression" intervalMs={3400} transitionMs={700} aspect="1440/1025" />
      </section>

      {/* LONG END IMAGE */}
       {/* FOOTER with same image as HERO */}
<footer className="relative border-t border-white/10">
  {/* Background image + overlay */}
  <div className="absolute inset-0">
    <img
      src="/musicfin.png"
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
