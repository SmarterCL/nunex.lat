"use client"

import { Database, Shield, Zap, Globe, Cpu, Smartphone } from "lucide-react"

export default function NunexEcosystem() {
  const parts = [
    {
      title: "Origin-OS",
      subtitle: "Dashboard Celular",
      description: "La interfaz de entrada. Un sistema operativo ligero donde gestionas capital, identidades y orquestación de agentes en tiempo real.",
      icon: Smartphone
    },
    {
      title: "OpenClaw",
      subtitle: "Agente Privado",
      description: "Tu inteligencia personal. Un agente privado desplegable en un clic que reside en tu propia infraestructura soberana.",
      icon: Zap
    },
    {
      title: "LightRAG",
      subtitle: "Memoria Dinámica",
      description: "Arquitectura de recuperación aumentada de grafos. Memoria infinita con costo operativo mínimo.",
      icon: Database
    }
  ]

  return (
    <section id="ecosystem" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            EL PORTAL DE <br />
            <span className="text-amber-500">SOBERANÍA.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl font-medium">
            Esto no es una web. Es el acceso a un ecosistema de inversión y ciencia distribuido globalmente.
          </p>
        </div>

        {/* DNA Visualization / Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {parts.map((part, index) => {
            const Icon = part.icon
            return (
              <div key={index} className="relative group">
                <div className="mb-6 inline-flex p-4 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <Icon size={32} className="text-slate-900 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{part.title}</h3>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{part.subtitle}</p>
                <p className="text-slate-600 leading-relaxed font-medium">{part.description}</p>
              </div>
            )
          })}
        </div>

        {/* Global Infrastructure Banner */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Infraestructura de <br /> Capital & Inteligencia
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Procesamiento Matrícula / Legal", value: "Neuronal Silicio (Suiza)" },
                  { label: "Computación Biológica / Adaptativa", value: "Cortical Hardware (Australia)" },
                  { label: "Despliegue & Ejecución Regional", value: "Nunex.lat (Chile/Argentina)" },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-amber-500/30 pl-6">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Sistema Ignition Activo</p>
              </div>
              <p className="text-slate-300 font-medium mb-6">
                "Smarterbot.cl es la interfaz; Smarter Labs es el motor. A través de Nunex Capital Group, traemos a Latinoamérica el poder del Silicio suizo y el Hardware Cortical australiano."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-900">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold">Arquitectura Multi-Continente</p>
                  <p className="text-xs text-slate-500">Soberanía de Datos Nivel 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
