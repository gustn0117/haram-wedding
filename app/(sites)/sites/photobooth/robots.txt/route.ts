import { siteBySlug, siteUrl } from '@/lib/sites';

const site = siteBySlug('photobooth');

export function GET() {
  const body = `User-Agent: Yeti
Allow: /

User-Agent: Googlebot
Allow: /

User-Agent: *
Allow: /

Host: ${siteUrl(site)}
Sitemap: ${siteUrl(site, '/sitemap.xml')}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
