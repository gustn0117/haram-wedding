'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (d: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 1, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
const slideIn = {
  hidden: { opacity: 0, x: -40 },
  visible: (d: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Arrow = () => (
  <svg className="w-4 h-4 btn-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  return (
    <main>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="HARAM Wedding" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/75" />
        <div className="absolute inset-0 hero-vignette" />

        {/* Corner accents */}
        <div className="absolute top-28 left-8 md:left-16 w-28 h-28 border-l border-t border-white/[0.06]" />
        <div className="absolute bottom-28 right-8 md:right-16 w-28 h-28 border-r border-b border-white/[0.06]" />

        {/* Side text */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 vertical-text text-[9px] tracking-[0.5em] text-white/15 uppercase">
          Haram Wedding Management
        </div>
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 vertical-text text-[9px] tracking-[0.5em] text-white/15 uppercase">
          Est. 2022 · Premium Service
        </div>

        <motion.div className="relative z-10 text-center text-white px-6 max-w-4xl" style={{ opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fade}
            className="section-label section-label-center justify-center text-haram-gold/50 mb-12">
            Wedding Management
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fade}
            className="text-[52px] md:text-[84px] lg:text-[120px] font-serif font-medium tracking-[0.15em] leading-[1] mb-6">
            HARAM
          </motion.h1>

          <motion.div initial="hidden" animate="visible" custom={0.2} variants={fade}
            className="divider-diamond my-8"><span /></motion.div>

          <motion.p initial="hidden" animate="visible" custom={0.3} variants={fade}
            className="text-[11px] tracking-[0.5em] text-white/25 uppercase mb-14">
            Precious Person in Heaven
          </motion.p>

          <motion.p initial="hidden" animate="visible" custom={0.4} variants={fade}
            className="text-[16px] md:text-[19px] text-white/45 leading-relaxed mb-16 font-light max-w-lg mx-auto">
            예식의 품질은 현장에서 결정됩니다
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.55} variants={fade}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact" className="btn-primary">
              <span>상담 문의하기</span>
              <Arrow />
            </Link>
            <Link href="#services" className="btn-outline">
              <span>서비스 보기</span>
              <Arrow />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white to-transparent z-[1]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3">
          <span className="text-[8px] tracking-[0.4em] text-gray-400 uppercase">Scroll</span>
          <span className="w-[1px] h-8 bg-haram-gold/30 animate-pulse-gold" />
        </motion.div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            {/* Left – image stack */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
              className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Wedding preparation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-haram-gold/15 -z-10" />
              <div className="floating-badge -right-4 md:-right-16 top-16 hidden md:block">
                <p className="text-[32px] font-serif text-haram-gold leading-none">500<span className="text-[14px]">+</span></p>
                <p className="text-[9px] text-gray-400 tracking-[0.15em] mt-1.5 uppercase">Weddings</p>
              </div>
            </motion.div>

            {/* Right – text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fade}
              className="md:col-span-7">
              <p className="section-label mb-10">About Haram</p>
              <h2 className="text-[34px] md:text-[50px] font-serif font-light text-haram-dark leading-[1.25] mb-10">
                결혼식다운
                <br />
                <span className="text-gradient-gold">결혼식</span>을
                <br />
                만듭니다
              </h2>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-haram-gold/40" />
                <span className="text-[10px] tracking-[0.3em] text-haram-gold/60 uppercase">Since 2022</span>
              </div>
              <p className="text-[16px] md:text-[18px] leading-[2.2] text-gray-500 mb-6 font-light">
                결혼식의 완성도는 기획이나 설명이 아니라
                당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[2.2] text-gray-500 mb-12 font-light">
                하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
                <span className="text-haram-dark font-normal"> 경험을 바탕으로 관리하는 회사</span>입니다.
              </p>

              {/* Mini stats row */}
              <div className="flex gap-10 md:gap-16 mb-12 py-8 border-y border-gray-100">
                {[
                  { num: '500+', label: '누적 예식' },
                  { num: '30+', label: '제휴 예식장' },
                  { num: '98%', label: '만족도' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[28px] md:text-[32px] font-serif font-light text-haram-dark leading-none mb-2">{stat.num}</p>
                    <p className="text-[9px] tracking-[0.2em] text-gray-400 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-outline-dark">
                <span>자세히 알아보기</span>
                <Arrow />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ MARQUEE ══════ */}
      <div className="py-10 bg-haram-dark overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-16 px-8">
              {['Concierge', 'Photobooth', 'Professional Host', 'Wedding Management', 'Premium Service', 'Concierge', 'Photobooth', 'Professional Host'].map((text, i) => (
                <span key={i} className="flex items-center gap-16">
                  <span className="text-[16px] font-serif tracking-[0.4em] text-white/10 whitespace-nowrap uppercase">{text}</span>
                  <span className="w-1 h-1 bg-haram-gold/20 rotate-45 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════ SERVICES ══════ */}
      <section id="services" className="py-32 md:py-44 px-6 relative">
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
            <div>
              <p className="section-label mb-6">Services</p>
              <h2 className="text-[30px] md:text-[46px] text-haram-dark leading-[1.3] font-light">
                하람이 제공하는<br className="hidden md:block" /> 서비스
              </h2>
            </div>
            <Link href="/contact" className="btn-outline-dark self-start md:self-auto">
              <span>전체 문의</span>
              <Arrow />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/photobooth', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80', title: '포토부스', sub: 'Photobooth', desc: '하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스', num: '01' },
              { href: '/host', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', title: '전문사회', sub: 'Host', desc: '격식과 감동 사이의 완벽한 균형을 잡는 전문 MC', num: '02' },
              { href: '/concierge', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80', title: '컨시어지', sub: 'Concierge', desc: '예식 현장의 모든 흐름을 조율하는 전문 매니저 파견', num: '03' },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }} custom={i * 0.15} variants={fadeScale}>
                <Link href={card.href} className="block group img-overlay-zoom service-card-overlay">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image src={card.img} alt={card.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                    <div className="absolute inset-0 bg-haram-gold/0 group-hover:bg-haram-gold/10 transition-colors duration-700" />

                    {/* Number */}
                    <div className="absolute top-6 left-7 text-[56px] font-serif font-light text-white/[0.06] leading-none">{card.num}</div>
                    {/* Corner */}
                    <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-white/10 group-hover:border-haram-gold/30 group-hover:w-14 group-hover:h-14 transition-all duration-500" />

                    <div className="overlay-content">
                      <p className="text-[10px] tracking-[0.35em] text-haram-gold/60 uppercase mb-3 font-serif">
                        {card.sub}
                      </p>
                      <h3 className="text-[28px] md:text-[32px] font-light text-white mb-3">{card.title}</h3>
                      <div className="w-8 h-[1px] bg-haram-gold/40 mb-4 group-hover:w-16 transition-all duration-500" />

                      <div className="overlay-detail">
                        <p className="text-[12px] text-white/40 leading-[1.9] mb-5">
                          {card.desc}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-3 text-[10px] text-white/25 group-hover:text-haram-gold transition-colors duration-500 tracking-[0.2em] uppercase">
                        View Detail
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ IMAGE BREAK ══════ */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80"
          alt="Wedding moment" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/50 to-black/25" />
        <div className="absolute inset-0 hero-vignette" />

        <div className="absolute top-10 left-10 md:top-16 md:left-16 w-24 h-24 border-l border-t border-white/[0.05]" />
        <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 w-24 h-24 border-r border-b border-white/[0.05]" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-8 max-w-2xl">
            <div className="ornament-line mb-8">
              <span className="w-2 h-2 border border-haram-gold/30 rotate-45" />
            </div>
            <p className="text-[24px] md:text-[38px] font-serif leading-[1.8] font-light">
              하객의 첫인상은 공간이 아니라,
              <br />사람이 만듭니다.
            </p>
            <div className="ornament-line mt-8">
              <span className="w-2 h-2 border border-haram-gold/30 rotate-45" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════ WHY HARAM ══════ */}
      <section className="py-32 md:py-44 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
              className="md:col-span-4 md:sticky md:top-32">
              <p className="section-label mb-8">Why Haram</p>
              <h2 className="text-[30px] md:text-[42px] text-haram-dark font-light leading-[1.35] mb-8">
                하람을<br />선택하는 이유
              </h2>
              <p className="text-[14px] text-gray-400 leading-[2] mb-8">
                500회 이상의 현장 경험으로 검증된
                프리미엄 웨딩 매니지먼트
              </p>
              <div className="w-16 h-[1px] bg-haram-gold/40" />
            </motion.div>

            <div className="md:col-span-8 space-y-5">
              {[
                { num: '01', title: '현장 중심의 실전 경험', desc: '500회 이상의 예식 현장 운영 경험을 바탕으로 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.' },
                { num: '02', title: '통합 서비스 원스톱 관리', desc: '컨시어지, 포토부스, 전문사회를 하나의 팀이 관리하여 예식 전체의 톤과 퀄리티를 일관되게 유지합니다.' },
                { num: '03', title: '맞춤형 운영 설계', desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.' },
                { num: '04', title: '검증된 파트너십', desc: '30곳 이상의 예식장과 정식 제휴를 맺고 있으며, 98%의 고객 만족도를 기록하고 있습니다.' },
              ].map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  custom={i * 0.08} variants={slideIn}
                  className="card-hover card-shine card-gold-border bg-white p-10 md:p-12 group">
                  <div className="flex items-start gap-8">
                    <span className="text-[48px] font-serif font-light text-haram-gold/10 leading-none shrink-0 group-hover:text-haram-gold/30 transition-colors duration-500">
                      {item.num}
                    </span>
                    <div className="pt-3">
                      <h3 className="text-[17px] text-haram-dark font-medium mb-4">{item.title}</h3>
                      <p className="text-[13px] text-gray-400 leading-[2.1]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <p className="section-label section-label-center justify-center mb-8">Process</p>
            <h2 className="text-[30px] md:text-[44px] text-haram-dark font-light">
              하람과 함께하는 과정
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              { step: '01', title: '상담', desc: '전화 · DM · 톡톡으로 간편하게 1:1 맞춤 상담을 시작합니다' },
              { step: '02', title: '설계', desc: '예식 규모와 분위기에 맞는 운영 매뉴얼을 제작합니다' },
              { step: '03', title: '리허설', desc: '실제 현장에서 사전 점검과 시뮬레이션을 진행합니다' },
              { step: '04', title: '진행', desc: '전담 매니저가 당일 현장을 완벽하게 운영합니다' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="timeline-item py-10 group">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[10px] tracking-[0.3em] text-haram-gold uppercase">{item.step}</span>
                  <h4 className="text-[20px] md:text-[24px] font-serif text-haram-dark font-light">{item.title}</h4>
                </div>
                <p className="text-[14px] text-gray-400 leading-[2]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-32 md:py-44 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <p className="section-label section-label-center justify-center mb-8">Testimonial</p>
            <h2 className="text-[30px] md:text-[42px] text-haram-dark font-light">고객의 이야기</h2>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeScale}
            className="bg-white p-10 md:p-16 border border-gray-100 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-haram-gold/40 to-transparent" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-haram-gold/[0.03] to-transparent" />
            <div className="text-[80px] font-serif text-haram-gold/8 leading-none mb-4">&ldquo;</div>
            <p className="text-[18px] md:text-[22px] text-gray-600 leading-[2] mb-10 font-light max-w-3xl">
              하람 덕분에 예식 당일 아무런 걱정 없이 즐길 수 있었어요.
              하객분들도 너무 좋았다고 칭찬하셨습니다.
              다시 결혼식을 준비한다 해도 하람을 선택할 거예요.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-haram-gold/30" />
              <div>
                <p className="text-[14px] text-haram-dark font-medium">김○○</p>
                <p className="text-[11px] text-gray-400 mt-0.5">강남 · 컨시어지 + 포토부스</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: '이○○ · 판교', review: '포토부스가 정말 대박이었어요! 하객분들이 줄 서서 찍으실 정도로 인기가 많았고, 포토북도 너무 예쁘게 나왔어요.', service: '포토부스' },
              { name: '박○○ · 수원', review: '사회자분의 진행이 정말 자연스럽고 격식 있었어요. 부모님도 너무 만족하셨습니다. 강력 추천합니다!', service: '전문사회' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1 + 0.2} variants={fadeScale}
                className="bg-white p-9 border border-gray-100 card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-haram-gold/20 to-transparent" />
                <p className="text-[13px] text-gray-500 leading-[2.2] mb-8">{t.review}</p>
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] text-haram-dark">{t.name}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{t.service}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-haram-gold text-[10px]">&#9733;</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="relative py-36 md:py-52 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60" />
          <div className="absolute inset-0 hero-vignette" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/15 to-transparent" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="max-w-2xl mx-auto relative text-center">
          <p className="section-label section-label-center justify-center text-haram-gold/40 mb-10">Contact</p>
          <h2 className="text-[32px] md:text-[50px] text-white leading-[1.4] mb-8 font-light">
            특별한 날,<br />하람과 함께하세요
          </h2>
          <p className="text-[14px] text-white/35 mb-14 font-light">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="text-[38px] md:text-[52px] font-serif font-light text-haram-gold mb-16 tracking-wider">
            010-7930-1332
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact" className="btn-primary">
              <span>문의하기</span>
              <Arrow />
            </Link>
            <a href="tel:010-7930-1332" className="btn-outline">
              <span>전화 연결</span>
              <Arrow />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
