'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Arr = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroP, [0, 1], ['0%', '25%']);
  const heroOp = useTransform(heroP, [0, 0.6], [1, 0]);
  const heroSc = useTransform(heroP, [0, 1], [1, 1.1]);

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* ────── HERO ────── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black hero-corner-ornament">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroSc }}>
          <Image src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="HARAM Wedding" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="hero-noise" />

        <motion.div className="relative z-10 text-center px-6" style={{ opacity: heroOp }}>
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b89d6a]/40" />
            <span className="tag">Wedding Management</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b89d6a]/40" />
          </motion.div>

          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="heading-en text-[56px] md:text-[90px] lg:text-[120px] text-white font-light tracking-[0.12em] leading-[1] mb-4">
            HARAM
          </motion.h1>

          <motion.p initial="hidden" animate="show" custom={0.18} variants={fade}
            className="heading-en text-[13px] md:text-[15px] text-white/30 tracking-[0.4em] uppercase mb-10">
            Precious Person in Heaven
          </motion.p>

          <motion.p initial="hidden" animate="show" custom={0.25} variants={fade}
            className="text-[15px] md:text-[17px] text-white/50 font-light mb-12 max-w-md mx-auto leading-relaxed">
            예식의 품질은 현장에서 결정됩니다
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={0.35} variants={fade}
            className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>상담 문의</span><Arr />
            </Link>
            <Link href="#services" className="btn-ghost">
              <span>서비스 보기</span><Arr />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial="hidden" animate="show" custom={0.5} variants={fade}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <svg className="w-5 h-8 text-white/20 mb-2" viewBox="0 0 20 32" fill="none">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth={1} />
            <line x1="10" y1="8" x2="10" y2="14" stroke="currentColor" strokeWidth={1} strokeLinecap="round" className="animate-pulse" />
          </svg>
          <span className="heading-en text-[9px] text-white/15 tracking-[0.25em] uppercase">Scroll</span>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ────── INTRO ────── */}
      <section className="py-28 md:py-40 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden img-reveal">
                <Image src="/images/hotel-white/main-intro-hotel-hall.png"
                  alt="Wedding" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b89d6a]/15 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-[#b89d6a]/20" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <span className="tag">About Haram</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              결혼식다운 결혼식을 만듭니다
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              결혼식의 완성도는 기획이나 설명이 아니라 당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
              <span className="text-[#1a1a1a] font-normal"> 경험을 바탕으로 관리하는 회사</span>입니다.
            </p>

            <Link href="/contact" className="btn-dark-outline">
              <span>자세히 알아보기</span><Arr />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────── DIVIDER ────── */}
      <div className="ornament-divider">
        <svg className="w-4 h-4 text-[#b89d6a]/25" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0l2 6h6l-5 3.5 2 6.5-5-4-5 4 2-6.5L0 6h6z" />
        </svg>
      </div>

      {/* ────── MARQUEE ────── */}
      <div className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {['Concierge', 'Photobooth', 'Professional Host', 'Wedding Management', 'Premium Service', 'Concierge', 'Photobooth', 'Professional Host'].map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="heading-en text-[15px] text-gray-300 whitespace-nowrap">{t}</span>
                  <span className="w-1.5 h-1.5 bg-[#b89d6a]/30 rotate-45 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ────── SERVICES ────── */}
      <section id="services" className="py-28 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="tag">Services</span>
              <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
                하람이 제공하는 서비스
              </h2>
            </div>
            <Link href="/contact" className="btn-dark-outline self-start md:self-auto">
              <span>전체 문의</span><Arr />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: '/photobooth', img: '/images/hotel-white/main-service-photobooth.png', title: '포토부스', sub: 'Photobooth', desc: '하객에게 추억을, 부부에게 감동을 선물합니다' },
              { href: '/host', img: '/images/hotel-white/main-service-host.png', title: '전문사회', sub: 'Host', desc: '격식과 감동 사이, 완벽한 균형의 MC' },
              { href: '/concierge', img: '/images/hotel-white/main-service-concierge.png', title: '컨시어지', sub: 'Concierge · B2B', desc: '예식장과 제휴하여 현장 운영을 책임집니다' },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i * 0.1} variants={fade}>
                <Link href={card.href} className="block group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Corner ornament on card */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#b89d6a]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="heading-en text-[12px] text-white/50 mb-2">{card.sub}</p>
                      <h3 className="text-[22px] text-white font-light">{card.title}</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-400 leading-[1.8] mb-3">{card.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] text-[#b89d6a] group-hover:gap-3 transition-all">
                    자세히 보기 <Arr />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PACKAGE ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Package</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              통합 패키지 서비스
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
              포토부스, 전문사회를 함께 이용하시면 하나의 팀이 현장 전체를 관리하여<br className="hidden md:inline" />
              더 높은 퀄리티와 효율성을 경험하실 수 있습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: '포토부스 단독',
                items: ['맞춤 디자인 프레임', '무제한 촬영 + 즉석 인화', '전문 스태프 운영', '디지털 데이터 제공', '소품 세트 포함'],
              },
              {
                title: '전문사회 단독',
                items: ['사전 미팅 & 스토리 파악', '맞춤형 식순 구성', '리허설 참여', '음향·조명 연동 관리', '당일 현장 진행'],
              },
              {
                title: '통합 패키지',
                highlight: true,
                items: ['포토부스 + 전문사회 전체 포함', '하나의 팀이 통합 운영', '현장 커뮤니케이션 일원화', '패키지 할인 적용', '우선 예약 배정'],
              },
            ].map((pkg, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className={`p-8 md:p-10 card-inner-glow group ${
                  pkg.highlight
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white border border-gray-100'
                }`}>
                {pkg.highlight && (
                  <span className="inline-block px-3 py-1 bg-[#b89d6a] text-white text-[10px] tracking-wide mb-4">RECOMMEND</span>
                )}
                <h3 className="text-[18px] font-normal mb-6">{pkg.title}</h3>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item, j) => (
                    <li key={j} className={`flex items-start gap-3 text-[13px] leading-[1.7] ${
                      pkg.highlight ? 'text-white/60' : 'text-gray-400'
                    }`}>
                      <svg className={`w-4 h-4 shrink-0 mt-[2px] ${pkg.highlight ? 'text-[#b89d6a]' : 'text-[#b89d6a]/60'}`}
                        viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M3 8l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`inline-flex items-center gap-2 text-[12px] ${
                  pkg.highlight ? 'text-[#b89d6a] hover:text-white' : 'text-[#b89d6a]'
                } transition-colors`}>
                  상담 문의 <Arr />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── QUOTE BREAK ────── */}
      <section className="relative py-36 md:py-48 overflow-hidden hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="/images/hotel-white/main-quote-hotel-ballroom.png"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="hero-pattern" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6 premium-quote">
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            하객의 첫인상은<br />공간이 아니라 사람이 만듭니다
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b89d6a]/30" />
            <svg className="w-4 h-4 text-[#b89d6a]/25" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 6h6l-5 3.5 2 6.5-5-4-5 4 2-6.5L0 6h6z" />
            </svg>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b89d6a]/30" />
          </div>
        </motion.div>
      </section>

      {/* ────── WHY HARAM ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16">
            <span className="tag">Why Haram</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람을 선택하는 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n: '01', title: '현장 중심의 실전 경험', desc: '수많은 예식 현장에서 쌓은 경험으로 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.' },
              { n: '02', title: '통합 서비스 원스톱 관리', desc: '포토부스, 전문사회를 하나의 팀이 관리하고, 예식장 제휴 컨시어지로 현장을 완성합니다.' },
              { n: '03', title: '맞춤형 운영 설계', desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.' },
              { n: '04', title: '검증된 파트너십', desc: '다수의 예식장과 정식 제휴를 맺고, 높은 고객 만족도를 유지하고 있습니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-gray-100 card-lift card-inner-glow group hover:border-[#b89d6a]/30">
                <span className="heading-en text-[32px] text-gray-100 group-hover:text-[#b89d6a]/20 transition-colors">{item.n}</span>
                <h3 className="text-[16px] font-normal mt-4 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROCESS ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Process</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람과 함께하는 과정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: '상담', desc: '전화·DM으로 맞춤 상담을 시작합니다' },
              { step: '02', title: '설계', desc: '예식에 맞는 운영 매뉴얼을 제작합니다' },
              { step: '03', title: '리허설', desc: '현장에서 사전 점검을 진행합니다' },
              { step: '04', title: '진행', desc: '당일 현장을 완벽하게 운영합니다' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className={`text-center py-12 px-6 group hover:bg-white/60 transition-all duration-500 ${i < 3 ? 'md:border-r border-b md:border-b-0 border-gray-200/60' : ''}`}>
                <span className="heading-en text-[28px] text-[#b89d6a]/30 group-hover:text-[#b89d6a]/60 transition-colors">{item.step}</span>
                <h4 className="text-[17px] font-normal mt-3 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIALS ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Review</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              고객의 이야기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: '김○○', loc: '강남', service: '포토부스 + 전문사회', text: '하람 덕분에 예식 당일 아무런 걱정 없이 즐길 수 있었어요. 하객분들도 너무 좋았다고 칭찬하셨습니다.' },
              { name: '이○○', loc: '판교', service: '포토부스', text: '포토부스가 정말 인기 있었어요! 하객분들이 줄 서서 찍으셨고, 포토북도 너무 예쁘게 나왔어요.' },
              { name: '박○○', loc: '수원', service: '전문사회', text: '사회자분의 진행이 자연스럽고 격식 있었어요. 부모님도 너무 만족하셨습니다. 강력 추천합니다!' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="p-8 bg-[#FAF8F5] group testimonial-premium card-inner-glow">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-[#b89d6a]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1.5l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.88 4.29 12.9l.71-4.12-3-2.93 4.15-.6L8 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-500 leading-[1.9] mb-8">{t.text}</p>
                <div className="pt-5 border-t border-gray-200/60">
                  <p className="text-[13px] font-normal">{t.name} · {t.loc}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{t.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── FAQ ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">FAQ</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: '예약은 얼마나 전에 해야 하나요?', a: '결혼식 2~3개월 전에 예약하시는 것을 권장합니다. 인기 시즌(봄, 가을)에는 더 일찍 예약해 주시면 원활한 준비가 가능합니다.' },
              { q: '서비스를 개별로 이용할 수 있나요?', a: '물론입니다. 포토부스, 전문사회를 각각 개별로 이용하실 수 있으며, 통합 패키지로 함께 이용하시면 할인이 적용됩니다.' },
              { q: '지방 예식장에서도 이용 가능한가요?', a: '서울, 경기 외 지역도 진행 가능합니다. 상담 시 예식장 위치를 알려주시면 진행 가능 여부와 세부 사항을 안내해 드립니다.' },
              { q: '예식장이 정해지지 않았는데 상담받을 수 있나요?', a: '가능합니다. 예식장 결정 전이라도 미리 상담받으시면 서비스 구성과 예산 계획에 도움을 드릴 수 있습니다.' },
              { q: '취소나 날짜 변경이 가능한가요?', a: '가능한 범위 내에서 유연하게 대응해 드립니다. 자세한 변경·취소 정책은 상담 시 안내드립니다.' },
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

      {/* ────── CTA ────── */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-[#111] dark-pattern hero-side-lines">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hotel-white/main-cta-wedding-details.png"
            alt="" fill className="object-cover" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto relative text-center z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
            <span className="tag">Contact</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
          </div>
          <h2 className="text-[28px] md:text-[42px] text-white font-extralight leading-[1.5] mt-5 mb-6 tracking-tight">
            특별한 날, 하람과 함께하세요
          </h2>
          <p className="text-[14px] text-white/40 mb-10">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="heading-en text-[36px] md:text-[48px] text-[#b89d6a] mb-12 stat-glow">
            010-7930-1332
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-[#b89d6a] hover:bg-[#a38856]">
              <span>문의하기</span><Arr />
            </Link>
            <a href="tel:010-7930-1332" className="btn-ghost">
              <span>전화 연결</span><Arr />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
