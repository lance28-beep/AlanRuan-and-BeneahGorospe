"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

/*
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})
*/

export function Welcome() {
  const brideName = siteConfig.couple.brideNickname || siteConfig.couple.bride
  const groomName = siteConfig.couple.groomNickname || siteConfig.couple.groom
  return (
    <Section
      id="welcome"
      className="relative overflow-hidden bg-transparent py-12 sm:py-16 md:py-20"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] border border-[#E0C5A2] bg-[#FDF6EA] backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.25)] px-4 sm:px-5 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
          {/* Layered glass + light accents for readability */}
          <div className="pointer-events-none absolute inset-0">
            {/* Solid primary background with slight transparency */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundColor: "#FDF6EA",
              }}
            />
            {/* Subtle radial highlights */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(243,198,108,0.35),transparent_60%)] opacity-80" />
            <div className="absolute bottom-[-6rem] right-[-2rem] w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(139,30,30,0.22),transparent_60%)] opacity-85" />
            {/* Inner border glow */}
            <div className="absolute inset-[1px] rounded-[inherit] border border-[#F3C66C]/35" />
          </div>

          <div className="relative text-center space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8">
          {/* Main heading */}
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2.5">
            <p
              className={`${montserrat.className} text-[0.65rem] sm:text-[0.7rem] md:text-xs lg:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#89251E]`}
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.15)", fontWeight: 500 }}
            >
              {groomName} &amp; {brideName}
            </p>
            <h2
              className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.9rem] text-[#2B1C17]`}
              style={{ textShadow: "0 3px 14px rgba(0,0,0,0.18)", fontWeight: 600 }}
            >
              Welcome to our wedding website
            </h2>


            {/* Verse */}
            <div className="space-y-0.5 sm:space-y-1">
              <p
                className={`${montserrat.className} text-[0.7rem] sm:text-xs md:text-sm lg:text-base text-[#5A3A32] italic leading-relaxed`}
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.12)" }}
              >
                &quot;In God&apos;s perfect time, love grows and all things become beautiful.&quot;
              </p>
              <p
                className={`${montserrat.className} text-[0.7rem] sm:text-xs md:text-sm lg:text-base text-[#5A3A32] italic leading-relaxed`}
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.12)" }}
              >
                &quot;Love bears all things, hopes all things, endures all things.&quot;
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="h-px w-10 sm:w-16 md:w-20 bg-[#B65448]/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3C66C] shadow-[0_0_18px_rgba(243,198,108,0.7)]" />
              <span className="h-px w-10 sm:w-16 md:w-20 bg-[#B65448]/40" />
            </div>
          </div>

          {/* Body text */}
          <div
            className={`${montserrat.className} text-[0.75rem] sm:text-[0.85rem] md:text-sm lg:text-base leading-relaxed sm:leading-6 md:leading-7 text-[#3C2A25] space-y-2.5 sm:space-y-3 md:space-y-4`}
          >
            <p>
              We&apos;ve found a love that&apos;s a true blessing, and we give thanks to God for writing the
              beautiful story of our journey together. With hearts full of gratitude, we&apos;re excited to share
              this blessing with you! Thank you for your love, prayers, and support. We can&apos;t wait to celebrate
              this joyful day together!
            </p>
            <p>
              Feel free to browse through important information and other helpful reminders — everything you
              need to join us in this celebration!
            </p>
          </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


