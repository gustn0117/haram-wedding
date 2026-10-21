/**
 * GA4 설정.
 *
 * 측정 ID(G-로 시작)는 브라우저에 그대로 노출되는 공개 값이라 레포에 두어도 된다.
 * 서버 빌드가 .env 를 쓰지 않으므로 아래 상수를 기본값으로 쓰고,
 * 환경변수 NEXT_PUBLIC_GA_MEASUREMENT_ID 가 있으면 그쪽을 우선한다.
 *
 * ⚠️ 실제 ID 를 받기 전까지는 빈 값으로 둔다. 빈 값이면 태그를 아예 넣지 않는다.
 */
const MEASUREMENT_ID_FALLBACK = '';

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || MEASUREMENT_ID_FALLBACK;

/** 운영 빌드에서 ID 가 있을 때만 수집한다 (개발·프리뷰 방문은 섞이지 않는다) */
export const analyticsEnabled =
  GA_MEASUREMENT_ID.startsWith('G-') && process.env.NODE_ENV === 'production';

/** 관리자 화면은 집계에서 뺀다 */
export const isTrackablePath = (pathname: string) => !pathname.startsWith('/admin');

type GtagArgs =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['event', string, Record<string, unknown>?]
  | ['set', Record<string, unknown>];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/** 이벤트 전송 — 태그가 없으면 조용히 무시된다 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}
