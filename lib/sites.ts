// 서브도메인 사이트 정의 — 한 앱이 호스트에 따라 다른 사이트를 보여준다.
import type { ServiceSlug } from '@/lib/services';

export type SiteSlug = 'photobooth' | 'concierge' | 'host';

export type Site = {
  slug: SiteSlug;
  /** 서브도메인 (운영) */
  host: string;
  /** 사이트 이름 — 로고 자리와 <title> 뒤에 붙는다 */
  name: string;
  tagline: string;
  description: string;
  keywords: string[];
  /** 이 사이트가 다루는 서비스 (lib/services.ts) */
  services: ServiceSlug[];
  /** 본사 사이트에서 이 사이트로 보내는 요약 페이지 경로 */
  teaserPath: string;
  /** 사이트 고유 색 — CSS 변수로 깔린다 */
  theme: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    line: string;
    accent: string;
    accentInk: string;
    accentSoft: string;
    dark: string;
  };
  heroImage: string;
  ogImage: string;
};

export const SITES: Site[] = [
  {
    slug: 'photobooth',
    host: 'photobooth.haramevent.kr',
    name: '하람 포토부스',
    tagline: '식이 끝나도 손에 남는, 그날의 한 장',
    description:
      '예식장 출장 웨딩 포토부스. 운영 스태프가 상주해 촬영 안내부터 즉석 인화, 소모품 관리까지 맡습니다. 건당 운영과 월 대여 중 선택할 수 있습니다.',
    keywords: [
      '웨딩 포토부스',
      '결혼식 포토부스',
      '포토부스 대여',
      '웨딩 포토부스 대여',
      '예식장 포토부스',
      '하객 포토부스',
      '즉석 인화',
      '포토부스 업체',
    ],
    services: ['photobooth'],
    teaserPath: '/photobooth',
    theme: {
      bg: '#ffffff',
      surface: '#f5f6f8',
      ink: '#1a1a1a',
      muted: '#6b7280',
      line: '#e3e5e9',
      accent: '#876526',
      accentInk: '#ffffff',
      accentSoft: '#f7f0e3',
      dark: '#1a1a1a',
    },
    heroImage: '/images/editorial-2026/photobooth.webp',
    ogImage: '/images/editorial-2026/photobooth-og.jpg',
  },
  {
    slug: 'concierge',
    host: 'concierge.haramevent.kr',
    name: '하람 컨시어지',
    tagline: '예식장의 하루를, 하나의 흐름으로',
    description:
      '예식장 전용 B2B 예식 컨시어지. 자체 교육을 이수한 예식도우미가 하객 안내부터 퇴장까지 현장 운영을 맡고, 웨딩홀 전용 관리 프로그램을 함께 제공합니다.',
    keywords: [
      '예식 컨시어지',
      '예식도우미',
      '예식도우미 파견',
      '웨딩 컨시어지',
      '예식장 운영 대행',
      '예식장 인력',
      '웨딩홀 운영',
    ],
    services: ['concierge', 'program'],
    teaserPath: '/concierge',
    theme: {
      bg: '#ffffff',
      surface: '#f5f6f8',
      ink: '#1a1a1a',
      muted: '#6b7280',
      line: '#e3e5e9',
      accent: '#876526',
      accentInk: '#ffffff',
      accentSoft: '#f7f0e3',
      dark: '#16305c',
    },
    heroImage: '/images/editorial-2026/concierge-desk.webp',
    ogImage: '/images/editorial-2026/concierge-desk-og.jpg',
  },
  {
    slug: 'host',
    host: 'host.haramevent.kr',
    name: '하람 사회·축가',
    tagline: '예식의 흐름을 만드는, 한 사람의 목소리',
    description:
      '전문 예식사회자와 라이브 축가. 대본을 횟수 제한 없이 협의하고, 큐 시트에 맞춰 음향팀과 1초 단위로 맞물려 진행합니다.',
    keywords: [
      '예식사회자',
      '결혼식 사회자',
      '웨딩 MC',
      '사회자 섭외',
      '결혼식 축가',
      '웨딩 축가',
      '축가 섭외',
      '전문 사회자',
    ],
    services: ['host', 'vocal'],
    teaserPath: '/host',
    theme: {
      bg: '#ffffff',
      surface: '#f5f6f8',
      ink: '#1a1a1a',
      muted: '#6b7280',
      line: '#e3e5e9',
      accent: '#876526',
      accentInk: '#ffffff',
      accentSoft: '#f7f0e3',
      dark: '#2a2338',
    },
    heroImage: '/images/editorial-2026/host-vocal.webp',
    ogImage: '/images/editorial-2026/host-vocal-og.jpg',
  },
];

export const siteBySlug = (slug: SiteSlug) => SITES.find((s) => s.slug === slug)!;

/** 호스트 이름에서 사이트를 찾는다. 로컬 개발(photobooth.localhost:3000)도 지원. */
export function siteByHost(host: string | null | undefined): Site | undefined {
  if (!host) return undefined;
  const name = host.split(':')[0].toLowerCase();
  return SITES.find((s) => name === s.host || name === `${s.slug}.localhost`);
}

export const siteUrl = (site: Site, path = '/') =>
  path === '/' ? `https://${site.host}` : `https://${site.host}${path}`;
