"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import StaggeredMenu from "./StaggeredMenu"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#gallery", label: "Gallery" },
  { href: "#messages", label: "Messages" },
  { href: "#details", label: "Details" },
  { href: "#entourage", label: "Entourage" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#guest-list", label: "RSVP" },
  { href: "#registry", label: "Registry" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafIdRef.current != null) return
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null
        setIsScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener("scroll", onScroll as EventListener)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = navLinks.map(l => l.href.substring(1))
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
        if (visible.length > 0) {
          const topMost = visible[0]
          if (topMost.target && topMost.target.id) {
            const newActive = `#${topMost.target.id}`
            setActiveSection(prev => (prev === newActive ? prev : newActive))
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const menuItems = useMemo(() => navLinks.map((l) => ({ label: l.label, ariaLabel: `Go to ${l.label}`, link: l.href })), [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-[#431412]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.55)] border-b border-[#F3C66C]/45"
          : "bg-[#89251E]/92 backdrop-blur-lg border-b border-[#F3C66C]/30"
      }`}
    >
      {/* Elegant glow effect when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3C66C]/25 via-transparent to-[#F3C66C]/25 pointer-events-none" />
      )}
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Link href="#home" className="flex-shrink-0 group relative z-10">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#F3C66C] to-[#D4A84B] border-2 border-[#F3C66C]/80 shadow-[0_8px_24px_rgba(0,0,0,0.55)] group-hover:scale-105 group-active:scale-95 transition-transform duration-300">
              <span
                className="text-2xl sm:text-[1.6rem] md:text-[1.8rem] leading-none font-bold select-none"
                style={{
                  color: "#89251E",
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.6), 0 0 10px rgba(243,198,108,0.7)",
                }}
                aria-label={`${siteConfig.couple.groomNickname} and ${siteConfig.couple.brideNickname} monogram`}
              >
                囍
              </span>
            </div>
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3C66C]/35 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 text-xs lg:text-sm ${cormorant.className} font-medium rounded-lg transition-all duration-500 relative group ${
                    isActive
                      ? "text-[#F3C66C] bg-[#43201B]/85 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#F3C66C]"
                      : "text-[#FCEFDD]/90 hover:text-[#F3C66C] hover:bg-[#43201B]/70 hover:border hover:border-[#F3C66C]/60 hover:shadow-[0_10px_26px_rgba(0,0,0,0.45)] hover:scale-105 active:scale-95 bg-transparent border border-transparent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F3C66C] via-[#F3C66C] to-[#F3C66C] transition-all duration-500 rounded-full ${
                      isActive
                        ? "w-full shadow-[0_0_12px_rgba(243,198,108,0.8)]"
                        : "w-0 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(243,198,108,0.7)]"
                    }`}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#F3C66C] animate-pulse shadow-[0_0_8px_rgba(243,198,108,0.9)]" />
                  )}
                  {/* Subtle accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#F3C66C]/12 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>
              )
            })}
          </div>

          <div className="md:hidden flex items-center h-full">
            {/* Decorative halo to improve tap target and visual affordance */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#C44569]/20 via-[#C44569]/10 to-transparent blur-md pointer-events-none" />
              <StaggeredMenu
                position="left"
                items={menuItems}
                socialItems={[]}
                displaySocials={false}
                displayItemNumbering={true}
                menuButtonColor="#F3C66C"
                openMenuButtonColor="#F3C66C"
                changeMenuColorOnOpen={true}
                colors={["#89251E", "#89251E", "#89251E", "#F3C66C", "#F3C66C"]}
                accentColor="#F3C66C"
                isFixed={true}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
