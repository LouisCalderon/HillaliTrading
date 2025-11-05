import Card from '@/components/Card';

export default function VwapPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Indicador VWAP
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indicador profesional de Precio Promedio Ponderado por Volumen con características avanzadas
            para análisis de mercados de grado institucional y señales de trading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Principales</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Cálculo VWAP en Tiempo Real</strong>
                  <p className="text-gray-600">Líneas VWAP precisas actualizadas en tiempo real con datos de mercado en vivo</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Múltiples Marcos Temporales</strong>
                  <p className="text-gray-600">Soporte para cálculos VWAP intradiarios, diarios, semanales y mensuales</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Bandas de Desviación</strong>
                  <p className="text-gray-600">Bandas de desviación estándar para análisis de tendencias mejorado y señales de entrada</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Sistema de Alertas</strong>
                  <p className="text-gray-600">Alertas personalizables para cruces de precio y toques de bandas</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Soporte Multi-Activo</strong>
                  <p className="text-gray-600">Funciona con acciones, forex, commodities y criptomonedas</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trading Applications</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Day Trading</h3>
                <p className="text-gray-600">Use VWAP as dynamic support/resistance levels throughout the trading day</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Mean Reversion</h3>
                <p className="text-gray-600">Trade price deviations from VWAP with statistical edge</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Trend Following</h3>
                <p className="text-gray-600">Identify institutional accumulation and distribution patterns</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Scalping</h3>
                <p className="text-gray-600">Quick entries and exits based on VWAP interactions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Performance Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <p className="text-gray-600">Win Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.3:1</div>
              <p className="text-gray-600">Risk/Reward Ratio</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15min</div>
              <p className="text-gray-600">Avg Trade Duration</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Markets Tested</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card
            title="Get VWAP Indicator"
            description="Professional-grade VWAP indicator with lifetime updates and full support. Compatible with MetaTrader 4/5, TradingView, and NinjaTrader."
            link="#"
            linkText="Purchase Now - $199"
          />
        </div>
      </div>
    </div>
  );
}