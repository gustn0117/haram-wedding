import Link from 'next/link';
import Image from 'next/image';
import HeroLogoMark from '@/components/home/HeroLogoMark';
import { CONTACT_HREF } from '@/lib/nav';

const IMAGE = '/images/editorial-2026/host-stage.webp';
const IMAGE_ALT = '예식 직전의 웨딩홀과 음향 콘솔';
const TAGLINE = '웨딩 종합 매니지먼트';
const BODY =
  '예식도우미와 컨시어지, 사회와 축가, 웨딩 포토부스까지 하람이 직접 운영합니다. 인력과 진행, 장비, 마케팅을 따로 계약할 필요가 없습니다.';

const SHORTCUTS = [
  { href: '/partnership', title: '예식장 제휴', desc: '현장 운영을 통째로 맡기고 싶다면', icon: 'building' },
  { href: '/services', title: '서비스 안내', desc: '컨시어지 · 사회 · 축가 · 포토부스', icon: 'grid' },
  { href: CONTACT_HREF, title: '상담 문의', desc: '예식 날짜와 조건을 알려주세요', icon: 'chat' },
];

export default function Hero() {
  return (
    <section className="relative bg-ink text-white">
      <div className="relative h-[min(78vh,680px)] min-h-[480px] overflow-hidden">
        <Image src={IMAGE} alt={IMAGE_ALT} fill priority sizes="100vw" className="object-cover hero-kenburns" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,20,0.68)_0%,rgba(10,13,20,0.58)_45%,rgba(10,13,20,0.78)_100%)]" />
        {/* 문구 뒤쪽만 한 겹 더 눌러 글자가 사진에 묻히지 않게 한다 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,rgba(8,10,16,0.45)_0%,rgba(8,10,16,0)_100%)]" />

        <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col items-center justify-center text-center pb-14 md:pb-16">
          <div className="max-w-[46rem]">
            <h1 className="flex flex-col items-center">
              <HeroLogoMark className="w-[104px] sm:w-[140px] lg:w-[168px]" />
              <span className="hero-line mt-6 md:mt-9">
                <span className="hero-tagline block text-[17px] sm:text-[20px] lg:text-[23px] text-white"
                  style={{ animationDelay: '2.5s' }}>
                  {TAGLINE}
                </span>
              </span>
              <span className="sr-only">
                하람 — 예식도우미, 예식 컨시어지, 예식사회자, 축가, 웨딩 포토부스, 웨딩홀 마케팅
              </span>
            </h1>

            <p className="hero-rise mt-6 mx-auto text-[16px] md:text-[17px] leading-[1.8] text-white/80 break-keep max-w-[34em]"
              style={{ animationDelay: '2.8s' }}>
              {BODY}
            </p>

            <div className="hero-rise mt-9 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: '3s' }}>
              <Link href="/services"
                className="inline-flex items-center h-[50px] px-7 bg-brand-deep text-white text-[15px] font-bold hover:bg-brand-darker transition-colors">
                서비스 둘러보기
              </Link>
              <Link href={CONTACT_HREF}
                className="inline-flex items-center h-[50px] px-7 border border-white/50 text-[15px] font-bold hover:bg-white hover:text-ink transition-colors">
                상담 문의
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 히어로에 걸치는 바로가기 띠 */}
      <div className="relative max-w-[1280px] mx-auto px-6">
        <ul className="relative -mt-14 md:-mt-16 bg-white shadow-[0_10px_40px_rgba(16,24,40,0.10)] grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {SHORTCUTS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex items-center gap-4 p-5 md:p-7 hover:bg-mist transition-colors">
                <span className="shrink-0 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-deep">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {item.icon === 'building' && <path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M3 21h18" />}
                    {item.icon === 'grid' && <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />}
                    {item.icon === 'chat' && <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12" />}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[17px] font-extrabold text-ink tracking-[-0.02em]">{item.title}</span>
                  <span className="block mt-1 text-[14px] text-ink/55 break-keep">{item.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
