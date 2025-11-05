import Card from '@/components/Card';

export default function FuturesFundingPage() {
  const futuresCompanies = [
    {
      name: "TopStepTrader",
      description: "Leading futures funding company with comprehensive evaluation programs. Trade E-mini futures with up to $200,000 in funding.",
      features: ["Proprietary trading accounts", "90% profit split", "No time limits", "Daily drawdown resets"],
      link: "#",
      linkText: "Get Referral"
    },
    {
      name: "Futures Funding Pro",
      description: "Professional futures funding with flexible account sizes. Specialize in commodities and indices trading.",
      features: ["Multiple account sizes", "80% profit split", "Advanced analytics", "24/7 support"],
      link: "#",
      linkText: "Get Referral"
    },
    {
      name: "Elite Futures Capital",
      description: "Premium futures funding for experienced traders. High funding amounts with competitive profit splits.",
      features: ["Up to $500,000 funding", "85% profit split", "Instant payouts", "Custom strategies"],
      link: "#",
      linkText: "Get Referral"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Futures Funding Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get funded to trade futures markets professionally. Our partner companies offer
            competitive evaluation programs and high profit splits for successful traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futuresCompanies.map((company, index) => (
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
            How Futures Funding Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Pass Evaluation</h3>
              <p className="text-gray-600 text-sm">Complete the trading challenge with specific profit targets and risk limits</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Get Funded</h3>
              <p className="text-gray-600 text-sm">Receive trading capital based on your evaluation performance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Trade & Profit</h3>
              <p className="text-gray-600 text-sm">Trade with professional capital and earn profit splits</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Scale Up</h3>
              <p className="text-gray-600 text-sm">Increase account size as you prove consistent profitability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}