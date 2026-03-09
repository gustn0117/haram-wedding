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

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image
            src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="HARAM Wedding" fill className="object-cover" priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/45" />

        <motion.div className="relative z-10 text-center text-white px-6 max-w-3xl" style={{ opacity: heroOpacity }}>
          <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
            className="text-[11px] tracking-[0.4em] text-white/50 mb-6 uppercase">
            Wedding Management
          </motion.p>

          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[48px] md:text-[72px] lg:text-[88px] font-serif font-medium tracking-[0.08em] leading-[1.1] mb-6">
            HARAM
          </motion.h1>

          <motion.p initial="hidden" animate="visible" custom={0.25} variants={fade}
            className="text-[15px] md:text-[17px] text-white/60 leading-relaxed mb-12">
            예식의 품질은 현장에서 결정됩니다
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.4} variants={fade}
            className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact"
              className="bg-white text-haram-dark px-8 py-3.5 text-[13px] font-normal tracking-wide
                hover:bg-haram-gold hover:text-white transition-all duration-400">
              상담 문의하기
            </Link>
            <Link href="#services"
              className="border border-white/25 text-white/80 px-8 py-3.5 text-[13px] tracking-wide
                hover:border-white/60 hover:text-white transition-all duration-400">
              서비스 보기
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-8 uppercase">About</p>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.1] text-gray-600 mb-10">
            결혼식의 완성도는 기획이나 설명이 아니라
            <br className="hidden md:block" />
            당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.1] text-gray-600 mb-10">
            하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
            <br className="hidden md:block" />
            <span className="text-haram-dark font-normal">경험을 바탕으로 관리하는 회사</span>입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fade}>
            <div className="w-12 h-[1px] bg-haram-gold mx-auto mb-10" />
            <p className="text-[20px] md:text-[26px] text-haram-dark leading-[1.7]">
              화려함보다는 안정감, 연출보다는 정돈된 분위기.
              <br />
              하람은 <em className="font-serif text-[24px] md:text-[30px] not-italic text-haram-gold">결혼식다운 결혼식</em>을 목표로 합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-36 px-6 bg-haram-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Services</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark leading-[1.4]">
              하람이 제공하는 서비스
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                viewport={{ once: true, margin: '-50px' }} custom={i * 0.12} variants={fade}>
                <Link href={card.href} className="block group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">{card.sub}</p>
                      <h3 className="text-[22px] md:text-[26px] font-normal mb-3">{card.title}</h3>
                      <p className="text-[12px] text-white/50 leading-[1.8] group-hover:text-white/70 transition-colors duration-500">
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

      {/* WHY HARAM */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Why Haram</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">
              하람을 선택하는 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', title: '현장 중심의 실전 경험', desc: '500회 이상의 예식 현장 운영 경험을 바탕으로 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.' },
              { num: '02', title: '통합 서비스 원스톱 관리', desc: '컨시어지, 포토부스, 전문사회를 하나의 팀이 관리하여 예식 전체의 톤과 퀄리티를 일관되게 유지합니다.' },
              { num: '03', title: '맞춤형 운영 설계', desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.' },
              { num: '04', title: '검증된 파트너십', desc: '30곳 이상의 예식장과 정식 제휴를 맺고 있으며, 98%의 고객 만족도를 기록하고 있습니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="border border-gray-100 p-8 md:p-10 hover:border-haram-gold/30 transition-colors duration-500">
                <span className="text-[11px] tracking-[0.15em] text-haram-gold">{item.num}</span>
                <h3 className="text-[17px] text-haram-dark font-normal mt-3 mb-4">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="Wedding" fill className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
          className="relative text-center text-white px-6 max-w-2xl">
          <p className="text-[20px] md:text-[30px] font-serif leading-[1.7] italic">
            &ldquo;하객의 첫인상은 공간이 아니라,
            <br />
            사람이 만듭니다.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 px-6 bg-haram-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '500+', label: '누적 예식' },
              { num: '30+', label: '제휴 예식장' },
              { num: '98%', label: '고객 만족도' },
              { num: '3년+', label: '업력' },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="text-center">
                <p className="text-[36px] md:text-[44px] font-serif text-white leading-none mb-3">{stat.num}</p>
                <p className="text-[11px] text-gray-500 tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Process</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">
              하람과 함께하는 과정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '상담', desc: '전화 · DM · 톡톡으로 간편 상담' },
              { step: '02', title: '설계', desc: '예식 맞춤 운영 매뉴얼 제작' },
              { step: '03', title: '리허설', desc: '사전 현장 점검 및 시뮬레이션' },
              { step: '04', title: '진행', desc: '당일 현장 전담 운영 및 관리' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="text-center">
                <p className="text-[32px] font-serif text-haram-gold/40 mb-4">{item.step}</p>
                <h4 className="text-[16px] text-haram-dark font-normal mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 bg-haram-dark text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] text-haram-gold/60 mb-6 uppercase">Contact</p>
          <h2 className="text-[28px] md:text-[40px] text-white leading-[1.5] mb-5">
            특별한 날, 하람과 함께하세요
          </h2>
          <p className="text-[14px] text-gray-500 mb-10">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="text-[28px] md:text-[36px] font-serif text-haram-gold mb-12 tracking-wide">
            010-7930-1332
          </p>
          <Link href="/contact"
            className="inline-block bg-haram-gold text-white px-10 py-4 text-[13px] tracking-wide
              hover:bg-haram-gold-light transition-colors duration-400">
            문의하기
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
