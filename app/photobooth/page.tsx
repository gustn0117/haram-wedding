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

export default function PhotoboothPage() {
  return (
    <main className="w-full pt-20">
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="포토부스"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="text-sm tracking-[0.3em] text-haram-gold mb-4 font-montserrat">PHOTOBOOTH</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeIn}
            className="text-4xl md:text-5xl font-light leading-tight">
            추억을 선물하는 셀프 포토존<br />감성까지 담았습니다
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              사진은 남고, 감정은 오래갑니다
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
              하람 포토부스는 단순한 사진을 넘어서,
              <br />
              결혼식의 감정과 분위기를 담아냅니다.
              <br /><br />
              맞춤형 템플릿 디자인, 감성 있는 소품,
              <br />
              그리고 세심한 운영으로
              <br />
              당신의 결혼식을 더욱 특별하게 만들어줍니다.
              <br /><br />
              결혼식이 끝난 후에도 포토방명록을 통해
              <br />
              손님들의 축하 메시지와 웃음이 담긴 사진을
              <br />
              오래도록 간직할 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-16 text-center">
            예약 및 진행과정 안내
          </motion.h2>

          <div className="space-y-0">
            {[
              { step: '01', title: '네이버 톡톡, 인스타 DM 문의' },
              { step: '02', title: '네이버폼 예약서 작성 후 스토어 결제' },
              { step: '03', title: '템플릿 디자인 확정 및 최종 확인' },
              { step: '04', title: '행사 진행 및 포토방명록 전달' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeIn}
                className="flex items-center gap-8 py-8 border-b border-gray-200">
                <span className="text-4xl font-light text-haram-gold font-montserrat w-16">{item.step}</span>
                <h3 className="text-xl font-light text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-16 text-center">
            포토부스 패키지
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: '하람 포토부스 패키지', price: '500,000', note: '' },
              { name: '혜택가', price: '360,000', note: '컨시어지 또는 전문사회 이용 고객 대상' },
            ].map((pkg, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15} variants={fadeIn}
                className="bg-[#fafaf7] p-10 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-4xl font-light text-haram-gold mb-6 font-montserrat">
                  {pkg.price}<span className="text-base text-gray-400 ml-1">원/1회</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-500 font-light">
                  <li>포토부스 운영 2시간</li>
                  <li>맞춤형 템플릿 디자인</li>
                  <li>포토방명록 제작</li>
                  <li>소품 및 의상 제공</li>
                  <li>전문 스태프 배치</li>
                </ul>
                {pkg.note && <p className="mt-6 text-xs text-gray-400">{pkg.note}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-12 text-center">
            자주 묻는 질문
          </motion.h2>

          <div className="space-y-3">
            {[
              { q: '포토부스 템플릿은 어떻게 디자인하나요?', a: '신부신랑님과의 상담을 통해 결혼식의 컨셉, 색감, 스타일 등을 파악하여 맞춤형 템플릿을 디자인합니다.' },
              { q: '포토부스 운영 시간을 늘릴 수 있나요?', a: '네, 가능합니다. 추가 시간은 시간당 별도 요금이 적용됩니다.' },
              { q: '포토방명록은 언제 받을 수 있나요?', a: '결혼식 후 약 1주일 이내에 완성된 포토방명록을 받으실 수 있습니다.' },
              { q: '다른 서비스와 함께 이용할 수 있나요?', a: '네, 컨시어지나 전문사회 서비스를 함께 이용하실 경우 혜택가가 적용됩니다.' },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05} variants={fadeIn}
                className="bg-white p-6 rounded-xl border border-gray-100 group">
                <summary className="cursor-pointer font-medium text-gray-900 text-[15px] flex justify-between items-center">
                  {faq.q}
                  <span className="text-haram-gold text-xl ml-4">+</span>
                </summary>
                <p className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              특별한 포토부스 경험을 원하신다면
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
