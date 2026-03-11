"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { siteConfig } from "@/content/site"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())
  const [currentReceptionImageIndex, setCurrentReceptionImageIndex] = useState(0)

  const receptionImages = [
    "/Details/La Vida Resort and Events Center.png",
    "/Details/La Vida Resort and Events Center 2.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReceptionImageIndex((prev) => (prev + 1) % receptionImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Venue information from site config
  const ceremonyVenueName = siteConfig.ceremony.location
  const ceremonyVenueDetail = ""
  const ceremonyAddress = siteConfig.ceremony.address
  const ceremonyVenue = `${ceremonyVenueName}, ${ceremonyAddress}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`

  const receptionVenueName = siteConfig.reception.location
  const receptionVenueDetail = ""
  const receptionAddress = siteConfig.reception.address
  const receptionVenue = `${receptionVenueName}, ${receptionAddress}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(receptionVenue)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section
      id="details"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#8B1E1E]"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_50%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.32)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />
      </div>

      {/* Flower decoration - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <img
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-y-[-1]"
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Flower decoration - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <img
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1] scale-y-[-1]"
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Flower decoration - left bottom corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <img
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65"
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Flower decoration - right bottom corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <img
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1]"
          // style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(34%) saturate(1637%) hue-rotate(309deg) brightness(91%) contrast(92%)' }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <div className="h-px w-16 sm:w-24 bg-[#F3C66C]/45" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F3C66C] shadow-[0_0_14px_rgba(243,198,108,0.7)]" />
          <div className="h-px w-16 sm:w-24 bg-[#F3C66C]/45" />
        </div>
        <h2
          className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FEF7DB] mb-3 sm:mb-4 uppercase`}
          style={{
            letterSpacing: "0.16em",
            textShadow: "0 4px 18px rgba(0,0,0,0.8)",
            fontWeight: 600,
          }}
        >
          Event Details
        </h2>
        <p
          className={`${montserrat.className} text-sm sm:text-base md:text-lg text-[#FDEFD0] font-normal max-w-xl mx-auto leading-relaxed tracking-[0.14em] px-4`}
        >
          Everything you need to know about our special day.
        </p>
      </div>

      {/* Venue and Event Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-10 md:space-y-14">
        
        {/* Ceremony Card */}
        <div className="relative group">
          {/* Subtle earth tone glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#F3C66C]/18 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative bg-[#FEF7DB] rounded-xl sm:rounded-2xl overflow-hidden border border-[#8B1E1E] shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.6)] hover:border-[#8B1E1E]/80 transition-all duration-300">
            {/* Venue Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] overflow-hidden">
              <Image
                src="/Details/goldenUnicorn.png"
                alt={siteConfig.ceremony.venue}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay with warm gold accent */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
                {/* <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-ephesis)] text-[#FFF7F6] mb-1 sm:mb-2 drop-shadow-lg">
                  Ceremony
                </p> */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight">
                  {siteConfig.ceremony.venue}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  {siteConfig.ceremony.address}
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-3 sm:p-5 md:p-7 lg:p-9">
              {/* Date Section */}
              <div className="text-center mb-5 sm:mb-8 md:mb-10">
                {/* Day name */}
                <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] font-semibold text-[#8B1E1E] uppercase tracking-[0.2em] mb-2 sm:mb-3">
                  {siteConfig.ceremony.day}
                </p>
                
                {/* Month - Script style with warm gold */}
                <div className="mb-2 sm:mb-4">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-ephesis)] text-[#8B1E1E] leading-none">
                    May
                  </p>
                </div>
                
                {/* Day and Year */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-7">
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-crimson)] font-normal text-[#8B1E1E] leading-none elegant-text-shadow">
                    23
                  </p>
                  <div className="h-10 sm:h-12 md:h-16 lg:h-20 w-[2px] bg-gradient-to-b from-[#C44569] via-[#C44569] to-[#C44569]" />
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-light text-[#8B1E1E] leading-none">
                    2026
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-r from-transparent via-[#C44569] to-[#C44569]" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C44569] rounded-full" />
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-l from-transparent via-[#C44569] to-[#C44569]" />
                </div>

                {/* Time */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#C44569] tracking-wide">
                  {siteConfig.ceremony.time}
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-gradient-to-br from-[#FBCCC9]/20 to-[#FEF7DB] rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border-4 border-[#8B1E1E]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8B1E1E] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#8B1E1E] mb-1.5 sm:mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-[#8B1E1E] leading-relaxed">
                      {ceremonyVenueName}
                    </p>
                    {ceremonyVenueDetail && (
                      <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-[#8B1E1E]/70 leading-relaxed mt-1">
                        {ceremonyVenueDetail}
                      </p>
                    )}
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-[#8B1E1E]/70 leading-relaxed">
                      {ceremonyAddress}
                    </p>
                  </div>
                  {/* QR Code for Ceremony - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-[#FEF7DB] p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#8B1E1E]/20 shadow-sm">
                      <QRCodeSVG
                        value={ceremonyMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#8B1E1E"
                        bgColor="#FEF7DB"
                      />
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-crimson)] text-[#8B1E1E]/60 italic text-center max-w-[80px]">
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(ceremonyMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#8B1E1E] hover:bg-[#8B1E1E]/80 text-white rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow"
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#FEF7DB] border-2 border-[#8B1E1E]/30 hover:border-[#8B1E1E]/50 hover:bg-[#8B1E1E]/10 text-[#8B1E1E] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy ceremony venue address"
                >
                  {copiedItems.has('ceremony') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#8B1E1E]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('ceremony') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reception Card */}
        {/* <div className="relative group">
  
          <div className="absolute -inset-1 bg-gradient-to-br from-[#C44569]/20 to-[#C44569]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
   
          <div className="relative elegant-card bg-[#FFF7F6] rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#C44569]/30 premium-shadow hover:border-[#C44569]/50 transition-all duration-300">
       
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] overflow-hidden">
              {receptionImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentReceptionImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={siteConfig.reception.venue}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              
          
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6 z-20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-ephesis)] text-[#FFF7F6] mb-1 sm:mb-2 drop-shadow-lg">
                  Reception
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight">
                  {siteConfig.reception.venue}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  {siteConfig.reception.address}
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-5 md:p-7 lg:p-9">
         
              <div className="text-center mb-5 sm:mb-8">
                {siteConfig.reception.time === "To follow after the ceremony" ? (
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#C44569] tracking-wide">
                    To follow after the ceremony
                  </p>
                ) : (
                  <>
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] font-semibold text-[#C44569] uppercase tracking-[0.2em] mb-2 sm:mb-3">
                      {siteConfig.reception.time === "After ceremony" ? "Starts" : "Starts at"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#C44569] tracking-wide">
                      {siteConfig.reception.time}
                    </p>
                  </>
                )}
              </div>

        
              <div className="bg-gradient-to-br from-[#FBCCC9]/20 to-[#FFF7F6] rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border-4 border-[#C44569]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C44569] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#C44569] mb-1.5 sm:mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-[#C44569] leading-relaxed">
                      {receptionVenueName}
                    </p>
                    {receptionVenueDetail && (
                      <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-[#C44569]/70 leading-relaxed mt-1">
                        {receptionVenueDetail}
                      </p>
                    )}
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-[#C44569]/70 leading-relaxed">
                      {receptionAddress}
                    </p>
                  </div>
              
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-[#FFF7F6] p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#C44569]/20 shadow-sm">
                      <QRCodeSVG
                        value={receptionMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#C44569"
                        bgColor="#FFF7F6"
                      />
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-crimson)] text-[#C44569]/60 italic text-center max-w-[80px]">
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

     
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(receptionMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#C44569] hover:bg-[#a63a59] text-white rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow"
                  aria-label="Get directions to reception venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(receptionVenue, 'reception')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#FFF7F6] border-2 border-[#C44569]/30 hover:border-[#C44569]/50 hover:bg-[#C44569]/10 text-[#C44569] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy reception venue address"
                >
                  {copiedItems.has('reception') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#C44569]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('reception') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Attire Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#F3C66C]/45" />
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3C66C]" />
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#F3C66C]/45" />
          </div>
          <h3
            className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#FEF7DB] mb-3 sm:mb-4 uppercase`}
            style={{ letterSpacing: "0.16em", textShadow: "0 4px 16px rgba(0,0,0,0.8)" }}
          >
            Attire Guidelines
          </h3>
          <p
            className={`${montserrat.className} text-sm sm:text-base md:text-lg text-[#FDEFD0] font-normal`}
          >
            Please dress according to the guidelines below.
          </p>
        </div>

        {/* Attire Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Principal Sponsor Attire */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#F3C66C]/18 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-[#FDF6EA] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-9 border border-[#E0C5A2] shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.6)] hover:border-[#F3C66C]/80 transition-all duration-300">
              <h4
                className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8B1E1E] mb-4 sm:mb-5 md:mb-6 uppercase tracking-[0.16em] text-center px-2`}
              >
                Guest Attire
              </h4>

              {/* Copy: follow color palette */}
              <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-[#8B1E1E]/90 font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xl mx-auto px-3">
                Please follow the color palette below for your outfit.
              </p>

              {/* Principal sponsor attire image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] max-w-2xl mx-auto rounded-lg sm:rounded-xl overflow-hidden border border-[#C44569]/30 mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/Details/dressAttire.png"
                  alt="Principal sponsor attire — follow the color palette"
                  fill
                  className="object-contain bg-[#FFF7F6]/50 p-2 sm:p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                />
              </div>

              {/* Color palette for principal sponsors */}
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-5 sm:mb-6 md:mb-7 px-2">
                {["#8B1E1E", "#C45A3B", "#D97B2D", "#F3C66C", "#F5D9A6"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md border border-white ring-2 ring-[#F3C66C]/40 hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              
              {/* Sponsors Dress Code Text */}
              <div className="text-center pt-3 sm:pt-4 border-t border-[#E0C5A2]/70 px-3 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed mb-2">
                  <span className="font-semibold">Dress code:</span> Semi‑formal.
                </p>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#5A3A32] leading-relaxed mb-2">
                  <span className="font-semibold">Palette inspiration:</span> sunset tones &mdash; deep red, warm terracotta, soft gold, champagne, and blush.
                </p>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#5A3A32] leading-relaxed italic">
                  Kindly avoid jeans. The colors are a guide, so please feel free to choose what feels comfortable and elegant for you.
                </p>
              </div>
            </div>
          </div>

          {/* Guest Attire */}
          {/* <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#F3C66C]/18 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-[#FDF6EA] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-9 border border-[#E0C5A2] shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.6)] hover:border-[#F3C66C]/80 transition-all duration-300">
              <h4
                className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8B1E1E] mb-4 sm:mb-5 md:mb-6 uppercase tracking-[0.16em] text-center px-2`}
              >
                Guest Attire
              </h4>

              <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-[#C44569]/90 font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xl mx-auto px-3">
                Please follow the color palette below for your outfit.
              </p>

        
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] max-w-2xl mx-auto rounded-lg sm:rounded-xl overflow-hidden border border-[#C44569]/30 mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/Details/guest (3).png"
                  alt="Guest attire inspiration — follow the color palette"
                  fill
                  className="object-contain bg-[#FFF7F6]/50 p-2 sm:p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                />
              </div>

        
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-5 sm:mb-6 md:mb-7 px-2">
                {["#CBA990", "#EBD3B9", "#F5E1C0"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md border-2 border-white ring-2 ring-[#C44569]/30 hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              
 
              <div className="text-center pt-3 sm:pt-4 border-t border-[#C44569]/20 px-3 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] text-[#C44569] leading-relaxed mb-3 sm:mb-4">
                  <span className="font-semibold">Semi-Formal</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Important Reminders Section */}
        <div className="relative group mt-10 sm:mt-14 md:mt-16">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#F3C66C]/18 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          <div className="relative bg-[#FDF6EA] backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border border-[#E0C5A2] shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.6)] hover:border-[#F3C66C]/80 transition-all duration-300">
            <h4
              className={`${montserrat.className} text-lg sm:text-xl md:text-2xl font-semibold text-[#8B1E1E] mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.16em] text-center`}
            >
              Important Reminders
            </h4>
            
            {/* Reminders List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Attendance Limited */}
              <div className="bg-gradient-to-br from-[#F3C66C]/10 via-[#FDF6EA] to-[#FDF6EA] rounded-xl p-5 sm:p-6 md:p-7 border border-[#E0C5A2]">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed">
                  <span className="font-semibold">Invitation Only:</span> As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation.
                </p>
              </div>

              {/* No Boxed Gifts */}
              <div className="bg-gradient-to-br from-[#F3C66C]/10 via-[#FDF6EA] to-[#FDF6EA] rounded-xl p-5 sm:p-6 md:p-7 border border-[#E0C5A2]">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed">
                  <span className="font-semibold">Gift Policy:</span> We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected.
                </p>
              </div>

              {/* Adults Only */}
              <div className="bg-gradient-to-br from-[#F3C66C]/10 via-[#FDF6EA] to-[#FDF6EA] rounded-xl p-5 sm:p-6 md:p-7 border border-[#E0C5A2]">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed">
                  <span className="font-semibold">Adults-Only Event:</span> We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. (Children in our family and the entourage are the exception)
                </p>
              </div>

              {/* No Photos */}
              <div className="bg-gradient-to-br from-[#F3C66C]/10 via-[#FDF6EA] to-[#FDF6EA] rounded-xl p-5 sm:p-6 md:p-7 border border-[#E0C5A2]">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed">
                  <span className="font-semibold">Photo Policy:</span> We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories.
                </p>
              </div>

              {/* RSVP Contact */}
              <div className="bg-gradient-to-br from-[#F3C66C]/10 via-[#FDF6EA] to-[#FDF6EA] rounded-xl p-5 sm:p-6 md:p-7 border border-[#E0C5A2]">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] leading-relaxed">
                  <span className="font-semibold">RSVP Contact:</span> Please reach out to {siteConfig.details.rsvp.contact} for any questions regarding your attendance.
                </p>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="mt-7 sm:mt-8 md:mt-9 pt-6 sm:pt-7 md:pt-8 border-t border-[#E0C5A2]/70">
              <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#3C2A25] text-center leading-relaxed italic">
                Thank you for your understanding and cooperation. We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}