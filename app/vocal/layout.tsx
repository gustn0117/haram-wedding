import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { VOCAL, breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(VOCAL);

export default function VocalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(VOCAL), breadcrumbJsonLd(VOCAL)]} />
      {children}
    </>
  );
}
