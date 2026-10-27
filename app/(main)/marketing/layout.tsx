import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { MARKETING, breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { MARKETING_FAQ } from '@/lib/faq';

export const metadata: Metadata = pageMetadata(MARKETING);

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(MARKETING), breadcrumbJsonLd(MARKETING), faqJsonLd(MARKETING_FAQ)]} />
      {children}
    </>
  );
}
