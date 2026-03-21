import { Nav } from "@/components/sirtika/nav"
import { Hero } from "@/components/sirtika/hero"
import { Problem } from "@/components/sirtika/problem"
import { Philosophy } from "@/components/sirtika/philosophy"
import { Ecosystem } from "@/components/sirtika/ecosystem"
import { Framework } from "@/components/sirtika/framework"
import { DAAA } from "@/components/sirtika/daaa"
import { Outcomes } from "@/components/sirtika/outcomes"
import { About } from "@/components/sirtika/about"
import { CTA } from "@/components/sirtika/cta"
import { Footer } from "@/components/sirtika/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />
      <Problem />
      <Philosophy />
      <Ecosystem />
      <Framework />
      <DAAA />
      <Outcomes />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
