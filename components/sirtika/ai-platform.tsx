const layers = [
  {
    label: "Report Engine",
    items: ["Executive dashboard", "Transformation report", "Consultant analysis"],
    tier: 1,
  },
  {
    label: "Intelligence Layer",
    items: ["Scoring engine", "Growth maturity classification", "SWOT insight engine", "Recommendation engine"],
    tier: 2,
  },
  {
    label: "Assessment Engine",
    items: ["Smart diagnostic engine", "Conditional question logic", "Dynamic question selection"],
    tier: 3,
  },
  {
    label: "UI Layer",
    items: ["Login", "Company setup", "Assessment dashboard", "Diagnostic questionnaire", "Results dashboard"],
    tier: 4,
  },
  {
    label: "Admin Layer",
    items: ["Question bank management", "Scoring rule management", "Recommendation mapping", "Report template management", "Industry classification"],
    tier: 5,
  },
]

const journey = [
  "Client registers",
  "Company profile setup",
  "Smart diagnostic launches",
  "Questions answered",
  "Growth maturity score calculated",
  "SWOT insights generated",
  "Transformation roadmap produced",
  "Optional advisory engagement",
]

export function AIPlatform() {
  return (
    <section id="ai-platform" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
            AI Diagnostic Platform
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              SIRTIKA&#8482; AI{" "}
              <span className="text-primary">Diagnostic</span>{" "}
              Platform
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              A SaaS product designed to evaluate the maturity of an organisation&apos;s growth
              architecture. The platform diagnoses structural gaps and generates a
              transformation roadmap.
            </p>

            {/* Status banner */}
            <div className="flex items-center gap-4 px-5 py-4 border border-primary mb-8"
              style={{ background: "oklch(0.60 0.145 58 / 0.07)" }}>
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
              <div>
                <span className="text-xs tracking-[0.25em] uppercase font-bold text-primary">Early Access</span>
                <span className="text-xs text-muted-foreground mx-2">—</span>
                <span className="text-xs text-foreground">Q3 2026 &bull; Limited seats available</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-primary/30" style={{ background: "oklch(0.60 0.145 58 / 0.05)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">
                Evaluates growth architecture maturity across five structural dimensions,
                producing an actionable transformation roadmap for each organisation.
              </p>
            </div>
          </div>

          {/* Client Journey */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-6">
              Client Journey
            </div>
            <div className="flex flex-col">
              {journey.map((step, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-7 h-7 flex items-center justify-center text-xs font-bold border border-primary text-primary"
                      style={{ background: "oklch(0.60 0.145 58 / 0.08)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < journey.length - 1 && (
                      <div className="w-px h-6 bg-border" />
                    )}
                  </div>
                  <div className="pb-1 flex-1">
                    <p
                      className="text-sm text-foreground py-1.5 px-3 border-l-2 mb-0"
                      style={{
                        borderColor: i === journey.length - 1 ? "var(--gold)" : "var(--border)",
                        background: i === journey.length - 1 ? "oklch(0.60 0.145 58 / 0.07)" : "transparent",
                      }}
                    >
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture diagram */}
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-8 text-center">
            Platform Architecture
          </div>
          <div className="flex flex-col gap-0 border border-border overflow-hidden">
            {layers.map((layer, i) => (
              <div key={i} className="flex flex-col md:flex-row items-stretch gap-0 border-b border-border last:border-b-0">
                {/* Label */}
                <div
                  className="md:w-52 flex-shrink-0 p-4 flex items-center gap-3 border-b md:border-b-0 md:border-r border-border"
                  style={{ background: i % 2 === 0 ? "var(--card)" : "var(--muted)" }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0 border border-primary text-primary"
                      style={{ background: "oklch(0.60 0.145 58 / 0.08)" }}
                  >
                    L{layer.tier}
                  </div>
                  <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
                    {layer.label}
                  </span>
                </div>
                {/* Items */}
                <div className="flex flex-wrap gap-2 p-4 items-center bg-background">
                  {layer.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-xs text-muted-foreground px-3 py-1.5 border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
