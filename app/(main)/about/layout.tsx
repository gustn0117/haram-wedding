import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { ABOUT, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(ABOUT);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(ABOUT)]} />
      {children}
    </>
  );
}
