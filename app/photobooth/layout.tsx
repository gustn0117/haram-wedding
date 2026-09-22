import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { PHOTOBOOTH_FAQ } from '@/lib/faq';
import { PHOTOBOOTH, breadcrumbJsonLd, pageMetadata, faqJsonLd, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(PHOTOBOOTH);

export default function PhotoboothLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(PHOTOBOOTH), breadcrumbJsonLd(PHOTOBOOTH), faqJsonLd(PHOTOBOOTH_FAQ)]} />
      {children}
    </>
  );
}
