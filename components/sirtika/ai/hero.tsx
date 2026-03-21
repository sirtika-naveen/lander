export function AIHero() {
  return (
    <section style={{ backgroundColor: '#0F172A' }}>
      {/* Gold accent bar */}
      <div style={{ height: '8px', backgroundColor: '#C9A84C' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ maxWidth: '900px' }}>
          SIRTIKA™ AI Diagnostic Platform
        </h1>

        {/* Subheadline - italic */}
        <p className="text-lg md:text-xl italic mb-8" style={{ color: '#D1D5DB', maxWidth: '800px' }}>
          Understand Your Structural Growth Gaps Before You Build
        </p>

        {/* Body copy */}
        <p className="text-base leading-relaxed mb-10" style={{ color: '#D1D5DB', maxWidth: '700px' }}>
          The SIRTIKA AI Diagnostic Platform is a growth intelligence tool designed to evaluate how strong your organisation's revenue architecture really is.
        </p>

        {/* Key insight */}
        <div className="bg-white/10 border border-white/20 p-6 md:p-8 mb-12" style={{ maxWidth: '700px' }}>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
            Many technology companies try to improve growth by increasing activity — more outreach, more proposals, more sales hires.
          </p>
          <p className="text-base font-semibold" style={{ color: '#C9A84C' }}>
            But in many cases the real problem is structural.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#diagnostic"
          className="inline-block px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90"
          style={{
            backgroundColor: '#C9A84C',
            color: '#1A2744',
          }}
        >
          Take the Diagnostic
        </a>
      </div>
    </section>
  );
}
