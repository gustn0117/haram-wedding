import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { HOST, breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(HOST);

export default function HostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(HOST), breadcrumbJsonLd(HOST)]} />
      {children}
    </>
  );
}
