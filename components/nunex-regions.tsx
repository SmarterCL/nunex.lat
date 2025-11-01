"use client"

import { MapPin, Users, Award, TrendingUp } from "lucide-react"

export default function NunexRegions() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Presencia Regional
          </h2>
          <p className="text-lg text-gray-700 font-medium">Servicios de consultoría profesional en Chile y Argentina</p>
        </div>

        {/* Chile Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Map/Visual for Chile */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-500 rounded-3xl h-96 flex items-center justify-center overflow-hidden shadow-xl">
              <img src="/map-chile-santiago-landscape.jpg" alt="Chile" className="w-full h-full object-cover opacity-90" />
            </div>

            {/* Chile Info */}
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Oficina Santiago</h3>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Dirección</p>
                    <p className="text-gray-700 font-medium">Conde del Maule 4364</p>
                    <p className="text-gray-700 font-medium">Depto #26, Estación Central</p>
                    <p className="text-gray-700 font-medium">Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Consultoría</p>
                    <p className="text-gray-700 font-medium">Trading EUR/USD</p>
                    <p className="text-gray-700 font-medium">Financiamiento Empresarial</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Experiencia</p>
                    <p className="text-gray-700 font-medium">15+ años asesorando empresas</p>
                    <p className="text-gray-700 font-medium">500+ clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full"></div>

        {/* Argentina Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Argentina Info */}
            <div className="lg:order-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Operaciones Argentina</h3>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Cobertura Regional</p>
                    <p className="text-gray-700 font-medium">Buenos Aires</p>
                    <p className="text-gray-700 font-medium">Zona Centro y Litoral</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Servicios</p>
                    <p className="text-gray-700 font-medium">Blockchain & Tokens</p>
                    <p className="text-gray-700 font-medium">Consultoría Digital</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Red de Socios</p>
                    <p className="text-gray-700 font-medium">Múltiples empresas en la región</p>
                    <p className="text-gray-700 font-medium">Alianzas estratégicas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map/Visual for Argentina */}
            <div className="lg:order-1 bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500 rounded-3xl h-96 flex items-center justify-center overflow-hidden shadow-xl">
              <img src="/map-argentina-buenos-aires-landscape.jpg" alt="Argentina" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-24 pt-16 border-t-2 border-blue-200">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Alcance Global</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Aunque basados en Chile y Argentina, nuestros servicios llegan a clientes en todo el mundo con conexiones
              internacionales en trading, blockchain y financiamiento.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                50+
              </p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Países Clientes</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                24/7
              </p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Disponibilidad</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-shadow">
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                $500M+
              </p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Volumen Transado</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                98%
              </p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
