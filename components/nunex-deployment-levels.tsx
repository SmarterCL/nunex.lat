"use client"

import { Cpu, Zap, Brain, Globe, Shield, Rocket, Network } from "lucide-react"

export default function NunexDeploymentLevels() {
  const levels = [
    {
      segment: "Startup / Pyme",
      hardware: "Orange Pi 5 & 6",
      region: "Latinoamérica (Nunex.lat)",
      description: "Optimización de costos con arquitectura ARM64. Ideal para CRM Chatwoot, ERP Odoo v19 y automatizaciones n8n locales.",
      tag: "Eficiencia Local",
      icon: Rocket,
      color: "from-amber-400 to-orange-500"
    },
    {
      segment: "Comercio / Scaleup",
      hardware: "NVIDIA Jetson Orin Nano",
      region: "Suiza (Neuronal Silicio)",
      description: "Potencia de 66 TOPS para visión artificial y procesamiento de facturación exacta. Inteligencia soberana para retail avanzado.",
      tag: "Edge AI Soberana",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600"
    },
    {
      segment: "Enterprise / Industrial",
      hardware: "Cortical Labs Cloud / Físico",
      region: "Australia (Cortical Labs)",
      description: "Integración con neuronas biológicas (DishBrain). Ultra bajo consumo y procesamiento cortical para tareas de alta complejidad.",
      tag: "IA Biológica",
      icon: Brain,
      color: "from-emerald-500 to-teal-600"
    },
    {
      segment: "Académico / Gobiernos",
      hardware: "Smarter Cluster M4 Cloud",
      region: "Global Distributed",
      description: "Nodos distribuidos para investigación en neuroderechos y ética de IA. Sandbox seguro para desarrollo de neurotecnologías.",
      tag: "Infraestructura Global",
      icon: Globe,
      color: "from-slate-600 to-slate-800"
    }
  ]

  return (
    <section className="py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-balance">
            ESTRATEGIA DE <br />
            <span className="text-amber-500">CAPITAL E INTELIGENCIA.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl font-medium leading-relaxed">
            Propuesta de Inversión Nunex Lat Group: Infraestructura tecnológica distribuida con cuatro niveles de despliegue para el futuro de la IA soberana.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <div key={index} className="group relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className={`mb-10 w-16 h-16 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{level.segment}</p>
                <h3 className="text-2xl font-black mb-1 text-white tracking-tight leading-none">{level.hardware}</h3>
                <p className="text-amber-500 text-xs font-bold mb-6 uppercase tracking-widest">{level.region}</p>
                
                <p className="text-slate-400 font-medium leading-relaxed mb-8">
                  {level.description}
                </p>

                <div className="inline-block px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">
                    {level.tag}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing Power Statement */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-12 md:p-20 text-slate-950 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tighter">
              "No vendemos software, distribuimos soberanía operativa."
            </h3>
            
            <p className="text-xl md:text-2xl font-bold mb-12 opacity-90 leading-relaxed">
              A través de Nunex Lat Group, conectamos el hardware más eficiente del mundo con las leyes de neuroderechos de Chile, creando el primer ecosistema de IA segura y rentable.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-950/10">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Operación</p>
                  <p className="text-lg font-black uppercase">Chile</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Silicio</p>
                  <p className="text-lg font-black uppercase">Suiza</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Cortical</p>
                  <p className="text-lg font-black uppercase">Australia</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Ecosistema</p>
                  <p className="text-lg font-black uppercase">Global Cloud</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
