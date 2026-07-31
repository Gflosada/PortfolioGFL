"use client"

import { useEffect, useRef } from "react"

export function ScrollActivatedBannerVideo({ src, poster, title }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return undefined
    }

    const playVideo = () => {
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.play().catch(() => {
        // Muted autoplay can still be delayed until the browser is ready.
      })
    }

    video.addEventListener("loadedmetadata", playVideo)
    video.addEventListener("canplay", playVideo)
    video.addEventListener("ended", playVideo)
    window.addEventListener("focus", playVideo)
    document.addEventListener("visibilitychange", playVideo)
    playVideo()

    return () => {
      video.removeEventListener("loadedmetadata", playVideo)
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("ended", playVideo)
      window.removeEventListener("focus", playVideo)
      document.removeEventListener("visibilitychange", playVideo)
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
        preload="auto"
        className="relative aspect-[16/10] max-h-[620px] w-full rounded-[1.55rem] bg-indigo-950 object-cover"
      >
        Your browser does not support embedded video playback.
      </video>
    </figure>
  )
}
