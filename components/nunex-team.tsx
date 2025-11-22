"use client"

export default function NunexTeam() {
  const team = [
    {
      name: "Domingo Ramón Núñez",
      role: "Fundador & Director Ejecutivo",
      image: "/professional-man-45-years-old-business-executive-s.jpg",
    },
    {
      name: "Carlos Velasco",
      role: "Director de Trading",
      image: "/professional-businessman-50-years-experienced-trad.jpg",
    },
    {
      name: "María Fernández",
      role: "Directora de Consultoría",
      image: "/professional-businesswoman-45-years-corporate-exec.jpg",
    },
    {
      name: "Pedro J Zaffuto",
      role: "Especialista Blockchain",
      image: "/professional-man-48-years-tech-specialist-blockcha.jpg",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
