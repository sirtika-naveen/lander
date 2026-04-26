export function PrivacyPolicyHero() {
  return (
    <section style={{ backgroundColor: '#0F172A' }}>
      <div style={{ height: '8px', backgroundColor: '#C9A84C' }} />
      <div className="text-center max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Headline */}
        <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
         Privacy Policy
        </h1>

        {/* Subheadline - italic */}
        <p className="text-md  md:text-xl lg:text-3xl font-medium text-white leading-tight mb-6">
        Effective Date: 30/03/2026
        </p>
        <p className="text-md  md:text-xl lg:text-3xl font-medium text-white leading-tight mb-6">
        Last Updated: 30/03/2026
        </p>

        {/* Key insight */}
        <div className="bg-white/10 border border-white/20 p-6 md:p-8 mb-12">
          <p className="text-md  md:text-xl lg:text-4xl text-white leading-relaxed mb-4">
          Website: www.sirtika.com
          </p>
          <p className="text-base font-semibold" style={{ color: '#C9A84C' }}>
          </p>
        </div>
      </div>
    </section>
  );
}
