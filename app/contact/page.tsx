"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, MapPin, Film, ExternalLink, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig, theoMedia } from "@/lib/config"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    role: "Camera Operator",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/aerial/cover.webp"
          alt="Cinematic aerial view - Concept imagery"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{siteConfig.availability}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-mono uppercase font-bold tracking-tight text-white mb-2">
            Contact &amp; Bookings
          </h1>
          <p className="text-white/80 text-sm md:text-base font-mono max-w-xl">
            Direct production inquiries for UK and international shoots
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                Direct Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-tight mt-1 mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Available for camera operating, cinematography (DOP), camera assisting (1st AC), and commercial drone piloting across the UK and internationally.
              </p>
            </div>

            {/* WhatsApp & TheoMedia CTAs */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Contact via TheoMedia
              </p>

              <a
                href={theoMedia.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold uppercase tracking-wider">Chat on WhatsApp</p>
                  <p className="text-[11px] text-[#25D366]/70 font-mono">+353 85 225 8004 &middot; TheoMedia</p>
                </div>
              </a>

              <a
                href={theoMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/60 border border-border hover:bg-secondary transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                  <ExternalLink size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">Visit TheoMedia.co.uk</p>
                  <p className="text-[11px] text-muted-foreground font-mono">Official TheoMedia website</p>
                </div>
              </a>
            </div>

            {/* Info List */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <div>
                  <h3 className="font-mono text-xs uppercase text-muted-foreground">Operating Base</h3>
                  <p className="text-foreground font-mono text-sm">{siteConfig.location} (Worldwide Availability)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Film className="text-primary mt-1" size={18} />
                <div>
                  <h3 className="font-mono text-xs uppercase text-muted-foreground">Roles Available</h3>
                  <p className="text-foreground font-mono text-sm">{siteConfig.rolesFormatted}</p>
                </div>
              </div>
            </div>

            {/* Production notice */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <p className="font-semibold mb-1">Production Inquiries Notice</p>
              <p className="text-emerald-300/80 leading-relaxed">
                Nick Parker is currently open to bookings for features, drama series, documentaries, commercials, and aerial cinematography. Contact TheoMedia via WhatsApp or the website with your shoot details and production treatment.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Production Booking Form */}
          <motion.div
            className="bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xl uppercase font-semibold mb-2">Production Booking Form</h3>
            <p className="text-xs text-muted-foreground font-mono mb-6">
              Send details of your shoot, dates, and equipment requirements.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-mono text-lg font-semibold">Message Received</h4>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Thank you for your enquiry. Nick&apos;s team will respond to your message shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-secondary text-xs font-mono uppercase tracking-wider text-foreground"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Producer / Production Co."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="producer@studio.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Role Requested
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option>Camera Operator</option>
                      <option>DOP (Director of Photography)</option>
                      <option>Drone Pilot / Aerial Cinematographer</option>
                      <option>Camera Assistant / 1st AC</option>
                      <option>Full Camera &amp; Drone Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Shoot Dates / Timeline
                    </label>
                    <input
                      type="text"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="e.g. Oct 2026 / 3 days"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Production Details &amp; Treatment
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Briefly describe the project, shooting location, camera/rig preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-primary text-primary-foreground font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-all shadow-md"
                >
                  Send Production Booking Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
