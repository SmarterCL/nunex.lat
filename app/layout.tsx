import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppFloat from "@/components/whatsapp-float"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Nunex - Consultoría Financiera Internacional",
  description: "Sistema de consultoría financiera y trading internacional.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily}, ${roboto.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
}
        `}</style>
      </head>
      <body className={`${openSans.variable} ${roboto.variable}`}>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
