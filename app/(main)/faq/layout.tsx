import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { ALL_FAQ } from '@/lib/faq';
import { FAQ_PAGE, breadcrumbJsonLd, faqJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(FAQ_PAGE);

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(FAQ_PAGE), faqJsonLd(ALL_FAQ.flatMap((g) => g.items))]} />
      {children}
    </>
  );
}
