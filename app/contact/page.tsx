'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="w-full pt-20">
      {/* Hero */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="text-sm tracking-[0.3em] text-haram-gold mb-4 font-montserrat">CONTACT</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeIn}
            className="text-4xl md:text-5xl font-light leading-tight text-gray-900 mb-8">
            문의하기
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={0.4} variants={fadeIn}
            className="text-[15px] text-gray-500 font-light leading-[2]">
            궁금한 점은 언제든 편하게 물어보세요.
            <br />
            하람은 항상 당신의 특별한 날을 응원합니다.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: '전화', value: '010-7930-1332', sub: '평일 10:00 ~ 18:00' },
            { label: '이메일', value: 'contact@haram.kr', sub: '빠른 회신을 위해 전화 문의 권장' },
            { label: '위치', value: '경기도 수원시 영통구', sub: '온/오프라인 상담 가능' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeIn}
              className="text-center py-8">
              <p className="text-xs text-gray-400 tracking-widest mb-2">{item.label}</p>
              <p className="text-lg font-medium text-gray-900 mb-1">{item.value}</p>
              <p className="text-sm text-gray-400 font-light">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-2xl mx-auto">
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-8">문의 양식</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs text-gray-400 mb-2">성명</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-[#fafaf7] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-haram-gold/30" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">이메일</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-[#fafaf7] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-haram-gold/30" />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs text-gray-400 mb-2">전화번호</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                className="w-full px-4 py-3 bg-[#fafaf7] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-haram-gold/30" />
            </div>

            <div className="mb-8">
              <label className="block text-xs text-gray-400 mb-2">메시지</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="원하시는 서비스, 예정된 결혼식 날짜, 예식장 등을 알려주세요."
                className="w-full px-4 py-3 bg-[#fafaf7] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-haram-gold/30 resize-none" />
            </div>

            <button type="submit"
              className="w-full bg-haram-gold text-white py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity">
              메시지 보내기
            </button>

            <p className="text-xs text-gray-400 text-center mt-4 font-light">
              입력하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
            className="text-3xl font-light text-gray-900 mb-12 text-center">
            자주 묻는 질문
          </motion.h2>

          <div className="space-y-3">
            {[
              { q: '전체 서비스를 함께 이용할 수 있나요?', a: '네, 컨시어지, 포토부스, 전문사회를 패키지로 함께 이용하실 수 있으며, 할인이 적용됩니다.' },
              { q: '예약은 얼마나 전에 해야 하나요?', a: '결혼식 2-3개월 전에 예약하시는 것을 권장합니다.' },
              { q: '취소나 날짜 변경이 가능한가요?', a: '가능한 범위 내에서 응해드립니다. 자세한 정책은 상담 시 안내드립니다.' },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05} variants={fadeIn}
                className="bg-[#fafaf7] p-6 rounded-xl border border-gray-100">
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
    </main>
  );
}
