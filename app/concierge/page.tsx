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

export default function ConciergePage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
            alt="컨시어지" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[25%] w-[1px] h-full bg-white/[0.03] hidden md:block" />
          <div className="absolute top-0 left-[75%] w-[1px] h-full bg-white/[0.03] hidden md:block" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-haram-gold/40" />
            <p className="text-[10px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase font-light">Haram Concierge</p>
            <div className="w-12 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[26px] md:text-[42px] font-light leading-[1.5] mb-8 font-serif">
            하람의 전문 매니저가 실시간으로
            <br className="hidden md:block" />
            예식의 흐름을 조율합니다
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

      {/* B2B About - Editorial */}
      <section className="relative py-28 md:py-40 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={slideRight}>
              <span className="num-deco text-[100px] md:text-[140px] text-haram-gold/[0.07] absolute -top-6 -left-4 select-none hidden md:block">B2B</span>
              <div className="relative pt-8 md:pt-16">
                <p className="badge-label text-haram-gold mb-8">About</p>
                <h2 className="text-[26px] md:text-[38px] font-light text-gray-900 leading-[1.5] mb-8 font-serif">
                  예식장과 직접 계약하는
                  <br />
                  <span className="text-haram-gold-dark italic">B2B 서비스</span>
                </h2>
                <div className="w-14 h-[1px] bg-gradient-to-r from-haram-gold to-transparent mb-8" />
                <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light">
                  하람 컨시어지는 예식장의 운영을 보완하는 전문 컨시어지 파견 서비스입니다.
                  단순한 행사 인력이 아니라, <span className="text-gray-900 font-normal">예식장 내부 구조, 동선, 운영 흐름에 대한 이해</span>를 바탕으로
                  실행 중심의 현장 매니저를 제공합니다.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={slideLeft}>
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                <Image src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
                  alt="Concierge" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Feature</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              예식장의 품격, 하람과 함께 <span className="font-serif italic text-haram-gold-dark">완성</span>하세요
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: '실시간 예식 흐름 통제', desc: '리허설부터 입장 타이밍, 사회자등 관계자 연결까지. 완벽한 과정을 만들어냅니다.' },
              { title: '예식장 전용 매뉴얼 제공', desc: '각 예식장 구조와 브랜드에 맞는 맞춤형 운영 매뉴얼을 설계합니다.' },
              { title: '이미지 통일성 확보', desc: '스태프 복장부터 응대 방식까지 통일된 이미지로 품격을 높입니다.' },
              { title: '인력 교육 및 트레이닝', desc: '지속적인 교육 시스템으로 전문성과 서비스 퀄리티를 유지합니다.' },
              { title: '계약형 B2B 안정성 보장', desc: '계약 기반으로 안정적이고 지속적인 파트너십을 제공합니다.' },
              { title: '전담 운영 매니저 배정', desc: '각 예식장에 전담 매니저를 배정하여 밀착 관리합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fadeUp}
                className="group card-lift bg-white p-9 rounded-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/0 to-transparent
                  group-hover:via-haram-gold/40 transition-all duration-700" />
                <div className="w-12 h-12 rounded-full border-2 border-haram-gold/20 flex items-center justify-center mb-7
                  group-hover:border-haram-gold/50 group-hover:bg-haram-gold/5 transition-all duration-500">
                  <span className="text-haram-gold font-montserrat text-[11px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-[16px] font-medium text-gray-900 mb-3">{item.title}</h3>
                <div className="w-6 h-[1px] bg-haram-gold/30 mb-4" />
                <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="mb-16">
            <p className="badge-label text-haram-gold mb-6">Services</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              제휴부터 현장 운영까지
            </h2>
          </motion.div>

          {[
            { step: '01', title: '상담 및 제휴 제안', desc: '예식장 규모, 일일 예식 횟수, 홀 배치 구조, 피로연 운영 여부, 인력 운영 방식 등을 면밀히 파악합니다.' },
            { step: '02', title: '맞춤 매뉴얼 설계', desc: '현장을 기반으로 한 맞춤형 매뉴얼을 설계하여 일관된 운영 퀄리티를 확보합니다.' },
            { step: '03', title: '현장 리허설 및 시뮬레이션', desc: '실제 예식장 환경에서 리허설을 진행하여 문제 가능성을 최소화합니다.' },
            { step: '04', title: '웨딩 전담 인력 투입', desc: '예식장 브랜드의 품격을 보존하고 하객 경험을 향상시키기 위해 전담 인력이 현장을 책임집니다.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.1} variants={fadeUp}
              className="flex gap-8 md:gap-14 py-10 border-b border-gray-100 group hover:border-haram-gold/20 transition-colors duration-500">
              <div className="shrink-0">
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

      {/* Testimonials */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Testimonial</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 font-serif">
              하람과 함께한 예식장의 이야기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '안산 0000웨딩', review: '하람이 투입되고 나서는 전체 이미지가 \'정리된 느낌, 신뢰감 있는 분위기\'로 바뀌었다는 고객 후기가 많습니다.' },
              { name: '천안 0웨딩', review: '서비스 품질에 대한 피드백이 숫자로 증명된 건 처음이라 인상적이었습니다. 하객 응대, 복장 통일성 등이 깊게 남습니다.' },
              { name: '평택 0000웨딩', review: '하람이 전담한 이후엔 응대 매너부터 동선 통제까지 훨씬 더 체계적으로 운영되고 있어요. 현장 실장 입장에서는 정말 마음이 편해졌습니다.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.12} variants={fadeUp}
                className="card-lift bg-white p-9 rounded-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/30 to-transparent" />
                <div className="text-haram-gold/20 text-[50px] font-serif leading-none mb-3">&ldquo;</div>
                <p className="text-[13px] text-gray-500 font-light leading-[2] mb-8">{t.review}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-haram-gold text-[10px]">&#9733;</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-gray-700">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} variants={fadeUp}
            className="text-center text-[12px] text-gray-400 font-light mt-14">
            위 웨딩홀을 제외하고도 수많은 예식장의 중요한 날을 하람이 함께하고 있습니다
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/20 to-haram-navy" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[120px] md:text-[250px] font-serif font-light text-white/[0.015] leading-none select-none tracking-wider">CONCIERGE</span>
        </div>

        <div className="absolute top-10 left-10 w-24 h-24 border border-haram-gold/[0.06] rounded-full hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-haram-gold/[0.04] rounded-full hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="badge-label text-haram-gold/60 mb-8 justify-center">Contact</p>
            <h2 className="text-[28px] md:text-[44px] font-light text-white mb-5 leading-[1.4] font-serif">
              예식장의 품격을 높이는
              <br />
              가장 확실한 <span className="text-haram-gold italic">방법</span>
            </h2>
            <p className="text-[13px] text-white/35 font-light mb-14">
              간단한 문의만으로도 컨시어지 서비스 전반을 안내드립니다.
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
