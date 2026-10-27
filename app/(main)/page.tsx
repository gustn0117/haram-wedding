import JsonLd from '@/components/JsonLd';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import HomeContent from '@/components/home/HomeContent';
import { HOME_FAQ } from '@/lib/faq';
import { faqJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <main>
      <JsonLd data={faqJsonLd(HOME_FAQ)} />
      <Hero />
      <IntroSection />
      <HomeContent />
    </main>
  );
}
