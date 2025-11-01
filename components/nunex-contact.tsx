"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function NunexContact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed font-medium">
              Estamos disponibles para consultas y asesoramiento profesional. Accede a servicios de consultoría global
              con 15+ años de experiencia.
            </p>

            <div className="space-y-6">
              {/* Phone - Chile */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp Chile</p>
                  <a
                    href="https://wa.me/56979540471"
                    className="text-blue-600 hover:text-purple-600 transition-colors font-medium"
                  >
                    +56 979 540 471
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:comercial@nunex.lat"
                    className="text-purple-600 hover:text-pink-600 transition-colors font-medium"
                  >
                    comercial@nunex.lat
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-gray-700 font-medium">Conde del Maule 4364, Depto #26</p>
                  <p className="text-gray-700 font-medium">Estación Central, Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-200">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Tu Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors bg-white font-medium"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Tu Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors bg-white font-medium"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Asunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors bg-white font-medium"
                  placeholder="¿Qué necesitas?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Tu Mensaje</label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors h-24 resize-none bg-white font-medium"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
