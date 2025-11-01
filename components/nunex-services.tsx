"use client"

import { TrendingUp, Coins, Users, FileText } from "lucide-react"

export default function NunexServices() {
  const services = [
    {
      icon: TrendingUp,
      title: "Trading EUR/USD",
      description:
        "Análisis experto y estrategias de trading en pares de divisas principales. Operaciones optimizadas con tecnología blockchain.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Coins,
      title: "Tokens Blockchain",
      description:
        "Asesoramiento integral en tokenización, inversión en cripto y tecnología descentralizada de nueva generación.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Consultoría Corporativa",
      description:
        "Estrategias de negocio internacional, expansión global y estructura corporativa para empresas multinacionales.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Créditos y Subsidios",
      description:
        "Acceso a las mejores líneas de financiamiento y fondos no reembolsables para proyectos de desarrollo.",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Soluciones integrales para tu éxito en mercados internacionales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
