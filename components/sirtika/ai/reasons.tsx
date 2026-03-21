export function AIReasons() {
  const reasons = [
    'Heavy founder dependency in deal closures',
    'Unclear industry focus or ICP definition',
    'Weak sales assets and value articulation',
    'Inconsistent pipeline discipline',
    'Lack of structured governance around revenue',
  ];

  return (
    <section style={{ backgroundColor: '#F7F8FB' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          Why This Platform Exists
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#374151', maxWidth: '900px' }}>
          Most organisations do not struggle because of lack of effort.
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed mb-12" style={{ color: '#6B7280', maxWidth: '700px' }}>
          They struggle because their growth system is not designed to scale.
        </p>

        {/* Common patterns headline */}
        <p className="text-base font-semibold mb-8" style={{ color: '#374151' }}>
          Common patterns include:
        </p>

        {/* Reasons list */}
        <ul className="space-y-4 mb-12">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex gap-4 text-base" style={{ color: '#374151' }}>
              <span className="flex-shrink-0 font-bold" style={{ color: '#C9A84C' }}>•</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>

        {/* Closing paragraph */}
        <div className="p-8 md:p-10 bg-white border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
          <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
            The <span className="font-semibold">SIRTIKA AI Diagnostic Platform</span> helps leadership teams identify these structural gaps quickly and objectively.
          </p>
        </div>
      </div>
    </section>
  );
}
