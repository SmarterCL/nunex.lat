"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function NunexHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-blue-50 to-emerald-50 backdrop-blur-sm border-b-2 border-emerald-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
        >
          NUNEX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-tight">
            Verticales
          </a>
          <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-tight">
            Nosotros
          </a>
          <a href="#regions" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-tight">
            Contacto
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-400/50 transition-all">
            Solicitar Acceso
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-blue-100 p-4 space-y-3">
          <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase text-sm" onClick={() => setIsMenuOpen(false)}>
            Verticales
          </a>
          <a href="#team" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase text-sm" onClick={() => setIsMenuOpen(false)}>
            Nosotros
          </a>
          <a href="#regions" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase text-sm" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg mt-2"
          >
            Solicitar Acceso
          </button>
        </div>
      )}

      {/* Mobile Pop-up Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm md:hidden">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl relative overflow-y-auto max-h-screen">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">Solicitar Acceso</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">Déjanos tus datos para procesar tu solicitud de documentación o acceso al sistema.</p>
            
            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Nombre Completo</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-50 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email Corporativo</label>
                <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-50 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Empresa / Proyecto</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-50 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Tipo de Documentación</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-50 text-sm">
                  <option>Dossier Corporativo</option>
                  <option>Proyectos de Real Estate</option>
                  <option>Infraestructura & Datacenters</option>
                  <option>Otro</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
