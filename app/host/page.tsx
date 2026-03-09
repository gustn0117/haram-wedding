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

const Arrow = () => (
  <svg className="w-4 h-4 btn-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export default function HostPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-haram-dark">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
            alt="전문사회" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
        </div>
        <div className="absolute top-28 left-8 md:left-16 w-24 h-24 border-l border-t border-white/[0.08]" />
        <div className="absolute bottom-24 right-8 md:right-16 w-24 h-24 border-r border-b border-white/[0.08]" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
            className="section-label section-label-center justify-center text-haram-gold/60 mb-10">Host</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
            className="text-[28px] md:text-[46px] leading-[1.4] mb-6 font-light">
            마이크를 잡는 순간부터 마지막 퇴장까지,
            <br className="hidden md:block" />격식과 감동 사이의 완벽한 균형
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.2} variants={fade}
            className="divider-diamond my-8"><span /></motion.div>
          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fade}>
            <Link href="/contact" className="btn-primary">
              <span>예약 문의하기</span>
              <Arrow />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* PHILOSOPHY – editorial split with image */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
              className="md:col-span-5 relative order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
                  alt="Wedding ceremony" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l border-b border-haram-gold/20" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fade}
              className="md:col-span-7 order-1 md:order-2">
              <p className="section-label mb-8">Philosophy</p>
              <h2 className="text-[32px] md:text-[42px] font-serif font-light text-haram-dark leading-[1.3] mb-8">
                가장 조용한
                <br /><span className="text-gradient-gold">리더</span>
              </h2>
              <div className="w-14 h-[1px] bg-haram-gold/50 mb-8" />
              <p className="text-[16px] md:text-[18px] leading-[2.2] text-gray-500 mb-6 font-light">
                예식이 시작되기 전, 마이크를 잡은 사회자의 한마디는
                하객의 표정을 바꾸고, 부모님의 긴장을 풀고, 신랑신부의 떨림을 안정시킵니다.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[2.2] text-gray-500 font-light">
                하람의 전문 사회자는 단순히 멘트를 읽는 사람이 아니라,
                감정의 흐름과 예식의 리듬을 설계하는 조율자이자
                그날 예식장의 <span className="text-haram-dark font-normal">품격을 완성하는 목소리</span>입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80"
          alt="Wedding setup" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl text-center px-8">
            <div className="text-[48px] font-serif text-haram-gold/20 leading-none mb-4">&ldquo;</div>
            <p className="text-[22px] md:text-[34px] font-serif text-white/80 font-light leading-[1.7]">
              결혼식의 품격은 목소리에서 시작됩니다.
            </p>
            <div className="w-12 h-[1px] bg-haram-gold/30 mx-auto mt-8" />
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-28 md:py-40 px-6 bg-haram-cream relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <p className="section-label section-label-center justify-center mb-6">Feature</p>
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
                className="card-hover card-shine bg-white p-9 border border-gray-100 text-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-haram-gold/[0.04] to-transparent" />
                <span className="text-[32px] font-serif font-light text-haram-gold/15 group-hover:text-haram-gold/35 transition-colors duration-500">{item.num}</span>
                <h3 className="text-[16px] text-haram-dark font-normal mt-3 mb-4">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[2]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MC PROFILE */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-14">
            <p className="section-label section-label-center justify-center mb-6">Professional Host</p>
            <h2 className="text-[28px] md:text-[38px] text-haram-dark font-light">하람 전문사회자</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeScale}
            className="bg-haram-cream p-9 md:p-14 border border-gray-100 corner-deco relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-haram-gold/[0.04] to-transparent" />
            <h3 className="text-[26px] font-serif text-haram-dark font-light mb-2">유상혁</h3>
            <p className="section-label mb-10">Professional Host</p>
            <div className="space-y-6 text-[15px] text-gray-500 leading-[2.1] font-light">
              <p>안녕하세요. 하람 웨딩 전문사회자 유상혁입니다.</p>
              <p><span className="text-haram-dark font-normal">한 사람의 인생에서 단 한 번뿐인 장면을 책임지는 일</span>이라는 마음으로 무대에 서고 있습니다.</p>
              <p>사회자의 역할은 멘트를 외우는 것이 아니라, 예식 전체의 흐름을 안전하게 이끌고, 하객의 감정이 자연스럽게 이어지도록 돕는 것이라 생각합니다.</p>
              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="text-haram-dark font-serif italic text-[18px]">
                  &ldquo;조용하지만 단단한 존재감으로 예식장의 품격을 유지하는 사회자가 되고자 합니다.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 px-6 bg-haram-dark text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-haram-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-haram-gold/[0.02] rounded-full blur-3xl" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeScale}
          className="max-w-2xl mx-auto relative">
          <h2 className="text-[28px] md:text-[42px] text-white leading-[1.5] mb-6 font-light">
            예식을 이끄는 품격, 목소리에서 시작됩니다
          </h2>
          <p className="text-[14px] text-gray-500 mb-8 font-light">
            정기 일정 배정, 리허설 대응, 리뷰 관리까지 통합 제공합니다
          </p>
          <p className="text-[36px] md:text-[48px] font-serif font-light text-haram-gold mb-14 tracking-wider">
            0507-1379-7249
          </p>
          <Link href="/contact" className="btn-primary">
            <span>문의하기</span>
            <Arrow />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
