import type { Metadata } from 'next';
import { STORIES_INDEX, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(STORIES_INDEX);

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
