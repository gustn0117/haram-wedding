'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ConciergePage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
            alt="컨시어지" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 watermark-overlay" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[11px] tracking-[0.35em] text-haram-gold mb-5 font-montserrat">HARAM CONCIERGE</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-3xl md:text-[42px] font-light leading-[1.5] mb-6">
            하람의 전문 매니저가 실시간으로 예식의 흐름을 조율하며
            <br className="hidden md:block" />
            현장 책임자로서 역할을 수행합니다
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <div className="gold-divider mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">About</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 leading-[1.4] mb-6">
              예식장과 직접 계약하는 B2B 서비스입니다
            </h2>
            <div className="gold-divider mx-auto mb-8" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fadeUp}
            className="text-center">
            <p className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
              하람 컨시어지는 예식장의 운영을 보완하는 전문 컨시어지 파견 서비스입니다.
              <br className="hidden md:block" />
              단순한 행사 인력이 아니라, 예식장 내부 구조, 동선, 운영 흐름에 대한 이해를 바탕으로
              <br className="hidden md:block" />
              실행 중심의 현장 매니저를 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Feature</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900">
              예식장의 품격, 하람과 함께 완성하세요
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 group">
                <div className="w-8 h-[1px] bg-haram-gold mb-6 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-[17px] font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[14px] text-gray-400 font-light leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Services</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900">
              제휴부터 현장 운영까지, 전 과정 안내
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
              className="flex gap-8 md:gap-12 py-10 border-b border-gray-100 group">
              <span className="text-[40px] font-light text-haram-gold/60 font-montserrat w-16 shrink-0
                group-hover:text-haram-gold transition-colors duration-500">{item.step}</span>
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-gray-400 font-light leading-[1.8]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Testimonial</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900">
              &ldquo;하람과 함께한 예식장의 이야기&rdquo;
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '안산 0000웨딩', review: '하람이 투입되고 나서는 전체 이미지가 \'정리된 느낌, 신뢰감 있는 분위기\'로 바뀌었다는 고객 후기가 많습니다.' },
              { name: '천안 0웨딩', review: '서비스 품질에 대한 피드백이 숫자로 증명된 건 처음이라 인상적이었습니다. 하객 응대, 복장 통일성 등이 깊게 남습니다.' },
              { name: '평택 0000웨딩', review: '하람이 전담한 이후엔 응대 매너부터 동선 통제까지 훨씬 더 체계적으로 운영되고 있어요. 현장 실장 입장에서는 정말 마음이 편해졌습니다.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="text-haram-gold text-3xl font-display mb-4 opacity-40">&ldquo;</div>
                <p className="text-[14px] text-gray-500 font-light leading-[1.9] mb-6">{t.review}</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-haram-gold text-xs">&#9733;</span>
                    ))}
                  </div>
                  <span className="text-[13px] font-medium text-gray-700 ml-2">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} variants={fadeUp}
            className="text-center text-[14px] text-gray-400 font-light mt-12">
            위 웨딩홀을 제외하고도 수많은 예식장의 중요한 날을 하람이 함께하고 있습니다
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">How we can help you</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 mb-4">
              예식장의 품격을 높이는 가장 확실한 방법
            </h2>
            <p className="text-[14px] text-gray-400 font-light mb-10">
              간단한 문의만으로도 컨시어지 서비스 전반을 안내드립니다.
            </p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-white px-10 py-4 rounded-full text-[13px] tracking-[0.05em] hover:opacity-90 transition-opacity">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
