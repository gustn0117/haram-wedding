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

export default function HostPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
            alt="전문사회" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
            className="text-[11px] tracking-[0.4em] text-white/50 mb-6 uppercase">Host</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[28px] md:text-[42px] leading-[1.5] mb-6">
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

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-8 uppercase">Philosophy</p>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.1] text-gray-600 mb-8">
            예식이 시작되기 전, 마이크를 잡은 사회자의 한마디는
            <br className="hidden md:block" />
            하객의 표정을 바꾸고, 부모님의 긴장을 풀고, 신랑신부의 떨림을 안정시킵니다.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fade}
            className="text-[17px] md:text-[20px] leading-[2.1] text-gray-600 mb-10">
            하람의 전문 사회자는 단순히 멘트를 읽는 사람이 아니라,
            <br className="hidden md:block" />
            감정의 흐름과 예식의 리듬을 설계하는 조율자이자
            <br className="hidden md:block" />
            그날 예식장의 <span className="text-haram-dark font-normal">품격을 완성하는 목소리</span>입니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={fade}>
            <div className="w-10 h-[1px] bg-haram-gold mx-auto mb-10" />
            <p className="text-[19px] md:text-[24px] text-haram-dark leading-[1.7]">
              우리는 사회자가 예식의 공기, 흐름, 감정, 실수를
              <br className="hidden md:block" />
              모두 조율하는 <em className="font-serif text-haram-gold not-italic">가장 조용한 리더</em>라고 믿습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-28 bg-haram-dark text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
          <p className="text-[22px] md:text-[32px] font-serif text-white/90 italic leading-[1.7] max-w-2xl mx-auto">
            &ldquo;결혼식의 품격은 목소리에서 시작됩니다.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-36 px-6 bg-haram-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Feature</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">하람 전문사회의 특징</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '맞춤 대본 커스터마이징', desc: '예식장 구조, 식순, 하객 규모를 반영하여 스크립트를 직접 제작합니다.' },
              { title: '예식 자료 및 음원 공유', desc: '사용하는 자료들을 예비부부, 예식장과 사전에 공유합니다.' },
              { title: '예식장 운영진과의 협업', desc: '예식장 시스템을 존중하며 현장 조율 중심형 진행을 원칙으로 합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="bg-white p-8 border border-gray-100 text-center">
                <h3 className="text-[16px] text-haram-dark font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MC PROFILE */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">Professional Host</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">하람 전문사회자</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fade}
            className="bg-haram-cream p-8 md:p-12 border border-gray-100">
            <h3 className="text-[22px] text-haram-dark mb-2">유상혁</h3>
            <p className="text-[11px] text-haram-gold tracking-wider mb-8">PROFESSIONAL HOST</p>
            <div className="space-y-5 text-[15px] text-gray-500 leading-[2]">
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
              <p className="text-haram-dark font-serif italic text-[17px] pt-4 border-t border-gray-200">
                &ldquo;조용하지만 단단한 존재감으로 예식장의 품격을 유지하는 사회자가 되고자 합니다.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 bg-haram-dark text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[38px] text-white leading-[1.5] mb-5">
            예식을 이끄는 품격, 목소리에서 시작됩니다
          </h2>
          <p className="text-[14px] text-gray-500 mb-6">
            정기 일정 배정, 리허설 대응, 리뷰 관리까지 통합 제공합니다
          </p>
          <p className="text-[28px] md:text-[36px] font-serif text-haram-gold mb-12 tracking-wide">
            0507-1379-7249
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
