"use client"

import { MessageCircle, ExternalLink } from "lucide-react"
import { theoMedia } from "@/lib/config"
import { motion } from "framer-motion"

export default function MobileContactBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40"
    >
      <div className="bg-background/90 backdrop-blur-xl border-t border-border/70 shadow-[0_-4px_24px_rgba(0,0,0,0.35)] pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        <div className="max-w-2xl mx-auto flex items-stretch gap-0 px-4 pt-2.5 pb-0.5">

          {/* WhatsApp — primary action */}
          <a
            href={theoMedia.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with TheoMedia on WhatsApp"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-l-2xl bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase transition-all hover:brightness-110 active:scale-[0.97] min-h-[48px]"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-border/60 shrink-0" />

          {/* TheoMedia.co.uk */}
          <a
            href={theoMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TheoMedia website"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-r-2xl bg-secondary/80 hover:bg-secondary text-foreground font-semibold text-xs tracking-wider uppercase transition-all active:scale-[0.97] border border-border/50 border-l-0 min-h-[48px]"
          >
            <ExternalLink size={14} className="text-muted-foreground" />
            <span>TheoMedia.co.uk</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
