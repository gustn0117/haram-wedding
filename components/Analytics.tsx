'use client';

import { Suspense, useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { GA_MEASUREMENT_ID, analyticsEnabled, isTrackablePath } from '@/lib/analytics';

/**
 * 주소가 바뀔 때마다 page_view 를 직접 보낸다.
 * gtag config 에서 send_page_view:false 로 자동 전송을 껐기 때문에 중복 집계되지 않는다.
 * (GA4 향상된 측정의 '브라우저 기록 변경'도 꺼야 한다 — 관리 화면 설정)
 */
function PageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    if (!window.gtag || !isTrackablePath(pathname)) return;

    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    // 같은 주소로 두 번 보내지 않는다 (리렌더 대비)
    if (lastSent.current === path) return;
    lastSent.current = path;

    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      // 본사·전용 사이트를 구분하기 위한 값 (GA4 에서 맞춤 측정기준으로 등록해야 보고서에 뜬다)
      site_host: window.location.hostname,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  const pathname = usePathname();

  if (!analyticsEnabled || !isTrackablePath(pathname)) return null;

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageView />
      </Suspense>
    </>
  );
}
