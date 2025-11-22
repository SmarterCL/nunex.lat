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
  title: "NUNEX | Trading, Financiamiento y Blockchain para Empresas",
  description: "Potencia tu capital con NUNEX. Consultoría experta en Trading EUR/USD, Financiamiento y Blockchain Corporativa. Gestión de activos transparente y segura en Chile, Argentina y el mundo.",
  keywords: [
    // Generales
    "Consultoría Financiera",
    "Gestión de Capital",
    "Financiamiento Empresas",
    "Inversiones Corporativas",
    "Trading Forex",
    "EUR/USD",
    "Asesoría de Negocios",
    // Tecnología
    "Blockchain Corporativa",
    "Tokenización de Activos",
    "Smart Contracts",
    "Contratos Inteligentes",
    "SmarterContract",
    "Stablecoins Empresas",
    "Web3 Latam",
    "Transformación Digital Financiera",
    // Geolocalización
    "Consultora Financiera Santiago",
    "Inversiones Chile",
    "Financiamiento Argentina",
    "Negocios Internacionales Latam",
    "NUNEX Chile",
    "NUNEX Argentina",
  ],
  authors: [{ name: "NUNEX", url: "https://nunex.lat" }],
  creator: "NUNEX",
  publisher: "NUNEX",
  openGraph: {
    title: "NUNEX | Trading, Financiamiento y Blockchain para Empresas",
    description: "Potencia tu capital con NUNEX. Consultoría experta en Trading EUR/USD, Financiamiento y Blockchain Corporativa. Gestión de activos transparente y segura en Chile, Argentina y el mundo.",
    url: "https://nunex.lat",
    siteName: "NUNEX",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NUNEX | Trading, Financiamiento y Blockchain para Empresas",
    description: "Potencia tu capital con NUNEX. Consultoría experta en Trading EUR/USD, Financiamiento y Blockchain Corporativa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
