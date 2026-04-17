'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: (d: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.9, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (d: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: (d: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Arr = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-[18px] h-[18px] text-[#b89d6a] shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1} opacity={0.25} />
    <path d="M8 12.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ConciergePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '35%']);
  const heroOp = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* ══════════════════════════════════════════
          HERO — Full viewport, cinematic
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black hero-corner-ornament">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
            alt="Concierge" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />
        </motion.div>
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="hero-noise" />

        <motion.div className="relative z-10 text-center px-6" style={{ opacity: heroOp }}>
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#b89d6a]/60" />
            <span className="tag">B2B Venue Partnership</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/60" />
          </motion.div>

          <motion.h1 initial="hidden" animate="show" custom={0.12} variants={fade}
            className="heading-en text-[50px] md:text-[80px] lg:text-[100px] text-white font-light tracking-[0.1em] leading-[1] mb-4">
            Concierge
          </motion.h1>

          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="heading-en text-[12px] md:text-[14px] text-white/25 tracking-[0.35em] uppercase mb-10">
            Premium Wedding Management
          </motion.p>

          <motion.p initial="hidden" animate="show" custom={0.28} variants={fade}
            className="text-[15px] md:text-[18px] text-white/50 font-light max-w-xl mx-auto leading-[1.8]">
            예식장과 직접 제휴하여<br className="md:hidden" /> 현장 운영의 모든 것을 책임집니다
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={0.4} variants={fade}
            className="flex flex-wrap justify-center gap-4 mt-12">
            <Link href="/contact" className="btn-gold bg-[#b89d6a] hover:bg-[#a38856]">
              <span>제휴 상담</span><Arr />
            </Link>
            <a href="#about" className="btn-ghost">
              <span>자세히 보기</span><Arr />
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-[1]" />

        <motion.div initial="hidden" animate="show" custom={0.5} variants={fade}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <svg className="w-5 h-8 text-white/25 mb-2" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth={1} />
            <line x1="10" y1="8" x2="10" y2="14" stroke="currentColor" strokeWidth={1} strokeLinecap="round" className="animate-pulse" />
          </svg>
          <span className="heading-en text-[9px] text-white/20 tracking-[0.25em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          B2B NOTICE STRIP
      ══════════════════════════════════════════ */}
      <section className="py-5 px-6 bg-[#FAF8F5] border-b border-[#b89d6a]/10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#b89d6a]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#b89d6a]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 16.5l-2.25-2.25m0 0L15 11.5l-2.5 2.5-4-4L2 16.5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3.5L7 7H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-3l-5-3.5z" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={1.2} />
              </svg>
            </div>
            <p className="text-[13px] text-gray-500">
              컨시어지는 <span className="text-[#b89d6a] font-normal">예식장 전용 B2B 서비스</span>입니다.
              개인 고객은 제휴 예식장을 통해 이용하실 수 있습니다.
            </p>
          </div>
          <Link href="/contact" className="text-[12px] text-[#b89d6a] whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all font-normal">
            제휴 예식장 확인 <Arr />
          </Link>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT — Staggered layout with stats
      ══════════════════════════════════════════ */}
      <section id="about" className="py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top row — text + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={slideLeft}>
              <span className="tag">About Concierge</span>
              <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-5 mb-8 tracking-tight">
                예식장의 가치를<br />현장에서 완성합니다
              </h2>
              <p className="text-[15px] text-gray-500 leading-[2] mb-6">
                하람 컨시어지는 예식장과 직접 제휴하여 운영되는 <span className="text-[#1a1a1a] font-normal">전문 현장 관리 서비스</span>입니다.
                하객 응대부터 식순 조율, 돌발 상황 대응, 업체 간 소통까지 — 예식장이 제공하는 서비스의 품격을 한 차원 끌어올립니다.
              </p>
              <p className="text-[15px] text-gray-500 leading-[2] mb-6">
                예식장의 공간 특성을 완벽히 이해한 전담 매니저가 상시 배치되어,
                매 예식마다 일관된 퀄리티를 보장합니다.
                신랑 신부는 물론 양가 부모님, 하객 한 분 한 분까지 — 모두가 만족하는 예식을 함께 만들어갑니다.
              </p>
              <p className="text-[15px] text-gray-500 leading-[2]">
                단순한 안내 인력이 아닙니다. 하람 컨시어지는 예식의 분위기를 읽고,
                흐름을 설계하며, 격식과 감동 사이의 균형을 잡는 <span className="text-[#1a1a1a] font-normal">현장 전문가</span>입니다.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={slideRight}>
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Concierge service" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#b89d6a] text-white p-7 md:p-9 max-w-[260px] z-10">
                  <p className="heading-en text-[11px] tracking-[0.2em] uppercase mb-3 opacity-60">Since 2019</p>
                  <p className="text-[15px] font-light leading-[1.8]">예식 현장 전문<br />운영 매니지먼트</p>
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full border border-[#b89d6a]/15 -z-10" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE DO — Visual service grid
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-6">
            <span className="tag">What We Do</span>
            <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-4 tracking-tight">
              컨시어지가 책임지는 영역
            </h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fade}
            className="text-[14px] text-gray-400 text-center max-w-xl mx-auto leading-relaxed mb-20">
            예식 당일 현장에서 일어나는 모든 일을 체계적으로 관리합니다.<br />
            아래의 모든 서비스는 예식장 맞춤형으로 설계됩니다.
          </motion.p>

          {/* Main 2-column feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {[
              {
                title: '하객 동선 설계 & 현장 안내',
                desc: '하객이 예식장에 도착하는 순간부터 퇴장까지의 모든 동선을 사전에 설계합니다. 축의금 접수대, 식사 공간, 대기실, 주차 안내까지 — 하객 한 분도 헤매지 않도록 체계적으로 관리합니다.',
                details: ['축의금 접수 및 방명록 관리', '하객 대기실 운영 및 음료 서비스 조율', '주차 안내 및 셔틀 운영 관리', '하객 퇴장 동선 안내 및 정리'],
                img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: '식순 타임라인 완벽 조율',
                desc: '예식의 모든 순서를 분 단위로 관리하며, 각 파트가 매끄럽게 이어지도록 조율합니다. 지연이 발생해도 전체 흐름에 영향이 없도록 실시간으로 타임라인을 조정합니다.',
                details: ['입장-주례-축가-세리머니 타임라인 관리', '예식-촬영-폐백 간 전환 조율', '지연 발생 시 실시간 스케줄 재조정', '리허설 진행 및 사전 동선 점검'],
                img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
              },
            ].map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={scaleIn}
                className="bg-white overflow-hidden group card-gold-border">
                <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                  <Image src={card.img} alt={card.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 right-8 text-[20px] md:text-[22px] text-white font-light leading-[1.4]">
                    {card.title}
                  </h3>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-[14px] text-gray-500 leading-[1.9] mb-6">{card.desc}</p>
                  <ul className="space-y-3">
                    {card.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-gray-400 leading-[1.7]">
                        <CheckIcon />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom 4-column service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4l-1.5 1.2C10 9 5 11.5 5 17c0 4.5 3 8.5 7.5 10.2.7.3 1.5.5 2.2.6.5.1 1 .2 1.3.2s.8-.1 1.3-.2c.7-.1 1.5-.3 2.2-.6C24 25.5 27 21.5 27 17c0-5.5-5-8-9.5-11.8L16 4z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11v5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
                    <circle cx="16" cy="20" r="1" fill="currentColor" />
                    <path d="M10 17h2m8 0h2" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
                  </svg>
                ),
                title: '돌발 상황 즉각 대응',
                desc: '음향 이상, 하객 혼선, 스케줄 변동 등 현장의 모든 변수에 즉각 대처합니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="8" width="14" height="11" rx="2" stroke="currentColor" strokeWidth={1} />
                    <path d="M17 12h8a2 2 0 012 2v7a2 2 0 01-2 2h-8" stroke="currentColor" strokeWidth={1} strokeLinecap="round" />
                    <circle cx="10" cy="13.5" r="1.5" stroke="currentColor" strokeWidth={0.8} />
                    <path d="M7 17.5c0-1 .8-2 3-2s3 1 3 2" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" />
                    <circle cx="22" cy="15.5" r="1.5" stroke="currentColor" strokeWidth={0.8} />
                    <path d="M19 19.5c0-1 .8-2 3-2s3 1 3 2" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" />
                    <path d="M10 26v-3m12 3v-3" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
                    <path d="M14 13l3 2-3 2" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
                  </svg>
                ),
                title: '업체 간 실시간 소통',
                desc: '사진, 영상, 꽃, 사회자, 음향 등 모든 업체와의 커뮤니케이션을 전담합니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4h12a2 2 0 012 2v20a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth={1} />
                    <path d="M10 4V2h8v2" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 10h8m-8 3.5h6m-6 3.5h7m-7 3.5h5" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" opacity={0.5} />
                    <path d="M24 8v16" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeDasharray="2 2" opacity={0.3} />
                    <path d="M26 10l-2-2-2 2m2-2v6" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" opacity={0.4} />
                    <rect x="9" y="9" width="2" height="2" rx="0.5" fill="currentColor" opacity={0.2} />
                    <rect x="9" y="12.5" width="2" height="2" rx="0.5" fill="currentColor" opacity={0.2} />
                  </svg>
                ),
                title: '예식장 전용 매뉴얼',
                desc: '구조, 동선, 시설 특성에 맞춘 전용 운영 매뉴얼을 설계합니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth={1} />
                    <path d="M8 24c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth={1} strokeLinecap="round" />
                    <path d="M23.5 8.5l3 3m0 0l3-3m-3 3V5" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" opacity={0.4} />
                    <path d="M12 27l1.5-3h5l1.5 3" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" opacity={0.3} />
                    <circle cx="16" cy="10" r="1.5" stroke="currentColor" strokeWidth={0.6} opacity={0.2} />
                    <path d="M4 27h24" stroke="currentColor" strokeWidth={0.6} strokeLinecap="round" opacity={0.15} />
                  </svg>
                ),
                title: 'VIP 하객 의전',
                desc: '양가 부모님, 주빈, VIP 하객을 위한 별도 의전 라인을 운영합니다.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.06} variants={fade}
                className="bg-white p-8 card-lift card-gold-border group">
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] group-hover:bg-[#b89d6a]/10 flex items-center justify-center mb-6 transition-colors duration-500 text-gray-300 group-hover:text-[#b89d6a]">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DAY TIMELINE — Horizontal scroll visual
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-6">
            <span className="tag">Wedding Day</span>
            <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-4 tracking-tight">
              예식 당일, 컨시어지의 하루
            </h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fade}
            className="text-[14px] text-gray-400 text-center max-w-lg mx-auto leading-relaxed mb-20">
            예식 4시간 전부터 마지막 하객이 떠날 때까지,<br />
            컨시어지의 모든 순간을 보여드립니다.
          </motion.p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] timeline-line md:-translate-x-[0.5px]" />

            {[
              { time: 'D-7', title: '사전 점검 & 리허설', desc: '예식장을 방문하여 시설 상태, 동선, 음향 장비를 점검하고, 당일 운영 시나리오를 리허설합니다. 업체들과 최종 타임라인을 확정합니다.', align: 'left' },
              { time: '-4h', title: '현장 세팅 & 최종 확인', desc: '예식 4시간 전 현장에 도착하여 안내 사인물, 접수대, 포토존, 대기 공간 등을 세팅합니다. 음향, 조명, 영상 장비의 최종 테스트를 진행합니다.', align: 'right' },
              { time: '-2h', title: '업체 브리핑 & 동선 확인', desc: '사진, 영상, 꽃, 사회자 등 모든 협력 업체에게 당일 타임라인과 주의사항을 전달합니다. 각 업체의 위치와 역할을 최종 확인합니다.', align: 'left' },
              { time: '-1h', title: '하객 맞이 시작', desc: '축의금 접수대를 오픈하고, 하객 안내를 시작합니다. VIP 하객과 양가 부모님의 의전을 준비하며, 대기 공간 음료 서비스를 시작합니다.', align: 'right' },
              { time: '본식', title: '식순 진행 총괄', desc: '입장부터 폐백까지 모든 식순을 실시간으로 관리합니다. 사회자, 음향, 조명과 즉각적으로 소통하며 매끄러운 진행을 이끕니다.', align: 'left' },
              { time: '+1h', title: '현장 정리 & 마무리', desc: '모든 하객이 퇴장한 후 현장을 깔끔하게 정리하고, 예식 운영 리포트를 작성하여 예식장에 전달합니다.', align: 'right' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={0} variants={item.align === 'left' ? slideLeft : slideRight}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 pl-12 md:pl-0 ${
                  item.align === 'left' ? 'md:flex-row md:text-right' : 'md:flex-row-reverse md:text-left'
                }`}>
                {/* Timeline marker */}
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                  <svg className="w-[18px] h-[18px] text-[#b89d6a]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="4" fill="currentColor" />
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
                  </svg>
                </div>

                <div className={`md:w-1/2 ${item.align === 'left' ? 'md:pr-16' : 'md:pl-16'}`}>
                  <span className="heading-en text-[13px] text-[#b89d6a] tracking-[0.1em]">{item.time}</span>
                  <h4 className="text-[17px] font-normal mt-2 mb-3">{item.title}</h4>
                  <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE BREAK — Cinematic
      ══════════════════════════════════════════ */}
      <section className="relative py-36 md:py-52 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=2000&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={scaleIn}
          className="relative z-10 text-center px-6">
          <p className="heading-en text-[13px] text-white/25 tracking-[0.35em] uppercase mb-8">Our Philosophy</p>
          <p className="text-[24px] md:text-[38px] text-white font-extralight leading-[1.8] max-w-2xl mx-auto tracking-tight">
            결혼식은 한 번뿐이기에,<br />한 치의 빈틈도 허용하지 않습니다
          </p>
          <div className="flex items-center justify-center gap-3 mt-10">
            <svg className="w-16 h-4 text-[#b89d6a]/30" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth={0.5} />
              <path d="M28 8l4-3v6l-4-3z" fill="currentColor" opacity={0.5} />
            </svg>
            <svg className="w-5 h-5 text-[#b89d6a]/30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2l2.47 5.01L18 7.75l-4 3.9.94 5.5L10 14.39l-4.94 2.76.94-5.5-4-3.9 5.53-.74L10 2z" stroke="currentColor" strokeWidth={0.8} strokeLinejoin="round" />
            </svg>
            <svg className="w-16 h-4 text-[#b89d6a]/30 rotate-180" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth={0.5} />
              <path d="M28 8l4-3v6l-4-3z" fill="currentColor" opacity={0.5} />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNERSHIP FLOW — Elegant process
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Partnership Flow</span>
            <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-4 tracking-tight">
              제휴부터 운영까지
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
              예식장의 특성과 니즈에 맞춘 단계별 도입 프로세스
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 bg-white">
            {[
              { step: '01', title: '제휴 상담', desc: '예식장의 규모, 월간 예식 건수, 기존 운영 방식을 파악하여 최적의 서비스 구성을 제안합니다.', detail: '비용 구조 / 서비스 범위 협의' },
              { step: '02', title: '현장 답사', desc: '예식장을 직접 방문하여 공간 구조, 하객 동선, 시설 현황, 음향·조명 환경을 분석합니다.', detail: '동선 분석 / 시설 점검 리포트' },
              { step: '03', title: '매뉴얼 설계', desc: '답사 결과를 바탕으로 예식장 전용 운영 매뉴얼, 체크리스트, 비상 대응 시나리오를 제작합니다.', detail: '전용 매뉴얼 / 체크리스트 제작' },
              { step: '04', title: '전담 운영', desc: '교육받은 전문 매니저를 배치하여 예식장 운영을 시작합니다. 월간 리포트로 성과를 공유합니다.', detail: '전담 매니저 배치 / 월간 리포트' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className={`text-center py-14 px-8 ${i < 3 ? 'lg:border-r border-b lg:border-b-0 border-gray-100' : ''} group hover:bg-[#FAF8F5] transition-colors`}>
                <span className="heading-en text-[40px] text-gray-100 group-hover:text-[#b89d6a]/30 transition-colors">{item.step}</span>
                <h4 className="text-[17px] font-normal mt-5 mb-4">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.9] mb-5 max-w-[200px] mx-auto">{item.desc}</p>
                <span className="text-[11px] text-[#b89d6a]/70 font-normal">{item.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENEFITS — Dark premium section
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 bg-[#111] dark-pattern">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-6">
            <span className="tag">Benefits</span>
            <h2 className="text-[30px] md:text-[44px] text-white font-extralight leading-[1.4] mt-4 tracking-tight">
              예식장이 얻는 가치
            </h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fade}
            className="text-[14px] text-white/35 text-center max-w-xl mx-auto leading-relaxed mb-20">
            하람 컨시어지 도입은 단순한 외주가 아닙니다.<br />
            예식장의 브랜드 가치를 높이는 전략적 파트너십입니다.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              {
                n: '01',
                title: '고객 만족도 & 재추천율 상승',
                desc: '전문 매니저의 세심한 현장 관리로 예식장 이용 고객의 만족도가 눈에 띄게 향상됩니다. 높은 만족도는 자연스러운 입소문으로 이어집니다.',
                highlight: '만족도 향상',
              },
              {
                n: '02',
                title: '운영 리스크 제로화',
                desc: '돌발 상황에 대한 즉각적 대응 체계와 사전 시나리오 플랜으로, 예식 현장에서 발생할 수 있는 모든 리스크를 사전에 차단합니다.',
                highlight: '리스크 사전 차단',
              },
              {
                n: '03',
                title: '프리미엄 브랜드 포지셔닝',
                desc: '컨시어지 서비스를 예식장 패키지에 포함시켜 프리미엄 이미지를 구축합니다. 타 예식장과 차별화된 부가가치를 제공합니다.',
                highlight: '프리미엄 차별화',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-white/8 group hover:border-[#b89d6a]/30 transition-all hover:bg-white/[0.02]">
                <span className="heading-en text-[36px] text-white/8 group-hover:text-[#b89d6a]/25 transition-colors">{item.n}</span>
                <h3 className="text-[17px] font-normal text-white mt-5 mb-4">{item.title}</h3>
                <p className="text-[13px] text-white/40 leading-[1.9] mb-6">{item.desc}</p>
                <span className="inline-block px-4 py-1.5 bg-[#b89d6a]/10 text-[#b89d6a] text-[11px] font-normal tracking-wide">
                  {item.highlight}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                n: '04',
                title: '내부 인력 부담 절감',
                desc: '현장 운영 전담 인력을 외부 전문가로 대체하여, 예식장 내부 직원은 핵심 업무에만 집중할 수 있습니다. 인건비 구조 최적화에 기여합니다.',
              },
              {
                n: '05',
                title: '데이터 기반 운영 개선',
                desc: '매 예식 후 운영 리포트를 제공하여 서비스 품질을 지속적으로 모니터링하고 개선합니다. 월간 종합 리포트로 성과를 한눈에 파악할 수 있습니다.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-white/8 group hover:border-[#b89d6a]/30 transition-all hover:bg-white/[0.02]">
                <span className="heading-en text-[36px] text-white/8 group-hover:text-[#b89d6a]/25 transition-colors">{item.n}</span>
                <h3 className="text-[17px] font-normal text-white mt-5 mb-4">{item.title}</h3>
                <p className="text-[13px] text-white/40 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BEFORE & AFTER — Comparison
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Comparison</span>
            <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-4 tracking-tight">
              도입 전 vs 도입 후
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="bg-white overflow-hidden">
              <div className="grid grid-cols-3 border-b border-gray-100">
                <div className="p-6 text-[12px] text-gray-400 font-normal">항목</div>
                <div className="p-6 text-[12px] text-gray-400 font-normal text-center border-x border-gray-100">도입 전</div>
                <div className="p-6 text-[12px] text-[#b89d6a] font-normal text-center">도입 후</div>
              </div>
              {[
                { item: '현장 운영', before: '내부 직원 임시 배치', after: '전문 매니저 상시 배치' },
                { item: '하객 안내', before: '기본 안내 수준', after: '맞춤 동선 설계 + 의전' },
                { item: '돌발 대응', before: '상황 발생 후 대처', after: '사전 시나리오 + 즉각 대응' },
                { item: '업체 소통', before: '예식장 담당자 겸임', after: '전담 매니저 원스톱 관리' },
                { item: '운영 매뉴얼', before: '없음 또는 범용', after: '예식장 전용 매뉴얼' },
                { item: '사후 관리', before: '없음', after: '예식별 리포트 + 월간 분석' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 compare-row ${i < 5 ? 'border-b border-gray-50' : ''}`}>
                  <div className="p-5 md:p-6 text-[13px] font-normal">{row.item}</div>
                  <div className="p-5 md:p-6 text-[13px] text-gray-400 text-center border-x border-gray-50">{row.before}</div>
                  <div className="p-5 md:p-6 text-[13px] text-[#b89d6a] text-center font-normal">{row.after}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS — Partner voices
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Partner Voice</span>
            <h2 className="text-[30px] md:text-[44px] font-extralight leading-[1.4] mt-4 tracking-tight">
              제휴 예식장의 이야기
            </h2>
            <p className="text-[14px] text-gray-400 mt-4">실제 파트너 예식장 관계자분들의 평가입니다</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[
              { venue: '서울 L웨딩홀', person: '운영팀장 김○○', period: '제휴 1년 2개월', text: '하람 컨시어지 도입 후 고객 불만 건수가 확연히 줄었습니다. 특히 하객 안내 관련 컴플레인이 거의 사라졌어요. 내부 직원들도 본업에 집중할 수 있어 전반적인 운영 효율이 올라갔습니다. 처음엔 반신반의했지만, 지금은 없으면 안 되는 파트너입니다.' },
              { venue: '강남 S컨벤션', person: '대표이사 박○○', period: '제휴 8개월', text: '예식장 운영에서 가장 어려운 부분이 현장 인력 관리였습니다. 하람에 컨시어지를 맡기면서 이 고민이 해결됐어요. 무엇보다 매 예식 후 제공되는 운영 리포트가 정말 유용합니다. 데이터를 기반으로 개선할 점이 명확히 보이니까요.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 bg-[#FAF8F5] relative testimonial-premium">
                <svg className="absolute top-5 right-6 w-12 h-12 text-[#b89d6a]/8" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 24c-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 2 .2 2.8.7C18.7 10.3 21 6 21 6l3 1.5S19.5 16 14 24zm18 0c-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 2 .2 2.8.7C36.7 10.3 39 6 39 6l3 1.5S37.5 16 32 24z" />
                </svg>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#b89d6a]" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.5l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.88 4.29 12.9l.71-4.12-3-2.93 4.15-.6L8 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-500 leading-[2] mb-8">{t.text}</p>
                <div className="pt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-normal">{t.venue}</p>
                    <p className="text-[12px] text-gray-400 mt-1">{t.person}</p>
                  </div>
                  <span className="text-[11px] text-[#b89d6a]/60 font-normal">{t.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { venue: '판교 가든웨딩', person: '마케팅 실장', text: '컨시어지 서비스를 프리미엄 패키지에 포함시킨 이후, 해당 상품 계약률이 35% 상승했습니다.' },
              { venue: '수원 그랜드홀', person: '부대표', text: '돌발 상황에 대한 대처가 빠르고 전문적입니다. 이제 하람 없이는 운영이 어렵다고 느낄 정도예요.' },
              { venue: '일산 W하우스', person: '웨딩팀장', text: '리허설부터 마무리까지 완벽하게 케어해주니, 예식장으로서 신뢰를 줄 수 있어 좋습니다.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-7 border border-gray-100 group hover:border-[#b89d6a]/20 transition-colors testimonial-premium">
                <p className="text-[13px] text-gray-500 leading-[1.9] mb-6">{t.text}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[13px] font-normal">{t.venue}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{t.person}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — Expanded
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">FAQ</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: '개인 고객도 직접 신청할 수 있나요?', a: '컨시어지는 예식장 전용 B2B 서비스로, 개인 신청은 받지 않습니다. 하람과 제휴된 예식장에서 예식을 진행하시면 자연스럽게 컨시어지 서비스를 받으실 수 있습니다.' },
              { q: '제휴 비용은 어떻게 책정되나요?', a: '예식장 규모, 월간 예식 건수, 필요 서비스 범위에 따라 맞춤 견적을 제공합니다. 월 정액제와 건별 과금제 중 선택할 수 있으며, 상담을 통해 상세히 안내해 드립니다.' },
              { q: '기존 운영 인력과의 역할 분담은 어떻게 하나요?', a: '제휴 초기 현장 답사와 매뉴얼 설계 단계에서 예식장 내부 인력과의 역할 분담을 사전에 명확히 설계합니다. 중복 없이 효율적으로 운영되며, 내부 직원분들과의 협업 교육도 진행합니다.' },
              { q: '최소 계약 기간이 있나요?', a: '기본 3개월 단위로 계약하며, 이후 월 단위 연장이 가능합니다. 도입을 고민 중이시라면, 1회 체험 운영도 가능하니 부담 없이 상담해 주세요.' },
              { q: '지방 예식장도 제휴 가능한가요?', a: '서울, 경기 외 지역도 제휴 가능합니다. 현장 답사 후 운영 가능 여부와 매니저 배치 계획을 안내해 드립니다. 현재 수도권 외 부산, 대전 지역에서도 운영 중입니다.' },
              { q: '컨시어지 매니저는 어떤 교육을 받나요?', a: '모든 매니저는 입사 후 4주간 집중 교육을 받습니다. 예식 현장 운영, 하객 응대, 돌발 상황 대응, 의전 매너 등의 전문 커리큘럼을 이수한 후 현장에 배치됩니다.' },
              { q: '하람의 다른 서비스(포토부스, 전문사회)와 함께 이용할 수 있나요?', a: '물론입니다. 포토부스, 전문사회와 컨시어지를 통합 운영하면 하나의 팀이 현장 전체를 관리하므로 퀄리티와 효율성이 더욱 높아집니다. 통합 패키지 할인도 제공됩니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.04} variants={fade}
                className="bg-white p-7 md:p-8 faq-item group hover:shadow-sm transition-shadow">
                <h4 className="text-[15px] font-normal mb-4 flex items-start gap-3">
                  <span className="heading-en text-[#b89d6a] shrink-0 text-[15px]">Q.</span>
                  {item.q}
                </h4>
                <div className="pl-7 border-l-2 border-[#b89d6a]/15">
                  <p className="text-[13px] text-gray-400 leading-[1.9]">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Grand finale
      ══════════════════════════════════════════ */}
      <section className="relative py-36 md:py-52 px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-25">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
            alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={scaleIn}
          className="max-w-3xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#b89d6a]/40" />
            <span className="tag">Partnership</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/40" />
          </div>

          <h2 className="text-[30px] md:text-[48px] text-white font-extralight leading-[1.4] mb-6 tracking-tight">
            예식장의 새로운 기준이<br />되어 드리겠습니다
          </h2>
          <p className="text-[15px] text-white/40 mb-4 leading-relaxed max-w-md mx-auto">
            예식장의 서비스 품질을 한 단계 높이고 싶으시다면<br />
            하람 컨시어지와 파트너가 되어주세요
          </p>
          <p className="text-[12px] text-white/20 mb-12">※ 개인 고객은 제휴 예식장을 통해 이용하실 수 있습니다</p>

          <p className="heading-en text-[40px] md:text-[56px] text-[#b89d6a] mb-14">
            010-7930-1332
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-[#b89d6a] hover:bg-[#a38856]">
              <span>제휴 상담 신청</span><Arr />
            </Link>
            <a href="tel:010-7930-1332" className="btn-ghost">
              <span>전화 연결</span><Arr />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 pt-10 border-t border-white/10">
            {['서울 L웨딩홀', '강남 S컨벤션', '판교 가든웨딩', '수원 그랜드홀', '일산 W하우스'].map((v, i) => (
              <span key={i} className="hidden md:inline text-[11px] text-white/20 heading-en tracking-wide">{v}</span>
            ))}
            <span className="md:hidden text-[11px] text-white/20">제휴 예식장</span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
