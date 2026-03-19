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

export default function HostPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
            alt="Host" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#b89d6a]/40" />
            <span className="tag">Professional Host</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] tracking-tight">
            전문사회
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            격식과 감동 사이, 완벽한 균형을 잡는 전문 MC
          </motion.p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">Philosophy</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              사회자가 만드는<br />예식의 온도
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람의 전문사회는 단순히 식순을 읽는 사회자가 아닙니다. 예식의 분위기를 이끌고,
              감동적인 순간을 만들며, 하객들에게 진심이 전해지는 진행을 합니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              부부와 충분한 사전 미팅을 통해 스토리를 파악하고,
              두 분만의 이야기가 담긴 <span className="text-[#1a1a1a] font-normal">맞춤형 진행을 준비</span>합니다.
              뻔한 멘트가 아닌, 진심이 느껴지는 진행으로 하객들의 마음을 움직입니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              웃음과 눈물, 긴장과 설렘이 교차하는 예식에서
              적절한 타이밍에 적절한 말 한마디가 공간의 온도를 바꿉니다.
            </p>
            <Link href="/contact" className="btn-dark-outline">
              <span>문의하기</span><Arr />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden img-reveal">
                <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
                  alt="Host service" fill className="object-cover" />
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
            <span className="tag">Service Detail</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              전문사회 서비스 내용
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
              예식의 시작부터 끝까지, 매 순간을 함께합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <circle cx="14" cy="10" r="4" />
                    <path d="M7 22c0-3 3-5 7-5s7 2 7 5" />
                    <path d="M18 8l3-3m0 0l3 3m-3-3v6" strokeWidth={0.8} opacity={0.4} />
                  </svg>
                ),
                title: '사전 미팅 & 스토리 파악',
                desc: '부부와의 충분한 대화를 통해 두 분만의 이야기를 발굴하고, 예식에 녹여낼 포인트를 설계합니다. 어떤 분위기를 원하시는지, 특별히 강조하고 싶은 순간은 무엇인지 꼼꼼히 파악합니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M6 4h16v20H6z" rx="1" />
                    <path d="M10 9h8M10 13h6M10 17h4" strokeWidth={0.8} opacity={0.5} />
                    <path d="M6 4l3-2h10l3 2" strokeWidth={0.8} />
                  </svg>
                ),
                title: '맞춤형 식순 구성',
                desc: '격식과 재미의 균형을 맞춘 맞춤형 진행 대본을 준비합니다. 주례, 축가, 세리머니 등 각 순서의 연결을 자연스럽게 설계하여 매끄러운 흐름을 만듭니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <circle cx="14" cy="14" r="10" />
                    <path d="M14 8v6l4 2" strokeWidth={1.2} strokeLinecap="round" />
                    <circle cx="14" cy="14" r="1.5" fill="currentColor" opacity={0.2} />
                  </svg>
                ),
                title: '현장 분위기 리딩',
                desc: '하객의 반응을 실시간으로 읽고 최적의 분위기를 이끌어냅니다. 상황에 따라 유연하게 대응하며, 지루해지지 않도록 적절한 타이밍에 포인트를 넣어줍니다.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M4 20l6-6 4 4 6-8 4 4" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="14" r="2" strokeWidth={0.8} opacity={0.3} />
                  </svg>
                ),
                title: '리허설 참여',
                desc: '실제 예식장에서 동선과 음향을 확인하는 사전 리허설에 참여합니다. 마이크 상태, 음향 반사, 하객 시선 등을 점검하여 당일 최적의 진행 환경을 만듭니다.',
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

      {/* WHAT SETS US APART */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Difference</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              하람 전문사회가 다른 점
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                n: '01',
                title: '스토리텔링 기반 진행',
                desc: '부부의 연애 스토리, 프러포즈 에피소드 등을 자연스럽게 녹여 감동적인 식순을 만듭니다. 정형화된 멘트가 아닌, 오직 두 분만을 위한 대본을 준비합니다.',
              },
              {
                n: '02',
                title: '음향·조명 연동 관리',
                desc: '사회자가 직접 음향·조명 팀과 소통하며 각 식순에 맞는 분위기를 연출합니다. 입장 음악, 조명 전환, 축가 큐 등을 정확한 타이밍에 맞춰 진행합니다.',
              },
              {
                n: '03',
                title: '돌발 상황 대응력',
                desc: '예상치 못한 상황에도 당황하지 않는 노련함이 있습니다. 축가 지연, 장비 문제, 시간 초과 등 어떤 변수에도 자연스럽게 대처하여 흐름을 유지합니다.',
              },
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
              { step: '01', title: '미팅', desc: '부부의 스토리와 원하는 분위기를 파악합니다' },
              { step: '02', title: '대본', desc: '맞춤형 진행 대본과 식순을 설계합니다' },
              { step: '03', title: '리허설', desc: '예식장에서 동선과 음향을 점검합니다' },
              { step: '04', title: '본식', desc: '완벽한 진행으로 감동을 선사합니다' },
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
          <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="hero-pattern" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6 premium-quote">
          <p className="text-[22px] md:text-[34px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            목소리 하나로<br />공간의 온도가 달라집니다
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
              { name: '송○○', loc: '강남', text: '사회자분의 진행이 정말 자연스러웠어요. 울고 웃는 순간이 적절하게 교차되면서, 하객분들도 정말 몰입하셨어요. 부모님이 가장 만족하셨습니다.' },
              { name: '윤○○', loc: '수원', text: '저희 러브스토리를 녹여서 진행해주셨는데, 친구들이 다 감동받았다고 연락이 왔어요. 정형화되지 않은 진행이라 특별했습니다.' },
              { name: '김○○', loc: '분당', text: '리허설 때부터 꼼꼼하게 체크해주셔서 당일에는 정말 편안했어요. 음향 문제가 잠깐 있었는데 바로 대처해주셔서 하객들은 전혀 몰랐어요.' },
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
                  <p className="text-[11px] text-gray-400 mt-1">전문사회</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 bg-[#FAF8F5]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
            <span className="tag">Contact</span>
            <span className="w-8 h-[1px] bg-[#b89d6a]/30" />
          </div>
          <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-4 mb-6 tracking-tight">
            전문사회 서비스 문의
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
