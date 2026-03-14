"use client"

import { MapPin, Users, Award, TrendingUp } from "lucide-react"

export default function NunexRegions() {
  return (
    <section id="regions" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-emerald-900 bg-clip-text text-transparent mb-6">
            Presencia Estratégica
          </h2>
          <p className="text-xl text-gray-700 font-bold mb-4">Conectando los polos comerciales de Chile y Argentina</p>
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
            hola@nunex.lat
          </div>
        </div>

        {/* Global Map Visual */}
        <div className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <div className="aspect-[21/9] bg-slate-900">
            <img 
              src="/map_santiago_buenos_aires_modern_visualization_1773329919415.png" 
              alt="Eje Santiago - Mendoza - Buenos Aires" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-12">
            <h3 className="text-3xl font-bold text-white mb-2">Eje Comercial Transandino</h3>
            <p className="text-blue-200 font-medium">Cobertura integral en los centros de decisión más importantes de la región.</p>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Santiago */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-blue-500" /> Santiago
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Dirección Física</p>
                <p className="text-gray-800 font-semibold leading-snug">
                  Conde del Maule 4364, Depto #26<br />Estación Central, Santiago
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Contacto</p>
                <p className="text-blue-600 font-bold text-lg">+56 9 3755 8320</p>
              </div>
            </div>
          </div>

          {/* Mendoza */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-amber-500" /> Mendoza
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Dirección Física</p>
                <p className="text-gray-800 font-semibold leading-snug">
                  Sarmiento 123, Edificio Plaza<br />Centro, Mendoza
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Contacto</p>
                <p className="text-amber-600 font-bold text-lg">+54 9 261 456 7890</p>
              </div>
            </div>
          </div>

          {/* Buenos Aires */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-emerald-500 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-emerald-500" /> Buenos Aires
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Dirección Física</p>
                <p className="text-gray-800 font-semibold leading-snug">
                  Av. del Libertador 1000, Piso 12<br />CABA, Buenos Aires
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-1">Contacto</p>
                <p className="text-emerald-600 font-bold text-lg">+54 9 11 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact */}
        <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 blur-3xl rounded-full -ml-32 -mb-32"></div>
          
          <h3 className="text-3xl font-bold mb-6 relative z-10">Más de 40 años operando en el Mercosur</h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
            Nuestra red de socios estratégicos y presencia física nos permite garantizar la seguridad jurídica y operativa de cada gestión en ambos países.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-3xl font-bold text-blue-400">40+</p>
              <p className="text-xs font-bold uppercase text-slate-500">Años de Trayectoria</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-3xl font-bold text-amber-400">3</p>
              <p className="text-xs font-bold uppercase text-slate-500">Sedes Principales</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-3xl font-bold text-emerald-400">2</p>
              <p className="text-xs font-bold uppercase text-slate-500">Países Conectados</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-3xl font-bold text-emerald-400">∞</p>
              <p className="text-xs font-bold uppercase text-slate-500">Oportunidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
