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

/** 실제 운영 지역 — 구조화 데이터와 지역 SEO에 함께 쓴다 */
export const SERVICE_AREAS = ['수원', '용인', '성남', '화성', '서울', '경기', '인천', '대전', '부산'];
export const BASE_REGION = { region: '경기도', locality: '수원시 영통구', regionCode: 'KR-41' };
export const INSTAGRAM = 'https://www.instagram.com/haram_wedding';

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
  title: '예식도우미 · 예식 컨시어지 전문 하람 | 수원 · 서울 · 경기',
  name: '하람 웨딩 매니지먼트',
  description:
    '수원에 기반을 둔 하람은 예식도우미(예식 컨시어지), 예식사회자, 축가, 웨딩 포토부스, 웨딩홀 마케팅, 예식 취합 프로그램을 한 파트너가 맡습니다. 서울·경기 전역과 전국 예식장에서 현장을 운영합니다. 상담 010-7930-1332.',
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
    '결혼식 축가',
    '웨딩홀 마케팅',
    '수원 예식도우미',
    '경기 예식도우미',
    'HARAM',
  ],
  image: '/images/editorial-2026/home-hero.png',
  imageAlt: '자연광과 플라워로 꾸민 현대적인 웨딩홀',
  updated: '2026-09-24',
  changeFrequency: 'weekly',
  priority: 1.0,
};

export const CONCIERGE: SitePage = {
  path: '/concierge',
  title: '예식도우미 파견 · 예식 컨시어지 | 예식장 전용 하람',
  name: '예식 컨시어지 · 예식도우미',
  description:
    '예식장 전용 B2B 서비스입니다. 항공·호텔 서비스 계열 인력 중 자체 교육을 이수한 예식도우미만 투입해 하객 안내부터 퇴장까지 현장 운영을 맡습니다. 웨딩홀 전용 관리 프로그램과 직원 전용 계정 제공. 서울·경기·수원 및 전국 예식장 제휴 가능.',
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
  image: '/images/editorial-2026/concierge-desk.png',
  imageAlt: '하람 예식 컨시어지 안내 데스크',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '예식 컨시어지 · 예식도우미',
};

export const PHOTOBOOTH: SitePage = {
  path: '/photobooth',
  title: '웨딩 포토부스 대여 · 즉석 인화 | 결혼식 포토부스 하람',
  name: '웨딩 포토부스',
  description:
    '운영 스태프가 상주해 촬영 안내, 즉석 인화, 소모품 관리까지 맡는 결혼식 포토부스입니다. 건당 운영과 월 대여 중 선택할 수 있고 촬영 데이터는 클라우드에 백업됩니다. 서울·경기·수원 예식장 출장 운영.',
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
  image: '/images/editorial-2026/photobooth.png',
  imageAlt: '하람 웨딩 포토부스',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '웨딩 포토부스',
};

export const HOST: SitePage = {
  path: '/host',
  title: '예식사회자 · 결혼식 사회자 섭외 | 전문 웨딩 MC 하람',
  name: '예식사회자 (전문사회)',
  description:
    '대본을 횟수 제한 없이 비대면으로 협의하고, 큐 시트에 맞춰 음향팀과 1초 단위로 맞물려 입장부터 퇴장까지 진행하는 전문 결혼식 사회자입니다. 누적 200건 기준 식순 진행 정확도 96점. 서울·경기·수원 예식장 진행.',
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
  image: '/images/editorial-2026/host-vocal.png',
  imageAlt: '예식사회자와 축가를 위한 웨딩홀 무대',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.9,
  serviceType: '예식사회자',
};

export const CONTACT: SitePage = {
  path: '/contact',
  title: '상담 문의 | 예식도우미 · 포토부스 · 사회자 견적 - 하람',
  name: '하람 상담 문의',
  description:
    '예식도우미·예식 컨시어지 제휴, 웨딩 포토부스 대여, 예식사회자 섭외 상담. 전화 010-7930-1332 또는 온라인 문의로 상담을 받아보세요.',
  keywords: [
    '예식도우미 문의',
    '예식 컨시어지 제휴',
    '웨딩 포토부스 문의',
    '예식사회자 섭외',
    '결혼식 사회자 비용',
    '하람 문의',
  ],
  image: '/images/editorial-2026/details.png',
  imageAlt: '하람 상담 문의',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.7,
};

export const ABOUT: SitePage = {
  path: '/about',
  title: '하람소개 | 수원 기반 예식장 운영 파트너',
  name: '하람소개',
  description:
    '하람은 예식도우미, 예식 컨시어지, 웨딩 포토부스, 예식사회자를 한 팀으로 운영하는 예식 현장 매니지먼트 회사입니다. 경기도 수원을 기반으로 전국 예식장에서 활동합니다.',
  keywords: ['하람', '하람 웨딩', '예식 매니지먼트', '예식도우미 업체', '웨딩 컨시어지 회사'],
  image: '/images/editorial-2026/intro-vertical.png',
  imageAlt: '하람 소개',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.7,
};

export const PARTNERSHIP: SitePage = {
  path: '/partnership',
  title: '예식장 제휴 · 예식도우미 파견 도입 안내 | 하람',
  name: '예식장 제휴 안내',
  description:
    '예식장 전용 B2B 예식 컨시어지 제휴 안내. 제휴 상담, 현장 답사, 전용 매뉴얼 설계, 전담 예식도우미 배치까지 하람이 예식장 현장 운영을 맡습니다.',
  keywords: ['예식장 제휴', '예식 컨시어지 제휴', '예식도우미 파견', '웨딩홀 운영 대행', '예식장 인력'],
  image: '/images/editorial-2026/concierge-desk.png',
  imageAlt: '하람 예식장 제휴',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.8,
};

