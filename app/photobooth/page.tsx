'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function PhotoboothPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="포토부스" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[25%] w-[1px] h-full bg-white/[0.03] hidden md:block" />
          <div className="absolute top-0 left-[75%] w-[1px] h-full bg-white/[0.03] hidden md:block" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-haram-gold/40" />
            <p className="text-[10px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase font-light">Haram Photobooth</p>
            <div className="w-12 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[28px] md:text-[44px] font-light leading-[1.5] mb-8 font-serif">
            하객이 한 번 더 웃게 되고,
            <br />
            예식장이 한 번 더 기억되는 순간
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <div className="flex items-center justify-center gap-6">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/40" />
              <div className="w-2.5 h-2.5 rounded-full border border-haram-gold/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              </div>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/40" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* Story - Editorial Layout */}
      <section className="relative py-28 md:py-40 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={slideRight}>
              <span className="num-deco text-[100px] md:text-[140px] text-haram-gold/[0.07] absolute -top-6 -left-4 select-none hidden md:block">S</span>
              <div className="relative">
                <p className="badge-label text-haram-gold mb-8">Story</p>
                <h2 className="text-[26px] md:text-[36px] font-light text-gray-900 leading-[1.5] mb-8 font-serif">
                  사진은 남고,
                  <br />
                  감정은 <span className="text-haram-gold-dark italic">오래갑니다</span>
                </h2>
                <div className="w-14 h-[1px] bg-gradient-to-r from-haram-gold to-transparent mb-8" />
                <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light mb-6">
                  결혼식에는 수많은 순간들이 있습니다.
                  식장의 음악, 하객들의 웃음, 부모님의 미소, 신랑신부의 떨리는 눈빛.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light">
                  그 모든 장면은 너무나도 빠르게 지나가지만,
                  <span className="text-gray-900 font-normal"> 사진 한 장이 그 기억을 붙잡아둘 수 있습니다.</span>
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={slideLeft}>
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
                  alt="Photobooth" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="bg-haram-cream p-6 rounded-xl mt-[-30px] mx-6 relative z-10 border border-gray-100">
                <p className="text-[15px] text-gray-800 font-light font-serif italic leading-relaxed text-center">
                  웨딩은 하루지만, 그 하루가 두고두고 회자되게 만드는 것.
                  <br />
                  그게 바로 <span className="text-haram-gold">하람 포토부스</span>입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Template + Photobook */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Feature</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 font-serif">
              하람만의 <span className="text-haram-gold-dark italic">특별함</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="card-lift bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <div className="w-14 h-14 rounded-full border-2 border-haram-gold/20 flex items-center justify-center mb-8">
                <span className="text-haram-gold font-montserrat text-[12px] font-semibold">01</span>
              </div>
              <p className="text-[10px] tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase font-light">Custom Template</p>
              <h3 className="text-[22px] md:text-[26px] font-light text-gray-900 mb-6 font-serif">
                맞춤형 템플릿 <span className="text-haram-gold-dark italic">제작</span>
              </h3>
              <div className="w-10 h-[1px] bg-haram-gold/30 mb-6" />
              <p className="text-[14px] text-gray-400 font-light leading-[2]">
                신랑신부님의 취향, 웨딩홀의 분위기, 전체 예식의 무드까지 고려하여
                하람 전담 매니저가 단 하나뿐인 맞춤형 템플릿을 직접 제작합니다.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
              className="card-lift bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <div className="w-14 h-14 rounded-full border-2 border-haram-gold/20 flex items-center justify-center mb-8">
                <span className="text-haram-gold font-montserrat text-[12px] font-semibold">02</span>
              </div>
              <p className="text-[10px] tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase font-light">Photo Book</p>
              <h3 className="text-[22px] md:text-[26px] font-light text-gray-900 mb-6 font-serif">
                기억은 흐려지지만
                <br /><span className="text-haram-gold-dark italic">포토북</span>은 선명히 남습니다
              </h3>
              <div className="w-10 h-[1px] bg-haram-gold/30 mb-6" />
              <p className="text-[14px] text-gray-400 font-light leading-[2]">
                결혼식이 끝나도, 시간이 지나도,
                그날의 웃음과 공기를 다시 떠올릴 수 있는 방법.
                하람의 감성 포토북이 그 역할을 합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="mb-16">
            <p className="badge-label text-haram-gold mb-6">Process</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              예약 및 진행과정 <span className="font-serif italic text-haram-gold-dark">안내</span>
            </h2>
            <p className="text-[13px] text-gray-400 font-light mt-4">
              디자인부터 현장 운영까지 모든 과정이 자동처럼 진행됩니다.
            </p>
          </motion.div>

          {[
            { step: '01', title: '네이버 톡톡, 인스타 DM 문의', desc: '복잡한 절차보다 즉각적인 소통을 중요하게 생각합니다. 1:1 맞춤 안내로 친절하게 상담해드립니다.' },
            { step: '02', title: '네이버폼 예약서 작성 후 스토어 결제', desc: '상담 후 제공되는 네이버폼을 통해 예약서를 작성해 주세요. 스토어 결제까지 완료되면 본격적인 준비가 시작됩니다.' },
            { step: '03', title: '템플릿 디자인 확정 및 최종 확인', desc: '포토부스 템플릿 시안을 전달드립니다. 수정도 가능하며, 최종 확인 후 인쇄가 진행됩니다.' },
            { step: '04', title: '행사 진행 및 포토방명록 전달', desc: '하람 전담 스탭이 현장에서 설치, 진행, 안내까지 모두 맡습니다. 예식 이후에는 포토 방명록이 정리되어 전달됩니다.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.1} variants={fadeUp}
              className="flex gap-8 md:gap-14 py-10 border-b border-gray-100 group hover:border-haram-gold/20 transition-colors duration-500">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-haram-gold/20 flex items-center justify-center
                  group-hover:border-haram-gold/50 group-hover:bg-haram-gold/5 transition-all duration-500">
                  <span className="text-haram-gold font-montserrat text-[11px] font-semibold">{item.step}</span>
                </div>
              </div>
              <div>
                <h3 className="text-[17px] font-light text-gray-900 mb-3 group-hover:text-haram-gold-dark transition-colors duration-500">{item.title}</h3>
                <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Pricing</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">하람 포토부스 <span className="font-serif italic text-haram-gold-dark">패키지</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Package */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="card-lift bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-haram-gold/60 via-haram-gold to-haram-gold/60" />
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-haram-gold/10 rounded-full">
                  <p className="text-[9px] tracking-[0.2em] text-haram-gold-dark font-montserrat uppercase font-medium">Standard</p>
                </div>
              </div>
              <h3 className="text-[18px] font-light text-gray-900 mb-8">하람 포토부스 패키지</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[48px] font-light text-gray-900 font-montserrat leading-none">500,000</span>
                <span className="text-[13px] text-gray-400 font-light">원/1회</span>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-haram-gold/30 to-transparent my-8" />
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                {['포토부스 장비 대여 (1H + 30M, 총 90분)', '전문 스탭 상주, 현장 진행', '맞춤 템플릿 제작', '무제한 사진 인화', '포토북 제작, 제공', '소품, 테이블, 조명 등'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-haram-gold/60 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="group block mt-10 text-center bg-haram-gold text-haram-navy py-4 rounded-full text-[11px] tracking-[0.15em] uppercase font-montserrat font-medium
                  hover:bg-haram-gold-light transition-colors duration-400 shadow-lg shadow-haram-gold/15">
                문의하기
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
              className="card-lift bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-haram-cream rounded-full">
                  <p className="text-[9px] tracking-[0.2em] text-haram-gold-dark font-montserrat uppercase font-medium">Benefits</p>
                </div>
              </div>
              <h3 className="text-[18px] font-light text-gray-900 mb-3">혜택 프로그램 안내</h3>
              <p className="text-[12px] text-gray-400 font-light mb-8">보다 저렴하게 이용하세요!</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-haram-gold/20 to-transparent mb-8" />
              <ul className="space-y-0">
                {[
                  { label: '홍보 활용 동의시', discount: '10% 할인 [-5만원]' },
                  { label: '블로그 리뷰 작성시', discount: '10% 할인 [-5만원]' },
                  { label: '스토어 리뷰 작성시', discount: '4% 할인 [-2만원]' },
                  { label: '\u2018우리 둘\u2019 이벤트 참여시', discount: '4% 할인 [-2만원]' },
                ].map((item, i) => (
                  <li key={i} className={`flex justify-between items-center py-5 ${i < 3 ? 'border-b border-gray-100' : ''} text-[13px] text-gray-500 font-light`}>
                    <span>{item.label}</span>
                    <span className="text-haram-gold font-montserrat text-[11px] font-medium">{item.discount}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/20 to-haram-navy" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[150px] md:text-[300px] font-serif font-light text-white/[0.015] leading-none select-none">PHOTO</span>
        </div>

        <div className="absolute top-10 left-10 w-24 h-24 border border-haram-gold/[0.06] rounded-full hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-haram-gold/[0.04] rounded-full hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="badge-label text-haram-gold/60 mb-8 justify-center">Contact</p>
            <h2 className="text-[28px] md:text-[44px] font-light text-white mb-5 leading-[1.4] font-serif">
              특별한 <span className="text-haram-gold italic">포토부스</span> 경험을 원하신다면
            </h2>
            <p className="text-[13px] text-white/35 font-light mb-14">
              정확한 가격은 네이버 톡톡, 인스타 DM을 통해 문의해주세요!
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
