"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function NunexHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-blue-50 to-purple-50 backdrop-blur-sm border-b-2 border-purple-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          NUNEX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold">
            Servicios
          </a>
          <a href="#ecosystem" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold">
            Ecosistema
          </a>
          <a href="#partners" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold">
            Socios
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold">
            Contacto
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-400/50 transition-all">
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
        <div className="md:hidden bg-white border-t-2 border-purple-200 p-4 space-y-3">
          <a href="#services" className="block text-gray-700 hover:text-purple-600 py-2 font-semibold">
            Servicios
          </a>
          <a href="#ecosystem" className="block text-gray-700 hover:text-purple-600 py-2 font-semibold">
            Ecosistema
          </a>
          <a href="#partners" className="block text-gray-700 hover:text-purple-600 py-2 font-semibold">
            Socios
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-purple-600 py-2 font-semibold">
            Contacto
          </a>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg mt-2">
            Solicitar Acceso
          </button>
        </div>
      )}
    </header>
  )
}
