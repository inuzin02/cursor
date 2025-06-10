"use client"
import { motion } from "framer-motion"

export default function AnimatedCircles() {
  return (
    <motion.div
      className="absolute bottom-0 right-0 w-[600px] h-[600px] z-0"
      initial={{ opacity: 0.2, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 360,
      }}
      transition={{
        duration: 60,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9AECEA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F6B7EE" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <g>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx={300}
              cy={300}
              r={100 + i * 15}
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="2"
              strokeDasharray="2 8"
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          {Array.from({ length: 200 }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2
            const radius = 50 + Math.random() * 250
            const colorChoice = Math.random() > 0.5
            const dotColor = colorChoice ? "#65E7E4" : "#F48FE0"
            return (
              <motion.circle
                key={`dot-${i}`}
                cx={300 + Math.cos(angle) * radius}
                cy={300 + Math.sin(angle) * radius}
                r={2 + Math.random() * 4}
                fill={dotColor}
                initial={{ opacity: 1.0 }}
                animate={{
                  opacity: [1, 1, 1],
                  r: [2 + Math.random() * 4, 3 + Math.random() * 5, 2 + Math.random() * 4],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            )
          })}
        </g>
      </svg>
    </motion.div>
  )
} 