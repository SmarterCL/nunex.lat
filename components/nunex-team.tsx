"use client"

import { Linkedin } from "lucide-react"

export default function NunexTeam() {
  const team = [
    {
      name: "Domingo Ramón Núñez",
      role: "Director General",
      description: "Especialista en Real Estate de gran tamaño, Bodegas y asesoría estratégica para ANR en Argentina y Chile.",
      image: "https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/nunex/Ramon-Nunex.jpeg",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
    {
      name: "Pedro J. Zaffuto Ruiz",
      role: "Director de Ciberseguridad",
      description: "Experto en seguridad digital, infraestructura crítica y protección de activos tecnológicos para empresas regionales.",
      image: "/pz_linkedin.png",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
    {
      name: "Carlos Velasco",
      role: "Director de Trading & Energía",
      description: "Líder en operaciones de trading de metales y proyectos de energía renovable a gran escala.",
      image: "/professional-businessman-50-years-experienced-trad.jpg",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
    {
      name: "María Fernández",
      role: "Directora de Operaciones Contables",
      description: "Especialista en consultoría tributaria y contabilidad comercial para el mercado binacional.",
      image: "/professional-businesswoman-45-years-corporate-exec.jpg",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
  ]

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Profesionales con 40+ años de experiencia combinada en finanzas internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-100 to-emerald-100">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{member.description}</p>
                <div className="flex items-center justify-between">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-gray-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  )}
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Nunex Executive</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
