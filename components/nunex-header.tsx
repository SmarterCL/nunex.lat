"use client"

import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function NunexHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col"
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
            SMARTER<span className="text-amber-500">BOT</span>
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
            by Nunex Capital Group
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest">
            Infraestructura
          </a>
          <a href="#ecosystem" className="text-slate-600 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest">
            Origin-OS
          </a>
          <a href="#team" className="text-slate-600 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest">
            Labs
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://os.smarterbot.cl" 
            className="group flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-6 py-2.5 rounded-full text-sm font-black hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105"
          >
            INGRESAR AL SISTEMA
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#services" className="block text-slate-900 hover:text-amber-600 py-2 font-bold uppercase text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>
            Infraestructura
          </a>
          <a href="#ecosystem" className="block text-slate-900 hover:text-amber-600 py-2 font-bold uppercase text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>
            Origin-OS
          </a>
          <a href="#team" className="block text-slate-900 hover:text-amber-600 py-2 font-bold uppercase text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>
            Labs
          </a>
          <a 
            href="https://os.smarterbot.cl"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-4 rounded-xl text-sm font-black shadow-lg"
          >
            INGRESAR AL SISTEMA
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
