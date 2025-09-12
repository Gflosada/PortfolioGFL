"use client";
import React from "react";

export default function AuraPoster({
  heroTop = "/auralog.png",
  threePhones = "/aura2.png",
  middleWide = "/aura1.png",
  routineWide = "/aura3.png",
  bottomStrip = "/aurafoot.png",
}) {
  return (
    <div className="w-full bg-white">
      {/* Poster background */}
      <div className="w-full bg-[#F2F2F2]">
        {/* Top hero */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6">
          <img
            src={heroTop}
            alt="Aura hero"
            className="w-full h-auto rounded-xl object-cover"
          />
        </section>

        {/* Intro text + 3 phones */}
        <section className="mx-auto max-w-[1465px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h3 className="mt-10 text-center text-3xl sm:text-5xl font-medium text-black">
             “Meal Plan App <br /> Personalized Nutrition at Your Fingertips”
          </h3>

          <p className="mx-auto max-w-[1242px] text-center text-black/90 text-lg sm:text-2xl leading-relaxed">
          The Meal Plan App was designed to help users take control of their nutrition with personalized weekly plans, recipe suggestions, and health tracking tools. The goal was to make healthy eating accessible, engaging, and adaptable to individual lifestyles.
          </p>
        </div>

          <div className="mt-6">
            <img
              src={threePhones}
              alt="Onboarding phones"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <p className="mx-auto mt-6 max-w-[1242px] text-center text-black/90 text-lg sm:text-2xl leading-relaxed">
          We started with low-fidelity wireframes to map key flows: creating a meal plan, browsing recipes, and generating shopping lists. Testing revealed users preferred fewer steps for meal selection.
          </p>
        </section>

        {/* Middle wide image (the one that sat between blocks) */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 mt-10">
          <img
            src={middleWide}
            alt="Middle section"
            className="w-full h-auto rounded-xl object-cover"
          />
        </section>

        {/* Routine copy + wide image + quote + bottom strip */}
        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-14">
          <p className="text-center text-black/90 text-lg sm:text-2xl leading-relaxed">
          High-fidelity prototypes introduced real recipes, calorie breakdowns, and simple navigation. User testing refined how nutrition data was presented to avoid information overload.
          </p>

          <img
            src={routineWide}
            alt="Weekly routine"
            className="mt-10 w-full h-auto rounded-xl object-cover "
          />

          <h3 className="mt-10 text-center text-3xl sm:text-5xl font-medium text-black">
            “You are what you eat”
          </h3>

          <img
            src={bottomStrip}
            alt="Bottom strip"
            className="mt-8 w-full h-auto rounded-xl object-cover"
          />
        </section>
{/* FOOTER with same image as HERO */}
<footer className="relative border-t border-white/10">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img src="/food.png" alt="Footer background" className="w-full h-[38vh] sm:h-[45vh] md:h-[52vh] object-cover" />
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
        <div  /> 
      </div>
    </div>
  );
}
