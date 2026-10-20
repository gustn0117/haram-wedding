import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SERVICES_INDEX, breadcrumbJsonLd, faqJsonLd, pageMetadata } from '@/lib/seo';
import { SERVICES_FAQ } from '@/lib/faq';

export const metadata: Metadata = pageMetadata(SERVICES_INDEX);

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(SERVICES_INDEX), faqJsonLd(SERVICES_FAQ)]} />
      {children}
    </>
  );
}
