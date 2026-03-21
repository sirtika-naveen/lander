export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold tracking-widest text-foreground uppercase">SIRTIKA&#8482;</span>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs text-muted-foreground">Growth Architecture Framework</span>
          </div>
          <div className="flex items-center gap-6">
            {["Philosophy", "Framework", "AI Platform", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            Framework by Naveenn Suri &copy; {new Date().getFullYear()}. SIRTIKA&#8482; is a trademark.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:Naveen16@gmail.com"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Naveen16@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/naveenn-suri-2455628"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
