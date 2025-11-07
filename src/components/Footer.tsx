export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hillali Trading Community</h3>
            <p className="text-gray-300">
              
              Building a community of successful traders through funding opportunities,
              powerful indicators, and personalized mentorship.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/funding" className="text-gray-300 hover:text-white transition-colors">
                  Empresas de Financiamiento
                </a>
              </li>
              <li>
                <a href="/indicators" className="text-gray-300 hover:text-white transition-colors">
                  Indicadores de Trading
                </a>
              </li>
              <li>
                <a href="/mentorship" className="text-gray-300 hover:text-white transition-colors">
                  Mentoría
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Conecta</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                Únete a nuestra comunidad en redes sociales para las últimas actualizaciones y conocimientos de trading.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Discord
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="space-y-6 text-xs text-gray-400 leading-relaxed">
            <div>
              <h4 className="text-white font-semibold mb-2">Declaración de Riesgo:</h4>
              <p>La operación de futuros y forex sobrelleva riesgos substanciales y no es para todos los inversionistas. Un inversionista, podría, potencialmente perder todo o más de la inversión inicial. Capital de Riesgo, es dinero que puede ser perdido, sin poner en juego la seguridad financiera o estilo de vida de la persona. Solo capital de riesgo debe ser utilizado para trading, y solo aquellas personas con suficiente capital de riesgo deben considerar trading. Resultados pasados, no son necesariamente indicativos de resultados futuros.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Declaración de Resultados Hipotéticos:</h4>
              <p>Resultados hipotéticos de rendimiento deben tener muchas limitaciones inherentes, algunas de las cuales se describen a continuación. No se debe hacer representación de que alguna de las cuentas va o es probable que tenga resultados similares a los mostrados; de hecho, hay diferencias frecuentes entre los resultados hipotéticos y los resultados actuales obtenidos por cualquier programa de trading. Una de las limitaciones de resultados hipotéticos de rendimiento es el hecho de que son preparados con los beneficios en retrospectiva. Además, trading hipotético no involucra riesgo financiero, y ningún record de trading hipotético puede considerar el riesgo financiero de operaciones reales. Por ejemplo, la capacidad de resistir pérdidas o de adherirse a un programa de trading particular sin importar pérdidas son puntos materiales los cuales pueden afectar de manera substancial resultados de trading real. Hay muchos factores relacionados a los mercados en general, o a la implementación de cualquier programa de trading especifico, los cuales no pueden ser todos considerados en la preparación de resultados hipotéticos, todos estos, pueden afectar los resultados de trading de forma adversa.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Declaración de Testimonios:</h4>
              <p>Los testimonios que aparecen en esta página web pueden no ser representativos de otros clientes o clientes y no es garantía de rendimiento o éxito en el futuro.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Declaración de la Sala de Operaciones en Directo:</h4>
              <p>Esta presentación sólo tiene fines educativos y las opiniones expresadas son las del presentador. Todas las operaciones presentadas deben considerarse hipotéticas y no debe esperarse que se reproduzcan en una cuenta real.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Declaración sobre Monedas Virtuales:</h4>
              <p>Consulte los avisos de la{' '}
              <a
                href="https://www.cftc.gov/sites/default/files/idc/groups/public/@customerprotection/documents/file/customeradvisory_urvct121517.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline font-medium"
              >
                CFTC
              </a>
              , ya que contienen más información sobre los riesgos asociados al comercio de monedas virtuales.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Hillali Trading Community. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}