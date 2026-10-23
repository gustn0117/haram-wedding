'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';

type Slide = {
  /** 하단 점 버튼의 설명 — 화면에는 보이지 않는다 */
  tab: string;
  /** 제목 위 작은 라벨. 없으면 표시하지 않는다 */
  hint?: string;
  title: [string, string];
  body: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  image: string;
  imageSrc: string;
};

const SLIDES: Slide[] = [
  {
    tab: '하람 소개',
    title: ['결혼식의 모든 것을 맡는', '웨딩 종합 매니지먼트'],
    body: '예식도우미와 컨시어지, 사회와 축가, 웨딩 포토부스까지 하람이 직접 운영합니다. 인력과 진행, 장비, 마케팅을 따로 계약할 필요가 없습니다.',
    primary: { href: '/services', label: '서비스 둘러보기' },
    secondary: { href: CONTACT_HREF, label: '상담 문의' },
    image: '예식 직전의 웨딩홀과 음향 콘솔',
    imageSrc: '/images/editorial-2026/host-stage.webp',
  },
  {
    tab: '예식 컨시어지',
    hint: '교육 이수 예식도우미',
    title: ['예식장의 하루를,', '하나의 흐름으로'],
    body: '항공·호텔 서비스 계열 인력 중 자체 교육을 통과한 예식도우미만 투입합니다. 하객 안내부터 퇴장까지 현장 전체를 맡습니다.',
    primary: { href: '/concierge', label: '예식 컨시어지 보기' },
    secondary: { href: '/partnership', label: '예식장 제휴 문의' },
    image: '예식장 로비의 안내 동선과 플라워 장식',
    imageSrc: '/images/editorial-2026/concierge-desk.webp',
  },
  {
    tab: '사회 · 축가',
    hint: '큐 시트에 맞춘 진행과 라이브',
    title: ['예식의 흐름을 만드는', '목소리와 단 한 곡'],
    body: '대본을 함께 다듬는 예식사회자와, 곡목과 키를 미리 맞추는 라이브 축가. 음향팀과 1초 단위로 맞물려 진행합니다.',
    primary: { href: '/host', label: '예식사회자 보기' },
    secondary: { href: '/vocal', label: '축가 보기' },
    image: '웨딩홀 무대의 사회자용 마이크와 큐시트',
    imageSrc: '/images/editorial-2026/host-vocal.webp',
  },
  {
    tab: '웨딩 포토부스',
    hint: '스태프 상주 · 즉석 인화',
    title: ['식이 끝나도 손에 남는,', '그날의 한 장'],
    body: '운영 스태프가 상주해 촬영 안내부터 즉석 인화, 소모품 관리까지 맡습니다. 건당 운영과 월 대여 중 고를 수 있습니다.',
    primary: { href: '/photobooth', label: '웨딩 포토부스 보기' },
    secondary: { href: CONTACT_HREF, label: '상담 문의' },
    image: '웨딩홀에 설치한 포토부스와 인화 사진',
    imageSrc: '/images/editorial-2026/photobooth.webp',
  },
  {
    tab: '예식장 솔루션',
    hint: '마케팅 · 취합 프로그램',
    title: ['홀을 채우는 일부터', '흩어진 예식 정보까지'],
    body: '예약률을 올리는 웨딩홀 마케팅과, 예약·식순·스태프 정보를 한 화면에 모으는 예식 취합 프로그램을 운영합니다.',
    primary: { href: '/marketing', label: '웨딩홀 마케팅 보기' },
    secondary: { href: '/program', label: '예식 취합 프로그램 보기' },
    image: '예식장 운영 서류와 체크리스트',
    imageSrc: '/images/editorial-2026/operations.webp',
  },
];

