"use client"

import { useEffect, useRef } from "react"

export function ScrollActivatedBannerVideo({ src, poster, title }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return undefined
    }

    let isVisible = false

    const playWhenVisible = () => {
      if (!isVisible) {
        return
      }

      video.muted = true
      video.play().catch(() => {
        // Browsers can still block playback in uncommon cases; the video remains visible.
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting

        if (isVisible) {
          playWhenVisible()
          return
        }

        video.pause()
        video.currentTime = 0
      },
      { threshold: 0.42 }
    )

    const handleScroll = () => {
      playWhenVisible()
    }

    video.addEventListener("loadedmetadata", playWhenVisible)
    observer.observe(video)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      video.removeEventListener("loadedmetadata", playWhenVisible)
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-2 shadow-2xl shadow-indigo-950/16 backdrop-blur">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/35 via-transparent to-indigo-300/20" />
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="relative aspect-[16/10] max-h-[620px] w-full rounded-[1.55rem] bg-indigo-950 object-cover"
      >
        Your browser does not support embedded video playback.
      </video>
    </figure>
  )
}
