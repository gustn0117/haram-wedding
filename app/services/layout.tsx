import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SERVICES_INDEX, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(SERVICES_INDEX);

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(SERVICES_INDEX)]} />
      {children}
    </>
  );
}
