"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/section"
import Image from "next/image"
import { motion } from "motion/react"
import { Montserrat } from "next/font/google"
import { siteConfig } from "@/content/site"
import Counter from "@/components/Counter"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownUnitProps {
  value: number
  label: string
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

/*
const cinzelRegular = Cinzel({
  subsets: ["latin"],
  weight: "400",
})
*/

function CountdownUnit({ value, label }: CountdownUnitProps) {
  const places = value >= 100 ? [100, 10, 1] : [10, 1]

  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      {/* Card container */}
      <div className="relative w-full max-w-[88px] sm:max-w-[96px] md:max-w-[110px] lg:max-w-[120px]">
        {/* Main card */}
        <div className="relative rounded-xl sm:rounded-2xl border border-[#C44569]/20 bg-white/40 backdrop-blur-sm px-2.5 py-2.5 sm:px-3.5 sm:py-3.5 md:px-4 md:py-4 shadow-lg shadow-[#FBCCC9]/20">
          <div className="relative z-10 flex items-center justify-center text-[#FEF7DB]">
            <Counter
              value={value}
              places={places}
              fontSize={26}
              padding={4}
              gap={2}
              textColor="#FEF7DB"
              fontWeight={800}
              borderRadius={6}
              horizontalPadding={3}
              gradientHeight={0}
              gradientFrom="transparent"
              gradientTo="transparent"
              counterStyle={{
                backgroundColor: "transparent",
              }}
              digitStyle={{
                minWidth: "1.15ch",
                fontFamily: "Arial, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: "#FEF7DB",
              }}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <span className="text-[10px] sm:text-xs md:text-sm font-inter font-semibold uppercase tracking-[0.16em] text-[#FEF7DB]/80 drop-shadow-none">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const ceremonyDate = siteConfig.ceremony.date
  const ceremonyTimeDisplay = siteConfig.ceremony.time
  const [ceremonyMonth = "June", ceremonyDayRaw = "7", ceremonyYear = "2026"] = ceremonyDate.split(" ")
  const ceremonyDayNumber = ceremonyDayRaw.replace(/[^0-9]/g, "") || "7"
  const { brideNickname, groomNickname } = siteConfig.couple
  const ceremonyDay = siteConfig.ceremony.day || "Thursday"
  const ceremonyDayShort = ceremonyDay.slice(0, 3).toUpperCase()
  // Parse the date: December 20, 2025 at 10:30 AM PH Time (GMT+0800)
  // Extract time from "10:30 A.M., PH Time" -> "10:30 A.M."
  const timeStr = ceremonyTimeDisplay.split(",")[0].trim() // "10:30 A.M."
  
  // Create date string in ISO-like format for better parsing
  // December 20, 2025 -> 2025-12-20
  const monthMap: { [key: string]: string } = {
    "January": "01", "February": "02", "March": "03", "April": "04",
    "May": "05", "June": "06", "July": "07", "August": "08",
    "September": "09", "October": "10", "November": "11", "December": "12"
  }
  const monthNum = monthMap[ceremonyMonth] || "12"
  const dayNum = ceremonyDayNumber.padStart(2, "0")
  
  // Parse time: "3:00 PM" -> 15:00
  const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i)
  let hour = 15 // default 3 PM
  let minutes = 0
  
  if (timeMatch) {
    hour = parseInt(timeMatch[1])
    minutes = parseInt(timeMatch[2])
    const ampm = timeMatch[3].toUpperCase()
    if (ampm === "PM" && hour !== 12) hour += 12
    if (ampm === "AM" && hour === 12) hour = 0
  }
  
  // Create date in GMT+8 (PH Time)
  // Using Date.UTC and adjusting for GMT+8 offset (subtract 8 hours to convert GMT+8 to UTC)
  const parsedTargetDate = new Date(Date.UTC(
    parseInt(ceremonyYear),
    parseInt(monthNum) - 1,
    parseInt(dayNum),
    hour - 8, // Convert GMT+8 to UTC
    minutes,
    0
  ))
  
  const targetTimestamp = Number.isNaN(parsedTargetDate.getTime())
    ? new Date(Date.UTC(2026, 1, 8, 8, 0, 0)).getTime() // Fallback: February 8, 2026, 4:00 PM GMT+8 = 8:00 AM UTC
    : parsedTargetDate.getTime()

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = targetTimestamp
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetTimestamp])

  return (
    <Section
      id="countdown"
      className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#8B1E1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_50%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.3)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>
      {/* Flower decoration - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-left.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-y-[-1]"
          priority={false}
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Flower decoration - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-left.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1] scale-y-[-1]"
          priority={false}
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Flower decoration - left bottom corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-left.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65"
          priority={false}
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>
      
      {/* Flower decoration - right bottom corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-left.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1]"
          priority={false}
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>
      
      {/* Monogram - centered at top */}
      <div className="relative flex justify-center pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: -18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] border-2 border-[#F3C66C]/80 shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
              <span
                className="text-3xl sm:text-[2.1rem] md:text-[2.4rem] leading-none font-bold select-none"
                style={{
                  color: "#8B1E1E",
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.7), 0 0 10px rgba(243,198,108,0.7)",
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
                aria-label={`${groomNickname} and ${brideNickname} monogram`}
              >
                囍
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full shadow-[0_0_14px_rgba(243,198,108,0.7)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
        </div>
        
        <h2
          className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.9rem] text-[#FEF7DB] mb-2 sm:mb-3 md:mb-4`}
          style={{
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textShadow: "0 4px 18px rgba(0,0,0,0.75)",
            fontWeight: 600,
          }}
        >
          Counting down to our forever
        </h2>
        
        <p
          className={`${montserrat.className} text-xs sm:text-sm md:text-base lg:text-lg text-[#FDEFD0] font-normal max-w-xl mx-auto leading-relaxed px-2`}
        >
          Every heartbeat brings us closer to the moment when two hearts become one. Join {groomNickname} and {brideNickname} as they count down to forever.
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1 h-1 bg-[#F3C66C]/80 rounded-full" />
          <div className="w-1 h-1 bg-[#F3C66C]/40 rounded-full" />
          <div className="w-1 h-1 bg-[#F3C66C]/80 rounded-full" />
        </div>
      </div>

      {/* Save The Date Card */}
      <div className="relative z-10">
        <div className="flex justify-center px-3 sm:px-4">
          <div className="max-w-2xl w-full">

            {/* Numeric countdown: Days / Hours / Minutes / Seconds */}
            <div className="mt-2 sm:mt-4 md:mt-6">
              <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
                {/* 2x2 on mobile, 4 in a row from md+ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-md md:max-w-xl">
                  <CountdownUnit value={timeLeft.days} label="Days" />
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                  <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
            {/* Date Section - harmonized with hero date block */}
            <div className="relative sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="w-full max-w-2xl mx-auto">
                <div
                  className={`${montserrat.className} flex flex-col items-center gap-1.5 sm:gap-2.5 md:gap-3 text-[#FEF7DB] font-semibold`}
                >
                  {/* Month */}
                  <span
                    className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.38em] sm:tracking-[0.46em]"
                  >
                    {ceremonyMonth}
                  </span>

                  {/* Day and time row */}
                  <div className="flex w-full items-center gap-2 sm:gap-4 md:gap-5">
                    {/* Day of week & divider */}
                    <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2.5">
                      <span className="h-[0.5px] flex-1 bg-[#F3C66C]/35" />
                      <span
                        className="text-[0.6rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.38em]"
                      >
                        {ceremonyDayShort}
                      </span>
                      <span className="h-[0.5px] w-6 sm:w-8 md:w-10 bg-[#F3C66C]/35" />
                    </div>

                    {/* Day number */}
                    <div className="relative flex items-center justify-center px-3 sm:px-4 md:px-5">
                      <span
                        className="relative text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] leading-none tracking-[0.1em]"
                        style={{
                          fontFamily:
                            '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 700,
                          textShadow:
                            "0 6px 22px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.9)",
                          color: "#FEF7DB",
                        }}
                      >
                        {ceremonyDayNumber.padStart(2, "0")}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="flex flex-1 items-center gap-1.5 sm:gap-2.5">
                      <span className="h-[0.5px] w-6 sm:w-8 md:w-10 bg-[#F3C66C]/35" />
                      <span
                        className="text-[0.6rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.38em]"
                      >
                        {ceremonyTimeDisplay.split(",")[0]}
                      </span>
                      <span className="h-[0.5px] flex-1 bg-[#F3C66C]/35" />
                    </div>
                  </div>

                  {/* Year */}
                  <span className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.38em] sm:tracking-[0.46em]">
                    {ceremonyYear}
                  </span>
                </div>
              </div>
            </div>
      </div>
    </Section>
  )
}
