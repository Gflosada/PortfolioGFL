"use client"

import { useEffect, useState } from "react"

const MINIMUM_VISIBLE_MS = 1100
const EXIT_ANIMATION_MS = 520

export function SitePreloader() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const startedAt = window.performance.now()
    let exitTimer
    let hideTimer

    const finishLoading = () => {
      const elapsed = window.performance.now() - startedAt
      const remaining = Math.max(MINIMUM_VISIBLE_MS - elapsed, 0)

      exitTimer = window.setTimeout(() => {
        setIsLoaded(true)
        hideTimer = window.setTimeout(() => {
          setIsVisible(false)
        }, EXIT_ANIMATION_MS)
      }, remaining)
    }

    if (document.readyState === "complete") {
      finishLoading()
    } else {
      window.addEventListener("load", finishLoading, { once: true })
    }

    return () => {
      window.removeEventListener("load", finishLoading)
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-zinc-950 text-white transition-all duration-500 ease-out ${
        isLoaded ? "pointer-events-none opacity-0 scale-[1.02]" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading site"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.18),transparent_36%),linear-gradient(180deg,rgba(24,24,27,0.4),rgba(9,9,11,1))]" />
      <div className="relative flex w-full max-w-[18rem] flex-col items-center px-6 text-center">
        <div className="relative mb-7 grid h-24 w-24 place-items-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-2 rounded-full border border-blue-400/30" />
          <div className="site-loader-orbit absolute inset-0 rounded-full">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.9)]" />
          </div>
          <div className="site-loader-pulse h-11 w-11 rounded-full bg-gradient-to-br from-blue-300 via-white to-zinc-300 shadow-[0_0_48px_rgba(96,165,250,0.45)]" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/80">
          German Losada
        </p>
        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="site-loader-bar h-full rounded-full bg-gradient-to-r from-blue-300 via-white to-blue-400" />
        </div>
      </div>
    </div>
  )
}
