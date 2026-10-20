import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { MARKETING, breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(MARKETING);

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(MARKETING), breadcrumbJsonLd(MARKETING)]} />
      {children}
    </>
  );
}
