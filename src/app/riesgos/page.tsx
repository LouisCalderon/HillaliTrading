export default function Riesgos() {
  return (
    <div className="bg-transparent text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-lg" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
          Divulgaciones de Riesgos
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C71585]">Declaración de Riesgo</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              La operación de futuros y forex sobrelleva riesgos substanciales y no es para todos los inversionistas. Un inversionista, podría, potencialmente perder todo o más de la inversión inicial. Capital de Riesgo, es dinero que puede ser perdido, sin poner en juego la seguridad financiera o estilo de vida de la persona. Solo capital de riesgo debe ser utilizado para trading, y solo aquellas personas con suficiente capital de riesgo deben considerar trading. Resultados pasados, no son necesariamente indicativos de resultados futuros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C71585]">Declaración de Resultados Hipotéticos</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Resultados hipotéticos de rendimiento deben tener muchas limitaciones inherentes, algunas de las cuales se describen a continuación. No se debe hacer representación de que alguna de las cuentas va o es probable que tenga resultados similares a los mostrados; de hecho, hay diferencias frecuentes entre los resultados hipotéticos y los resultados actuales obtenidos por cualquier programa de trading. Una de las limitaciones de resultados hipotéticos de rendimiento es el hecho de que son preparados con los beneficios en retrospectiva. Además, trading hipotético no involucra riesgo financiero, y ningún record de trading hipotético puede considerar el riesgo financiero de operaciones reales. Por ejemplo, la capacidad de resistir pérdidas o de adherirse a un programa de trading particular sin importar pérdidas son puntos materiales los cuales pueden afectar de manera substancial resultados de trading real. Hay muchos factores relacionados a los mercados en general, o a la implementación de cualquier programa de trading especifico, los cuales no pueden ser todos considerados en la preparación de resultados hipotéticos, todos estos, pueden afectar los resultados de trading de forma adversa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C71585]">Declaración de Testimonios</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Los testimonios que aparecen en esta página web pueden no ser representativos de otros clientes o clientes y no es garantía de rendimiento o éxito en el futuro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C71585]">Declaración de la Sala de Operaciones en Directo</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Esta presentación sólo tiene fines educativos y las opiniones expresadas son las del presentador. Todas las operaciones presentadas deben considerarse hipotéticas y no debe esperarse que se reproduzcan en una cuenta real.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C71585]">Declaración sobre Monedas Virtuales</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Consulte los avisos de la{' '}
              <a
                href="https://www.cftc.gov/sites/default/files/idc/groups/public/@customerprotection/documents/file/customeradvisory_urvct121517.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C71585] hover:text-[#A01070] underline font-medium"
              >
                CFTC
              </a>
              , ya que contienen más información sobre los riesgos asociados al comercio de monedas virtuales.
            </p>
          </section>

          
        </div>
      </div>
    </div>
  );
}