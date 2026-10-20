import { xmlEscape } from '@/lib/xml';
import { siteBySlug, siteUrl } from '@/lib/sites';

const site = siteBySlug('photobooth');
const PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0', image: site.heroImage, caption: '예식장에 설치한 웨딩 포토부스' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];
const LASTMOD = '2026-10-20';

export function GET() {
  const urls = PAGES.map((p) => {
    const image = p.image
      ? `
    <image:image>
      <image:loc>${siteUrl(site, p.image)}</image:loc>
      <image:caption>${xmlEscape(p.caption ?? '')}</image:caption>
    </image:image>`
      : '';
    return `
  <url>
    <loc>${siteUrl(site, p.path)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${image}
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
