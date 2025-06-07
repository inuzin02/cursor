"use client"

import { useEffect, useRef } from "react"
import BlobAnimation from "./blob-animation"

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation parameters
    const particles: Particle[] = []
    const particleCount = 50
    const maxDistance = 200
    const mousePosition = { x: 0, y: 0 }
    let animationFrameId: number

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: i % 2 === 0 ? "#9AECEA" : "#F6B7EE",
      })
    }

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 150, ${1 - distance / maxDistance})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Interact with mouse
        const dx = p.x - mousePosition.x
        const dy = p.y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) / 1000
          p.speedX += Math.cos(angle) * force
          p.speedY += Math.sin(angle) * force

          // Limit speed
          const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
          if (speed > 2) {
            p.speedX = (p.speedX / speed) * 2
            p.speedY = (p.speedY / speed) * 2
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#f0f8ff] to-[#e6f7ff]"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/80 via-transparent to-transparent"></div>
      <BlobAnimation />
    </>
  )
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}
