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

const CheckIcon = () => (
  <svg className="w-[18px] h-[18px] text-[#b89d6a] shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1} opacity={0.25} />
    <path d="M8 12.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PhotoboothPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
            alt="Photobooth" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#b89d6a]/40" />
            <span className="tag">Photobooth</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] tracking-tight">
            포토부스
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스
          </motion.p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">About</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              결혼식의 즐거움을<br />사진으로 남기다
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람 포토부스는 단순한 촬영 장비가 아닙니다. 예식의 분위기에 맞춘 프리미엄 디자인과 고품질 인화로
              하객 한 분 한 분에게 특별한 추억을 선물합니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              촬영된 모든 사진은 실시간으로 인화되어 즉석에서 가져갈 수 있으며,
              디지털 데이터도 함께 제공됩니다. 부부에게는 하객들의 축하 메시지가 담긴
              <span className="text-[#1a1a1a] font-normal"> 포토북을 별도로 제작</span>하여 드립니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              예식장 로비, 대기 공간, 포토존 등 어디든 설치 가능하며,
              전문 스태프가 상주하여 하객분들의 촬영을 안내합니다.
            </p>
            <Link href="/contact" className="btn-dark-outline">
              <span>문의하기</span><Arr />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden img-reveal">
                <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                  alt="Photobooth service" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b89d6a]/15 -z-10" />
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-[#b89d6a]/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Features</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              포토부스 특징
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
              하람만의 차별화된 포토부스 서비스를 경험해보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <rect x="3" y="6" width="22" height="16" rx="2" />
                    <circle cx="14" cy="14" r="4" />
                    <circle cx="14" cy="14" r="1.5" strokeWidth={0.8} />
                    <circle cx="20" cy="9" r="1" fill="currentColor" opacity={0.3} />
                  </svg>
                ),
                title: '프리미엄 디자인',
                desc: '예식 컨셉에 맞춘 맞춤형 프레임과 배경을 제공합니다. 부부의 이름, 날짜, 로고까지 반영한 디자인입니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <rect x="5" y="3" width="18" height="22" rx="1" />
                    <path d="M9 10h10M9 14h7" strokeWidth={0.8} opacity={0.4} />
                    <path d="M5 19h18" strokeWidth={0.8} />
                    <circle cx="14" cy="22" r="1" fill="currentColor" opacity={0.3} />
                  </svg>
                ),
                title: '즉석 인화',
                desc: '촬영 즉시 고품질 사진으로 인화하여 하객에게 전달합니다. 기다림 없는 빠른 인화 시스템입니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <rect x="6" y="4" width="16" height="20" rx="2" />
                    <path d="M10 24v-4h8v4" strokeWidth={0.8} />
                    <circle cx="14" cy="12" r="3" />
                    <path d="M11 18c0-1.5 1.3-2 3-2s3 .5 3 2" strokeWidth={0.8} />
                  </svg>
                ),
                title: '디지털 제공',
                desc: '모든 촬영 데이터를 디지털 파일로도 제공합니다. SNS 공유까지 간편하게 지원합니다.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.08} variants={fade}
                className="bg-white p-8 md:p-10 card-lift card-inner-glow group">
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] group-hover:bg-[#b89d6a]/10 flex items-center justify-center mb-6 transition-colors duration-500 text-gray-300 group-hover:text-[#b89d6a]">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-normal mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Included</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              서비스에 포함된 내용
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
              className="p-8 md:p-10 border border-gray-100 card-inner-glow">
              <h3 className="text-[18px] font-normal mb-6">기본 제공 항목</h3>
              <ul className="space-y-4">
                {[
                  '맞춤 디자인 프레임 제작 (부부 이름, 날짜, 컨셉 반영)',
                  '고화질 즉석 인화 (무제한 촬영 가능)',
                  '전문 스태프 상주 운영 및 하객 안내',
                  '촬영 전체 데이터 디지털 파일 제공',
                  '포토부스 장비 설치 및 철거 일체',
                  '소품 세트 제공 (말풍선, 안경, 모자 등)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-gray-500 leading-[1.7]">
                    <CheckIcon />{item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}
              className="p-8 md:p-10 border border-gray-100 card-inner-glow">
              <h3 className="text-[18px] font-normal mb-6">추가 옵션</h3>
              <ul className="space-y-4">
                {[
                  '포토북 제작 — 하객 사진 + 축하 메시지를 책으로 제작',
                  '배경 커스텀 — 꽃벽, 네온사인, 패브릭 등 맞춤 배경 제작',
                  '영상 부스 — 하객들의 축하 영상 메시지를 촬영하여 편집본 제공',
                  'GIF 부스 — 움직이는 사진을 촬영하여 하객에게 전송',
                  '포토카드 — 명함 사이즈 미니 사진 인화',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-gray-500 leading-[1.7]">
                    <CheckIcon />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Process</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              진행 과정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: '상담', desc: '예식 컨셉, 장소, 하객 규모를 파악합니다' },
              { step: '02', title: '디자인', desc: '맞춤 프레임과 배경 디자인을 제작합니다' },
              { step: '03', title: '설치', desc: '예식 당일 현장에 장비를 세팅합니다' },
              { step: '04', title: '운영', desc: '전문 스태프가 촬영부터 인화까지 관리합니다' },
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

      {/* QUOTE */}
      <section className="relative py-32 md:py-44 overflow-hidden hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="hero-pattern" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6 premium-quote">
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            순간의 즐거움이<br />영원한 추억이 됩니다
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

      {/* REVIEWS */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Review</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              고객 후기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: '최○○', loc: '강남', text: '하객분들이 줄 서서 찍으셨어요! 사진 퀄리티도 좋고, 즉석 인화라 바로 가져가니까 다들 좋아하셨습니다. 포토북도 너무 예쁘게 나왔어요.' },
              { name: '정○○', loc: '일산', text: '디자인이 정말 예뻤어요. 저희 웨딩 컨셉에 맞춰서 프레임을 만들어주셨는데, 하객분들도 기념품처럼 간직하겠다고 하셨어요.' },
              { name: '한○○', loc: '판교', text: '스태프분이 하객분들 안내를 너무 잘해주셔서 부담 없이 즐길 수 있었어요. 아이들도 재밌어하고, 어른분들도 소품 쓰고 찍으시더라고요.' },
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
                  <p className="text-[11px] text-gray-400 mt-1">포토부스</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
            {[
              { q: '촬영 매수에 제한이 있나요?', a: '기본 서비스는 무제한 촬영입니다. 예식 시간 동안 원하시는 만큼 자유롭게 촬영하실 수 있습니다.' },
              { q: '설치 공간은 어느 정도 필요한가요?', a: '최소 2m x 2m 공간이면 설치 가능합니다. 예식장 로비, 대기실, 포토존 등 원하시는 위치에 설치해 드립니다.' },
              { q: '디자인 수정은 몇 번까지 가능한가요?', a: '기본 2회 수정이 포함되어 있으며, 추가 수정도 상담을 통해 가능합니다. 만족하실 때까지 함께 맞춰드립니다.' },
              { q: '야외 예식에서도 사용할 수 있나요?', a: '가능합니다. 야외용 장비와 텐트형 부스를 별도로 준비하고 있습니다. 사전 현장 답사를 통해 최적의 세팅을 안내해 드립니다.' },
            ].map((item, i) => (
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

      {/* CTA */}
      <section className="py-28 md:py-40 px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
            <span className="tag">Contact</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
          </div>
          <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-4 mb-6 tracking-tight">
            포토부스 서비스 문의
          </h2>
          <p className="text-[14px] text-gray-400 mb-10">맞춤 상담을 통해 필요한 서비스를 안내해 드립니다</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>문의하기</span><Arr />
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
