import Card from '@/components/Card';

export default function CftForexFundingPage() {
  const cftForexCompanies = [
    {
      name: "Forex Funding Masters",
      description: "Specialized CFT funding for forex traders. Trade major currency pairs with leverage up to 1:500 and competitive spreads.",
      features: ["CFT account access", "1:500 leverage", "Tight spreads", "Islamic accounts available"],
      link: "#",
      linkText: "Get Referral"
    },
    {
      name: "Global Forex Capital",
      description: "International forex funding through Copy Trading Facilities. Access multiple brokers and trading platforms.",
      features: ["Multi-broker access", "Copy trading tools", "Risk management", "Educational resources"],
      link: "#",
      linkText: "Get Referral"
    },
    {
      name: "Prime Forex Funding",
      description: "Premium CFT forex funding with advanced trading conditions. Perfect for scalping and day trading strategies.",
      features: ["Ultra-fast execution", "No requotes", "Advanced charting", "Mobile trading"],
      link: "#",
      linkText: "Get Referral"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CFT/Forex Funding Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access forex trading capital through Copy Trading Facilities (CFT).
            Trade the world's most liquid market with professional funding and competitive conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cftForexCompanies.map((company, index) => (
            <Card
              key={index}
              title={company.name}
              description={company.description}
              link={company.link}
              linkText={company.linkText}
            >
              <ul className="mt-4 space-y-2">
                {company.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Benefits of CFT Forex Funding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Market Access</h3>
              <p className="text-gray-600">Trade 24/5 with access to all major and minor currency pairs worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">High Leverage</h3>
              <p className="text-gray-600">Amplify your trading potential with leverage up to 1:500</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Tools</h3>
              <p className="text-gray-600">Access professional trading platforms with advanced analytics and automation</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Ready to Start Forex Trading?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Our CFT funding partners provide everything you need to trade forex professionally.
            Choose the partner that best fits your trading style and goals.
          </p>
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-[#C71585] text-white px-8 py-3 rounded-md hover:bg-[#A01070] transition-colors font-medium"
            >
              Comparar Todas las Opciones
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}