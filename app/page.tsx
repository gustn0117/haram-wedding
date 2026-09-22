'use client';

import Image from 'next/image';
import { HOME_FAQ } from '@/lib/faq';
import { faqJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';

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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  return (
    <main>
      <JsonLd data={faqJsonLd(HOME_FAQ)} />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <HeroSlider />
      <IntroSection />

      {/* ────── DIVIDER ────── */}
      <div className="ornament-divider">
        <svg className="w-4 h-4 text-[#b89d6a]/25" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0l2 6h6l-5 3.5 2 6.5-5-4-5 4 2-6.5L0 6h6z" />
        </svg>
      </div>

      {/* ────── MARQUEE ────── */}
      <div className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {['Concierge', 'Photobooth', 'Professional Host', 'Wedding Management', 'Premium Service', 'Concierge', 'Photobooth', 'Professional Host'].map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="heading-en text-[15px] text-gray-300 whitespace-nowrap">{t}</span>
                  <span className="w-1.5 h-1.5 bg-[#b89d6a]/30 rotate-45 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ────── QUOTE BREAK ────── */}
      <section className="relative py-36 md:py-48 overflow-hidden hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="/images/hotel-white/main-quote-hotel-ballroom.png"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="hero-pattern" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6 premium-quote">
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            하객의 첫인상은<br />공간이 아니라 사람이 만듭니다
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b89d6a]/30" />
            <svg className="w-4 h-4 text-[#b89d6a]/25" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 6h6l-5 3.5 2 6.5-5-4-5 4 2-6.5L0 6h6z" />
            </svg>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b89d6a]/30" />
          </div>
        </motion.div>
      </section>

      {/* ────── WHY HARAM ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-16">
            <span className="tag">Why Haram</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람을 선택하는 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: 'I', title: '운영을 시스템으로 다룹니다', desc: '경험을 예식장 전용 운영 매뉴얼로 만들고, 큐 시트와 응대 스크립트, 월간 운영 데이터로 관리합니다. 인력이 바뀌어도 같은 결과가 나옵니다.' },
              { n: 'II', title: '흐름의 디테일에 집중합니다', desc: '입장, 축가, 퇴장 큐를 1초 단위로 설계하고, 현장 매니저 한 명이 음향·조명·사회 큐를 함께 맞춥니다.' },
              { n: 'III', title: '장기적 관점에서 동행합니다', desc: '최소 3개월 단위로 함께하며 분기별 운영 리포트와 권고안을 드리고, 매뉴얼과 운영 자산을 예식장에 인계합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-gray-100 card-lift card-inner-glow group hover:border-[#b89d6a]/30">
                <span className="heading-en text-[32px] text-gray-100 group-hover:text-[#b89d6a]/20 transition-colors">{item.n}</span>
                <h3 className="text-[16px] font-normal mt-4 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROCESS ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Process</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람과 함께하는 과정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: '상담', desc: '전화·DM으로 맞춤 상담을 시작합니다' },
              { step: '02', title: '설계', desc: '예식에 맞는 운영 매뉴얼을 제작합니다' },
              { step: '03', title: '리허설', desc: '현장에서 사전 점검을 진행합니다' },
              { step: '04', title: '진행', desc: '당일 현장을 완벽하게 운영합니다' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className={`text-center py-12 px-6 group hover:bg-white/60 transition-all duration-500 ${i < 3 ? 'md:border-r border-b md:border-b-0 border-gray-200/60' : ''}`}>
                <span className="heading-en text-[28px] text-[#b89d6a]/30 group-hover:text-[#b89d6a]/60 transition-colors">{item.step}</span>
                <h4 className="text-[17px] font-normal mt-3 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIALS ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Review</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              고객의 이야기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: '김○○', loc: '강남', service: '포토부스 + 전문사회', text: '하람 덕분에 예식 당일 아무런 걱정 없이 즐길 수 있었어요. 하객분들도 너무 좋았다고 칭찬하셨습니다.' },
              { name: '이○○', loc: '판교', service: '포토부스', text: '포토부스가 정말 인기 있었어요! 하객분들이 줄 서서 찍으셨고, 포토북도 너무 예쁘게 나왔어요.' },
              { name: '박○○', loc: '수원', service: '전문사회', text: '사회자분의 진행이 자연스럽고 격식 있었어요. 부모님도 너무 만족하셨습니다. 강력 추천합니다!' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="p-8 bg-[#FAF8F5] group testimonial-premium card-inner-glow">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-[#b89d6a]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1.5l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.88 4.29 12.9l.71-4.12-3-2.93 4.15-.6L8 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-500 leading-[1.9] mb-8">{t.text}</p>
                <div className="pt-5 border-t border-gray-200/60">
                  <p className="text-[13px] font-normal">{t.name} · {t.loc}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{t.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── FAQ ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">FAQ</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div className="space-y-3">
            {HOME_FAQ.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.04} variants={fade}
                className="bg-white p-7 md:p-8 faq-item group hover:shadow-sm transition-shadow">
                <h4 className="text-[15px] font-normal mb-4 flex items-start gap-3">
                  <span className="heading-en text-[#b89d6a] shrink-0 text-[15px]">Q.</span>
                  {item.q}
                </h4>
                <div className="pl-7 border-l-2 border-[#b89d6a]/15">
                  <p className="text-[13px] text-gray-400 leading-[1.9]">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA ────── */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-[#111] dark-pattern hero-side-lines">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hotel-white/main-cta-wedding-details.png"
            alt="" fill className="object-cover" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto relative text-center z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
            <span className="tag">Contact</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
          </div>
          <h2 className="text-[28px] md:text-[42px] text-white font-extralight leading-[1.5] mt-5 mb-6 tracking-tight">
            특별한 날, 하람과 함께하세요
          </h2>
          <p className="text-[14px] text-white/40 mb-10">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="heading-en text-[36px] md:text-[48px] text-[#b89d6a] mb-12 stat-glow">
            010-7930-1332
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-[#b89d6a] hover:bg-[#a38856]">
              <span>문의하기</span><Arr />
            </Link>
            <a href="tel:010-7930-1332" className="btn-ghost">
              <span>전화 연결</span><Arr />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
