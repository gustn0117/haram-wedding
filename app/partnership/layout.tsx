import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { PARTNERSHIP, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(PARTNERSHIP);

export default function PartnershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(PARTNERSHIP)]} />
      {children}
    </>
  );
}
