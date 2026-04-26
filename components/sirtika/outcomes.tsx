const outcomes = [
  { label: "Sales operation model for sustainable growth" },
  { label: "Predictable enterprise pipeline" },
  { label: "Improved win ratios" },
  { label: "Scalable sales capability" },
  { label: "Reduced founder dependency" },
  { label: "Disciplined growth governance" },
]

const targets = [
  { label: "SAP Implementation Partners" },
  { label: "B2B SaaS Companies" },
  { label: "Technology Consulting Firms" },
  { label: "Microsoft / Oracle Partners" },
  { label: "IT Services Organisations" },
]

export function Outcomes() {
  return (
    <section className="py-28 md:py-36 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Outcomes */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Outcomes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              What Organisations{" "}
              <span className="text-primary">Achieve</span>
            </h2>
            <div className="flex flex-col gap-0 border border-border">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 px-6 py-5 border-b border-border last:border-b-0 hover:bg-background transition-colors duration-200 group"
                >
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-primary" style={{ background: "oklch(0.60 0.145 58 / 0.08)" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground font-medium">{item.label}</span>
                  <div className="ml-auto h-px w-0 bg-primary group-hover:w-6 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Who this is for */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Who This Is For
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              Built for{" "}
              <span className="text-primary">Technology Leaders</span>
            </h2>
            <div className="flex flex-col gap-3 mb-8">
              {targets.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 px-6 py-4 border border-border hover:border-primary transition-colors duration-200 group"
                >
                  <span className="text-xs tracking-widest text-primary font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <div
              className="p-6 border border-primary/40 text-sm text-muted-foreground leading-relaxed italic"
              style={{ background: "oklch(0.60 0.145 58 / 0.05)" }}
            >
              Especially organisations with{" "}
              <span className="text-foreground font-semibold not-italic">strong delivery</span>{" "}
              but{" "}
              <span className="text-primary font-semibold not-italic">inconsistent revenue architecture</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
