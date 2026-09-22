'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_HREF, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { IconArrowUp, IconBuilding, IconDocument, IconPhone, IconUsers } from '@/components/icons';

const QUICK = [
  { href: '/partnership', label: '예식장 제휴', Icon: IconBuilding },
  { href: CONTACT_HREF, label: '상담 문의', Icon: IconDocument },
  { href: '/careers', label: '인재 채용', Icon: IconUsers },
];

export default function QuickDock() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      {/* 데스크톱: 오른쪽 퀵메뉴 */}
      <aside aria-label="바로가기" className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40 w-[92px]">
        <div className="bg-white/95 backdrop-blur-xl shadow-[-8px_8px_32px_rgba(82,72,59,0.12)] rounded-l-[24px] overflow-hidden border border-r-0 border-line">
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

      {/* 모바일: 하단 고정 바 */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-line pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-[1fr_1.4fr] gap-2 p-2">
          <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE_DISPLAY}`}
            className="flex items-center justify-center gap-2 h-12 rounded-xl border border-line text-[15px] font-semibold text-ink">
            <IconPhone className="w-5 h-5 text-gold-deep" />
            전화 상담
          </a>
          <Link href={CONTACT_HREF}
            className="flex items-center justify-center h-12 rounded-xl bg-ink text-white text-[15px] font-semibold">
            문의하기
          </Link>
        </div>
      </div>
    </>
  );
}
