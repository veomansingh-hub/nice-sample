"use client"

import Image from "next/image"
import { PhotoGallery } from "@/components/photo-gallery"
import TagList from "@/components/tag-list"
import { motion } from "framer-motion"
import type { Collection } from "@/lib/types"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight, Film } from "lucide-react"
import { siteConfig } from "@/lib/config"

interface Props {
  collection: Collection
}

export function CollectionContent({ collection }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={collection.coverImage || "/nick/hero-camera.webp"}
          alt={collection.title}
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
            <Film size={13} className="text-primary" />
            <span>{siteConfig.name} · Spec Category</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-mono uppercase font-bold tracking-tight text-white mb-2">
            {collection.title}
          </h1>
          <p className="text-white/90 text-sm md:text-base font-mono max-w-2xl mb-4">
            {collection.description}
          </p>
          <TagList tags={collection.tags} variant="light" />
        </motion.div>
      </section>

      {/* Collection Info */}
      <motion.section
        className="py-10 px-4 md:px-8 max-w-4xl mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="p-6 rounded-2xl bg-secondary/40 border border-border">
          <p className="text-base text-foreground leading-relaxed font-light mb-3">
            {collection.fullDescription || collection.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
            <span>{siteConfig.mediaDisclaimer}</span>
            <span>Available for UK & Worldwide Productions</span>
          </div>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <section className="py-6 px-4 md:px-8 max-w-[90%] mx-auto mb-20">
        <PhotoGallery photos={collection.photos} />
      </section>

      {/* Other Categories */}
      <section className="mt-16 mb-20 py-16 px-4 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-mono uppercase tracking-tight mb-2">Explore Other Categories</h2>
            <p className="text-muted-foreground font-mono text-xs max-w-xl mx-auto">
              Ground operating, aerial drone, commercial lighting, and specialized rigs
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All Categories
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}