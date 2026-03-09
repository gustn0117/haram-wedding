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

export default function HostPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
            alt="Host" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.span initial="hidden" animate="show" custom={0} variants={fade} className="tag">Professional Host</motion.span>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] mt-4 tracking-tight">
            전문사회
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            격식과 감동 사이, 완벽한 균형을 잡는 전문 MC
          </motion.p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">Philosophy</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              사회자가 만드는 예식의 온도
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람의 전문사회는 단순히 식순을 읽는 사회자가 아닙니다. 예식의 분위기를 이끌고,
              감동적인 순간을 만들며, 하객들에게 진심이 전해지는 진행을 합니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              부부와 충분한 사전 미팅을 통해 스토리를 파악하고,
              두 분만의 이야기가 담긴 맞춤형 진행을 준비합니다.
            </p>
            <Link href="/contact" className="btn-dark-outline">
              <span>문의하기</span><Arr />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
                alt="Host service" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-36 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Service Detail</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              전문사회 서비스 내용
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: '사전 미팅 & 스토리 파악', desc: '부부와의 충분한 대화를 통해 두 분만의 이야기를 발굴합니다.' },
              { title: '맞춤형 식순 구성', desc: '격식과 재미의 균형을 맞춘 맞춤형 진행 대본을 준비합니다.' },
              { title: '현장 분위기 리딩', desc: '하객의 반응을 실시간으로 읽고 최적의 분위기를 이끌어냅니다.' },
              { title: '리허설 참여', desc: '실제 예식장에서 동선과 음향을 확인하는 사전 리허설에 참여합니다.' },
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
          <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6">
          <p className="text-[22px] md:text-[32px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            목소리 하나로<br />공간의 온도가 달라집니다
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto text-center">
          <span className="tag">Contact</span>
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
