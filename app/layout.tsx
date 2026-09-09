import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"
import MobileContactBar from "@/components/mobile-contact-bar"
import { siteConfig } from "@/lib/config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#09090b' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: `${siteConfig.name} - ${siteConfig.rolesFormatted}. ${siteConfig.tagline} ${siteConfig.availability}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-foreground selection:bg-white/20 pb-16 md:pb-0">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SafariThemeColor />
          <SoundEffects />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <MobileContactBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
