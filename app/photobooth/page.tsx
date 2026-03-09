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

export default function PhotoboothPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="포토부스" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
          <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        </div>

        <div className="absolute top-24 left-8 w-20 h-20 border-t border-l border-haram-gold/15 hidden md:block" />
        <div className="absolute bottom-24 right-8 w-20 h-20 border-b border-r border-haram-gold/15 hidden md:block" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[10px] tracking-[0.5em] text-haram-gold/80 mb-8 font-montserrat uppercase font-light">Haram Photobooth</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[26px] md:text-[40px] font-light leading-[1.6] mb-8 font-serif">
            하객이 한 번 더 웃게 되고,
            <br />
            예식장이 한 번 더 기억되는 순간
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/50" />
              <div className="w-2 h-2 rounded-full border border-haram-gold/40" />
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/50" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* Story */}
      <section className="relative py-36 md:py-44 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="hidden md:block absolute left-[10%] top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent" />
        <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-haram-gold/15 to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-6 font-montserrat uppercase font-light">Story</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 leading-[1.4] mb-10 font-serif">
              사진은 남고, 감정은 <span className="text-haram-gold-dark italic">오래갑니다</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-haram-gold to-transparent mx-auto mb-14" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fadeUp}
            className="text-[16px] md:text-[19px] leading-[2.2] text-gray-500 font-light">
            결혼식에는 수많은 순간들이 있습니다.
            <br />
            식장의 음악, 하객들의 웃음, 부모님의 미소, 신랑신부의 떨리는 눈빛.
            <br />
            그 모든 장면은 너무나도 빠르게 지나가지만,
            <br />
            <span className="text-gray-900">사진 한 장이 그 기억을 붙잡아둘 수 있습니다.</span>
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.35} variants={fadeUp}
            className="my-12">
            <div className="w-[1px] h-16 bg-gradient-to-b from-haram-gold/40 to-transparent mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.45} variants={fadeUp}
            className="text-[18px] md:text-[22px] leading-[1.9] text-gray-900 font-light font-serif">
            웨딩은 하루지만, 그 하루가 두고두고 회자되게 만드는 것.
            <br />
            그게 바로 <span className="text-haram-gold italic">하람 포토부스</span>입니다.
          </motion.p>
        </div>
      </section>

      {/* Template + Photobook combined */}
      <section className="py-32 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden
                hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-700">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase font-light">Custom Template</p>
              <h3 className="text-[22px] md:text-[26px] font-light text-gray-900 mb-6 font-serif">
                맞춤형 템플릿 <span className="text-haram-gold-dark italic">제작</span>
              </h3>
              <div className="w-8 h-[1px] bg-haram-gold/40 mb-6" />
              <p className="text-[14px] text-gray-400 font-light leading-[2]">
                신랑신부님의 취향, 웨딩홀의 분위기, 전체 예식의 무드까지 고려하여
                하람 전담 매니저가 단 하나뿐인 맞춤형 템플릿을 직접 제작합니다.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
              className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden
                hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-700">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase font-light">Photo Book</p>
              <h3 className="text-[22px] md:text-[26px] font-light text-gray-900 mb-6 font-serif">
                기억은 흐려지지만
                <br /><span className="text-haram-gold-dark italic">포토북</span>은 선명히 남습니다
              </h3>
              <div className="w-8 h-[1px] bg-haram-gold/40 mb-6" />
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
      <section className="py-32 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-5 font-montserrat uppercase font-light">Process</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 mb-4">
              예약 및 진행과정 <span className="font-serif italic text-haram-gold-dark">안내</span>
            </h2>
            <p className="text-[13px] text-gray-400 font-light">
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
              <span className="text-[44px] font-light text-haram-gold/30 font-montserrat w-16 shrink-0
                group-hover:text-haram-gold/70 transition-colors duration-500">{item.step}</span>
              <div>
                <h3 className="text-[18px] font-light text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] text-haram-gold mb-5 font-montserrat uppercase font-light">Pricing</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">하람 포토부스 <span className="font-serif italic text-haram-gold-dark">패키지</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Package */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden
                hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold to-transparent" />
              <p className="text-[10px] tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase">Standard</p>
              <h3 className="text-[18px] font-light text-gray-900 mb-8">하람 포토부스 패키지</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[48px] font-light text-gray-900 font-montserrat leading-none">500,000</span>
                <span className="text-[13px] text-gray-400 font-light">원/1회</span>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-haram-gold to-transparent my-8" />
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                {['포토부스 장비 대여 (1H + 30M, 총 90분)', '전문 스탭 상주, 현장 진행', '맞춤 템플릿 제작', '무제한 사진 인화', '포토북 제작, 제공', '소품, 테이블, 조명 등'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="block mt-10 text-center bg-haram-gold text-haram-navy py-4 rounded-full text-[11px] tracking-[0.15em] uppercase font-montserrat font-medium
                  hover:bg-haram-gold-light transition-colors duration-400 shadow-lg shadow-haram-gold/15">
                문의하기
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
              className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden
                hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-700">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
              <p className="text-[10px] tracking-[0.3em] text-haram-gold mb-3 font-montserrat uppercase">Benefits</p>
              <h3 className="text-[18px] font-light text-gray-900 mb-3">혜택 프로그램 안내</h3>
              <p className="text-[12px] text-gray-400 font-light mb-8">보다 저렴하게 이용하세요!</p>
              <div className="w-12 h-[1px] bg-gradient-to-r from-haram-gold/50 to-transparent mb-8" />
              <ul className="space-y-5 text-[13px] text-gray-500 font-light">
                {[
                  { label: '홍보 활용 동의시', discount: '10% 할인 [-5만원]' },
                  { label: '블로그 리뷰 작성시', discount: '10% 할인 [-5만원]' },
                  { label: '스토어 리뷰 작성시', discount: '4% 할인 [-2만원]' },
                  { label: '\u2018우리 둘\u2019 이벤트 참여시', discount: '4% 할인 [-2만원]' },
                ].map((item, i) => (
                  <li key={i} className={`flex justify-between items-center ${i < 3 ? 'pb-5 border-b border-gray-100' : ''}`}>
                    <span>{item.label}</span>
                    <span className="text-haram-gold font-montserrat text-[11px]">{item.discount}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-36 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.02]" />
        <div className="absolute top-12 left-12 w-24 h-24 border border-haram-gold/8 rounded-full hidden md:block" />
        <div className="absolute bottom-12 right-12 w-32 h-32 border border-haram-gold/5 rounded-full hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <h2 className="text-[26px] md:text-[42px] font-light text-white mb-5 leading-[1.4] font-serif">
              특별한 <span className="text-haram-gold italic">포토부스</span> 경험을 원하신다면
            </h2>
            <p className="text-[13px] text-white/40 font-light mb-14">
              정확한 가격은 네이버 톡톡, 인스타 DM을 통해 문의해주세요!
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
