'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MAIN_MENU, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { SERVICES } from '@/lib/services';
import { IconChevronRight } from '@/components/icons';

const UTIL_LINKS = [
  { href: '/careers', label: '인재 채용' },
  { href: '/partnership', label: '예식장 제휴 문의' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // 홈 첫 화면에서는 히어로 위에 투명하게 겹친다
  const overlay = isHome && !scrolled && !mobileOpen;
  const isActive = (href: string) =>
    href === '/services'
      ? pathname === '/services' || SERVICES.some((s) => s.path === pathname)
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-300 ${
          scrolled ? 'md:-translate-y-9' : ''
        } ${overlay ? 'bg-transparent' : 'bg-white shadow-[0_1px_0_#e7e5e0]'}`}
      >
        {/* 유틸리티 바 */}
        <div className={`hidden md:block h-9 border-b ${overlay ? 'border-white/10 bg-black/20' : 'border-line bg-white'}`}>
          <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-end text-[12px]">
            {UTIL_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className={`px-3 first:pl-0 border-r leading-none transition-colors ${
                  overlay ? 'border-white/20 text-white/70 hover:text-white' : 'border-line text-ink/55 hover:text-ink'
                }`}>
                {l.label}
              </Link>
            ))}
            <a href={PHONE_TEL}
              className={`pl-3 leading-none tabular-nums transition-colors ${overlay ? 'text-white/70 hover:text-white' : 'text-ink/55 hover:text-ink'}`}>
              고객센터 <span className={`font-semibold ${overlay ? 'text-white' : 'text-ink'}`}>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* 메인 네비게이션 */}
        <div className={`border-b ${overlay ? 'border-white/15' : 'border-transparent'}`}>
          <nav aria-label="주요 메뉴" className="max-w-[1200px] mx-auto px-6 h-16 md:h-[76px] flex items-center">
            <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="하람 홈">
              <Image src="/logo-mark.png" alt="" width={26} height={26} priority className="w-[26px] h-[26px] object-contain" />
              <span className={`heading-en text-[22px] font-medium transition-colors ${overlay ? 'text-white' : 'text-ink'}`}>
                HARAM
              </span>
            </Link>

            <ul className="hidden lg:flex items-stretch h-full ml-auto -mr-[18px]">
              {MAIN_MENU.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className={link.dropdown ? 'group/menu' : 'relative'}>
                    <Link href={link.href} aria-current={active ? 'page' : undefined} aria-haspopup={link.dropdown ? 'true' : undefined}
                      className={`flex items-center h-full px-[18px] text-[15px] font-medium tracking-[-0.01em] transition-colors ${
                        overlay
                          ? active ? 'text-white' : 'text-white/80 hover:text-white'
                          : active ? 'text-ink' : 'text-ink/60 hover:text-ink'
                      }`}>
                      {link.label}
                      {link.dropdown && (
                        <svg className="ml-1 w-3.5 h-3.5 opacity-60 transition-transform group-hover/menu:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </Link>
                    {active && !link.dropdown && <span className="absolute inset-x-[18px] -bottom-px h-[2px] bg-gold" />}
                    {link.dropdown && (
                      <div className="invisible opacity-0 translate-y-1 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-focus-within/menu:translate-y-0 transition-all duration-200 absolute inset-x-0 top-full bg-white border-t border-line shadow-[0_24px_48px_rgba(28,29,33,0.12)]">
                        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-[200px_1fr] gap-10">
                          <div>
                            <p className="text-[20px] font-bold text-ink tracking-[-0.02em]">서비스</p>
                            <p className="mt-2 text-[14px] leading-[1.6] text-ink/55 break-keep">예식 현장부터 예식장 운영까지, 필요한 것만 골라 이용하세요.</p>
                            <Link href="/services" className="mt-5 inline-block text-[14px] font-semibold text-ink underline underline-offset-4">전체 서비스 보기</Link>
                          </div>
                          <ul className="grid grid-cols-3 gap-2">
                            {SERVICES.map((s) => (
                              <li key={s.slug}>
                                <Link href={s.path}
                                  className={`block rounded-xl p-4 transition-colors ${pathname === s.path ? 'bg-mist' : 'hover:bg-mist'}`}>
                                  <span className="flex items-center gap-2">
                                    <span className="text-[16px] font-bold text-ink">{s.name}</span>
                                    {s.audience === '예식장' && <span className="text-[11px] font-semibold text-gold-deep border border-gold/50 rounded px-1.5 py-0.5">예식장</span>}
                                  </span>
                                  <span className="mt-1 block text-[13px] leading-[1.5] text-ink/55 break-keep">{s.short}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>


            {/* 모바일 메뉴 버튼 */}
            <button type="button" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={mobileOpen}
              className="lg:hidden ml-auto relative w-10 h-10 -mr-2 flex items-center justify-center"
              onClick={() => setMobileOpen((v) => !v)}>
              {[0, 1, 2].map((i) => (
                <span key={i}
                  className={`absolute block w-[22px] h-[1.5px] rounded-full transition-all duration-300 ${overlay ? 'bg-white' : 'bg-ink'} ${
                    i === 0 ? (mobileOpen ? 'rotate-45' : '-translate-y-[7px]') : i === 1 ? (mobileOpen ? 'opacity-0' : '') : (mobileOpen ? '-rotate-45' : 'translate-y-[7px]')
                  }`} />
              ))}
            </button>
          </nav>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-16 md:pt-[112px] overflow-y-auto"
          >
            <div className="px-6 pb-10 min-h-full flex flex-col">
              <ul className="flex-1 pt-2">
                {MAIN_MENU.map((link) => link.dropdown ? (
                  <li key={link.href} className="py-4 border-b border-line">
                    <p className="text-[18px] font-semibold text-ink">{link.label}</p>
                    <ul className="mt-3 grid grid-cols-2 gap-2">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={s.path}
                            className={`block rounded-xl px-4 py-3 text-[15px] font-semibold ${pathname === s.path ? 'bg-ink text-white' : 'bg-mist text-ink'}`}>
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href}
                      className={`flex items-center justify-between py-[18px] border-b border-line text-[18px] font-semibold ${
                        isActive(link.href) ? 'text-gold-deep' : 'text-ink'
                      }`}>
                      {link.label}
                      <IconChevronRight className="w-5 h-5 text-ink/25" />
                    </Link>
                  </li>
                ))}
                {UTIL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex items-center justify-between py-4 border-b border-line text-[15px] text-ink/60">
                      {l.label}
                      <IconChevronRight className="w-4 h-4 text-ink/25" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <a href={PHONE_TEL} className="flex items-center justify-center h-14 rounded-full border border-line text-[16px] font-semibold text-ink tabular-nums">
                  전화 상담 {PHONE_DISPLAY}
                </a>
                <p className="mt-3 text-center text-[13px] text-ink/45">평일 10:00 – 18:00</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
