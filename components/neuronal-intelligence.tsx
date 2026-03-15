"use client"

import { Brain, Cpu, Zap, BarChart3, Shield, Globe, Rocket, ArrowRight, Network } from "lucide-react"

export default function NeuronalIntelligence() {
  const stackItems = [
    { name: "SmarterOS", detail: "Sistema Operativo AI" },
    { name: "AI Agents", detail: "Orquestación Autónoma" },
    { name: "Chatwoot", detail: "Omnicanalidad" },
    { name: "Odoo ERP", detail: "Gestión Empresarial" },
    { name: "n8n", detail: "Automatización de Flujos" },
    { name: "OpenClaw AI", detail: "Cerebro Neuronal" },
    { name: "VPS Cloud", detail: "Infraestructura Hostinger" },
    { name: "Economic Graph", detail: "Red de Valor Digital" },
  ]

  const costs = [
    { item: "VPS Hostinger", cost: "~200 USD" },
    { item: "OpenClaw", cost: "~200 USD" },
    { item: "Infraestructura AI", cost: "~200 USD" },
    { item: "Integración SmarterOS", cost: "~200 USD" },
    { item: "Operación / Soporte", cost: "~200 USD" },
  ]

  return (
    <section id="neuronal" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Narrative & Product */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20">
              <Brain size={16} />
              <p className="text-xs font-black uppercase tracking-widest">Vertical: Inteligencia Neuronal</p>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              AI OPERATING <br />
              <span className="text-amber-500">STACK.</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              No vendemos servidores. Vendemos una <span className="text-white font-bold">empresa digital operativa desde el día 1</span>. Una infraestructura de IA completa que reemplaza modelos tradicionales de alto costo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {stackItems.map((item, i) => (
                <div key={i} className="p-4 bg-slate-800/50 border border-slate-700 rounded-2xl group hover:bg-slate-800 transition-colors">
                  <p className="text-amber-500 font-black text-xs uppercase tracking-widest mb-1">{item.name}</p>
                  <p className="text-sm text-slate-400 font-medium">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-black mb-6">Comparación de Valor</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Modelo Tradicional</p>
                  <p className="text-red-400 font-black text-lg">80k - 120k USD</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-amber-500 font-black uppercase text-xs tracking-widest">SmarterOS Stack</p>
                  <p className="text-amber-500 font-black text-3xl">≈ 1k - 5k USD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Economics & Strategy */}
          <div className="lg:w-1/2 space-y-8">
            {/* Real Cost Table */}
            <div className="bg-white text-slate-900 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-black mb-8 tracking-tight">Anatomía del Capital (CAPEX)</h3>
              <div className="space-y-4 mb-8">
                {costs.map((c, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                    <p className="text-slate-600 font-bold">{c.item}</p>
                    <p className="text-slate-900 font-black">{c.cost}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t-4 border-slate-900 flex justify-between items-center">
                <p className="text-lg font-black uppercase tracking-tighter">Total Paquete Inicial</p>
                <p className="text-4xl font-black text-amber-600">≈ 1.000 USD</p>
              </div>
            </div>

            {/* Investment Strategy & Equity */}
            <div className="bg-slate-800 p-8 rounded-[2.5rem] border border-slate-700">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tighter">Estructura de Equity</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Smarter SPA / Mercado Latam</p>
                </div>
                <div className="px-3 py-1 bg-amber-500 text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  Investable
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 font-black text-xs">01</div>
                   <p className="text-sm font-bold text-slate-300">Smarter SPA (Holding de Operaciones)</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 ml-6">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 font-black text-xs">02</div>
                   <p className="text-sm font-bold text-slate-300">AI Operating System & Agents</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 ml-12">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 font-black text-xs">03</div>
                   <p className="text-sm font-bold text-slate-300">Red de Valor & Datos Económicos</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-900/30 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Target de Ronda</p>
                  <p className="text-xl font-black text-white">100k USD</p>
                </div>
                <div className="p-4 bg-slate-900/30 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Modelo de Equity</p>
                  <p className="text-xl font-black text-white">SAFE / Direct</p>
                </div>
              </div>

              <button className="w-full group flex items-center justify-between p-6 bg-white text-slate-900 rounded-2xl hover:bg-amber-500 transition-all shadow-[0_0_30px_rgba(255,191,0,0.2)]">
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Documentación Oficial</p>
                  <p className="text-lg font-black tracking-tight">PROPUESTA EQUITY .PDF</p>
                </div>
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>

            {/* Public Programs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50 flex flex-col justify-center items-center text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_CORFO.svg/1200px-Logo_CORFO.svg.png" className="h-8 mb-4 invert grayscale brightness-200" alt="CORFO" />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">IA Aplicada</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50 flex flex-col justify-center items-center text-center">
                <div className="p-3 bg-slate-900 rounded-lg mb-4">
                  <Shield size={20} className="text-slate-400" />
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Agencia I+D+i</p>
              </div>
            </div>

            {/* Final Narrative */}
            <div className="p-8 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 rounded-[2.5rem] shadow-xl">
              <p className="text-lg font-black leading-tight mb-4 italic">
                “Por ~1000 USD desplegamos una empresa digital completa operada por IA. La inversión de 100k USD escala esta infraestructura para cientos de empresas.”
              </p>
              <div className="flex items-center gap-3">
                <Network size={20} />
                <p className="text-xs font-black uppercase tracking-widest">Activo: Red de Empresas Conectadas</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
