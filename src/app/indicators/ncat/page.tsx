import Card from '@/components/Card';

export default function NcatPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NCAT Indicator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced Neural Network-based trend analysis tool that combines multiple
            technical indicators for superior market prediction and trading signals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🧠</span>
                <div>
                  <strong className="text-gray-900">Neural Network Engine</strong>
                  <p className="text-gray-600">Machine learning algorithms trained on historical market data</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📊</span>
                <div>
                  <strong className="text-gray-900">Multi-Indicator Fusion</strong>
                  <p className="text-gray-600">Combines RSI, MACD, Bollinger Bands, and volume analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                <div>
                  <strong className="text-gray-900">Predictive Signals</strong>
                  <p className="text-gray-600">Anticipates trend changes before they occur</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">⚙️</span>
                <div>
                  <strong className="text-gray-900">Adaptive Parameters</strong>
                  <p className="text-gray-600">Self-adjusting settings based on market conditions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📈</span>
                <div>
                  <strong className="text-gray-900">Confidence Scoring</strong>
                  <p className="text-gray-600">Signal strength indicators for better risk management</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trading Strategies</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Trend Following</h3>
                <p className="text-gray-600">Follow strong trends identified by neural network analysis</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Reversal Trading</h3>
                <p className="text-gray-600">Catch trend reversals before traditional indicators</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Scalping</h3>
                <p className="text-gray-600">High-frequency signals for quick profit taking</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Portfolio Management</h3>
                <p className="text-gray-600">Multi-asset signal generation for diversified portfolios</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3.1:1</div>
              <p className="text-gray-600">Avg Risk/Reward</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">30min</div>
              <p className="text-gray-600">Avg Hold Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <p className="text-gray-600">Assets Supported</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How NCAT Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Data Processing</h3>
              <p className="text-gray-600">Analyzes multiple technical indicators and price action patterns</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold mb-2">Neural Analysis</h3>
              <p className="text-gray-600">Machine learning algorithms identify complex market relationships</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Signal Generation</h3>
              <p className="text-gray-600">Produces high-probability trading signals with confidence scores</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card
            title="Get NCAT Indicator"
            description="Cutting-edge neural network trading indicator with continuous learning and updates. Compatible with all major trading platforms."
            link="#"
            linkText="Purchase Now - $299"
          />
        </div>
      </div>
    </div>
  );
}