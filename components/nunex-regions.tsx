"use client"

import { MapPin, Globe, Cpu, Zap } from "lucide-react"

export default function NunexRegions() {
  const regions = [
    {
      city: "Suiza (Silicio)",
      concept: "Neuronal Core",
      address: "Zug / Zurich - Precise Mathematics",
      detail: "Procesamiento exacto, RUTs y Ley REP",
      border: "border-blue-500"
    },
    {
      city: "Australia (Cortical)",
      concept: "Adaptive Core",
      address: "Melbourne - Biological Computing",
      detail: "Hardware orgánico y ultra bajo consumo",
      border: "border-teal-500"
    },
    {
      city: "Chile (Nunex)",
      concept: "Execution Hub",
      address: "Santiago - Deployment & Ops",
      detail: "Infraestructura local y VPS Hostinger",
      border: "border-amber-500"
    }
  ]

  return (
    <section id="regions" className="py-32 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            PRESENCIA <br />
            <span className="text-slate-500">ESTRATÉGICA.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl font-medium">
            Conectando los polos de vanguardia tecnológica con el brazo ejecutor en Latinoamérica.
          </p>
        </div>

        {/* Global Map Visual */}
        <div className="mb-24 relative rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
          <div className="aspect-[21/9] bg-slate-800 relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
             {/* Simple representation of global connection */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <Globe size={400} className="text-white animate-pulse" />
             </div>
             <div className="absolute inset-0 flex items-center justify-around px-20">
               <div className="flex flex-col items-center gap-2">
                 <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Silicio (CH)</p>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)]"></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">Execution (CL)</p>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-4 h-4 bg-teal-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.8)]"></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-teal-400">Cortical (AU)</p>
               </div>
             </div>
          </div>
          <div className="absolute bottom-12 left-12">
            <h3 className="text-3xl font-black mb-2">Red de Inteligencia Soberana</h3>
            <p className="text-slate-400 font-medium tracking-tight">Menos de 1.000 USD de costo operativo distribuido.</p>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div key={index} className={`p-10 rounded-[2.5rem] bg-slate-800/50 border-t-2 ${region.border} hover:bg-slate-800 transition-colors`}>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">{region.concept}</p>
              <h4 className="text-3xl font-black mb-2 flex items-center gap-3">
                <MapPin className="text-white h-6 w-6" /> {region.city}
              </h4>
              <p className="text-slate-200 font-bold mb-6 text-sm italic">{region.address}</p>
              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm font-medium">{region.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
