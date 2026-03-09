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

export default function HostPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
            alt="전문사회" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
          <div className="absolute inset-0 watermark-overlay" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[10px] tracking-[0.4em] text-haram-gold/90 mb-6 font-montserrat uppercase">Haram Host</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[28px] md:text-[40px] font-light leading-[1.5] mb-8">
            마이크를 잡는 순간부터 마지막 퇴장까지,
            <br className="hidden md:block" />
            격식과 감동 사이의 완벽한 균형
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-haram-gold/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-haram-gold/50" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-haram-gold/60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <div className="gold-divider mx-auto mb-14" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
            className="text-[15px] md:text-[18px] leading-[2.2] text-gray-500 font-light">
            예식이 시작되기 전, 마이크를 잡은 사회자의 한마디는
            <br />
            하객의 표정을 바꾸고, 부모님의 긴장을 풀고,
            <br />
            신랑신부의 떨림을 안정시킵니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fadeUp}
            className="my-10">
            <div className="w-[1px] h-14 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} variants={fadeUp}
            className="text-[15px] md:text-[18px] leading-[2.2] text-gray-500 font-light">
            하람의 전문 사회자는 단순히 멘트를 읽는 사람이 아니라,
            <br />
            감정의 흐름과 예식의 리듬을 설계하는 조율자이자
            <br />
            그날 예식장의 품격을 완성하는 목소리입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.55} variants={fadeUp}
            className="my-10">
            <div className="w-[1px] h-14 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.65} variants={fadeUp}
            className="text-[17px] md:text-[20px] leading-[1.8] text-gray-900 font-light">
            우리는 사회자가 예식의 공기, 흐름, 감정, 실수를
            <br />
            모두 조율하는 <span className="text-haram-gold italic">가장 조용한 리더</span>라고 믿습니다.
          </motion.p>
        </div>
      </section>

      {/* Key Message */}
      <section className="relative py-24 px-6 bg-haram-navy text-center overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-r from-haram-navy via-[#1a2a55] to-haram-navy" />
        <div className="relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-haram-gold/40" />
              <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              <div className="w-12 h-[1px] bg-haram-gold/40" />
            </div>
            <p className="text-[22px] md:text-[30px] font-light text-white/90 tracking-wide font-display leading-[1.6]">
              결혼식의 품격은 <span className="text-haram-gold">목소리</span>에서 시작됩니다.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-[1px] bg-haram-gold/40" />
              <div className="w-1 h-1 rounded-full bg-haram-gold/50" />
              <div className="w-12 h-[1px] bg-haram-gold/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 bg-[#fafaf7]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase">Feature</p>
            <h2 className="text-[28px] md:text-[38px] font-light text-gray-900">
              하람 전문사회의 특징
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: '맞춤 대본 커스터마이징', desc: '예식장 구조, 식순 순서, 하객 규모등을 반영하여 스크립트를 직접 제작합니다.' },
              { title: '예식 자료 및 음원 공유', desc: '직접 사용하는 자료들을 예비부부, 예식장과 사전에 공유하여 도움을 드립니다.' },
              { title: '예식장 운영진과의 협업', desc: '예식장 내부 시스템을 존중하며 현장 조율 중심형 진행을 원칙으로 합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className="bg-white p-9 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 group text-center">
                <div className="w-12 h-12 rounded-full border border-haram-gold/25 flex items-center justify-center mx-auto mb-7
                  group-hover:border-haram-gold/60 group-hover:bg-haram-gold/5 transition-all duration-500">
                  <span className="text-haram-gold font-montserrat text-[12px] font-medium">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-[16px] font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MC Profile */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase">Professional Host</p>
            <h2 className="text-[28px] md:text-[38px] font-light text-gray-900">하람 전문사회자</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
            className="bg-[#fafaf7] rounded-2xl p-10 md:p-14 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />
            <h3 className="text-[24px] font-light text-gray-900 mb-3">유상혁</h3>
            <div className="gold-divider mb-10" />
            <div className="space-y-6 text-[15px] text-gray-500 font-light leading-[2]">
              <p>
                안녕하세요. 하람 웨딩 전문사회자 유상혁입니다.
              </p>
              <p>
                <span className="text-gray-700 font-normal">한 사람의 인생에서 단 한 번뿐인 장면을 책임지는 일</span>이라는
                마음으로 무대에 서고 있습니다.
              </p>
              <p>
                사회자의 역할은 멘트를 외우는 것이 아니라,
                예식 전체의 흐름을 안전하게 이끌고,
                하객의 감정이 자연스럽게 이어지도록 돕는 것이라 생각합니다.
              </p>
              <p className="text-gray-700 italic text-[16px]">
                &ldquo;조용하지만 단단한 존재감으로 예식장의 품격을 유지하는 사회자가 되고자 합니다.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 bg-[#fafaf7] overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="text-[10px] tracking-[0.35em] text-haram-gold mb-4 font-montserrat uppercase">How we can help you</p>
            <h2 className="text-[28px] md:text-[38px] font-light text-gray-900 mb-4">
              예식을 이끄는 품격, 목소리에서 시작됩니다
            </h2>
            <p className="text-[13px] text-gray-400 font-light mb-6">
              정기 일정 배정, 리허설 대응, 리뷰 관리까지 통합 제공합니다
            </p>
            <p className="text-[28px] font-light text-haram-gold mb-12 font-montserrat tracking-[0.05em]">
              0507-1379-7249
            </p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-white px-12 py-4 rounded-full text-[12px] tracking-[0.1em] uppercase font-montserrat
                hover:bg-[#c9a96e] transition-colors duration-400 shadow-lg shadow-haram-gold/20">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
