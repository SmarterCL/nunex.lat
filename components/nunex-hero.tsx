"use client"

export default function NunexHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-purple-300">
          <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Plataforma Global de Consultoría
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-none">
          Energía, Tecnología &<br />
          <span className="text-blue-600">Activos Reales</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Lideramos proyectos de <span className="text-blue-600 font-bold">Energía Renovable</span>, infraestructura de <span className="text-indigo-600 font-bold">Datacenters</span> y adquisición de <span className="text-amber-600 font-bold">Real Estate</span> de gran escala. Conectamos capital estratégico con oportunidades críticas en <span className="font-bold">Chile y Argentina</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Conocer Más
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all hover:shadow-lg">
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t-2 border-blue-200">
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              15+
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Clientes Asesorados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              $100M+
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Financiamiento Gestionado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
