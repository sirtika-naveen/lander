export function AICallout() {
  return (
    <section style={{ backgroundColor: '#0F172A' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
          Diagnose the architecture before redesigning the engine.
        </h2>

        {/* Subheading */}
        <p className="text-xl italic mb-10" style={{ color: '#D1D5DB', maxWidth: '700px', margin: '0 auto' }}>
          If growth feels heavy, the problem is often structural.
        </p>

        {/* Description */}
        <p className="text-base leading-relaxed mb-12" style={{ color: '#D1D5DB', maxWidth: '700px', margin: '0 auto' }}>
          The SIRTIKA AI Diagnostic Platform helps organisations understand their current growth architecture and identify the changes required to scale.
        </p>

        {/* CTA Button */}
        <a
          href="#diagnostic"
          className="inline-block px-10 py-4 font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90"
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
