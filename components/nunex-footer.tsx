"use client"

export default function NunexFooter() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          <div>
            <h3 className="font-bold text-lg mb-4">NUNEX</h3>
            <p className="text-sm text-neutral-400">
              Consultoría corporativa internacional especializada en trading, blockchain y financiamiento empresarial.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trading EUR/USD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tokens Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Financiamiento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Contacto</h4>
            <p className="text-sm text-neutral-400 mb-2">+54 9 11 2656-9822</p>
            <p className="text-sm text-neutral-400">ramon@proconsul.com.ar</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>© 2025 NUNEX - Domingo Ramón Núñez. Todos los derechos reservados.</p>
          <p>Buenos Aires, Argentina | Servicio Global</p>
        </div>
      </div>
    </footer>
  )
}
