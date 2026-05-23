"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame
    let devicePixelRatio = 1
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    }

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)

      pointer.x = rect.width / 2
      pointer.y = rect.height / 2
      pointer.targetX = pointer.x
      pointer.targetY = pointer.y
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const updatePointer = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.targetX = e.clientX - rect.left
      pointer.targetY = e.clientY - rect.top
      pointer.active = true
    }

    const resetPointer = () => {
      const rect = canvas.getBoundingClientRect()
      pointer.targetX = rect.width / 2
      pointer.targetY = rect.height / 2
      pointer.active = false
    }

    canvas.addEventListener("pointermove", updatePointer)
    canvas.addEventListener("pointerleave", resetPointer)

    class RainbowSpiral {
      constructor() {
        this.rotation = 0
        this.time = 0
        this.colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#5856D6", "#AF52DE", "#FF2D55"]
      }

      update() {
        this.rotation += 0.004
        this.time += 0.018
      }

      draw() {
        const width = canvas.width / devicePixelRatio
        const height = canvas.height / devicePixelRatio
        const centerX = width / 2
        const centerY = height / 2
        const radius = Math.min(width, height) * 0.47
        const pointerDx = pointer.x - centerX
        const pointerDy = pointer.y - centerY
        const pointerDistance = Math.hypot(pointerDx, pointerDy)
        const pull = pointer.active ? Math.min(pointerDistance / radius, 1) : 0
        const pointerAngle = Math.atan2(pointerDy, pointerDx) - this.rotation
        const localPointerX = Math.cos(pointerAngle) * pointerDistance
        const localPointerY = Math.sin(pointerAngle) * pointerDistance

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(this.rotation)

        const arms = 8
        const turns = 7.4
        const totalPoints = 760
        const pulse = Math.sin(this.time) * 0.05

        for (let arm = 0; arm < arms; arm++) {
          ctx.beginPath()

          const offset = (arm * Math.PI * 2) / arms
          const color = this.colors[arm % this.colors.length]

          for (let i = 0; i < totalPoints; i++) {
            const progress = i / (totalPoints - 1)
            const angle = progress * turns * Math.PI * 2 + offset
            const distance = progress * radius * (0.92 + pulse)
            const wave = Math.sin(progress * 18 + this.time * 2 + arm) * 10 * progress
            const angularPull = Math.cos(angle - pointerAngle)
            const deformation = pointer.active ? angularPull * pull * 46 * progress : 0
            const twist = pointer.active ? Math.sin(pointerDistance * 0.012 + progress * 10) * pull * 0.34 : 0
            const deformedAngle = angle + twist * progress

            const x = Math.cos(deformedAngle) * (distance + wave + deformation)
            const y = Math.sin(deformedAngle) * (distance + wave - deformation * 0.35)

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          const gradient = ctx.createRadialGradient(0, 0, 4, 0, 0, radius)
          gradient.addColorStop(0, `${color}F2`)
          gradient.addColorStop(0.48, `${color}A6`)
          gradient.addColorStop(0.78, `${color}66`)
          gradient.addColorStop(1, `${color}08`)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.45 + pull * 0.9
          ctx.lineCap = "round"
          ctx.lineJoin = "round"
          ctx.setLineDash([10 - pull * 5, 11 + pull * 13])
          ctx.stroke()
          ctx.setLineDash([])
        }

        for (let arm = 0; arm < arms; arm++) {
          const offset = (arm * Math.PI * 2) / arms
          const color = this.colors[arm % this.colors.length]

          for (let i = 18; i < totalPoints; i += 8) {
            const progress = i / (totalPoints - 1)
            const angle = progress * turns * Math.PI * 2 + offset
            const distance = progress * radius * (0.92 + pulse)
            const wave = Math.sin(progress * 18 + this.time * 2 + arm) * 10 * progress
            const angularPull = Math.cos(angle - pointerAngle)
            const deformation = pointer.active ? angularPull * pull * 46 * progress : 0
            const twist = pointer.active ? Math.sin(pointerDistance * 0.012 + progress * 10) * pull * 0.34 : 0
            const deformedAngle = angle + twist * progress
            const baseX = Math.cos(deformedAngle) * (distance + wave + deformation)
            const baseY = Math.sin(deformedAngle) * (distance + wave - deformation * 0.35)
            const dx = baseX - localPointerX
            const dy = baseY - localPointerY
            const distanceFromPointer = Math.max(Math.hypot(dx, dy), 0.001)
            const influence = pointer.active ? Math.max(0, 1 - distanceFromPointer / (170 + pull * 90)) : 0
            const scatter = influence * influence
            const repel = scatter * (86 + progress * 82)
            const orbit = scatter * Math.sin(this.time * 6 + arm + progress * 24) * 48
            const float = Math.sin(this.time * 2.8 + i * 0.17 + arm) * 4 * progress
            const particleX = baseX + (dx / distanceFromPointer) * repel + (-dy / distanceFromPointer) * orbit
            const particleY = baseY + (dy / distanceFromPointer) * repel + (dx / distanceFromPointer) * orbit + float
            const size = 1.35 + progress * 2.3 + scatter * 3.6
            const opacity = 0.18 + progress * 0.5 + scatter * 0.32

            ctx.fillStyle = `${color}${Math.round(Math.min(opacity, 0.92) * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.beginPath()
            ctx.arc(particleX, particleY, size, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        const centerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 80)
        centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.42)")
        centerGlow.addColorStop(0.42, "rgba(0, 122, 255, 0.16)")
        centerGlow.addColorStop(1, "rgba(0, 122, 255, 0)")
        ctx.fillStyle = centerGlow
        ctx.beginPath()
        ctx.arc(0, 0, 80, 0, Math.PI * 2)
        ctx.fill()

        const outerGlow = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius * 1.08)
        outerGlow.addColorStop(0, "rgba(255, 255, 255, 0)")
        outerGlow.addColorStop(0.55, "rgba(0, 122, 255, 0.08)")
        outerGlow.addColorStop(1, "rgba(175, 82, 222, 0)")
        ctx.fillStyle = outerGlow
        ctx.beginPath()
        ctx.arc(0, 0, radius * 1.08, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = "rgba(255, 255, 255, 0.13)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(0, 0, radius * 0.74 + Math.sin(this.time) * 10, 0, Math.PI * 2)
        ctx.stroke()

        ctx.restore()
      }
    }

    const spiral = new RainbowSpiral()

    const animate = () => {
      const width = canvas.width / devicePixelRatio
      const height = canvas.height / devicePixelRatio

      ctx.clearRect(0, 0, width, height)

      pointer.x += (pointer.targetX - pointer.x) * 0.09
      pointer.y += (pointer.targetY - pointer.y) * 0.09

      spiral.update()
      spiral.draw()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("pointermove", updatePointer)
      canvas.removeEventListener("pointerleave", resetPointer)
    }
  }, [])

  return (
    <motion.div
      className="relative h-[360px] w-full max-w-[720px] md:h-[520px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="h-full w-full" style={{ display: "block" }} />
    </motion.div>
  )
}
