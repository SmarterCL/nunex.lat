"use client"

import { Wind, Server, HandCoins, Building2, Coins, Calculator, Scale, ShieldCheck } from "lucide-react"

export default function NunexServices() {
  const services = [
    {
      icon: Wind,
      title: "Energía Renovable",
      description: "Desarrollo y gestión de Parques Eólicos y proyectos sustentables de alto impacto ambiental.",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      icon: Server,
      title: "Datacenter & Minería",
      description: "Infraestructura avanzada para Datacenters y operaciones de Minería Bitcoin optimizada.",
      gradient: "from-indigo-600 to-purple-400",
    },
    {
      icon: HandCoins,
      title: "Asesoría ANR",
      description: "Gestión experta en Aportes No Reembolsables para el crecimiento empresarial en Argentina.",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      icon: Building2,
      title: "Real Estate & Bodegas",
      description: "Compra de propiedades de gran tamaño y desarrollo de bodegas boutique en Mendoza y Chile.",
      gradient: "from-amber-600 to-orange-400",
    },
    {
      icon: Coins,
      title: "Venta de Oro",
      description: "Operaciones seguras de compra y venta de oro físico con respaldo internacional.",
      gradient: "from-yellow-600 to-amber-500",
    },
    {
      icon: Calculator,
      title: "Operaciones Contables",
      description: "Servicios contables integrales para empresas con operaciones binacionales (CL/AR).",
      gradient: "from-slate-700 to-slate-500",
    },
    {
      icon: Scale,
      title: "Asesoría Tributaria",
      description: "Optimización fiscal y cumplimiento tributario para estructuras corporativas complejas.",
      gradient: "from-blue-800 to-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "Ciberseguridad",
      description: "Protección de infraestructura crítica y activos digitales bajo la dirección de Pedro Zaffuto.",
      gradient: "from-red-600 to-rose-400",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Bloques Comerciales
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
            Verticales especializadas en activos reales y tecnología crítica
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`mb-6 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
