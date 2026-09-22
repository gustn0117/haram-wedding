'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ESTIMATE_HREF, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { IconArrowUp, IconBuilding, IconChat, IconDocument, IconPhone, IconUsers } from '@/components/icons';

const QUICK = [
  { href: '/partnership', label: '예식장 제휴', Icon: IconBuilding },
  { href: ESTIMATE_HREF, label: '견적 문의', Icon: IconDocument },
  { href: '/reviews', label: '고객 후기', Icon: IconChat },
  { href: '/careers', label: '인재 채용', Icon: IconUsers },
];

export default function QuickDock() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      {/* 데스크톱: 오른쪽 퀵메뉴 */}
      <aside aria-label="바로가기" className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40 w-[92px]">
        <div className="bg-white shadow-[-8px_8px_32px_rgba(28,29,33,0.10)] rounded-l-2xl overflow-hidden">
          <p className="bg-gold text-white text-[12px] font-bold text-center py-2.5 tracking-[0.02em]">바로가기</p>
          <ul>
            {QUICK.map(({ href, label, Icon }) => (
              <li key={href + label}>
                <Link href={href}
                  className="group flex flex-col items-center gap-1.5 py-3.5 border-b border-line text-[12px] font-medium text-ink/75 hover:bg-mist hover:text-ink transition-colors">
                  <Icon className="w-[22px] h-[22px] text-gold-deep" />
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href={PHONE_TEL} className="flex flex-col items-center gap-1 py-3.5 text-[12px] font-medium text-ink/75 hover:bg-mist hover:text-ink transition-colors">
                <IconPhone className="w-[22px] h-[22px] text-gold-deep" />
                전화 상담
              </a>
            </li>
          </ul>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full flex items-center justify-center gap-1 h-10 bg-ink text-white text-[11px] font-semibold hover:bg-gold-deep transition-colors">
            <IconArrowUp className="w-3.5 h-3.5" />
            TOP
          </button>
        </div>
      </aside>

      {/* 데스크톱: 오른쪽 아래 견적 배지 */}
      <Link href={ESTIMATE_HREF}
        className="hidden lg:flex fixed right-0 bottom-0 z-40 items-center gap-3 pl-3 pr-6 py-3 rounded-tl-[36px] bg-ink text-white shadow-[0_-8px_32px_rgba(28,29,33,0.18)] hover:bg-[#2a2b30] transition-colors">
        <span className="w-12 h-12 rounded-full bg-gold-light text-ink flex items-center justify-center">
          <IconDocument className="w-6 h-6" />
        </span>
        <span className="leading-tight">
          <span className="block text-[12px] font-semibold text-gold-light">1분이면 끝나요</span>
          <span className="block text-[16px] font-bold">무료 견적 받기</span>
        </span>
      </Link>

      {/* 모바일: 하단 고정 바 */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-line pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-[1fr_1.4fr] gap-2 p-2">
          <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE_DISPLAY}`}
            className="flex items-center justify-center gap-2 h-12 rounded-xl border border-line text-[15px] font-semibold text-ink">
            <IconPhone className="w-5 h-5 text-gold-deep" />
            전화 상담
          </a>
          <Link href={ESTIMATE_HREF}
            className="flex items-center justify-center h-12 rounded-xl bg-ink text-white text-[15px] font-semibold">
            무료 견적 받기
          </Link>
        </div>
      </div>
    </>
  );
}
