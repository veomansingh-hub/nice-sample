'use client'

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion"
import { ArrowRight, Compass, Mail, Film } from "lucide-react"
import { siteConfig } from "@/lib/config"

const IMAGES = [
  "/nick/hero-camera.webp",
  "/nick/hero-drone.webp",
  "/camera-operating/cover.webp",
  "/commercial/cover.webp",
  "/specialist-factual/cover.webp",
]

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-2xl border border-white/10"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt="Cinematic production concept frame"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-[11px] font-mono tracking-wider uppercase mb-6"
        >
          <Film size={13} className="text-primary" />
          <span>Cinematography & Camera Department</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-mono tracking-tighter uppercase font-extrabold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          NICK GAVEN
        </motion.h1>

        <motion.p
          className="mt-3 text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Camera Operator · DOP · Camera Assistant · Drone Pilot
        </motion.p>

        <motion.p
          className="my-6 max-w-xl mx-auto text-base sm:text-xl text-foreground/90 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Visual storytelling from ground to air.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatedButton href="#work" variant="primary" icon={<ArrowRight size={16} />}>
            VIEW WORK
          </AnimatedButton>
          <AnimatedButton href="/collections/aerial" variant="outline" icon={<Compass size={16} />}>
            DRONE
          </AnimatedButton>
          <AnimatedButton href="/contact" variant="outline" icon={<Mail size={16} />}>
            CONTACT
          </AnimatedButton>
        </motion.div>

        <motion.div
          className="mt-8 text-[11px] font-mono text-muted-foreground/70 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {siteConfig.mediaDisclaimer}
        </motion.div>
      </ContainerScale>
    </ContainerScroll>
  )
}
