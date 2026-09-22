import type { Metadata } from 'next';
import type { FaqItem } from '@/lib/faq';

export const SITE_URL = 'https://haramevent.kr';
export const SITE_NAME = '하람 (HARAM)';
export const BRAND = '하람';
export const PHONE = '+82-10-7930-1332';
export const RSS_PATH = '/rss.xml';
export const NAVER_SITE_VERIFICATION = 'b70ad554a7856cbcad58c8650f95a7bd76e7e93d';

// 사이트 전체에서 잡을 핵심 키워드
export const CORE_KEYWORDS = ['예식도우미', '예식 컨시어지', '웨딩 포토부스', '예식사회자'];

export type SitePage = {
  path: string;
  /** <title> — 템플릿 없이 그대로 사용 */
  title: string;
  /** 서비스명 (구조화 데이터·RSS 제목) */
  name: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  /** 콘텐츠가 실제로 바뀐 날짜 — 사이트맵 lastmod / RSS pubDate */
  updated: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
  /** schema.org Service 로 표시할 서비스 페이지인지 */
  serviceType?: string;
};

export const HOME: SitePage = {
  path: '/',
  title: '하람 | 예식도우미 · 예식 컨시어지 · 웨딩 포토부스 · 예식사회자',
  name: '하람 웨딩 매니지먼트',
  description:
    '하람은 예식도우미, 예식 컨시어지, 웨딩 포토부스, 예식사회자(전문사회)를 한 팀으로 운영하는 프리미엄 예식 매니지먼트입니다. 서울·경기·수원 및 전국 예식장 현장 운영을 책임집니다.',
  keywords: [
    ...CORE_KEYWORDS,
    '하람',
    '하람 웨딩',
    '웨딩 컨시어지',
    '결혼식 컨시어지',
    '결혼식 도우미',
    '웨딩 도우미',
    '예식 매니지먼트',
    '결혼식 포토부스',
    '포토부스 대여',
    '결혼식 사회자',
    '웨딩 MC',
    '전문사회',
    '수원 예식도우미',
    '경기 예식도우미',
    'HARAM',
  ],
  image: '/images/hotel-white/concierge-hero.png',
  imageAlt: '하람 예식 컨시어지가 운영하는 호텔 웨딩홀',
  updated: '2026-09-22',
  changeFrequency: 'weekly',
  priority: 1.0,
};

export const CONCIERGE: SitePage = {
  path: '/concierge',
  title: '예식 컨시어지 · 예식도우미 | 하람 웨딩 컨시어지',
  name: '예식 컨시어지 · 예식도우미',
  description:
    '하람 예식 컨시어지는 예식장과 직접 제휴해 전문 예식도우미가 하객 안내, 신부대기실 케어, 식순 조율, 돌발 상황 대응까지 현장 운영 전체를 책임지는 B2B 웨딩 컨시어지 서비스입니다.',
  keywords: [
    '예식 컨시어지',
    '예식도우미',
    '웨딩 컨시어지',
    '결혼식 컨시어지',
    '예식장 도우미',
    '결혼식 도우미',
    '웨딩 도우미',
    '신부 도우미',
    '예식장 매니저',
    '예식 매니지먼트',
    '하람 컨시어지',
  ],
  image: '/images/hotel-white/concierge-hero.png',
  imageAlt: '하람 예식 컨시어지 · 예식도우미 현장',
  updated: '2026-09-22',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '예식 컨시어지 · 예식도우미',
};

export const PHOTOBOOTH: SitePage = {
  path: '/photobooth',
  title: '웨딩 포토부스 | 결혼식 포토부스 대여 · 즉석 인화 - 하람',
  name: '웨딩 포토부스',
  description:
    '하람 웨딩 포토부스는 예식 컨셉 맞춤 프레임 디자인, 무제한 촬영·고품질 즉석 인화, 전문 스태프 상주, 디지털 원본 제공까지 포함된 프리미엄 결혼식 포토부스 대여 서비스입니다.',
  keywords: [
    '웨딩 포토부스',
    '결혼식 포토부스',
    '포토부스 대여',
    '웨딩 포토부스 대여',
    '예식 포토부스',
    '하객 포토부스',
    '즉석 인화',
    '웨딩 포토북',
    '하람 포토부스',
  ],
  image: '/images/hotel-white/photobooth-hero.png',
  imageAlt: '하람 웨딩 포토부스',
  updated: '2026-09-22',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '웨딩 포토부스',
};

