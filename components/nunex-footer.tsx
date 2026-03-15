"use client"

export default function NunexFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
              SMARTER<span className="text-amber-500">BOT</span>
            </h3>
            <p className="text-slate-400 font-medium max-w-sm mb-8">
              Infraestructura de capital e inteligencia distribuida entre tres continentes. Una división estratégica de Nunex Capital Group.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Origin-OS v1.0.4</p>
               </div>
               <div className="px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                 <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">System Active</p>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-slate-500">Laboratorios</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Neuronal Silicio (CH)</a></li>
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Cortical Hardware (AU)</a></li>
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Nunex Labs (Latam)</a></li>
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">LightRAG R&D</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-slate-500">Soporte & Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Términos de Soberanía</a></li>
              <li><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Data Ethics</a></li>
              <li><a href="mailto:labs@nunex.lat" className="text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors">labs@nunex.lat</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© 2026 Smarter Labs by Nunex Capital Group. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <p>Switzerland</p>
            <p>Australia</p>
            <p>Chile</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
