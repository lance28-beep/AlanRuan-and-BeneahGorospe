"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/content/site"

export function Hero() {
  return (
    <section
      id="invitation"
      className="relative min-h-[100dvh] sm:min-h-[90vh] flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20 overflow-hidden bg-[#8B1E1E]"
    >
      {/* Soft decorative landscape + motifs behind the card */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top sun glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-radial from-[#F3C66C]/40 via-[#F3C66C]/10 to-transparent blur-3xl" />

        {/* Horizon line art / pagodas / mountains */}
        <svg
          className="absolute inset-x-0 bottom-10 sm:bottom-8 w-full h-32 sm:h-40 opacity-40"
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroLandscape" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C4996E" />
              <stop offset="50%" stopColor="#A87752" />
              <stop offset="100%" stopColor="#C4996E" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#heroLandscape)" strokeWidth="1.4">
            {/* Layered mountains */}
            <path d="M-10 150 Q80 120 150 135 Q230 110 320 130 Q410 105 520 125 Q610 110 710 135 Q820 115 930 130 Q970 135 1010 145" />
            <path d="M-10 165 Q90 135 190 150 Q280 125 380 145 Q470 120 580 140 Q670 125 770 150 Q860 130 1010 155" opacity="0.7" />
            {/* Pagoda left */}
            <path d="M160 130 L160 105 L185 105 L185 130" />
            <path d="M150 105 L172 90 L195 105" />
            <path d="M168 90 L168 80 L178 80 L178 90" />
            <path d="M162 80 L173 70 L184 80" />
            {/* Pagoda right */}
            <path d="M820 140 L820 118 L842 118 L842 140" />
            <path d="M812 118 L831 105 L850 118" />
            <path d="M828 105 L828 96 L836 96 L836 105" />
            {/* Water line */}
            <path d="M-10 180 Q200 190 420 182 Q640 188 860 180 Q940 178 1010 182" opacity="0.6" />
          </g>
        </svg>

        {/* Floating cranes */}
        <svg
          className="absolute top-16 sm:top-12 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 opacity-40"
          viewBox="0 0 100 100"
        >
          <path
            d="M10 70 Q30 45 45 35 Q55 28 62 35 L82 55 Q72 58 64 50 L56 42 Q50 55 38 68 L24 78 Z"
            fill="none"
            stroke="#B16B5A"
            strokeWidth="1.5"
          />
          <circle cx="64" cy="30" r="4" fill="none" stroke="#B16B5A" strokeWidth="1.5" />
          <path d="M68 31 L82 26" fill="none" stroke="#B16B5A" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute top-24 sm:top-20 right-3 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 opacity-35"
          viewBox="0 0 100 100"
        >
          <path
            d="M90 70 Q70 45 55 35 Q45 28 38 35 L18 55 Q28 58 36 50 L44 42 Q50 55 62 68 L76 78 Z"
            fill="none"
            stroke="#B16B5A"
            strokeWidth="1.5"
          />
        </svg>

        {/* Lotus silhouettes at very bottom */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-24 sm:h-28 opacity-30"
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMax slice"
        >
          <g fill="#B16B5A">
            <ellipse cx="180" cy="170" rx="70" ry="18" opacity="0.6" />
            <path d="M180 170 Q160 140 180 115 Q200 140 180 170Z" />
            <path d="M180 170 Q150 150 180 130 Q210 150 180 170Z" opacity="0.7" />

            <ellipse cx="820" cy="172" rx="70" ry="18" opacity="0.6" />
            <path d="M820 172 Q800 142 820 117 Q840 142 820 172Z" />
            <path d="M820 172 Q790 152 820 132 Q850 152 820 172Z" opacity="0.7" />
          </g>
        </svg>

        {/* Animated clouds drifting behind the card */}
        {/* <svg
          className="absolute inset-x-0 top-10 sm:top-8 w-full h-24 sm:h-28 opacity-30"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroCloudFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FCE3CF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g fill="url(#heroCloudFill)">
            <g className="hero-cloud-slow">
              <path d="M-100 90 Q-60 70 -30 80 Q0 60 40 75 Q80 55 120 70 Q150 60 180 75 Q210 65 240 80 Q270 60 310 70 Q340 55 380 68 Q410 60 450 75 Q480 65 520 80 Q550 70 580 78 Q610 68 640 80 Q670 70 700 78 Q730 68 760 80 Q790 70 820 78 Q850 68 880 80 Q910 70 940 78 Q970 68 1000 80 L1000 120 L-100 120 Z" />
            </g>
            <g className="hero-cloud-fast">
              <path d="M-150 120 Q-110 100 -80 110 Q-40 90 0 105 Q40 95 80 110 Q110 100 150 112 Q190 100 230 110 Q260 100 300 112 Q340 100 380 110 Q420 100 460 112 Q500 100 540 110 Q580 100 620 112 Q660 100 700 110 Q740 100 780 112 Q820 100 860 110 Q900 100 940 112 Q970 102 1010 110 L1010 140 L-150 140 Z" />
            </g>
          </g>
        </svg> */}
      </div>

      {/* Central vertical invitation card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="relative bg-[#FDF6EA] border border-[#E0C5A2] shadow-[0_18px_40px_rgba(0,0,0,0.25)] rounded-[2.75rem] px-6 py-8 sm:px-8 sm:py-9 flex flex-col items-center text-center">
          {/* Top red wave */}
          <div className="absolute top-5 left-8 right-8 opacity-70">
            <svg viewBox="0 0 300 20" className="w-full h-5" preserveAspectRatio="none">
              <path
                d="M0 10 C60 0 120 20 180 10 C225 3 265 5 300 10"
                fill="none"
                stroke="#89251E"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Double happiness at very top */}
          <div className="mt-4 mb-4 sm:mt-5 sm:mb-5 flex flex-col items-center gap-1.5">
            <span
              className="text-4xl sm:text-5xl font-bold leading-none"
              style={{ color: "#89251E" }}
            >
              囍
            </span>
          </div>

          {/* Invite line */}
          <p className="text-[0.7rem] sm:text-xs tracking-[0.06em] sm:tracking-[0.08em] uppercase text-[#A34B3D] mb-3 sm:mb-3.5">
            Please join us for the marriage of
          </p>

          {/* Names row */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-5 sm:mb-6 w-full">
            <div className="flex-1 text-center space-y-0.5">
              <p
                className="text-2xl sm:text-[1.7rem] md:text-[1.9rem] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#151010]"
                style={{
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                }}
              >
                Alan
              </p>
              <p
                className="text-sm sm:text-base font-medium tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#4A3A36]"
                style={{
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500,
                }}
              >
                Ruan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-[#89251E]">
              <span
                className="text-3xl sm:text-4xl leading-none"
                style={{
                  fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400,
                }}
              >
                &
              </span>
            </div>
            <div className="flex-1 text-center space-y-0.5">
              <p
                className="text-2xl sm:text-[1.7rem] md:text-[1.9rem] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#151010]"
                style={{
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                }}
              >
                Beneah
              </p>
              <p
                className="text-sm sm:text-base font-medium tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#4A3A36]"
                style={{
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500,
                }}
              >
                Gorospe
              </p>
            </div>
          </div>

          {/* Date section */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-4 sm:mb-5">
            {/* Left: day & time */}
            <div
              className="text-[0.65rem] sm:text-[0.7rem] uppercase text-[#3C2A25] text-right space-y-0.5"
              style={{
                fontFamily:
                  '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500,
              }}
            >
              <p>Saturday</p>
              <p>7:00 PM</p>
            </div>

            {/* Center: day number with red dividers */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-px h-7 sm:h-8 bg-[#B65448]" />
              <div
                className="text-base sm:text-lg tracking-[0.16em] uppercase text-[#89251E]"
                style={{
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                }}
              >
                09
              </div>
              <div className="w-px h-7 sm:h-8 bg-[#B65448]" />
            </div>

            {/* Right: month & year */}
            <div
              className="text-[0.65rem] sm:text-[0.7rem] uppercase text-[#3C2A25] text-left space-y-0.5"
              style={{
                fontFamily:
                  '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500,
              }}
            >
              <p>May</p>
              <p>2026</p>
            </div>
          </div>

          {/* Venue */}
          <div className="mb-7 sm:mb-8 text-[0.7rem] sm:text-xs text-[#3C2A25]">
            <p
              className="text-sm sm:text-base tracking-[0.18em] uppercase text-[#111111] mb-0.5"
              style={{
                fontFamily:
                  '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
              }}
            >
              New York City

            </p>
            <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.12em] uppercase">
            {siteConfig.ceremony.location} <br /> {siteConfig.ceremony.address}

            </p>
          </div>


          {/* RSVP + button */}
          <div className="flex flex-col items-center gap-2.5 sm:gap-3.5 w-full">
            <p
              className="text-[0.62rem] sm:text-[0.7rem] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#7A483D]"
              style={{
                fontFamily:
                  '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500,
              }}
            >
              Kindly confirm your presence in the RSVP section
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#F3C66C] to-[#D4A84B] hover:from-[#D4A84B] hover:to-[#F3C66C] text-[#43201B] px-7 sm:px-8 py-2.5 sm:py-3 text-[0.7rem] sm:text-xs rounded-full shadow-[0_10px_26px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 tracking-[0.26em] uppercase border border-[#F3C66C]/70"
            >
              <a href="#guest-list">Open RSVP</a>
            </Button>
          </div>

          {/* Bottom red wave + script hint */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2 text-[#B16B5A]">
            <svg viewBox="0 0 300 20" className="w-full h-5" preserveAspectRatio="none">
              <path
                d="M0 10 C40 15 80 5 120 10 C180 18 220 2 260 8 C280 10 290 11 300 10"
                fill="none"
                stroke="#89251E"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-[0.7rem] sm:text-xs italic tracking-[0.18em] lowercase">
              save the date
            </span>
          </div>
        </div>
      </div>
      {/* Cloud drift animation */}
      <style jsx>{`
        .hero-cloud-slow {
          animation: hero-cloud-drift-slow 60s linear infinite;
        }
        .hero-cloud-fast {
          animation: hero-cloud-drift-fast 40s linear infinite;
        }
        @keyframes hero-cloud-drift-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200px);
          }
        }
        @keyframes hero-cloud-drift-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(200px);
          }
        }
      `}</style>
    </section>
  )
}
