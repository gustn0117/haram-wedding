'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
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
      <section className="relative pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden md:block absolute left-[10%] top-0 w-[1px] h-full bg-gray-100/60" />
          <div className="hidden md:block absolute right-[10%] top-0 w-[1px] h-full bg-gray-100/60" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-haram-gold/40" />
            <p className="text-[10px] tracking-[0.5em] text-haram-gold font-montserrat uppercase font-light">Contact</p>
            <div className="w-12 h-[1px] bg-haram-gold/40" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            className="text-[36px] md:text-[52px] font-light leading-[1.3] text-gray-900 mb-8 font-serif">
            문의하기
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            className="text-[15px] text-gray-400 font-light leading-[2]">
            궁금한 점은 언제든 편하게 물어보세요.
            <br />
            하람은 항상 당신의 특별한 날을 응원합니다.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { icon: '01', label: '전화', value: '010-7930-1332', sub: '평일 10:00 ~ 18:00' },
              { icon: '02', label: '이메일', value: 'contact@haram.kr', sub: '빠른 회신을 위해 전화 문의 권장' },
              { icon: '03', label: '위치', value: '경기도 수원시 영통구', sub: '온/오프라인 상담 가능' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
                className={`text-center py-12 px-8 ${i < 2 ? 'md:border-r border-gray-100' : ''}`}>
                <div className="w-12 h-12 rounded-full border-2 border-haram-gold/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-haram-gold font-montserrat text-[11px] font-semibold">{item.icon}</span>
                </div>
                <p className="text-[9px] tracking-[0.4em] text-haram-gold mb-4 font-montserrat uppercase font-light">{item.label}</p>
                <p className="text-[16px] font-light text-gray-900 mb-2">{item.value}</p>
                <p className="text-[11px] text-gray-400 font-light">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32 px-6 bg-haram-cream">
        <div className="max-w-2xl mx-auto">
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-2xl border border-gray-100 relative overflow-hidden
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />

            <div className="flex items-center gap-3 mb-3">
              <div className="px-3 py-1 bg-haram-gold/10 rounded-full">
                <p className="text-[9px] tracking-[0.2em] text-haram-gold-dark font-montserrat uppercase font-medium">Inquiry</p>
              </div>
            </div>
            <h3 className="text-[24px] font-light text-gray-900 mb-3 font-serif">문의 양식</h3>
            <div className="w-12 h-[1px] bg-gradient-to-r from-haram-gold to-transparent mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">성명</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300" />
              </div>
              <div>
                <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">전화번호</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300 placeholder:text-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">서비스</label>
                <select name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300 appearance-none">
                  <option value="">선택해주세요</option>
                  <option value="concierge">컨시어지(예식도우미)</option>
                  <option value="photobooth">포토부스</option>
                  <option value="host">전문사회</option>
                  <option value="package">패키지</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">예식 예정일</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300" />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">이메일</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300" />
            </div>

            <div className="mb-10">
              <label className="block text-[9px] text-gray-400 tracking-[0.2em] mb-3 uppercase font-montserrat">메시지</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요."
                className="w-full px-4 py-3.5 bg-haram-cream/70 border border-gray-100 rounded-xl text-[14px] font-light focus:outline-none focus:border-haram-gold/40 focus:bg-white transition-all duration-300 resize-none placeholder:text-gray-300" />
            </div>

            <button type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-haram-gold text-haram-navy py-4 rounded-full text-[11px] tracking-[0.15em] uppercase font-montserrat font-medium
                hover:bg-haram-gold-light transition-colors duration-400 shadow-lg shadow-haram-gold/15">
              메시지 보내기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-8 font-light">
              입력하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 watermark-overlay opacity-[0.03]" />
        <div className="relative max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16">
            <p className="badge-label text-haram-gold mb-6 justify-center">FAQ</p>
            <h2 className="text-[26px] md:text-[40px] font-light text-gray-900 font-serif">자주 묻는 질문</h2>
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
                className="group bg-haram-cream/70 p-7 rounded-xl border border-gray-100
                  [&[open]]:bg-white [&[open]]:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] [&[open]]:border-gray-100 transition-all">
                <summary className="cursor-pointer font-light text-gray-900 text-[15px] flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] text-haram-gold/50 font-montserrat">{String(i + 1).padStart(2, '0')}</span>
                    {faq.q}
                  </span>
                  <span className="text-haram-gold text-lg ml-4 shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-5 pt-5 border-t border-gray-100 text-[13px] text-gray-400 font-light leading-[1.9] ml-8">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
