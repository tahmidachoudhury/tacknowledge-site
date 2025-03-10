import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { WhatsApp } from "@/components/WhatsApp"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hatch Academy | Private Tutoring in Hayes, Hillingdon",
  description:
    "Expert private tutoring services in Hayes, Hillingdon. We offer personalised academic support for primary, secondary, and GCSE students. Join Hatch Academy for quality education and improved grades.",
  keywords: [
    "tutoring",
    "private tutor",
    "Hayes tuition",
    "Hillingdon tutoring",
    "GCSE tuition",
    "primary school tutor",
    "secondary school tutor",
    "Hatch Academy",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  authors: [{ name: "Hatch Academy" }],
  creator: "Hatch Academy",
  metadataBase: new URL("https://hatchacademy.co.uk"),
  openGraph: {
    title: "Hatch Academy | Private Tutoring in Hayes, Hillingdon",
    description:
      "Expert private tutoring services in Hayes, Hillingdon. We offer English, Maths and Science tuition for KS2, KS3, GCSE and A-Level students.",
    type: "website",
    locale: "en_GB",
    siteName: "Hatch Academy",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
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
