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

export default function ConciergePage() {
  return (
    <main className="w-full pt-20">
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
            alt="컨시어지"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="text-sm tracking-[0.3em] text-haram-gold mb-4 font-montserrat">CONCIERGE</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeIn}
            className="text-4xl md:text-5xl font-light leading-tight">
            준비부터 마무리까지<br />하람이 책임집니다
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              예식장과 직접 계약하는 B2B 서비스
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
              하람 컨시어지는 예식장과 직접 계약하여 진행되는 B2B 서비스입니다.
              <br />
              결혼식 당일 현장에서 발생하는 모든 변수를 관리하고,
              <br />
              예식의 품질을 보장합니다.
              <br /><br />
              예식장의 품격을 높이고, 신부신랑과 하객들이
              <br />
              만족할 수 있는 완벽한 하루를 만들어냅니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-16 text-center">
            하람 컨시어지의 특징
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '실시간 예식 흐름 통제', desc: '리허설부터 입장 타이밍, 사회자 연결까지 완벽하게 관리합니다.' },
              { title: '예식장 전용 매뉴얼 제공', desc: '각 예식장에 맞는 맞춤형 운영 매뉴얼을 제작하여 제공합니다.' },
              { title: '이미지 통일성 확보', desc: '스태프 복장부터 운영 방식까지 통일된 이미지로 품격을 높입니다.' },
              { title: '인력 교육 시스템', desc: '지속적인 트레이닝 시스템으로 전문성을 유지합니다.' },
              { title: 'B2B 안정성 보장', desc: '계약형 서비스로 안정적이고 지속적인 파트너십을 제공합니다.' },
              { title: '전담 운영 매니저 배정', desc: '각 예식장에 전담 매니저를 배정하여 밀착 관리합니다.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeIn}
                className="bg-white p-8 rounded-2xl border border-gray-100">
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
            제휴부터 현장 운영까지
          </motion.h2>

          <div className="space-y-0">
            {[
              { step: '01', title: '상담 및 제휴 제안' },
              { step: '02', title: '맞춤 매뉴얼 설계' },
              { step: '03', title: '현장 리허설 및 시뮬레이션' },
              { step: '04', title: '웨딩 전담 인력 투입' },
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
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              예식장의 품격을 높이는 가장 확실한 방법
            </h2>
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
