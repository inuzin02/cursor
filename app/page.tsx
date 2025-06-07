"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/navigation"
import AnimatedHero from "@/components/animated-hero"
import IntroAnimation from "@/components/intro-animation"
import BubbleEffect from "@/components/bubble-effect"
import EnhancedAcrylicBackground from "@/components/enhanced-acrylic-background"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showBubbles, setShowBubbles] = useState(false)
  const [showFirstLine, setShowFirstLine] = useState(false)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showThirdLine, setShowThirdLine] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Updated section refs to include business section
  const sectionRefs = {
    home: useRef(null),
    business: useRef(null),
    news: useRef(null),
    about: useRef(null),
    recruit: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    // Only start the main page animations after the intro is complete
    if (!showIntro) {
      // Start the animation sequence when the component mounts
      const timer1 = setTimeout(() => {
        setShowFirstLine(true)
      }, 500) // Start after a small initial delay

      const timer2 = setTimeout(() => {
        setShowSecondLine(true)
      }, 1500) // 1 second after the first line starts

      const timer3 = setTimeout(() => {
        setShowThirdLine(true)
      }, 2500) // 1 second after the second line starts

      // Clean up timers
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [showIntro])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Check which section is currently in view
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)

            // Hide bubbles when scrolling away from home section
            if (section !== "home" && showBubbles) {
              setShowBubbles(false)
            }

            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showBubbles])

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  const handleBubblesStart = () => {
    setShowBubbles(true)
  }

  return (
    <>
      {/* Only show Navigation when intro animation is complete */}
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} isVisible={!showIntro} />

      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        {/* Main content sections */}
        <section
          ref={sectionRefs.home}
          id="home"
          className="min-h-screen flex items-center justify-center w-full relative"
        >
          <AnimatedHero />

          {/* Bubble effect only in the home section */}
          {showBubbles && <BubbleEffect isVisible={showBubbles} />}

          <div className="text-left w-full max-w-[150%] px-4 md:px-8 lg:px-12">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 overflow-hidden">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: showFirstLine ? 0 : -100,
                  opacity: showFirstLine ? 1 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[#696969]"
              >
                クリエイティブテクノロジーで
              </motion.p>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: showSecondLine ? 0 : -100,
                  opacity: showSecondLine ? 1 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-transparent bg-clip-text">
                  アニメの未来
                </span>
                <span className="text-[#696969]">を創造する</span>
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: showThirdLine ? 0 : 20,
                opacity: showThirdLine ? 1 : 0,
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-base md:text-lg lg:text-2xl w-full text-[#696969]"
            >
              <p>CrestLabは、想像力と革新的技術の融合でアニメ制作の新時代を切り開きます</p>
              <p>&nbsp;</p>
            </motion.div>
          </div>
        </section>

        {/* Business section (now PURPOSE) with enhanced acrylic background */}
        <section
          ref={sectionRefs.business}
          id="business"
          className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 md:px-8 relative"
        >
          {/* Add the enhanced acrylic background */}
          <EnhancedAcrylicBackground />

          <div className="relative z-10 flex flex-col items-center">
            {/* News section content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative">
              PURPOSE
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
            </h2>

            <div className="w-full max-w-6xl">
              <div className="text-2xl md:text-3xl lg:text-4xl text-[#696969] text-center font-medium mt-8 leading-relaxed">
                <p>アニメーターの創作性をAIがアシストし、</p>
                <p>最高の作品を創り出す。</p>
              </div>

              <div className="mt-12 text-sm md:text-base lg:text-lg text-[#696969] text-center max-w-4xl mx-auto">
                <p>CrestLabは、映画・TVアニメ、ゲームなどにおいて、アニメーターのクリエイティブを最大化する目的で、</p>
                <p>AIをワークフローに組み入れた新たなアニメーション制作の型作りを推進します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* News section */}
        <section
          ref={sectionRefs.news}
          id="news"
          className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 md:px-8 relative"
        >
          {/* News section content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative">
            NEWS
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
          </h2>

          <div className="w-full max-w-4xl relative z-10">
            <div className="flex flex-col space-y-6">
              <div className="border-b border-gray-300 pb-4">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="text-[#696969] font-medium w-32 mb-2 md:mb-0">2025.12.1</div>
                  <div className="text-[#696969]">★採用情報★ イラストアニメーター2名募集 〜詳細はこちら〜</div>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="text-[#696969] font-medium w-32 mb-2 md:mb-0">2025.9.1</div>
                  <div className="text-[#696969]">"アニメC" TVアニメ第二期制作決定！！</div>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="text-[#696969] font-medium w-32 mb-2 md:mb-0">2025.3.1</div>
                  <div className="text-[#696969]">
                    "アニメA"放送日解禁！！
                    <br />
                    4月7日より、Netflix、Amazon Prime Videoにて先行配信
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated decorative dotted circle pattern */}
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] z-0"
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{
              opacity: 1, // Increased from 0.3 to 0.6
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
                    stroke="url(#circleGradient)" // Using gradient instead of solid color
                    strokeWidth="2" // Further increased stroke width
                    strokeDasharray="2 8" // Modified dash pattern
                    initial={{ opacity: 0.7 }} // Further increased initial opacity
                    animate={{
                      opacity: [0.7, 1, 0.7], // Further increased opacity range
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
                  // Determine color based on position in the circle
                  const colorChoice = Math.random() > 0.5
                  const dotColor = colorChoice ? "#65E7E4" : "#F48FE0" // Darker brand colors
                  return (
                    <motion.circle
                      key={`dot-${i}`}
                      cx={300 + Math.cos(angle) * radius}
                      cy={300 + Math.sin(angle) * radius}
                      r={2 + Math.random() * 4} // Even larger dots
                      fill={dotColor} // Using brand colors
                      initial={{ opacity: 1.0 }} // Further increased initial opacity
                      animate={{
                        opacity: [1, 1, 1], // Further increased opacity range
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
        </section>

        {/* About section - now using the AboutSection component */}
        <AboutSection ref={sectionRefs.about} />

        {/* RECRUIT SECTION */}
        <section
          ref={sectionRefs.recruit}
          id="recruit"
          className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-[#f8f8f8]"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] relative inline-block">
                RECRUIT
                <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left column - About message */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333]">
                    <span className="bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-transparent bg-clip-text">
                      多様な才能が集まる場所
                    </span>
                  </h3>
                  <p className="text-[#696969] mb-8 leading-relaxed">
                    CrestLabでは、アニメーション業界の未来を共に創る仲間を募集しています。
                    私たちは、多様なバックグラウンドと専門知識を持つ人材が集まることで、
                    革新的なアイデアが生まれると信じています。
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-[#696969] mb-6 leading-relaxed">
                    技術とアートの境界を超え、新しい表現方法を模索する情熱的なチームの一員になりませんか？
                    私たちは常に、創造性を大切にし、挑戦を恐れない人材を求めています。
                  </p>
                  <p className="text-[#696969] mb-6 leading-relaxed">
                    CrestLabでは、あなたのユニークな視点と専門知識が、次世代のアニメーション技術を形作る重要な役割を果たします。
                  </p>
                </div>
              </motion.div>

              {/* Right column - Team image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/collaborative-anime-creation.png" alt="CrestLabチーム" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-50"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-30"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section
          ref={sectionRefs.contact}
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 md:px-8 bg-gray-50"
        >
          {/* Contact section content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative">
            CONTACT
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
          </h2>
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AECEA]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AECEA]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AECEA]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AECEA]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-white font-medium rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlay the intro animation on top of the main content */}
      {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} onBubblesStart={handleBubblesStart} />}
    </>
  )
}