export const HOST: SitePage = {
  path: '/host',
  title: '예식사회자 · 결혼식 사회자 | 전문 웨딩 MC - 하람',
  name: '예식사회자 (전문사회)',
  description:
    '하람 예식사회자는 사전 미팅으로 두 분의 이야기를 파악하고 식순 구성, 리허설 참여, 현장 분위기 리딩까지 책임지는 전문 결혼식 사회자(웨딩 MC) 서비스입니다.',
  keywords: [
    '예식사회자',
    '예식 사회자',
    '결혼식 사회자',
    '전문 사회자',
    '웨딩 사회자',
    '웨딩 MC',
    '전문사회',
    '결혼식 전문사회',
    '하람 전문사회',
  ],
  image: '/images/hotel-white/host-hero.png',
  imageAlt: '하람 예식사회자 · 전문 웨딩 MC',
  updated: '2026-09-22',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '예식사회자',
};

export const CONTACT: SitePage = {
  path: '/contact',
  title: '상담 문의 | 예식도우미 · 웨딩 포토부스 · 예식사회자 - 하람',
  name: '하람 상담 문의',
  description:
    '예식도우미·예식 컨시어지 제휴, 웨딩 포토부스 대여, 예식사회자 섭외 상담. 전화 010-7930-1332 또는 온라인 문의로 맞춤 견적을 받아보세요.',
  keywords: [
    '예식도우미 문의',
    '예식 컨시어지 제휴',
    '웨딩 포토부스 견적',
    '예식사회자 섭외',
    '결혼식 사회자 비용',
    '하람 문의',
  ],
  image: '/images/hotel-white/contact-hero.png',
  imageAlt: '하람 상담 문의',
  updated: '2026-09-22',
  changeFrequency: 'monthly',
  priority: 0.7,
};

export const SERVICES = [CONCIERGE, PHOTOBOOTH, HOST];
export const PAGES = [HOME, ...SERVICES, CONTACT];

export const absUrl = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

/** 페이지별 metadata — alternates 는 얕게 병합되므로 RSS 링크를 매 페이지에 포함한다 */
export function pageMetadata(page: SitePage): Metadata {
  const url = absUrl(page.path);
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': [{ url: RSS_PATH, title: `${BRAND} 소식` }] },
    },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      url,
      title: page.title,
      description: page.description,
      images: [{ url: page.image, width: 1672, height: 941, alt: page.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

// ───────── JSON-LD ─────────

const ORG_ID = `${SITE_URL}#organization`;
const BUSINESS_ID = `${SITE_URL}#localbusiness`;

const address = {
  '@type': 'PostalAddress',
  addressCountry: 'KR',
  addressRegion: '경기도',
  addressLocality: '수원시 영통구',
};

const areaServed = [
  { '@type': 'Country', name: '대한민국' },
  { '@type': 'AdministrativeArea', name: '서울특별시' },
  { '@type': 'AdministrativeArea', name: '경기도' },
  { '@type': 'City', name: '수원시' },
];

export const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: BRAND,
    alternateName: ['HARAM', '하람 웨딩', '하람 이벤트'],
    inLanguage: 'ko-KR',
    publisher: { '@id': ORG_ID },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND,
    alternateName: ['HARAM', '하람 웨딩', 'Haram Wedding'],
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon`,
    description: HOME.description,
    telephone: PHONE,
    address,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: ['Korean'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: BRAND,
    description: HOME.description,
    image: absUrl(HOME.image),
    url: SITE_URL,
    telephone: PHONE,
    priceRange: '₩₩',
    address,
    areaServed,
    keywords: CORE_KEYWORDS.join(', '),
    parentOrganization: { '@id': ORG_ID },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '하람 웨딩 서비스',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: absUrl(s.path) },
      })),
    },
  },
];

export function serviceJsonLd(page: SitePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absUrl(page.path)}#service`,
    name: page.name,
    serviceType: page.serviceType,
    description: page.description,
    url: absUrl(page.path),
    image: absUrl(page.image),
    provider: { '@id': BUSINESS_ID },
    areaServed,
    audience: { '@type': 'Audience', audienceType: '예비부부 · 예식장' },
  };
}

export function breadcrumbJsonLd(page: SitePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.name, item: absUrl(page.path) },
    ],
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
