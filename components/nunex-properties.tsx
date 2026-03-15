"use client"

import { ChevronRight, Database, Building2, Zap } from "lucide-react"

export default function NunexProperties() {
  const properties = [
    {
      city: "Santiago",
      country: "Chile",
      title: "Centros de Operación",
      description: "Infraestructura corporativa de alta densidad para el despliegue de nodos locales y gestión de redes.",
      image: "/property_santiago.png",
      tag: "Execution Hub"
    },
    {
      city: "Mendoza",
      country: "Argentina",
      title: "Infraestructura Agraria",
      description: "Integración de activos reales con sistemas de monitoreo orgánico y adaptativo.",
      image: "/property_mendoza.png",
      tag: "Asset Synergy"
    },
    {
      city: "Global",
      country: "Edge Nodes",
      title: "Datacenters Distribuidos",
      description: "Adquisición estratégica de espacios para la expansión de la capacidad de procesamiento de Smarter Labs.",
      image: "/property_buenos_aires.png",
      tag: "Infra"
    }
  ]

  return (
    <section id="properties" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
              ACTIVOS <br />
              <span className="text-slate-400">ESTRATÉGICOS.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Respaldamos nuestra inteligencia con capital real. Gestionamos activos de gran escala que sirven como anclaje físico para nuestra infraestructura digital.
            </p>
          </div>
          <button className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl">
            DOSSIER DE INVERSIÓN <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {properties.map((prop, index) => (
            <div key={index} className="group relative rounded-[3rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-700 bg-slate-100 border border-slate-200">
              <div className="aspect-[4/5] relative">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute top-8 right-8">
                  <span className="bg-amber-500 text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                    {prop.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <p className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    <span className="w-12 h-px bg-amber-500/50"></span> {prop.city} / {prop.country}
                  </p>
                  <h3 className="text-4xl font-black text-white mb-6 leading-tight tracking-tighter">{prop.title}</h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {prop.description}
                  </p>
                  <button className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-900 bg-white hover:bg-amber-500 transition-colors">
                    Ficha Técnica
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
