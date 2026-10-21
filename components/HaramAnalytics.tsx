'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

/**
 * 하람 마케팅 자체 방문 추적 태그.
 *
 * 수집기가 첫 방문·경로 이동 페이지뷰와 heartbeat 를 스스로 처리하므로
 * 여기서 페이지뷰를 따로 호출하지 않는다.
 * 관리자 화면(비공개)에서는 넣지 않는다.
 */
const SRC = 'https://haram-analytics.hsweb.pics/tracker.js';
const SITE_ID = 'UK9T4RQks2aa7pBpJ60OuepL';

export default function HaramAnalytics() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <Script
      id="haram-analytics"
      src={SRC}
      strategy="afterInteractive"
      data-site={SITE_ID}
      referrerPolicy="no-referrer"
    />
  );
}
