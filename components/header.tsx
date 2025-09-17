"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isLightBehind, setIsLightBehind] = useState(false)
  const [forceTransparent, setForceTransparent] = useState(true)

  useEffect(() => {
    const getLuminance = (r: number, g: number, b: number) => {
      const srgb = [r, g, b].map((v) => {
        const c = v / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
    }

    const parseRgb = (val: string): { r: number; g: number; b: number; a: number } | null => {
      const m = val.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/)
      if (!m) return null
      return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a: m[4] ? Number(m[4]) : 1 }
    }

    const detectBackground = () => {
      const header = document.getElementById("site-header")
      if (!header) return
      // 1) Force transparent if we're within the top half of the hero
      const hero = document.getElementById("hero") as HTMLElement | null
      if (hero) {
        const heroTop = hero.offsetTop
        const heroHeight = hero.offsetHeight
        const heroHalf = heroHeight / 2
        const scrollY = window.scrollY
        // transparent while scroll within [heroTop - 1px, heroTop + heroHalf)
        const inTopHalf = scrollY < heroTop + heroHalf
        setForceTransparent(inTopHalf)
      }

      // 2) Auto-detect background brightness behind header
      const rect = header.getBoundingClientRect()
      const x = Math.min(Math.max(rect.left + rect.width / 2, 0), window.innerWidth - 1)
      const y = Math.min(Math.max(rect.top + rect.height / 2, 0), window.innerHeight - 1)
      let el: Element | null = document.elementFromPoint(x, y)
      let attempts = 0
      while (el && attempts < 10) {
        const style = window.getComputedStyle(el as Element)
        const bgImg = style.backgroundImage
        const bgCol = style.backgroundColor
        const parsed = parseRgb(bgCol)

        if (bgImg && bgImg !== "none") {
          // If there is an image/gradient, assume mixed background; use body color fallback.
          const bodyParsed = parseRgb(getComputedStyle(document.body).backgroundColor)
          if (bodyParsed) {
            setIsLightBehind(getLuminance(bodyParsed.r, bodyParsed.g, bodyParsed.b) > 0.6)
            return
          }
        }

        if (parsed && parsed.a > 0 && bgCol !== "transparent") {
          setIsLightBehind(getLuminance(parsed.r, parsed.g, parsed.b) > 0.6)
          return
        }

        el = (el as HTMLElement).parentElement
        attempts += 1
      }

      // Fallback to body background
      const bodyParsed = parseRgb(getComputedStyle(document.body).backgroundColor || "rgb(255,255,255)")
      if (bodyParsed) setIsLightBehind(getLuminance(bodyParsed.r, bodyParsed.g, bodyParsed.b) > 0.6)
    }

    let ticking = false
    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          detectBackground()
          ticking = false
        })
        ticking = true
      }
    }

    detectBackground()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)
    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  const containerClasses = forceTransparent
    ? "bg-transparent"
    : isLightBehind
    ? "bg-white/70 backdrop-blur-xl border-b border-black/10 shadow-sm supports-[backdrop-filter]:bg-white/50"
    : "bg-transparent"

  const linkClasses = forceTransparent
    ? "text-white/80 hover:text-white"
    : isLightBehind
    ? "text-black/80 hover:text-black"
    : "text-white/80 hover:text-white"

  const ctaClasses = forceTransparent
    ? "bg-white text-black hover:bg-white/90"
    : isLightBehind
    ? "bg-black text-white hover:bg-black/90"
    : "bg-white text-black hover:bg-white/90"

  return (
    <header id="site-header" className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 transition-colors duration-300 ${containerClasses}`}>
      <div className="flex items-center">
        <Link href="/" className={`font-semibold text-lg tracking-tight ${forceTransparent ? "text-white" : isLightBehind ? "text-black" : "text-white"}`}>
          <span className="font-light">tecx</span>
          <span className="font-bold">mate</span>
        </Link>
      </div>

      <nav className="flex items-center space-x-2">
        <Link
          href="/"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Home
        </Link>
        <Link
          href="/#services"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Services
        </Link>
        <Link
          href="/#portfolio"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Products
        </Link>
        <Link
          href="/#team"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Team
        </Link>
        <Link
          href="/blog"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`${linkClasses} text-xs font-light px-3 py-1.5 rounded-full transition-all duration-200`}
        >
          Contact
        </Link>
      </nav>

      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className={`absolute right-0 px-2 py-1.5 rounded-full font-normal text-[11px] transition-all duration-300 cursor-pointer h-[28px] flex items-center justify-center -translate-x-9 group-hover:-translate-x-16 z-0 ${ctaClasses}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className={`px-5 py-1.5 rounded-full font-normal text-xs transition-all duration-300 cursor-pointer h-[28px] flex items-center z-10 ${ctaClasses}`}>
          Get Started
        </button>
      </div>
    </header>
  )
}

