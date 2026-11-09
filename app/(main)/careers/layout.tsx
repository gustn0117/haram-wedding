import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CAREERS, breadcrumbJsonLd, jobPostingJsonLd, pageMetadata } from '@/lib/seo';
import { ROLE_POSTINGS } from '@/lib/roles';

export const metadata: Metadata = pageMetadata(CAREERS);

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(CAREERS), ...ROLE_POSTINGS.map((r) => jobPostingJsonLd({ ...r, datePosted: CAREERS.updated }))]} />
      {children}
    </>
  );
}
