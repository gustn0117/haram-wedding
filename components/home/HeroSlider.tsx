'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Hatch from '@/components/Hatch';
import { IconChevronLeft, IconChevronRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';

type Slide = {
  tab: string;
  hint: string;
  title: [string, string];
  body: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  image: string;
  imageSrc: string;
};

const SLIDES: Slide[] = [
  {
    tab: '하람 통합 운영',
    hint: '여섯 가지 서비스, 한 파트너',
    title: ['예식의 흐름을 다듬고,', '공간의 품격을 완성합니다'],
    body: '컨시어지, 사회, 축가, 포토부스부터 마케팅과 운영 프로그램까지. 하람이 예식장의 운영 파트너가 됩니다.',
    primary: { href: '/services', label: '서비스 둘러보기' },
    secondary: { href: CONTACT_HREF, label: '상담 문의' },
    image: '화이트 플라워로 장식한 호텔 웨딩홀 전경',
    imageSrc: '/images/hotel-white/main-quote-hotel-ballroom.png',
  },
  {
    tab: '예식 컨시어지',
    hint: '교육 이수 예식도우미',
    title: ['예식장의 하루를,', '하나의 흐름으로'],
    body: '항공·호텔 서비스 계열 인력 중 자체 교육을 통과한 예식도우미만 투입합니다. 하객 안내부터 퇴장까지 현장 전체를 맡습니다.',
    primary: { href: '/concierge', label: '예식 컨시어지 보기' },
    secondary: { href: '/partnership', label: '예식장 제휴 문의' },
    image: '예식장 로비의 안내 동선과 플라워 장식',
    imageSrc: '/images/hotel-white/concierge-hero.png',
  },
  {
    tab: '사회 · 축가',
    hint: '큐 시트에 맞춘 진행과 라이브',
    title: ['예식의 흐름을 만드는', '목소리와 단 한 곡'],
    body: '대본을 함께 다듬는 예식사회자와, 곡목과 키를 미리 맞추는 라이브 축가. 음향팀과 1초 단위로 맞물려 진행합니다.',
    primary: { href: '/host', label: '예식사회자 보기' },
    secondary: { href: '/vocal', label: '축가 보기' },
    image: '웨딩홀 무대의 사회자용 마이크와 큐시트',
    imageSrc: '/images/hotel-white/host-hero.png',
  },
  {
    tab: '웨딩 포토부스',
    hint: '스태프 상주 · 즉석 인화',
    title: ['식이 끝나도 손에 남는,', '그날의 한 장'],
    body: '운영 스태프가 상주해 촬영 안내부터 즉석 인화, 소모품 관리까지 맡습니다. 건당 운영과 월 대여 중 고를 수 있습니다.',
    primary: { href: '/photobooth', label: '웨딩 포토부스 보기' },
    secondary: { href: CONTACT_HREF, label: '상담 문의' },
    image: '웨딩홀에 설치한 포토부스와 인화 사진',
    imageSrc: '/images/hotel-white/photobooth-hero.png',
  },
  {
    tab: '예식장 솔루션',
    hint: '마케팅 · 취합 프로그램',
    title: ['홀을 채우는 일부터', '흩어진 예식 정보까지'],
    body: '예약률을 올리는 웨딩홀 마케팅과, 예약·식순·스태프 정보를 한 화면에 모으는 예식 취합 프로그램을 운영합니다.',
    primary: { href: '/marketing', label: '웨딩홀 마케팅 보기' },
    secondary: { href: '/program', label: '예식 취합 프로그램 보기' },
    image: '예식장 운영 서류와 체크리스트',
    imageSrc: '/images/hotel-white/contact-hero.png',
  },
];

const DURATION = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((next: number) => setIndex((next + SLIDES.length) % SLIDES.length), []);

  // 탭이 백그라운드로 가면 멈춘다
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // 모바일 스와이프
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
      className="relative h-[max(640px,min(92svh,880px))] overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
    >
      {/* 배경 이미지 */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: reduceMotion ? 1 : 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : DURATION / 1000 + 1, ease: 'linear' }}
          >
            <Hatch
              label={slide.image}
              src={slide.imageSrc}
              className="absolute inset-0"
              priority={index === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 가독성용 음영 */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,22,0.72)_0%,rgba(20,20,22,0.3)_50%,rgba(20,20,22,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent" />

      {/* 문구 */}
      <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center pt-24 md:pt-28 pb-40 md:pb-44">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            aria-live={paused ? 'polite' : 'off'}
          >
            <p className="text-[14px] md:text-[15px] font-semibold text-gold-light mb-5">{slide.tab}</p>
            {index === 0 ? (
              <h1 className="text-[36px] sm:text-[44px] lg:text-[60px] font-bold leading-[1.18] tracking-[-0.035em] max-w-[14em] break-keep">
                {slide.title[0]}<br />{slide.title[1]}
                <span className="sr-only"> — 하람 예식도우미, 예식 컨시어지, 예식사회자, 축가, 웨딩 포토부스</span>
              </h1>
            ) : (
              <h2 className="text-[36px] sm:text-[44px] lg:text-[60px] font-bold leading-[1.18] tracking-[-0.035em] max-w-[14em] break-keep">
                {slide.title[0]}<br />{slide.title[1]}
              </h2>
            )}
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-white/75 max-w-[30em] break-keep font-normal">
              {slide.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={slide.primary.href}
                className="inline-flex items-center h-[52px] px-7 rounded-full bg-gold-light text-ink text-[15px] font-bold hover:bg-white transition-colors">
                {slide.primary.label}
              </Link>
              <Link href={slide.secondary.href}
                className="inline-flex items-center h-[52px] px-7 rounded-full border border-white/40 text-white text-[15px] font-semibold hover:bg-white/10 hover:border-white transition-colors">
                {slide.secondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 좌우 화살표 */}
      <button type="button" aria-label="이전 슬라이드" onClick={() => go(index - 1)}
        className="hidden min-[1400px]:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white/80 hover:bg-white hover:text-ink hover:border-white transition-colors">
        <IconChevronLeft />
      </button>
      <button type="button" aria-label="다음 슬라이드" onClick={() => go(index + 1)}
        className="hidden min-[1400px]:flex absolute right-[116px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white/80 hover:bg-white hover:text-ink hover:border-white transition-colors">
        <IconChevronRight />
      </button>

      {/* 서비스 탭 (페이지네이션 겸 진행 표시) */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-[1200px] mx-auto px-6 pb-7 md:pb-10">
          <div className="flex items-center justify-between md:hidden mb-3 text-[13px] tabular-nums">
            <span className="font-semibold">{slide.tab}</span>
            <span className="text-white/50">{index + 1} / {SLIDES.length}</span>
          </div>
          <div role="tablist" aria-label="슬라이드 선택" className="grid grid-cols-5 gap-2 md:gap-6">
            {SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button key={s.tab} type="button" role="tab" aria-selected={active} aria-label={s.tab}
                  onClick={() => go(i)}
                  className="group text-left pt-0 md:pt-0">
                  <span className="relative block h-[2px] bg-white/20 overflow-hidden">
                    {active ? (
                      <span
                        key={`p-${index}`}
                        className="slide-progress absolute inset-0 bg-gold-light"
                        style={{ ['--slide-duration' as string]: `${DURATION}ms` }}
                        data-paused={paused}
                        onAnimationEnd={() => go(index + 1)}
                      />
                    ) : i < index ? (
                      <span className="absolute inset-0 bg-white/45" />
                    ) : null}
                  </span>
                  <span className="hidden md:flex items-baseline gap-3 pt-4">
                    <span className={`text-[13px] font-semibold tabular-nums transition-colors ${active ? 'text-gold-light' : 'text-white/40'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className={`block text-[16px] font-bold transition-colors ${active ? 'text-white' : 'text-white/55 group-hover:text-white/85'}`}>{s.tab}</span>
                      <span className={`block mt-1 text-[13px] transition-colors ${active ? 'text-white/60' : 'text-white/35'}`}>{s.hint}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
