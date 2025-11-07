import Card from '@/components/Card';

export default function FuturesFundingPage() {
  const futuresCompanies = [
    {
      name: "TopStepTrader",
      description: "Empresa líder en financiamiento de futuros con programas completos de evaluación. Opera futuros E-mini con hasta $200,000 en financiamiento.",
      features: ["Cuentas de trading propietarias", "90% de participación en ganancias", "Sin límites de tiempo", "Reinicios diarios de drawdown"],
      link: "#",
      linkText: "Obtener Referencia"
    },
    {
      name: "Futures Funding Pro",
      description: "Financiamiento profesional de futuros con tamaños de cuenta flexibles. Especializados en trading de commodities e índices.",
      features: ["Múltiples tamaños de cuenta", "80% de participación en ganancias", "Analíticas avanzadas", "Soporte 24/7"],
      link: "#",
      linkText: "Obtener Referencia"
    },
    {
      name: "Elite Futures Capital",
      description: "Financiamiento premium de futuros para traders experimentados. Altos montos de financiamiento con splits competitivos de ganancias.",
      features: ["Hasta $500,000 en financiamiento", "85% de participación en ganancias", "Pagos instantáneos", "Estrategias personalizadas"],
      link: "#",
      linkText: "Obtener Referencia"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      <div className="container-main py-16">
        <div className="text-center mb-12">
          <h1 className="heading-primary text-secondary mb-4">
            Empresas de Financiamiento de Futuros
          </h1>
          <p className="paragraph-large text-muted max-w-3xl mx-auto">
            Obtén financiamiento para operar mercados de futuros profesionalmente. Nuestras empresas asociadas ofrecen
            programas competitivos de evaluación y altos splits de ganancias para traders exitosos.
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

        <div className="card-base mt-16">
          <h2 className="heading-tertiary text-secondary mb-6 text-center">
            Cómo Funciona el Financiamiento de Futuros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#C71585]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C71585]">1</span>
              </div>
              <h3 className="font-semibold mb-2">Pasa la Evaluación</h3>
              <p className="text-gray-600 text-sm">Completa el desafío de trading con objetivos específicos de ganancias y límites de riesgo</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C71585]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C71585]">2</span>
              </div>
              <h3 className="font-semibold mb-2">Obtén Financiamiento</h3>
              <p className="text-gray-600 text-sm">Recibe capital de trading basado en tu rendimiento en la evaluación</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C71585]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C71585]">3</span>
              </div>
              <h3 className="font-semibold mb-2">Opera y Gana</h3>
              <p className="text-gray-600 text-sm">Opera con capital profesional y gana splits de ganancias</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C71585]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C71585]">4</span>
              </div>
              <h3 className="font-semibold mb-2">Escala</h3>
              <p className="text-gray-600 text-sm">Aumenta el tamaño de tu cuenta conforme demuestres rentabilidad consistente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}