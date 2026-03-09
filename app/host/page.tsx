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

export default function HostPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
            alt="전문사회" fill className="object-cover" priority />
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
            <p className="text-[10px] tracking-[0.5em] text-haram-gold/80 font-montserrat uppercase font-light">Haram Host</p>
            <div className="w-12 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-[28px] md:text-[44px] font-light leading-[1.5] mb-8 font-serif">
            마이크를 잡는 순간부터 마지막 퇴장까지,
            <br className="hidden md:block" />
            격식과 감동 사이의 완벽한 균형
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

      {/* Philosophy - Editorial */}
      <section className="relative py-28 md:py-40 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={slideLeft}
              className="order-2 md:order-1">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
                  alt="Host" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={slideRight}
              className="order-1 md:order-2">
              <p className="badge-label text-haram-gold mb-8">Philosophy</p>
              <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light mb-8">
                예식이 시작되기 전, 마이크를 잡은 사회자의 한마디는
                하객의 표정을 바꾸고, 부모님의 긴장을 풀고,
                신랑신부의 떨림을 안정시킵니다.
              </p>
              <div className="w-[1px] h-12 bg-gradient-to-b from-haram-gold/40 to-transparent mb-8" />
              <p className="text-[15px] md:text-[16px] leading-[2.2] text-gray-500 font-light mb-8">
                하람의 전문 사회자는 단순히 멘트를 읽는 사람이 아니라,
                감정의 흐름과 예식의 리듬을 설계하는 조율자이자
                그날 예식장의 <span className="text-gray-900 font-normal">품격을 완성하는 목소리</span>입니다.
              </p>
              <div className="bg-haram-cream p-6 rounded-xl border border-gray-100">
                <p className="text-[16px] md:text-[18px] text-gray-800 font-light font-serif italic leading-relaxed">
                  우리는 사회자가 예식의 공기, 흐름, 감정, 실수를
                  모두 조율하는 <span className="text-haram-gold">가장 조용한 리더</span>라고 믿습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative py-28 md:py-32 px-6 bg-haram-navy text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/30 to-haram-navy" />
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-haram-gold/10 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-haram-gold/10 hidden md:block" />

        <div className="relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <div className="text-haram-gold/20 text-[50px] md:text-[70px] font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-[22px] md:text-[34px] font-light text-white/90 tracking-wide font-serif leading-[1.6]">
              결혼식의 품격은 <span className="text-haram-gold italic">목소리</span>에서 시작됩니다.
            </p>
            <div className="text-haram-gold/20 text-[50px] md:text-[70px] font-serif leading-none mt-3 rotate-180">&ldquo;</div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Feature</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900">
              하람 전문사회의 <span className="font-serif italic text-haram-gold-dark">특징</span>
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
                className="group card-lift bg-white p-9 rounded-2xl border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/0 to-transparent
                  group-hover:via-haram-gold/40 transition-all duration-700" />
                <div className="w-14 h-14 rounded-full border-2 border-haram-gold/20 flex items-center justify-center mx-auto mb-7
                  group-hover:border-haram-gold/50 group-hover:bg-haram-gold/5 transition-all duration-500">
                  <span className="text-haram-gold font-montserrat text-[12px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-[16px] font-medium text-gray-900 mb-3">{item.title}</h3>
                <div className="w-6 h-[1px] bg-haram-gold/30 mx-auto mb-4" />
                <p className="text-[13px] text-gray-400 font-light leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MC Profile */}
      <section className="py-28 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">Professional Host</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 font-serif">하람 전문사회자</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
            className="bg-haram-cream rounded-2xl p-10 md:p-14 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/30 to-transparent" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-haram-gold/10 flex items-center justify-center">
                <span className="text-haram-gold font-serif text-[20px] italic">Y</span>
              </div>
              <div>
                <h3 className="text-[24px] font-light text-gray-900 font-serif">유상혁</h3>
                <p className="text-[11px] text-haram-gold font-montserrat tracking-[0.1em]">PROFESSIONAL HOST</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-haram-gold/20 to-transparent mb-10" />

            <div className="space-y-6 text-[15px] text-gray-500 font-light leading-[2]">
              <p>안녕하세요. 하람 웨딩 전문사회자 유상혁입니다.</p>
              <p>
                <span className="text-gray-800 font-normal">한 사람의 인생에서 단 한 번뿐인 장면을 책임지는 일</span>이라는
                마음으로 무대에 서고 있습니다.
              </p>
              <p>
                사회자의 역할은 멘트를 외우는 것이 아니라,
                예식 전체의 흐름을 안전하게 이끌고,
                하객의 감정이 자연스럽게 이어지도록 돕는 것이라 생각합니다.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="text-gray-800 font-serif italic text-[17px] leading-[1.8]">
                  &ldquo;조용하지만 단단한 존재감으로 예식장의 품격을 유지하는 사회자가 되고자 합니다.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 px-6 bg-haram-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-haram-navy via-haram-navy-light/20 to-haram-navy" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[150px] md:text-[300px] font-serif font-light text-white/[0.015] leading-none select-none">HOST</span>
        </div>

        <div className="absolute top-10 left-10 w-24 h-24 border border-haram-gold/[0.06] rounded-full hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-haram-gold/[0.04] rounded-full hidden md:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={scaleIn}>
            <p className="badge-label text-haram-gold/60 mb-8 justify-center">Contact</p>
            <h2 className="text-[28px] md:text-[44px] font-light text-white mb-5 leading-[1.4] font-serif">
              예식을 이끄는 품격,
              <br />
              <span className="text-haram-gold italic">목소리</span>에서 시작됩니다
            </h2>
            <p className="text-[13px] text-white/35 font-light mb-6">
              정기 일정 배정, 리허설 대응, 리뷰 관리까지 통합 제공합니다
            </p>
            <p className="text-[32px] md:text-[40px] font-light text-haram-gold mb-14 font-montserrat tracking-[0.08em]">
              0507-1379-7249
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
