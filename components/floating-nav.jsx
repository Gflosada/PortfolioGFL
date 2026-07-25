"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/src/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()
  const isLanding = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const visibleAfter = isLanding && isMobile ? 420 : 100

      if (window.scrollY > visibleAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLanding, isMobile])

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ]

  const landingLogoClass =
    "[font-family:var(--font-super-sliced),var(--font-orbitron),Arial,sans-serif] uppercase tracking-[0.02em] text-white"
  const landingNavTextClass =
    "[font-family:var(--font-orbitron),Arial,sans-serif] uppercase tracking-[0.17em] font-extrabold"

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed left-4 right-4 top-4 z-[70] md:left-1/2 md:right-auto md:top-6 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ x: isMobile ? 0 : "-50%", y: -100 }}
        animate={{ x: isMobile ? 0 : "-50%", y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`relative w-full px-4 py-3 backdrop-blur-md shadow-lg md:w-auto ${
            isLanding
              ? "rounded-none border border-[#caff25]/25 bg-black/85 shadow-[#caff25]/10"
              : "rounded-full border border-zinc-700/50 bg-zinc-800/80"
          }`}
        >
          <div
            className={`absolute -inset-0.5 blur opacity-50 ${
              isLanding ? "rounded-none bg-[#caff25]/10" : "rounded-full bg-gradient-to-r from-slate-500/20 to-blue-500/20"
            }`}
          ></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="font-bold text-lg">
                <span className={isLanding ? landingLogoClass : "bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-blue-500"}>
                  German
                </span>
                <span className={isLanding ? landingLogoClass : "text-white"}>{isLanding ? " Losada_" : "Losada"}</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className={
                  isLanding
                    ? "text-[#d9ff59] hover:bg-[#caff25]/10 hover:text-[#caff25]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <span className={isLanding ? landingLogoClass : "bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-blue-500"}>
                  German
                </span>
                <span className={isLanding ? landingLogoClass : "text-white"}>{isLanding ? " Losada_" : "Losada"}</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    isLanding ? `${landingNavTextClass} text-zinc-300 hover:text-[#d9ff59]` : "text-zinc-400 hover:text-white"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className={`ml-2 border-0 ${
                  isLanding
                    ? `${landingNavTextClass} rounded-none bg-[#caff25] text-black hover:bg-[#d9ff59]`
                    : "bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-600"
                }`}
              >
                <Link href="/ResumeGL .docx.pdf" download className="relative z-10 flex items-center">
                  Download Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-[65] backdrop-blur-md ${
            isLanding
              ? "bg-[radial-gradient(ellipse_at_50%_18%,rgba(202,255,37,0.12),transparent_42%),linear-gradient(180deg,rgba(2,6,13,0.98),rgba(0,0,0,0.94))]"
              : "bg-black/90"
          } ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-full flex-col items-center justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-8 py-4 text-2xl transition-colors ${
                  isLanding
                    ? `${landingNavTextClass} text-white hover:text-[#d9ff59]`
                    : "font-medium text-white hover:text-purple-400"
                }`}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className={`mt-6 border-0 ${
                isLanding
                  ? `${landingNavTextClass} rounded-none bg-[#caff25] text-black hover:bg-[#d9ff59]`
                  : "bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-600"
              }`}
            >
              <Link href="/ResumeGL .docx.pdf" download className="relative z-10 flex items-center">
                Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
