'use client'

import React from 'react'
import PropTypes from 'prop-types'

/*
  Chatminds — Design System & Case Study Preview
  - TailwindCSS-only styling
  - Reusable <Section />, <Card />, <Swatch />, etc.
  - Now includes <ProjectOverview /> (polished section)
*/

/* -------------------------------------------------
   Letter-by-letter hover -> purple
-------------------------------------------------- */
function HoverLetters({ text, className = '', style }) {
  return (
    <div className={`select-none tracking-tight ${className}`} style={style} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={`${ch}-${i}`} className="inline-block transition-colors duration-200 hover:text-[#7F35FF]">
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </div>
  )
}
HoverLetters.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

// —————————————————————————————————————————————
// Small helpers
// —————————————————————————————————————————————
function Section({ id, title, kicker, className = '', children }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {(title || kicker) && (
        <header className="mb-6 sm:mb-8 text-center">
          {title && (
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] lg:leading-[1.4] font-semibold tracking-tight">{title}</h2>
          )}
          {kicker && <p className="mt-2 mx-auto max-w-3xl text-base sm:text-lg leading-7 text-neutral-300">{kicker}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  kicker: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

function Card({ className = '', children }) {
  return <div className={`rounded-xl border border-neutral-800 bg-[#141414] ${className}`}>{children}</div>
}
Card.propTypes = { className: PropTypes.string, children: PropTypes.node }

function CornerFrame({ color = '#E5E7EB' }) {
  const styleTL = { borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` }
  const styleTR = { borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}` }
  const styleBL = { borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` }
  const styleBR = { borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}` }
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-0 top-0 h-8 w-8" style={styleTL} />
      <div className="absolute right-0 top-0 h-8 w-8" style={styleTR} />
      <div className="absolute left-0 bottom-0 h-8 w-8" style={styleBL} />
      <div className="absolute right-0 bottom-0 h-8 w-8" style={styleBR} />
    </div>
  )
}
CornerFrame.propTypes = { color: PropTypes.string }

function Swatch({ hex, label, useDarkText = false }) {
  const txt = useDarkText ? 'text-black' : 'text-white'
  return (
    <div className="h-[108px] rounded-xl border-2 border-neutral-800 p-2.5 flex flex-col justify-between" style={{ backgroundColor: hex }}>
      <div className={`text-[15px] leading-6 ${txt}`}>{label}</div>
      <div className={`text-sm leading-5 text-right ${txt}`}>{hex.toUpperCase()}</div>
    </div>
  )
}
Swatch.propTypes = {
  hex: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  useDarkText: PropTypes.bool,
}

function Pill({ children }) {
  return (
    <div className="rounded-full border border-neutral-800 bg-[#1A1A1A] px-6 py-3">
      <span className="text-neutral-300 text-[20px] leading-7">{children}</span>
    </div>
  )
}
Pill.propTypes = { children: PropTypes.node }

/* -------------------------------------------------
   UPDATED: Keycap -> letters turn purple on hover
-------------------------------------------------- */
function Keycap({ children }) {
  return (
    <div className="group rounded-lg border border-neutral-800 bg-[#1A1A1A] px-5 py-3">
      <span className="text-neutral-300 text-[20px] leading-7 transition-colors duration-200 group-hover:text-[#7F35FF]">{children}</span>
    </div>
  )
}
Keycap.propTypes = { children: PropTypes.node }

// —————————————————————————————————————————————
// Data
// —————————————————————————————————————————————
const absoluteColors = [
  { label: 'White', hex: '#FFF', dark: true },
  { label: 'Black', hex: '#000', dark: false },
]

const primaryRow1 = [
  { label: 55, hex: '#9E62EC', dark: false },
  { label: 60, hex: '#FFD633', dark: true },
  { label: 70, hex: '#76D679', dark: true },
  { label: 80, hex: '#FD756B', dark: false },
]

const primaryRow2 = [
  { label: 90, hex: '#FFF5CC', dark: true },
  { label: 95, hex: '#FFFAE5', dark: true },
  { label: 97, hex: '#FFFCF0', dark: true },
  { label: 99, hex: '#FFFEFA', dark: true },
]

const darkShades1 = [
  { label: 8, hex: '#141414', dark: false },
  { label: 10, hex: '#1A1A1A', dark: false },
  { label: 15, hex: '#262626', dark: false },
  { label: 20, hex: '#333333', dark: false },
]

const darkShades2 = [
  { label: 25, hex: '#404040', dark: false },
  { label: 30, hex: '#4D4D4D', dark: false },
  { label: 35, hex: '#595959', dark: false },
  { label: 40, hex: '#666666', dark: false },
]

const grayShades1 = [
  { label: 50, hex: '#7E7E81', dark: false },
  { label: 60, hex: '#98989A', dark: false },
  { label: 70, hex: '#B3B3B3', dark: false },
  { label: 80, hex: '#CCCCCC', dark: false },
]

const grayShades2 = [
  { label: 90, hex: '#E4E4E7', dark: true },
  { label: 95, hex: '#F1F1F3', dark: true },
  { label: 97, hex: '#F7F7F8', dark: true },
  { label: 99, hex: '#FCFCFD', dark: true },
]

const alphabetCaps = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
const alphabetSmall = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
const numerics = Array.from({ length: 10 }, (_, i) => `${i}`)
const symbols = ['!', '@', '#', '$', '%', '^', '&', '(', ')']

// ✨ Content
const highlights = [
  '+60% faster design & development with reusable system.',
  'Improved user trust with research-driven visuals and copy.',
  'AI integration showcased clearly, turning complex features into simple stories.',
]

const insights = [
  'Businesses wanted clarity in understanding AI chatbot benefits.',
  'Users valued simple onboarding flows over technical jargon.',
  'Trust and transparency were critical for adoption in automation.',
]

/* ================================================================
   ProjectOverview (polished) — attached here
================================================================ */
function ProjectOverview({
  title = 'Chatminds Website Redesign — AI Chatbot & Automation',
  kicker =
    'A complete redesign of the Chatminds website, built on user research and a scalable design system. The goal was to showcase Chatminds as an AI-powered partner, delivering intuitive chatbot experiences and seamless automation for businesses.',
  highlights: hl = highlights,
  insights: ins = insights,
}) {
  return (
    <section className="relative py-24 sm:py-28 lg:py-36">
      {/* Title + Kicker */}
      <div className="mx-auto max-w-[1052px] px-6 text-center">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.2] font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 sm:mt-5 text-neutral-300 text-base sm:text-lg leading-7">{kicker}</p>
      </div>

      {/* Highlights card */}
      <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 max-w-[1197px] px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-700 via-rose-700 to-pink-600 px-6 sm:px-10 py-10 sm:py-14 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <CornerFrame color="#FFFFFF" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {hl.map((t) => (
              <li key={t}>
                <div className="h-12 w-full overflow-hidden rounded-xl bg-[#E9EAEB] ring-2 ring-neutral-800/80 flex items-center justify-center">
                  <span className="text-black text-[15px] sm:text-[16px] leading-snug font-semibold text-center px-3">{t}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Insight cards */}
      <div className="mx-auto mt-12 lg:mt-16 flex flex-wrap items-stretch justify-center gap-5 sm:gap-6 px-6 max-w-[1200px]">
        {ins.map((txt) => (
          <article
            key={txt}
            className="group md:w-[312px] flex-1 min-w-[260px] rounded-2xl bg-white/95 p-3 shadow-[0_6px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 backdrop-blur [@media(min-width:920px)]:h-[120px] focus-within:ring-2 focus-within:ring-fuchsia-500"
            tabIndex={0}
            aria-label={txt}
          >
            <div className="mx-auto flex h-full w-full items-center justify-center rounded-xl bg-white text-center text-black text-[15px] sm:text-[16px] leading-6 font-semibold px-4 py-4">
              {txt}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
ProjectOverview.propTypes = {
  title: PropTypes.string,
  kicker: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  insights: PropTypes.arrayOf(PropTypes.string),
}

// —————————————————————————————————————————————
// Main Component (integrated)
// —————————————————————————————————————————————
export default function Chatminds() {
  return (
    <div className="w-full bg-[#0E0E0E] text-white">
      {/* Hero Image */}
      <div className="relative">
        <img src="/chat2.png" alt="Chatminds hero" className="w-full object-cover" />
      </div>

      {/* Project Overview — replaced old block with attached component */}
      <ProjectOverview />

      {/* Mid-page illustrative image */}
      <div className="mt-10">
        <img src="/chat3.png" alt="mid mock" className="w-full object-cover" />
      </div>

      {/* Design System Banner */}
      <Section className="py-10">
        <div className="relative mt-10 rounded-xl border border-neutral-800 bg-gradient-to-tr from-[rgba(83,56,158,0.06)] to-[rgba(127,86,217,0.06)] p-6 sm:p-10">
          <CornerFrame color="#FFFFFF" />
          <div className="flex w-full items-center justify-center">
            <div className="text-center">
              <HoverLetters
                text="Design System"
                className="text-[52px] sm:text-[72px] lg:text-[100px] font-semibold leading-[1.2]"
                style={{ fontFamily: 'Kumbh Sans, ui-sans-serif, system-ui' }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Absolute Colors */}
      <Section id="absolute" title="Absolute Colors" kicker="This is a absolute white and black.">
        <Card className="flex w-full flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
              {absoluteColors.map((c) => (
                <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Primary Colors */}
      <Section id="primary" title="Primary Colors" kicker="Primary Colors - The foundational color representing brand identity in this template">
        <Card className="p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {primaryRow1.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 md:mt-8 md:grid-cols-4">
            {primaryRow2.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
        </Card>
      </Section>

      {/* Dark Shades */}
      <Section id="dark-shades" title="Dark Shades" kicker="Dark Colors - Setting the thematic tone and serving as the predominant background hues in this template">
        <Card className="p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {darkShades1.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 md:mt-8 md:grid-cols-4">
            {darkShades2.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
        </Card>
      </Section>

      {/* Grey Shades */}
      <Section id="grey-shades" title="Grey Shades" kicker="Grey Colors - Employed for creating inviting and readable text elements throughout the template">
        <Card className="p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {grayShades1.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 md:mt-8 md:grid-cols-4">
            {grayShades2.map((c) => (
              <Swatch key={c.hex} hex={c.hex} label={c.label} useDarkText={c.dark} />
            ))}
          </div>
        </Card>
      </Section>

      {/* Typography – Sora */}
      <div className="bg-[#1A1A1A]">
        <Section className="py-10">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <Card className="relative p-8">
              <CornerFrame color="#4D4D4D" />
              <div className="flex h-[175px] items-center justify-center">
                <HoverLetters
                  text="Sora"
                  className="text-[64px] sm:text-[80px] lg:text-[100px] font-semibold leading-[1.3]"
                  style={{ fontFamily: 'Kumbh Sans, ui-sans-serif, system-ui' }}
                />
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-semibold">Used Font Weights</h3>
              <div className="flex flex-wrap gap-3">
                <Pill>Regular</Pill>
                <Pill>Medium</Pill>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-10">
            <h4 className="mb-6 text-xl font-medium">Capital Letters</h4>
            <div className="flex flex-wrap gap-2">
              {alphabetCaps.map((c) => (
                <Keycap key={c}>{c}</Keycap>
              ))}
            </div>
            <div className="my-8 h-0 border-t-8 border-neutral-800" />
            <h4 className="mb-6 text-xl font-medium">Small Letters</h4>
            <div className="flex flex-wrap gap-2">
              {alphabetSmall.map((c) => (
                <Keycap key={c}>{c}</Keycap>
              ))}
            </div>
            <div className="my-8 h-0 border-t-8 border-neutral-800" />
            <h4 className="mb-6 text-xl font-medium">Others</h4>
            <div className="flex flex-wrap gap-2">
              {[...numerics, ...symbols].map((c) => (
                <Keycap key={`sora-${c}`}>{c}</Keycap>
              ))}
            </div>
          </Card>
        </Section>
      </div>

      {/* Typography – Inter */}
      <div className="bg-[#1A1A1A]">
        <Section className="py-10">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <Card className="relative p-8">
              <CornerFrame color="#4D4D4D" />
              <div className="flex h-[175px] items-center justify-center">
                <HoverLetters
                  text="Inter"
                  className="text-[64px] sm:text-[80px] lg:text-[100px] font-semibold leading-[1.3]"
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
                />
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-semibold">Used Font Weights</h3>
              <div className="flex flex-wrap gap-3">
                <Pill>Regular</Pill>
                <Pill>Medium</Pill>
                <Pill>Semi Bold</Pill>
                <Pill>Bold</Pill>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-10">
            <h4 className="mb-6 text-xl font-medium">Capital Letters</h4>
            <div className="flex flex-wrap gap-2">
              {alphabetCaps.map((c) => (
                <Keycap key={`cap-${c}`}>{c}</Keycap>
              ))}
            </div>
            <div className="my-8 h-0 border-t-8 border-neutral-800" />
            <h4 className="mb-6 text-xl font-medium">Small Letters</h4>
            <div className="flex flex-wrap gap-2">
              {alphabetSmall.map((c) => (
                <Keycap key={`small-${c}`}>{c}</Keycap>
              ))}
            </div>
            <div className="my-8 h-0 border-t-8 border-neutral-800" />
            <h4 className="mb-6 text-xl font-medium">Others</h4>
            <div className="flex flex-wrap gap-2">
              {[...numerics, ...symbols].map((c) => (
                <Keycap key={`inter-${c}`}>{c}</Keycap>
              ))}
            </div>
          </Card>
        </Section>
      </div>

      {/* FOOTER with same image as HERO */}
      <footer className="relative border-t border-white/10">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img src="/chat1.png" alt="Footer background" className="w-full h-[38vh] sm:h-[45vh] md:h-[52vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content pinned to bottom */}
        <div className="relative z-10 min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold">Ready to build data-driven experiences?</h3>
              <p className="text-gray-200 max-w-2xl mx-auto">Let’s craft dashboards that turn complexity into clarity.</p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:germanlosada.dev@gmail.com" className="rounded-xl bg-white text-black px-5 py-2.5 font-semibold hover:bg-white/90 transition">Contact me</a>
                <a href="https://www.behance.net/germanlosada" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/30 px-5 py-2.5 font-semibold hover:bg-white/10 transition">Behance</a>
                <a href="https://github.com/Gflosada" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/30 px-5 py-2.5 font-semibold hover:bg-white/10 transition">GitHub</a>
              </div>

              <p className="text-xs text-white/70 mt-6">© {new Date().getFullYear()} German Losada — All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}