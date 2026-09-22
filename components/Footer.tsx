import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { SERVICES } from '@/lib/services';

const INFO_LINKS = [
  { href: '/about', label: '하람소개' },
  { href: '/partnership', label: '예식장 제휴' },
  { href: '/reviews', label: '고객후기' },
  { href: '/careers', label: '인재 채용' },
  { href: '/contact', label: '문의하기' },
];

// 짙은 세이지(#4a5241) 위 대비: 흰색 85% 6.4:1, 65% 4.5:1 — 본문은 65% 이상만 쓴다
export default function Footer() {
  return (
    <footer className="bg-sage-ink text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-x-8 gap-y-12">
          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="하람 홈">
              <Image src="/logo-mark.png" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="heading-en text-[24px] font-medium">HARAM</span>
            </Link>
            <p className="mt-5 text-[15px] leading-[1.75] text-white/85 break-keep max-w-[22em]">
              예식의 흐름을 다듬고 공간의 품격을 완성하는, 예식장의 운영 파트너입니다.
            </p>
          </div>

          {/* 서비스 */}
          <nav aria-label="서비스">
            <p className="text-[14px] font-bold text-white">서비스</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className="text-[14px] text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 안내 */}
          <nav aria-label="안내">
            <p className="text-[14px] font-bold text-white">안내</p>
            <ul className="mt-5 space-y-3">
              {INFO_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 고객센터 */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[14px] font-bold text-white">고객센터</p>
            <a href={PHONE_TEL} className="mt-4 block text-[28px] font-bold tracking-[-0.01em] tabular-nums text-white hover:text-gold-light transition-colors">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-[14px] text-white/75">평일 10:00 – 18:00</p>
            <div className="mt-6 flex gap-2">
              <a href="https://www.instagram.com/haram_wedding" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-white/30 text-[13px] text-white/85 hover:border-white hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center h-9 px-3.5 rounded-full border border-white/30 text-[13px] text-white/85 hover:border-white hover:text-white transition-colors">
                블로그
              </a>
            </div>
          </div>
        </div>

        {/* 사업자 정보 */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[13px] text-white/65">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>상호 하람</span>
            <span>대표 김영진</span>
            <span>사업자등록번호 412-21-01283</span>
            <span>통신판매업 2025-용인기흥-01511</span>
            <span>경기도 수원시 영통구</span>
          </p>
          <p>© {new Date().getFullYear()} HARAM</p>
        </div>
      </div>
    </footer>
  );
}
