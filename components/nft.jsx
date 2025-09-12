'use client'

import React from 'react'

export default function NftWebsite() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden rounded-3xl bg-[#0B090D] text-white">
      {/* —— HERO ——————————————————————————————————————————————— */}
      <section className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 pt-10 pb-8">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl space-y-8">
            <h1 className="text-[44px] leading-[1.05] font-black sm:text-6xl">
              Custom Landing Pages for Crypto, NFTs & Web3
            </h1>
            <p className="text-lg text-white/80">
              NFTs, Meme Coins, Web3 – We Build Pages That Get People Talking
            </p>
          </div>

          <div className="relative h-[520px] w-full max-w-[520px] md:h-[744px] md:max-w-[645px]">
            {/* purple glow block (blend) */}
            <div
              className="absolute -left-6 top-6 h-[235px] w-[214px] rotate-[8deg] mix-blend-color"
              style={{ background: '#7F35FF' }}
            />
            <img
              alt="Phone preview"
              src="/web3iphone.png"
              className="absolute left-24 top-8 h-[649px] w-[505px] -rotate-6 rounded-xl border border-[#1F1B26] shadow-[0_0_0_3px_#1F1B26]"
            />
          </div>
        </div>
      </section>

      {/* —— TICKER RIBBONS ———————————————————————————————————— */}
      <div className="relative h-[180px] w-full overflow-visible">
        {/* Purple ribbon (behind) */}
        <Ticker
          text="CRYPTO Project"
          bgClass="bg-[#7F35FF]"
          rotate="-4deg"
          topClass="top-[28px]"
          z="z-0"
        />
        {/* Blue ribbon (front) */}
        <Ticker
          text="CRYPTO PROJECT®"
          bgClass="bg-[#388BFF]"
          rotate="4deg"
          topClass="top-[78px]"
          z="z-10"
        />
      </div>

      {/* —— INTRO / DESCRIPTION ———————————————————————————— */}
      <section className="relative mx-auto mt-4 w-full max-w-[1280px] px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl sm:text-6xl font-black leading-tight">
            Web3 Website Design & Development
          </h2>
          <p className="text-lg text-white/80">
            Nexus is a Web3 launchpad platform, designed and developed to help crypto projects
            showcase their value, onboard users, and grow their community. The website was built to
            combine clean, modern design with secure blockchain interactions, balancing trust,
            innovation, and accessibility.
          </p>
          <p className="text-lg font-bold">
            Role: Product Designer & Front-End Developer · Tools: Figma, Next.js, Tailwind, EmailJS, Framer Motion
          </p>
        </div>
      </section>

      {/* —— FEATURES GRID ———————————————————————————————————— */}
      <section className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 pb-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[#7F35FF] text-lg font-medium">Key Design</p>
            <h3 className="text-2xl sm:text-3xl font-bold">Development Features</h3>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Chip active>All</Chip>
            <Chip>NFT</Chip>
            <Chip>Meme coins</Chip>
            <Chip>Web3</Chip>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Web3 Website" meta="Website" image="/Cardnft1.png" />
          <FeatureCard title="NFT Landing Page" meta="Website - App" image="/Cardnft2.png" />
          <FeatureCard title="NFTs" meta="Design & Development" image="/Cardnft3.png" />
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 pb-24">
        <img
          src="/web3frame.png"
          alt="Results preview"
          className="w-full rounded-2xl border border-[#1F1B26] object-cover"
        />
      </section>

      {/* —— FOOTER (same style) ————————————————————————————— */}
      <footer className="relative border-t border-white/10">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/nft1.png"
            alt="Footer background"
            className="w-full h-[38vh] sm:h-[45vh] md:h-[52vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content pinned to bottom */}
        <div className="relative z-10 min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] flex items-end">
          <div className="container mx-auto px-6 sm:px-10 pb-8 sm:pb-12 md:pb-16">
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

      {/* tiny utilities only for this file */}
      <style>{`
        .ring-grid > div { border: 1px solid #1F1B26; border-radius: 9999px; }
      `}</style>
    </div>
  )
}

/* ————————————————————————————————————————————————————————
 * SMALL ATOMS
 * ———————————————————————————————————————————————————————— */
function Chip({ children, active }) {
  return (
    <div
      className={[
        'rounded-[18px] px-4 py-2 font-bold',
        active ? 'outline outline-2 outline-[#EF4870]' : 'outline outline-1 outline-[#7F35FF]',
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function FeatureCard({ title, meta, image }) {
  return (
    <div className="relative h-[534px] w-full overflow-hidden rounded-xl border border-[#1F1B26] bg-black/40">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-[#0B090D] px-4 py-3">
        <div>
          <p className="text-lg font-bold">{title}</p>
        </div>
        <div className="text-right">
          <p className="text-xs italic text-[#4BCE97]">{meta}</p>
        </div>
      </div>
    </div>
  )
}

/** Full-width, cross-screen ticker ribbon */
function Ticker({ text, bgClass = '', rotate = '0deg', topClass = 'top-0', z = 'z-0' }) {
  return (
    <div
      className={[
        'pointer-events-none absolute left-1/2 -translate-x-1/2',
        'w-[140vw] py-4',
        'flex items-center gap-6',
        'font-black tracking-wide text-white uppercase',
        'whitespace-nowrap',
        bgClass,
        topClass,
        z,
      ].join(' ')}
      style={{ transform: `translateX(-50%) rotate(${rotate})` }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="ticker__item">
          {text}
        </span>
      ))}
    </div>
  )
}
