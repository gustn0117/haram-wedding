import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { PROGRAM, breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROGRAM_FAQ } from '@/lib/faq';

export const metadata: Metadata = pageMetadata(PROGRAM);

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(PROGRAM), breadcrumbJsonLd(PROGRAM), faqJsonLd(PROGRAM_FAQ)]} />
      {children}
    </>
  );
}
