export function Ecosystem() {
  const systems = [
    {
      number: '01',
      title: 'SIRTIKA Framework',
      color: '#C9A84C',
      body: 'The intellectual backbone of the entire program. Five structural pillars define what a complete revenue growth engine looks like — and where the gaps are when it is not working. The framework gives every engagement its intellectual architecture and vocabulary.',
      role: 'Growth Architecture Model',
    },
    {
      number: '02',
      title: 'AI Diagnostic Platform',
      color: '#0D9488',
      body: 'The entry point of every engagement. The AI Platform assesses growth architecture maturity across all five pillars simultaneously, produces the SIRTIKA Pillar Gap Report, and powers the Diagnose stage of the D-A-A-A program. Also available as a standalone SaaS diagnostic.',
      role: 'Powers the Diagnose Stage of D-A-A-A · Launching Q3 2026',
    },
    {
      number: '03',
      title: 'Transformation Advisory',
      color: '#7C3AED',
      body: 'The hands-on delivery engine. The Advisory executes the remaining three stages of D-A-A-A — Architect, Activate, and Accelerate — working directly with the organisation\'s leadership to build, ignite, and compound the revenue engine.',
      role: 'Delivers Architect, Activate, and Accelerate',
    },
  ];

  return (
    <section style={{ backgroundColor: '#F7F8FB' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          The SIRTIKA Ecosystem
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          Three Systems. One Revenue Growth Engine.
        </h2>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-16" style={{ color: '#6B7280', maxWidth: '700px' }}>
          SIRTIKA™ delivers through three integrated systems. Each has a distinct role. Together they form one end-to-end program — from diagnosis to compounding scale.
        </p>

        {/* Three system cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {systems.map((system) => (
            <div key={system.number} className="bg-white p-8 md:p-10 shadow-sm" style={{ borderTop: `5px solid ${system.color}` }}>
              {/* Badge */}
              <div className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: system.color }}>
                {system.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4" style={{ color: system.color }}>
                {system.title}
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                {system.body}
              </p>

              {/* Role tag */}
              <p className="text-xs italic" style={{ color: '#6B7280' }}>
                {system.role}
              </p>
            </div>
          ))}
        </div>

        {/* Connector equation */}
        <div className="p-10 text-center mb-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
          <p className="text-lg font-bold" style={{ color: '#374151' }}>
            Framework <span style={{ color: '#C9A84C' }}>+</span> AI Intelligence <span style={{ color: '#C9A84C' }}>+</span> Advisory <span style={{ color: '#C9A84C' }}>=</span> <span style={{ color: '#C9A84C' }}>Predictable Growth Engine</span>
          </p>
        </div>

        {/* Callout line */}
        <p className="text-center text-sm italic" style={{ color: '#6B7280' }}>
          The AI Platform owns the D. The Transformation Advisory owns the three A's. Together, they deliver the complete D-A-A-A program.
        </p>
      </div>
    </section>
  );
}
