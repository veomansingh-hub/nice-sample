"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { siteConfig, theoMedia } from "@/lib/config"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/showcase" },
  { name: "Drone", href: "/collections/aerial" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768

      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (isMobile) {
        if (currentScrollY > 20 && currentScrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 header-height ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg border border-border/40" : "bg-transparent"
      } ${!isVisible ? "-translate-y-[80px]" : "translate-y-0"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground transition-all hover:border-foreground/40"
            >
              <span className="font-mono tracking-widest text-sm font-bold uppercase">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] text-muted-foreground uppercase font-mono tracking-wider border-l border-border pl-2">
                Camera Operator · Drone
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-1 items-center px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-foreground shadow-sm">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-foreground font-semibold bg-secondary/80 rounded-full"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 rounded-full"
                  } px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <div className="toggle-container">
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center justify-center rounded-full bg-background/80 border border-border/50 text-foreground">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className="p-2"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col min-h-screen p-6 border-l border-border"
          >
            <div className="flex justify-between items-center pb-6 border-b border-border">
              <span className="font-mono tracking-widest text-sm font-bold uppercase">
                {siteConfig.name}
              </span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className="p-2 text-foreground"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.button>
            </div>

            <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-mono uppercase tracking-widest ${
                    pathname === item.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-8 text-center space-y-3">
                <p className="text-xs text-muted-foreground font-mono mb-3 uppercase">Get In Touch</p>
                <a
                  href={theoMedia.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#25D366] text-white text-sm font-semibold font-mono tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  <span>Chat on WhatsApp</span>
                </a>
                <div>
                  <a
                    href={theoMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground underline underline-offset-4"
                  >
                    <ExternalLink size={13} />
                    <span>{theoMedia.displayUrl}</span>
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
