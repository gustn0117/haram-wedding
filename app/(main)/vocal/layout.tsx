import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { VOCAL, breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { VOCAL_FAQ } from '@/lib/faq';

export const metadata: Metadata = pageMetadata(VOCAL);

export default function VocalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(VOCAL), breadcrumbJsonLd(VOCAL), faqJsonLd(VOCAL_FAQ)]} />
      {children}
    </>
  );
}
