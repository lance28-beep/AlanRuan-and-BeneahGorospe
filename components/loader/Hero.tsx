"use client"

interface OpeningAnimationProps {
  onComplete: () => void
}

function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [sealClicked, setSealClicked] = useState(false)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [sealPulse, setSealPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSealPulse(prev => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  const handleSealClick = () => {
    setSealClicked(true)
    setShowParticles(true)

    setTimeout(() => {
      setDoorsOpen(true)
    }, 800)

    setTimeout(() => {
      setFadeOut(true)
    }, 2800)

    setTimeout(() => {
      onComplete()
    }, 3400)
  }

  const particles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * 360
    const distance = 120 + Math.random() * 80
    const size = 3 + Math.random() * 6
    const delay = Math.random() * 150
    return { angle, distance, size, delay, id: i }
  })

  return (
    <section
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "1500px" }}
    >
      <div className="absolute inset-0 bg-[#FCEFDD]">
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3C66C" />
              <stop offset="100%" stopColor="#D4A84B" />
            </linearGradient>
          </defs>

          <g stroke="url(#goldLine)" fill="none" strokeWidth="1.5">
            <path d="M80 120 Q100 100 130 110 Q150 90 180 100 Q210 85 240 105 Q260 95 280 115 Q250 130 220 125 Q190 140 150 130 Q110 145 80 120" />
            <path d="M90 130 Q120 120 150 125 Q180 115 210 128" />
            <path d="M420 80 Q450 60 490 70 Q520 50 560 65 Q600 55 640 75 Q670 65 690 85 Q650 100 610 95 Q570 110 520 100 Q470 115 420 80" />
            <path d="M440 90 Q480 80 530 85 Q580 75 620 90" />
            <path d="M780 140 Q810 120 850 130 Q880 110 920 125 Q890 145 850 140 Q810 155 780 140" />
            <path d="M150 300 Q180 280 220 290 Q260 270 300 285 Q270 305 230 300 Q190 315 150 300" />
            <path d="M700 350 Q740 330 790 345 Q830 325 870 340 Q840 360 790 355 Q740 370 700 350" />
          </g>

          <g stroke="url(#goldLine)" fill="none">
            <path
              d="M0 650 Q80 580 150 600 Q220 550 320 580 Q400 520 500 560 Q580 500 680 540 Q780 490 900 530 Q960 510 1000 550 L1000 700 L0 700 Z"
              strokeWidth="1"
              opacity="0.4"
            />

            <path
              d="M0 720 Q100 650 200 680 Q300 620 400 660 Q500 590 620 640 Q720 580 850 630 Q950 600 1000 650 L1000 800 L0 800 Z"
              strokeWidth="1.5"
              opacity="0.6"
            />

            <path
              d="M0 800 Q120 730 250 760 Q380 700 500 750 Q620 690 750 740 Q880 700 1000 750 L1000 900 L0 900 Z"
              strokeWidth="2"
              opacity="0.8"
            />
          </g>

          <g transform="translate(120, 520)" stroke="url(#goldLine)" fill="none" strokeWidth="1.5">
            <path d="M20 180 L100 180 L110 190 L10 190 Z" />
            <path d="M25 180 L25 150 L95 150 L95 180" />
            <path d="M15 150 L60 120 L105 150" />
            <path d="M10 150 L60 115 L110 150" strokeWidth="1" />
            <path d="M30 120 L30 95 L90 95 L90 120" />
            <path d="M20 95 L60 70 L100 95" />
            <path d="M15 95 L60 65 L105 95" strokeWidth="1" />
            <path d="M35 70 L35 50 L85 50 L85 70" />
            <path d="M25 50 L60 25 L95 50" />
            <path d="M20 50 L60 20 L100 50" strokeWidth="1" />
            <path d="M60 20 L60 5" />
            <circle cx="60" cy="3" r="3" />
          </g>

          <g transform="translate(800, 580) scale(0.6)" stroke="url(#goldLine)" fill="none" strokeWidth="1.5">
            <path d="M20 120 L80 120 L85 125 L15 125 Z" />
            <path d="M25 120 L25 100 L75 100 L75 120" />
            <path d="M15 100 L50 80 L85 100" />
            <path d="M30 80 L30 65 L70 65 L70 80" />
            <path d="M20 65 L50 45 L80 65" />
            <path d="M50 45 L50 35" />
            <circle cx="50" cy="33" r="2" />
          </g>

          <g stroke="url(#goldLine)" fill="none" strokeWidth="1">
            <path d="M50 850 L50 800 M30 820 Q50 790 70 820 M25 840 Q50 800 75 840" />
            <path d="M950 830 L950 780 M930 800 Q950 770 970 800 M925 825 Q950 785 975 825" />
          </g>

          <g stroke="url(#goldLine)" fill="none" strokeWidth="1" opacity="0.5">
            <path d="M0 920 Q250 910 500 920 Q750 930 1000 920" />
            <path d="M0 940 Q200 950 400 940 Q600 930 800 945 Q900 950 1000 940" />
            <path d="M0 960 Q300 970 600 960 Q800 955 1000 965" />
          </g>

          <g stroke="url(#goldLine)" fill="none" strokeWidth="1">
            <path d="M300 200 Q310 190 320 195 L340 200 Q330 205 320 200" />
            <path d="M350 180 Q360 170 370 175 L390 180 Q380 185 370 180" />
            <path d="M650 220 Q660 210 670 215 L690 220 Q680 225 670 220" />
          </g>
        </svg>
      </div>

      <div
        className="absolute top-0 left-0 h-full w-1/2 origin-left"
        style={{
          backgroundColor: "#89251E",
          boxShadow: doorsOpen
            ? "30px 0 80px rgba(0,0,0,0.6), inset -30px 0 80px rgba(0,0,0,0.35)"
            : "inset -20px 0 60px rgba(0,0,0,0.3)",
          transform: doorsOpen ? "rotateY(-110deg)" : "rotateY(0deg)",
          transition: "transform 2s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 2s ease",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute top-0 right-0 h-full w-6"
          style={{
            background: "linear-gradient(to right, #6d1d17, #5a1813)",
            transform: "rotateY(90deg) translateX(12px)",
            transformOrigin: "right",
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, row) =>
            [...Array(3)].map((_, col) => (
              <div
                key={`stud-left-${row}-${col}`}
                className="absolute h-4 w-4 rounded-full md:h-5 md:w-5"
                style={{
                  top: `${15 + row * 18}%`,
                  left: `${20 + col * 25}%`,
                  background:
                    "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 40%, #C4952E 100%)",
                  boxShadow:
                    "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.4)",
                }}
              />
            )),
          )}
        </div>

        <div className="absolute inset-4 rounded border-2 border-[#F3C66C]/40 md:inset-6">
          <div className="absolute inset-2 rounded border border-[#F3C66C]/25 md:inset-3" />

          <svg
            className="absolute left-1/2 top-2 h-12 w-3/4 -translate-x-1/2 opacity-30 md:h-16"
            viewBox="0 0 200 40"
          >
            <defs>
              <pattern
                id="latticeLeft"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 10 L10 0 M10 20 L20 10 M0 10 L10 20 M10 0 L20 10"
                  stroke="#F3C66C"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect x="0" y="5" width="200" height="30" fill="url(#latticeLeft)" />
            <rect x="0" y="5" width="200" height="30" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
          </svg>

          <svg
            className="absolute left-1/2 bottom-2 h-12 w-3/4 -translate-x-1/2 opacity-30 md:h-16"
            viewBox="0 0 200 40"
          >
            <rect x="0" y="5" width="200" height="30" fill="url(#latticeLeft)" />
            <rect x="0" y="5" width="200" height="30" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
          </svg>

          {["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"].map(
            (pos, i) => (
              <svg
                key={i}
                className={`absolute ${pos} h-14 w-14 opacity-40 md:h-20 md:w-20`}
                viewBox="0 0 80 80"
              >
                <path
                  d="M5 5 L5 40 Q5 5 40 5"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="2"
                />
                <path
                  d="M10 10 L10 30 Q10 10 30 10"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 15 L15 22 Q15 15 22 15"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="1"
                />
                <circle cx="8" cy="25" r="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <circle cx="25" cy="8" r="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <path d="M5 35 Q12 32 15 25" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <path d="M35 5 Q32 12 25 15" fill="none" stroke="#F3C66C" strokeWidth="1" />
              </svg>
            ),
          )}

          <div className="absolute right-3 top-1/2 -translate-y-1/2 md:right-5">
            <svg className="h-14 w-10 md:h-20 md:w-14" viewBox="0 0 60 90">
              <ellipse cx="30" cy="35" rx="22" ry="28" fill="url(#goldGradLeft)" />
              <ellipse
                cx="30"
                cy="35"
                rx="18"
                ry="24"
                fill="none"
                stroke="#89251E"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <circle cx="22" cy="28" r="3" fill="#89251E" opacity="0.5" />
              <circle cx="38" cy="28" r="3" fill="#89251E" opacity="0.5" />
              <ellipse cx="30" cy="38" rx="6" ry="4" fill="#89251E" opacity="0.4" />
              <path
                d="M18 45 Q30 52 42 45"
                fill="none"
                stroke="#89251E"
                strokeWidth="2"
                opacity="0.4"
              />
              <ellipse
                cx="30"
                cy="70"
                rx="12"
                ry="14"
                fill="none"
                stroke="url(#goldGradLeft)"
                strokeWidth="5"
              />
              <ellipse
                cx="30"
                cy="70"
                rx="12"
                ry="14"
                fill="none"
                stroke="#89251E"
                strokeWidth="1"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="goldGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7D98C" />
                  <stop offset="50%" stopColor="#F3C66C" />
                  <stop offset="100%" stopColor="#C4952E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <svg
            className="absolute left-1/2 top-[20%] h-28 w-24 -translate-x-1/2 opacity-30 md:h-36 md:w-32"
            viewBox="0 0 120 140"
          >
            <path
              d="M20 90 Q40 60 55 40 Q62 32 70 42 L85 65 Q75 68 68 60 L60 50 Q52 65 40 82 L28 95 Z"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.5"
            />
            <path
              d="M25 85 Q45 55 60 45"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.7"
            />
            <path
              d="M30 80 Q48 52 62 47"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="72" cy="36" r="5" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
            <path d="M76 37 L90 32" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
            <circle cx="70" cy="35" r="1.5" fill="#F3C66C" />
            <circle cx="72" cy="32" r="2" fill="#F3C66C" opacity="0.8" />
            <path
              d="M25 92 L15 115 M18 113 L12 115 L18 117"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <path
              d="M32 88 L28 112 M24 110 L28 112 L32 110"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <path d="M35 95 Q25 100 20 105" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M38 92 Q30 98 22 102" fill="none" stroke="#F3C66C" strokeWidth="1" />
          </svg>

          <svg
            className="absolute bottom-[15%] left-1/2 h-24 w-28 -translate-x-1/2 opacity-30 md:h-32 md:w-36"
            viewBox="0 0 140 100"
          >
            <path
              d="M70 80 Q50 55 70 20 Q90 55 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.5"
            />
            <path
              d="M70 80 Q35 60 70 30 Q105 60 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.2"
            />
            <path
              d="M70 80 Q20 65 70 40 Q120 65 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <ellipse cx="70" cy="70" rx="8" ry="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <circle cx="66" cy="68" r="1.5" fill="#F3C66C" opacity="0.6" />
            <circle cx="70" cy="66" r="1.5" fill="#F3C66C" opacity="0.6" />
            <circle cx="74" cy="68" r="1.5" fill="#F3C66C" opacity="0.6" />
            <path d="M25 85 Q35 70 50 75 Q40 85 25 85" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M30 82 L45 77" fill="none" stroke="#F3C66C" strokeWidth="0.5" />
            <path d="M115 85 Q105 70 90 75 Q100 85 115 85" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M110 82 L95 77" fill="none" stroke="#F3C66C" strokeWidth="0.5" />
            <ellipse
              cx="70"
              cy="90"
              rx="35"
              ry="6"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>

          <svg
            className="absolute left-1 top-1/2 h-2/3 w-4 -translate-y-1/2 opacity-25"
            viewBox="0 0 20 200"
          >
            <path d="M10 0 L10 200" stroke="#F3C66C" strokeWidth="2" />
            <path d="M5 30 Q10 35 15 30" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 70 Q10 75 15 70" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 110 Q10 115 15 110" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 150 Q10 155 15 150" fill="none" stroke="#F3C66C" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 h-full w-1/2 origin-right"
        style={{
          backgroundColor: "#89251E",
          boxShadow: doorsOpen
            ? "-30px 0 80px rgba(0,0,0,0.6), inset 30px 0 80px rgba(0,0,0,0.35)"
            : "inset 20px 0 60px rgba(0,0,0,0.3)",
          transform: doorsOpen ? "rotateY(110deg)" : "rotateY(0deg)",
          transition: "transform 2s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 2s ease",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-6"
          style={{
            background: "linear-gradient(to left, #6d1d17, #5a1813)",
            transform: "rotateY(-90deg) translateX(-12px)",
            transformOrigin: "left",
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, row) =>
            [...Array(3)].map((_, col) => (
              <div
                key={`stud-right-${row}-${col}`}
                className="absolute h-4 w-4 rounded-full md:h-5 md:w-5"
                style={{
                  top: `${15 + row * 18}%`,
                  right: `${20 + col * 25}%`,
                  background:
                    "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 40%, #C4952E 100%)",
                  boxShadow:
                    "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.4)",
                }}
              />
            )),
          )}
        </div>

        <div className="absolute inset-4 rounded border-2 border-[#F3C66C]/40 md:inset-6">
          <div className="absolute inset-2 rounded border border-[#F3C66C]/25 md:inset-3" />

          <svg
            className="absolute left-1/2 top-2 h-12 w-3/4 -translate-x-1/2 opacity-30 md:h-16"
            viewBox="0 0 200 40"
          >
            <defs>
              <pattern
                id="latticeRight"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 10 L10 0 M10 20 L20 10 M0 10 L10 20 M10 0 L20 10"
                  stroke="#F3C66C"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect x="0" y="5" width="200" height="30" fill="url(#latticeRight)" />
            <rect x="0" y="5" width="200" height="30" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
          </svg>

          <svg
            className="absolute left-1/2 bottom-2 h-12 w-3/4 -translate-x-1/2 opacity-30 md:h-16"
            viewBox="0 0 200 40"
          >
            <rect x="0" y="5" width="200" height="30" fill="url(#latticeRight)" />
            <rect x="0" y="5" width="200" height="30" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
          </svg>

          {["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"].map(
            (pos, i) => (
              <svg
                key={i}
                className={`absolute ${pos} h-14 w-14 opacity-40 md:h-20 md:w-20`}
                viewBox="0 0 80 80"
              >
                <path
                  d="M5 5 L5 40 Q5 5 40 5"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="2"
                />
                <path
                  d="M10 10 L10 30 Q10 10 30 10"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 15 L15 22 Q15 15 22 15"
                  fill="none"
                  stroke="#F3C66C"
                  strokeWidth="1"
                />
                <circle cx="8" cy="25" r="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <circle cx="25" cy="8" r="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <path d="M5 35 Q12 32 15 25" fill="none" stroke="#F3C66C" strokeWidth="1" />
                <path d="M35 5 Q32 12 25 15" fill="none" stroke="#F3C66C" strokeWidth="1" />
              </svg>
            ),
          )}

          <div className="absolute left-3 top-1/2 -translate-y-1/2 md:left-5">
            <svg className="h-14 w-10 md:h-20 md:w-14" viewBox="0 0 60 90">
              <ellipse cx="30" cy="35" rx="22" ry="28" fill="url(#goldGradRight)" />
              <ellipse
                cx="30"
                cy="35"
                rx="18"
                ry="24"
                fill="none"
                stroke="#89251E"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <circle cx="22" cy="28" r="3" fill="#89251E" opacity="0.5" />
              <circle cx="38" cy="28" r="3" fill="#89251E" opacity="0.5" />
              <ellipse cx="30" cy="38" rx="6" ry="4" fill="#89251E" opacity="0.4" />
              <path
                d="M18 45 Q30 52 42 45"
                fill="none"
                stroke="#89251E"
                strokeWidth="2"
                opacity="0.4"
              />
              <ellipse
                cx="30"
                cy="70"
                rx="12"
                ry="14"
                fill="none"
                stroke="url(#goldGradRight)"
                strokeWidth="5"
              />
              <ellipse
                cx="30"
                cy="70"
                rx="12"
                ry="14"
                fill="none"
                stroke="#89251E"
                strokeWidth="1"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="goldGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7D98C" />
                  <stop offset="50%" stopColor="#F3C66C" />
                  <stop offset="100%" stopColor="#C4952E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <svg
            className="absolute left-1/2 top-[20%] h-28 w-24 -translate-x-1/2 scale-x-[-1] opacity-30 md:h-36 md:w-32"
            viewBox="0 0 120 140"
          >
            <path
              d="M20 90 Q40 60 55 40 Q62 32 70 42 L85 65 Q75 68 68 60 L60 50 Q52 65 40 82 L28 95 Z"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.5"
            />
            <path
              d="M25 85 Q45 55 60 45"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.7"
            />
            <path
              d="M30 80 Q48 52 62 47"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="72" cy="36" r="5" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
            <path d="M76 37 L90 32" fill="none" stroke="#F3C66C" strokeWidth="1.5" />
            <circle cx="70" cy="35" r="1.5" fill="#F3C66C" />
            <circle cx="72" cy="32" r="2" fill="#F3C66C" opacity="0.8" />
            <path
              d="M25 92 L15 115 M18 113 L12 115 L18 117"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <path
              d="M32 88 L28 112 M24 110 L28 112 L32 110"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <path d="M35 95 Q25 100 20 105" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M38 92 Q30 98 22 102" fill="none" stroke="#F3C66C" strokeWidth="1" />
          </svg>

          <svg
            className="absolute bottom-[15%] left-1/2 h-24 w-28 -translate-x-1/2 opacity-30 md:h-32 md:w-36"
            viewBox="0 0 140 100"
          >
            <path
              d="M70 80 Q50 55 70 20 Q90 55 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.5"
            />
            <path
              d="M70 80 Q35 60 70 30 Q105 60 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1.2"
            />
            <path
              d="M70 80 Q20 65 70 40 Q120 65 70 80"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
            />
            <ellipse cx="70" cy="70" rx="8" ry="5" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <circle cx="66" cy="68" r="1.5" fill="#F3C66C" opacity="0.6" />
            <circle cx="70" cy="66" r="1.5" fill="#F3C66C" opacity="0.6" />
            <circle cx="74" cy="68" r="1.5" fill="#F3C66C" opacity="0.6" />
            <path d="M25 85 Q35 70 50 75 Q40 85 25 85" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M30 82 L45 77" fill="none" stroke="#F3C66C" strokeWidth="0.5" />
            <path d="M115 85 Q105 70 90 75 Q100 85 115 85" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M110 82 L95 77" fill="none" stroke="#F3C66C" strokeWidth="0.5" />
            <ellipse
              cx="70"
              cy="90"
              rx="35"
              ry="6"
              fill="none"
              stroke="#F3C66C"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>

          <svg
            className="absolute right-1 top-1/2 h-2/3 w-4 -translate-y-1/2 opacity-25"
            viewBox="0 0 20 200"
          >
            <path d="M10 0 L10 200" stroke="#F3C66C" strokeWidth="2" />
            <path d="M5 30 Q10 35 15 30" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 70 Q10 75 15 70" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 110 Q10 115 15 110" fill="none" stroke="#F3C66C" strokeWidth="1" />
            <path d="M5 150 Q10 155 15 150" fill="none" stroke="#F3C66C" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {showParticles && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: "linear-gradient(135deg, #F3C66C 0%, #D4A84B 100%)",
                animation: `particleBurst 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay}ms forwards`,
                boxShadow: "0 0 8px rgba(243, 198, 108, 0.7)",
                ["--distance" as string]: `${p.distance}px`,
                ["--angle" as string]: `${p.angle}deg`,
              }}
            />
          ))}
        </div>
      )}

      <button
        onClick={handleSealClick}
        disabled={sealClicked}
        className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all ${
          sealClicked ? "scale-150 opacity-0 duration-700" : "scale-100 opacity-100 duration-300"
        }`}
      >
        <div className="relative">
          <div
            className={`absolute -inset-6 rounded-full blur-2xl transition-all duration-1000 ${
              sealPulse ? "scale-115 opacity-50" : "scale-100 opacity-25"
            }`}
            style={{ background: "radial-gradient(circle, #F3C66C 0%, transparent 70%)" }}
          />

          <div className="absolute inset-0 translate-y-4 rounded-full bg-black/30 blur-xl" />

          <svg
            className="absolute -bottom-3 left-1/2 h-10 w-32 -translate-x-1/2 md:h-12 md:w-40"
            viewBox="0 0 100 25"
          >
            <defs>
              <linearGradient id="waxDrip" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F3C66C" />
                <stop offset="100%" stopColor="#C4952E" />
              </linearGradient>
            </defs>
            <ellipse cx="50" cy="5" rx="40" ry="7" fill="url(#waxDrip)" />
            <ellipse cx="22" cy="12" rx="4" ry="7" fill="url(#waxDrip)" />
            <ellipse cx="50" cy="13" rx="3" ry="9" fill="url(#waxDrip)" />
            <ellipse cx="78" cy="11" rx="4" ry="6" fill="url(#waxDrip)" />
          </svg>

          <div
            className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full transition-transform duration-300 md:h-32 md:w-32 ${
              !sealClicked ? "hover:scale-105 active:scale-95" : ""
            }`}
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #F7D98C 0%, #F3C66C 25%, #D4A84B 65%, #B8893D 100%)",
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.35), inset 0 3px 6px rgba(255,255,255,0.35), inset 0 -5px 10px rgba(0,0,0,0.25)",
            }}
          >
            <div className="absolute inset-2 rounded-full border-2 border-[#89251E]/25" />
            <div className="absolute inset-4 rounded-full border border-[#89251E]/15" />
            <div className="absolute inset-6 rounded-full border border-[#89251E]/10" />

            <div
              className="absolute inset-4 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 65% 65%, transparent 0%, rgba(0,0,0,0.08) 100%)",
              }}
            />

            <span
              className="relative select-none text-4xl font-bold md:text-5xl"
              style={{
                color: "#89251E",
                textShadow:
                  "1px 1px 0 rgba(255,255,255,0.35), -1px -1px 0 rgba(0,0,0,0.15)",
              }}
            >
              囍
            </span>
          </div>

          {!sealClicked && (
            <div className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#89251E]/40" />
                <p className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-[#89251E] md:text-sm">
                  Tap to Open
                </p>
                <span className="h-px w-6 bg-[#89251E]/40" />
              </div>
              <svg
                className="h-4 w-4 animate-bounce text-[#89251E]/50 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </div>
          )}
        </div>
      </button>

      <style jsx>{`
        @keyframes particleBurst {
          0% {
            transform: rotate(var(--angle)) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateY(var(--distance)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

export const HeroLoader = () => {
  const [done, setDone] = useState(false)
  if (done) return null
  return <OpeningAnimation onComplete={() => setDone(true)} />
}

export default HeroLoader
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

const desktopImages: string[] = [
  '/desktop-background/couple (1).jpg',
  '/desktop-background/couple (2).jpg',
  '/desktop-background/couple (3).jpg',
  '/desktop-background/couple (4).jpg',
  '/desktop-background/couple (5).jpg',
];

const mobileImages: string[] = [
  '/mobile-background/couple (1).jpg',
  '/mobile-background/couple (2).jpg',
  '/mobile-background/couple (3).jpg',
  '/mobile-background/couple (4).jpg',
  '/mobile-background/couple (5).jpg',
];

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setContentVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [visible]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gentleFloat {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const images = useMemo(() => (isMobile ? mobileImages : desktopImages), [isMobile]);

  return (
      <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: i === index ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'
            }}
          >
            <Image
              src={src}
              alt="Couple"
              fill
              quality={90}
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(239, 210, 170, 0.5), rgba(239, 210, 170, 0.7))'
          }}
        />
        
        {/* Subtle vignette effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(239, 210, 170, 0.3) 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <div 
          className={`mb-auto mt-8 transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
            {/* Monogram Image with subtle animation */}
            <div 
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 transition-transform duration-700 ease-out hover:scale-105"
              style={{
                animation: contentVisible ? 'gentleFloat 3s ease-in-out infinite' : 'none'
              }}
            >
              <Image
                src="/monogram/monogram.png"
                alt="Monogram"
                fill
                className="object-contain drop-shadow-lg"
                priority
                style={{
                  // White with glow #FBCCC9
                  filter:
                    'brightness(0) invert(1) drop-shadow(0 0 5px #FBCCC9) drop-shadow(0 0 10px #FBCCC9)',
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-5 sm:gap-6 pb-14 sm:pb-16 md:pb-20">
          <h2
            className={`text-6xl md:text-8xl transform -rotate-6 transition-all duration-1000 ease-out delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontWeight: 400,
              color: '#FFFFFF',
              textShadow: '0 0 10px #FBCCC9, 0 0 20px #FBCCC9',
            }}
          >
            You are
          </h2>
          
          <h1
            className={`text-5xl md:text-7xl font-bold tracking-wider uppercase transition-all duration-1000 ease-out delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              color: '#FFFFFF',
              textShadow: '0 0 10px #FBCCC9, 0 0 20px #FBCCC9',
              letterSpacing: '0.05em',
            }}
          >
            Invited!
          </h1>

          <button 
            onClick={() => {
              onOpen();
            }}
            className={`px-10 py-4 font-serif text-sm tracking-[0.2em] uppercase rounded-sm border transition-all duration-500 ease-out delay-500 shadow-lg hover:shadow-xl ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              backgroundColor: '#C44569',
              borderColor: '#C44569',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D65D7D';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#D65D7D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C44569';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#C44569';
            }}
          >
            <span
              style={{ fontFamily: '"Cinzel", serif', fontWeight: 600, color: '#FFFFFF' }}
            >
              Open Invitation
            </span>
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};