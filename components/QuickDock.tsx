'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_HREF, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { IconArrowUp, IconChat, IconPhone } from '@/components/icons';

/** 우측 하단 고정 버튼 — 데스크톱은 문의·TOP, 모바일은 하단 고정 바 */
export default function QuickDock() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      <div className="hidden lg:flex fixed right-7 bottom-7 z-40 flex-col items-center gap-3">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="맨 위로"
          className="w-12 h-12 rounded-full bg-white border border-line shadow-[0_6px_20px_rgba(16,24,40,0.12)] flex items-center justify-center text-ink/60 hover:text-ink transition-colors">
          <IconArrowUp className="w-5 h-5" />
        </button>
        <Link href={CONTACT_HREF}
          className="w-[76px] h-[76px] rounded-full bg-mint text-white shadow-[0_10px_28px_rgba(47,183,154,0.35)] flex flex-col items-center justify-center gap-1 hover:bg-mint-deep transition-colors">
          <IconChat className="w-6 h-6" />
          <span className="text-[12px] font-bold">문의하기</span>
        </Link>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-line pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-[1fr_1.4fr] gap-2 p-2">
          <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE_DISPLAY}`}
            className="flex items-center justify-center gap-2 h-12 border border-line text-[15px] font-bold text-ink">
            <IconPhone className="w-5 h-5 text-navy" />
            전화 상담
          </a>
          <Link href={CONTACT_HREF} className="flex items-center justify-center h-12 bg-navy text-white text-[15px] font-bold">
            문의하기
          </Link>
        </div>
      </div>
    </>
  );
}
