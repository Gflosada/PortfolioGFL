"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Responsive case-study section for your portfolio (Next.js + Tailwind)
 * - Adds animated carousel (crossfade) under “Impact of the Design System”
 * - 4 images, auto-advance, pause-on-hover, clickable dots
 * - Footer uses the same background image as the hero
 */
export default function InvestmentDashboardCaseStudy() {
  // ---- Carousel setup ----
  const slides = [
    { src: "/inve1.png", alt: "Dashboard screens – variant 1" },
    { src: "/inve2.png", alt: "Dashboard screens – variant 2" },
    { src: "/inve3.png", alt: "Dashboard screens – variant 3" },
    { src: "/inve4.png", alt: "Dashboard screens – variant 4" },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const goTo = (i) => setIndex(i % slides.length);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/investDash.png"
            alt="Fintech dashboard hero"
            className="h-[40vh] sm:h-[50vh] md:h-[60vh] w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Investment Dashboard Design
              </h1>
              <p className="text-gray-300 font-medium text-base sm:text-lg">
                I designed a comprehensive fintech dashboard for a financial services company, helping teams visualize
                performance metrics, monitor user activity, and make faster, data-driven decisions. The dashboard
                integrates real-time analytics with a clean, intuitive interface tailored for finance professionals.
              </p>
              <p className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-2.5 py-1 text-sm font-semibold text-purple-700">
                <span className="rounded-2xl bg-purple-700/90 px-2.5 py-0.5 text-white">Opportunities</span>
                <span className="text-purple-700">Challenges become</span>
              </p>
            </div>

            {/* Top feature chips */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Real-Time Insights", body: "Consolidating complex financial data into digestible visuals" },
                { title: "User Adoption", body: "Designed for analysts, managers, and executives" },
                { title: "Scalability", body: "Ensuring accuracy and trust through data visualization" },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 text-center">
                  <h3 className="text-2xl font-semibold text-purple-400">{card.title}</h3>
                  <p className="mt-2 text-gray-300">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT CALLOUT */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-b from-purple-900/20 to-gray-900/40 p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Impact of the Design System</h2>
          <p className="mt-3 text-gray-200">
            The design system reduced design and development time by <span className="font-semibold">40%</span>, while
            improving product consistency across platforms. It enabled rapid scaling, faster onboarding, and a trusted
            user experience across the ecosystem.
          </p>
        </div>
      </section>

      {/* REDESIGN + LARGE VISUAL (CAROUSEL) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-2.5 py-1 text-sm font-semibold text-purple-700">
            <span className="rounded-2xl bg-purple-700/90 px-2.5 py-0.5 text-white">Redesign</span>
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">Impact of the Design System</h2>
          <p className="mt-3 text-gray-300">
            Through iterative prototyping and user testing, we validated decisions early to ensure components were both
            functional and intuitive. This process confirmed usability and revealed opportunities to streamline
            workflows.
          </p>
        </div>

        <div className="mt-8">
          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-purple-500/70 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Maintain aspect for consistent height */}
            <div className="relative w-full aspect-[16/10] bg-black/30">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[index].src}
                  src={slides[index].src}
                  alt={slides[index].alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Revenue Tracking", body: "Real-time revenue growth graphs and profitability trends" },
              { title: "Productivity Metrics", body: "Team performance dashboards with task efficiency ratios" },
              { title: "Risk & Compliance", body: "Built-in alerts for regulatory compliance risks" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-purple-600/20 p-5 text-center">
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-200">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-purple-600/20 p-6 text-center">
            <h3 className="text-2xl font-semibold">User Experience Enhancements</h3>
            <p className="mt-2 text-gray-200">
              Dark / light mode for long-hour use and customizable widgets for personalized reporting.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto max-w-5xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["AI-Generative Insights", "User-Centered Experience", "Scalable Design System"].map((h) => (
            <div key={h} className="rounded-2xl border border-white/10 p-5 text-center">
              <h4 className="text-xl font-semibold">{h}</h4>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-3xl mt-8 text-center text-gray-200">
          Delivering smart analytics, intuitive experiences, and consistent growth across fintech products.
        </p>
      </section>

      {/* COLOR TOKENS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Design Tokens – Color</h2>
          <p className="mt-2 text-gray-300">
            Primary brand and neutrals used throughout the dashboard. All swatches meet or note contrast guidance in
            context.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: "Brand 500", hex: "#2E073F" },
              { name: "Brand 400", hex: "#752E8B" },
              { name: "Gray 800", hex: "#252B37" },
              { name: "Gray 700", hex: "#414651" },
              { name: "Gray 300", hex: "#D5D7DA" },
            ].map((c) => (
              <figure key={c.name} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="h-20 w-full" style={{ backgroundColor: c.hex }} />
                <figcaption className="p-3 text-sm text-gray-200">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-gray-400">{c.hex}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Typography – Inter</h2>
            <p className="mt-2 text-gray-300">
              Scales for headings and text optimized for dashboard density and readability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Display sm", example: "Display sm", cls: "text-3xl leading-[2.375rem]" },
              { label: "Text xl", example: "Text xl", cls: "text-xl leading-[1.875rem]" },
              { label: "Text lg", example: "Text lg", cls: "text-lg leading-7" },
              { label: "Text md", example: "Text md", cls: "text-base leading-6" },
            ].map((t) => (
              <div key={t.label} className="rounded-xl border border-white/10 p-4">
                <div className={`font-semibold ${t.cls}`}>{t.example}</div>
                <div className="mt-2 text-sm text-gray-400">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <img
  src="/ipadMini.png"
  alt="iPad Mini"
  className="w-full h-auto"
/>

      {/* FOOTER with same image as HERO */}
<footer className="relative border-t border-white/10">
  {/* Background image + overlay */}
  <div className="absolute inset-0">
    <img
      src="/investDash2.png"
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

    </main>
  );
}
