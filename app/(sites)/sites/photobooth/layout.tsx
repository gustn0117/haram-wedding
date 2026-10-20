import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SiteShell from '@/components/site/SiteShell';
import { siteJsonLd, siteMetadata } from '@/lib/site-seo';
import { siteBySlug } from '@/lib/sites';

const site = siteBySlug('photobooth');

const NAV = [
  { href: '/#service', label: '서비스' },
  { href: '/#how', label: '운영 방식' },
  { href: '/#flow', label: '진행 순서' },
  { href: '/#faq', label: '자주 묻는 질문' },
  { href: '/contact', label: '문의하기' },
];

export const metadata: Metadata = siteMetadata(site);

export default function PhotoboothSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={siteJsonLd(site)} />
      <SiteShell site={site} nav={NAV}>{children}</SiteShell>
    </>
  );
}
