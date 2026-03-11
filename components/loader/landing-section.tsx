"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface LandingSectionProps {
  onOpenInvitation: () => void
}

export default function LandingSection({ onOpenInvitation }: LandingSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const weddingDate = new Date("2026-05-09T00:00:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOpenClick = () => {
    if (isExiting) return
    setIsExiting(true)
    // Allow fade-out animation before moving to opening stage
    setTimeout(() => {
      onOpenInvitation()
    }, 500)
  }

  return (
    <section className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-[#89251E]">
      {/* Animated cloud pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="clouds" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5 10 Q7 8 10 10 Q13 8 15 10 Q13 12 10 10 Q7 12 5 10" fill="#F3C66C" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#clouds)" />
        </svg>
      </div>

      {/* Golden sun/moon glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#F3C66C]/30 via-[#F3C66C]/10 to-transparent blur-3xl" />
      </div>

      {/* Animated floating cranes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crane 1 */}
        {/* <svg 
          className="absolute w-16 h-16 text-[#FCEFDD]/40 animate-[float_8s_ease-in-out_infinite]" 
          style={{ top: '15%', left: '10%' }}
          viewBox="0 0 64 64" 
          fill="currentColor"
        >
          <path d="M52 12c-2 0-4 1-5 3l-15 20-8-5c-2-1-4 0-5 2l-3 8 12 8 18-28c1-2 1-5-1-7-1-1-2-1-3-1zM20 45l-4 7h8l-4-7z"/>
        </svg> */}
        {/* Crane 2 */}
        {/* <svg 
          className="absolute w-12 h-12 text-[#FCEFDD]/30 animate-[float_10s_ease-in-out_infinite_1s]" 
          style={{ top: '25%', right: '15%' }}
          viewBox="0 0 64 64" 
          fill="currentColor"
        >
          <path d="M52 12c-2 0-4 1-5 3l-15 20-8-5c-2-1-4 0-5 2l-3 8 12 8 18-28c1-2 1-5-1-7-1-1-2-1-3-1zM20 45l-4 7h8l-4-7z"/>
        </svg> */}
        {/* Crane 3 */}
        {/* <svg 
          className="absolute w-10 h-10 text-[#FCEFDD]/20 animate-[float_12s_ease-in-out_infinite_2s]" 
          style={{ top: '35%', left: '20%' }}
          viewBox="0 0 64 64" 
          fill="currentColor"
        >
          <path d="M52 12c-2 0-4 1-5 3l-15 20-8-5c-2-1-4 0-5 2l-3 8 12 8 18-28c1-2 1-5-1-7-1-1-2-1-3-1zM20 45l-4 7h8l-4-7z"/>
        </svg> */}
      </div>

      {/* Lotus flowers at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        {/* Lotus SVG decorations */}
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          {/* Lily pads */}
          <ellipse cx="100" cy="180" rx="60" ry="20" fill="#2d5a3d" opacity="0.6"/>
          <ellipse cx="300" cy="190" rx="50" ry="15" fill="#2d5a3d" opacity="0.5"/>
          <ellipse cx="900" cy="185" rx="55" ry="18" fill="#2d5a3d" opacity="0.6"/>
          <ellipse cx="1100" cy="175" rx="45" ry="15" fill="#2d5a3d" opacity="0.5"/>
          
          {/* Lotus flower left */}
          <g transform="translate(80, 120)">
            <path d="M0 60 Q10 40 0 20 Q-10 40 0 60" fill="#F3C66C" opacity="0.9"/>
            <path d="M0 60 Q20 45 15 20 Q5 40 0 60" fill="#FCEFDD" opacity="0.8"/>
            <path d="M0 60 Q-20 45 -15 20 Q-5 40 0 60" fill="#FCEFDD" opacity="0.8"/>
            <path d="M0 60 Q30 50 25 30 Q10 45 0 60" fill="#F3C66C" opacity="0.7"/>
            <path d="M0 60 Q-30 50 -25 30 Q-10 45 0 60" fill="#F3C66C" opacity="0.7"/>
          </g>
          
          {/* Lotus flower right */}
          <g transform="translate(1100, 110)">
            <path d="M0 60 Q10 40 0 20 Q-10 40 0 60" fill="#F3C66C" opacity="0.9"/>
            <path d="M0 60 Q20 45 15 20 Q5 40 0 60" fill="#FCEFDD" opacity="0.8"/>
            <path d="M0 60 Q-20 45 -15 20 Q-5 40 0 60" fill="#FCEFDD" opacity="0.8"/>
            <path d="M0 60 Q30 50 25 30 Q10 45 0 60" fill="#F3C66C" opacity="0.7"/>
            <path d="M0 60 Q-30 50 -25 30 Q-10 45 0 60" fill="#F3C66C" opacity="0.7"/>
          </g>

          {/* Smaller lotus buds */}
          <g transform="translate(250, 150)">
            <path d="M0 40 Q8 25 0 10 Q-8 25 0 40" fill="#F3C66C" opacity="0.7"/>
            <path d="M0 40 Q12 30 8 15 Q2 28 0 40" fill="#FCEFDD" opacity="0.6"/>
          </g>
          <g transform="translate(950, 140)">
            <path d="M0 40 Q8 25 0 10 Q-8 25 0 40" fill="#F3C66C" opacity="0.7"/>
            <path d="M0 40 Q-12 30 -8 15 Q-2 28 0 40" fill="#FCEFDD" opacity="0.6"/>
          </g>
        </svg>
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-[#F3C66C]/30 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-24 h-24 border-r-2 border-t-2 border-[#F3C66C]/30 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-24 h-24 border-l-2 border-b-2 border-[#F3C66C]/30 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#F3C66C]/30 rounded-br-lg" />
      
      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 max-w-xl w-full transition-all duration-700 ease-out ${
          !mounted || isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Double Happiness Symbol with glow */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-[#F3C66C]/40 blur-xl animate-pulse" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#d4a84a] flex items-center justify-center shadow-2xl border-4 border-[#F3C66C]/50">
            <span className="text-[#89251E] text-4xl font-bold drop-shadow-sm">囍</span>
          </div>
        </div>
        
        {/* Together with their families */}
        <p className="text-[#FCEFDD]/80 text-xs sm:text-sm md:text-base tracking-[0.28em] sm:tracking-[0.32em] uppercase mb-3 sm:mb-4 font-light">
          Together with their families
        </p>
        
        {/* Names */}
        <h1 className="text-[#FCEFDD] text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-great-vibes)] mb-1 sm:mb-2 drop-shadow-lg text-balance leading-tight">
          Alan Ruan
        </h1>
        <p className="text-[#F3C66C] text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-great-vibes)] mb-1 sm:mb-2">
          and
        </p>
        <h1 className="text-[#FCEFDD] text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-great-vibes)] mb-4 sm:mb-6 drop-shadow-lg text-balance leading-tight">
          Beneah Gorospe
        </h1>
        
        {/* Invite text */}
        <p className="text-[#FCEFDD]/80 text-xs sm:text-sm md:text-base tracking-[0.18em] sm:tracking-[0.24em] mb-2">
          invite you to celebrate their marriage
        </p>
        
        {/* Decorative divider */}
        <div className="flex items-center gap-3 sm:gap-4 my-4 sm:my-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#F3C66C]" />
          <svg className="w-4 h-4 text-[#F3C66C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/>
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#F3C66C]" />
        </div>
        
        <p className="text-[#F3C66C] text-xl sm:text-2xl md:text-3xl tracking-[0.32em] sm:tracking-[0.4em] mb-1 sm:mb-2 font-semibold">
          May 9, 2026
        </p>
        <p className="text-[#FCEFDD]/90 text-sm sm:text-base md:text-xl tracking-wide mb-8 sm:mb-10">
          New York City
        </p>
        
        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Sec" },
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center min-w-[3.5rem]">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg bg-[#432F2A]/60 backdrop-blur-sm border border-[#F3C66C]/40 flex items-center justify-center shadow-lg transition-all duration-300 hover:border-[#F3C66C]/60 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-[#F3C66C] text-xl sm:text-2xl md:text-3xl font-semibold tabular-nums">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-[#FCEFDD]/70 text-[0.65rem] sm:text-xs md:text-sm mt-1.5 sm:mt-2 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Open Invitation Button */}
        <div className="w-full flex justify-center mt-2 sm:mt-4">
          <Button
            onClick={handleOpenClick}
            className="group relative w-full max-w-xs sm:max-w-sm bg-gradient-to-r from-[#F3C66C] to-[#d4a84a] hover:from-[#d4a84a] hover:to-[#F3C66C] text-[#432F2A] px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg rounded-full shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-[#F3C66C]/50 font-semibold tracking-wide overflow-hidden"
          >
            <span className="relative z-10">Open Invitation</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3C66C]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(20px); }
          75% { transform: translateY(-25px) translateX(5px); }
        }
      `}</style>
    </section>
  )
}
