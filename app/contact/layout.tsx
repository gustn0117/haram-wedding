import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CONTACT, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(CONTACT);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(CONTACT)]} />
      {children}
    </>
  );
}
