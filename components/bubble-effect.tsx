"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BubbleProps {
  isVisible: boolean
}

export default function BubbleEffect({ isVisible }: BubbleProps) {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number
      size: number
      x: number
      y: number
      duration: number
      delay: number
      opacity: number
      color: string
    }>
  >([])

  useEffect(() => {
    if (isVisible) {
      // Create random bubbles
      const newBubbles = Array.from({ length: 20 }, (_, i) => {
        const size = Math.random() * 80 + 20 // 20-100px
        return {
          id: i,
          size,
          x: Math.random() * 100, // percentage of container width
          y: Math.random() * 50 + 50, // 50-100% of container height (bottom half)
          duration: Math.random() * 4 + 6, // 6-10 seconds
          delay: Math.random() * 0.5,
          opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
          color: Math.random() > 0.5 ? "#9AECEA" : "#F6B7EE",
        }
      })
      setBubbles(newBubbles)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
            opacity: 0,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, bubble.opacity, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            ease: "easeInOut",
            times: [0, 0.2, 1],
          }}
        />
      ))}
    </div>
  )
}
