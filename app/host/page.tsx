'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

export default function HostPage() {
  return (
    <main className="w-full pt-20">
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
            alt="전문사회"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="text-sm tracking-[0.3em] text-haram-gold mb-4 font-montserrat">PROFESSIONAL HOST</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeIn}
            className="text-4xl md:text-5xl font-light leading-tight">
            진행은 매끄럽게<br />분위기는 따뜻하게
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}>
            <p className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
              사회자는 단순히 진행자가 아닙니다.
              <br />
              사회자의 목소리, 톤, 감정은 결혼식 전체의 분위기를
              <br />
              결정하는 가장 중요한 요소입니다.
              <br /><br />
              매끄러운 진행은 기본입니다.
              <br />
              하지만 하람이 추구하는 것은 그 이상입니다.
              <br /><br />
              각 순간에 적절한 감정을 전달하고,
              <br />
              뜻밖의 변수에 유연하게 대처하며,
              <br />
              결혼식 전체를 통일된 분위기로 관리하는 것입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-16 text-center">
            하람 전문사회의 특징
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '맞춤 대본 커스터마이징', desc: '신부신랑의 이야기를 담은 오직 그들만을 위한 대본을 작성합니다.' },
              { title: '예식 자료 및 음원 공유', desc: '모든 자료를 미리 공유받아 어떤 순간도 예상하지 못한 변수가 없도록 준비합니다.' },
              { title: '예식장 운영진과 협업', desc: '음향, 조명과의 완벽한 협력으로 진행을 매끄럽게 합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeIn}
                className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-16 text-center">
            전문사회 서비스 과정
          </motion.h2>

          <div className="space-y-0">
            {[
              { step: '01', title: '초기 상담' },
              { step: '02', title: '자료 수집 및 대본 작성' },
              { step: '03', title: '대본 확정 및 리허설' },
              { step: '04', title: '당일 진행 및 현장 관리' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeIn}
                className="flex items-center gap-8 py-8 border-b border-gray-100">
                <span className="text-4xl font-light text-haram-gold font-montserrat w-16">{item.step}</span>
                <h3 className="text-xl font-light text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              품격 있는 진행을 원하신다면
            </h2>
            <p className="text-2xl font-light text-haram-gold mb-8 font-montserrat">010-7930-1332</p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-white px-10 py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
