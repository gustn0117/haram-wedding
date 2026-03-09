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

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="HARAM Wedding"
            fill
            className="object-cover scale-110"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/35" />

        {/* Watermark pattern */}
        <div className="absolute inset-0 watermark-overlay" />

        <motion.div className="relative z-10 text-center text-white px-6" style={{ opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="mb-4">
            <div className="gold-divider mx-auto mb-8" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[3.5rem] md:text-[5.5rem] font-light tracking-[0.4em] mb-8 font-display leading-[1.1]">
            하람
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={0.5} variants={fadeUp}
            className="text-[15px] md:text-[20px] font-light leading-relaxed tracking-[0.05em] opacity-90">
            &ldquo; 예식의 품질은 현장에서 결정됩니다 &rdquo;
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-[1px] h-12 bg-white/40" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} custom={0} variants={fadeUp}>
            <div className="gold-divider mx-auto mb-12" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.15} variants={fadeUp}
            className="text-[15px] md:text-[18px] leading-[2.2] text-gray-500 font-light tracking-[0.01em]">
            결혼식의 완성도는 기획이나 설명이 아니라
            <br />
            당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.3} variants={fadeUp}
            className="my-8">
            <div className="w-[1px] h-12 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.4} variants={fadeUp}
            className="text-[15px] md:text-[18px] leading-[2.2] text-gray-500 font-light tracking-[0.01em]">
            하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
            <br />
            경험을 바탕으로 관리하는 회사입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={0.55} variants={fadeUp}
            className="my-8">
            <div className="w-[1px] h-12 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={0.65} variants={fadeUp}
            className="text-[15px] md:text-[18px] leading-[2.2] text-gray-400 font-light italic tracking-[0.01em]">
            화려함보다는 안정감, 연출보다는 정돈된 분위기.
            <br />
            하람은 결혼식다운 결혼식을 목표로 합니다.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 pb-32 px-6 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase">Services</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">하람이 제공하는 서비스</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  <div className="relative w-full aspect-[3/4] rounded-[30px] overflow-hidden shadow-lg shadow-black/10">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                      group-hover:from-black/80 transition-all duration-500" />

                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                      <p className="text-[10px] tracking-[0.25em] text-haram-gold mb-2 font-montserrat uppercase">
                        {card.sub}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-wide">{card.title}</h3>
                      <div className="gold-divider mb-4 transition-all duration-500 group-hover:w-[60px]" />
                      <p className="text-[13px] font-light leading-[1.8] text-white/70
                        group-hover:text-white/90 transition-colors duration-500">
                        {card.line1}<br />{card.line2}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20
                      flex items-center justify-center opacity-0 group-hover:opacity-100
                      translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
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

      {/* Trust bar */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-sm text-gray-400 font-light tracking-wide">
            서울, 인천, 평택, 안산 등 다양한 현장에서 신뢰로 쌓아 올린 하람의 품격을 경험하세요
          </motion.p>
        </div>
      </section>
    </main>
  );
}
