"use client"

export default function NunexHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <div className="inline-block mb-6 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200">
          <p className="text-sm font-medium text-neutral-600">Plataforma Global de Consultoría</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          Expande tu Negocio
          <br />
          Internacionalmente
        </h1>

        {/* Description */}
        <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Consultoría especializada en trading de divisas, financiamiento empresarial, blockchain y expansión
          internacional. 15+ años de experiencia gestionando $100M+ en proyectos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors">
            Conocer Más
          </button>
          <button className="border border-neutral-900 text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-50 transition-colors">
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-neutral-900">15+</p>
            <p className="text-sm text-neutral-600 mt-2">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-neutral-900">500+</p>
            <p className="text-sm text-neutral-600 mt-2">Clientes Asesorados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-neutral-900">$100M+</p>
            <p className="text-sm text-neutral-600 mt-2">Financiamiento Gestionado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
