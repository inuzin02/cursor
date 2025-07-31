"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BarChartHorizontal, TrendingUp, ArrowRight, Timer, BarChart3, Workflow } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnicraLandingPageV4() {
  const openContactForm = () => {
    window.open("https://forms.gle/1gArrfzG1wVyXXNp9", "_blank")
  }

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    },
  }

  return (
    <>
      <head>
        <title>ANICRA - AIでクリエイターの創造性を加速する | CrestLab Inc.</title>
        <meta name="description" content="ANICRA（アニクラ）は、AI技術を活用したアニメ制作支援基盤。原画をもとに中割・仕上げを自動化し、制作時間を大幅に短縮。クリエイターの創造性を加速します。" />
        <meta name="keywords" content="ANICRA, アニクラ, アニメ制作, AI, 自動化, 中割, 仕上げ, 制作支援, CrestLab" />
        <meta property="og:title" content="ANICRA - AIでクリエイターの創造性を加速する" />
        <meta property="og:description" content="ANICRA（アニクラ）は、AI技術を活用したアニメ制作支援基盤。原画をもとに中割・仕上げを自動化し、制作時間を大幅に短縮。" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CrestLab Inc." />
        <meta property="og:image" content="/anicra-product.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ANICRA - AIでクリエイターの創造性を加速する" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ANICRA - AIでクリエイターの創造性を加速する" />
        <meta name="twitter:description" content="ANICRA（アニクラ）は、AI技術を活用したアニメ制作支援基盤。原画をもとに中割・仕上げを自動化し、制作時間を大幅に短縮。" />
        <meta name="twitter:image" content="/anicra-product.png" />
      </head>
      <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="w-32 md:w-40">
              <Image src="/ANICRA_logo.png" alt="ANICRA Logo" width={160} height={42} priority />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={openContactForm}
                className="bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2 border-0"
              >
                お問い合わせ
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="h-screen w-full relative overflow-hidden">
          <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="h-full w-full">
            <Image
              src="/anicra-product-hero.png"
              alt="Anime style cityscape"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 md:py-32 bg-[#F7F8FA] relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-pink-50/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10"
          >
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                AIで、アニメ制作の
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  未来を加速する。
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                ANICRA（アニクラ）は、アニメ制作現場の「人手不足」「納期圧迫」「仕上げ工数の増加」といった課題を、AIの力で解決する新しい制作支援基盤です。
                <br />
                <br />
                原画をもとに中割・仕上げを自動化することで、制作時間を大幅に短縮し、少人数でも高品質なアニメーション制作を可能にします。
              </motion.p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/storyboard.png"
                alt="From storyboard to final anime scene"
                fill
                style={{ objectFit: "cover" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Use Case Section */}
        <section className="py-24 md:py-32 bg-white">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              想定ユースケース
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-16"
            ></motion.div>
            <motion.div 
              variants={itemVariants}
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/ANICRA_usecase.png"
                alt="Process: from keyframes to animation"
                width={1200}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Expected Effects Section */}
        <section className="py-24 md:py-32 bg-[#F7F8FA]">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              導入により期待される効果
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-16"
            ></motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Users className="w-10 h-10 text-cyan-500" />,
                  title: "制作会社様の負担軽減",
                  description: "進行管理が簡素化、スタッフの負荷軽減",
                },
                {
                  icon: <BarChartHorizontal className="w-10 h-10 text-pink-500" />,
                  title: "スケジュール短縮",
                  description: "最短納期での納品可能、リテイク率も大幅低下",
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-purple-500" />,
                  title: "品質の向上",
                  description: "バラつきのない素材納品、修正工数の大幅削減による作画品質の向上",
                },
              ].map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-white rounded-2xl shadow-lg border-none p-8 h-full transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-0 flex flex-col items-center text-center">
                      <div className="mb-6">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Main Features Section */}
        <section className="py-24 md:py-32 bg-white">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              ANICRAの主な特徴
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-16"
            ></motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Timer className="w-10 h-10 text-white" />,
                  bgColor: "from-[#9AECEA] to-[#a3f0ee]",
                  title: "わずか数十秒で動画仕上が完了！",
                },
                {
                  icon: <BarChart3 className="w-10 h-10 text-white" />,
                  bgColor: "from-[#F6B7EE] to-[#f9c7f3]",
                  title: "実際に工数が7割削減！",
                },
                {
                  icon: <Workflow className="w-10 h-10 text-white" />,
                  bgColor: "from-[#a9c1ff] to-[#c0d0ff]",
                  title: "制作現場のワークフローに適した導入が可能",
                },
              ].map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-white rounded-2xl shadow-lg border-none p-8 h-full transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-0 flex flex-col items-center text-center">
                      <div
                        className={`w-20 h-20 mb-6 bg-gradient-to-br ${item.bgColor} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-pink-900/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-2xl font-bold text-cyan-300 mb-4">
              トライアル受付中
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              まずはお気軽にご相談ください
            </h2>
            <div>
              <Button
                onClick={openContactForm}
                size="lg"
                className="group bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-gray-900 font-bold text-xl py-8 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                お問い合わせはこちら
                <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-32 mb-4">
                <a 
                  href="https://crestlab-inc.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <Image src="/logo_white.png" alt="CrestLab Logo" width={128} height={34} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">運営会社</h3>
              <p className="font-semibold text-gray-200">株式会社CrestLab</p>
              <p className="text-sm mt-2">
                〒101-0024
                <br />
                東京都千代田区神田和泉町1番地6-16
                <br />
                ヤマトビル405
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://crestlab-inc.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    運営会社
                  </a>
                </li>
                <li>
                  <a 
                    href="https://crestlab.notion.site/2403d3145bfc80c2a0e2cf5610b623e3?pvs=74" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfgJJtW-MxbWj2jSn4_brXNvtiW5Qhgwy4AKBhMLnM9dKurgA/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} CrestLab Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
