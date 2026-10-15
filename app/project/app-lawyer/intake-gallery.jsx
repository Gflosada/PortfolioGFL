"use client"

import { Children, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const intakeLabels = ["Personal ties", "Host details", "Immigration history", "Documents"]

export function IntakeGallery({ children, labels = intakeLabels, label = "Case intake screens" }) {
  const [viewport, api] = useEmblaCarousel({ align: "center", loop: false })
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => setSelected(api.selectedScrollSnap())
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => api.reInit({ duration: motion.matches ? 0 : 25 })
    api.on("select", update)
    api.on("reInit", update)
    updateMotion()
    motion.addEventListener("change", updateMotion)
    return () => {
      api.off("select", update)
      api.off("reInit", update)
      motion.removeEventListener("change", updateMotion)
    }
  }, [api])

  return (
    <div
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault()
          if (event.key === "ArrowLeft") api?.scrollPrev()
          else api?.scrollNext()
        }
      }}
    >
      <div className="mb-5 flex flex-wrap justify-center gap-2" aria-label="Choose an intake screen">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={selected === index}
            onClick={() => api?.scrollTo(index)}
            className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${selected === index ? "bg-indigo-600 text-white" : "bg-white text-indigo-800 hover:bg-indigo-100"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div ref={viewport} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {Children.toArray(children).map((child, index) => (
            <div
              key={labels[index]}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${labels.length}: ${labels[index]}`}
              aria-hidden={selected !== index}
              className="min-w-0 flex-[0_0_100%] px-3 pb-10 pt-2"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button type="button" aria-label="Previous intake screen" disabled={selected === 0} onClick={() => api?.scrollPrev()} className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <p aria-live="polite" aria-atomic="true" className="text-sm font-medium text-indigo-950">
          {selected + 1} / {labels.length} <span className="ml-2 text-slate-600">{labels[selected]}</span>
        </p>
        <button type="button" aria-label="Next intake screen" disabled={selected === labels.length - 1} onClick={() => api?.scrollNext()} className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-slate-600">Swipe or use the arrows to explore each screen.</p>
    </div>
  )
}
