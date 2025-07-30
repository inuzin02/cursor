"use client"

import { useState, useEffect, forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Using forwardRef to properly handle the ref from the parent component
const ProductsSection = forwardRef<HTMLElement, any>((props, ref) => {
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

    const section = document.getElementById("products")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="products"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-white py-16"
    >
      {/* 動的背景エフェクト */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 浮遊する水玉 */}
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 20 + 10
          return (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50 - Math.random() * 100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
                scale: [1, 1.2 + Math.random() * 0.5, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
            />
          )
        })}
        
        {/* より大きな水玉 */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 40 + 30
          return (
            <motion.div
              key={`large-${i}`}
              className="absolute bg-gradient-to-r from-[#F6B7EE] to-[#9AECEA] rounded-full opacity-15"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80 - Math.random() * 120, 0],
                x: [0, Math.random() * 150 - 75, 0],
                rotate: [0, -360],
                scale: [1, 0.8 + Math.random() * 0.4, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4
              }}
            />
          )
        })}
        
        {/* 小さな水玉 */}
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 8 + 4
          return (
            <motion.div
              key={`small-${i}`}
              className="absolute bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30 - Math.random() * 60, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, 180],
                scale: [1, 1.5 + Math.random() * 0.5, 1]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          )
        })}
        
        {/* 波のような動的ライン */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9AECEA]/20 to-transparent"
          animate={{
            x: [-100, 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F6B7EE]/20 to-transparent"
          animate={{
            x: [100, -100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* PRODUCTS heading with underline */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-12 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        PRODUCTS
        <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"></span>
      </motion.h2>

      {/* Product Card Container */}
      <div className="max-w-3xl w-full relative z-10">
        <Link href="/products" className="block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ 
              duration: 0.8,
              hover: { duration: 0.3 }
            }}
            className="cursor-pointer"
          >
            {/* Product Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-gray-100 transition-all duration-300">
              <div className="relative w-full" style={{ aspectRatio: "21/9" }}>
                <Image
                  src="/anicra-product.png"
                  alt="ANICRA - AIでクリエイターの創造性を加速する"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Bounce Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => {
                const size = Math.random() * 12 + 6
                return (
                  <motion.div
                    key={`bounce-${i}`}
                    className="absolute bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] rounded-full opacity-30"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 40 - 20, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                )
              })}
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  )
})

// Add display name for better debugging
ProductsSection.displayName = "ProductsSection"

export default ProductsSection
