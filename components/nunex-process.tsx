"use client"

import { Zap, Database, Cpu, Globe } from "lucide-react"

export default function NunexProcess() {
  const steps = [
    {
      icon: Zap,
      title: "Entrada de Capital",
      description: "Carga de fichas vía Flow en os.smarterbot.cl para activar créditos operativos.",
    },
    {
      icon: Database,
      title: "Evento AI-Memory",
      description: "Smarter-AI-Memory genera un evento de 'Energía Recibida' al detectar el flujo.",
    },
    {
      icon: Cpu,
      title: "LightRAG Sync",
      description: "Procesamiento de reconocimiento neuronal y estructuración de datos autónoma.",
    },
    {
      icon: Globe,
      title: "Ruteo Autónomo",
      description: "Decisión inteligente: ¿Tarea de precisión Suiza o Adaptativa Australiana?",
    },
  ]

  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            IGNITION <br />
            <span className="text-amber-500">WORKFLOW.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            El túnel de capital y procesamiento que activa el motor de Smarter Labs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-80px)] h-px bg-slate-200" />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-xl">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
