'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Arr = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export default function ConciergePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
            alt="Concierge" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.span initial="hidden" animate="show" custom={0} variants={fade} className="tag">Concierge</motion.span>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] mt-4 tracking-tight">
            컨시어지
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            예식장과 직접 제휴하여 현장 운영을 책임지는 B2B 서비스
          </motion.p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">About</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              예식장과 함께 만드는<br />완벽한 현장 운영
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람 컨시어지는 예식장과 직접 제휴하여 운영되는 B2B 서비스입니다.
              하객 안내, 동선 관리, 식순 진행, 돌발 상황 대응까지 — 예식장의 서비스 품질을 한 단계 높여드립니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-4">
              단순한 안내를 넘어, 예식의 분위기와 톤을 유지하며 하객 한 분 한 분에게 최상의 경험을 선사합니다.
            </p>
            <p className="text-[13px] text-[#b89d6a] mb-10">
              ※ 개인 신청은 받지 않으며, 예식장 제휴를 통해서만 이용 가능합니다.
            </p>
            <Link href="/contact" className="btn-dark-outline">
              <span>제휴 문의</span><Arr />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Concierge service" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-36 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Service Detail</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              컨시어지 서비스 내용
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: '하객 맞이 & 동선 관리', desc: '축의금 접수, 식사 안내, 주차 관리 등 하객 동선을 체계적으로 관리합니다.' },
              { title: '식순 진행 관리', desc: '예식 타임라인에 맞춰 각 순서가 매끄럽게 진행되도록 조율합니다.' },
              { title: '돌발 상황 대응', desc: '현장에서 발생하는 모든 변수에 즉각적으로 대응합니다.' },
              { title: '예식장 맞춤 운영', desc: '각 예식장의 구조와 특성에 맞는 전용 운영 매뉴얼을 설계합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="bg-white p-8 md:p-10 card-lift">
                <h3 className="text-[16px] font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6">
          <p className="text-[22px] md:text-[32px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            결혼식은 한 번뿐이기에,<br />한 치의 빈틈도 허용하지 않습니다
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto text-center">
          <span className="tag">Partnership</span>
          <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-4 mb-6 tracking-tight">
            예식장 제휴 문의
          </h2>
          <p className="text-[14px] text-gray-400 mb-4">예식장 운영 품질을 높이고 싶으시다면 연락해 주세요</p>
          <p className="text-[12px] text-gray-300 mb-10">※ 개인 고객은 제휴 예식장을 통해 이용하실 수 있습니다</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>제휴 문의</span><Arr />
            </Link>
            <a href="tel:010-7930-1332" className="btn-dark-outline">
              <span>전화 연결</span><Arr />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
