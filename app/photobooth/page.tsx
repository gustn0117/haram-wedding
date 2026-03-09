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

export default function PhotoboothPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
            alt="Photobooth" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.span initial="hidden" animate="show" custom={0} variants={fade} className="tag">Photobooth</motion.span>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] mt-4 tracking-tight">
            포토부스
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 포토부스
          </motion.p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <span className="tag">About</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.5] mt-5 mb-8 tracking-tight">
              결혼식의 즐거움을 사진으로 남기다
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-6">
              하람 포토부스는 단순한 촬영 장비가 아닙니다. 예식의 분위기에 맞춘 프리미엄 디자인과 고품질 인화로
              하객 한 분 한 분에게 특별한 추억을 선물합니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mb-10">
              촬영된 모든 사진은 실시간으로 인화되어 즉석에서 가져갈 수 있으며,
              디지털 데이터도 함께 제공됩니다.
            </p>
            <Link href="/contact" className="btn-dark-outline">
              <span>문의하기</span><Arr />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                alt="Photobooth service" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-36 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-16">
            <span className="tag">Features</span>
            <h2 className="text-[28px] md:text-[38px] font-extralight leading-[1.4] mt-4 tracking-tight">
              포토부스 특징
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: '프리미엄 디자인', desc: '예식 컨셉에 맞춘 맞춤형 프레임과 배경을 제공합니다.' },
              { title: '즉석 인화', desc: '촬영 즉시 고품질 사진으로 인화하여 하객에게 전달합니다.' },
              { title: '디지털 제공', desc: '모든 촬영 데이터를 디지털 파일로도 제공합니다.' },
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
          <Image src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="relative z-10 text-center px-6">
          <p className="text-[22px] md:text-[32px] text-white font-extralight leading-[1.8] max-w-xl mx-auto tracking-tight">
            순간의 즐거움이<br />영원한 추억이 됩니다
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="max-w-2xl mx-auto text-center">
          <span className="tag">Contact</span>
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
