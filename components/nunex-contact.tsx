"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function NunexContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Contáctanos</h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              Estamos disponibles para consultas y asesoramiento profesional. Accede a servicios de consultoría global
              con 15+ años de experiencia.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-neutral-900" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Teléfono</p>
                  <a href="tel:+549112656982" className="text-neutral-600 hover:text-neutral-900">
                    +54 9 11 2656-9822
                  </a>
                  <br />
                  <a href="tel:+549262251729" className="text-neutral-600 hover:text-neutral-900">
                    +54 9 262 251-7297
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-neutral-900" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Email</p>
                  <a href="mailto:ramon@proconsul.com.ar" className="text-neutral-600 hover:text-neutral-900">
                    ramon@proconsul.com.ar
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-neutral-900" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Ubicación</p>
                  <p className="text-neutral-600">Argentina | Servicio Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-neutral-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Tu Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Tu Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Asunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="¿Qué necesitas?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Tu Mensaje</label>
                <textarea
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors h-24 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
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
