import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { REVIEWS, breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(REVIEWS);

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(REVIEWS)]} />
      {children}
    </>
  );
}
