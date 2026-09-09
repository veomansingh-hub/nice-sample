"use client"

import Link from "next/link"
import { Mail, Film, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import useDisableRightClick from './useDisableRightClick'

export default function Footer() {
  useDisableRightClick()

  return (
    <motion.footer
      className="bg-background border-t border-border py-14 px-4 md:px-8 mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Roles */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Film size={18} className="text-primary" />
            <Link href="/" className="font-mono tracking-widest text-xl font-bold uppercase text-foreground">
              {siteConfig.name}
            </Link>
          </div>
          <p className="text-sm font-mono text-muted-foreground mb-4">
            {siteConfig.rolesFormatted}
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-md mb-6 leading-relaxed">
            {siteConfig.tagline} {siteConfig.availabilityFull}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/70 border border-border text-[11px] font-mono text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{siteConfig.availability}</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold mb-4">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm font-mono">
            <li>
              <Link href="/showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                Work Categories
              </Link>
            </li>
            <li>
              <Link href="/collections/aerial" className="text-muted-foreground hover:text-foreground transition-colors">
                Aerial Cinematography
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About & Roles
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact & Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Direct Inquiries */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold mb-4">
            Production Inquiries
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase">Email</p>
              <a
                href={`mailto:${siteConfig.email}?subject=Production%20Enquiry%20-%20Nick%20Gaven`}
                className="font-mono text-sm text-primary hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase">Location Base</p>
              <p className="font-mono text-sm text-foreground/80">{siteConfig.location} · Available Worldwide</p>
            </div>

            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Concept Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-[11px] text-muted-foreground/70 text-center md:text-right">
          {siteConfig.mediaDisclaimer} · Working environment representation
        </p>
      </div>
    </motion.footer>
  )
}
