export function AIDimensions() {
  const dimensions = [
    {
      title: 'Revenue Architecture',
      description: 'Industry focus, ICP clarity, revenue model, pipeline structure.',
      color: '#C9A84C',
    },
    {
      title: 'Market Traction',
      description: 'Demand generation approach, enterprise targeting, CXO engagement.',
      color: '#0D9488',
    },
    {
      title: 'Sales Capability',
      description: 'Sales assets, value messaging, presales strength.',
      color: '#7C3AED',
    },
    {
      title: 'Governance Discipline',
      description: 'Pipeline reviews, forecasting structure, execution rhythm.',
      color: '#0EA5E9',
    },
    {
      title: 'Risk and Dependency',
      description: 'Founder reliance, revenue concentration, structural vulnerabilities.',
      color: '#10B981',
    },
  ];

  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          What the Platform Evaluates
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          The platform assesses the organisation across the core dimensions that determine whether growth can scale.
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed mb-16" style={{ color: '#6B7280', maxWidth: '700px' }}>
          Each dimension directly impacts the sustainability and scalability of your revenue engine.
        </p>

        {/* Five dimension cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {dimensions.map((dimension, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border-t-4"
              style={{ borderTopColor: dimension.color }}
            >
              <h3 className="text-base font-bold mb-3" style={{ color: dimension.color }}>
                {dimension.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {dimension.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
