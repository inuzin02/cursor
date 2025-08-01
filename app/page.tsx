"use client"

import { useState, useEffect, useRef, useCallback, RefObject } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/navigation"
import AnimatedHero from "@/components/animated-hero"
import IntroAnimation from "@/components/intro-animation"
import BubbleEffect from "@/components/bubble-effect"
import EnhancedAcrylicBackground from "@/components/enhanced-acrylic-background"
import ProductsSection from "@/components/about-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"
import AnimatedCircles from "@/components/AnimatedCircles"

export default function Home() {
  const [showBubbles, setShowBubbles] = useState(false)
  const [showFirstLine, setShowFirstLine] = useState(false)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showThirdLine, setShowThirdLine] = useState(false)
  const [activeSection, setActiveSection] = useState<"home" | "business" | "news" | "products" | "recruit" | "company" | "contact">("home")

  type SectionKey = "home" | "business" | "news" | "products" | "recruit" | "company" | "contact"
  const sectionRefs: Record<SectionKey, RefObject<HTMLElement | null>> = {
    home: useRef<HTMLElement | null>(null),
    business: useRef<HTMLElement | null>(null),
    news: useRef<HTMLElement | null>(null),
    products: useRef<HTMLElement | null>(null),
    recruit: useRef<HTMLElement | null>(null),
    company: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Check which section is currently in view
      for (const section of Object.keys(sectionRefs) as SectionKey[]) {
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

  // ページ初回マウント時に水玉アニメーションを表示
  useEffect(() => {
    setShowBubbles(true)
  }, [])

  const scrollToSection = (sectionId: SectionKey) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBubblesStart = () => {
    setShowBubbles(true)
  }

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} isVisible={true} />
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
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 overflow-hidden relative">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-[#000000]"
              >
                テクノロジーで
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-[#000000] mt-2"
              >
                <span className="bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-transparent bg-clip-text">
                  クリエイターの創造性
                </span>
                <span className="text-[#000000]">を加速する</span>
              </motion.p>
            </div>
            <div className="relative">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                className="text-base md:text-lg lg:text-2xl w-full text-[#000000]"
            >
                <p>CrestLabは創造力と革新的技術の融合でアニメ制作の新時代を切り開きます</p>
              <p>&nbsp;</p>
            </motion.div>
            </div>
          </div>
        </section>

        {/* About section - now using the AboutSection component */}
        <ProductsSection ref={sectionRefs.products} />

        {/* News section */}
        <section
          ref={sectionRefs.news}
          id="news"
          className="min-h-screen w-full relative"
        >
          <NewsSection />
        </section>

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
                    私たちは、多様なバックグラウンドと専門知識を持つ人材が集まることで、革新的なアイデアが生まれると信じています。</p>
                </div>

                <div className="mt-8">
                  <p className="text-[#696969] mb-6 leading-relaxed">
                    技術と創造性を融合し、新しい表現方法を模索する情熱的なチームの一員になりませんか？ 私たちは常に、創造性を大切にし、挑戦を恐れない人材を求めています。
                  </p>
                  <p className="text-[#696969] mb-6 leading-relaxed">
                    あなたのユニークな視点と専門知識が、次世代のアニメーション技術を形作る重要な役割を果たします。
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
                  <Image src="/recruit-office.jpg" alt="CrestLabオフィス" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-50"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-30"></div>
              </motion.div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.wantedly.com/companies/company_7832995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-bold rounded-md bg-white shadow-lg hover:opacity-90 transition-opacity duration-300 text-center"
              >
                <img src="/wantedly-logo.png" alt="Wantedly" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* COMPANY SECTION */}
        <section
          ref={sectionRefs.company}
          id="company"
          className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 md:px-8 bg-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative">
            COMPANY
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
          </h2>
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
            {/* CrestLabロゴ */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
              <img src="/company-logo.png" alt="CrestLab" className="w-64 md:w-72 lg:w-80 h-auto" />
            </div>
            {/* 会社概要テーブル */}
            <div className="w-full md:w-2/3">
              <table className="w-full text-left text-gray-700 mb-4">
                <tbody>
                  <tr>
                    <td className="py-1 pr-4 whitespace-nowrap">会社名</td>
                    <td className="py-1 px-2">|</td>
                    <td className="py-1">株式会社CrestLab</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 whitespace-nowrap">代表取締役</td>
                    <td className="py-1 px-2">|</td>
                    <td className="py-1">坂東 裕太</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 whitespace-nowrap">設立</td>
                    <td className="py-1 px-2">|</td>
                    <td className="py-1">2025年1月</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 whitespace-nowrap">資本金</td>
                    <td className="py-1 px-2">|</td>
                    <td className="py-1">300万円</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 whitespace-nowrap">所在地</td>
                    <td className="py-1 px-2">|</td>
                    <td className="py-1">〒101-0024<br />東京都千代田区神田和泉町1番地6-16ヤマトビル405</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
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
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <p className="text-lg text-[#696969] mb-8 text-center">ご相談・お問い合わせはこちらからお願いいたします</p>
            <a
              href="https://forms.gle/1UroMk9c2gswiEwP7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-8 py-4 text-lg font-bold text-white rounded-md bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] shadow-lg hover:opacity-90 transition-opacity duration-300 text-center"
              >
              お問い合わせはこちら
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}