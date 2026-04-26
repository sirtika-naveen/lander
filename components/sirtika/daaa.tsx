'use client';

export function DAAA() {
  const stages = [
    {
      stage: 'DIAGNOSE',
      month: 'Month 1',
      color: '#C9A84C',
      powered: 'Powered by the SIRTIKA™ AI Diagnostic Platform',
      description: 'Every engagement begins with a precise diagnosis. The SIRTIKA AI Diagnostic Platform conducts a structured, pillar-by-pillar maturity assessment of the organisation\'s current growth architecture. This is not a general business review — it is a scored evaluation across all five dimensions simultaneously, surfacing exactly what exists, what is missing, and what is structurally broken. The output is the SIRTIKA Pillar Gap Report: a prioritised baseline and transformation roadmap that defines the full engagement. Nothing proceeds to the Architect stage until the report is complete.',
      deliverables: [
        'Growth architecture maturity scored across all five pillars',
        'Founder dependency level quantified',
        'Industry focus, ICP clarity, and pipeline discipline assessed',
        'Sales asset quality and ROI articulation evaluated',
        'SIRTIKA Pillar Gap Report produced — transformation roadmap defined',
      ],
    },
    {
      stage: 'ARCHITECT',
      month: 'Months 2–3',
      color: '#0D9488',
      powered: 'Foundation Setup',
      description: 'Architecture comes before activation. The Architect stage builds the three foundational pillars — Institutionalising Revenue, Talent & Capability Engine, and Governance & Execution Rhythm. This is the foundation that must be in place before any go-to-market activity begins. This is the work most organisations skip. They go to market with a weak operating model, the wrong team structure, and no governance framework. When results disappoint, they conclude the market is difficult. In almost every case, the market is not the problem. The foundation is.',
      deliverables: [
        'Complete Sales Operating Model: process, approach framework, assets, governance system, people enablement plan',
        'Team structure with clear role definitions and incentive alignment',
        'ICP and industry verticals finalised — two to three verticals selected',
        'Persona-specific messaging and value propositions developed per vertical',
        'Governance framework installed: KPI architecture, review cadences, stage-gate criteria',
        'Ecosystem co-sell roadmap designed: SAP, Microsoft, or Oracle partner alignment',
        'Sales asset library completed: industry decks, ROI calculators, proposal templates, battle cards',
      ],
    },
    {
      stage: 'ACTIVATE',
      month: 'Months 4–6',
      color: '#0EA5E9',
      powered: '30-60-90 Execution Sprint',
      description: 'The foundation is built. Now you run the system. Activate is a structured 30-60-90 day execution sprint — the point at which Traction and Kinetic Acceleration comes fully to life. Every milestone is defined, measured, and tracked. This is not a soft launch. It is a controlled ignition. The goal is velocity: visible market momentum, executive engagement, and the start of a compounding pipeline.',
      deliverables: [
        'Industry-led GTM and persona messaging live across all channels',
        '30-60-90 execution plan with weekly milestones',
        'Strategic account list (30-50 targets) in active pursuit',
        'Executive meeting cadence established and executing',
        'SAP/Microsoft/Oracle co-sell pilots launched',
        'Early pipeline signals emerging: qualified opportunities, deal shaping in motion',
      ],
    },
    {
      stage: 'ACCELERATE',
      month: 'Months 7–12',
      color: '#10B981',
      powered: 'Compounding Scale',
      description: 'Traction compounds when the entire system is running. Accelerate is where all five pillars function together — institutionalised operating model, disciplined team execution, governed pipeline rhythm, and sustainable founder-independent revenue generation. This is the stage where the business transforms from founder-dependent to architecturally sound, from activity-based growth to engineered growth. Results compound because the system is built to compound.',
      deliverables: [
        '20%+ revenue growth trajectory established and sustained',
        'Founder dependency reduced by 50%+',
        'Pipeline quality and coverage discipline embedded in daily execution',
        'Win rate improvement sustained across quarters',
        'Governance rhythm enforced: weekly pipeline, monthly forecast, quarterly strategy reviews',
        'Expansion into one to two new strategic verticals underway',
        'System fully operationalised and founder-independent',
      ],
    },
  ];

  return (
    <section id="program" style={{ backgroundColor: '#0F172A' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          The SIRTIKA Program
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8" style={{ maxWidth: '900px' }}>
          The D-A-A-A Journey
        </h2>
        <h3 className="text-lg md:text-2xl lg:text-xl font-bold text-white mb-8">
          AI system will be launched by Q3 2026 till than we will use another method to diagnose and
          build a report
        </h3>

        {/* Stage flow bar */}
        <div className="text-lg font-bold text-white letter-spacing-wide mb-16 flex flex-wrap gap-4">
          <span style={{ color: '#C9A84C' }}>DIAGNOSE</span>
          <span style={{ color: '#FFFFFF' }}>→</span>
          <span style={{ color: '#0D9488' }}>ARCHITECT</span>
          <span style={{ color: '#FFFFFF' }}>→</span>
          <span style={{ color: '#0EA5E9' }}>ACTIVATE</span>
          <span style={{ color: '#FFFFFF' }}>→</span>
          <span style={{ color: '#10B981' }}>ACCELERATE</span>
        </div>

        {/* Program overview paragraphs */}
        <div className="space-y-6 mb-16" style={{ color: '#D1D5DB', maxWidth: '800px' }}>
          <p className="text-base leading-relaxed">
            The five pillars define what a complete revenue growth engine looks like. The D-A-A-A program is how you build it — stage by stage, in the right sequence, with measurable outputs at every milestone.
          </p>
          <p className="text-base leading-relaxed">
            D-A-A-A is not a standalone methodology. It is the delivery structure embedded across Systems 2 and 3: the AI Diagnostic Platform powers the Diagnose stage, and the Transformation Advisory delivers Architect, Activate, and Accelerate. Together, the two systems execute the complete 12-month program.
          </p>
          <p className="text-base leading-relaxed">
            The sequence is non-negotiable. Most growth initiatives fail not from lack of effort but from lack of sequence — activating before the foundation is built, accelerating before governance is installed. D-A-A-A makes the right sequence the structure of the engagement itself.
          </p>
        </div>

        {/* Four stage blocks */}
        <div className="space-y-12">
          {stages.map((stage, idx) => (
            <div key={idx} className="border border-gray-700 p-8 md:p-10" style={{ borderLeft: `5px solid ${stage.color}` }}>
              {/* Stage header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: stage.color }}>
                  Stage {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="text-lg font-bold text-white">{stage.stage}</div>
                <div className="text-xs text-gray-400">{stage.month}</div>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed mb-8" style={{ color: '#D1D5DB' }}>
                {stage.description}
              </p>

              {/* Deliverables */}
              <div>
                <div className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: stage.color }}>
                  Stage Deliverables
                </div>
                <ul className="space-y-2">
                  {stage.deliverables.map((d, i) => (
                    <li key={i} className="text-sm flex gap-3" style={{ color: '#D1D5DB' }}>
                      <span className="flex-shrink-0" style={{ color: stage.color }}>•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
