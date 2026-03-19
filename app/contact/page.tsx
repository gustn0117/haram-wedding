'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setForm({ name: '', phone: '', service: '', date: '', email: '', message: '' });
  };

  const inputClass = 'w-full px-5 py-4 bg-[#FAF8F5] border border-gray-100 text-[14px] focus:outline-none focus:border-[#b89d6a]/40 transition-all duration-300 focus:bg-white';

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-black hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80"
            alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#b89d6a]/40" />
            <span className="tag">Contact</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="show" custom={0.1} variants={fade}
            className="text-[36px] md:text-[56px] text-white font-extralight leading-[1.2] tracking-tight">
            문의하기
          </motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.2} variants={fade}
            className="text-[15px] text-white/50 mt-4 max-w-md leading-relaxed">
            궁금한 점은 언제든 편하게 물어보세요
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100">
          {[
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.35 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.56 2.81.68a2 2 0 011.72 2.03z" />
                </svg>
              ),
              label: '전화', value: '010-7930-1332', sub: '평일 10:00 ~ 18:00',
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              ),
              label: '이메일', value: 'contact@haram.kr', sub: '전화 문의 권장',
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: '위치', value: '경기도 수원시 영통구', sub: '온/오프라인 상담 가능',
            },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
              custom={i * 0.08} variants={fade}
              className={`text-center py-12 px-6 hover:bg-[#FAF8F5] transition-colors group ${i < 2 ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] group-hover:bg-[#b89d6a]/10 flex items-center justify-center mx-auto mb-4 transition-colors text-gray-300 group-hover:text-[#b89d6a]">
                {item.icon}
              </div>
              <p className="tag text-[10px] mb-3">{item.label}</p>
              <p className="text-[15px] mb-1">{item.value}</p>
              <p className="text-[11px] text-gray-400">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 px-6 bg-[#FAF8F5] relative bg-noise">
        <div className="max-w-xl mx-auto relative z-10">
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-gray-100 card-inner-glow">

            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#b89d6a]/40" />
              <span className="tag">Inquiry Form</span>
            </div>
            <h3 className="text-[24px] font-extralight mt-3 mb-10 tracking-tight">문의 양식</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">성명 *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">전화번호 *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                  placeholder="010-0000-0000" className={inputClass + ' placeholder:text-gray-300'} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">서비스</label>
                <select name="service" value={form.service} onChange={handleChange} className={inputClass + ' appearance-none'}>
                  <option value="">선택해주세요</option>
                  <option value="concierge">컨시어지</option>
                  <option value="photobooth">포토부스</option>
                  <option value="host">전문사회</option>
                  <option value="package">패키지</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-gray-500 mb-2">예식 예정일</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] text-gray-500 mb-2">이메일</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
            </div>

            <div className="mb-8">
              <label className="block text-[11px] text-gray-500 mb-2">메시지 *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요."
                className={inputClass + ' resize-none placeholder:text-gray-300'} />
            </div>

            <button type="submit" className="btn-gold w-full justify-center">
              <span>메시지 보내기</span><Arr />
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
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="text-center mb-14">
            <span className="tag">FAQ</span>
            <h2 className="text-[28px] md:text-[36px] font-extralight leading-[1.4] mt-4 tracking-tight">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div>
            {[
              { q: '전체 서비스를 함께 이용할 수 있나요?', a: '네, 컨시어지, 포토부스, 전문사회를 패키지로 함께 이용하실 수 있으며, 할인이 적용됩니다.' },
              { q: '예약은 얼마나 전에 해야 하나요?', a: '결혼식 2-3개월 전에 예약하시는 것을 권장합니다.' },
              { q: '예식장이 정해지지 않았는데 상담받을 수 있나요?', a: '물론입니다! 예식장 선택 전에 상담받으시면 하람과 잘 맞는 예식장을 함께 찾을 수 있습니다.' },
              { q: '취소나 날짜 변경이 가능한가요?', a: '가능한 범위 내에서 응해드립니다. 자세한 정책은 상담 시 안내드립니다.' },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.05} variants={fade}
                className="group border-b border-gray-100">
                <summary className="cursor-pointer py-6 text-[15px] flex justify-between items-center hover:text-[#b89d6a] transition-colors">
                  {faq.q}
                  <span className="text-[#b89d6a]/40 ml-4 shrink-0 group-open:rotate-45 transition-transform text-[16px]">+</span>
                </summary>
                <p className="pb-6 text-[13px] text-gray-400 leading-[1.9]">{faq.a}</p>
              </motion.details>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            className="mt-14 text-center">
            <p className="text-[14px] text-gray-400 mb-6">더 궁금한 점이 있으신가요?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:010-7930-1332" className="btn-gold">
                <span>전화 문의</span><Arr />
              </a>
              <Link href="/" className="btn-dark-outline">
                <span>홈으로 돌아가기</span><Arr />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
