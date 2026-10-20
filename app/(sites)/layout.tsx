import type { Metadata } from 'next';
import '../globals.css';

// 서브도메인 사이트의 최상위 레이아웃 — 본사 헤더·푸터를 쓰지 않는다.
// 페이지별 metadata 는 각 사이트 layout 에서 채운다.
export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function SitesRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
