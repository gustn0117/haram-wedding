import { BRAND, CORE_KEYWORDS, HOME, PAGES, RSS_PATH, SITE_URL, absUrl } from '@/lib/seo';
import { xmlEscape } from '@/lib/xml';

const rfc822 = (date: string) => new Date(`${date}T09:00:00+09:00`).toUTCString();

export function GET() {
  const pages = [...PAGES].sort((a, b) => b.updated.localeCompare(a.updated));
  const items = pages
    .map(
      (p) => `
    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${absUrl(p.path)}</link>
      <guid isPermaLink="true">${absUrl(p.path)}</guid>
      <description>${xmlEscape(p.description)}</description>
      <pubDate>${rfc822(p.updated)}</pubDate>
      <dc:creator>${xmlEscape(BRAND)}</dc:creator>
${p.keywords.map((k) => `      <category>${xmlEscape(k)}</category>`).join('\n')}
    </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xmlEscape(HOME.title)}</title>
    <link>${SITE_URL}</link>
    <description>${xmlEscape(HOME.description)}</description>
    <language>ko</language>
    <copyright>© ${BRAND}</copyright>
    <lastBuildDate>${rfc822(pages[0].updated)}</lastBuildDate>
    <atom:link href="${SITE_URL}${RSS_PATH}" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/apple-icon</url>
      <title>${xmlEscape(HOME.title)}</title>
      <link>${SITE_URL}</link>
    </image>
${CORE_KEYWORDS.map((k) => `    <category>${xmlEscape(k)}</category>`).join('\n')}${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
