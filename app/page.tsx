'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main className="w-full">
      {/* Hero Section - Full viewport cinematic */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 watermark-overlay" />

        <motion.div className="relative z-10 text-center text-white px-6" style={{ opacity: heroOpacity }}>
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[10px] md:text-[11px] tracking-[0.4em] text-haram-gold/90 mb-6 font-montserrat uppercase">
            Precious Person in Heaven
          </motion.p>

          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            className="text-shimmer text-[4rem] md:text-[7rem] lg:text-[8rem] font-light tracking-[0.5em] md:tracking-[0.6em] mb-4 font-display leading-[1]">
            하람
          </motion.h1>

          <motion.div initial="hidden" animate="visible" custom={0.35} variants={fadeUp}
            className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-haram-gold/50" />
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/60" />
          </motion.div>

          <motion.p initial="hidden" animate="visible" custom={0.5} variants={fadeUp}
            className="text-[14px] md:text-[18px] font-light leading-relaxed tracking-[0.08em] text-white/80">
            &ldquo; 예식의 품질은 현장에서 결정됩니다 &rdquo;
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.7} variants={fadeUp}
            className="mt-12">
            <Link href="/contact"
              className="inline-block border border-haram-gold/50 text-haram-gold px-10 py-3.5 rounded-full text-[12px] tracking-[0.15em] uppercase font-montserrat
                hover:bg-haram-gold hover:text-white transition-all duration-500">
              문의하기
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-white/40 font-montserrat uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} custom={0} variants={fadeUp}
            className="text-[10px] tracking-[0.35em] text-haram-gold mb-8 font-montserrat uppercase">About Haram</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} custom={0.1} variants={fadeUp}>
            <div className="gold-divider mx-auto mb-14" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.2} variants={fadeUp}
            className="text-[16px] md:text-[19px] leading-[2.2] text-gray-600 font-light tracking-[0.01em]">
            결혼식의 완성도는 기획이나 설명이 아니라
            <br />
            당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.35} variants={fadeUp}
            className="my-10">
            <div className="w-[1px] h-14 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.45} variants={fadeUp}
            className="text-[16px] md:text-[19px] leading-[2.2] text-gray-600 font-light tracking-[0.01em]">
            하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
            <br />
            경험을 바탕으로 관리하는 회사입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={0.6} variants={fadeUp}
            className="my-10">
            <div className="w-[1px] h-14 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={0.7} variants={fadeUp}
            className="text-[17px] md:text-[20px] leading-[2] text-gray-900 font-light tracking-[0.01em]">
            화려함보다는 안정감, 연출보다는 정돈된 분위기.
            <br />
            하람은 <span className="text-haram-gold italic">결혼식다운 결혼식</span>을 목표로 합니다.
          </motion.p>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative py-24 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-r from-haram-navy via-[#1a2a55] to-haram-navy" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-haram-gold/40" />
              <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              <div className="w-12 h-[1px] bg-haram-gold/40" />
            </div>
            <p className="text-[22px] md:text-[30px] font-light text-white/90 tracking-wide leading-[1.6] font-display">
              하객의 첫인상은 공간이 아니라,
              <br />
              <span className="text-haram-gold">사람</span>이 만듭니다.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-[1px] bg-haram-gold/40" />
              <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              <div className="w-12 h-[1px] bg-haram-gold/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase">Services</p>
            <h2 className="text-[28px] md:text-[38px] font-light text-gray-900 tracking-[-0.01em]">하람이 제공하는 서비스</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/photobooth',
                img: 'https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png',
                title: '포토부스',
                sub: 'PHOTOBOOTH',
                line1: '추억을 선물하는 셀프 포토존',
                line2: '감성까지 담았습니다',
              },
              {
                href: '/host',
                img: 'https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png',
                title: '전문사회',
                sub: 'HOST',
                line1: '진행은 매끄럽게',
                line2: '분위기는 따뜻하게',
              },
              {
                href: '/concierge',
                img: 'https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png',
                title: '컨시어지',
                sub: 'CONCIERGE',
                line1: '준비부터 마무리까지',
                line2: '하람이 책임집니다',
              },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }} custom={i * 0.15} variants={stagger}>
                <Link href={card.href} className="block group">
                  <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl shadow-black/10">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10
                      group-hover:from-black/85 transition-all duration-700" />

                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                      <p className="text-[9px] tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase">
                        {card.sub}
                      </p>
                      <h3 className="text-[24px] md:text-[28px] font-light mb-3 tracking-wide font-display">{card.title}</h3>
                      <div className="w-8 h-[1px] bg-haram-gold mb-5 transition-all duration-500 group-hover:w-14" />
                      <p className="text-[13px] font-light leading-[1.9] text-white/60
                        group-hover:text-white/85 transition-colors duration-500">
                        {card.line1}<br />{card.line2}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/15
                      flex items-center justify-center opacity-0 group-hover:opacity-100
                      translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Image Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
          alt="Wedding scene"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center text-white px-6">
            <p className="text-[10px] tracking-[0.35em] text-haram-gold/80 mb-4 font-montserrat uppercase">Experience</p>
            <p className="text-[20px] md:text-[28px] font-light leading-[1.7] tracking-wide">
              서울, 인천, 평택, 안산 등
              <br />
              다양한 현장에서 쌓아 올린 <span className="text-haram-gold">하람의 품격</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { num: '500+', label: '누적 예식 횟수' },
              { num: '30+', label: '제휴 예식장' },
              { num: '98%', label: '고객 만족도' },
              { num: '3년+', label: '업력' },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="text-center py-6">
                <p className="text-[36px] md:text-[44px] font-light text-haram-gold font-montserrat mb-2">{stat.num}</p>
                <p className="text-[12px] text-gray-400 tracking-wider font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-[#fafaf7] overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase">Contact Us</p>
            <h2 className="text-[28px] md:text-[38px] font-light text-gray-900 mb-4 tracking-[-0.01em]">
              특별한 날, 하람과 함께하세요
            </h2>
            <p className="text-[14px] text-gray-400 font-light mb-4 leading-[1.8]">
              간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
            </p>
            <p className="text-[28px] font-light text-haram-gold mb-12 font-montserrat tracking-[0.05em]">
              010-7930-1332
            </p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-white px-12 py-4.5 rounded-full text-[12px] tracking-[0.1em] uppercase font-montserrat
                hover:bg-[#c9a96e] transition-colors duration-400 shadow-lg shadow-haram-gold/20">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
