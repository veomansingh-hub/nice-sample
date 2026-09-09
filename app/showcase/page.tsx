"use client"

import { Suspense } from "react"
import Image from "next/image"
import CollectionGrid from "@/components/collection-grid"
import TagFilters from "@/components/tag-filters"
import Loading from "@/components/loading"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/nick/hero-camera.webp"
          alt="Cinematography and camera operating showcase - Concept imagery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[11px] font-mono tracking-wider uppercase mb-3">
            <span className="text-primary">{siteConfig.name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-mono uppercase font-bold tracking-tight text-white mb-2">
            Work Categories
          </h1>
          <p className="text-white/80 text-sm md:text-base font-mono max-w-2xl">
            Cinematography, aerial drone work, camera operating, and technical prep
          </p>
          <p className="text-white/50 text-[11px] font-mono mt-2 uppercase tracking-widest">
            {siteConfig.mediaDisclaimer}
          </p>
        </motion.div>
      </section>

      {/* Category Filters */}
      <motion.section
        className="py-8 px-4 md:px-8 max-w-7xl mx-auto mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-center mb-6">
          <TagFilters />
        </div>
      </motion.section>

      {/* Collections Grid */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <Suspense fallback={<Loading />}>
          <CollectionGrid />
        </Suspense>
      </section>
    </div>
  )
}
