'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
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
    <main>
      {/* HERO */}
      <section className="pt-36 pb-16 px-6 text-center">
        <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-[11px] tracking-[0.3em] text-haram-gold mb-6 uppercase">Contact</motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fade}
          className="text-[36px] md:text-[48px] text-haram-dark leading-[1.3] mb-6">
          문의하기
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={0.2} variants={fade}
          className="text-[15px] text-gray-400 leading-[2]">
          궁금한 점은 언제든 편하게 물어보세요.
          <br />
          하람은 항상 당신의 특별한 날을 응원합니다.
        </motion.p>
      </section>

      {/* CONTACT INFO */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100">
          {[
            { label: '전화', value: '010-7930-1332', sub: '평일 10:00 ~ 18:00' },
            { label: '이메일', value: 'contact@haram.kr', sub: '전화 문의 권장' },
            { label: '위치', value: '경기도 수원시 영통구', sub: '온/오프라인 상담 가능' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.08} variants={fade}
              className={`text-center py-10 px-6 ${i < 2 ? 'md:border-r border-gray-100' : ''}`}>
              <p className="text-[11px] tracking-[0.2em] text-haram-gold mb-4 uppercase">{item.label}</p>
              <p className="text-[15px] text-haram-dark mb-1">{item.value}</p>
              <p className="text-[11px] text-gray-400">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 px-6 bg-haram-cream">
        <div className="max-w-xl mx-auto">
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-gray-100">
            <h3 className="text-[22px] text-haram-dark mb-2">문의 양식</h3>
            <p className="text-[12px] text-gray-400 mb-8">아래 양식을 작성해주시면 빠르게 연락드리겠습니다</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">성명 *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">전화번호 *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300 placeholder:text-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">서비스</label>
                <select name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300 appearance-none">
                  <option value="">선택해주세요</option>
                  <option value="concierge">컨시어지</option>
                  <option value="photobooth">포토부스</option>
                  <option value="host">전문사회</option>
                  <option value="package">패키지</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">예식 예정일</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] text-gray-500 mb-2">이메일</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300" />
            </div>

            <div className="mb-8">
              <label className="block text-[11px] text-gray-500 mb-2">메시지 *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요."
                className="w-full px-4 py-3 bg-haram-cream/60 border border-gray-100 text-[14px] focus:outline-none focus:border-haram-gold/40 transition-colors duration-300 resize-none placeholder:text-gray-300" />
            </div>

            <button type="submit"
              className="w-full bg-haram-dark text-white py-4 text-[13px] tracking-wide
                hover:bg-haram-gold transition-colors duration-400">
              메시지 보내기
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-6">
              입력하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] text-haram-gold mb-5 uppercase">FAQ</p>
            <h2 className="text-[26px] md:text-[36px] text-haram-dark">자주 묻는 질문</h2>
          </motion.div>

          <div className="space-y-0">
            {[
              { q: '전체 서비스를 함께 이용할 수 있나요?', a: '네, 컨시어지, 포토부스, 전문사회를 패키지로 함께 이용하실 수 있으며, 할인이 적용됩니다.' },
              { q: '예약은 얼마나 전에 해야 하나요?', a: '결혼식 2-3개월 전에 예약하시는 것을 권장합니다.' },
              { q: '예식장이 정해지지 않았는데 상담받을 수 있나요?', a: '물론입니다! 예식장 선택 전에 상담받으시면 하람과 잘 맞는 예식장을 함께 찾을 수 있습니다.' },
              { q: '취소나 날짜 변경이 가능한가요?', a: '가능한 범위 내에서 응해드립니다. 자세한 정책은 상담 시 안내드립니다.' },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.05} variants={fade}
                className="group border-b border-gray-100">
                <summary className="cursor-pointer py-6 text-[15px] text-haram-dark flex justify-between items-center">
                  {faq.q}
                  <span className="text-haram-gold ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200 text-[18px]">+</span>
                </summary>
                <p className="pb-6 text-[13px] text-gray-400 leading-[1.9]">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
