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

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

  return (
    <main className="w-full">
      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="HARAM Wedding"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/[0.03]" />
          <div className="absolute top-0 left-[50%] w-[1px] h-full bg-white/[0.03]" />
          <div className="absolute top-0 left-[80%] w-[1px] h-full bg-white/[0.03]" />
        </div>

        <motion.div className="relative z-10 text-center text-white px-6" style={{ opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-haram-gold/40" />
            <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase font-light">
              Precious Person in Heaven
            </p>
            <div className="w-12 h-[1px] bg-haram-gold/40" />
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            className="text-shimmer text-[3.5rem] md:text-[6.5rem] lg:text-[8rem] font-light tracking-[0.5em] md:tracking-[0.6em] mb-8 font-display leading-[1]"
            style={{ paddingLeft: '0.5em' }}>
            하람
          </motion.h1>

          <motion.p initial="hidden" animate="visible" custom={0.4} variants={fadeUp}
            className="text-[14px] md:text-[18px] font-light leading-relaxed tracking-[0.08em] text-white/60 font-serif italic mb-14">
            &ldquo; 예식의 품질은 현장에서 결정됩니다 &rdquo;
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.6} variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-3 bg-haram-gold/90 text-white px-10 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat
                hover:bg-haram-gold transition-all duration-500 shadow-2xl shadow-haram-gold/20">
              상담 문의
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </Link>
            <Link href="#services"
              className="inline-block border border-white/20 text-white/70 px-10 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat
                hover:border-white/50 hover:text-white transition-all duration-500">
              서비스 보기
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-[18px] h-[28px] rounded-full border border-white/20 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[2px] h-[6px] bg-white/40 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-haram-cream to-transparent z-[1]" />
      </section>

      {/* ═══════════════ MARQUEE TICKER ═══════════════ */}
      <section className="bg-haram-cream py-6 overflow-hidden border-b border-gray-100/60">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {['CONCIERGE', 'PHOTOBOOTH', 'HOST', 'WEDDING', 'PREMIUM', 'MANAGEMENT'].map((text, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-[13px] md:text-[15px] tracking-[0.35em] text-gray-300 font-montserrat font-light mx-8 md:mx-14">
                    {text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-haram-gold/30 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ ABOUT - EDITORIAL LAYOUT ═══════════════ */}
      <section className="relative py-28 md:py-40 bg-haram-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left - Large decorative number + label */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={slideRight}
              className="md:col-span-5">
              <div className="relative">
                <span className="num-deco text-[120px] md:text-[180px] text-haram-gold/[0.08] absolute -top-10 -left-4 select-none">A</span>
                <div className="relative pt-12 md:pt-20">
                  <p className="badge-label text-haram-gold mb-8">About Haram</p>
                  <h2 className="text-[28px] md:text-[38px] font-light text-gray-900 leading-[1.5] mb-8">
                    결혼식의 완성도는
                    <br />
                    <span className="font-serif italic text-haram-gold-dark">현장</span>에서 결정됩니다
                  </h2>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-haram-gold to-transparent mb-8" />
                  <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light">
                    결혼식의 완성도는 기획이나 설명이 아니라
                    당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Image + overlapping text card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={slideLeft}
              className="md:col-span-7">
              <div className="relative">
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                  <Image
                    src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
                    alt="Wedding scene"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Overlapping card */}
                <div className="relative md:absolute md:-bottom-8 md:-left-16 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 mt-[-40px] mx-4 md:mx-0 md:mt-0 md:max-w-[320px]">
                  <p className="text-[15px] md:text-[16px] leading-[2] text-gray-600 font-light">
                    하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
                    <span className="text-gray-900 font-normal"> 경험을 바탕으로 관리하는 회사</span>입니다.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-haram-gold" />
                    <p className="text-[11px] text-haram-gold font-montserrat tracking-[0.15em]">SINCE 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY BANNER ═══════════════ */}
      <section className="relative py-32 md:py-40 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="text-[18px] md:text-[24px] font-light text-gray-400 leading-[2] tracking-wide mb-8">
              화려함보다는 안정감, 연출보다는 정돈된 분위기.
            </p>
            <h3 className="text-[26px] md:text-[42px] font-light text-gray-900 leading-[1.5] font-serif">
              하람은 <span className="text-haram-gold italic">결혼식다운 결혼식</span>을
              <br />
              목표로 합니다.
            </h3>
            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/40" />
              <div className="w-2.5 h-2.5 rounded-full border border-haram-gold/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              </div>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SERVICES - MAGAZINE GRID ═══════════════ */}
      <section id="services" className="py-28 md:py-40 px-6 bg-haram-warm">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="badge-label text-haram-gold mb-6">Services</p>
              <h2 className="text-[28px] md:text-[42px] font-light text-gray-900 leading-[1.3]">
                하람이 제공하는
                <br />
                <span className="font-serif italic text-haram-gold-dark">프리미엄 서비스</span>
              </h2>
            </div>
            <p className="text-[13px] text-gray-400 font-light max-w-sm leading-[1.9]">
              예식의 모든 순간을 완벽하게 관리합니다. 각 서비스는 독립적으로 또는 통합 패키지로 이용 가능합니다.
            </p>
          </motion.div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {/* Photobooth - Large card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
              custom={0} variants={fadeUp} className="md:col-span-7">
              <Link href="/photobooth" className="block group">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden
                  shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                  <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png" alt="포토부스" fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                      <p className="text-[9px] tracking-[0.3em] text-white/90 font-montserrat uppercase">Photobooth</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                    <h3 className="text-[28px] md:text-[36px] font-light mb-3 tracking-wide font-serif">포토부스</h3>
                    <div className="w-10 h-[1px] bg-haram-gold mb-4 transition-all duration-700 group-hover:w-20" />
                    <p className="text-[13px] font-light leading-[1.8] text-white/60 group-hover:text-white/80 transition-colors duration-700 max-w-md">
                      하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-haram-gold/70 group-hover:text-haram-gold transition-colors duration-500">
                      <span className="text-[10px] tracking-[0.15em] font-montserrat uppercase">자세히 보기</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                        className="transform group-hover:translate-x-1.5 transition-transform duration-500">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Right column - 2 stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-5 md:gap-6">
              {/* Host */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                custom={0.15} variants={fadeUp}>
                <Link href="/host" className="block group">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden
                    shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                    <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png" alt="전문사회" fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                        <p className="text-[9px] tracking-[0.3em] text-white/90 font-montserrat uppercase">Host</p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                      <h3 className="text-[24px] md:text-[28px] font-light mb-2 tracking-wide font-serif">전문사회</h3>
                      <div className="w-8 h-[1px] bg-haram-gold mb-3 transition-all duration-700 group-hover:w-14" />
                      <p className="text-[12px] font-light leading-[1.8] text-white/50 group-hover:text-white/80 transition-colors duration-700">
                        격식과 감동 사이의 완벽한 균형을 잡는 전문 MC
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Concierge */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                custom={0.3} variants={fadeUp}>
                <Link href="/concierge" className="block group">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden
                    shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                    <Image src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png" alt="컨시어지" fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                        <p className="text-[9px] tracking-[0.3em] text-white/90 font-montserrat uppercase">Concierge</p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                      <h3 className="text-[24px] md:text-[28px] font-light mb-2 tracking-wide font-serif">컨시어지</h3>
                      <div className="w-8 h-[1px] bg-haram-gold mb-3 transition-all duration-700 group-hover:w-14" />
                      <p className="text-[12px] font-light leading-[1.8] text-white/50 group-hover:text-white/80 transition-colors duration-700">
                        예식 현장의 모든 흐름을 조율하는 전문 매니저 파견
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY HARAM - HORIZONTAL FEATURES ═══════════════ */}
      <section className="py-28 md:py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16 md:mb-20">
            <p className="badge-label text-haram-gold mb-6 justify-center">Why Haram</p>
            <h2 className="text-[28px] md:text-[42px] font-light text-gray-900">
              하람을 선택하는 <span className="font-serif italic text-haram-gold-dark">이유</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:divide-x md:divide-gray-100">
            {[
              { num: '500+', title: '현장 경험', desc: '500회 이상의 예식 현장 운영으로 어떤 변수에도 흔들리지 않습니다' },
              { num: 'All-in-1', title: '원스톱 관리', desc: '컨시어지, 포토부스, 사회를 하나의 팀이 일관되게 관리합니다' },
              { num: '1:1', title: '맞춤 설계', desc: '예식장 구조와 하객 규모를 반영한 맞춤형 운영 매뉴얼을 설계합니다' },
              { num: '98%', title: '고객 만족', desc: '30곳 이상의 예식장 제휴와 98%의 고객 만족도를 기록합니다' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="group text-center py-10 md:py-0 md:px-8 border-b md:border-b-0 border-gray-100 last:border-b-0">
                <div className="text-[36px] md:text-[44px] font-montserrat font-light text-haram-gold/80 leading-none mb-4
                  group-hover:text-haram-gold transition-colors duration-500">
                  {item.num}
                </div>
                <h3 className="text-[15px] font-medium text-gray-900 mb-3">{item.title}</h3>
                <div className="w-6 h-[1px] bg-haram-gold/30 mx-auto mb-4 group-hover:w-10 transition-all duration-500" />
                <p className="text-[12px] text-gray-400 font-light leading-[1.9] max-w-[200px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FULL-WIDTH QUOTE IMAGE ═══════════════ */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="Wedding scene"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        {/* Corner frames */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-haram-gold/20 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-haram-gold/20 hidden md:block" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}
            className="text-center text-white px-6 max-w-3xl">
            <div className="text-haram-gold/25 text-[50px] md:text-[70px] font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-[22px] md:text-[36px] font-light leading-[1.6] tracking-wide font-serif">
              하객의 첫인상은 공간이 아니라,
              <br />
              <span className="text-haram-gold italic">사람</span>이 만듭니다.
            </p>
            <div className="text-haram-gold/25 text-[50px] md:text-[70px] font-serif leading-none mt-3 rotate-180">&ldquo;</div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-20 md:py-24 px-6 bg-haram-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/30 to-haram-navy" />

        {/* Decorative circles */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-[300px] h-[300px] rounded-full border border-haram-gold/[0.04] hidden md:block" />
        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[200px] h-[200px] rounded-full border border-haram-gold/[0.04] hidden md:block" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.06]">
            {[
              { num: '500', suffix: '+', label: '누적 예식 횟수' },
              { num: '30', suffix: '+', label: '제휴 예식장' },
              { num: '98', suffix: '%', label: '고객 만족도' },
              { num: '3', suffix: '년+', label: '업력' },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="text-center py-4 md:py-8 px-4">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-[42px] md:text-[56px] font-light text-white font-montserrat leading-none">{stat.num}</span>
                  <span className="text-[18px] md:text-[22px] text-haram-gold font-montserrat font-light">{stat.suffix}</span>
                </div>
                <div className="w-6 h-[1px] bg-haram-gold/30 mx-auto my-4" />
                <p className="text-[11px] text-white/40 tracking-[0.1em] font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16 md:mb-20">
            <p className="badge-label text-haram-gold mb-6 justify-center">Process</p>
            <h2 className="text-[28px] md:text-[42px] font-light text-gray-900">
              하람과 함께하는 <span className="font-serif italic text-haram-gold-dark">과정</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-haram-gold/15 via-haram-gold/30 to-haram-gold/15" />

            {[
              { step: '01', title: '상담', desc: '전화 · DM · 톡톡으로 간편 상담' },
              { step: '02', title: '설계', desc: '예식 맞춤 운영 매뉴얼 제작' },
              { step: '03', title: '리허설', desc: '사전 현장 점검 및 시뮬레이션' },
              { step: '04', title: '진행', desc: '당일 현장 전담 운영 및 관리' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.12} variants={fadeUp}
                className="group text-center relative">
                <div className="w-[56px] h-[56px] rounded-full bg-white border-2 border-haram-gold/25 flex items-center justify-center mx-auto mb-7
                  shadow-[0_4px_20px_rgba(221,193,140,0.1)] relative z-10
                  group-hover:border-haram-gold/60 group-hover:shadow-[0_8px_30px_rgba(221,193,140,0.2)] transition-all duration-500">
                  <span className="text-haram-gold font-montserrat text-[12px] font-semibold">{item.step}</span>
                </div>
                <h4 className="text-[17px] font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 font-light leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERIENCE BANNER ═══════════════ */}
      <section className="py-24 md:py-28 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase">Experience</p>
              <div className="w-10 h-[1px] bg-haram-gold/40" />
            </div>
            <p className="text-[20px] md:text-[30px] font-light leading-[1.7] tracking-wide font-serif text-gray-800">
              서울, 인천, 평택, 안산 등
              <br />
              다양한 현장에서 쌓아 올린
              <br />
              <span className="text-haram-gold italic">하람의 품격</span>을 경험하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-32 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/20 to-haram-navy" />

        {/* Large decorative text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[200px] md:text-[400px] font-serif font-light text-white/[0.015] leading-none select-none tracking-widest">
            하람
          </span>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-28 h-28 border border-haram-gold/[0.06] rounded-full hidden md:block" />
        <div className="absolute bottom-12 right-12 w-36 h-36 border border-haram-gold/[0.04] rounded-full hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="badge-label text-haram-gold/60 mb-8 justify-center">Contact Us</p>
            <h2 className="text-[28px] md:text-[46px] font-light text-white mb-6 leading-[1.4] font-serif">
              특별한 날,
              <br />
              <span className="text-haram-gold italic">하람</span>과 함께하세요
            </h2>
            <p className="text-[13px] text-white/35 font-light mb-10">
              간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
            </p>
            <p className="text-[32px] md:text-[40px] font-light text-haram-gold mb-14 font-montserrat tracking-[0.08em]">
              010-7930-1332
            </p>
            <Link href="/contact"
              className="group inline-flex items-center gap-3 bg-haram-gold text-haram-navy px-14 py-4.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-montserrat font-medium
                hover:bg-haram-gold-light transition-all duration-500 shadow-2xl shadow-haram-gold/20">
              문의하기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
