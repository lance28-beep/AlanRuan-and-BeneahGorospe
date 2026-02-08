"use client"

import React from 'react';
import Link from 'next/link';
import { Inter, Cormorant_Garamond } from "next/font/google";
import { StorySection } from '@/components/StorySection';
import { bequta } from "@/app/fonts"

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "900"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const storyEvents = [
  {
    place: "Perennial Fund Services' Office",
    memories: "This was the place where their story first stirred — where ordinary days became extraordinary, and friendship gave way to love. Now, they return not as workmates, but as soulmates, ready to mark a day that will echo through every tomorrow.",
    year: "2017",
    month: "June",
    img: "/loveStory/1. Perennial (2).jpg"
  },
  {
    place: "Purple Beetle",
    memories: "On the 8th of April 2018, beneath the quiet sky, the groom bared his heart and whispered his love to the bride — a moment that turned time into memory.",
    year: "2018",
    month: "Apr",
    img: "/loveStory/1. Perennial.jpg"
  },
  {
    place: "Sagada",
    memories: "Couples first adventure together, the chill clung sweetly to their skin as the sun rose in golden hush — a quiet symphony of warmth and wonder, just like them.",
    year: "2018",
    month: "Oct",
    img: "/loveStory/3. Sagada.jpg"
  },
  {
    place: "Monte Maria",
    memories: "Year after year, he wished to celebrate his birthday in this sacred space, where gratitude met devotion. And afterward, at The Only Place - Restaurant, they’d dine together — a tradition of joy, warmth, and love served with every dish",
    year: "2018/2019",
    month: "June",
    img: "/mobile-background/couple (4).jpg"
  },
  {
    place: "Bohol",
    memories: "Just like the company they belong to — Perennial, a name that speaks of forever — their love is a promise that no matter the season, it will always return, always grow, always stay. And as their teammates watched, they bore witness to something rare: a romance rooted in friendship, nurtured by time, and destined to endure. #BohoLoveGoodbye #And I will take whatever you can give",
    year: "2019",
    month: "June",
    img: "/loveStory/1. Perennial.jpg"
  },
  {
    place: "Cagayan De Oro",
    memories: "They traveled with hearts wide open, making memories that flowed like the river beneath them. Through rushing currents and laughter’s echo, they danced with the water — a celebration of friendship, freedom, and the joy of being together.",
    year: "2019",
    month: "Oct",
    img: "/loveStory/6. CDO.png"
  },
  {
    place: "Camuiguin",
    memories: "Like Camiguin — the Island Born of Fire — their love was bold, untamed, and warm to the touch. Each shore they walked, each island they explored, carried the heat of a passion that never cooled. In the glow of volcanic sunsets and the hush of ocean breeze, they felt it: A love that burns gently, deeply, and forever.",
    year: "2019",
    month: "Oct",
    img: "/loveStory/7. Camuigin.jpg"
  },
  {
    place: "Iligan",
    memories: "In Iligan, the City of Majestic Waterfalls, they didn’t just explore nature — they discovered each other. Amid the hush of cascading waters and the cool stillness of mountain streams, their hearts quietly aligned. Here, love flowed as gently and endlessly as the waterfalls themselves.",
    year: "2019",
    month: "Oct",
    img: "/loveStory/8. Iligan (2).jpg"
  },
  {
    place: "Bukidnon",
    memories: "In Bukidnon, where pineapples grow golden and the land invites adventure, their love found its rhythm. Sweet as the fruit they tasted, bold as the ATV trails they conquered — every turn, every laugh, every muddy splash became part of their story.",
    year: "2019",
    month: "Oct",
    img: "/loveStory/9. Bukidnon.jpg"
  },
  {
    place: "Virtual Space",
    memories: "As the pandemic swept across the world, their love became its own defiance. Through the lenses of their cameras, they discovered angles of resilience— love that stays, love that fights, love that endures",
    year: "2020",
    month: "Pandemic",
    img: "/loveStory/10. Virtual Space (2).jpg"
  },
  {
    place: "Rosario Church",
    memories: "Here, where hearts once hesitated, they found their way again. A second chance, wrapped in warmth and wonder — proving that love, when reborn, blooms even brighter.",
    year: "2021",
    month: "May",
    img: "/mobile-background/couple (1).jpg"
  },
  {
    place: "Boracay",
    memories: "Parasailing — a moment of nerves and wonder, until the view calmed their hearts. High above the world, he asked her to be his girlfriend — and the sky became their witness.",
    year: "2022",
    month: "June",
    img: "/loveStory/12. Boracay.jpg"
  },
  {
    place: "Singapore",
    memories: "One year after love was confessed, she flew to Singapore to celebrate their first anniversary — proving that distance means nothing when hearts are bound.",
    year: "2023",
    month: "July",
    img: "/mobile-background/couple (7).jpg"
  },
  {
    place: "Puerto Galera",
    memories: "In a land where the sea meets the shore like a lover’s touch, they marked their second anniversary — surrounded by stunning views and the soft rhythm of waves echoing the tenderness between them",
    year: "2024",
    month: "June",
    img: "/loveStory/14. Puerto Galer.jpg"
  },
  {
    place: "Cebu",
    memories: "They believed love was meant to be shared. With their parents by their side, they explored a new town — tasting its food, embracing its customs, and weaving new memories into the fabric of their story. It was a celebration not just of their love, but of the family that shaped it",
    year: "2024",
    month: "Oct",
    img: "/loveStory/15. Cebu.jpg"
  },
  {
    place: "South Korea - Lotte World",
    memories: "In a foreign land where no one knew their names, he knelt — not for tradition, but for love. It was here their journey began, with a question that sealed their hearts and a promise whispered into the wind. A road to forever.",
    year: "2025",
    month: "Apr",
    img: "/loveStory/16 South Korea.jpg"
  },
  {
    place: "Valentino Resort - Lipa Batangas",
    memories: "Amidst the rush of work and life’s responsibilities, they chose stillness. For their 3rd Anniversary, they escaped to a haven of warmth — where good food comforted the soul, gentle massages eased the weight of time, and love was celebrated in quiet, tender ways",
    year: "2025",
    month: "June",
    img: "/mobile-background/couple (9).jpg"
  }
]

export function LoveStory() {
  return (
    <div className="min-h-screen bg-[#FBCCC9] overflow-x-hidden">
      
      {/* Header */}
      <div className="pt-16 pb-8 text-center text-[#C44569] px-4 flex flex-col items-center gap-1">
        <h1 className={`${bequta.className} text-5xl md:text-7xl tracking-wider`}>
          Love Story
        </h1>
        <p className={`${inter.className} text-sm md:text-lg font-bold tracking-[0.2em] uppercase opacity-90`}>
          Timeline & Memories
        </p>
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
      <div className="bg-[#FBCCC9] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center text-[#C44569] z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-[#C44569] mx-auto mb-4 sm:mb-6 opacity-30"></div>
        <Link 
          href="#guest-list"
          className={`${bequta.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-normal text-[#FBCCC9] bg-[#C44569] rounded-sm border border-[#C44569] transition-all duration-300 hover:bg-[#a63a59] hover:border-[#a63a59] hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C44569]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBCCC9]`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-sm bg-[#C44569] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}
