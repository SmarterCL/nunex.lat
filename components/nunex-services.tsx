"use client"

import { Cpu, Brain, Network, Zap, ShieldCheck, Globe, Database, Scale } from "lucide-react"

export default function NunexServices() {
  const divisions = [
    {
      icon: Scale,
      title: "Neuronal Silicio (Suiza)",
      description: "Precisión matemática y legal aplicada al procesamiento de facturas, RUTs y cumplimiento de la Ley REP. La inteligencia fría y exacta del viejo continente.",
      gradient: "from-blue-600 to-indigo-700",
      tag: "Precisión"
    },
    {
      icon: Brain,
      title: "Cortical Hardware (Australia)",
      description: "Integración con computación biológica. Inteligencia orgánica, adaptativa y de ultra bajo consumo para el futuro de la orquestación autónoma.",
      gradient: "from-emerald-600 to-teal-700",
      tag: "Futuro"
    },
    {
      icon: Network,
      title: "Nunex.lat (Latam)",
      description: "Plataforma de despliegue y brazo ejecutor. Gestión de infraestructura local, VPS y nodos de baja latencia para el mercado sudamericano.",
      gradient: "from-amber-500 to-orange-600",
      tag: "Ejecución"
    },
    {
      icon: Database,
      title: "Smarter Labs (I+D)",
      description: "Nuestra división de Research & Development. Donde el LightRAG y la orquestación MCP evolucionan hacia la inteligencia soberana.",
      gradient: "from-slate-800 to-slate-900",
      tag: "I+D"
    }
  ]

  return (
    <section id="services" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            INFRAESTRUCTURA <br />
            <span className="text-slate-400">DISTRIBUIDA.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Tres continentes conectados bajo una sola arquitectura de soberanía digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div
                  className={`mb-8 w-16 h-16 bg-gradient-to-br ${division.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <div className="inline-block mb-4 px-3 py-1 bg-slate-100 rounded-full">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {division.tag}
                  </p>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{division.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{division.description}</p>
                
                <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    Saber más <Zap size={14} className="text-amber-500 h-4 w-4 fill-amber-500" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
