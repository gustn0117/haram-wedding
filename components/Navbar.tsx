'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ESTIMATE_HREF, MAIN_MENU, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
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
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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

            <ul className="hidden lg:flex items-stretch h-full ml-auto">
              {MAIN_MENU.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="relative">
                    <Link href={link.href} aria-current={active ? 'page' : undefined}
                      className={`flex items-center h-full px-[18px] text-[15px] font-medium tracking-[-0.01em] transition-colors ${
                        overlay
                          ? active ? 'text-white' : 'text-white/80 hover:text-white'
                          : active ? 'text-ink' : 'text-ink/60 hover:text-ink'
                      }`}>
                      {link.label}
                    </Link>
                    {active && <span className="absolute inset-x-[18px] -bottom-px h-[2px] bg-gold" />}
                  </li>
                );
              })}
            </ul>

            <span className={`hidden lg:block w-px h-4 mx-6 ${overlay ? 'bg-white/25' : 'bg-line'}`} />

            <Link href={ESTIMATE_HREF}
              className={`hidden md:inline-flex ml-auto lg:ml-0 items-center h-10 px-5 rounded-full text-[14px] font-semibold transition-colors ${
                overlay ? 'bg-white text-ink hover:bg-gold-light' : 'bg-ink text-white hover:bg-gold-deep'
              }`}>
              무료 견적 받기
            </Link>

            {/* 모바일 메뉴 버튼 */}
            <button type="button" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={mobileOpen}
              className="lg:hidden ml-auto md:ml-4 relative w-10 h-10 -mr-2 flex items-center justify-center"
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
                {MAIN_MENU.map((link) => (
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
                <Link href={ESTIMATE_HREF} className="flex items-center justify-center h-14 rounded-full bg-ink text-white text-[16px] font-semibold">
                  무료 견적 받기
                </Link>
                <a href={PHONE_TEL} className="mt-3 flex items-center justify-center h-14 rounded-full border border-line text-[16px] font-semibold text-ink tabular-nums">
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
