"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF7F6]">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#FBCCC9]/95 border-b border-[#C44569]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-[#C44569] bg-[#C44569] hover:bg-[#A63A58] hover:border-[#A63A58] transition-all duration-200 font-sans text-sm sm:text-base"
          >
            <span className="text-base sm:text-lg text-white">←</span>
            <span className="hidden xs:inline text-white">Back to main page</span>
            <span className="xs:hidden text-white">Back</span>
          </Link>
          <div className="text-xs sm:text-sm text-[#C44569] font-sans font-medium">Gallery</div>
        </div>
      </div>
      {children}
    </div>
  )
}






