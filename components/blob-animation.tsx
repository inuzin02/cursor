"use client"

import { useEffect, useRef } from "react"

export default function BlobAnimation() {
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

    // Blob parameters
    const blobs = [
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.4,
        radius: Math.min(canvas.width, canvas.height) * 0.15,
        color: "#9AECEA",
        angle: 0,
        speed: 0.005,
        amplitude: 20,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.6,
        radius: Math.min(canvas.width, canvas.height) * 0.12,
        color: "#F6B7EE",
        angle: Math.PI,
        speed: 0.004,
        amplitude: 15,
      },
    ]

    let animationFrameId: number

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.angle += blob.speed

        // Draw blob with oscillating radius
        ctx.beginPath()

        // Create a wavy circle
        for (let i = 0; i < Math.PI * 2; i += 0.01) {
          const wavyRadius = blob.radius + Math.sin(i * 8 + blob.angle) * blob.amplitude
          const x = blob.x + Math.cos(i) * wavyRadius
          const y = blob.y + Math.sin(i) * wavyRadius

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()

        // Create gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius * 1.5)
        gradient.addColorStop(0, `${blob.color}80`) // 50% opacity
        gradient.addColorStop(1, `${blob.color}00`) // 0% opacity

        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />
}
