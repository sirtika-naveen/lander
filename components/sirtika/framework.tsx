'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const pillars = [
  {
    letter: 'S',
    number: '01',
    title: 'Institutionalising Revenue',
    outcome: 'Predictable Revenue Architecture',
    focus: [
      'Complete Sales Operating Model: process, approach framework, assets, governance, and people enablement plan',
      'ICP definition and industry vertical prioritisation',
      'Revenue stream clarity and sequencing',
      'Role-based sales structure with clear ownership across inside sales, field sales, and presales',
      'Pipeline coverage model and stage-gate discipline',
    ],
  },
  {
    letter: 'I',
    number: '02',
    title: 'Traction & Kinetic Acceleration',
    outcome: 'Market Velocity and Qualified Pipeline',
    focus: [
      'Industry-led GTM model — two to three verticals prioritised for depth of credibility',
      'Persona-based engagement: distinct entry points and messaging for CFO, CIO, COO, and CPO',
      'ICP targeting: 30 to 50 strategic accounts in structured, tracked pursuit',
      'SAP, Microsoft, or Oracle ecosystem co-sell activation and joint pipeline planning',
      'Executive meeting discipline and structured deal-shaping methodology',
    ],
  },
  {
    letter: 'R',
    number: '03',
    title: 'Talent & Capability Engine',
    outcome: 'A Team That Executes Without Founder Dependency',
    focus: [
      'Role clarity across all commercial roles — ownership boundaries defined',
      'Onboarding playbook so every new hire ramps in weeks, not months',
      'Incentive structure tied to pipeline quality and conversion, not revenue alone',
      'Coaching rhythm: weekly deal reviews, call debriefs, and structured skills development',
      'Capability assessment and enablement plan per individual role',
    ],
  },
  {
    letter: 'T',
    number: '04',
    title: 'Governance & Execution Rhythm',
    outcome: 'Disciplined Execution Cadence',
    focus: [
      'Weekly pipeline review cadence with stage-gate accountability and clear owner actions',
      'Deal heatmap to surface at-risk and stalled opportunities before they become losses',
      'CRM hygiene enforced as a leadership expectation, not a sales admin task',
      'Monthly forecast review and quarterly course correction',
      'KPI framework: pipeline quality, conversion, win rate, cycle time, and revenue trajectory',
    ],
  },
  {
    letter: 'I',
    number: '05',
    title: 'Sustainable Output & Scale',
    outcome: 'Compounding, Founder-Independent Revenue Growth',
    focus: [
      '25 to 35 percent revenue acceleration trajectory established and sustained',
      '8 to 12 percent win rate improvement year on year',
      '50 percent reduction in founder-dependent deal closures',
      '3 to 5 percent gross margin expansion through pricing discipline',
      'Expansion into one to two new strategic verticals within 12 to 24 months',
    ],
  },
];

export function Framework() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="framework" style={{ backgroundColor: '#F7F8FB' }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#C9A84C' }}>
          The SIRTIKA Framework
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#374151', maxWidth: '900px' }}>
          Five Pillars. One Engineered Growth System.
        </h2>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-16" style={{ color: '#6B7280', maxWidth: '700px' }}>
          Each pillar defines a structural dimension that every revenue growth engine must have. Each is built through the D-A-A-A program in a specific sequence. The program only reaches completion when all five are active and functioning together.
        </p>

        {/* Accordion for pillars */}
        <div className="space-y-2 mb-16">
          {pillars.map((pillar, i) => (
            <div key={i} className="border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
              <button
                className="w-full text-left flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#C9A84C' }}>
                    {pillar.letter}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#374151' }}>
                      {pillar.title}
                    </div>
                    {active === i && (
                      <div className="text-xs italic" style={{ color: '#6B7280' }}>
                        Outcome: {pillar.outcome}
                      </div>
                    )}
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${active === i ? 'rotate-180' : ''}`}
                  style={{ color: '#6B7280' }}
                />
              </button>

              {active === i && (
                <div className="px-6 pb-6" style={{ backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
                  <ul className="space-y-3">
                    {pillar.focus.map((f, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: '#6B7280' }}>
                        <span className="flex-shrink-0" style={{ color: '#C9A84C' }}>•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Connector callout */}
        <div className="p-8 text-center" style={{ backgroundColor: '#1A2744', borderLeft: '4px solid #C9A84C' }}>
          <p className="text-base italic text-white mb-2">
            Each pillar is built through D-A-A-A in sequence. Diagnose surfaces the gap. Architect builds the foundation. Activate ignites traction. Accelerate compounds the results.
          </p>
          <a href="#program" className="text-sm font-semibold" style={{ color: '#0D9488', textDecoration: 'underline' }}>
            → See How the Program Works
          </a>
        </div>
      </div>
    </section>
  );
}
