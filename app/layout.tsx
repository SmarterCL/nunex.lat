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
  title: "SmarterOS - Fintech Infrastructure & Payment Operating System Chile",
  description: "SmarterOS es la infraestructura financiera de próxima generación impulsada por Autonomous Economic Agents. El primer Payment Operating System en Chile para escalar tu Fintech.",
  keywords: ["Payment Operating System Chile", "SmarterOS Fintech Infrastructure", "Autonomous Economic Agents", "Fintech Chile", "Infraestructura de Pagos"],
  authors: [{ name: "SmarterOS" }],
  openGraph: {
    title: "SmarterOS - Fintech Infrastructure",
    description: "El primer Payment Operating System en Chile impulsado por Autonomous Economic Agents.",
    url: "https://webcontrol.smarterbot.cl",
    siteName: "SmarterOS",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SmarterOS",
              "url": "https://webcontrol.smarterbot.cl",
              "logo": "https://webcontrol.smarterbot.cl/logo.png",
              "description": "Payment Operating System & Fintech Infrastructure for Chile, powered by Autonomous Economic Agents.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santiago",
                "addressRegion": "RM",
                "addressCountry": "CL"
              }
            })
          }}
        />
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
