"use client"

export default function NunexProcess() {
  const steps = [
    {
      number: "1",
      title: "Consulta Inicial",
      description: "Evaluamos tu proyecto y te asesoramos sobre opciones disponibles",
    },
    {
      number: "2",
      title: "Documentación",
      description: "Preparamos y organizamos todos los documentos necesarios",
    },
    {
      number: "3",
      title: "Presentación",
      description: "Tramitamos ante instituciones y organismos correspondientes",
    },
    {
      number: "4",
      title: "Aprobación",
      description: "Seguimiento hasta la aprobación y desembolso del financiamiento",
    },
  ]

  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Proceso de Solicitud</h2>
          <p className="text-lg text-neutral-600">Accede a financiamiento en 4 pasos simples</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[55%] w-[calc(100%-60px)] h-0.5 bg-neutral-300" />
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
