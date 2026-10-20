'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MAIN_MENU, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { SERVICES } from '@/lib/services';
import { SITES } from '@/lib/sites';

const UTIL_LINKS = [
  { href: '/careers', label: '인재 채용' },
  { href: '/partnership', label: '제휴 문의' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/services'
      ? pathname === '/services' || SERVICES.some((s) => s.path === pathname)
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="site-header sticky top-0 z-50 bg-white border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center gap-6">
          <Link href="/" className="flex items-center shrink-0" aria-label="하람 홈">
            <Image src="/logo-mark.png" alt="하람" width={44} height={44} priority className="w-11 h-11 object-contain" />
          </Link>

          <nav aria-label="주요 메뉴" className="hidden lg:flex items-center gap-9 mx-auto">
            {MAIN_MENU.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative py-2 text-[17px] font-bold tracking-[-0.02em] transition-colors ${
                  isActive(link.href) ? 'text-brand-deep' : 'text-ink hover:text-brand-deep'
                }`}>
                {link.label}
                {isActive(link.href) && <span className="absolute -bottom-0.5 inset-x-0 h-[2px] bg-brand-deep" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0 text-[13px] text-ink/60">
            {UTIL_LINKS.map((l, i) => (
              <span key={l.href} className="flex items-center gap-4">
                {i > 0 && <span className="w-px h-3 bg-line" aria-hidden />}
                <Link href={l.href} className="hover:text-ink transition-colors">{l.label}</Link>
              </span>
            ))}
            <a href={PHONE_TEL} className="font-bold text-ink tabular-nums hover:text-brand-deep transition-colors">{PHONE_DISPLAY}</a>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)}
            aria-label="전체 메뉴 열기" aria-expanded={menuOpen}
            className="ml-auto lg:ml-3 flex items-center gap-1.5 shrink-0 text-ink hover:text-brand-deep transition-colors">
            <span className="flex flex-col gap-[5px]" aria-hidden>
              <span className="block w-[22px] h-[2px] bg-current" />
              <span className="block w-[16px] h-[2px] bg-current" />
              <span className="block w-[22px] h-[2px] bg-current" />
            </span>
            <span className="hidden sm:inline text-[13px] font-bold">전체</span>
          </button>
        </div>
      </header>

      {/* 전체 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex" role="dialog" aria-modal="true" aria-label="전체 메뉴">
          <button type="button" aria-label="메뉴 닫기" onClick={() => setMenuOpen(false)}
            className="hidden md:block flex-1 bg-ink/50" />

          <div className="w-full md:w-[520px] bg-white h-full overflow-y-auto">
            <div className="bg-brand-deep text-white px-6 md:px-9 py-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[22px] font-extrabold tracking-[-0.03em]">하람 전체 메뉴</p>
                  <a href={PHONE_TEL} className="mt-3 block text-[26px] font-extrabold tabular-nums">{PHONE_DISPLAY}</a>
                  <p className="mt-1 text-[14px] text-white/70">평일 10:00 – 18:00</p>
                </div>
                <button type="button" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기"
                  className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-6 md:px-9 py-8 space-y-9">
              <section>
                <h2 className="text-[15px] font-extrabold text-brand-deep border-b border-line pb-3">서비스</h2>
                <ul className="mt-4 grid grid-cols-2 gap-x-6">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.path} className="block py-2.5 text-[15px] font-medium text-ink hover:text-brand-deep transition-colors">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-[15px] font-extrabold text-brand-deep border-b border-line pb-3">전문 사이트</h2>
                <ul className="mt-4 space-y-2">
                  {SITES.map((site) => (
                    <li key={site.slug}>
                      <a href={`https://${site.host}`}
                        className="flex items-center justify-between gap-4 py-3 px-4 bg-mist hover:bg-brand-light transition-colors">
                        <span>
                          <span className="block text-[15px] font-bold text-ink">{site.name}</span>
                          <span className="block mt-0.5 text-[13px] text-ink/50">{site.host}</span>
                        </span>
                        <svg className="w-4 h-4 shrink-0 text-ink/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                          <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-[15px] font-extrabold text-brand-deep border-b border-line pb-3">회사</h2>
                <ul className="mt-4 grid grid-cols-2 gap-x-6">
                  {[...MAIN_MENU.filter((m) => m.href !== '/services'), ...UTIL_LINKS].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block py-2.5 text-[15px] font-medium text-ink hover:text-brand-deep transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
