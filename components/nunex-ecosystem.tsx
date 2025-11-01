"use client"

export default function NunexEcosystem() {
  const layers = [
    {
      title: "SmarterOS",
      subtitle: "Infraestructura viva",
      description: "Sistema operativo - Infraestructura comercial y orquestación MCP",
    },
    {
      title: "SmarterPersona",
      subtitle: "Identidad digital",
      description: "Identidad / IAM - Wallet, permisos, reputación y RUT digital",
    },
    {
      title: "SmarterContract",
      subtitle: "Flujo comercial",
      description: "Capa comercial - Acuerdos y transacciones verificables",
    },
  ]

  return (
    <section id="ecosystem" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Ecosistema Digital Smarter</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Arquitectura de vida digital programable con soberanía de datos
          </p>
        </div>

        {/* DNA Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {layers.map((layer, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl ml-4">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{layer.title}</h3>
                <p className="text-sm text-neutral-500 font-medium mb-4">{layer.subtitle}</p>
                <p className="text-neutral-600 leading-relaxed">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <div className="bg-neutral-900 text-white rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-8">Modelo de Soberanía de Datos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Operativo", location: "VPS Local (Santiago)" },
              { label: "Identitario", location: "Datacenter Privado (Europa)" },
              { label: "Analítico", location: "Supabase/Metabase Cifrados" },
              { label: "Conversacional", location: "Chatwoot/Redis" },
            ].map((item, index) => (
              <div key={index} className="border-t border-neutral-700 pt-4">
                <p className="text-sm text-neutral-400 mb-2">{item.label}</p>
                <p className="text-sm font-medium">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
