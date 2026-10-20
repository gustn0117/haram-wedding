import type { Metadata } from 'next';
import { INSIGHTS_INDEX, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(INSIGHTS_INDEX);

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
