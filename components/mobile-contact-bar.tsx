"use client"

import { useState } from "react"
import { Phone, MessageSquare, Mail, AlertCircle, X } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileContactBar() {
  const [showPhoneNotice, setShowPhoneNotice] = useState<"call" | "text" | null>(null)

  const handlePhoneAction = (type: "call" | "text") => {
    if (siteConfig.phone) {
      if (type === "call") {
        window.location.href = `tel:${siteConfig.phone}`
      } else {
        window.location.href = `sms:${siteConfig.phone}`
      }
    } else {
      setShowPhoneNotice(type)
    }
  }

  return (
    <>
      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* CALL Button */}
          <button
            type="button"
            onClick={() => handlePhoneAction("call")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-medium text-xs tracking-wider transition-all border border-border/60 active:scale-95"
            aria-label="Call Nick Gaven"
          >
            <Phone size={15} className="text-primary" />
            <span>CALL</span>
          </button>

          {/* TEXT Button */}
          <button
            type="button"
            onClick={() => handlePhoneAction("text")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-medium text-xs tracking-wider transition-all border border-border/60 active:scale-95"
            aria-label="Text Nick Gaven"
          >
            <MessageSquare size={15} className="text-primary" />
            <span>TEXT</span>
          </button>

          {/* EMAIL Button */}
          <a
            href={`mailto:${siteConfig.email}?subject=Production%20Enquiry%20-%20Nick%20Gaven`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-primary-foreground font-medium text-xs tracking-wider transition-all shadow-md active:scale-95 hover:opacity-90"
            aria-label="Email Nick Gaven"
          >
            <Mail size={15} />
            <span>EMAIL</span>
          </a>
        </div>

        <div className="text-center mt-1">
          <span className="text-[10px] text-muted-foreground tracking-wide uppercase font-mono">
            {siteConfig.availability}
          </span>
        </div>
      </div>

      {/* Notice Dialog when Telephone is requested before number is configured */}
      <AnimatePresence>
        {showPhoneNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowPhoneNotice(null)}
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
                onClick={() => setShowPhoneNotice(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">Direct {showPhoneNotice === "call" ? "Call" : "Text"} Line</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Direct mobile line is available upon verified production request. Please email Nick with your production dates or call sheet, and contact numbers will be provided immediately.
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
                  onClick={() => setShowPhoneNotice(null)}
                  className="w-full py-2.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
