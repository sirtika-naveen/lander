const points = [
  "Institutionalise revenue",
  "Accelerate traction",
  "Install governance discipline",
  "Build scalable growth engines",
]

export function CTA() {
  return (
    <section id="cta" className="py-28 md:py-36 border-t border-border bg-card relative overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--gold)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
            Begin Here
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
          SIRTIKA&#8482; installs the architecture that makes{" "}
          <span className="text-primary">growth inevitable.</span>
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-lg mx-auto">
          SIRTIKA&#8482; helps organisations move from effort-driven growth to engineered, predictable revenue systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-background px-5 py-5 flex flex-col items-center gap-3 text-center"
            >
              <div className="w-6 h-6 flex items-center justify-center border border-primary" style={{ background: "oklch(0.60 0.145 58 / 0.08)" }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                  <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary" />
                </svg>
              </div>
              <span className="text-xs text-muted-foreground leading-snug">{p}</span>
            </div>
          ))}
        </div>

        <a
          href="mailto:n.suri@sirtika.com"
          className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 mb-10"
        >
          Book Strategy Conversation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border">
          <a
            href="mailto:n.suri@sirtika.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M1 4L7 8.5L13 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            n.suri@sirtika.com
          </a>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <a
            href="https://www.linkedin.com/in/naveenn-suri-2455628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 6v4M4 4.5v.01M7 10V8c0-1.1.9-2 2-2s2 .9 2 2v2M7 6v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            LinkedIn — Naveenn Suri
          </a>
        </div>
      </div>
    </section>
  )
}
