export function AIFits() {
  return (
    <section style={{ backgroundColor: '#1A2744' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          How It Fits Within SIRTIKA
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8" style={{ maxWidth: '900px' }}>
          The Entry Point to Transformation
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left side - description */}
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#D1D5DB' }}>
              The AI Diagnostic Platform powers the <span style={{ color: '#C9A84C' }}>Diagnose</span> stage of the SIRTIKA Growth Architecture program.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span style={{ color: '#0D9488' }} className="text-lg font-bold flex-shrink-0">→</span>
                <span style={{ color: '#D1D5DB' }}>The diagnostic identifies structural gaps</span>
              </li>
              <li className="flex gap-4 items-start">
                <span style={{ color: '#0D9488' }} className="text-lg font-bold flex-shrink-0">→</span>
                <span style={{ color: '#D1D5DB' }}>The SIRTIKA advisory program then helps organisations build and execute the transformation roadmap</span>
              </li>
            </ul>
          </div>

          {/* Right side - D-A-A-A flow */}
          <div className="flex flex-col gap-4">
            <div className="text-xs tracking-[0.2em] uppercase font-bold mb-2" style={{ color: '#C9A84C' }}>
              The Four Stages
            </div>
            <div className="space-y-3">
              {['Diagnose', 'Architect', 'Activate', 'Accelerate'].map((stage, idx) => (
                <div
                  key={idx}
                  className="p-4 text-center font-bold"
                  style={{
                    backgroundColor: idx === 0 ? '#C9A84C' : '#1A2744',
                    color: idx === 0 ? '#1A2744' : '#D1D5DB',
                    border: idx === 0 ? 'none' : '1px solid #2D3A5F',
                  }}
                >
                  {idx + 1}. {stage}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="p-8 border-l-4" style={{ borderLeftColor: '#C9A84C', backgroundColor: 'rgba(201, 168, 76, 0.05)' }}>
          <p className="text-base italic" style={{ color: '#D1D5DB' }}>
            The AI Platform owns the Diagnose stage. The Transformation Advisory owns the three A's. Together, they deliver the complete SIRTIKA™ program.
          </p>
        </div>
      </div>
    </section>
  );
}
