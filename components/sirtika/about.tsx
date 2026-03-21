const credentials = [
  "25+ years of technology consulting leadership",
  "Built and scaled enterprise consulting practices",
  "Worked with founders, CXOs and leadership teams across digital transformation",
  "Advised enterprise clients on complex transformation programs",
  "Creator of the SIRTIKA&#8482; Growth Architecture Framework",
  "Developing the SIRTIKA&#8482; AI Diagnostic Platform (SaaS)",
]

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
            The Architect
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left — visual card */}
          <div className="relative lg:col-span-1">
            <div
              className="border border-border p-12 flex flex-col items-center justify-center text-center gap-6"
              style={{ background: "var(--card)" }}
            >
              <div
                className="w-24 h-24 flex items-center justify-center border border-primary text-3xl font-bold text-primary"
                style={{ background: "oklch(0.60 0.145 58 / 0.08)" }}
              >
                NS
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">Naveenn Suri</div>
                <div className="text-sm text-primary tracking-widest uppercase">
                  Creator, SIRTIKA&#8482; Framework
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/60" aria-hidden />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-primary/60" aria-hidden />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary/60" aria-hidden />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/60" aria-hidden />
            </div>
          </div>

          {/* Right — bio + credentials */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Enterprise Authority.{" "}
                <span className="text-primary">Architecture Thinking.</span>
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Naveenn Suri is a technology consulting leader with more than twenty-five years
                  of experience working with enterprise organisations and technology companies
                  across digital transformation, enterprise platforms, and growth strategy.
                </p>
                <p>
                  Throughout his career he has worked closely with founders, CXOs, and leadership
                  teams to help organisations scale their capabilities, strengthen their market
                  positioning, and build sustainable growth engines. He has led and built
                  consulting practices, advised enterprise clients on complex transformation
                  programs, and worked across multiple stages of organisational growth.
                </p>
                <p>
                  This experience exposed a recurring challenge inside many technology firms.
                  Growth often depends heavily on founder energy, a few strong salespeople, or
                  occasional large deals. When those factors shift, revenue momentum slows down.
                  Organisations begin chasing opportunities instead of building a structured
                  growth engine.
                </p>
                <p>
                  The <span className="text-foreground font-semibold">SIRTIKA&#8482; Growth Architecture</span> was
                  developed to address this structural challenge — providing a framework for
                  organisations to institutionalise revenue, create traction with kinetic
                  acceleration, and build predictable growth systems supported by governance,
                  talent capability, and disciplined execution.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0 border border-border">
              <div className="px-6 py-3 border-b border-border bg-muted">
                <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Key Experience</span>
              </div>
              {credentials.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 px-6 py-4 border-b border-border last:border-b-0 hover:bg-card transition-colors duration-200"
                  dangerouslySetInnerHTML={undefined}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors tracking-wide font-semibold uppercase self-start"
            >
              <span className="text-xs tracking-[0.25em]">Start a Conversation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
