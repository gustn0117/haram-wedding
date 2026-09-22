import type { MetadataRoute } from 'next';
import { RSS_PATH, SITE_URL } from '@/lib/seo';

const disallow = ['/admin', '/api/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 네이버(Yeti)·구글·다음·빙은 명시적으로 허용
      { userAgent: 'Yeti', allow: '/', disallow },
      { userAgent: 'Googlebot', allow: '/', disallow },
      { userAgent: 'Googlebot-Image', allow: '/images/' },
      { userAgent: 'Daumoa', allow: '/', disallow },
      { userAgent: 'Bingbot', allow: '/', disallow },
      { userAgent: '*', allow: '/', disallow },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}${RSS_PATH}`],
    host: SITE_URL,
  };
}
