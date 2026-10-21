'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

/**
 * 하람 마케팅 자체 방문 추적 태그.
 *
 * 수집기가 첫 방문·경로 이동 페이지뷰와 heartbeat 를 스스로 처리하므로
 * 여기서 페이지뷰를 따로 호출하지 않는다.
 *
 * 수집 서버는 등록된 도메인의 Origin 만 허용한다(그 외는 preflight 403).
 * 서브도메인 사이트를 추적하려면 하람 마케팅에 해당 도메인을 먼저 등록해야 한다.
 */
const SRC = 'https://haram-analytics.hsweb.pics/tracker.js';
const SITE_ID = 'UK9T4RQks2aa7pBpJ60OuepL';
const ALLOWED_HOSTS = ['haramevent.kr', 'www.haramevent.kr'];

export default function HaramAnalytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  // 호스트는 클라이언트에서만 알 수 있다 (서버 렌더 결과와 어긋나지 않게 마운트 후 판단)
  useEffect(() => {
    setAllowed(ALLOWED_HOSTS.includes(window.location.hostname));
  }, []);

  if (!allowed || pathname.startsWith('/admin')) return null;

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
