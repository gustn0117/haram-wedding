import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CAREERS, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(CAREERS);

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(CAREERS)]} />
      {children}
    </>
  );
}
