"use client"

import { TrendingUp, Coins, Users, FileText } from "lucide-react"

export default function NunexServices() {
  const services = [
    {
      icon: TrendingUp,
      title: "Trading EUR/USD",
      description:
        "Análisis experto y estrategias de trading en pares de divisas principales. Operaciones optimizadas con tecnología blockchain.",
    },
    {
      icon: Coins,
      title: "Tokens Blockchain",
      description:
        "Asesoramiento integral en tokenización, inversión en cripto y tecnología descentralizada de nueva generación.",
    },
    {
      icon: Users,
      title: "Consultoría Corporativa",
      description:
        "Estrategias de negocio internacional, expansión global y estructura corporativa para empresas multinacionales.",
    },
    {
      icon: FileText,
      title: "Créditos y Subsidios",
      description:
        "Acceso a las mejores líneas de financiamiento y fondos no reembolsables para proyectos de desarrollo.",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="mb-4 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-neutral-900" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
