"use client"

import { Linkedin } from "lucide-react"

export default function NunexTeam() {
  const team = [
    {
      name: "Domingo Ramón Núñez",
      role: "Fundador & Director Ejecutivo",
      image: "/professional-man-45-years-old-business-executive-s.jpg",
      linkedin: null,
    },
    {
      name: "Carlos Velasco",
      role: "Director de Trading",
      image: "/professional-businessman-50-years-experienced-trad.jpg",
      linkedin: null,
    },
    {
      name: "María Fernández",
      role: "Directora de Consultoría",
      image: "/professional-businesswoman-45-years-corporate-exec.jpg",
      linkedin: null,
    },
    {
      name: "Pedro J Zaffuto",
      role: "Especialista Blockchain",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGPlVLU4lzLRQ/profile-displayphoto-crop_800_800/B4EZmg2jtbGoAI-/0/1759340282551?e=1765411200&v=beta&t=xaAUpc0uPfMt_tU3qahI6NZ0r3qhXMOUPBEW3iWnHAU",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
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
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                <div className="mt-3 flex items-center">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-400">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
