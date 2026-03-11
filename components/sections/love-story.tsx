"use client"

import React from "react"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { StorySection } from "@/components/StorySection"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const storyEvents = [
  {
    // place: "Perennial Fund Services' Office",
    memories: "When Beneah moved to New York to pursue her graduate studies, she had no idea that the city would also introduce her to her future husband. Alan, a lifelong New Yorker, was already building his life and career in the city they now call home.",
    // year: "2017",
    // month: "June",
    img: "/desktop-background/couple (9).JPG"
  },
  {
    // place: "Perennial Fund Services' Office",
    memories: "The two met through a dating app, a reminder that the most unexpected connections can turn into something truly special.",
    // year: "2017",
    // month: "June",
    img: "/mobile-background/couple (23).JPG"
  },
  {
    // place: "Perennial Fund Services' Office",
    memories: "In June 2025, they quietly exchanged vows in an intimate civil ceremony at Brooklyn City Hall. Now, almost a year into their marriage, they are excited to celebrate their love with family and friends who mean the most to them.",
    // year: "2017",
    // month: "June",
    img: "/desktop-background/couple (3).jpg"
  },

 
]

export function LoveStory() {
  return (
    <div className="min-h-screen bg-[#8B1E1E] overflow-x-hidden">
      
      {/* Header */}
      <div className="pt-16 pb-8 text-center text-[#FEF7DB] px-4 flex flex-col items-center gap-1.5">
        <h1
          className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.18em] uppercase`}
          style={{
            textShadow: "0 4px 18px rgba(0,0,0,0.75)",
            fontWeight: 600,
          }}
        >
          Love Story
        </h1>
        {/* <p
          className={`${montserrat.className} text-xs sm:text-sm md:text-base font-medium tracking-[0.22em] uppercase opacity-95`}
          style={{
            color: "#FDEFD0",
          }}
        >
          Timeline & Memories
        </p> */}
      </div>

      {storyEvents.map((event, index) => (
        <StorySection
          key={index}
          theme={index % 2 === 0 ? 'dark' : 'light'}
          layout={index % 2 === 0 ? 'image-left' : 'image-right'}
          isFirst={index === 0}
          isLast={index === storyEvents.length - 1}
          imageSrc={event.img}
          title={event.place}
          text={
            <>
              <p>{event.memories}</p>
            </>
          }
          year={event.year}
          month={event.month}
        />
      ))}
      
      {/* Footer Decoration */}
      <div className="bg-[#8B1E1E] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center text-[#FEF7DB] z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-[#F3C66C]/60 mx-auto mb-4 sm:mb-6 opacity-90"></div>
        <Link 
          href="#guest-list"
          className={`${montserrat.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.28em] uppercase font-medium text-[#43201B] bg-gradient-to-r from-[#F3C66C] to-[#D4A84B] rounded-full border border-[#F3C66C]/80 transition-all duration-300 hover:from-[#D4A84B] hover:to-[#F3C66C] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_26px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C66C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#8B1E1E]`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-[#F3C66C] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}
