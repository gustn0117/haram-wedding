'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-[11px] tracking-[0.35em] text-haram-gold mb-5 font-montserrat">CONTACT</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-4xl md:text-[48px] font-light leading-[1.3] text-gray-900 mb-8">
            문의하기
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={0.35} variants={fadeUp}>
            <div className="gold-divider mx-auto mb-8" />
          </motion.div>
          <motion.p initial="hidden" animate="visible" custom={0.45} variants={fadeUp}
            className="text-[15px] text-gray-400 font-light leading-[2]">
            궁금한 점은 언제든 편하게 물어보세요.
            <br />
            하람은 항상 당신의 특별한 날을 응원합니다.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-100">
          {[
            { label: '전화', value: '010-7930-1332', sub: '평일 10:00 ~ 18:00' },
            { label: '이메일', value: 'contact@haram.kr', sub: '빠른 회신을 위해 전화 문의 권장' },
            { label: '위치', value: '경기도 수원시 영통구', sub: '온/오프라인 상담 가능' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.1} variants={fadeUp}
              className="text-center py-8 md:py-6 md:px-8">
              <p className="text-[10px] tracking-[0.25em] text-haram-gold mb-3 font-montserrat uppercase">{item.label}</p>
              <p className="text-[16px] font-light text-gray-900 mb-1">{item.value}</p>
              <p className="text-[12px] text-gray-400 font-light">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-2xl mx-auto">
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-2xl border border-gray-100 shadow-sm shadow-black/5">

            <p className="text-[11px] tracking-[0.25em] text-haram-gold mb-3 font-montserrat uppercase">Inquiry Form</p>
            <h3 className="text-2xl font-light text-gray-900 mb-2">문의 양식</h3>
            <div className="gold-divider mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">성명</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">전화번호</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors placeholder:text-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">서비스</label>
                <select name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors appearance-none">
                  <option value="">선택해주세요</option>
                  <option value="concierge">컨시어지(예식도우미)</option>
                  <option value="photobooth">포토부스</option>
                  <option value="host">전문사회</option>
                  <option value="package">패키지</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">예식 예정일</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors" />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">이메일</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors" />
            </div>

            <div className="mb-8">
              <label className="block text-[11px] text-gray-400 tracking-wider mb-2 uppercase">메시지</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요."
                className="w-full px-4 py-3.5 bg-[#fafaf7] border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 transition-colors resize-none placeholder:text-gray-300" />
            </div>

            <button type="submit"
              className="w-full bg-haram-gold text-white py-4 rounded-full text-[13px] tracking-[0.05em] hover:opacity-90 transition-opacity">
              메시지 보내기
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-6 font-light">
              입력하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-4 font-montserrat uppercase">FAQ</p>
            <h2 className="text-3xl md:text-[36px] font-light text-gray-900">자주 묻는 질문</h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: '전체 서비스를 함께 이용할 수 있나요?', a: '네, 컨시어지, 포토부스, 전문사회를 패키지로 함께 이용하실 수 있으며, 할인이 적용됩니다.' },
              { q: '예약은 얼마나 전에 해야 하나요?', a: '결혼식 2-3개월 전에 예약하시는 것을 권장합니다. 날짜에 따라 가능 여부가 달라질 수 있습니다.' },
              { q: '예식장이 정해지지 않았는데 상담받을 수 있나요?', a: '물론입니다! 예식장 선택 전에 상담받으시면 하람과 잘 맞는 예식장을 함께 찾을 수 있습니다.' },
              { q: '취소나 날짜 변경이 가능한가요?', a: '가능한 범위 내에서 응해드립니다. 자세한 취소/변경 정책은 계약서에 명시되어 있으며, 상담 시 안내드립니다.' },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.05} variants={fadeUp}
                className="bg-[#fafaf7] p-6 rounded-xl border border-gray-100 group [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:shadow-black/5 transition-all">
                <summary className="cursor-pointer font-light text-gray-900 text-[15px] flex justify-between items-center">
                  {faq.q}
                  <span className="text-haram-gold text-lg ml-4 shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 pt-4 border-t border-gray-100 text-[14px] text-gray-400 font-light leading-[1.8]">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
