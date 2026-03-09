'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });

  return (
    <main className="w-full">
      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="HARAM Wedding"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Dynamic overlay */}
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 watermark-overlay opacity-[0.04]" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[8%] w-32 h-32 border border-haram-gold/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-[20%] right-[10%] w-20 h-20 border border-haram-gold/8 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-haram-gold/30 rounded-full animate-pulse-glow" />
          <div className="absolute top-[60%] left-[12%] w-1 h-1 bg-haram-gold/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Hero Content */}
        <motion.div className="relative z-10 text-center text-white px-6" style={{ opacity: heroOpacity }}>
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[10px] md:text-[11px] tracking-[0.5em] text-haram-gold/80 mb-8 font-montserrat uppercase font-light">
            Precious Person in Heaven
          </motion.p>

          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            className="text-shimmer text-[3.5rem] md:text-[6.5rem] lg:text-[8rem] font-light tracking-[0.5em] md:tracking-[0.6em] mb-6 font-display leading-[1]"
            style={{ paddingLeft: '0.5em' }}>
            하람
          </motion.h1>

          <motion.div initial="hidden" animate="visible" custom={0.35} variants={fadeUp}
            className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/50" />
            <div className="w-2 h-2 rounded-full border border-haram-gold/40" />
            <div className="w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/50" />
          </motion.div>

          <motion.p initial="hidden" animate="visible" custom={0.5} variants={fadeUp}
            className="text-[13px] md:text-[17px] font-light leading-relaxed tracking-[0.12em] text-white/70 font-serif italic">
            &ldquo; 예식의 품질은 현장에서 결정됩니다 &rdquo;
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.75} variants={fadeUp}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-block bg-haram-gold/90 text-white px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat
                hover:bg-haram-gold transition-all duration-500 shadow-2xl shadow-haram-gold/20 backdrop-blur-sm">
              상담 문의
            </Link>
            <Link href="#services"
              className="inline-block border border-white/20 text-white/80 px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat
                hover:border-white/50 hover:text-white transition-all duration-500 backdrop-blur-sm">
              서비스 보기
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[18px] h-[28px] rounded-full border border-white/25 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[2px] h-[6px] bg-white/50 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section ref={aboutRef} className="relative py-32 md:py-40 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />

        {/* Decorative side lines */}
        <div className="hidden md:block absolute left-[10%] top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent" />
        <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14"
          >
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-6 font-montserrat uppercase font-light">About Haram</p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-haram-gold to-transparent mx-auto" />
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
            className="text-[16px] md:text-[20px] leading-[2.2] text-gray-600 font-light tracking-[0.01em]">
            결혼식의 완성도는 기획이나 설명이 아니라
            <br />
            당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fadeUp}
            className="my-12 flex items-center justify-center">
            <div className="w-[1px] h-16 bg-gradient-to-b from-haram-gold/40 to-transparent" />
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} variants={fadeUp}
            className="text-[16px] md:text-[20px] leading-[2.2] text-gray-600 font-light tracking-[0.01em]">
            하람은 결혼식 당일 현장에서 발생하는
            <br />
            흐름, 동선, 분위기, 변수를
            <br />
            <span className="text-gray-900">경험을 바탕으로 관리하는 회사</span>입니다.
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.55} variants={fadeUp}
            className="my-12 flex items-center justify-center">
            <div className="w-[1px] h-16 bg-gradient-to-b from-haram-gold/40 to-transparent" />
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.65} variants={fadeUp}
            className="text-[18px] md:text-[22px] leading-[1.9] text-gray-900 font-light">
            화려함보다는 안정감, 연출보다는 정돈된 분위기.
            <br />
            하람은 <span className="text-haram-gold font-serif italic text-[22px] md:text-[26px]">결혼식다운 결혼식</span>을 목표로 합니다.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════ QUOTE BANNER ═══════════════ */}
      <section className="relative py-28 md:py-32 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/30 to-haram-navy" />

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-haram-gold/15" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-haram-gold/15" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <div className="text-haram-gold/20 text-[60px] md:text-[80px] font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-[20px] md:text-[32px] font-light text-white/90 tracking-wide leading-[1.7] font-serif">
              하객의 첫인상은 공간이 아니라,
              <br />
              <span className="text-haram-gold italic">사람</span>이 만듭니다.
            </p>
            <div className="text-haram-gold/20 text-[60px] md:text-[80px] font-serif leading-none mt-2 rotate-180">&ldquo;</div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="py-32 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-6">
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-5 font-montserrat uppercase font-light">Services</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeUp}
            className="text-center mb-20">
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 tracking-[-0.01em] leading-[1.4]">
              하람이 제공하는 <span className="font-serif italic text-haram-gold-dark">서비스</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                href: '/photobooth',
                img: 'https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png',
                title: '포토부스',
                sub: 'PHOTOBOOTH',
                desc: '하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스',
              },
              {
                href: '/host',
                img: 'https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png',
                title: '전문사회',
                sub: 'HOST',
                desc: '격식과 감동 사이의 완벽한 균형을 잡는 전문 MC',
              },
              {
                href: '/concierge',
                img: 'https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png',
                title: '컨시어지',
                sub: 'CONCIERGE',
                desc: '예식 현장의 모든 흐름을 조율하는 전문 매니저 파견',
              },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }} custom={i * 0.15} variants={fadeUp}>
                <Link href={card.href} className="block group">
                  <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden
                    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] transition-shadow duration-700">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />

                    {/* Multi-layer gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Top label */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <p className="text-[9px] tracking-[0.3em] text-white/90 font-montserrat uppercase">
                          {card.sub}
                        </p>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-white">
                      <h3 className="text-[26px] md:text-[30px] font-light mb-3 tracking-wide font-serif">{card.title}</h3>
                      <div className="w-10 h-[1px] bg-haram-gold mb-4 transition-all duration-700 group-hover:w-16" />
                      <p className="text-[12px] font-light leading-[1.8] text-white/50
                        group-hover:text-white/80 transition-colors duration-700 max-w-[250px]">
                        {card.desc}
                      </p>

                      {/* Arrow */}
                      <div className="mt-5 flex items-center gap-2 text-haram-gold/70 group-hover:text-haram-gold transition-colors duration-500">
                        <span className="text-[10px] tracking-[0.15em] font-montserrat uppercase">자세히 보기</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                          className="transform group-hover:translate-x-1 transition-transform duration-500">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY HARAM ═══════════════ */}
      <section className="py-32 md:py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-5 font-montserrat uppercase font-light">Why Haram</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              하람을 선택하는 <span className="font-serif italic text-haram-gold-dark">이유</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: '현장 중심의 실전 경험',
                desc: '500회 이상의 예식 현장 운영 경험을 바탕으로, 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.',
                accent: '500+',
              },
              {
                num: '02',
                title: '통합 서비스 원스톱 관리',
                desc: '컨시어지, 포토부스, 전문사회를 하나의 팀이 관리하여 예식 전체의 톤과 퀄리티를 일관되게 유지합니다.',
                accent: 'All-in-One',
              },
              {
                num: '03',
                title: '맞춤형 운영 설계',
                desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.',
                accent: '1:1',
              },
              {
                num: '04',
                title: '검증된 파트너십',
                desc: '30곳 이상의 예식장과 정식 제휴를 맺고 있으며, 98%의 고객 만족도를 기록하고 있습니다.',
                accent: '98%',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="group relative bg-haram-cream rounded-2xl p-8 md:p-10 overflow-hidden
                  hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700">
                {/* Background accent number */}
                <div className="absolute top-4 right-6 text-[80px] md:text-[100px] font-montserrat font-bold text-gray-100/60
                  group-hover:text-haram-gold/10 transition-colors duration-700 leading-none select-none">
                  {item.accent}
                </div>

                <div className="relative">
                  <span className="text-[11px] tracking-[0.2em] text-haram-gold font-montserrat font-medium">{item.num}</span>
                  <h3 className="text-[18px] md:text-[20px] font-light text-gray-900 mt-3 mb-4">{item.title}</h3>
                  <div className="w-8 h-[1px] bg-haram-gold/50 mb-5 group-hover:w-14 transition-all duration-500" />
                  <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WIDE IMAGE PARALLAX ═══════════════ */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="Wedding scene"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}
            className="text-center text-white px-6 max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-haram-gold/50" />
              <p className="text-[10px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase">Experience</p>
              <div className="w-10 h-[1px] bg-haram-gold/50" />
            </div>
            <p className="text-[22px] md:text-[34px] font-light leading-[1.6] tracking-wide font-serif">
              서울, 인천, 평택, 안산 등
              <br />
              다양한 현장에서 쌓아 올린
              <br />
              <span className="text-haram-gold italic">하람의 품격</span>을 경험하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-24 md:py-28 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-100">
            {[
              { num: '500', suffix: '+', label: '누적 예식 횟수' },
              { num: '30', suffix: '+', label: '제휴 예식장' },
              { num: '98', suffix: '%', label: '고객 만족도' },
              { num: '3', suffix: '년+', label: '업력' },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="text-center py-8 px-4">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-[40px] md:text-[52px] font-light text-gray-900 font-montserrat leading-none">{stat.num}</span>
                  <span className="text-[18px] md:text-[22px] text-haram-gold font-montserrat font-light">{stat.suffix}</span>
                </div>
                <div className="w-6 h-[1px] bg-haram-gold/40 mx-auto my-4" />
                <p className="text-[11px] text-gray-400 tracking-[0.1em] font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS OVERVIEW ═══════════════ */}
      <section className="py-32 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-5 font-montserrat uppercase font-light">Process</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              하람과 함께하는 <span className="font-serif italic text-haram-gold-dark">과정</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-haram-gold/20 via-haram-gold/40 to-haram-gold/20" />

            {[
              { step: '01', title: '상담', desc: '전화 · DM · 톡톡으로 간편 상담' },
              { step: '02', title: '설계', desc: '예식 맞춤 운영 매뉴얼 제작' },
              { step: '03', title: '리허설', desc: '사전 현장 점검 및 시뮬레이션' },
              { step: '04', title: '진행', desc: '당일 현장 전담 운영 및 관리' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.12} variants={fadeUp}
                className="text-center relative px-4 py-6">
                <div className="w-[52px] h-[52px] rounded-full bg-white border-2 border-haram-gold/30 flex items-center justify-center mx-auto mb-6
                  shadow-[0_4px_20px_rgba(221,193,140,0.15)] relative z-10">
                  <span className="text-haram-gold font-montserrat text-[12px] font-semibold">{item.step}</span>
                </div>
                <h4 className="text-[16px] font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 font-light leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-36 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/20 to-haram-navy" />

        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-24 h-24 border border-haram-gold/8 rounded-full" />
        <div className="absolute bottom-12 right-12 w-32 h-32 border border-haram-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[1px] h-[120px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent hidden md:block" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[1px] h-[120px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="text-[10px] tracking-[0.5em] text-haram-gold/70 mb-6 font-montserrat uppercase font-light">Contact Us</p>
            <h2 className="text-[26px] md:text-[42px] font-light text-white mb-5 leading-[1.4] font-serif">
              특별한 날,
              <br />
              <span className="text-haram-gold italic">하람</span>과 함께하세요
            </h2>
            <p className="text-[13px] text-white/40 font-light mb-8">
              간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
            </p>
            <p className="text-[30px] md:text-[36px] font-light text-haram-gold mb-14 font-montserrat tracking-[0.08em]">
              010-7930-1332
            </p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-haram-navy px-14 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat font-medium
                hover:bg-haram-gold-light transition-all duration-500 shadow-2xl shadow-haram-gold/20">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