export const CAREERS: SitePage = {
  path: '/careers',
  title: '예식도우미 채용 · 웨딩 스태프 모집 | 하람 인재 채용',
  name: '인재 채용',
  description:
    '하람과 함께할 예식도우미(컨시어지 매니저), 웨딩 포토부스 스태프, 예식사회자, 축가 보컬리스트를 모집합니다. 항공·호텔 서비스 계열 지망생과 경험자 우대, 자체 교육과 실무 평가 후 현장에 배치됩니다.',
  keywords: ['예식도우미 채용', '예식도우미 알바', '웨딩 도우미 모집', '포토부스 스태프 채용', '예식사회자 모집', '축가 알바'],
  image: '/images/editorial-2026/operations.png',
  imageAlt: '하람 인재 채용',
  updated: '2026-09-24',
  changeFrequency: 'weekly',
  priority: 0.6,
};

export const VOCAL: SitePage = {
  path: '/vocal',
  title: '결혼식 축가 섭외 | 라이브 웨딩 축가 보컬리스트 하람',
  name: '축가',
  description:
    '가창력 있는 보컬리스트가 신랑신부와 곡목, 키, 편곡을 미리 협의해 본식에서 라이브로 부르는 결혼식 축가입니다. 세트당 1~2곡, 음향팀 사운드 체크까지 함께 운영합니다. 서울·경기·수원 예식장 출장.',
  keywords: ['결혼식 축가', '웨딩 축가', '축가 업체', '라이브 축가', '축가 보컬리스트', '하람 축가'],
  image: '/images/editorial-2026/host-vocal.png',
  imageAlt: '하람 결혼식 축가',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.8,
  serviceType: '결혼식 축가',
};

export const MARKETING: SitePage = {
  path: '/marketing',
  title: '웨딩홀 마케팅 대행 | 예식장 예약률 월 단위 운영 하람',
  name: '웨딩홀 마케팅',
  description:
    '하람 웨딩홀 마케팅은 홀 콘텐츠 제작, 채널 운영과 광고 집행, 문의 응대 동선 설계, 월간 성과 리포트까지 예식장 예약률을 올리는 월 단위 마케팅 운영 서비스입니다.',
  keywords: ['웨딩홀 마케팅', '예식장 마케팅', '웨딩홀 광고', '예식장 홍보', '웨딩홀 콘텐츠'],
  image: '/images/editorial-2026/home-hero.png',
  imageAlt: '하람 웨딩홀 마케팅',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.7,
  serviceType: '웨딩홀 마케팅',
};

export const PROGRAM: SitePage = {
  path: '/program',
  title: '웨딩홀 관리 프로그램 | 예식 일정 · 큐시트 통합 - 하람',
  name: '예식 취합 프로그램',
  description:
    '예약, 식순, 담당 스태프, 협력 업체 정보를 한 화면에서 관리하는 웨딩홀 관리 프로그램입니다. 홀 개수 제한 없이 회차별 진행 현황과 큐 시트를 공유합니다.',
  keywords: ['웨딩홀 관리 프로그램', '예식장 관리 프로그램', '예식 관리 시스템', '큐시트 프로그램', '예식 취합 프로그램'],
  image: '/images/editorial-2026/operations.png',
  imageAlt: '하람 예식 취합 프로그램',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.7,
  serviceType: '웨딩홀 관리 프로그램',
};

export const SERVICES_INDEX: SitePage = {
  path: '/services',
  title: '예식도우미 · 사회자 · 축가 · 포토부스 서비스 | 하람',
  name: '서비스',
  description:
    '예식 컨시어지(예식도우미), 예식사회자, 축가, 웨딩 포토부스, 웨딩홀 마케팅, 예식 취합 프로그램. 하람이 운영하는 여섯 가지 서비스를 한눈에 보세요.',
  keywords: ['예식도우미', '예식사회자', '결혼식 축가', '웨딩 포토부스', '웨딩홀 마케팅', '웨딩홀 관리 프로그램'],
  image: '/images/editorial-2026/home-hero.png',
  imageAlt: '하람 서비스',
  updated: '2026-09-24',
  changeFrequency: 'monthly',
  priority: 0.9,
};

export const SERVICE_PAGES = [CONCIERGE, HOST, VOCAL, PHOTOBOOTH, MARKETING, PROGRAM];
export const PAGES = [HOME, SERVICES_INDEX, ...SERVICE_PAGES, ABOUT, PARTNERSHIP, CAREERS, CONTACT];

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
      images: [{ url: page.image, alt: page.imageAlt }],
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
  { '@type': 'AdministrativeArea', name: '인천광역시' },
  ...SERVICE_AREAS.filter((a) => !['서울', '경기', '인천'].includes(a)).map((name) => ({ '@type': 'City', name: `${name}시` })),
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
    alternateName: ['HARAM', '하람 웨딩', 'Haram Wedding', '하람 예식 컨시어지'],
    url: SITE_URL,
    sameAs: [INSTAGRAM],
    logo: `${SITE_URL}/logo.png`,
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
    keywords: [...CORE_KEYWORDS, '결혼식 축가', '웨딩홀 마케팅', '웨딩홀 관리 프로그램'].join(', '),
    sameAs: [INSTAGRAM],
    knowsLanguage: 'ko-KR',
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
      itemListElement: SERVICE_PAGES.map((s) => ({
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
