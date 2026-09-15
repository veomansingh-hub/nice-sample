"use client"

import Image from "next/image"
import { ArrowRight, Video, Compass, Layers, ShieldCheck, Mail, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import { siteConfig, theoMedia } from "@/lib/config"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/nick/hero-camera.webp"
          alt="Film set cinema camera rig - Concept imagery"
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
            <span className="text-primary">Professional Profile</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-mono uppercase font-bold tracking-tight text-white mb-2">
            About {siteConfig.name}
          </h1>
          <p className="text-white/80 text-sm md:text-base font-mono max-w-2xl">
            {siteConfig.rolesFormatted}
          </p>
        </motion.div>
      </section>

      {/* Main Bio & Portrait Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Portrait with Transparent Disclaimer */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[560px] w-full rounded-3xl overflow-hidden border border-border/80 shadow-2xl group">
              <Image
                src={siteConfig.authorImage}
                alt="Nick Parker portfolio concept portrait"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-xs font-mono">
                  <p className="text-white font-semibold mb-0.5">Working Environment Representation</p>
                  <p className="text-neutral-400 text-[11px]">
                    {siteConfig.portraitDisclaimer}. Structured for seamless replacement upon provision of verified production headshot.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-tight mt-1 mb-4">
                Camera Craft & Aerial Operations
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Nick Parker is a UK-based camera professional operating across feature films, television drama, documentary, commercial, and specialist factual productions. His roles encompass <strong className="text-foreground">Camera Operator</strong>, <strong className="text-foreground">Director of Photography (DOP)</strong>, <strong className="text-foreground">Camera Assistant</strong>, and <strong className="text-foreground">Drone Pilot</strong>.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              With a commitment to visual precision and narrative intent, Nick provides adaptable camera operating solutions ranging from physical handheld and Easyrig operating to complex multi-axis gimbal setups and high-altitude cinema drone tracking.
            </p>

            {/* Core Capabilities */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Video size={18} className="text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase">Camera Operating</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Handheld, Easyrig, Steadicam, geared and fluid heads, and tracking vehicles for narrative continuity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Compass size={18} className="text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase">Drone Piloting</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Heavy-lift and dual-operator aerial cinematography covering dynamic tracking, landscape reveal, and chase sequences.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={18} className="text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase">Camera Assistant / 1st AC</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Precision wireless focus pulling, optical prep, wireless video feeds (Teradek), and camera truck organization.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase">Production Readiness</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thorough set etiquette, risk assessment compliance, and reliable operation in challenging field conditions.
                </p>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <AnimatedButton href="/contact" variant="primary" icon={<Mail size={16} />}>
                Production Enquiry
              </AnimatedButton>
              <a
                href={theoMedia.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Principles */}
      <section className="py-16 px-4 md:px-8 border-t border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-mono uppercase tracking-tight text-foreground">
              Production Discipline & Standards
            </h2>
            <p className="text-muted-foreground text-sm font-mono mt-2">
              Core operational standards brought to every call sheet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Story-Driven Framing",
                description:
                  "Every pan, tilt, and push serves the director's narrative beats and character emotions, rather than drawing attention to the camera itself.",
              },
              {
                title: "Rigorous Technical Prep",
                description:
                  "Comprehensive lens checks, balance calibration, power management, and wireless link testing before rolling on set.",
              },
              {
                title: "Safety & Airspace Compliance",
                description:
                  "Strict adherence to film set health and safety standards and authorized drone operations with certified flight protocols.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <h3 className="font-mono text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-tight mb-4">
            Available For Production Enquiries
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Contact directly with production dates, treatment, or camera package requirements.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Get in Touch
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}
