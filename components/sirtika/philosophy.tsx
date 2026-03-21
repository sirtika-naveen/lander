const beliefs = [
  "Revenue must be structural, not personality-driven.",
  "Traction must be engineered, not activity-driven.",
  "Growth must be governed, not emotionally managed.",
  "Output must be measurable, not narrative-based.",
]

export function Philosophy() {
  return (
    <section id="philosophy" style={{ backgroundColor: '#0F172A' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          Core Philosophy
        </div>

        {/* Headline and intro */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ maxWidth: '900px' }}>
          Two Principles. One Growth Equation.
        </h2>

        <p className="text-lg italic mb-16" style={{ color: '#D1D5DB', maxWidth: '700px' }}>
          SIRTIKA™ is built on two foundational beliefs about what makes revenue growth sustainable rather than effortful.
        </p>

        {/* Two principle cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Principle 1 - Gold accent */}
          <div className="p-8 md:p-10" style={{ backgroundColor: '#1A2744', borderTop: '4px solid #C9A84C' }}>
            <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
              Institutionalise Revenue
            </div>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#D1D5DB' }}>
              Institutionalisation creates stability. It replaces founder dependency with structural, repeatable sales operating models built to scale across industries and cycles. It converts revenue from something the founder generates personally into something the organisation produces systematically.
            </p>
            <p className="text-sm font-semibold" style={{ color: '#C9A84C' }}>
              Creates → Predictable Revenue Architecture
            </p>
          </div>

          {/* Principle 2 - Teal accent */}
          <div className="p-8 md:p-10" style={{ backgroundColor: '#1A2744', borderTop: '4px solid #0D9488' }}>
            <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#0D9488' }}>
              Traction with Kinetic Acceleration
            </div>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#D1D5DB' }}>
              Traction creates speed. Kinetic Acceleration is what happens when industry focus, persona-based engagement, and ecosystem co-sell align simultaneously — generating visible market momentum that compounds rather than fades.
            </p>
            <p className="text-sm font-semibold" style={{ color: '#0D9488' }}>
              Creates → Market Velocity
            </p>
          </div>
        </div>

        {/* Growth Equation */}
        <div className="p-10 md:p-14 text-center mb-16" style={{ backgroundColor: '#1A2744', border: '1px solid #2D3A5F' }}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Institutionalisation <span style={{ color: '#C9A84C' }}>×</span> Traction <span style={{ color: '#C9A84C' }}>×</span> Governance <span style={{ color: '#C9A84C' }}>=</span> <span style={{ color: '#C9A84C' }}>Predictable Scale</span>
          </p>
          <p className="text-sm italic" style={{ color: '#9CA3AF' }}>
            If any one of the three is zero, growth collapses.
          </p>
        </div>

        {/* Four Beliefs */}
        <div>
          <div className="text-xs tracking-[0.2em] uppercase font-bold mb-8" style={{ color: '#C9A84C' }}>
            Four Beliefs
          </div>
          <div className="space-y-4">
            {beliefs.map((belief, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-xs tracking-[0.2em] uppercase font-bold flex-shrink-0" style={{ color: '#C9A84C' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-base leading-relaxed text-white">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
