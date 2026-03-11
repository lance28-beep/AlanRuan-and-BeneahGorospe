"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

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
    <div className="min-h-screen bg-[#8B1E1E]">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#8B1E1E]/95 border-b border-[#E0C5A2]/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link
            href="/"
            className={`${montserrat.className} inline-flex items-center gap-1.5 sm:gap-2 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#F3C66C]/80 bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-200 text-sm sm:text-base uppercase`}
            style={{ letterSpacing: "0.08em" }}
          >
            <span className="text-base sm:text-lg">←</span>
            <span className="hidden xs:inline">Back to main page</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <div className={`${montserrat.className} text-xs sm:text-sm text-[#FEF7DB] font-medium uppercase`} style={{ letterSpacing: "0.2em" }}>
            Gallery
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}






