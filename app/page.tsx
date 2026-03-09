'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

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
  const heroRef = useRef(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroP, [0, 1], ['0%', '25%']);
  const heroOp = useTransform(heroP, [0, 0.6], [1, 0]);
  const heroSc = useTransform(heroP, [0, 1], [1, 1.1]);

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* ────── HERO ────── */}
      <section ref={heroRef} className="relative h-screen flex items-end pb-24 md:pb-32 overflow-hidden bg-black">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroSc }}>
          <Image src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
            alt="HARAM Wedding" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12" style={{ opacity: heroOp }}>
          <motion.p initial="hidden" animate="show" custom={0} variants={fade}
            className="tag mb-5">Wedding Management</motion.p>

          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[42px] md:text-[72px] lg:text-[88px] text-white font-extralight leading-[1.1] tracking-tight mb-6">
            당신의 결혼식을<br />완벽하게
          </motion.h1>

          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] md:text-[17px] text-white/50 font-light mb-10 max-w-md leading-relaxed">
            예식의 품질은 현장에서 결정됩니다.
            하람이 당일의 모든 순간을 책임집니다.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={0.35} variants={fade}
            className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              <span>상담 문의</span><Arr />
            </Link>
            <Link href="#services" className="btn-ghost">
              <span>서비스 보기</span><Arr />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ────── INTRO ────── */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Wedding" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b89d6a]/20 -z-10" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <span className="tag">About Haram</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              결혼식다운 결혼식을 만듭니다
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              결혼식의 완성도는 기획이나 설명이 아니라 당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
              <span className="text-[#1a1a1a] font-normal"> 경험을 바탕으로 관리하는 회사</span>입니다.
            </p>

            <div className="flex gap-12 py-8 border-y border-gray-100 mb-10">
              {[
                { n: '500+', l: '누적 예식' },
                { n: '30+', l: '제휴 예식장' },
                { n: '98%', l: '고객 만족도' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="heading-en text-[28px] text-[#1a1a1a]">{s.n}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-dark-outline">
              <span>자세히 알아보기</span><Arr />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────── MARQUEE ────── */}
      <div className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {['Concierge', 'Photobooth', 'Professional Host', 'Wedding Management', 'Premium Service', 'Concierge', 'Photobooth', 'Professional Host'].map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="heading-en text-[15px] text-gray-300 whitespace-nowrap">{t}</span>
                  <span className="w-1 h-1 bg-[#b89d6a]/40 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ────── SERVICES ────── */}
      <section id="services" className="py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="tag">Services</span>
              <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
                하람이 제공하는 서비스
              </h2>
            </div>
            <Link href="/contact" className="btn-dark-outline self-start md:self-auto">
              <span>전체 문의</span><Arr />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: '/photobooth', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80', title: '포토부스', sub: 'Photobooth', desc: '하객에게 추억을, 부부에게 감동을 선물합니다' },
              { href: '/host', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', title: '전문사회', sub: 'Host', desc: '격식과 감동 사이, 완벽한 균형의 MC' },
              { href: '/concierge', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80', title: '컨시어지', sub: 'Concierge', desc: '예식 현장의 모든 흐름을 조율합니다' },
            ].map((card, i) => (
              <motion.div key={card.href} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i * 0.1} variants={fade}>
                <Link href={card.href} className="block group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                    <Image src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="heading-en text-[12px] text-white/50 mb-2">{card.sub}</p>
                      <h3 className="text-[22px] text-white font-light">{card.title}</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-400 leading-[1.8] mb-3">{card.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] text-[#b89d6a] group-hover:gap-3 transition-all">
                    자세히 보기 <Arr />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── QUOTE BREAK ────── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6">
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            하객의 첫인상은<br />공간이 아니라 사람이 만듭니다
          </p>
        </motion.div>
      </section>

      {/* ────── WHY HARAM ────── */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="mb-14">
            <span className="tag">Why Haram</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람을 선택하는 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n: '01', title: '현장 중심의 실전 경험', desc: '500회 이상의 예식 현장에서 어떤 변수에도 흔들리지 않는 안정적인 서비스를 제공합니다.' },
              { n: '02', title: '통합 서비스 원스톱 관리', desc: '컨시어지, 포토부스, 전문사회를 하나의 팀이 관리하여 퀄리티를 일관되게 유지합니다.' },
              { n: '03', title: '맞춤형 운영 설계', desc: '예식장 구조, 하객 규모, 부부의 취향을 반영한 1:1 맞춤형 운영 매뉴얼을 설계합니다.' },
              { n: '04', title: '검증된 파트너십', desc: '30곳 이상의 예식장과 정식 제휴, 98%의 고객 만족도를 기록하고 있습니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-gray-100 card-lift group hover:border-[#b89d6a]/30">
                <span className="heading-en text-[32px] text-gray-100 group-hover:text-[#b89d6a]/20 transition-colors">{item.n}</span>
                <h3 className="text-[16px] font-normal mt-4 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROCESS ────── */}
      <section className="py-24 md:py-36 px-6 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
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
                className={`text-center py-10 px-6 ${i < 3 ? 'md:border-r border-b md:border-b-0 border-gray-200/60' : ''}`}>
                <span className="heading-en text-[28px] text-[#b89d6a]/40">{item.step}</span>
                <h4 className="text-[17px] font-normal mt-3 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIALS ────── */}
      <section className="py-24 md:py-36 px-6">
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
              { name: '김○○', loc: '강남', service: '컨시어지 + 포토부스', text: '하람 덕분에 예식 당일 아무런 걱정 없이 즐길 수 있었어요. 하객분들도 너무 좋았다고 칭찬하셨습니다.' },
              { name: '이○○', loc: '판교', service: '포토부스', text: '포토부스가 정말 인기 있었어요! 하객분들이 줄 서서 찍으셨고, 포토북도 너무 예쁘게 나왔어요.' },
              { name: '박○○', loc: '수원', service: '전문사회', text: '사회자분의 진행이 자연스럽고 격식 있었어요. 부모님도 너무 만족하셨습니다. 강력 추천합니다!' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className="p-8 bg-[#FAF8F5] group">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#b89d6a] text-[11px]">&#9733;</span>
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

      {/* ────── CTA ────── */}
      <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#1a1a1a]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto relative text-center">
          <span className="tag">Contact</span>
          <h2 className="text-[28px] md:text-[42px] text-white font-extralight leading-[1.5] mt-5 mb-6 tracking-tight">
            특별한 날, 하람과 함께하세요
          </h2>
          <p className="text-[14px] text-white/40 mb-10">
            간단한 문의만으로도 맞춤 상담을 시작할 수 있습니다
          </p>
          <p className="heading-en text-[36px] md:text-[48px] text-[#b89d6a] mb-12">
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
