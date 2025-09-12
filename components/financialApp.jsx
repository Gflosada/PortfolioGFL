"use client";
import React, { useEffect, useState } from "react";

export default function FintechCaseStudy() {
  const kpis = ["+35% increase in app engagement", "+28% adoption rate", "92% task success rate"];
  const features = ["Wireframes", "High-Fidelity Prototypes", "Design System"];

  // Persona slider images
  const personaSlides = ["/targetper.png", "/persona2.png", "/persona3.png", "/persona4.png"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % personaSlides.length), 4500);
    return () => clearInterval(t);
  }, [personaSlides.length]);

  const goTo = (i) => setIdx(i);
  const prev = () => setIdx((i) => (i - 1 + personaSlides.length) % personaSlides.length);
  const next = () => setIdx((i) => (i + 1) % personaSlides.length);

  return (
    <div className="w-full bg-[#C7C7C7]">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <img src="/iphonefin.png" alt="Hero" className="w-full rounded-xl object-cover" />
        <div className="mt-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold font-barlow">
            Fintech App Design
            <br /> Research, UX, and Testing
          </h1>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {kpis.map((kpi) => (
              <span key={kpi} className="rounded-lg bg-black px-4 py-3 text-[#FF6584] font-semibold">
                {kpi}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-gray-900 text-lg sm:text-xl leading-relaxed">
            This project focused on designing a mobile financial app that helps users manage their
            investments, track expenses, and visualize financial growth. The app combines intuitive
            UX, clear data visualization, and user trust—critical factors in the financial sector.
          </p>
        </div>
      </section>

      {/* Side-by-side */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <img src="/sidephone.png" alt="Phone mockup" className="mx-auto rounded-xl shadow" />
        <img src="/roadfib.png" alt="Canvas" className="mx-auto rounded-xl shadow" />
      </section>

      {/* Banner */}
      <section className="relative border-x border-b border-neutral-700 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-wrap justify-center gap-6 text-white text-2xl font-semibold">
          <span>Mobile-first interface</span>
          <span>Trust-driven UX</span>
          <span>Clear KPIs</span>
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] px-6 py-2 rounded-full border border-neutral-700">
          <span className="text-white text-sm sm:text-base">Visualizing the Financial Journey</span>
        </div>
      </section>

      {/* Design Phases (REPLACED image with draggable compare slider) */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* If your file is /iphonecard1.png, swap the path below */}
        <ImageCompare
          frontSrc="/phonecard1.png"
          backSrc="/phonecard2.png"
          alt="iPhone screen evolution"
          aspect="9/19"
        />
        <div className="space-y-6">
          <h2 className=" text-3xl sm:text-5xl font-bold font-barlow text-center md:text-left text-black">Design Phases</h2>
          <p className="text-lg sm:text-xl leading-relaxed  text-gray-900">
            The design process began with low-fidelity wireframes, mapping core user journeys like
            tracking spending, transferring funds, and viewing investment growth. Early testing
            revealed opportunities to simplify the dashboard and highlight KPIs more clearly.
          </p>
        </div>
      </section>

      {/* Wireframes to Hifi — persona slider ABOVE iPhone mock */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative">
          <div className="relative w-full overflow-hidden rounded-xl border-b-8 border-black bg-white">
            <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px]">
              {personaSlides.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Target Persona ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-700 ease-in-out ${
                    i === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {personaSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === idx ? "bg-black" : "bg-neutral-400/70"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <img
            src="/iphonemock.png"
            alt="iPhone Mock"
            className="mx-auto rounded-xl relative z-0 mt-8 md:-mt-10"
          />
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl sm:text-5xl font-bold font-barlow text-black">
            From Wireframes to <br /> High-Fidelity Mockups
          </h3>
        </div>

        <img src="/phonesmock.png" alt="High-fidelity mockup" className="mt-8 w-full rounded-xl" />
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-center text-3xl sm:text-5xl font-bold font-barlow text-[#FF6584]">Features</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <span key={f} className="rounded-lg bg-black px-4 py-3 text-[#FF6584] font-semibold">
              {f}
            </span>
          ))}
        </div>
        <img src="/phoneswire.png" alt="Feature showcase" className="mt-10 w-full rounded-xl" />
      </section>

      {/* Gallery */}
      <section className=" w-full px-0 py-16 space-y-8">
        <img src="/phonesrend.png" alt="Gallery 1" className="w-full " />
        <img src="/phonesfoot.png" alt="Gallery 2" className="w-full " />
      </section>
    </div>
  );
}

/* ———————————————————————————————————————————————
   Draggable before/after image compare (same effect)
   Usage where added: <ImageCompare frontSrc="/phonecard1.png" backSrc="/phonecard1-back.png" />
   - Swap frontSrc to "/iphonecard1.png" if that's your file.
——————————————————————————————————————————————— */
function ImageCompare({ frontSrc, backSrc, alt = "", aspect = "16/9" }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState(0.5); // 0..1

  const updateFromEvent = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = (e.touches && e.touches[0]?.clientX) ?? e.clientX;
    const next = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setPos(next);
  };

  const startDrag = (e) => {
    e.preventDefault();
    updateFromEvent(e);
    const move = (ev) => updateFromEvent(ev);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
  };

  const percent = pos * 100;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border-4 border-white bg-black/5"
      style={{ aspectRatio: aspect }}
      onTouchStart={startDrag}
    >
      {/* Back image */}
      <img src={backSrc} alt={alt || "before"} className="absolute inset-0 h-full w-full object-cover" />

      {/* Front image (revealed) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        <img src={frontSrc} alt={alt || "after"} className="h-full w-full object-cover" />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${percent}%`, transform: "translateX(-0.5px)" }}
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        </div>
      </button>
    </div>
  );
}
