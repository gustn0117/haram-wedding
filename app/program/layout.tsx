import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { PROGRAM, breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(PROGRAM);

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(PROGRAM), breadcrumbJsonLd(PROGRAM)]} />
      {children}
    </>
  );
}
