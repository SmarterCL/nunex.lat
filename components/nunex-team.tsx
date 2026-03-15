"use client"

import { Linkedin, Zap } from "lucide-react"

export default function NunexTeam() {
  const team = [
    {
      name: "Domingo Ramón Núñez",
      role: "Director General - Nunex Capital Group",
      description: "Lidera la visión estratégica y el brazo inversor. Especialista en activos reales y despliegue de capital en Latam.",
      image: "https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/nunex/Ramon-Nunex.jpeg",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
    {
      name: "Pedro J. Zaffuto Ruiz",
      role: "Director de I+D - Smarter Labs",
      description: "Cara técnica del ecosistema. Arquitecto de LightRAG y orquestación MCP. Especialista en ciberseguridad industrial y soberanía digital.",
      image: "/pz_linkedin.png",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    },
    {
      name: "Carlos Velasco",
      role: "Director de Trading & Energía",
      description: "Líder en operaciones de capital y proyectos de energía renovable a gran escala vinculados a infraestructura de IA.",
      image: "/professional-businessman-50-years-experienced-trad.jpg",
      linkedin: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    }
  ]

  return (
    <section id="team" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter text-balance">
            EL EQUIPO TRAS EL <br />
            <span className="text-amber-500">SISTEMA.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Smarterbot no es solo software; es la convergencia de capital estratégico y vanguardia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200 shadow-2xl shadow-slate-200/50">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-amber-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-2">{member.name}</h3>
              <p className="text-amber-600 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2 justify-center md:justify-start">
                <Zap size={14} className="fill-amber-600" /> {member.role}
              </p>
              <p className="text-slate-600 font-medium leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
