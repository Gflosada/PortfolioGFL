'use client';

import React from "react";
import PropTypes from "prop-types";

/*
  Chatminds — Design System & Case Study Preview
  - TailwindCSS-only styling
  - Reusable <Section />, <Card />, <Swatch />, etc.
*/

// —————————————————————————————————————————————
// Small helpers
// —————————————————————————————————————————————
function Section({ id, title, kicker, className = "", children }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {(title || kicker) && (
        <header className="mb-6 sm:mb-8 text-center">
          {title && (
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] lg:leading-[1.4] font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {kicker && (
            <p className="mt-2 mx-auto max-w-3xl text-base sm:text-lg leading-7 text-neutral-300">
              {kicker}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  kicker: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

function Card({ className = "", children }) {
  return <div className={`rounded-xl border border-neutral-800 bg-[#141414] ${className}`}>{children}</div>;
}
Card.propTypes = { className: PropTypes.string, children: PropTypes.node };

function CornerFrame({ color = "#E5E7EB" }) {
  const styleTL = { borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` };
  const styleTR = { borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}` };
  const styleBL = { borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` };
  const styleBR = { borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}` };
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-0 top-0 h-8 w-8" style={styleTL} />
      <div className="absolute right-0 top-0 h-8 w-8" style={styleTR} />
      <div className="absolute left-0 bottom-0 h-8 w-8" style={styleBL} />
      <div className="absolute right-0 bottom-0 h-8 w-8" style={styleBR} />
    </div>
  );
}
CornerFrame.propTypes = { color: PropTypes.string };

function Swatch({ hex, label, useDarkText = false }) {
  const txt = useDarkText ? "text-black" : "text-white";
  return (
    <div
      className="h-[108px] rounded-xl border-2 border-neutral-800 p-2.5 flex flex-col justify-between"
      style={{ backgroundColor: hex }}
    >
      <div className={`text-[15px] leading-6 ${txt}`}>{label}</div>
      <div className={`text-sm leading-5 text-right ${txt}`}>{hex.toUpperCase()}</div>
    </div>
  );
}
Swatch.propTypes = {
  hex: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  useDarkText: PropTypes.bool,
};

function Pill({ children }) {
  return (
    <div className="rounded-full border border-neutral-800 bg-[#1A1A1A] px-6 py-3">
      <span className="text-neutral-300 text-[20px] leading-7">{children}</span>
    </div>
  );
}
Pill.propTypes = { children: PropTypes.node };

function Keycap({ children }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-[#1A1A1A] px-5 py-3">
      <span className="text-neutral-300 text-[20px] leading-7">{children}</span>
    </div>
  );
}
Keycap.propTypes = { children: PropTypes.node };

// —————————————————————————————————————————————
// Data
// —————————————————————————————————————————————
const absoluteColors = [
  { label: "White", hex: "#FFF", dark: true },
  { label: "Black", hex: "#000", dark: false },
];

const primaryRow1 = [
  { label: 55, hex: "#9E62EC", dark: false },
  { label: 60, hex: "#FFD633", dark: true },
  { label: 70, hex: "#76D679", dark: true },
  { label: 80, hex: "#FD756B", dark: false },
];

const primaryRow2 = [
  { label: 90, hex: "#FFF5CC", dark: true },
  { label: 95, hex: "#FFFAE5", dark: true },
  { label: 97, hex: "#FFFCF0", dark: true },
  { label: 99, hex: "#FFFEFA", dark: true },
];

const darkShades1 = [
  { label: 8, hex: "#141414", dark: false },
  { label: 10, hex: "#1A1A1A", dark: false },
  { label: 15, hex: "#262626", dark: false },
  { label: 20, hex: "#333333", dark: false },
];

const darkShades2 = [
  { label: 25, hex: "#404040", dark: false },
  { label: 30, hex: "#4D4D4D", dark: false },
  { label: 35, hex: "#595959", dark: false },
  { label: 40, hex: "#666666", dark: false },
];

const grayShades1 = [
  { label: 50, hex: "#7E7E81", dark: false },
  { label: 60, hex: "#98989A", dark: false },
  { label: 70, hex: "#B3B3B3", dark: false },
  { label: 80, hex: "#CCCCCC", dark: false },
];

const grayShades2 = [
  { label: 90, hex: "#E4E4E7", dark: true },
  { label: 95, hex: "#F1F1F3", dark: true },
  { label: 97, hex: "#F7F7F8", dark: true },
  { label: 99, hex: "#FCFCFD", dark: true },
];

const alphabetCaps = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const alphabetSmall = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const numerics = Array.from({ length: 10 }, (_, i) => `${i}`);
const symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];

// ✨ Missing arrays from your snippet (now added)
const highlights = [
  "+60% faster design & development with reusable system.",
  "Improved user trust with research-driven visuals and copy.",
  "AI integration showcased clearly, turning complex features into simple stories.",
];

const insights = [
  "Businesses wanted clarity in understanding AI chatbot benefits.",
  "Users valued simple onboarding flows over technical jargon.",
  "Trust and transparency were critical for adoption in automation.",
];

// —————————————————————————————————————————————
// Main Component (capitalize the name!)
// —————————————————————————————————————————————
export default function Chatminds() {
  return (
    <div className="w-full bg-[#0E0E0E] text-white">
      {/* Hero Image */}
      <div className="relative">
        <img src="/chat1.png" alt="Chatminds hero" className="w-full object-cover" />
      </div>

      {/* Project Overview (with big vertical padding) */}
      <section className="py-[220px]">
        {/* Title + Kicker */}
        <div className="mx-auto max-w-[1052px] px-6 text-center">
          <h2 className="text-white text-[36px] leading-[44px] font-semibold">
            Chatminds Website Redesign — AI Chatbot & Automation
          </h2>
          <p className="mt-[21px] text-[#CCCCCC] text-[18px] leading-[28px]">
            A complete redesign of the Chatminds website, built on user research and a scalable design system. The goal
            was to showcase Chatminds as an AI-powered partner, delivering intuitive chatbot experiences and seamless
            automation for businesses.
          </p>
        </div>

        {/* Pink highlights card */}
        <div className="mx-auto mt-[59px] max-w-[1197px] px-6">
          <div className="relative rounded-xl bg-[#9E165F] px-[50px] py-14 ring-1 ring-[#262626]">
            <CornerFrame color="#FFFFFF" />
            <ul className="flex flex-col gap-12">
              {highlights.map((t) => (
                <li
                  key={t}
                  className="h-10 w-full overflow-hidden rounded-[10px] bg-[#E9EAEB] px-2 ring-[3px] ring-[#333333] flex items-center justify-center"
                >
                  <span className="text-black text-[16px] leading-[22.4px] font-semibold text-center">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Insight cards below */}
        <div className="mx-auto mt-[63px] flex flex-wrap items-center justify-center gap-[50px] px-6">
          {insights.map((txt) => (
            <div
              key={txt}
              className="rounded-2xl bg-white p-2 md:w-[312px] md:h-[120px] flex items-center justify-center"
            >
              <div className="mx-auto w-[213px] text-center text-black text-[16px] leading-6 font-semibold">
                {txt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid-page illustrative image */}
      <div className="mt-10">
        <img src="/chat2.png" alt="mid mock" className="w-full object-cover" />
      </div>

      {/* Design System Banner */}
      <Section className="py-10">
        <div className="relative mt-10 rounded-xl border border-neutral-800 bg-gradient-to-tr from-[rgba(83,56,158,0.06)] to-[rgba(127,86,217,0.06)] p-6 sm:p-10">
          <CornerFrame color="#FFFFFF" />
          <div className="flex w-full items-center justify-center">
            <div className="text-center">
              <div
                className="text-[52px] sm:text-[72px] lg:text-[100px] font-semibold leading-[1.2]"
                style={{ fontFamily: "Kumbh Sans, ui-sans-serif, system-ui" }}
              >
                Design System
              </div>
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
      <Section
        id="primary"
        title="Primary Colors"
        kicker="Primary Colors - The foundational color representing brand identity in this template"
      >
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
      <Section
        id="dark-shades"
        title="Dark Shades"
        kicker="Dark Colors - Setting the thematic tone and serving as the predominant background hues in this template"
      >
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
      <Section
        id="grey-shades"
        title="Grey Shades"
        kicker="Grey Colors - Employed for creating inviting and readable text elements throughout the template"
      >
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
                <div
                  className="text-[64px] sm:text-[80px] lg:text-[100px] font-semibold leading-[1.3]"
                  style={{ fontFamily: "Kumbh Sans, ui-sans-serif, system-ui" }}
                >
                  Sora
                </div>
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
                <div
                  className="text-[64px] sm:text-[80px] lg:text-[100px] font-semibold leading-[1.3]"
                  style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
                >
                  Inter
                </div>
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

      {/* Footer image / callout */}
      <div className="mt-10">
        <img src="/chat3.png" alt="footer mock" className="w-full object-cover" />
      </div>

      <div className="h-16" />
    </div>
  );
}
