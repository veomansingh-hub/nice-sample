"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MessageSquare, MapPin, Film, AlertCircle, X, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/lib/config"

export default function ContactPage() {
  const [showPhoneModal, setShowPhoneModal] = useState<"call" | "text" | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productionType: "Narrative / Drama",
    dates: "",
    role: "Camera Operator",
    message: ""
  })

  const handlePhoneAction = (type: "call" | "text") => {
    if (siteConfig.phone) {
      window.location.href = type === "call" ? `tel:${siteConfig.phone}` : `sms:${siteConfig.phone}`
    } else {
      setShowPhoneModal(type)
    }
  }

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
            Contact & Bookings
          </h1>
          <p className="text-white/80 text-sm md:text-base font-mono max-w-xl">
            Direct production inquiries for UK and international shoots
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Direct Controls & Info */}
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

            {/* Desktop Contact Buttons (EMAIL, CALL, TEXT) */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Quick Action Controls (Desktop & Mobile)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {/* EMAIL */}
                <a
                  href={`mailto:${siteConfig.email}?subject=Production%20Enquiry%20-%20Nick%20Gaven`}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md group"
                >
                  <Mail className="mb-2 transition-transform group-hover:scale-110" size={20} />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">EMAIL</span>
                  <span className="text-[10px] opacity-75 mt-0.5">Direct link</span>
                </a>

                {/* CALL */}
                <button
                  type="button"
                  onClick={() => handlePhoneAction("call")}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all group"
                >
                  <Phone className="mb-2 text-primary transition-transform group-hover:scale-110" size={20} />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">CALL</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">Telephone</span>
                </button>

                {/* TEXT */}
                <button
                  type="button"
                  onClick={() => handlePhoneAction("text")}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all group"
                >
                  <MessageSquare className="mb-2 text-primary transition-transform group-hover:scale-110" size={20} />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">TEXT</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">SMS message</span>
                </button>
              </div>
            </div>

            {/* Information List */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1" size={18} />
                <div>
                  <h3 className="font-mono text-xs uppercase text-muted-foreground">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Production%20Enquiry%20-%20Nick%20Gaven`}
                    className="text-foreground font-mono text-sm hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

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

            {/* Call to action notice */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <p className="font-semibold mb-1">Production Inquiries Notice</p>
              <p className="text-emerald-300/80 leading-relaxed">
                Nick Gaven is currently open to bookings for features, drama series, documentaries, commercials, and aerial cinematography. Call sheets and project treatments are welcome via email.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Production Booking Inquiry Form */}
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
                  Thank you for your enquiry. Nick will respond directly to your email shortly.
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
                      Email Address
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
                      <option>Full Camera & Drone Package</option>
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
                    Production Details & Treatment
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

      {/* Phone Notice Modal when telephone number is pending */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowPhoneModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowPhoneModal(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">Direct {showPhoneModal === "call" ? "Call" : "Text"} Line</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Direct phone and WhatsApp details are provided on verified production request. Please email Nick with your shoot dates or call sheet, and contact numbers will be provided immediately.
              </p>

              <div className="space-y-2">
                <a
                  href={`mailto:${siteConfig.email}?subject=Production%20Phone%20Request%20-%20Nick%20Gaven`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90"
                >
                  <Mail size={16} />
                  <span>Email {siteConfig.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(null)}
                  className="w-full py-2.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
