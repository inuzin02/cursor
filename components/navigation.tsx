"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
  isVisible: boolean
}

export default function Navigation({ activeSection, onNavigate, isVisible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT US" },
    { id: "news", label: "NEWS" },
    { id: "recruit", label: "RECRUIT" },
    { id: "company", label: "COMPANY" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button className="h-8 block" onClick={() => onNavigate('home')} style={{background:'none',border:'none',padding:0,cursor:'pointer'}}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%81%E6%A5%AD%E3%83%AD%E3%82%B3%E3%82%99CrestLab%E9%BB%92%20%281%29-hr7tOAIOUaUaTX8ngRGpLnCCBz7T2G.png"
            alt="CrestLab"
            width={160}
            height={40}
            className="h-full w-auto"
          />
        </button>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE]"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen((v) => !v)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* モバイルメニュー */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col items-center py-4 z-50"
          >
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => {
                    setMenuOpen(false); onNavigate(item.id);
                  }}
                  className={`block w-full text-center py-3 text-lg font-medium transition-colors ${
                    activeSection === item.id ? "text-black" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
