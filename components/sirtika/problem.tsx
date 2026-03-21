export function Problem() {
  const problems = [
    {
      title: 'Founder-Dependent Growth',
      body: 'Every major deal flows through the founder. Revenue lives in relationships rather than systems. When the founder steps back, pipeline collapses. Growth cannot scale beyond one person\'s bandwidth.',
      color: '#1A2744',
    },
    {
      title: 'No Industry Focus or Persona Discipline',
      body: 'Sales teams chase every opportunity across every sector. No vertical prioritisation. No Ideal Customer Profile. No persona-specific messaging. Without industry focus, every outreach is a guess and win rates suffer consistently.',
      color: '#0D9488',
    },
    {
      title: 'Pipeline Without Coverage Discipline',
      body: 'Activity exists. Qualified, staged pipeline does not. Without a coverage model and stage-gate criteria, forecasting is hope rather than architecture. Deals appear and disappear with no structural explanation.',
      color: '#7C3AED',
    },
    {
      title: 'Sales Assets That Do Not Drive Value',
      body: 'Sales teams pitch features instead of outcomes. Proposals look like statements of work. No ROI framework, no business case tool, no persona-mapped messaging. Without value-driven assets, deals stall before they reach CXO-level approval.',
      color: '#E05A1A',
    },
    {
      title: 'Weak ROI and Value Articulation',
      body: 'The firm cannot quantify the business case it is making. Buyers do not see a clear return, so they delay, discount, or walk. The gap between a proposal that loses on price and one that wins on value is almost always a business case problem — not a delivery problem.',
      color: '#0EA5E9',
    },
    {
      title: 'No Governance Rhythm',
      body: 'No forecast discipline. No stage-gate accountability. No structured review cadence. Pipeline meetings happen but change nothing. That is activity — not governance. Without rhythm, growth cannot compound.',
      color: '#10B981',
    },
  ];

  return (
    <section id="problem" style={{ backgroundColor: '#F7F8FB' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          The Problem
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          Six Reasons Technology Firms Fail to Scale Revenue
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed mb-16" style={{ color: '#6B7280', maxWidth: '700px' }}>
          Most organisations do not have a motivation problem. They have a structural one. The six gaps below are not symptoms of poor effort — they are symptoms of a missing architecture.
        </p>

        {/* Six cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border-l-4 transition-transform hover:scale-105"
              style={{ borderLeftColor: problem.color }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: problem.color }}>
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {problem.body}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width callout bar */}
        <div className="p-8 md:p-12 text-center" style={{ backgroundColor: '#1A2744' }}>
          <p className="text-lg md:text-xl italic" style={{ color: '#C9A84C' }}>
            If growth feels heavy, it is probably structural. The answer is not to work harder — it is to build the right architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
