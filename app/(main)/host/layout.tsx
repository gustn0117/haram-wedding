import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { HOST, breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { HOST_FAQ } from '@/lib/faq';

export const metadata: Metadata = pageMetadata(HOST);

export default function HostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(HOST), breadcrumbJsonLd(HOST), faqJsonLd(HOST_FAQ)]} />
      {children}
    </>
  );
}
