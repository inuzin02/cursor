import Image from "next/image"

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

        {/* Copyright */}
        <div>
          <p className="text-[#696969] text-sm">&copy; {new Date().getFullYear()} CrestLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
