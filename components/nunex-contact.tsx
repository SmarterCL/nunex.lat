"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function NunexContact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-8">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed font-medium">
              Estamos disponibles para consultas y asesoramiento profesional. Accede a servicios de consultoría global
              con 15+ años de experiencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone - SCL */}
              <div className="p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
                <p className="text-xs font-black uppercase text-gray-400 mb-1">WhatsApp Santiago</p>
                <a href="https://wa.me/56937558320" className="text-blue-600 font-bold text-lg">+56 9 3755 8320</a>
              </div>

              {/* Phone - MDZ */}
              <div className="p-4 bg-white rounded-xl shadow-md border-l-4 border-amber-500">
                <p className="text-xs font-black uppercase text-gray-400 mb-1">WhatsApp Mendoza</p>
                <a href="https://wa.me/5492614567890" className="text-amber-600 font-bold text-lg">+54 9 261 456 7890</a>
              </div>

              {/* Phone - BUE */}
              <div className="p-4 bg-white rounded-xl shadow-md border-l-4 border-emerald-500">
                <p className="text-xs font-black uppercase text-gray-400 mb-1">WhatsApp B. Aires</p>
                <a href="https://wa.me/5491112345678" className="text-emerald-600 font-bold text-lg">+54 9 11 1234 5678</a>
              </div>

              {/* Email */}
              <div className="p-4 bg-blue-600 rounded-xl shadow-md border-l-4 border-blue-800">
                <p className="text-xs font-black uppercase text-blue-200 mb-1">Email Corporativo</p>
                <a href="mailto:hola@nunex.lat" className="text-white font-bold text-lg underline decoration-blue-400">hola@nunex.lat</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
            <form className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-900 mb-2">Tu Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors bg-white font-medium"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-900 mb-2">Tu Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors bg-white font-medium"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-900 mb-2">Asunto</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors bg-white font-medium"
                  placeholder="¿Qué necesitas?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-900 mb-2">Tu Mensaje</label>
                <textarea
                  id="contact-message"
                  className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors h-24 resize-none bg-white font-medium"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
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
