"use client"

export default function NunexFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-purple-500/30">
          <div>
            <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              NUNEX.LAT
            </h3>
            <p className="text-sm text-blue-200 font-medium">
              Consultoría corporativa internacional especializada en trading, blockchain y financiamiento empresarial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-blue-300">Servicios</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Trading EUR/USD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Tokens Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Financiamiento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-blue-300">Empresa</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-medium">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-blue-300">Contacto</h4>
            <p className="text-sm text-blue-100 mb-2">
              <a href="https://wa.me/56979540471" className="hover:text-white transition-colors font-medium">
                +56 979 540 471
              </a>
            </p>
            <p className="text-sm text-blue-100">
              <a href="mailto:comercial@nunex.lat" className="hover:text-white transition-colors font-medium">
                comercial@nunex.lat
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 font-medium">
          <p>© 2025 NUNEX.LAT - Domingo Ramón Núñez. Todos los derechos reservados.</p>
          <p>Santiago, Chile | Servicio Global</p>
        </div>
      </div>
    </footer>
  )
}
