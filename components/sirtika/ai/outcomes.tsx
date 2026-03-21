export function AIOutcomes() {
  const outcomes = [
    'Growth maturity score',
    'Capability heatmap',
    'SWOT insights',
    'Structural gap analysis',
    'Prioritised improvement initiatives',
    '90-day roadmap',
    'Long-term transformation path',
  ];

  return (
    <section style={{ backgroundColor: '#F7F8FB' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          What Organisations Receive
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          A structured transformation report including:
        </h2>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-12" style={{ color: '#6B7280', maxWidth: '700px' }}>
          After completing the diagnostic, organisations receive a comprehensive assessment that clarifies growth constraints and transformation priorities.
        </p>

        {/* Outcomes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex gap-4 items-start p-6 bg-white border border-gray-200">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C9A84C' }} />
              <span className="text-base" style={{ color: '#374151' }}>
                {outcome}
              </span>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="p-10 bg-white border-l-4" style={{ borderLeftColor: '#0D9488' }}>
          <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
            This report helps <span className="font-semibold">leadership teams clearly understand where growth is constrained</span> and what must change.
          </p>
        </div>
      </div>
    </section>
  );
}
