"use client"

import { useState, useEffect } from "react"

interface OpeningAnimationProps {
  onComplete: () => void
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [sealClicked, setSealClicked] = useState(false)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [sealPulse, setSealPulse] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setSealPulse(prev => !prev), 1800)
    return () => clearInterval(interval)
  }, [])

  const handleSealClick = () => {
    if (sealClicked) return
    setSealClicked(true)
    setShowParticles(true)
    setTimeout(() => setDoorsOpen(true), 700)
    setTimeout(() => setFadeOut(true), 3000)
    setTimeout(() => onComplete(), 3700)
  }

  const particles = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360
    const distance = 100 + Math.random() * 90
    const size = 3 + Math.random() * 5
    const delay = Math.random() * 120
    return { angle, distance, size, delay, id: i }
  })

  return (
    <section
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ perspective: "1800px" }}
    >
      {/* ─── Revealed background (ivory + illustrated landscape) ─── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#FBF0E0" }}>

        {/* Warm radial sun glow top-center */}
        <div
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(243,198,108,0.55) 0%, rgba(243,198,108,0.18) 40%, transparent 70%)",
          }}
        />

        {/* Large moon/sun circle behind landscape */}
        <div
          className="absolute top-[6%] left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,220,140,0.65) 0%, rgba(243,198,108,0.25) 55%, transparent 80%)",
          }}
        />

        {/* Animated drifting clouds */}
        <div className="absolute inset-x-0 top-0 h-44 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1200 180" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FCE3CF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Cloud shapes — traditional ruyi auspicious form */}
            <g fill="url(#cloudGrad)" className="oa-cloud-l">
              <path d="M-60 60 Q-30 40 0 50 Q30 30 70 45 Q110 28 150 42 Q180 32 210 48 Q240 35 270 50 Q300 38 330 55 Q300 70 260 65 Q220 80 170 70 Q130 82 80 72 Q40 84 0 72 Q-30 80 -60 60Z" opacity="0.7"/>
            </g>
            <g fill="url(#cloudGrad)" className="oa-cloud-r">
              <path d="M950 75 Q980 55 1020 65 Q1060 45 1100 58 Q1140 45 1180 62 Q1160 78 1120 74 Q1080 88 1040 78 Q1000 90 960 80 Q940 88 920 75 Z" opacity="0.65"/>
            </g>
            <g fill="url(#cloudGrad)" className="oa-cloud-m">
              <path d="M350 35 Q390 18 440 28 Q480 10 530 22 Q580 8 630 25 Q670 15 710 30 Q680 48 640 44 Q600 58 550 50 Q500 64 450 55 Q400 68 360 55 Q340 64 320 50 Z" opacity="0.55"/>
            </g>
          </svg>
        </div>

        {/* Gold-outlined landscape illustration */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="goldLine2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A84B" />
              <stop offset="100%" stopColor="#B8893D" />
            </linearGradient>
          </defs>

          {/* Far mountains */}
          <path
            d="M0 680 Q90 610 180 640 Q260 580 380 620 Q460 555 560 595 Q650 535 760 575 Q860 525 980 565 L1000 700 L0 700Z"
            fill="none" stroke="url(#goldLine2)" strokeWidth="1" opacity="0.25"
          />
          {/* Mid mountains */}
          <path
            d="M0 740 Q110 670 230 700 Q330 635 460 678 Q560 608 680 655 Q790 600 930 640 L1000 760 L0 760Z"
            fill="none" stroke="url(#goldLine2)" strokeWidth="1.4" opacity="0.35"
          />
          {/* Near mountains */}
          <path
            d="M0 820 Q130 750 270 780 Q400 715 540 760 Q660 700 800 748 Q920 705 1000 745 L1000 900 L0 900Z"
            fill="none" stroke="url(#goldLine2)" strokeWidth="1.8" opacity="0.45"
          />

          {/* Pagoda left */}
          <g transform="translate(95,490)" fill="none" stroke="url(#goldLine2)" strokeWidth="1.4" opacity="0.5">
            <rect x="22" y="160" width="76" height="6" rx="2"/>
            <rect x="26" y="130" width="68" height="30"/>
            <path d="M14 130 L60 102 L106 130"/>
            <path d="M10 130 L60 98 L110 130" strokeWidth="0.8" opacity="0.6"/>
            <rect x="32" y="102" width="56" height="28"/>
            <path d="M20 102 L60 78 L100 102"/>
            <rect x="36" y="68" width="48" height="34"/>
            <path d="M26 68 L60 46 L94 68"/>
            <rect x="40" y="42" width="40" height="26"/>
            <path d="M32 42 L60 22 L88 42"/>
            <line x1="60" y1="22" x2="60" y2="6"/>
            <circle cx="60" cy="4" r="4"/>
          </g>

          {/* Pagoda right (smaller) */}
          <g transform="translate(800,548) scale(0.72)" fill="none" stroke="url(#goldLine2)" strokeWidth="1.4" opacity="0.4">
            <rect x="22" y="130" width="76" height="6" rx="2"/>
            <rect x="26" y="105" width="68" height="25"/>
            <path d="M14 105 L60 80 L106 105"/>
            <rect x="32" y="80" width="56" height="25"/>
            <path d="M20 80 L60 58 L100 80"/>
            <rect x="38" y="48" width="44" height="32"/>
            <path d="M28 48 L60 28 L92 48"/>
            <line x1="60" y1="28" x2="60" y2="12"/>
            <circle cx="60" cy="10" r="3.5"/>
          </g>

          {/* Pine tree left */}
          <g fill="none" stroke="url(#goldLine2)" strokeWidth="1" opacity="0.35">
            <line x1="55" y1="850" x2="55" y2="790"/>
            <path d="M30 820 Q55 788 80 820"/>
            <path d="M22 840 Q55 800 88 840"/>
            <path d="M16 855 Q55 812 94 855"/>
          </g>
          {/* Pine tree right */}
          <g fill="none" stroke="url(#goldLine2)" strokeWidth="1" opacity="0.35">
            <line x1="945" y1="840" x2="945" y2="782"/>
            <path d="M920 812 Q945 780 970 812"/>
            <path d="M912 832 Q945 793 978 832"/>
            <path d="M906 846 Q945 808 984 846"/>
          </g>

          {/* Lotus pond bottom-center */}
          <g fill="none" stroke="url(#goldLine2)" strokeWidth="1.2" opacity="0.4" transform="translate(420,870)">
            <ellipse cx="80" cy="85" rx="110" ry="20"/>
            <path d="M80 85 Q60 52 80 20 Q100 52 80 85"/>
            <path d="M80 85 Q40 62 80 34 Q120 62 80 85"/>
            <path d="M80 85 Q20 72 80 48 Q140 72 80 85"/>
            <ellipse cx="80" cy="78" rx="10" ry="6"/>
            <path d="M30 88 Q45 72 62 78 Q50 90 30 88"/>
            <path d="M130 88 Q115 72 98 78 Q110 90 130 88"/>
          </g>

          {/* Water ripples */}
          <g fill="none" stroke="url(#goldLine2)" strokeWidth="0.8" opacity="0.3">
            <path d="M0 940 Q250 930 500 940 Q750 950 1000 940"/>
            <path d="M0 960 Q200 970 450 958 Q700 948 1000 960"/>
          </g>

          {/* Flying cranes pair */}
          <g fill="none" stroke="url(#goldLine2)" strokeWidth="1.2" opacity="0.45">
            {/* Crane 1 */}
            <path d="M250 230 Q270 200 288 185 Q296 178 304 186 L320 206 Q310 210 304 200 L296 190 Q288 205 272 222 L258 232Z"/>
            <circle cx="306" cy="182" r="5"/>
            <path d="M310 183 L326 178"/>
            <circle cx="304" cy="181" r="1.5" fill="url(#goldLine2)"/>
            {/* Crane 2 */}
            <path d="M700 195 Q722 165 740 150 Q748 142 756 150 L774 170 Q762 174 756 164 L748 155 Q740 168 724 187 L710 200Z"/>
            <circle cx="758" cy="146" r="4.5"/>
            <path d="M762 147 L778 142"/>
          </g>
        </svg>
      </div>

      {/* ─── Left Door ─── */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full origin-left"
        style={{
          backgroundColor: "#89251E",
          boxShadow: doorsOpen
            ? "40px 0 100px rgba(0,0,0,0.7), inset -40px 0 100px rgba(0,0,0,0.4)"
            : "inset -15px 0 60px rgba(0,0,0,0.35)",
          transform: doorsOpen ? "rotateY(-115deg)" : "rotateY(0deg)",
          transition: "transform 2.2s cubic-bezier(0.22, 0.8, 0.3, 1), box-shadow 2s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle dark left-edge gradient for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 30%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Door panel border */}
        <div className="absolute inset-3 sm:inset-5 border border-[#F3C66C]/35 rounded pointer-events-none">
          <div className="absolute inset-2 sm:inset-3 border border-[#F3C66C]/18 rounded" />

          {/* Gold corner ornaments */}
          {(["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"] as const).map((pos, i) => (
            <svg key={i} className={`absolute ${pos} w-12 h-12 sm:w-16 sm:h-16 opacity-45`} viewBox="0 0 70 70">
              <path d="M5 5 L5 35 Q5 5 35 5" fill="none" stroke="#F3C66C" strokeWidth="1.8"/>
              <path d="M9 9 L9 26 Q9 9 26 9" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
              <circle cx="7" cy="22" r="4" fill="none" stroke="#F3C66C" strokeWidth="0.9"/>
              <circle cx="22" cy="7" r="4" fill="none" stroke="#F3C66C" strokeWidth="0.9"/>
            </svg>
          ))}

          {/* Lattice strip top */}
          <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-3/4 h-10 sm:h-14 opacity-25" viewBox="0 0 200 36">
            <defs>
              <pattern id="latL" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M0 9 L9 0 M9 18 L18 9 M0 9 L9 18 M9 0 L18 9" stroke="#F3C66C" strokeWidth="0.8" fill="none"/>
              </pattern>
            </defs>
            <rect x="0" y="4" width="200" height="28" fill="url(#latL)" />
            <rect x="0" y="4" width="200" height="28" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
          </svg>

          {/* Crane art */}
          <svg className="absolute top-[18%] left-1/2 -translate-x-1/2 w-20 h-24 sm:w-28 sm:h-32 opacity-28" viewBox="0 0 120 140">
            <path d="M20 90 Q40 60 55 40 Q62 32 70 42 L85 65 Q75 68 68 60 L60 50 Q52 65 40 82 L28 95 Z" fill="none" stroke="#F3C66C" strokeWidth="1.5"/>
            <path d="M25 85 Q45 55 60 45" fill="none" stroke="#F3C66C" strokeWidth="1" opacity="0.6"/>
            <circle cx="72" cy="36" r="5" fill="none" stroke="#F3C66C" strokeWidth="1.4"/>
            <path d="M76 37 L90 32" fill="none" stroke="#F3C66C" strokeWidth="1.4"/>
            <circle cx="70" cy="35" r="1.5" fill="#F3C66C"/>
            <circle cx="72" cy="32" r="2" fill="#F3C66C" opacity="0.8"/>
          </svg>

          {/* Lotus bottom */}
          <svg className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-24 h-20 sm:w-32 sm:h-28 opacity-28" viewBox="0 0 140 100">
            <path d="M70 80 Q50 55 70 18 Q90 55 70 80" fill="none" stroke="#F3C66C" strokeWidth="1.5"/>
            <path d="M70 80 Q32 58 70 28 Q108 58 70 80" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
            <path d="M70 80 Q16 64 70 44 Q124 64 70 80" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <ellipse cx="70" cy="70" rx="8" ry="5" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M22 86 Q36 70 52 76 Q40 87 22 86" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M118 86 Q104 70 88 76 Q100 87 118 86" fill="none" stroke="#F3C66C" strokeWidth="1"/>
          </svg>

          {/* Door studs grid */}
          {[...Array(4)].map((_, row) =>
            [...Array(2)].map((_, col) => (
              <div
                key={`sl-${row}-${col}`}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                style={{
                  top: `${22 + row * 20}%`,
                  left: `${28 + col * 30}%`,
                  background: "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 45%, #C4952E 100%)",
                  boxShadow: "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.3), 0 3px 7px rgba(0,0,0,0.45)",
                }}
              />
            ))
          )}

          {/* Door knocker handle right */}
          <div className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2">
            <svg className="w-9 h-12 sm:w-12 sm:h-16" viewBox="0 0 56 80">
              <defs>
                <linearGradient id="kL" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7D98C"/><stop offset="50%" stopColor="#F3C66C"/><stop offset="100%" stopColor="#C4952E"/>
                </linearGradient>
              </defs>
              <ellipse cx="28" cy="30" rx="20" ry="24" fill="url(#kL)"/>
              <ellipse cx="28" cy="30" rx="16" ry="20" fill="none" stroke="#89251E" strokeWidth="1.2" opacity="0.35"/>
              <circle cx="20" cy="24" r="3" fill="#89251E" opacity="0.45"/>
              <circle cx="36" cy="24" r="3" fill="#89251E" opacity="0.45"/>
              <ellipse cx="28" cy="34" rx="6" ry="4" fill="#89251E" opacity="0.35"/>
              <path d="M16 40 Q28 48 40 40" fill="none" stroke="#89251E" strokeWidth="1.8" opacity="0.35"/>
              <ellipse cx="28" cy="62" rx="11" ry="13" fill="none" stroke="url(#kL)" strokeWidth="4.5"/>
            </svg>
          </div>

          {/* Bamboo side */}
          <svg className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-2/3 opacity-22" viewBox="0 0 20 200">
            <line x1="10" y1="0" x2="10" y2="200" stroke="#F3C66C" strokeWidth="2"/>
            <path d="M5 40 Q10 46 15 40" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M5 90 Q10 96 15 90" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M5 140 Q10 146 15 140" fill="none" stroke="#F3C66C" strokeWidth="1"/>
          </svg>
        </div>

        {/* Lattice strip bottom */}
        <svg className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 w-2/3 h-10 sm:h-14 opacity-25" viewBox="0 0 200 36">
          <rect x="0" y="4" width="200" height="28" fill="url(#latL)" />
          <rect x="0" y="4" width="200" height="28" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
        </svg>
      </div>

      {/* ─── Right Door ─── */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full origin-right"
        style={{
          backgroundColor: "#89251E",
          boxShadow: doorsOpen
            ? "-40px 0 100px rgba(0,0,0,0.7), inset 40px 0 100px rgba(0,0,0,0.4)"
            : "inset 15px 0 60px rgba(0,0,0,0.35)",
          transform: doorsOpen ? "rotateY(115deg)" : "rotateY(0deg)",
          transition: "transform 2.2s cubic-bezier(0.22, 0.8, 0.3, 1), box-shadow 2s ease",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.25) 0%, transparent 30%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        <div className="absolute inset-3 sm:inset-5 border border-[#F3C66C]/35 rounded pointer-events-none">
          <div className="absolute inset-2 sm:inset-3 border border-[#F3C66C]/18 rounded" />

          {(["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"] as const).map((pos, i) => (
            <svg key={i} className={`absolute ${pos} w-12 h-12 sm:w-16 sm:h-16 opacity-45`} viewBox="0 0 70 70">
              <path d="M5 5 L5 35 Q5 5 35 5" fill="none" stroke="#F3C66C" strokeWidth="1.8"/>
              <path d="M9 9 L9 26 Q9 9 26 9" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
              <circle cx="7" cy="22" r="4" fill="none" stroke="#F3C66C" strokeWidth="0.9"/>
              <circle cx="22" cy="7" r="4" fill="none" stroke="#F3C66C" strokeWidth="0.9"/>
            </svg>
          ))}

          <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-3/4 h-10 sm:h-14 opacity-25" viewBox="0 0 200 36">
            <defs>
              <pattern id="latR" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M0 9 L9 0 M9 18 L18 9 M0 9 L9 18 M9 0 L18 9" stroke="#F3C66C" strokeWidth="0.8" fill="none"/>
              </pattern>
            </defs>
            <rect x="0" y="4" width="200" height="28" fill="url(#latR)"/>
            <rect x="0" y="4" width="200" height="28" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
          </svg>

          {/* Mirrored crane */}
          <svg className="absolute top-[18%] left-1/2 -translate-x-1/2 w-20 h-24 sm:w-28 sm:h-32 opacity-28 scale-x-[-1]" viewBox="0 0 120 140">
            <path d="M20 90 Q40 60 55 40 Q62 32 70 42 L85 65 Q75 68 68 60 L60 50 Q52 65 40 82 L28 95 Z" fill="none" stroke="#F3C66C" strokeWidth="1.5"/>
            <path d="M25 85 Q45 55 60 45" fill="none" stroke="#F3C66C" strokeWidth="1" opacity="0.6"/>
            <circle cx="72" cy="36" r="5" fill="none" stroke="#F3C66C" strokeWidth="1.4"/>
            <path d="M76 37 L90 32" fill="none" stroke="#F3C66C" strokeWidth="1.4"/>
            <circle cx="70" cy="35" r="1.5" fill="#F3C66C"/>
            <circle cx="72" cy="32" r="2" fill="#F3C66C" opacity="0.8"/>
          </svg>

          {/* Lotus bottom */}
          <svg className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-24 h-20 sm:w-32 sm:h-28 opacity-28" viewBox="0 0 140 100">
            <path d="M70 80 Q50 55 70 18 Q90 55 70 80" fill="none" stroke="#F3C66C" strokeWidth="1.5"/>
            <path d="M70 80 Q32 58 70 28 Q108 58 70 80" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
            <path d="M70 80 Q16 64 70 44 Q124 64 70 80" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <ellipse cx="70" cy="70" rx="8" ry="5" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M22 86 Q36 70 52 76 Q40 87 22 86" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M118 86 Q104 70 88 76 Q100 87 118 86" fill="none" stroke="#F3C66C" strokeWidth="1"/>
          </svg>

          {[...Array(4)].map((_, row) =>
            [...Array(2)].map((_, col) => (
              <div
                key={`sr-${row}-${col}`}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                style={{
                  top: `${22 + row * 20}%`,
                  right: `${28 + col * 30}%`,
                  background: "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 45%, #C4952E 100%)",
                  boxShadow: "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.3), 0 3px 7px rgba(0,0,0,0.45)",
                }}
              />
            ))
          )}

          <div className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2">
            <svg className="w-9 h-12 sm:w-12 sm:h-16" viewBox="0 0 56 80">
              <defs>
                <linearGradient id="kR" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7D98C"/><stop offset="50%" stopColor="#F3C66C"/><stop offset="100%" stopColor="#C4952E"/>
                </linearGradient>
              </defs>
              <ellipse cx="28" cy="30" rx="20" ry="24" fill="url(#kR)"/>
              <ellipse cx="28" cy="30" rx="16" ry="20" fill="none" stroke="#89251E" strokeWidth="1.2" opacity="0.35"/>
              <circle cx="20" cy="24" r="3" fill="#89251E" opacity="0.45"/>
              <circle cx="36" cy="24" r="3" fill="#89251E" opacity="0.45"/>
              <ellipse cx="28" cy="34" rx="6" ry="4" fill="#89251E" opacity="0.35"/>
              <path d="M16 40 Q28 48 40 40" fill="none" stroke="#89251E" strokeWidth="1.8" opacity="0.35"/>
              <ellipse cx="28" cy="62" rx="11" ry="13" fill="none" stroke="url(#kR)" strokeWidth="4.5"/>
            </svg>
          </div>

          <svg className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-2/3 opacity-22" viewBox="0 0 20 200">
            <line x1="10" y1="0" x2="10" y2="200" stroke="#F3C66C" strokeWidth="2"/>
            <path d="M5 40 Q10 46 15 40" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M5 90 Q10 96 15 90" fill="none" stroke="#F3C66C" strokeWidth="1"/>
            <path d="M5 140 Q10 146 15 140" fill="none" stroke="#F3C66C" strokeWidth="1"/>
          </svg>
        </div>

        <svg className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 w-2/3 h-10 sm:h-14 opacity-25" viewBox="0 0 200 36">
          <rect x="0" y="4" width="200" height="28" fill="url(#latR)"/>
          <rect x="0" y="4" width="200" height="28" fill="none" stroke="#F3C66C" strokeWidth="1.2"/>
        </svg>
      </div>

      {/* ─── Door seam center shadow ─── */}
      {!doorsOpen && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5))" }}
        />
      )}

      {/* ─── Gold particles when seal breaks ─── */}
      {showParticles && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: "linear-gradient(135deg,#F3C66C,#D4A84B)",
                animation: `oaParticle 1.1s cubic-bezier(0.25,0.46,0.45,0.94) ${p.delay}ms forwards`,
                boxShadow: "0 0 6px rgba(243,198,108,0.8)",
                ["--dist" as string]: `${p.distance}px`,
                ["--ang" as string]: `${p.angle}deg`,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── Wax Seal ─── */}
      <button
        onClick={handleSealClick}
        disabled={sealClicked}
        aria-label="Tap to open invitation"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none transition-all ${
          sealClicked ? "opacity-0 scale-[1.6] duration-700" : "opacity-100 scale-100 duration-300"
        }`}
      >
        <div className="relative flex flex-col items-center">
          {/* Outer glow pulse */}
          <div
            className={`absolute -inset-8 rounded-full blur-2xl transition-all duration-1500 ${
              sealPulse ? "opacity-55 scale-110" : "opacity-25 scale-100"
            }`}
            style={{ background: "radial-gradient(circle, #F3C66C 0%, transparent 68%)" }}
          />

          {/* Drop shadow */}
          <div className="absolute inset-0 rounded-full bg-black/30 blur-xl translate-y-5" />

          {/* Wax drips */}
          <svg
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-10 sm:w-44 sm:h-12"
            viewBox="0 0 110 26"
          >
            <defs>
              <linearGradient id="wax2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F3C66C"/>
                <stop offset="100%" stopColor="#B8893D"/>
              </linearGradient>
            </defs>
            <ellipse cx="55" cy="5" rx="44" ry="7" fill="url(#wax2)"/>
            <ellipse cx="22" cy="13" rx="4.5" ry="8" fill="url(#wax2)"/>
            <ellipse cx="55" cy="14" rx="3.5" ry="10" fill="url(#wax2)"/>
            <ellipse cx="88" cy="12" rx="4" ry="7" fill="url(#wax2)"/>
          </svg>

          {/* Seal disc */}
          <div
            className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-transform duration-300 ${
              !sealClicked ? "hover:scale-108 active:scale-95" : ""
            }`}
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 28%, #D4A84B 62%, #B8893D 100%)",
              boxShadow:
                "0 12px 44px rgba(0,0,0,0.45), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -6px 12px rgba(0,0,0,0.28)",
            }}
          >
            <div className="absolute inset-2 rounded-full border-2 border-[#89251E]/22" />
            <div className="absolute inset-4 rounded-full border border-[#89251E]/14" />
            <div
              className="absolute inset-4 rounded-full"
              style={{ background: "radial-gradient(circle at 62% 62%, transparent 0%, rgba(0,0,0,0.1) 100%)" }}
            />
            <span
              className="relative text-4xl sm:text-5xl font-bold select-none"
              style={{
                color: "#89251E",
                textShadow: "1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.15)",
              }}
            >
              囍
            </span>
          </div>

          {/* Tap hint */}
          {!sealClicked && mounted && (
            <div
              className="absolute -bottom-12 sm:-bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-700"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-px bg-[#F3C66C]/60" />
                <p
                  className="text-[#F3C66C] text-[0.6rem] sm:text-xs whitespace-nowrap tracking-[0.32em] uppercase"
                  style={{ textShadow: "0 0 10px rgba(243,198,108,0.6)" }}
                >
                  Tap to Open
                </p>
                <span className="w-5 h-px bg-[#F3C66C]/60" />
              </div>
              <svg className="w-3.5 h-3.5 text-[#F3C66C]/70 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
      </button>

      {/* ─── Keyframes ─── */}
      <style jsx>{`
        @keyframes oaParticle {
          0%   { transform: rotate(var(--ang)) translateY(0) scale(1); opacity: 1; }
          100% { transform: rotate(var(--ang)) translateY(var(--dist)) scale(0); opacity: 0; }
        }
        .oa-cloud-l { animation: cloudL 55s linear infinite; }
        .oa-cloud-r { animation: cloudR 48s linear infinite; }
        .oa-cloud-m { animation: cloudM 70s linear infinite; }
        @keyframes cloudL  { from { transform: translateX(0); }  to { transform: translateX(-180px); } }
        @keyframes cloudR  { from { transform: translateX(0); }  to { transform: translateX( 160px); } }
        @keyframes cloudM  { from { transform: translateX(0); }  to { transform: translateX(-120px); } }
      `}</style>
    </section>
  )
}
