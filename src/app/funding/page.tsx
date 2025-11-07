import Link from 'next/link';
import Card from '@/components/Card';

export default function FundingPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="container-main py-16">
        <div className="text-center mb-12">
          <h1 className="heading-primary text-secondary mb-4">
            Empresas de Financiamiento
          </h1>
          <p className="paragraph-large text-muted max-w-3xl mx-auto">
            Accede a capital de trading profesional a través de nuestros socios de financiamiento verificados.
            Elige entre opciones de financiamiento de futuros y forex para comenzar a operar con dinero institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/funding/futures">
            <Card
              title="Financiamiento de Futuros"
              description="Obtén financiamiento para trading de futuros con programas de evaluación competitivos y altos splits de ganancias. Opera commodities, índices y monedas."
            >
              <span className="text-[#C71585] hover:text-[#A01070] font-medium">
                Ver Financiamiento de Futuros →
              </span>
            </Card>
          </Link>

          <Link href="/funding/cft-forex">
            <Card
              title="Financiamiento CFT/Forex"
              description="Accede a financiamiento forex a través de Copy Trading Facilities. Opera pares de monedas principales y menores con opciones de leverage flexibles."
            >
              <span className="text-[#C71585] hover:text-[#A01070] font-medium">
                Ver Financiamiento CFT/Forex →
              </span>
            </Card>
          </Link>
        </div>

        <div className="card-base">
          <h2 className="heading-tertiary text-secondary mb-4">
            ¿Por Qué Elegir Nuestros Socios de Financiamiento?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-2">Altos Splits de Ganancias</h3>
              <p className="text-gray-600">Hasta 90% de participación en ganancias en operaciones exitosas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Pagos Rápidos</h3>
              <p className="text-gray-600">Pagos semanales o mensuales con procesamiento rápido</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2">Gestión de Riesgos</h3>
              <p className="text-gray-600">Controles de riesgo integrados y límites de drawdown</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}