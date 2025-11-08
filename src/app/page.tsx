import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="decorative-element decorative-element-1"></div>
        <div className="decorative-element decorative-element-2"></div>
        <div className="container-main text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="heading-primary mb-6">
              MAESTRÍA EN TRADING
            </h1>
            <p className="paragraph-large mb-8 max-w-4xl mx-auto text-white/90">
              Para aquellos que no necesitan sufrir más
            </p>
            <p className="paragraph-medium mb-12 max-w-3xl mx-auto text-white/80">
              Oportunidades de financiamiento, indicadores de trading y mentoría personalizada
              para caminar armónicamente hacia la rentabilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="animate-slide-in">
                <Button href="/mentorship">Obtener Mentoría</Button>
              </div>
              <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <Button href="/funding" variant="secondary">Explorar Financiamiento</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-sm bg-gradient-to-b from-transparent to-white/5">
        <div className="container-main">
          <h2 className="heading-secondary mb-16 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card-funding card-base p-8 rounded-xl text-white animate-fade-in">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4">Empresas de Financiamiento</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Accede a empresas de financiamiento verificadas para trading de futuros y forex. Obtén el capital que necesitas para operar profesionalmente.
              </p>
              <Link href="/funding" className="text-white hover:text-white/80 font-semibold text-lg transition-colors inline-flex items-center gap-2">
                Ver Opciones →
              </Link>
            </div>

            <div className="service-card-indicators card-base p-8 rounded-xl text-white animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4">Indicadores de Trading</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Poderosos indicadores técnicos incluyendo VWAP y NCAT para mejorar tus estrategias de trading y toma de decisiones.
              </p>
              <Link href="/indicators" className="text-white hover:text-white/80 font-semibold text-lg transition-colors inline-flex items-center gap-2">
                Explorar →
              </Link>
            </div>

            <div className="service-card-brokers card-base p-8 rounded-xl text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl mb-6">🏦</div>
              <h3 className="text-xl font-bold mb-4">Brokers CFD Verificados</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Recomendamos brokers confiables con los que hemos trabajado: Vantage, Tickmill e IC Markets. Plataformas seguras y reguladas.
              </p>
              <Link href="#brokers" className="text-white hover:text-white/80 font-semibold text-lg transition-colors inline-flex items-center gap-2">
                Ver Brokers →
              </Link>
            </div>

            <div className="service-card-mentorship card-base p-8 rounded-xl text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-6xl mb-6">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-4">Mentoría Personalizada</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Guía uno a uno de traders experimentados. Aprende estrategias probadas y evita errores comunes.
              </p>
              <Link href="/mentorship" className="text-white hover:text-white/80 font-semibold text-lg transition-colors inline-flex items-center gap-2">
                Saber Más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Brokers CFD Section */}
      <section id="brokers" className="section">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">
              Brokers CFD Verificados
            </h2>
            <p className="paragraph-medium max-w-3xl mx-auto">
              Recomendamos brokers confiables con los que hemos trabajado directamente.
              Plataformas seguras, reguladas y con spreads competitivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card
              title="Vantage"
              description="Broker australiano con spreads desde 0.0 pips. Excelente ejecución, apalancamiento hasta 1:500 y plataforma MT4/MT5."
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-400 font-medium">Regulado por ASIC</span>
                <a href="#" className="text-[#C71585] hover:text-[#A01070] font-medium">
                  Abrir Cuenta →
                </a>
              </div>
            </Card>

            <Card
              title="Tickmill"
              description="Broker con sede en Seychelles, spreads desde 0.0 pips. Conocido por su ejecución rápida y servicio al cliente excepcional."
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-400 font-medium">Regulado por FSA</span>
                <a href="#" className="text-[#C71585] hover:text-[#A01070] font-medium">
                  Abrir Cuenta →
                </a>
              </div>
            </Card>

            <Card
              title="IC Markets"
              description="Broker australiano líder, spreads desde 0.0 pips. Una de las plataformas más rápidas con ejecución instantánea."
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-400 font-medium">Regulado por ASIC</span>
                <a href="#" className="text-[#C71585] hover:text-[#A01070] font-medium">
                  Abrir Cuenta →
                </a>
              </div>
            </Card>
          </div>

          <div className="card-glass">
            <h3 className="heading-tertiary text-center mb-6">
              ¿Por Qué Estos Brokers?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-semibold text-white mb-2">Regulados</h4>
                <p className="text-white/80 text-sm">Licencias oficiales de ASIC y FSA</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold text-white mb-2">Ejecución Rápida</h4>
                <p className="text-white/80 text-sm">Spreads desde 0.0 pips y baja latencia</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-semibold text-white mb-2">Apalancamiento Alto</h4>
                <p className="text-white/80 text-sm">Hasta 1:500 para maximizar oportunidades</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-white mb-2">Verificados</h4>
                <p className="text-white/80 text-sm">Hemos trabajado con ellos personalmente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Platforms Section */}
      <section className="section">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">
              Plataformas que Recomendamos
            </h2>
            <p className="paragraph-medium max-w-3xl mx-auto">
              Utilizamos y recomendamos estas plataformas de trading por su calidad y rendimiento excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card
              title="NinjaTrader"
              description="Plataforma profesional de trading que utilizamos para futuros, forex y opciones. Excelente para análisis técnico avanzado y ejecución de órdenes."
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/partners/ninjatrader.png"
                  alt="NinjaTrader Logo"
                  className="h-16 w-auto object-contain"
                />
                <a
                  href="https://ninjatrader.com/"
                  target="_blank"
                  rel="nofollow sponsored"
                  className="text-[#C71585] hover:text-[#A01070] font-medium"
                >
                  Visitar NinjaTrader →
                </a>
              </div>
            </Card>

            <Card
              title="Kinetick"
              description="Proveedor de datos de mercado en tiempo real que recomendamos. Ofrece feeds de alta calidad para múltiples mercados globales con latencia ultra baja."
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/partners/kinetick.png"
                  alt="Kinetick Logo"
                  className="h-16 w-auto object-contain"
                />
                <a
                  href="https://kinetick.com/"
                  target="_blank"
                  rel="nofollow sponsored"
                  className="text-[#C71585] hover:text-[#A01070] font-medium"
                >
                  Visitar Kinetick →
                </a>
              </div>
            </Card>
          </div>

          <div className="card-glass">
            <h3 className="heading-tertiary text-center mb-6">
              ¿Por Qué Recomendamos Estas Plataformas?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-white mb-2">Profesional</h4>
                <p className="text-white/80 text-sm">Herramientas utilizadas por traders profesionales</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold text-white mb-2">Rápidas</h4>
                <p className="text-white/80 text-sm">Ejecución instantánea y datos en tiempo real</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-semibold text-white mb-2">Personalizables</h4>
                <p className="text-white/80 text-sm">Adaptables a cualquier estrategia de trading</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-semibold text-white mb-2">Globales</h4>
                <p className="text-white/80 text-sm">Acceso a mercados internacionales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Call to Action */}
      <section className="card-glass section border-t border-white/20">
        <div className="container-main text-center">
          <h2 className="heading-secondary mb-8">
            ¿Listo para Empezar tu Viaje en el Trading?
          </h2>
          <p className="paragraph-medium mb-12 max-w-2xl mx-auto">
            Únete a miles de traders que han transformado sus carreras con nuestros recursos comunitarios.
          </p>
          <Button href="/mentorship">Comienza Hoy</Button>
        </div>
      </section>
    </div>
  );
}

