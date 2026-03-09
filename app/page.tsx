'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image
            src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="HARAM Wedding" fill className="object-cover" priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* Decorative corner lines */}
        <div className="absolute top-28 left-8 md:left-16 w-16 h-16 border-l border-t border-white/10" />
        <div className="absolute bottom-24 right-8 md:right-16 w-16 h-16 border-r border-b border-white/10" />

        <motion.div className="relative z-10 text-center text-white px-6 max-w-4xl" style={{ opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fade}
            className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[1px] bg-haram-gold/40" />
            <p className="text-[11px] tracking-[0.5em] text-haram-gold/70 uppercase">
              Wedding Management
            </p>
            <span className="w-10 h-[1px] bg-haram-gold/40" />
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fade}
            className="text-[52px] md:text-[80px] lg:text-[100px] font-serif font-medium tracking-[0.1em] leading-[1.05] mb-8">
            HARAM
          </motion.h1>

          <motion.p initial="hidden" animate="visible" custom={0.3} variants={fade}
            className="text-[15px] md:text-[17px] text-white/50 leading-relaxed mb-14 font-light">
            예식의 품질은 현장에서 결정됩니다
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.45} variants={fade}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="bg-white text-haram-dark px-10 py-4 text-[13px] tracking-wider
                hover:bg-haram-gold hover:text-white transition-all duration-500">
              상담 문의하기
            </Link>
            <Link href="#services"
              className="border border-white/20 text-white/70 px-10 py-4 text-[13px] tracking-wider
                hover:border-haram-gold/60 hover:text-haram-gold transition-all duration-500">
              서비스 보기
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom gradient & scroll indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-[1]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase">Scroll</span>
          <span className="w-[1px] h-6 bg-haram-gold/40 animate-pulse-gold" />
        </motion.div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">About Haram</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-10 font-light">
            결혼식의 완성도는 기획이나 설명이 아니라
            <br className="hidden md:block" />
            당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-12 font-light">
            하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
            <br className="hidden md:block" />
            <span className="text-haram-dark font-normal">경험을 바탕으로 관리하는 회사</span>입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fade}>
            <div className="w-14 h-[1px] bg-haram-gold mx-auto mb-12" />
            <p className="text-[20px] md:text-[28px] text-haram-dark leading-[1.7] font-light">
              화려함보다는 안정감, 연출보다는 정돈된 분위기.
              <br />
              하람은 <em className="font-serif text-[24px] md:text-[32px] not-italic text-gradient-gold">결혼식다운 결혼식</em>을 목표로 합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ SERVICES ══════ */}
      <section id="services" className="py-28 md:py-40 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Services</p>
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark leading-[1.4] font-light">
              하람이 제공하는 서비스
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: '/photobooth',
                img: 'https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png',
                title: '포토부스',
                sub: 'Photobooth',
                desc: '하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스',
              },
              {
                href: '/host',
                img: 'https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png',
                title: '전문사회',
                sub: 'Host',
                desc: '격식과 감동 사이의 완벽한 균형을 잡는 전문 MC',
              },
              {
                href: '/concierge',
                img: 'https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png',
                title: '컨시어지',
                sub: 'Concierge',
                desc: '예식 현장의 모든 흐름을 조율하는 전문 매니저 파견',
              },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }} custom={i * 0.12} variants={fadeScale}>
                <Link href={card.href} className="block group img-overlay-zoom">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-haram-gold/0 group-hover:bg-haram-gold/10 transition-colors duration-700" />

                    {/* Corner accent */}
                    <div className="absolute top-5 left-5 w-8 h-8 border-l border-t border-white/20 group-hover:border-haram-gold/50 transition-colors duration-500" />
                    <div className="absolute bottom-24 right-5 w-8 h-8 border-r border-b border-white/20 group-hover:border-haram-gold/50 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 text-white">
                      <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3 group-hover:text-haram-gold/60 transition-colors duration-500">
                        {card.sub}
                      </p>
                      <h3 className="text-[24px] md:text-[28px] font-light mb-3">{card.title}</h3>
                      <div className="w-6 h-[1px] bg-haram-gold/50 mb-4 group-hover:w-10 transition-all duration-500" />
                      <p className="text-[12px] text-white/40 leading-[1.8] group-hover:text-white/60 transition-colors duration-500">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY HARAM ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Why Haram</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">
              하람을 선택하는 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { num: '01', title: '현장 중심의 실전 경험', desc: '500회 이상의 예식 현장 운영 경험을 바탕으로 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.' },
              { num: '02', title: '통합 서비스 원스톱 관리', desc: '컨시어지, 포토부스, 전문사회를 하나의 팀이 관리하여 예식 전체의 톤과 퀄리티를 일관되게 유지합니다.' },
              { num: '03', title: '맞춤형 운영 설계', desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.' },
              { num: '04', title: '검증된 파트너십', desc: '30곳 이상의 예식장과 정식 제휴를 맺고 있으며, 98%의 고객 만족도를 기록하고 있습니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="card-hover card-shine border border-gray-100 p-9 md:p-11 group">
                <div className="flex items-start gap-5">
                  <span className="text-[40px] font-serif font-light text-haram-gold/20 leading-none shrink-0 group-hover:text-haram-gold/40 transition-colors duration-500">
                    {item.num}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-[17px] text-haram-dark font-normal mb-4">{item.title}</h3>
                    <p className="text-[13px] text-gray-400 leading-[2]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ QUOTE ══════ */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="Wedding" fill className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/40" />

        <div className="absolute top-10 left-10 md:top-16 md:left-16 w-20 h-20 border-l border-t border-white/10" />
        <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 w-20 h-20 border-r border-b border-white/10" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="relative text-center text-white px-8 max-w-2xl">
          <div className="text-[40px] font-serif text-haram-gold/30 leading-none mb-6">&ldquo;</div>
          <p className="text-[20px] md:text-[30px] font-serif leading-[1.8] font-light">
            하객의 첫인상은 공간이 아니라,
            <br />
            사람이 만듭니다.
          </p>
          <div className="w-10 h-[1px] bg-haram-gold/40 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="py-20 md:py-28 px-6 bg-haram-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-haram-gold/[0.02] via-transparent to-haram-gold/[0.02]" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: '500+', label: '누적 예식' },
              { num: '30+', label: '제휴 예식장' },
              { num: '98%', label: '고객 만족도' },
              { num: '3년+', label: '업력' },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="text-center relative">
                {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/10" />}
                <p className="text-[42px] md:text-[52px] font-serif font-light text-white leading-none mb-4 tracking-wide">
                  {stat.num}
                </p>
                <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Process</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">
              하람과 함께하는 과정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: '상담', desc: '전화 · DM · 톡톡으로 간편 상담' },
              { step: '02', title: '설계', desc: '예식 맞춤 운영 매뉴얼 제작' },
              { step: '03', title: '리허설', desc: '사전 현장 점검 및 시뮬레이션' },
              { step: '04', title: '진행', desc: '당일 현장 전담 운영 및 관리' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="text-center py-10 md:py-0 relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-haram-gold/20 to-transparent" />}
                {i < 3 && <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-haram-gold/20" />}

                <div className="relative inline-block mb-6">
                  <p className="text-[38px] font-serif font-light text-haram-gold/30">{item.step}</p>
                </div>
                <h4 className="text-[16px] text-haram-dark font-normal mb-3">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.8] max-w-[160px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-32 md:py-44 px-6 bg-haram-dark text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-32 border border-haram-gold/[0.04] rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-haram-gold/[0.04] rounded-full" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="max-w-2xl mx-auto relative">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-6 h-[1px] bg-haram-gold/30" />
            <p className="text-[10px] tracking-[0.4em] text-haram-gold/50 uppercase">Contact</p>
            <span className="w-6 h-[1px] bg-haram-gold/30" />
          </div>
          <h2 className="text-[30px] md:text-[42px] text-white leading-[1.5] mb-6 font-light">
            특별한 날, 하람과 함께하세요
          </h2>
          <p className="text-[14px] text-gray-500 mb-12 font-light">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="text-[30px] md:text-[40px] font-serif font-light text-haram-gold mb-14 tracking-wider">
            010-7930-1332
          </p>
          <Link href="/contact"
            className="inline-block bg-haram-gold text-white px-12 py-4.5 text-[13px] tracking-wider
              hover:bg-haram-gold-light transition-all duration-500 shadow-lg shadow-haram-gold/20">
            문의하기
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
