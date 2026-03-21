'use client';

export function Hero() {
  const letters = [
    { letter: 'S', color: '#C9A84C' },
    { letter: 'I', color: '#0D9488' },
    { letter: 'R', color: '#7C3AED' },
    { letter: 'T', color: '#0EA5E9' },
    { letter: 'I', color: '#10B981' },
    { letter: 'K', color: '#C9A84C' },
    { letter: 'A', color: '#0D9488' },
  ];

  return (
    <section style={{ backgroundColor: '#0F172A' }}>
      {/* Gold accent bar */}
      <div style={{ height: '8px', backgroundColor: '#C9A84C' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-8" style={{ color: '#C9A84C' }}>
          Growth Architecture Framework
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ maxWidth: '900px' }}>
          SIRTIKA™ — A Revenue Growth Architecture by Naveenn Suri
        </h1>

        {/* Subheadline - italic */}
        <p className="text-lg md:text-xl italic mb-6" style={{ color: '#D1D5DB', maxWidth: '800px' }}>
          SIRTIKA™ converts founder-driven growth into a structured, engineered revenue system. One integrated 12-month program. Five pillars. Four stages. Measurable at every milestone.
        </p>

        {/* Body copy */}
        <p className="text-base leading-relaxed mb-10" style={{ color: '#D1D5DB', maxWidth: '700px' }}>
          SIRTIKA™ converts founder-driven growth into a structured, engineered revenue system. One integrated 12-month program. Five pillars. Four stages. Measurable at every milestone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#program"
            className="px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all inline-block hover:opacity-90"
            style={{
              backgroundColor: '#C9A84C',
              color: '#1A2744',
            }}
          >
            Explore the Program
          </a>
          <a
            href="#cta"
            className="px-8 py-3 font-semibold text-sm tracking-widest uppercase border transition-all inline-block hover:bg-white/10"
            style={{
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
            }}
          >
            Book Strategy Call
          </a>
        </div>

        {/* Letter badges row */}
        <div className="flex gap-3 items-center flex-wrap">
          {letters.map((item, idx) => (
            <a
              key={idx}
              href="#framework"
              className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg transition-transform hover:scale-110"
              style={{ backgroundColor: item.color }}
              title={`Letter ${item.letter}`}
            >
              {item.letter}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
