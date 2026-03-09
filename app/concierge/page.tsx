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

export default function ConciergePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
            alt="컨시어지" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
            className="text-[11px] tracking-[0.4em] text-white/50 mb-6 uppercase">Concierge</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[26px] md:text-[42px] leading-[1.5] mb-6">
            하람의 전문 매니저가 실시간으로
            <br className="hidden md:block" />
            예식의 흐름을 조율합니다
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fade}>
            <div className="w-10 h-[1px] bg-haram-gold/50 mx-auto" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-8 uppercase">About</p>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[24px] md:text-[32px] text-haram-dark leading-[1.5] mb-8">
            예식장과 직접 계약하는 B2B 서비스
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[19px] leading-[2.1] text-gray-600">
            하람 컨시어지는 예식장의 운영을 보완하는 전문 파견 서비스입니다.
            <br className="hidden md:block" />
            단순한 행사 인력이 아니라, <span className="text-haram-dark font-normal">예식장 내부 구조, 동선, 운영 흐름에 대한 이해</span>를 바탕으로
            <br className="hidden md:block" />
            실행 중심의 현장 매니저를 제공합니다.
          </motion.p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-36 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Feature</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">하람 컨시어지의 특징</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: '실시간 예식 흐름 통제', desc: '리허설부터 입장 타이밍, 관계자 연결까지 완벽한 과정을 만듭니다.' },
              { title: '예식장 전용 매뉴얼', desc: '각 예식장 구조와 브랜드에 맞는 맞춤형 운영 매뉴얼을 설계합니다.' },
              { title: '이미지 통일성 확보', desc: '스태프 복장부터 응대 방식까지 통일된 이미지로 품격을 높입니다.' },
              { title: '인력 교육 및 트레이닝', desc: '지속적인 교육으로 전문성과 서비스 퀄리티를 유지합니다.' },
              { title: '계약형 B2B 안정성', desc: '계약 기반으로 안정적이고 지속적인 파트너십을 제공합니다.' },
              { title: '전담 운영 매니저 배정', desc: '각 예식장에 전담 매니저를 배정하여 밀착 관리합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.06} variants={fade}
                className="bg-white p-7 md:p-8 border border-gray-100">
                <h3 className="text-[15px] text-haram-dark font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Process</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">제휴부터 현장 운영까지</h2>
          </motion.div>

          {[
            { step: '01', title: '상담 및 제휴 제안', desc: '예식장 규모, 홀 배치, 피로연 운영 여부, 인력 운영 방식 등을 파악합니다.' },
            { step: '02', title: '맞춤 매뉴얼 설계', desc: '현장 기반 맞춤형 매뉴얼을 설계하여 일관된 운영 퀄리티를 확보합니다.' },
            { step: '03', title: '현장 리허설', desc: '실제 예식장에서 리허설을 진행하여 문제 가능성을 최소화합니다.' },
            { step: '04', title: '전담 인력 투입', desc: '예식장 브랜드의 품격을 보존하고 하객 경험을 향상시킵니다.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.08} variants={fade}
              className="flex gap-6 md:gap-10 py-8 border-b border-gray-100">
              <span className="text-[28px] font-serif text-haram-gold/30 shrink-0 w-10">{item.step}</span>
              <div>
                <h3 className="text-[16px] text-haram-dark font-normal mb-2">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.8]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Testimonial</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">파트너 예식장의 이야기</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '안산 0000웨딩', review: '하람이 투입되고 나서는 전체 이미지가 \'정리된 느낌, 신뢰감 있는 분위기\'로 바뀌었다는 고객 후기가 많습니다.' },
              { name: '천안 0웨딩', review: '서비스 품질에 대한 피드백이 숫자로 증명된 건 처음이라 인상적이었습니다.' },
              { name: '평택 0000웨딩', review: '하람이 전담한 이후엔 응대 매너부터 동선 통제까지 훨씬 더 체계적으로 운영되고 있어요.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="bg-white p-8 border border-gray-100">
                <p className="text-[13px] text-gray-500 leading-[2] mb-6">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-haram-gold text-[10px]">&#9733;</span>
                    ))}
                  </div>
                  <span className="text-[12px] text-gray-600">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 bg-haram-dark text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[38px] text-white leading-[1.5] mb-5">
            예식장의 품격을 높이는 가장 확실한 방법
          </h2>
          <p className="text-[14px] text-gray-500 mb-12">
            간단한 문의만으로 컨시어지 서비스 전반을 안내드립니다
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
