'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function PhotoboothPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="포토부스" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 watermark-overlay" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[11px] tracking-[0.35em] text-haram-gold mb-5 font-montserrat">HARAM PHOTOBOOTH</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-3xl md:text-[42px] font-light leading-[1.5] mb-6">
            하객이 한 번 더 웃게 되고,
            <br />
            예식장이 한 번 더 기억되는 순간
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <div className="gold-divider mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 leading-[1.4] mb-10">
              사진은 남고, 감정은 오래갑니다
            </h2>
            <div className="gold-divider mx-auto mb-10" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fadeUp}
            className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
            결혼식에는 수많은 순간들이 있습니다.
            <br />
            식장의 음악, 하객들의 웃음, 부모님의 미소, 신랑신부의 떨리는 눈빛.
            <br />
            그 모든 장면은 너무나도 빠르게 지나가지만,
            <br />
            사진 한 장이 그 기억을 붙잡아둘 수 있습니다.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.35} variants={fadeUp}
            className="my-10">
            <div className="w-[1px] h-12 bg-haram-gold/30 mx-auto" />
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.45} variants={fadeUp}
            className="text-[15px] md:text-[17px] leading-[2.2] text-gray-400 font-light italic">
            웨딩은 하루지만, 그 하루가 두고두고 회자되게 만드는 것.
            <br />
            그게 바로 하람 포토부스입니다.
          </motion.p>
        </div>
      </section>

      {/* Template Section */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Custom Template</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 mb-8">
              고객님을 위한 맞춤형 템플릿 제작
            </h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={fadeUp}
            className="text-[15px] text-gray-500 font-light leading-[2] max-w-2xl mx-auto">
            신랑신부님의 취향, 웨딩홀의 분위기, 전체 예식의 무드까지 고려하여
            <br />
            하람 전담 매니저가 단 하나뿐인 맞춤형 템플릿을 직접 제작합니다.
          </motion.p>
        </div>
      </section>

      {/* Photo Book */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 leading-[1.4] mb-8">
              기억은 흐려지지만
              <br />
              <span className="text-haram-gold">포토북</span>은 선명히 남습니다
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-[15px] text-gray-500 font-light leading-[2]">
              결혼식이 끝나도, 시간이 지나도,
              <br />
              그날의 웃음과 공기를 다시 떠올릴 수 있는 방법이 있다면
              <br />
              하람의 감성 포토북이 그 역할을 합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Process</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 mb-4">
              예약 및 진행과정 안내
            </h2>
            <p className="text-[14px] text-gray-400 font-light">
              디자인부터 현장 운영까지 모든 과정이 자동처럼 진행됩니다.
            </p>
          </motion.div>

          {[
            { step: '01', title: '네이버 톡톡, 인스타 DM 문의', desc: '복잡한 절차보다 즉각적인 소통을 중요하게 생각합니다. 1:1 맞춤 안내로 친절하게 상담해드립니다.' },
            { step: '02', title: '네이버폼 예약서 작성 후 스토어 결제', desc: '상담 후 제공되는 네이버폼을 통해 예약서를 작성해 주세요. 스토어 결제까지 완료되면 본격적인 준비가 시작됩니다.' },
            { step: '03', title: '템플릿 디자인 확정 및 최종 확인', desc: '포토부스 템플릿 시안을 전달드립니다. 수정도 가능하며, 최종 확인 후 인쇄가 진행됩니다.' },
            { step: '04', title: '행사 진행 및 포토방명록 전달', desc: '하람 전담 스탭이 현장에서 설치, 진행, 안내까지 모두 맡습니다. 예식 이후에는 포토 방명록이 정리되어 전달됩니다.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.1} variants={fadeUp}
              className="flex gap-8 md:gap-12 py-10 border-b border-gray-200/60 group">
              <span className="text-[40px] font-light text-haram-gold/60 font-montserrat w-16 shrink-0
                group-hover:text-haram-gold transition-colors duration-500">{item.step}</span>
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-gray-400 font-light leading-[1.8]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">Pricing</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900">하람 포토부스 패키지</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Package */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="bg-[#fafaf7] p-10 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold to-transparent" />
              <p className="text-[11px] tracking-[0.2em] text-haram-gold mb-2 font-montserrat">STANDARD</p>
              <h3 className="text-xl font-light text-gray-900 mb-6">하람 포토부스 패키지</h3>
              <p className="text-[42px] font-light text-gray-900 mb-1 font-montserrat">
                500,000<span className="text-[15px] text-gray-400 ml-1">원/1회</span>
              </p>
              <div className="gold-divider my-8" />
              <ul className="space-y-4 text-[14px] text-gray-500 font-light">
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />포토부스 장비 대여 (1H + 30M, 총 90분)</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />전문 스탭 상주, 현장 진행</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />맞춤 템플릿 제작</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />무제한 사진 인화</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />포토북 제작, 제공</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-haram-gold shrink-0" />소품, 테이블, 조명 등</li>
              </ul>
              <Link href="/contact"
                className="block mt-8 text-center bg-haram-gold text-white py-4 rounded-full text-[13px] tracking-[0.05em] hover:opacity-90 transition-opacity">
                문의하기
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} variants={fadeUp}
              className="bg-[#fafaf7] p-10 rounded-2xl border border-gray-100">
              <p className="text-[11px] tracking-[0.2em] text-haram-gold mb-2 font-montserrat">BENEFITS</p>
              <h3 className="text-xl font-light text-gray-900 mb-6">혜택 프로그램 안내</h3>
              <p className="text-[14px] text-gray-400 font-light mb-8">보다 저렴하게 이용하세요!</p>
              <div className="gold-divider mb-8" />
              <ul className="space-y-5 text-[14px] text-gray-500 font-light">
                <li className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span>홍보 활용 동의시</span>
                  <span className="text-haram-gold font-montserrat">10% 할인 [-5만원]</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span>블로그 리뷰 작성시</span>
                  <span className="text-haram-gold font-montserrat">10% 할인 [-5만원]</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span>스토어 리뷰 작성시</span>
                  <span className="text-haram-gold font-montserrat">4% 할인 [-2만원]</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>&lsquo;우리 둘&rsquo; 이벤트 참여시</span>
                  <span className="text-haram-gold font-montserrat">4% 할인 [-2만원]</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900 mb-4">
              특별한 포토부스 경험을 원하신다면
            </h2>
            <p className="text-[14px] text-gray-400 font-light mb-10">
              정확한 가격은 네이버 톡톡, 인스타 DM을 통해 문의해주세요!
            </p>
            <Link href="/contact"
              className="inline-block bg-haram-gold text-white px-10 py-4 rounded-full text-[13px] tracking-[0.05em] hover:opacity-90 transition-opacity">
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
