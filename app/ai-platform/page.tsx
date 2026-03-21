import { Nav } from '@/components/sirtika/nav';
import { Footer } from '@/components/sirtika/footer';
import { AIReasons } from '@/components/sirtika/ai/reasons';
import { AIDimensions } from '@/components/sirtika/ai/dimensions';
import { AIOutcomes } from '@/components/sirtika/ai/outcomes';
import { AIFits } from '@/components/sirtika/ai/fits';
import { AIAudience } from '@/components/sirtika/ai/audience';
import { AIHero } from '@/components/sirtika/ai/hero';
import { AICallout } from '@/components/sirtika/ai/callout';

export const metadata = {
  title: 'SIRTIKA™ AI Diagnostic Platform — Growth Architecture Assessment',
  description: 'Evaluate your organisation\'s revenue architecture maturity and identify structural gaps with the SIRTIKA AI Diagnostic Platform.',
};

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white text-foreground font-sans antialiased">
      <Nav />
      <AIHero />
      <AIReasons />
      <AIDimensions />
      <AIOutcomes />
      <AIFits />
      <AIAudience />
      <AICallout />
      <Footer />
    </main>
  );
}
