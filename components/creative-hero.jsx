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

    let devicePixelRatio

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    })

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        // Apple-inspired colors for particles
        const colors = [
          "rgba(255, 59, 48, 0.6)", // Red
          "rgba(255, 149, 0, 0.6)", // Orange
          "rgba(255, 204, 0, 0.6)", // Yellow
          "rgba(52, 199, 89, 0.6)", // Green
          "rgba(0, 122, 255, 0.6)", // Blue
          "rgba(88, 86, 214, 0.6)", // Indigo
          "rgba(175, 82, 222, 0.6)", // Purple
          "rgba(255, 45, 85, 0.6)", // Pink
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Create particle grid
    const particlesArray = []
    const gridSize = 30

    function init() {
      particlesArray.length = 0

      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Animated Apple-style spiral
    class AnimatedAppleSpiral {
      constructor() {
        this.centerX = canvas.width / (2 * devicePixelRatio)
        this.centerY = canvas.height / (2 * devicePixelRatio)
        this.baseRadius = Math.min(canvas.width, canvas.height) / (3 * devicePixelRatio)

        // Animation properties
        this.rotation = 0
        this.rotationSpeed = 0.008 // Smooth rotation speed
        this.scale = 1
        this.scaleDirection = 0.003
        this.maxScale = 1.3
        this.minScale = 0.7
        this.time = 0

        // Apple's vibrant color palette
        this.colors = [
          "#FF3B30", // Red
          "#FF9500", // Orange
          "#FFCC00", // Yellow
          "#34C759", // Green
          "#007AFF", // Blue
          "#5856D6", // Indigo
          "#AF52DE", // Purple
          "#FF2D55", // Pink
        ]
      }

      update() {
        // Update rotation
        this.rotation += this.rotationSpeed

        // Update scale with smooth sine wave
        this.time += 0.02
        this.scale = 1 + Math.sin(this.time) * 0.2 // Oscillates between 0.8 and 1.2

        // Update center position based on canvas size changes
        this.centerX = canvas.width / (2 * devicePixelRatio)
        this.centerY = canvas.height / (2 * devicePixelRatio)
      }

      draw() {
        ctx.save()
        ctx.translate(this.centerX, this.centerY)
        ctx.rotate(this.rotation)
        ctx.scale(this.scale, this.scale)

        const arms = 6
        const turns = 4
        const pointsPerTurn = 80
        const totalPoints = turns * pointsPerTurn

        // Draw multiple spirals with different colors
        for (let spiralIndex = 0; spiralIndex < arms; spiralIndex++) {
          ctx.beginPath()

          const spiralOffset = (spiralIndex * Math.PI * 2) / arms
          const color = this.colors[spiralIndex % this.colors.length]

          for (let i = 0; i < totalPoints; i++) {
            const angle = (i / pointsPerTurn) * Math.PI * 2 + spiralOffset
            const distance = (i / totalPoints) * this.baseRadius

            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          // Create radial gradient for each spiral arm with enhanced opacity
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.baseRadius)
          gradient.addColorStop(0, color + "CC") // 80% opacity at center
          gradient.addColorStop(0.5, color + "80") // 50% opacity
          gradient.addColorStop(0.8, color + "40") // 25% opacity
          gradient.addColorStop(1, color + "00") // Transparent at edges

          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.lineCap = "round"
          ctx.lineJoin = "round"
          ctx.stroke()
        }

        // Add animated center glow that pulses with the scale
        const glowIntensity = 0.1 + (this.scale - 0.8) * 0.1
        const centerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 40)
        centerGradient.addColorStop(0, `rgba(255, 255, 255, ${glowIntensity})`)
        centerGradient.addColorStop(0.5, `rgba(255, 255, 255, ${glowIntensity * 0.5})`)
        centerGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = centerGradient
        ctx.beginPath()
        ctx.arc(0, 0, 40, 0, Math.PI * 2)
        ctx.fill()

        // Add subtle outer glow
        const outerGlow = ctx.createRadialGradient(0, 0, this.baseRadius * 0.8, 0, 0, this.baseRadius * 1.2)
        outerGlow.addColorStop(0, "rgba(0, 122, 255, 0)")
        outerGlow.addColorStop(1, `rgba(0, 122, 255, ${0.05 * this.scale})`)

        ctx.fillStyle = outerGlow
        ctx.beginPath()
        ctx.arc(0, 0, this.baseRadius * 1.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    const animatedSpiral = new AnimatedAppleSpiral()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Update and draw animated spiral
      animatedSpiral.update()
      animatedSpiral.draw()

      // Draw particles and connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Draw connections with Apple colors
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 122, 255, ${0.1 - distance / 300})` // Apple blue
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
