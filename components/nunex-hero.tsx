"use client"

import { ArrowRight, Zap } from "lucide-react"

export default function NunexHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -mr-64 -mt-64 opacity-50"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-900 text-white rounded-full border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Zap size={14} className="text-amber-400 fill-amber-400" />
          <p className="text-[10px] font-black uppercase tracking-widest">
            Smarter Labs — Infraestructura de Capital & IA
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter">
          INTELIGENCIA <br />
          <span className="text-amber-500">PRIVADA.</span> <br />
          <span className="text-slate-400/30">SOBERANÍA TOTAL.</span>
        </h1>

        {/* Product Highlight */}
        <div className="mb-10 inline-block">
          <p className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Desplegando <span className="bg-slate-900 text-white px-3 py-1 rounded-lg">OpenClaw</span> en un clic.
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          No somos software. Somos una <span className="text-slate-900 font-bold">infraestructura global</span> distribuida entre Suiza, Australia y Latam, diseñada para la soberanía del capital y la inteligencia.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://os.smarterbot.cl"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-amber-500/40 hover:scale-105 transition-all active:scale-95"
          >
            INGRESAR AL SISTEMA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-10 py-5 rounded-2xl text-lg font-bold text-slate-500 hover:text-slate-900 transition-colors">
            Explorar Labs
          </button>
        </div>

        {/* Global Distribution */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 pt-12 border-t border-slate-100">
          <div className="p-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Sede Europa</p>
            <p className="text-sm font-bold text-slate-900">Suiza (Silicio)</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Sede Oceanía</p>
            <p className="text-sm font-bold text-slate-900">Australia (Cortical)</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Sede Latam</p>
            <p className="text-sm font-bold text-slate-900">Chile (Nunex.lat)</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Costo Operativo</p>
            <p className="text-sm font-bold text-amber-600">{"< 1.000 USD / mes"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
