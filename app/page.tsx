"use client"

import { ArrowRight, Film, Radio, Compass, PhoneCall } from "lucide-react"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion"
import Image from "next/image"
import { HeroGalleryScroll } from "@/components/hero-gallery-scroll"
import { LayoutGridDemo } from "@/components/layout-image-grid"
import { siteConfig, theoMedia } from "@/lib/config"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

      {/* Hero Section with Scroll Animation */}
      <HeroGalleryScroll />

      {/* Introduction / About Nick Parker */}
      <section id="introduction" className="mt-20 mb-20 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-[11px] font-mono tracking-wider uppercase mb-4">
              <Film size={13} className="text-primary" />
              <span>Professional Disciplines</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-tight mb-6">
              Visual Storytelling From Ground To Air
            </h2>

            <p className="text-muted-foreground text-base mb-4 leading-relaxed">
              Nick Parker is a UK-based Camera Operator, Director of Photography (DOP), Camera Assistant, and licensed Drone Pilot. Working across narrative, documentary, commercial, and specialist factual productions.
            </p>

            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Equipped with deep practical experience across cinema camera ecosystems (Sony, ARRI, RED), dynamic gimbal and Easyrig operating, and dual-operator aerial drone platforms designed to serve the Director&apos;s vision.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
                About & Technical Background
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="primary" icon={<PhoneCall size={16} />}>
                Production Bookings
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[480px] rounded-3xl overflow-hidden border border-border/60 shadow-2xl group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/nick/hero-operating.webp"
              alt="Camera operator on cinema set - Concept imagery"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[11px] font-mono text-neutral-300">
              <span>CAMERA OPERATING · DYNAMIC RIG</span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                {siteConfig.mediaDisclaimer}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <LayoutGridDemo />

      {/* Featured Work Categories */}
      <section id="work" className="lg:mt-24 mb-24 px-4 md:px-8 z-10 mt-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-[11px] font-mono tracking-wider uppercase mb-3">
              <Compass size={13} className="text-primary" />
              <span>Portfolio Categories</span>
            </div>
            <h2 className="text-foreground text-3xl md:text-5xl font-mono uppercase tracking-tight mb-4">
              Work & Cinematography
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
              Visual showcase across documentary, aerial drone work, commercial productions, and camera operating
            </p>
          </motion.div>

          <FeaturedCollections />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All 6 Categories
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Production Availability Banner Call to Action */}
      <section className="z-10 max-w-5xl mx-auto w-full px-4 mb-24">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-secondary/50 to-background p-8 md:p-14 text-center shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{siteConfig.availability}</span>
          </div>

          <h2 className="text-foreground text-3xl md:text-5xl font-mono uppercase tracking-tight mb-4">
            Available For Production Bookings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            Planning a drama, documentary, commercial, or aerial shoot in the UK or internationally? Get in touch with production dates, treatment, or kit requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
              Get In Touch
            </AnimatedButton>
            <a
              href={theoMedia.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary text-sm font-mono uppercase tracking-wider transition-colors"
            >
              WhatsApp TheoMedia
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
