import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CONCIERGE_FAQ } from '@/lib/faq';
import { CONCIERGE, breadcrumbJsonLd, pageMetadata, faqJsonLd, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(CONCIERGE);

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(CONCIERGE), breadcrumbJsonLd(CONCIERGE), faqJsonLd(CONCIERGE_FAQ)]} />
      {children}
    </>
  );
}
