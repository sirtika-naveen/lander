import { Nav } from "@/components/sirtika/nav"
import { PrivacyPolicyHero } from "@/components/sirtika/privacy-policy/hero"
import { Policies } from "@/components/sirtika/privacy-policy/policies"
export default function privacyPolicy(){
    return(
<main className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <PrivacyPolicyHero />
      <Policies/>
</main>
)
}