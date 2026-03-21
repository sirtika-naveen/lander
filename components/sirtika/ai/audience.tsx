export function AIAudience() {
  const users = [
    'Technology consulting firms',
    'Enterprise SaaS companies',
    'ERP and platform partners',
    'Digital transformation providers',
    'Founder-led technology businesses',
  ];

  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          Who This Is For
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          The platform is designed for technology companies that are preparing to scale.
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed mb-12" style={{ color: '#6B7280', maxWidth: '700px' }}>
          Typical users include organisations across multiple sectors where growth is real but still feels harder than it should.
        </p>

        {/* Users grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border-b-4"
              style={{ borderBottomColor: '#C9A84C' }}
            >
              <p className="text-base font-semibold text-center" style={{ color: '#374151' }}>
                {user}
              </p>
            </div>
          ))}
        </div>

        {/* Closing insight */}
        <div className="p-8 md:p-10 bg-white border-l-4" style={{ borderLeftColor: '#7C3AED' }}>
          <p className="text-lg font-semibold mb-2" style={{ color: '#374151' }}>
            Especially organisations where growth is real but still feels harder than it should.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            If your team has strong product-market fit but struggles with consistent revenue growth and scaling beyond founder-driven sales, this platform is for you.
          </p>
        </div>
      </div>
    </section>
  );
}
