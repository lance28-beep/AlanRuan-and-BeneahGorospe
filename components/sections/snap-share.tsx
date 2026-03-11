"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Instagram, Facebook, Twitter, Share2, Copy, Download, Check } from "lucide-react"
import { Section } from "@/components/section"
import { QRCodeCanvas } from "qrcode.react"
import { siteConfig } from "@/content/site"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

/*
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
})
*/

export function SnapShare() {
  const [copiedHashtagIndex, setCopiedHashtagIndex] = useState<number | null>(null)
  const [copiedAllHashtags, setCopiedAllHashtags] = useState(false)
  const [copiedDriveLink, setCopiedDriveLink] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const websiteUrl = typeof window !== "undefined" ? window.location.href : "https://example.com"
  // https://drive.google.com/drive/folders/1_40IPBZ0bF26uPV7ngLgjyPnUoN4V07Y?usp=sharing
  const driveLink = "https://drive.google.com/drive/folders/1_40IPBZ0bF26uPV7ngLgjyPnUoN4V07Y?usp=sharing"
  const hashtags = [siteConfig.snapShare.hashtag]
  const allHashtagsText = hashtags.join(" ")
  const groomNickname = siteConfig.couple.groomNickname
  const brideNickname = siteConfig.couple.brideNickname
  const sanitizedGroomName = groomNickname.replace(/\s+/g, "")
  const sanitizedBrideName = brideNickname.replace(/\s+/g, "")

  const shareText = `Celebrate ${groomNickname} & ${brideNickname}'s wedding! Explore the details and share your special memories: ${websiteUrl} ${allHashtagsText} ✨`

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])


  const shareOnSocial = (platform: "instagram" | "facebook" | "twitter" | "tiktok") => {
    const encodedUrl = encodeURIComponent(websiteUrl)
    const encodedText = encodeURIComponent(shareText)

    const urls: Record<string, string> = {
      instagram: `https://www.instagram.com/`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      tiktok: `https://www.tiktok.com/`,
    }

    const target = urls[platform]
    if (target) {
      window.open(target, "_blank", "width=600,height=400")
    }
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById("snapshare-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `${sanitizedGroomName.toLowerCase()}-${sanitizedBrideName.toLowerCase()}-wedding-qr.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const downloadDriveQRCode = () => {
    const canvas = document.getElementById("drive-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = "drive-qr.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const copyHashtag = async (hashtag: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hashtag)
      setCopiedHashtagIndex(index)
      setTimeout(() => setCopiedHashtagIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const copyAllHashtags = async () => {
    try {
      await navigator.clipboard.writeText(allHashtagsText)
      setCopiedAllHashtags(true)
      setTimeout(() => setCopiedAllHashtags(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const copyDriveLink = async () => {
    if (driveLink) {
      try {
        await navigator.clipboard.writeText(driveLink)
        setCopiedDriveLink(true)
        setTimeout(() => setCopiedDriveLink(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <Section
      id="snap-share"
      className="relative overflow-hidden py-8 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#8B1E1E]" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_52%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.3)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" /> */}
      </div>
      
      {/* Flower decoration - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-y-[-1]"
          priority={false}
          // style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>
      
      {/* Flower decoration - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1] scale-y-[-1]"
          priority={false}
          // style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>
      
      {/* Flower decoration - left bottom corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65"
          priority={false}
          // style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>
      
      {/* Flower decoration - right bottom corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1]"
          priority={false}
          // style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-5 sm:mb-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={`${montserrat.className} inline-flex items-center gap-1.5 rounded-full border border-[#F3C66C]/45 bg-[#8B1E1E]/40 px-3 py-1.5 text-[10px] sm:text-xs uppercase text-[#F3C66C]`}
            style={{ letterSpacing: "0.3em" }}
          >
            Share Your Memories
          </div>
          <h2
            className={`${montserrat.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FEF7DB] mt-2 sm:mt-4`}
            style={{
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textShadow: "0 4px 18px rgba(0,0,0,0.85)",
              fontWeight: 600,
            }}
          >
            Capture & Share the Celebration
          </h2>
          <p
            className={`${montserrat.className} text-xs sm:text-sm md:text-base text-[#FDEFD0] max-w-2xl mx-auto mt-2 sm:mt-4 leading-relaxed px-2`}
          >
            Capture the beautiful moments of {groomNickname} & {brideNickname}'s wedding day. Share your favorite memories so our keepsake gallery glows with every smile, embrace, and celebration from this special day.
          </p>
          <div className="mx-auto mt-3 sm:mt-5 h-px w-20 sm:w-24 bg-[#F3C66C]/55" />
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-10" variants={staggerChildren} initial="initial" animate="animate">
          <motion.div
            className="h-full lg:order-1"
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#FDF6EA]/95 rounded-xl sm:rounded-[22px] p-3 sm:p-5 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.45)] h-full flex flex-col justify-start border border-[#E0C5A2]">
              <div className="flex flex-col w-full">
                <h4
                  className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8B1E1E] mb-2 sm:mb-4 text-center`}
                  style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Our Favorite Moments
                </h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-3 md:gap-4">
                  <motion.div
                    className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-md border-2 border-[#C44569]/30 hover:border-[#C44569]/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/mobile-background/couple (23).JPG" alt="Wedding moment 1" fill className="object-cover" style={{ imageOrientation: "from-image" }} />
                  </motion.div>
                  <motion.div
                    className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-md border-2 border-[#C44569]/30 hover:border-[#C44569]/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/mobile-background/couple (6).JPG" alt="Wedding moment 2" fill className="object-cover" style={{ imageOrientation: "from-image" }} />
                  </motion.div>
                  <motion.div
                    className="relative col-span-2 aspect-[3/2] rounded-lg sm:rounded-xl overflow-hidden shadow-md border-2 border-[#C44569]/30 hover:border-[#C44569]/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/desktop-background/couple (6).JPG" alt="Wedding moment 3" fill className="object-cover" />
                  </motion.div>
                </div>
                <p
                  className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm text-center mt-3 sm:mt-5 px-1.5 leading-relaxed`}
                >
                  Share your snapshots to be featured in our keepsake gallery.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-3 sm:space-y-5 lg:space-y-6 h-full flex flex-col lg:order-2" variants={fadeInUp}>
            <div className="flex-1">
              <div className="bg-[#FDF6EA]/95 rounded-xl sm:rounded-[22px] p-3 sm:p-5 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.45)] text-center h-full flex flex-col border border-[#E0C5A2]">
                <h4
                  className={`${montserrat.className} text-base sm:text-lg md:text-xl font-semibold text-[#8B1E1E] mb-2 sm:mb-3`}
                  style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Share Our Wedding Website
                </h4>
                <p
                  className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed px-1`}
                >
                  Spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share this QR code with friends and family so they can join the celebration.
                </p>
                <div className="mx-auto inline-flex flex-col items-center bg-[#FEF7DB]/90 backdrop-blur-sm p-2.5 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl shadow-md border border-[#E0C5A2]/80 mb-3 sm:mb-4 flex-1 justify-center">
                  <div className="mb-2 sm:mb-3 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#FDF6EA] border border-[#E0C5A2]/80">
                    <div className="bg-white p-1.5 sm:p-3 rounded-lg shadow-sm border border-[#E0C5A2]/80">
                      <QRCodeCanvas 
                        id="snapshare-qr" 
                        value={websiteUrl} 
                        size={isMobile ? 140 : 220} 
                        includeMargin 
                        className="bg-white" 
                        fgColor="#8B1E1E"
                      />
                    </div>
                  </div>
                  <button
                    onClick={downloadQRCode}
                    className="flex items-center gap-1.5 sm:gap-2 mx-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] border border-[#F3C66C]/80 shadow-[0_10px_28px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_38px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm font-semibold"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span
                      className={`${montserrat.className} uppercase font-semibold`}
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Download QR
                    </span>
                  </button>
                </div>
                <p
                  className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm mt-auto leading-relaxed`}
                >
                  Scan with any camera app to open the full invitation and schedule.
                </p>
              </div>
            </div>

            <div className="bg-[#FDF6EA]/95 rounded-lg sm:rounded-[20px] p-3 sm:p-5 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-[#E0C5A2]">
              <h5
                className={`${montserrat.className} text-base sm:text-lg md:text-xl font-semibold text-[#8B1E1E] mb-2 sm:mb-3 text-center`}
                style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Use Our Hashtags
              </h5>
              <p
                className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm text-center mb-3 sm:mb-4 leading-relaxed`}
              >
                Tag your photos and posts with our wedding hashtags to join the celebration!
              </p>
              
              <div className="space-y-2.5 sm:space-y-3 mb-3 sm:mb-4">
                {hashtags.map((hashtag, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#FEF7DB]/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#E0C5A2]/70 shadow-sm hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                      <span className={`${montserrat.className} text-[#8B1E1E] font-semibold text-sm sm:text-base md:text-lg break-all flex-1 text-center sm:text-left`}>
                        {hashtag}
                      </span>
                      <button
                        onClick={() => copyHashtag(hashtag, index)}
                        className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap flex-shrink-0 ${
                          copiedHashtagIndex === index ? "from-green-500 to-green-400 bg-green-500 text-white" : ""
                        }`}
                      >
                        {copiedHashtagIndex === index ? (
                          <>
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className={`${montserrat.className} text-xs sm:text-sm font-semibold`}>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className={`${montserrat.className} text-xs sm:text-sm font-semibold`}>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={copyAllHashtags}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] border-2 border-[#F3C66C]/80 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[0_16px_38px_rgba(0,0,0,0.6)] ${
                  copiedAllHashtags ? "from-green-500 to-green-400 border-green-400 text-white" : ""
                }`}
              >
                {copiedAllHashtags ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span
                      className={`${montserrat.className} text-xs sm:text-sm font-semibold uppercase`}
                      style={{ letterSpacing: "0.15em" }}
                    >
                      All Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span
                      className={`${montserrat.className} text-xs sm:text-sm font-semibold uppercase`}
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Copy All Hashtags
                    </span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#FDF6EA]/95 rounded-lg sm:rounded-[20px] p-3 sm:p-5 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-[#E0C5A2]">
              <h5
                className={`${montserrat.className} text-base sm:text-lg md:text-xl font-semibold text-[#8B1E1E] mb-2 sm:mb-3 text-center`}
                style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Share on Social Media
              </h5>
              <p
                className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm text-center mb-3 sm:mb-4 leading-relaxed`}
              >
                Help spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share the event across your favorite platforms.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => shareOnSocial("instagram")}
                  className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FEF7DB] border border-[#E0C5A2]/80 text-[#8B1E1E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-[#F3C66C]/10 transition-all duration-200 shadow-md hover:shadow-lg hover:border-[#F3C66C]"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span
                    className={`${montserrat.className} font-semibold text-xs sm:text-sm uppercase`}
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Instagram
                  </span>
                </button>
                <button
                  onClick={() => shareOnSocial("facebook")}
                  className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FEF7DB] border border-[#E0C5A2]/80 text-[#8B1E1E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-[#F3C66C]/10 transition-all duration-200 shadow-md hover:shadow-lg hover:border-[#F3C66C]"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span
                    className={`${montserrat.className} font-semibold text-xs sm:text-sm uppercase`}
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Facebook
                  </span>
                </button>
                <button
                  onClick={() => shareOnSocial("tiktok")}
                  className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FEF7DB] border border-[#E0C5A2]/80 text-[#8B1E1E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-[#F3C66C]/10 transition-all duration-200 shadow-md hover:shadow-lg hover:border-[#F3C66C]"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span
                    className={`${montserrat.className} font-semibold text-xs sm:text-sm uppercase`}
                    style={{ letterSpacing: "0.18em" }}
                  >
                    TikTok
                  </span>
                </button>
                <button
                  onClick={() => shareOnSocial("twitter")}
                  className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FEF7DB] border border-[#E0C5A2]/80 text-[#8B1E1E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-[#F3C66C]/10 transition-all duration-200 shadow-md hover:shadow-lg hover:border-[#F3C66C]"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span
                    className={`${montserrat.className} font-semibold text-xs sm:text-sm uppercase`}
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Twitter
                  </span>
                </button>
              </div>
            </div>

            {driveLink && (
              <div>
                <div className="bg-[#FDF6EA]/95 rounded-xl sm:rounded-[22px] p-3 sm:p-5 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)] text-center border border-[#8B1E1E]">
                  <div
                    className={`${montserrat.className} inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#8B1E1E]/60 bg-[#8B1E1E] px-2.5 py-1 text-[10px] sm:text-xs uppercase text-[#FEF7DB] mb-2 sm:mb-3`}
                    style={{ letterSpacing: "0.28em" }}
                  >
                    Upload Your Photos & Videos
                  </div>
                  <p
                    className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 px-1`}
                  >
                    Help us capture our special day! Scan the QR or use the actions below to drop your clips into our shared Drive.
                  </p>
                  <div className="mx-auto inline-flex flex-col items-center bg-[#FEF7DB]/90 backdrop-blur-sm p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-md border border-[#E0C5A2]/80 mb-3 sm:mb-4">
                    <div className="mb-2 sm:mb-3 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#FDF6EA] border border-[#E0C5A2]/80">
                      <div className="bg-white p-1.5 sm:p-3 rounded-lg shadow-sm border border-[#E0C5A2]/80">
                        <QRCodeCanvas id="drive-qr" value={driveLink} size={isMobile ? 130 : 200} includeMargin className="bg-white" fgColor="#8B1E1E" />
                    </div>
                  </div>
                    <p className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm`}>📱 Scan with your camera app</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                    <button
                      onClick={copyDriveLink}
                      className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] border border-[#F3C66C]/80 shadow-sm hover:shadow-md text-xs sm:text-sm transition-all ${
                        copiedDriveLink ? "from-green-500 to-green-400 border-green-500 text-white" : ""
                      }`}
                    >
                      {copiedDriveLink ? (
                        <>
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span
                            className={`${montserrat.className} uppercase font-semibold`}
                            style={{ letterSpacing: "0.18em" }}
                          >
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span
                            className={`${montserrat.className} uppercase font-semibold`}
                            style={{ letterSpacing: "0.18em" }}
                          >
                            Copy Link
                          </span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={downloadDriveQRCode}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] text-[#43201B] border border-[#F3C66C]/80 shadow-sm hover:shadow-md text-xs sm:text-sm transition-all font-semibold"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span
                        className={`${montserrat.className} uppercase font-semibold`}
                        style={{ letterSpacing: "0.18em" }}
                      >
                        Download QR
                      </span>
                    </button>
                    <a
                      href={driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#FEF7DB] border border-[#E0C5A2]/80 text-[#8B1E1E] shadow-sm hover:shadow-md hover:bg-[#F3C66C]/10 text-xs sm:text-sm transition-all"
                    >
                      <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span
                        className={`${montserrat.className} tracking-[0.15em] sm:tracking-[0.18em] uppercase font-semibold`}
                      >
                        Open Drive
                      </span>
                    </a>
                  </div>
                  <p className={`${montserrat.className} text-[#5A3A32] text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed`}>or tap &quot;Open Google Drive Folder.&quot;</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-5 sm:mt-10" variants={fadeInUp}>
          <div className="bg-[#FDF6EA]/95 rounded-xl sm:rounded-[22px] p-4 sm:p-6 md:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.55)] border border-[#E0C5A2] max-w-3xl mx-auto backdrop-blur-xl">
            <p
              className={`${montserrat.className} text-[#3C2A25] text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2`}
            >
              Thank you for helping make {groomNickname} & {brideNickname}'s wedding celebration memorable. Your photos and messages create beautiful memories
              that will last a lifetime—keep sharing the joy throughout the evening.
            </p>
            <div
              className={`${montserrat.className} flex items-center justify-center gap-2 text-[#8B1E1E] text-xs sm:text-sm uppercase`}
              style={{ letterSpacing: "0.25em" }}
            >
              <span>See you in the celebration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}