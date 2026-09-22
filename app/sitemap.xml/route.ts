import { CONCIERGE, CONTACT, HOME, HOST, PAGES, PHOTOBOOTH, absUrl, type SitePage } from '@/lib/seo';
import { xmlEscape } from '@/lib/xml';

// 이미지 사이트맵 — 구글/네이버 이미지 검색 노출용 (캡션에 핵심 키워드)
const IMAGES: Record<string, { src: string; caption: string }[]> = {
  [HOME.path]: [
    { src: '/images/hotel-white/main-intro-hotel-hall.png', caption: '하람 예식도우미가 운영하는 호텔 웨딩홀' },
    { src: '/images/hotel-white/main-service-concierge.png', caption: '하람 예식 컨시어지' },
    { src: '/images/hotel-white/main-service-photobooth.png', caption: '하람 웨딩 포토부스' },
    { src: '/images/hotel-white/main-service-host.png', caption: '하람 예식사회자' },
    { src: '/images/hotel-white/main-quote-hotel-ballroom.png', caption: '하람 웨딩 매니지먼트 호텔 연회장' },
  ],
  [CONCIERGE.path]: [
    { src: '/images/hotel-white/concierge-hero.png', caption: '예식 컨시어지 · 예식도우미 현장' },
    { src: '/images/hotel-white/concierge-about.png', caption: '하람 예식 컨시어지 서비스' },
    { src: '/images/hotel-white/concierge-guest-flow.png', caption: '예식도우미 하객 안내' },
    { src: '/images/hotel-white/concierge-timeline.png', caption: '예식 컨시어지 식순 관리' },
  ],
  [PHOTOBOOTH.path]: [
    { src: '/images/hotel-white/photobooth-hero.png', caption: '하람 웨딩 포토부스' },
    { src: '/images/hotel-white/photobooth-about.png', caption: '결혼식 포토부스 즉석 인화' },
  ],
  [HOST.path]: [
    { src: '/images/hotel-white/host-hero.png', caption: '하람 예식사회자 · 전문사회' },
    { src: '/images/hotel-white/host-about.png', caption: '결혼식 사회자 웨딩 MC' },
  ],
  [CONTACT.path]: [{ src: '/images/hotel-white/contact-hero.png', caption: '하람 예식 상담 문의' }],
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
