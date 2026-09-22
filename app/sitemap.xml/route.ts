import { CONCIERGE, CONTACT, HOME, HOST, PAGES, PHOTOBOOTH, absUrl, type SitePage } from '@/lib/seo';
import { xmlEscape } from '@/lib/xml';

// 이미지 사이트맵 — 구글/네이버 이미지 검색 노출용 (캡션에 핵심 키워드)
const IMAGES: Record<string, { src: string; caption: string }[]> = {
  [HOME.path]: [
    { src: '/images/editorial-2026/home-hero.png', caption: '자연광이 드는 현대적인 웨딩홀' },
    { src: '/images/editorial-2026/concierge-desk.png', caption: '하람 예식 컨시어지 안내 데스크' },
    { src: '/images/editorial-2026/photobooth.png', caption: '하람 웨딩 포토부스' },
    { src: '/images/editorial-2026/host-vocal.png', caption: '예식사회자와 축가를 위한 웨딩홀 무대' },
    { src: '/images/editorial-2026/details.png', caption: '하람 웨딩 매니지먼트 예식 디테일' },
  ],
  [CONCIERGE.path]: [
    { src: '/images/editorial-2026/concierge-desk.png', caption: '하람 예식 컨시어지 안내 데스크' },
    { src: '/images/editorial-2026/operations.png', caption: '예식 컨시어지 운영 도구' },
  ],
  [PHOTOBOOTH.path]: [
    { src: '/images/editorial-2026/photobooth.png', caption: '하람 웨딩 포토부스와 즉석 인화' },
  ],
  [HOST.path]: [
    { src: '/images/editorial-2026/host-vocal.png', caption: '예식사회자와 축가를 위한 웨딩홀 무대' },
  ],
  [CONTACT.path]: [{ src: '/images/editorial-2026/details.png', caption: '하람 예식 상담 문의' }],
};

function urlEntry(page: SitePage) {
  const images = (IMAGES[page.path] ?? [])
    .map(
      (img) => `
    <image:image>
      <image:loc>${absUrl(img.src)}</image:loc>
      <image:caption>${xmlEscape(img.caption)}</image:caption>
    </image:image>`,
    )
    .join('');
  return `
  <url>
    <loc>${absUrl(page.path)}</loc>
    <lastmod>${page.updated}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>${images}
  </url>`;
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${PAGES.map(urlEntry).join('')}
</urlset>
`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
