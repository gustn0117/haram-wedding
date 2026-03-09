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

export default function HostPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
            alt="전문사회" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
        </div>

        <div className="absolute top-28 left-8 md:left-16 w-16 h-16 border-l border-t border-white/10" />
        <div className="absolute bottom-24 right-8 md:right-16 w-16 h-16 border-r border-b border-white/10" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fade}
            className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[1px] bg-haram-gold/40" />
            <p className="text-[11px] tracking-[0.5em] text-haram-gold/70 uppercase">Host</p>
            <span className="w-10 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[28px] md:text-[44px] leading-[1.5] mb-6 font-light">
            마이크를 잡는 순간부터 마지막 퇴장까지,
            <br className="hidden md:block" />
            격식과 감동 사이의 완벽한 균형
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fade}>
            <div className="w-10 h-[1px] bg-haram-gold/50 mx-auto" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ══════ PHILOSOPHY ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Philosophy</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-8 font-light">
            예식이 시작되기 전, 마이크를 잡은 사회자의 한마디는
            <br className="hidden md:block" />
            하객의 표정을 바꾸고, 부모님의 긴장을 풀고, 신랑신부의 떨림을 안정시킵니다.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.2] text-gray-500 mb-12 font-light">
            하람의 전문 사회자는 단순히 멘트를 읽는 사람이 아니라,
            <br className="hidden md:block" />
            감정의 흐름과 예식의 리듬을 설계하는 조율자이자
            <br className="hidden md:block" />
            그날 예식장의 <span className="text-haram-dark font-normal">품격을 완성하는 목소리</span>입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fade}>
            <div className="w-14 h-[1px] bg-haram-gold mx-auto mb-12" />
            <p className="text-[20px] md:text-[26px] text-haram-dark leading-[1.7] font-light">
              우리는 사회자가 예식의 공기, 흐름, 감정, 실수를
              <br className="hidden md:block" />
              모두 조율하는 <em className="font-serif text-[24px] md:text-[30px] not-italic text-gradient-gold">가장 조용한 리더</em>라고 믿습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ QUOTE ══════ */}
      <section className="py-24 md:py-32 bg-haram-dark text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="max-w-2xl mx-auto relative">
          <div className="text-[36px] font-serif text-haram-gold/25 leading-none mb-6">&ldquo;</div>
          <p className="text-[22px] md:text-[32px] font-serif text-white/80 font-light leading-[1.7]">
            결혼식의 품격은 목소리에서 시작됩니다.
          </p>
          <div className="w-10 h-[1px] bg-haram-gold/30 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* ══════ FEATURES ══════ */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Feature</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">하람 전문사회의 특징</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '맞춤 대본 커스터마이징', desc: '예식장 구조, 식순, 하객 규모를 반영하여 스크립트를 직접 제작합니다.', num: '01' },
              { title: '예식 자료 및 음원 공유', desc: '사용하는 자료들을 예비부부, 예식장과 사전에 공유합니다.', num: '02' },
              { title: '예식장 운영진과의 협업', desc: '예식장 시스템을 존중하며 현장 조율 중심형 진행을 원칙으로 합니다.', num: '03' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fadeScale}
                className="card-hover card-shine bg-white p-9 border border-gray-100 text-center group">
                <span className="text-[32px] font-serif font-light text-haram-gold/20 group-hover:text-haram-gold/40 transition-colors duration-500">
                  {item.num}
                </span>
                <h3 className="text-[16px] text-haram-dark font-normal mt-3 mb-4">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[2]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MC PROFILE ══════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-haram-gold/40" />
              <p className="text-[10px] tracking-[0.4em] text-haram-gold uppercase">Professional Host</p>
              <span className="w-6 h-[1px] bg-haram-gold/40" />
            </div>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">하람 전문사회자</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeScale}
            className="bg-haram-cream p-9 md:p-14 border border-gray-100 corner-deco relative">
            <h3 className="text-[24px] text-haram-dark font-light mb-2">유상혁</h3>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[1px] bg-haram-gold/50" />
              <p className="text-[10px] text-haram-gold tracking-[0.2em] uppercase">Professional Host</p>
            </div>
            <div className="space-y-6 text-[15px] text-gray-500 leading-[2.1] font-light">
              <p>안녕하세요. 하람 웨딩 전문사회자 유상혁입니다.</p>
              <p>
                <span className="text-haram-dark font-normal">한 사람의 인생에서 단 한 번뿐인 장면을 책임지는 일</span>이라는
                마음으로 무대에 서고 있습니다.
              </p>
              <p>
                사회자의 역할은 멘트를 외우는 것이 아니라,
                예식 전체의 흐름을 안전하게 이끌고,
                하객의 감정이 자연스럽게 이어지도록 돕는 것이라 생각합니다.
              </p>
              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="text-haram-dark font-serif italic text-[18px]">
                  &ldquo;조용하지만 단단한 존재감으로 예식장의 품격을 유지하는 사회자가 되고자 합니다.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
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
            예식을 이끄는 품격, 목소리에서 시작됩니다
          </h2>
          <p className="text-[14px] text-gray-500 mb-8 font-light">
            정기 일정 배정, 리허설 대응, 리뷰 관리까지 통합 제공합니다
          </p>
          <p className="text-[30px] md:text-[40px] font-serif font-light text-haram-gold mb-14 tracking-wider">
            0507-1379-7249
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
