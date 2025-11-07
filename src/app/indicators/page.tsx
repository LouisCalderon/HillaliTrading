import Link from 'next/link';
import Card from '@/components/Card';

export default function IndicatorsPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Indicadores de Trading
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mejora tus estrategias de trading con nuestros indicadores técnicos premium.
            Herramientas de grado profesional diseñadas para traders serios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/indicators/vwap">
            <Card
              title="Indicador VWAP"
              description="Indicador de Precio Promedio Ponderado por Volumen con características avanzadas para análisis de grado institucional. Perfecto para traders diarios y swing traders."
            >
              <span className="text-[#C71585] hover:text-[#A01070] font-medium">
                Saber Más →
              </span>
            </Card>
          </Link>

          <Link href="/indicators/ncat">
            <Card
              title="Indicador NCAT"
              description="Herramienta de análisis de tendencias basada en Redes Neuronales que combina múltiples indicadores técnicos para una precisión superior en la predicción de mercados."
            >
              <span className="text-[#C71585] hover:text-[#A01070] font-medium">
                Saber Más →
              </span>
            </Card>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Por Qué Elegir Nuestros Indicadores?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Alta Precisión</h3>
              <p className="text-gray-600 text-sm">Algoritmos backtestados con rendimiento probado</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Actualizaciones en Tiempo Real</h3>
              <p className="text-gray-600 text-sm">Integración de datos de mercado en vivo para señales instantáneas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold mb-2">Personalizable</h3>
              <p className="text-gray-600 text-sm">Parámetros ajustables para diferentes estilos de trading</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Soporte Completo</h3>
              <p className="text-gray-600 text-sm">Documentación completa y soporte de la comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}