"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function NunexHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          NUNEX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
            Servicios
          </a>
          <a
            href="#ecosystem"
            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
          >
            Ecosistema
          </a>
          <a href="#partners" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
            Socios
          </a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
            Contacto
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-neutral-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
            Solicitar Acceso
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 p-4 space-y-3">
          <a href="#services" className="block text-neutral-600 hover:text-neutral-900 py-2">
            Servicios
          </a>
          <a href="#ecosystem" className="block text-neutral-600 hover:text-neutral-900 py-2">
            Ecosistema
          </a>
          <a href="#partners" className="block text-neutral-600 hover:text-neutral-900 py-2">
            Socios
          </a>
          <a href="#contact" className="block text-neutral-600 hover:text-neutral-900 py-2">
            Contacto
          </a>
          <button className="w-full bg-neutral-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 mt-2">
            Solicitar Acceso
          </button>
        </div>
      )}
    </header>
  )
}
