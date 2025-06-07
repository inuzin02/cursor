import Image from "next/image"
import { Instagram, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo centered */}
        <div className="mb-3">
          <div className="h-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%81%E6%A5%AD%E3%83%AD%E3%82%B3%E3%82%99CrestLab%E9%BB%92%20%281%29-hr7tOAIOUaUaTX8ngRGpLnCCBz7T2G.png"
              alt="CrestLab"
              width={160}
              height={40}
              className="h-full w-auto"
            />
          </div>
        </div>

        {/* Social media links below logo */}
        <div className="flex space-x-4 mb-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </a>
          <a
            href="#contact"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-[#696969] text-sm">&copy; {new Date().getFullYear()} CrestLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
