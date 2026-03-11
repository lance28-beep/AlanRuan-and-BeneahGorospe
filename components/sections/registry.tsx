"use client"

import { Section } from "@/components/section"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Registry() {
  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#8B1E1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_52%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.3)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" />
      </div> */}

      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full shadow-[0_0_14px_rgba(243,198,108,0.7)]" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
        </div>
        
        <h2
          className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FEF7DB] mb-2 sm:mb-3 md:mb-4`}
          style={{
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textShadow: "0 4px 18px rgba(0,0,0,0.8)",
          }}
        >
          Gift Guide
        </h2>
        
        <p
          className={`${montserrat.className} text-xs sm:text-sm md:text-base lg:text-lg text-[#FDEFD0] font-normal max-w-2xl mx-auto leading-relaxed px-2`}
        >
          Your presence is the greatest gift. However, if you wish to honor us with a gift, a contribution toward our future would be deeply appreciated.



        </p>
        
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className={`${montserrat.className} text-xs sm:text-sm text-[#FDEFD0] italic`}>
            Thank you from the bottom of our hearts.
          </p>
        </div>
      </div>
    </Section>
  )
}
