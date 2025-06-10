"use client"

import { useState, useEffect, forwardRef } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Using forwardRef to properly handle the ref from the parent component
const AboutSection = forwardRef<HTMLElement, any>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white py-4"
    >
      {/* ABOUT US heading with underline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative z-20">
        ABOUT US
        <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
      </h2>

      {/* Left rounded rectangle */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 0.15, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 top-[+10%] transform -translate-y-1/2 w-2/5 h-2/5 rounded-r-full bg-pink-200 hidden md:block"
      />

      {/* Right rounded rectangle */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 0.15, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5 h-2/5 rounded-l-full bg-blue-200 hidden md:block"
      />

      {/* Center box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl w-full rounded-xl shadow-lg p-2 md:p-4 bg-white z-10 border border-gray-100"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center min-h-[240px]">
          {/* Left column */}
          <div className="md:w-2/5 flex flex-col items-center justify-center h-full text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-800"
            >
              わたしたちが<br />めざすこと
            </motion.h3>
          </div>

          {/* Right column */}
          <div className="md:w-3/5 flex flex-col items-center justify-center h-full text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
            >
              創造性から革新へ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8 leading-relaxed text-gray-600"
            >
              アニメーション制作の未来を見据え、AIでクリエイターの創造力を最大限に引き出す環境を構築します。
              私たちは技術と芸術の融合を通じて、新しい表現の可能性を追求し続けます。
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
})

// Add display name for better debugging
AboutSection.displayName = "AboutSection"

export default AboutSection
