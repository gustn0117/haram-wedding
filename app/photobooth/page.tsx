'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function PhotoboothPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="포토부스" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
        </div>

        {/* Decorative frame */}
        <div className="absolute top-28 left-8 md:left-16 w-16 h-16 border-l border-t border-white/10" />
        <div className="absolute bottom-24 right-8 md:right-16 w-16 h-16 border-r border-b border-white/10" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fade}
            className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[1px] bg-haram-gold/40" />
            <p className="text-[11px] tracking-[0.5em] text-haram-gold/70 uppercase">Photobooth</p>
            <span className="w-10 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[28px] md:text-[44px] leading-[1.5] mb-6 font-light">
            하객이 한 번 더 웃게 되고,
            <br />
            예식장이 한 번 더 기억되는 순간
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fade}>
            <div className="w-10 h-[1px] bg-haram-gold/50 mx-auto" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ══════ STORY ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Story</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-8 font-light">
            결혼식에는 수많은 순간들이 있습니다.
            <br className="hidden md:block" />
            식장의 음악, 하객들의 웃음, 부모님의 미소, 신랑신부의 떨리는 눈빛.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-12 font-light">
            그 모든 장면은 너무나도 빠르게 지나가지만,
            <br className="hidden md:block" />
            <span className="text-haram-dark font-normal">사진 한 장이 그 기억을 붙잡아둘 수 있습니다.</span>
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fade}>
            <div className="w-14 h-[1px] bg-haram-gold mx-auto mb-12" />
            <p className="text-[20px] md:text-[26px] text-haram-dark leading-[1.7] font-light">
              웨딩은 하루지만, 그 하루가 두고두고 회자되게 만드는 것.
              <br />
              그게 바로 <em className="font-serif text-[24px] md:text-[30px] not-italic text-gradient-gold">하람 포토부스</em>입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ FEATURES ══════ */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Feature</p>
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">하람만의 특별함</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: '맞춤형 템플릿 제작', desc: '신랑신부님의 취향, 웨딩홀의 분위기, 전체 예식의 무드까지 고려하여 하람 전담 매니저가 단 하나뿐인 맞춤형 템플릿을 직접 제작합니다.', icon: '01' },
              { label: '감성 포토북 제공', desc: '결혼식이 끝나도, 시간이 지나도, 그날의 웃음과 공기를 다시 떠올릴 수 있는 방법. 하람의 감성 포토북이 그 역할을 합니다.', icon: '02' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeScale}
                className="card-hover card-shine bg-white p-9 md:p-11 border border-gray-100 group">
                <span className="text-[36px] font-serif font-light text-haram-gold/20 group-hover:text-haram-gold/40 transition-colors duration-500">{item.icon}</span>
                <h3 className="text-[18px] text-haram-dark font-normal mt-4 mb-5">{item.label}</h3>
                <p className="text-[13px] text-gray-400 leading-[2.1]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Process</p>
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">예약 및 진행과정</h2>
          </motion.div>

          {[
            { step: '01', title: '네이버 톡톡, 인스타 DM 문의', desc: '1:1 맞춤 안내로 친절하게 상담해드립니다.' },
            { step: '02', title: '예약서 작성 후 결제', desc: '네이버폼 예약서 작성 후 스토어 결제로 준비가 시작됩니다.' },
            { step: '03', title: '템플릿 디자인 확정', desc: '시안을 전달드리며, 수정 후 최종 확인되면 인쇄가 진행됩니다.' },
            { step: '04', title: '행사 진행 및 포토방명록 전달', desc: '전담 스탭이 설치부터 진행까지 맡고, 이후 포토 방명록을 전달드립니다.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.08} variants={fade}
              className="group flex gap-6 md:gap-10 py-9 border-b border-gray-100 hover:border-haram-gold/20 transition-colors duration-500">
              <span className="text-[32px] font-serif font-light text-haram-gold/20 shrink-0 w-12 group-hover:text-haram-gold/40 transition-colors duration-500">
                {item.step}
              </span>
              <div>
                <h3 className="text-[16px] text-haram-dark font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ PRICING ══════ */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Pricing</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">패키지 안내</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
              className="bg-white p-9 md:p-11 border border-gray-100 card-hover relative overflow-hidden">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-haram-gold/5 to-transparent" />

              <p className="text-[10px] tracking-[0.3em] text-haram-gold uppercase mb-5">Standard Package</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-[48px] font-serif font-light text-haram-dark leading-none">500,000</span>
                <span className="text-[13px] text-gray-400 ml-1">원/1회</span>
              </div>
              <ul className="space-y-4 text-[13px] text-gray-500 mb-10">
                {['포토부스 장비 대여 (총 90분)', '전문 스탭 상주 · 현장 진행', '맞춤 템플릿 제작', '무제한 사진 인화', '포토북 제작 · 제공', '소품 · 테이블 · 조명'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-[1px] bg-haram-gold mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="block text-center bg-haram-dark text-white py-4 text-[13px] tracking-wider
                  hover:bg-haram-gold transition-all duration-500">
                문의하기
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeScale}
              className="bg-white p-9 md:p-11 border border-gray-100 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-haram-gold/5 to-transparent" />

              <p className="text-[10px] tracking-[0.3em] text-haram-gold uppercase mb-5">Benefits</p>
              <h3 className="text-[20px] text-haram-dark font-light mb-2">혜택 프로그램</h3>
              <p className="text-[12px] text-gray-400 mb-10">보다 저렴하게 이용하세요</p>
              {[
                { label: '홍보 활용 동의시', discount: '-5만원' },
                { label: '블로그 리뷰 작성시', discount: '-5만원' },
                { label: '스토어 리뷰 작성시', discount: '-2만원' },
                { label: '우리 둘 이벤트 참여시', discount: '-2만원' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center py-4.5 text-[13px] ${i < 3 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-gray-500">{item.label}</span>
                  <span className="text-haram-gold font-normal tracking-wide">{item.discount}</span>
                </div>
              ))}
            </motion.div>
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
          <h2 className="text-[28px] md:text-[40px] text-white leading-[1.5] mb-6 font-light">
            특별한 포토부스 경험을 원하신다면
          </h2>
          <p className="text-[14px] text-gray-500 mb-12 font-light">
            정확한 가격은 네이버 톡톡, 인스타 DM을 통해 문의해주세요
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
