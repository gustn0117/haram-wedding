import type { Metadata } from 'next';
import { PHONE } from '@/lib/seo';
import { type Site, siteUrl } from '@/lib/sites';

/** 서브도메인 사이트의 metadata — 본사 사이트와 canonical·OG가 섞이지 않게 분리한다 */
export function siteMetadata(site: Site, page?: { path: string; title: string; description?: string }): Metadata {
  const url = siteUrl(site, page?.path ?? '/');
  const title = page ? `${page.title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const description = page?.description ?? site.description;
  return {
    metadataBase: new URL(`https://${site.host}`),
    title: { absolute: title },
    description,
    keywords: site.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      siteName: site.name,
      url,
      title,
      description,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
  };
}

export function siteJsonLd(site: Site) {
  const url = siteUrl(site);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${url}#website`,
      url,
      name: site.name,
      inLanguage: 'ko-KR',
      publisher: { '@id': 'https://haramevent.kr#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${url}#business`,
      name: site.name,
      description: site.description,
      url,
      image: `${url}${site.ogImage}`,
      telephone: PHONE,
      priceRange: '₩₩',
      keywords: site.keywords.join(', '),
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KR',
        addressRegion: '경기도',
        addressLocality: '수원시 영통구',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: '서울특별시' },
        { '@type': 'AdministrativeArea', name: '경기도' },
        { '@type': 'AdministrativeArea', name: '인천광역시' },
      ],
      parentOrganization: { '@id': 'https://haramevent.kr#organization' },
    },
  ];
}
