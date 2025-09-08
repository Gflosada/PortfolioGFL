'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Responsive case-study section for your portfolio (Next.js + Tailwind)
 * - Animated carousel (crossfade) under “Impact of the Design System”
 * - 4 images, auto-advance, pause-on-hover, clickable dots (keyboard-accessible)
 * - Footer uses the same background image as the hero
 */
export default function InvestmentDashboard() {
  // ---- Config ----
  const heroBg = 'https://placehold.co/1630x10357';
  const slides = [
    { src: 'https://placehold.co/1600x900', alt: 'Design token audit before system' },
    { src: 'https://placehold.co/1600x900?text=Component+Library', alt: 'Component library overview' },
    { src: 'https://placehold.co/1600x900?text=Theming', alt: 'Theming and dark mode tokens' },
    { src: 'https://placehold.co/1600x900?text=Usage+Guidelines', alt: 'Usage guidelines in docs' },
  ];

  // ---- Carousel state ----
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const timerRef = useRef(null);
  const goTo = (i) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-advance with pause on hover and when tab is hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, paused]);

  return (
    <div className="w-full text-white">
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
          <p className="mb-3 text-sm uppercase tracking-widest text-white/70">
            Case Study
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Investment Dashboard – Design System Rollout
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80">
            A scalable, token-first system that unified 6 product surfaces, reduced
            UI entropy, and accelerated delivery across teams.
          </p>
        </div>
      </section>

      {/* Impact + Carousel */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Impact of the Design System</h2>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• 42% faster average delivery time for feature squads</li>
              <li>• 70% reduction in one-off styles and ad‑hoc components</li>
              <li>• Accessibility: AA contrast coverage for 96% of UI states</li>
            </ul>
            <div className="mt-6">
              <a
                href="#components"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Explore the component library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].src}
                  alt={slides[index].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              {/* Optional gradient edge for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Controls */}
              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => goTo(i)}
                    className={
                      'pointer-events-auto h-2 w-2 rounded-full ring-offset-2 transition ' +
                      (i === index
                        ? 'bg-white/90 shadow ring-1 ring-white/60'
                        : 'bg-white/40 hover:bg-white/60')
                    }
                  />
                ))}
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="button"
                  onClick={prev}
                  className="ml-2 rounded-full border border-white/15 bg-black/30 p-2 text-white/90 backdrop-blur transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="Previous slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  onClick={next}
                  className="mr-2 rounded-full border border-white/15 bg-black/30 p-2 text-white/90 backdrop-blur transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="Next slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-white/70">
              Hover to pause • Use dots or arrows • Crossfade animation
            </p>
          </div>
        </div>
      </section>

      {/* Content placeholder */}
      <section id="components" className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Foundation" desc="Tokens, spacing scale, and typography ramp" />
          <Card title="Components" desc="40+ audited components with variants" />
          <Card title="Accessibility" desc="Contrast, motion preferences, and focus states" />
          <Card title="Dev Experience" desc="Storybook, docs, and code mods" />
        </div>
      </section>

      {/* Footer shares the hero background */}
      <footer
        className="relative isolate mt-8 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-xl font-medium sm:text-2xl">Want the full write‑up?</h3>
          <p className="mt-2 text-white/80">I can share the internal migration plan, KPIs, and rollout checklist.</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  );
}