const DURATION = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((next: number) => setIndex((next + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(timer);
  }, [index, paused, reduceMotion, go]);

  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchEnd = (x: number) => {
    if (touchX === null) return;
    const dx = x - touchX;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
    setTouchX(null);
  };

  const slide = SLIDES[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="하람 주요 서비스"
      className="relative bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
    >
      <div className="relative h-[min(78vh,680px)] min-h-[480px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={s.tab} aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={s.imageSrc} alt={i === index ? s.image : ''} fill priority={i === 0} sizes="100vw"
              className={`object-cover ${i === index ? 'hero-kenburns' : ''}`} key={`${s.tab}-${i === index ? index : 'idle'}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,20,0.68)_0%,rgba(10,13,20,0.58)_45%,rgba(10,13,20,0.78)_100%)]" />
        {/* 문구 뒤쪽만 한 겹 더 눌러 글자가 사진에 묻히지 않게 한다 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,rgba(8,10,16,0.45)_0%,rgba(8,10,16,0)_100%)]" />

        <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col items-center justify-center text-center pb-14 md:pb-16">
          {/* key 가 바뀌면 등장 애니메이션이 다시 재생된다 */}
          <div key={index} aria-live={paused ? 'polite' : 'off'} className="max-w-[46rem]">
            {slide.hint && (
              <p className="hero-rise flex items-center justify-center gap-3 mb-4 text-[14px] md:text-[15px] font-semibold text-white/85">
                {slide.tab}
                <span className="w-px h-3.5 bg-white/40" aria-hidden />
                <span className="font-normal text-white/65">{slide.hint}</span>
              </p>
            )}
            {index === 0 ? (
              <h1 className="hero-title text-[34px] sm:text-[46px] lg:text-[58px] break-keep">
                <span className="hero-line"><span style={{ animationDelay: '80ms' }}>{slide.title[0]}</span></span>
                <span className="hero-line"><span className="hero-accent" style={{ animationDelay: '220ms' }}>{slide.title[1]}</span></span>
                <span className="sr-only"> — 예식도우미, 예식 컨시어지, 예식사회자, 축가, 웨딩 포토부스, 웨딩홀 마케팅</span>
              </h1>
            ) : (
              <h2 className="hero-title text-[34px] sm:text-[46px] lg:text-[58px] break-keep">
                <span className="hero-line"><span style={{ animationDelay: '80ms' }}>{slide.title[0]}</span></span>
                <span className="hero-line"><span className="hero-accent" style={{ animationDelay: '220ms' }}>{slide.title[1]}</span></span>
              </h2>
            )}
            <p className="hero-rise mt-6 mx-auto text-[16px] md:text-[17px] leading-[1.8] text-white/80 break-keep max-w-[34em]" style={{ animationDelay: '420ms' }}>
              {slide.body}
            </p>
            <div className="hero-rise mt-9 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: '560ms' }}>
              <Link href={slide.primary.href}
                className="inline-flex items-center h-[50px] px-7 bg-brand-deep text-white text-[15px] font-bold hover:bg-brand-darker transition-colors">
                {slide.primary.label}
              </Link>
              <Link href={slide.secondary.href}
                className="inline-flex items-center h-[50px] px-7 border border-white/50 text-[15px] font-bold hover:bg-white hover:text-ink transition-colors">
                {slide.secondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* 좌우 원형 버튼 */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
          <button type="button" aria-label="이전 슬라이드" onClick={() => go(index - 1)}
            className="w-12 h-12 rounded-full border border-white/45 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
            <IconChevronLeft />
          </button>
          <button type="button" aria-label="다음 슬라이드" onClick={() => go(index + 1)}
            className="w-12 h-12 rounded-full border border-white/45 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
            <IconChevronRight />
          </button>
        </div>

        {/* 점 + 일시정지 */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 bottom-7 md:bottom-8 flex items-center gap-3 z-10 max-w-[1280px]">
          <div role="tablist" aria-label="슬라이드 선택" className="flex items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button key={s.tab} type="button" role="tab" aria-selected={i === index} aria-label={s.tab}
                onClick={() => go(i)}
                className={`w-2.5 h-2.5 rounded-full border border-white transition-colors ${i === index ? 'bg-white' : 'bg-transparent'}`} />
            ))}
          </div>
          <button type="button" onClick={() => setPaused((v) => !v)}
            aria-label={paused ? '자동 넘김 시작' : '자동 넘김 멈춤'}
            className="ml-1 w-7 h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            {paused ? (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* 히어로에 걸치는 바로가기 띠 */}
      <div className="relative max-w-[1280px] mx-auto px-6">
        <ul className="relative -mt-14 md:-mt-16 bg-white shadow-[0_10px_40px_rgba(16,24,40,0.10)] grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {[
            { href: '/partnership', title: '예식장 제휴', desc: '현장 운영을 통째로 맡기고 싶다면', icon: 'building' },
            { href: '/services', title: '서비스 안내', desc: '컨시어지 · 사회 · 축가 · 포토부스', icon: 'grid' },
            { href: CONTACT_HREF, title: '상담 문의', desc: '예식 날짜와 조건을 알려주세요', icon: 'chat' },
          ].map((item) => (
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
