"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Montserrat } from "next/font/google"
import { siteConfig } from "@/content/site"

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

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "When is the wedding?",
    answer:
      `Our wedding will be held on ${siteConfig.ceremony.date} (${siteConfig.ceremony.day}) at ${siteConfig.ceremony.time}. We kindly ask guests to arrive by ${siteConfig.ceremony.guestsTime} to help us begin promptly.`,
  },
  {
    question: "Where will the ceremony and reception take place?",
    answer:
      `The ceremony will be held at ${siteConfig.ceremony.location} in ${siteConfig.ceremony.address}. The reception will follow at ${siteConfig.reception.location} in ${siteConfig.reception.address}.`,
  },
  {
    question: "What time should I arrive?",
    answer:
      `Kindly arrive by ${siteConfig.ceremony.guestsTime} so we can begin the ceremony promptly at exactly ${siteConfig.ceremony.time}. The entourage will arrive at ${siteConfig.ceremony.entourageTime}. Your punctuality means so much to us!`,
  },
  {
    question: "Can I bring a plus one or additional guests?",
    answer:
      "Each invitation includes a specific number of reserved seats. Please check your invitation details in the RSVP section. If you need to request additional seats, you can use the 'Request to Join' feature, and we'll do our best to accommodate based on availability.",
  },
  {
    question: "Can I bring my children?",
    answer:
      "While we love your little ones, we kindly request an adults-only celebration so everyone can relax and enjoy the evening.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Please refer to the attire guide below. ",
  },
  {
    question: "Will there be assigned seating?",
    answer:
      "Yes, there will be assigned seating at the reception. Your table number will be displayed in the Book of Guests section once your RSVP is confirmed. Our reception team will gladly guide you to your table so you can relax and enjoy the celebration.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Street parking only. There is a close by parking garage see page 7 (hyperlink) for more info. ",
  },
  {
    question: "Can I take photos and videos during the ceremony?",
    answer:
      "We have a professional photographer and videographer capturing our special moments. We kindly ask that you keep your phones on silent and refrain from taking photos during the ceremony. However, we'd love to see your photos and videos from the reception! Please check the Snap & Share section for details on how to upload them.",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please let us know about any dietary restrictions or allergies when you RSVP. We want to ensure everyone can enjoy the celebration comfortably.",
  },
  {
    question: "How can I help the couple have a great time during their wedding?",
    answer:
      "• Pray with us for favorable weather and the continuous blessings of our Lord as we enter this new chapter of our lives as husband and wife.\n\n• RSVP as soon as your schedule is cleared.\n\n• Dress appropriately and follow our wedding motif.\n\n• Be on time.\n\n• Follow the seating arrangement in the reception.\n\n• Stay until the end of the program.\n\n• Join the activities and enjoy!",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#8B1E1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_52%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.3)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" />
      </div> */}

      {/* Section Header */}
      <div className="relative z-30 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${montserrat.className} text-[0.7rem] sm:text-xs md:text-sm uppercase text-[#F3C66C] mb-2`}
          style={{
            letterSpacing: "0.28em",
          }}
        >
          Everything You Need to Know
        </p>

        <h2
          className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FEF7DB] mb-1.5 sm:mb-3 md:mb-4`}
          style={{
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textShadow: "0 4px 18px rgba(0,0,0,0.8)",
            fontWeight: 600,
          }}
        >
          Frequently Asked Questions
        </h2>
        
        <p
          className={`${montserrat.className} text-xs sm:text-sm md:text-base text-[#FDEFD0] font-normal max-w-xl mx-auto leading-relaxed px-2 mb-2 sm:mb-3`}
        >
          Common questions answered to help you prepare for our special day
        </p>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full shadow-[0_0_14px_rgba(243,198,108,0.7)]" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-30 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-[#FDF6EA]/95 backdrop-blur-md border border-[#E0C5A2] rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
          
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#E0C5A2]/70 bg-[#FDF6EA]/95 hover:border-[#F3C66C] hover:bg-[#FFF8EC] transition-all duration-300 overflow-hidden shadow-sm shadow-black/10"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#F3C66C]/60 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span
                        className={`${montserrat.className} font-medium text-[#3C2A25] pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#8B1E1E]`}
                      >
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#8B1E1E]/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#F3C66C]" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-[#FFF8EC] border-t border-[#E0C5A2]/70">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p
                              className={`${montserrat.className} text-[#3C2A25] font-normal leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line`}
                            >
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#8B1E1E] underline font-semibold hover:text-[#F3C66C] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : item.question === "Is there a dress code?" ? (
                            <div className="space-y-6 sm:space-y-8 pt-2">
                              {/* Principal Sponsor Attire */}
                              {/* <div className="space-y-2 sm:space-y-3">
                                <h4
                                  className={`${montserrat.className} text-[#8B1E1E] font-semibold text-sm sm:text-base md:text-lg uppercase`}
                                  style={{ letterSpacing: "0.18em" }}
                                >
                                  Principal Sponsor Attire
                                </h4>
                                <div className={`${montserrat.className} text-[#3C2A25] text-xs sm:text-sm md:text-base space-y-1`}>
                                  <p><span className="font-semibold">Ninang:</span> Long Gown</p>
                                  <p><span className="font-semibold">Ninong:</span> Barong & Black Pants</p>
                                </div>
                                <div className="flex gap-2 sm:gap-3 mt-3">
                                  {["#8B1E1E", "#C45A3B", "#D97B2D", "#F3C66C", "#F5D9A6"].map((color, i) => (
                                    <div
                                      key={i}
                                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#E0C5A2]/70 shadow-sm shadow-black/10"
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                </div>
                              </div> */}

                              {/* Guest Attire */}
                              <div className="space-y-2 sm:space-y-3">
                                <h4
                                  className={`${montserrat.className} text-[#8B1E1E] font-semibold text-sm sm:text-base md:text-lg uppercase`}
                                  style={{ letterSpacing: "0.18em" }}
                                >
                                  Guest Attire
                                </h4>
                                <div className="text-center pt-3 sm:pt-4 border-t border-[#E0C5A2]/70 px-3 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-montserrat)] text-[#3C2A25] leading-relaxed mb-2">
                  <span className="font-semibold">Dress code:</span> Semi‑formal.
                </p>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-montserrat)] text-[#5A3A32] leading-relaxed mb-2">
                  <span className="font-semibold">Palette inspiration:</span> sunset tones &mdash; deep red, warm terracotta, soft gold, champagne, and blush.
                </p>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-montserrat)] text-[#5A3A32] leading-relaxed italic">
                  Kindly avoid jeans. The colors are a guide, so please feel free to choose what feels comfortable and elegant for you.
                </p>
              </div>
                                <div className="flex gap-2 sm:gap-3 mt-3 justify-center">
                                  {["#8B1E1E", "#C45A3B", "#D97B2D", "#F3C66C", "#F5D9A6"].map((color, i) => (
                                    <div
                                      key={i}
                                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#E0C5A2]/70 shadow-sm shadow-black/10"
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                          ) : (
                            <p
                              className={`${montserrat.className} text-[#3C2A25] font-normal leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line`}
                            >
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
