import Link from 'next/link';
import Image from 'next/image';
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import type { Site } from '@/lib/sites';

export type SiteNavItem = { href: string; label: string };

/**
 * 서브도메인 사이트의 바깥 틀.
 * 사이트 색은 CSS 변수로 깔고, 안쪽에서는 var(--site-*) 로 쓴다.
 */
export default function SiteShell({
  site,
  nav,
  children,
}: {
  site: Site;
  nav: SiteNavItem[];
  children: React.ReactNode;
}) {
  const t = site.theme;
  const vars = {
    '--site-bg': t.bg,
    '--site-surface': t.surface,
    '--site-ink': t.ink,
    '--site-muted': t.muted,
    '--site-line': t.line,
    '--site-accent': t.accent,
    '--site-accent-ink': t.accentInk,
    '--site-accent-soft': t.accentSoft,
    '--site-dark': t.dark,
  } as React.CSSProperties;

  return (
    <div style={vars} className="site-root min-h-screen flex flex-col bg-[var(--site-bg)] text-[var(--site-ink)]">
      <header className="sticky top-0 z-40 bg-[var(--site-bg)] border-b border-[var(--site-line)]">
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${site.name} 홈`}>
            <Image src="/logo-mark.png" alt="" width={30} height={30} className="w-[30px] h-[30px] object-contain" />
            <span className="text-[19px] font-extrabold tracking-[-0.03em]">{site.name}</span>
          </Link>

          <nav aria-label="주요 메뉴" className="hidden md:flex items-center gap-9 mx-auto">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}
                className="text-[17px] font-bold tracking-[-0.02em] hover:text-[var(--site-accent)] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={PHONE_TEL}
            className="ml-auto md:ml-0 inline-flex items-center h-11 px-6 bg-[var(--site-accent)] text-[var(--site-accent-ink)] text-[15px] font-bold tabular-nums hover:opacity-90 transition-opacity">
            <span className="hidden sm:inline">상담&nbsp;</span>{PHONE_DISPLAY}
          </a>
        </div>

        {/* 모바일 메뉴 — 가로 스크롤 탭 */}
        <nav aria-label="주요 메뉴" className="md:hidden border-t border-[var(--site-line)] overflow-x-auto">
          <ul className="flex items-center gap-5 px-6 h-12 whitespace-nowrap">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] font-bold text-[var(--site-muted)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[var(--site-dark)] text-white">
        <div className="max-w-[1120px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <p className="text-[20px] font-bold">{site.name}</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/75 max-w-[24em] break-keep">{site.tagline}</p>
              <a href={PHONE_TEL} className="mt-6 block text-[26px] font-bold tabular-nums hover:opacity-80 transition-opacity">
                {PHONE_DISPLAY}
              </a>
              <p className="mt-1 text-[14px] text-white/70">평일 10:00 – 18:00</p>
              <a href={EMAIL_HREF} className="mt-3 block text-[15px] text-white/85 hover:text-white transition-colors">
                {EMAIL}
              </a>
            </div>

            <nav aria-label="사이트 메뉴" className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[14px] text-white/75 hover:text-white transition-colors w-fit">
                  {item.label}
                </Link>
              ))}
              <a href="https://haramevent.kr" className="mt-3 text-[14px] font-semibold text-white hover:underline underline-offset-4 w-fit">
                하람 전체 서비스 보기 →
              </a>
            </nav>
          </div>

          <div className="mt-12 pt-6 border-t border-white/20 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-white/65">
            <span>상호 하람</span>
            <span>대표 김영진</span>
            <span>사업자등록번호 412-21-01283</span>
            <span>경기도 수원시 영통구</span>
            <span>© {new Date().getFullYear()} HARAM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
