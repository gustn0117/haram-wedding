'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main>
      {/* ────── HERO ────── */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
            alt="Concierge" fill className="object-cover scale-110" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        </motion.div>
        <motion.div className="relative z-10 text-center px-6" style={{ opacity: heroOp }}>
          <motion.span initial="hidden" animate="show" custom={0} variants={fade} className="tag mb-5 block">B2B Partnership</motion.span>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="heading-en text-[44px] md:text-[72px] lg:text-[88px] text-white font-light tracking-[0.08em] leading-[1] mb-3">
            Concierge
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.18} variants={fade}
            className="heading-en text-[12px] md:text-[14px] text-white/30 tracking-[0.3em] uppercase mb-8">
            Wedding Venue Partnership
          </motion.p>
          <motion.p initial="hidden" animate="show" custom={0.25} variants={fade}
            className="text-[15px] md:text-[17px] text-white/50 font-light max-w-lg mx-auto leading-relaxed">
            예식장과 직접 제휴하여 현장 운영의 모든 것을 책임집니다
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      </section>

      {/* ────── B2B 안내 배너 ────── */}
      <section className="py-10 px-6 border-b border-gray-100">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#b89d6a]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#b89d6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
              </svg>
            </div>
            <p className="text-[13px] text-gray-500">
              컨시어지는 <span className="text-[#b89d6a] font-normal">예식장 전용 B2B 서비스</span>입니다. 개인 고객은 제휴 예식장을 통해 이용하실 수 있습니다.
            </p>
          </div>
          <Link href="/contact" className="text-[12px] text-[#b89d6a] whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
            제휴 예식장 확인하기 <Arr />
          </Link>
        </motion.div>
      </section>

      {/* ────── ABOUT ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">About</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              예식장의 가치를<br />현장에서 완성합니다
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람 컨시어지는 예식장과 직접 제휴하여 운영되는 전문 현장 관리 서비스입니다.
              하객 응대부터 식순 조율, 돌발 상황 대응까지 — 예식장이 제공하는 서비스의 품격을 한 단계 끌어올립니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              예식장 공간의 특성을 완벽히 이해한 전담 매니저가 배치되어, 매 예식마다 일관된 퀄리티를 보장합니다.
              신랑 신부는 물론 하객 한 분 한 분까지 — 모두가 만족하는 예식을 만들어갑니다.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              {[
                { num: '30+', label: '제휴 예식장' },
                { num: '500+', label: '누적 진행' },
                { num: '98%', label: '만족도' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="heading-en text-[28px] text-[#b89d6a]">{s.num}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={fade}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Concierge service" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#b89d6a] text-white p-6 md:p-8 max-w-[240px]">
                <p className="heading-en text-[11px] tracking-[0.15em] uppercase mb-2 opacity-70">Since 2019</p>
                <p className="text-[14px] font-light leading-[1.7]">예식 현장 전문<br />운영 매니지먼트</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────── SERVICE DETAIL ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Service Detail</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              컨시어지가 책임지는 영역
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
              예식 당일, 현장에서 일어나는 모든 일을 체계적으로 관리합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
                title: '하객 맞이 & 동선 관리',
                desc: '축의금 접수, 식사 안내, 주차 관리, 대기 공간 운영까지 — 하객이 도착하는 순간부터 퇴장까지의 모든 동선을 설계하고 관리합니다.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: '식순 타임라인 조율',
                desc: '입장, 주례, 축가, 폐백까지 예식의 모든 순서를 분 단위로 관리하며, 지연 없이 매끄러운 진행을 보장합니다.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                  </svg>
                ),
                title: '돌발 상황 즉각 대응',
                desc: '음향 장비 이상, 하객 안내 혼선, 스케줄 변동 등 현장에서 발생할 수 있는 모든 변수에 즉각적으로 대처합니다.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
                title: '업체 간 실시간 소통',
                desc: '사진, 영상, 꽃, 사회자, 음향 등 모든 협력 업체와의 커뮤니케이션을 전담하여 원활한 협업을 이끌어냅니다.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                ),
                title: '예식장 맞춤 매뉴얼',
                desc: '예식장의 구조, 동선, 시설 특성에 맞춘 전용 운영 매뉴얼을 설계하여 일관된 서비스 품질을 유지합니다.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
                title: 'VIP 하객 의전',
                desc: '양가 부모님, 주빈, VIP 하객을 위한 별도 의전 라인을 운영하여 격식 있는 예식 경험을 제공합니다.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.06} variants={fade}
                className="bg-white p-8 md:p-10 card-lift group">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] group-hover:bg-[#b89d6a]/10 flex items-center justify-center mb-6 transition-colors text-gray-300 group-hover:text-[#b89d6a]">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PARTNERSHIP FLOW ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Partnership Flow</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              제휴 진행 과정
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
              예식장의 특성에 맞춘 맞춤형 제휴 프로세스
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: '제휴 상담', desc: '예식장의 규모, 특성, 니즈를 파악하여 최적의 서비스 구성을 제안합니다' },
              { step: '02', title: '현장 답사', desc: '예식장을 직접 방문하여 동선, 시설, 운영 환경을 분석합니다' },
              { step: '03', title: '매뉴얼 설계', desc: '예식장 전용 운영 매뉴얼과 체크리스트를 제작합니다' },
              { step: '04', title: '전담 배치', desc: '교육받은 전문 매니저를 예식장에 상시 배치하여 운영합니다' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.1} variants={fade}
                className={`relative text-center py-12 px-6 ${i < 3 ? 'md:border-r border-b md:border-b-0 border-gray-200/60' : ''}`}>
                <span className="heading-en text-[36px] text-[#b89d6a]/30">{item.step}</span>
                <h4 className="text-[17px] font-normal mt-4 mb-3">{item.title}</h4>
                <p className="text-[12px] text-gray-400 leading-[1.8] max-w-[180px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── BENEFITS FOR VENUES ────── */}
      <section className="py-28 md:py-40 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Benefits</span>
            <h2 className="text-[28px] md:text-[40px] text-white font-extralight leading-[1.4] mt-4 tracking-tight">
              예식장이 얻는 가치
            </h2>
            <p className="text-[14px] text-white/40 mt-4 max-w-lg mx-auto leading-relaxed">
              하람 컨시어지 도입으로 예식장의 서비스 경쟁력을 강화합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n: '01', title: '고객 만족도 상승', desc: '전문 매니저의 세심한 현장 관리로 예식장 이용 고객의 만족도와 재추천율이 향상됩니다.' },
              { n: '02', title: '운영 리스크 최소화', desc: '돌발 상황에 대한 즉각적 대응 체계로 예식장 운영상 발생할 수 있는 리스크를 사전에 차단합니다.' },
              { n: '03', title: '프리미엄 브랜딩', desc: '컨시어지 서비스를 통해 예식장의 프리미엄 이미지를 구축하고, 차별화된 부가가치를 제공합니다.' },
              { n: '04', title: '내부 인력 부담 절감', desc: '현장 운영 전담 인력을 외부 전문가로 대체하여, 예식장의 핵심 업무에 집중할 수 있도록 합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 border border-white/10 group hover:border-[#b89d6a]/40 transition-colors">
                <span className="heading-en text-[32px] text-white/10 group-hover:text-[#b89d6a]/30 transition-colors">{item.n}</span>
                <h3 className="text-[16px] font-normal text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-[13px] text-white/40 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── QUOTE ────── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6">
          <p className="heading-en text-[14px] text-white/30 tracking-[0.3em] uppercase mb-6">Our Philosophy</p>
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-2xl mx-auto tracking-tight">
            결혼식은 한 번뿐이기에,<br />한 치의 빈틈도 허용하지 않습니다
          </p>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>
      </section>

      {/* ────── VENUE TESTIMONIALS ────── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-20">
            <span className="tag">Partner Voice</span>
            <h2 className="text-[28px] md:text-[40px] font-extralight leading-[1.4] mt-4 tracking-tight">
              제휴 예식장의 이야기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { venue: '서울 웨딩홀', person: '운영팀장', text: '하람 컨시어지 도입 후 고객 불만이 눈에 띄게 줄었습니다. 현장 운영의 퀄리티가 확실히 달라졌어요.' },
              { venue: '강남 컨벤션', person: '대표이사', text: '전문 매니저가 상주하니 내부 직원들이 핵심 업무에 집중할 수 있게 됐습니다. 만족도 조사 점수도 크게 올랐고요.' },
              { venue: '판교 가든웨딩', person: '마케팅 실장', text: '컨시어지 서비스를 예식장 패키지에 포함시킨 이후 프리미엄 상품 계약률이 30% 이상 상승했습니다.' },
              { venue: '수원 그랜드홀', person: '부대표', text: '돌발 상황에 대한 대처가 매우 빠르고 전문적입니다. 6개월째 제휴 중인데, 이제 하람 없이는 운영이 어려울 정도예요.' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="p-8 md:p-10 bg-[#FAF8F5]">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#b89d6a] text-[11px]">&#9733;</span>
                  ))}
                </div>
                <p className="text-[14px] text-gray-500 leading-[1.9] mb-8">{t.text}</p>
                <div className="pt-5 border-t border-gray-200/60">
                  <p className="text-[13px] font-normal">{t.venue}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{t.person}</p>
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

          <div className="space-y-4">
            {[
              { q: '개인 고객도 직접 신청할 수 있나요?', a: '컨시어지는 예식장 전용 B2B 서비스로, 개인 신청은 받지 않습니다. 제휴 예식장을 통해 이용하실 수 있습니다.' },
              { q: '제휴 비용은 어떻게 책정되나요?', a: '예식장 규모, 월간 예식 건수, 필요 서비스 범위에 따라 맞춤 견적을 제공합니다. 상담을 통해 안내해 드립니다.' },
              { q: '기존 운영 인력과 어떻게 협업하나요?', a: '예식장 내부 인력과의 역할 분담을 사전에 명확히 설계하여, 중복 없이 효율적으로 운영됩니다.' },
              { q: '최소 계약 기간이 있나요?', a: '기본 3개월 단위로 계약하며, 이후 월 단위 연장이 가능합니다. 단건 체험 운영도 가능하니 상담 시 문의해 주세요.' },
              { q: '지방 예식장도 제휴 가능한가요?', a: '서울, 경기 외 지역도 제휴 가능합니다. 현장 답사 후 운영 가능 여부를 안내해 드립니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.06} variants={fade}
                className="bg-white p-7 md:p-8">
                <h4 className="text-[15px] font-normal mb-3 flex items-start gap-3">
                  <span className="text-[#b89d6a] shrink-0">Q.</span>
                  {item.q}
                </h4>
                <p className="text-[13px] text-gray-400 leading-[1.9] pl-6">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA ────── */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
            alt="" fill className="object-cover" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto relative text-center">
          <span className="tag">Partnership</span>
          <h2 className="text-[28px] md:text-[44px] text-white font-extralight leading-[1.5] mt-5 mb-6 tracking-tight">
            예식장 제휴 문의
          </h2>
          <p className="text-[14px] text-white/40 mb-4 leading-relaxed">
            예식장의 서비스 품질을 한 단계 높이고 싶으시다면<br className="hidden md:block" /> 하람 컨시어지와 함께하세요
          </p>
          <p className="text-[12px] text-white/25 mb-10">※ 개인 고객은 제휴 예식장을 통해 이용하실 수 있습니다</p>
          <p className="heading-en text-[36px] md:text-[48px] text-[#b89d6a] mb-12">
            010-7930-1332
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-[#b89d6a] hover:bg-[#a38856]">
              <span>제휴 문의</span><Arr />
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
