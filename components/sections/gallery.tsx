"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/section"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
// Removed circular gallery in favor of a responsive masonry layout

const galleryItems = [
  { image: "/mobile-background/couple (4).jpg", text: " " },   
  { image: "/desktop-background/couple (4).jpg", text: " " },
  { image: "/desktop-background/couple (6).JPG", text: " " },
  { image: "/desktop-background/couple (7).JPG", text: " " },
  { image: "/desktop-background/couple (5).JPG", text: " " },
  { image: "/desktop-background/couple (9).JPG", text: " " },
  { image: "/desktop-background/couple (8).JPG", text: " " },
  { image: "/desktop-background/couple (11).JPG", text: " " },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  // reserved for potential skeleton tracking; not used after fade-in simplification
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchDeltaX, setTouchDeltaX] = useState(0)
  const [zoomScale, setZoomScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [pinchStartDist, setPinchStartDist] = useState<number | null>(null)
  const [pinchStartScale, setPinchStartScale] = useState(1)
  const [lastTap, setLastTap] = useState(0)
  const [panStart, setPanStart] = useState<{ x: number; y: number; panX: number; panY: number } | null>(null)

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex
      if (direction === 'next') {
        newIndex = (prevIndex + 1) % galleryItems.length
      } else {
        newIndex = (prevIndex - 1 + galleryItems.length) % galleryItems.length
      }
      setSelectedImage(galleryItems[newIndex])
      return newIndex
    })
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'Escape') setSelectedImage(null)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, currentIndex, navigateImage])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  // Preload adjacent images for smoother nav
  useEffect(() => {
    if (selectedImage) {
      const next = new Image()
      next.src = galleryItems[(currentIndex + 1) % galleryItems.length].image
      const prev = new Image()
      prev.src = galleryItems[(currentIndex - 1 + galleryItems.length) % galleryItems.length].image
    }
  }, [selectedImage, currentIndex])

  const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val))
  const resetZoom = () => {
    setZoomScale(1)
    setPan({ x: 0, y: 0 })
    setPanStart(null)
  }

  return (
    <Section
      id="gallery"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#8B1E1E]"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_50%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.32)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06]" />
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
          Our Moments
        </h2>
        <p
          className={`${montserrat.className} text-xs sm:text-sm md:text-base text-[#FDEFD0] font-normal max-w-xl mx-auto leading-relaxed tracking-[0.14em] px-4`}
        >
          Every moment, a treasured memory made eternal
        </p>
      </div>

      {/* Gallery content */}
      <div className="relative z-10 w-full">
        <div className="flex justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl w-full">
            {isLoading ? (
              <div className="flex items-center justify-center h-64 sm:h-80 md:h-96">
                <div className="w-12 h-12 border-[3px] border-[#C44569]/30 border-t-[#C44569] rounded-full animate-spin" />
              </div>
            ) : (
              <>
                {/* Mobile: swipeable sliding gallery (scroll-snap carousel) */}
                <div className="sm:hidden">
                  <div
                    className="flex gap-3 overflow-x-auto px-1 pb-3 snap-x snap-mandatory scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    aria-label="Gallery carousel"
                  >
                    {galleryItems.map((item, index) => (
                      <button
                        key={item.image + index}
                      type="button"
                      className="group relative snap-center shrink-0 w-[82%] overflow-hidden rounded-lg bg-[#FDF6EA]/90 backdrop-blur-sm border border-[#E0C5A2]/60 shadow-[0_12px_30px_rgba(0,0,0,0.45)] active:shadow-[0_16px_40px_rgba(0,0,0,0.6)] active:border-[#F3C66C]/80 transition-all duration-300"
                        onClick={() => {
                          setSelectedImage(item)
                          setCurrentIndex(index)
                        }}
                        aria-label={`Open image ${index + 1}`}
                      >
                        {/* Subtle glow on active (mobile) */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#F3C66C]/22 to-transparent rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-300 blur-sm" />

                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.text || `Gallery image ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            sizes="90vw"
                            className="w-full h-full object-cover transition-transform duration-500 group-active:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="absolute top-2 right-2 bg-black/55 backdrop-blur-sm rounded-full px-2 py-1 border border-[#F3C66C]/60">
                          <span className={`${montserrat.className} text-[0.65rem] font-medium text-[#FDEFD0] tracking-[0.14em] uppercase`}>
                            {index + 1}/{galleryItems.length}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p
                    className={`${montserrat.className} mt-2 text-center text-[0.68rem] text-[#FDEFD0] tracking-[0.16em] uppercase`}
                  >
                    Swipe to slide
                  </p>
                </div>

                {/* Tablet/Desktop: existing grid */}
                <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
                  {galleryItems.map((item, index) => (
                    <button
                      key={item.image + index}
                      type="button"
                      className="group relative w-full overflow-hidden rounded-xl bg-[#FDF6EA]/90 backdrop-blur-sm border border-[#E0C5A2]/60 shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:border-[#F3C66C]/80 transition-all duration-300"
                      onClick={() => {
                        setSelectedImage(item)
                        setCurrentIndex(index)
                      }}
                      aria-label={`Open image ${index + 1}`}
                    >
                      {/* Subtle glow on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#F3C66C]/22 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                      <div className="relative aspect-[3/4] md:aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.text || `Gallery image ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Image counter badge */}
                      <div className="absolute top-2 right-2 bg-black/55 backdrop-blur-sm rounded-full px-2 py-1 border border-[#F3C66C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className={`${montserrat.className} text-[0.65rem] font-medium text-[#FDEFD0] tracking-[0.14em] uppercase`}>
                          {index + 1}/{galleryItems.length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* View more */}
            {!isLoading && (
              <div className="mt-10 sm:mt-12 flex justify-center">
                <Link
                  href="/gallery"
                  className={`${montserrat.className} inline-flex items-center justify-center rounded-full px-7 py-3 text-[0.75rem] sm:text-sm tracking-[0.2em] bg-gradient-to-r from-[#F3C66C] to-[#D4A84B] text-[#43201B] border border-[#F3C66C]/80 shadow-[0_10px_26px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.6)] hover:from-[#D4A84B] hover:to-[#F3C66C] transition-all duration-200 uppercase font-medium`}
                >
                  View more
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => {
            setSelectedImage(null)
            resetZoom()
          }}
        >
            <div
              className="relative max-w-6xl w-full h-full sm:h-auto flex flex-col items-center justify-center"
              onTouchStart={(e) => {
                if (e.touches.length === 1) {
                  const now = Date.now()
                  if (now - lastTap < 300) {
                    setZoomScale((s) => (s > 1 ? 1 : 2))
                    setPan({ x: 0, y: 0 })
                  }
                  setLastTap(now)
                  const t = e.touches[0]
                  setTouchStartX(t.clientX)
                  setTouchDeltaX(0)
                  if (zoomScale > 1) {
                    setPanStart({ x: t.clientX, y: t.clientY, panX: pan.x, panY: pan.y })
                  }
                }
                if (e.touches.length === 2) {
                  const dx = e.touches[0].clientX - e.touches[1].clientX
                  const dy = e.touches[0].clientY - e.touches[1].clientY
                  const dist = Math.hypot(dx, dy)
                  setPinchStartDist(dist)
                  setPinchStartScale(zoomScale)
                }
              }}
              onTouchMove={(e) => {
                if (e.touches.length === 2 && pinchStartDist) {
                  const dx = e.touches[0].clientX - e.touches[1].clientX
                  const dy = e.touches[0].clientY - e.touches[1].clientY
                  const dist = Math.hypot(dx, dy)
                  const scale = clamp((dist / pinchStartDist) * pinchStartScale, 1, 3)
                  setZoomScale(scale)
                } else if (e.touches.length === 1) {
                  const t = e.touches[0]
                  if (zoomScale > 1 && panStart) {
                    const dx = t.clientX - panStart.x
                    const dy = t.clientY - panStart.y
                    setPan({ x: panStart.panX + dx, y: panStart.panY + dy })
                  } else if (touchStartX !== null) {
                    setTouchDeltaX(t.clientX - touchStartX)
                  }
                }
              }}
              onTouchEnd={() => {
                setPinchStartDist(null)
                setPanStart(null)
                if (zoomScale === 1 && Math.abs(touchDeltaX) > 50) {
                  navigateImage(touchDeltaX > 0 ? 'prev' : 'next')
                }
                setTouchStartX(null)
                setTouchDeltaX(0)
              }}
            >
            {/* Top bar with counter and close */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 sm:p-6">
              {/* Image counter */}
              <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-[#9F8650]/40">
                <span className="text-sm sm:text-base font-medium text-[#9F8650]">
                  {currentIndex + 1} / {galleryItems.length}
                </span>
              </div>
              
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                  resetZoom()
                }}
                className="bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-200 border border-white/20 hover:border-white/40"
                aria-label="Close lightbox"
              >
                <X size={20} className="sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Navigation buttons */}
            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('prev')
                    resetZoom()
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-200 border border-white/20 hover:border-white/40"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="sm:w-7 sm:h-7 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('next')
                    resetZoom()
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-200 border border-white/20 hover:border-white/40"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="sm:w-7 sm:h-7 text-white" />
                </button>
              </>
            )}

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden">
              <div
                className="relative inline-block max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.text || "Gallery image"}
                  style={{ 
                    transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomScale})`, 
                    transition: pinchStartDist ? 'none' : 'transform 200ms ease-out' 
                  }}
                  className="max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl will-change-transform"
                />
                
                {/* Zoom reset button */}
                {zoomScale > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      resetZoom()
                    }}
                    className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-full px-3 py-1.5 text-xs font-medium border border-white/20 transition-all duration-200"
                  >
                    Reset Zoom
                  </button>
                )}
              </div>
            </div>

            {/* Bottom hint for mobile */}
            {galleryItems.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:hidden z-20">
                <p className="text-xs text-white/60 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                  Swipe to navigate
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  )
}