"use client"

import { ChevronRight } from "lucide-react"

export default function NunexProperties() {
  const properties = [
    {
      city: "Santiago",
      country: "Chile",
      title: "Edificios de Gran Escala",
      description: "Asesoría en adquisición de activos corporativos y residenciales de lujo en el centro financiero.",
      image: "/modern_property_santiago_chile_1773329886097.png",
      tag: "Real Estate"
    },
    {
      city: "Mendoza",
      country: "Argentina",
      title: "Bodegas & Viñedos",
      description: "Desarrollo de proyectos vitivinícolas premium con infraestructura de vanguardia.",
      image: "/mendoza_winery_luxury_resort_1773330047291.png",
      tag: "Agribusiness"
    },
    {
      city: "Buenos Aires",
      country: "Argentina",
      title: "Propiedades Icónicas",
      description: "Gestión de compra de propiedades históricas y modernas de gran tamaño en Puerto Madero y Recoleta.",
      image: "/modern_property_buenos_aires_argentina_1773329903503.png",
      tag: "Luxury Living"
    }
  ]

  return (
    <section id="properties" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Portafolio de <span className="text-blue-600 underline decoration-blue-200">Activos Reales</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Especialistas en la adquisición y gestión de propiedades de gran escala en los mercados más dinámicos del Cono Sur.
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Ver Inventario Completo <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {properties.map((prop, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="aspect-[4/5] relative">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    {prop.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-400"></span> {prop.city}, {prop.country}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{prop.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {prop.description}
                  </p>
                  <button className="bg-blue-600 text-white w-full py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-colors">
                    Consultar Detalles
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
