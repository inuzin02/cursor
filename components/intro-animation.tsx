"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface IntroAnimationProps {
  onAnimationComplete: () => void
  onBubblesStart: () => void
}

export default function IntroAnimation({ onAnimationComplete, onBubblesStart }: IntroAnimationProps) {
  const [showLogo, setShowLogo] = useState(false)
  const [shrinkBackground, setShrinkBackground] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Sequence the animations
    const timer1 = setTimeout(() => {
      setShowLogo(true)
    }, 500)

    const timer2 = setTimeout(() => {
      setShrinkBackground(true)
    }, 1000)

    // Start bubbles after the background has shrunk but before fading out
    const timer3 = setTimeout(() => {
      onBubblesStart()
    }, 1200)

    const timer4 = setTimeout(() => {
      setFadeOut(true)
    }, 1500)

    const timer5 = setTimeout(() => {
      onAnimationComplete()
    }, 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onAnimationComplete, onBubblesStart])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{
          opacity: fadeOut ? 0 : 1,
          y: fadeOut ? -100 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#9AECEA] to-[#F6B7EE]"
          initial={{ scale: 1, opacity: 0.98 }}
          animate={{
            scale: shrinkBackground ? 0.95 : 1,
            opacity: shrinkBackground ? 0.95 : 0.98,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center",
            borderRadius: shrinkBackground ? "20px" : "0px",
            boxShadow: shrinkBackground ? "0 10px 30px rgba(0, 0, 0, 0.1)" : "none",
          }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showLogo ? 1 : 0,
            scale: showLogo ? 1 : 0.8,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          {/* Logo with white color filter applied */}
          <div className="w-64 md:w-80 filter drop-shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%81%E6%A5%AD%E3%83%AD%E3%82%B3%E3%82%99CrestLab%E9%BB%92%20%281%29-hr7tOAIOUaUaTX8ngRGpLnCCBz7T2G.png"
              alt="CrestLab"
              width={400}
              height={100}
              className="w-full h-auto"
              style={{
                filter: "brightness(0) invert(1)", // This makes the black logo white
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
