import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: {
    default: 'NUNEX | Trading, Financiamiento y Blockchain Corporativo',
    template: '%s | NUNEX Ecosystem'
  },
  description: 'Potencia tu capital con NUNEX. Consultoría experta en Trading EUR/USD, Financiamiento y Blockchain Corporativa. Gestión de activos transparente y segura en Chile y Argentina.',
  keywords: [
    'Consultoría Financiera', 
    'Blockchain Corporativa', 
    'Trading EUR/USD', 
    'Financiamiento Empresas', 
    'Smart Contracts', 
    'Tokenización', 
    'NUNEX', 
    'Chile', 
    'Argentina'
  ],
  authors: [{ name: 'NUNEX Team', url: 'https://nunex.lat' }],
  creator: 'NUNEX Smarter Ecosystem',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://nunex.lat',
    title: 'NUNEX | Plataforma Global de Consultoría y Blockchain',
    description: 'Accede a financiamiento inteligente y trading automatizado con tecnología Blockchain. 15+ años de experiencia gestionando capitales.',
    siteName: 'NUNEX',
    images: [
      {
        url: '/images/og-image-nunex.jpg',
        width: 1200,
        height: 630,
        alt: 'NUNEX Ecosistema Financiero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NUNEX | Finanzas & Blockchain',
    description: 'Consultoría corporativa, Trading y Financiamiento con tecnología SmarterContract.',
    images: ['/images/twitter-image-nunex.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily}, ${roboto.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
}
        `}</style>
      </head>
      <body className={`${openSans.variable} ${roboto.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
