import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { WhatsApp } from "@/components/WhatsApp"
import { DiscountPopup } from "@/components/DiscountOffer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tacknowledge | Tuition in Hayes, West London",
  description:
    "Located at Global Academy, Hayes, Tacknowledge offers academic and career support for primary, secondary, and GCSE students. Book your free trial lesson today, at Tacknowledge.",
  keywords: [
    "tuition",
    "tacknowledge",
    "Hayes tuition",
    "hayes tuition",
    "private tuition",
    "Hillingdon tutoring",
    "GCSE tuition",
    "primary school tuition",
    "secondary school tuition",
    "Tacknowledge",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  authors: [{ name: "Tacknowledge" }],
  creator: "Tacknowledge",
  metadataBase: new URL("https://tacknowledge.co.uk"),
  openGraph: {
    title: "Tacknowledge | Tuition in Hayes, West London",
    description:
      "Expert private tuition services in Hayes, Hillingdon. We offer English, Maths and Science tuition for KS2, KS3, GCSE and A-Level students.",
    type: "website",
    locale: "en_GB",
    siteName: "Tacknowledge",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <DiscountPopup />
          <Navbar />
          <div>{children}</div>
          <Footer />
          <WhatsApp />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
