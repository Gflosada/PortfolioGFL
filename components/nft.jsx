'use client'

import React from 'react'

/**
 * Web3Landing
 * --------------------------------------------------------------
 * A responsive React component that recreates the provided mockup:
 * - Dark canvas with floating coins and rotated phone mockup
 * - Two diagonal ticker ribbons
 * - "Web3 Website Design & Development" section
 * - Feature cards (Website, NFT Landing Page, NFTs)
 * - Results & Outcomes with concentric rings + avatar orbs
 *
 * TailwindCSS is used for layout and styling.
 * Drop this file into your Next.js/React app and render <Web3Landing />.
 * Replace placeholder images with your assets.
 */

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
            <div className="absolute -left-6 top-6 h-[235px] w-[214px] rotate-[8deg] mix-blend-color" style={{background:'#7F35FF'}} />
            <img
              alt="Phone preview"
              src="/web3iphone.png"
              className="absolute left-24 top-8 h-[649px] w-[505px] -rotate-6 rounded-xl border border-[#1F1B26] shadow-[0_0_0_3px_#1F1B26]"
            />
          </div>
        </div>
      </section>

      {/* —— TICKER RIBBONS ———————————————————————————————————— */}
      <div className="relative h-[110px] w-full">
        <Ticker text="CRYPTO Project" className="-rotate-[4deg] bg-[#7F35FF]" />
        <Ticker text="CRYPTO PROJECT®" className="absolute left-[-150px] top-0 rotate-[4deg] bg-[#388BFF]" wide />
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
          <FeatureCard
            title="Web3 Website"
            meta="Website"
            image="/Cardnft1.png"
          />
          <FeatureCard
            title="NFT Landing Page"
            meta="Website - App"
            image="/Cardnft2.png"
          />
          <FeatureCard
            title="NFTs"
            meta="Design & Development"
            image="/Cardnft3.png"
          />
        </div>
      </section>
      <section className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 pb-24">
       <img
        src="/web3frame.png"
        alt="Results preview"
        className="w-full rounded-2xl border border-[#1F1B26] object-cover"
       />
      </section>

      
      {/* tiny utilities only for this file */}
      <style>{`
        .ticker {
          display: inline-flex; gap: 24px; padding: 16px; font-weight: 900; font-family: Inter, system-ui, sans-serif; font-size: 32px; line-height: 32px;
        }
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
        active
          ? 'outline outline-2 outline-[#EF4870]'
          : 'outline outline-1 outline-[#7F35FF]'
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

function Ticker({ text, className = '', wide = false }) {
  return (
    <div className={["ticker w-full", className, wide ? 'min-w-[1718px]' : ''].join(' ')}>
      {Array.from({ length: wide ? 5 : 6 }).map((_, i) => (
        <span key={i}>{text}</span>
      ))}
    </div>
  )
}

function Coin({ src, className = '', size = 200 }) {
  return (
    <img
      src={src}
      alt="coin"
      className={['pointer-events-none select-none absolute', className].join(' ')}
      style={{ width: size, height: size }}
    />
  )
}

function ColorBlob({ className = '', w = 200, h = 200 }) {
  return (
    <div className={["pointer-events-none absolute mix-blend-color", className].join(' ')} style={{ width: w, height: h }} />
  )
}

function Concentric({ className = '' }) {
  // produces the outlined rings grid similar to the mock
  const sizes = [303, 367, 441, 507, 585, 675, 787, 893, 1027, 1153, 1281, 1413]
  return (
    <div className={["ring-grid relative", className].join(' ')}>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[815px] w-[1440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#D9D9D9_66%,_rgba(217,217,217,0)_100%)] opacity-[0.07]" />
      <div className="relative mx-auto aspect-square w-full max-w-[900px]">
        {sizes.map((s, i) => (
          <div key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: s, height: s }} />
        ))}
      </div>
    </div>
  )
}

function Avatar({ src, className = '', size }) {
  return (
    <div className={["absolute", className].join(' ')}>
      <img src={src} alt="avatar" className="rounded-full" />
    </div>
  )
}

function StatPill({ children }) {
  return (
    <div className="w-full max-w-[342px] rounded-full border border-[#2A2533] bg-[#0B090D] px-6 py-2 text-center text-sm">
      {children}
    </div>
  )
}
