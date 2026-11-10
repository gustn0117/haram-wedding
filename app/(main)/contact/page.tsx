'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { EMAIL } from '@/lib/nav';
import { SERVICES_FAQ } from '@/lib/faq';

const CONTACT_FAQ = SERVICES_FAQ.slice(0, 4);

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

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
        setForm({ name: '', phone: '', service: '', date: '', email: '', message: '' });
      } else {
        alert('문의 접수에 실패했습니다. 전화로 문의해주세요.');
      }
    } catch {
      alert('문의 접수에 실패했습니다. 전화로 문의해주세요.');
    }
    setSubmitting(false);
  };

  const inputClass = 'w-full px-5 py-4 bg-mist border border-line text-[15px] focus:outline-none focus:border-brand-deep transition-colors focus:bg-white';

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-ink hero-corner-ornament">
        <div className="absolute inset-0">
          <Image src="/images/editorial-2026/details.webp"
            alt="자연광 아래 놓인 웨딩 링과 예식 준비 소품" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/15" />
        </div>
        <div className="hero-pattern" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}
            className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-deep/50" />
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
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-line overflow-hidden bg-white">
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
              label: '이메일', value: EMAIL, sub: '전화 문의 권장',
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
              className={`text-center py-12 px-6 hover:bg-mist transition-colors group ${i < 2 ? 'md:border-r border-b md:border-b-0 border-line' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-mist group-hover:bg-brand-light flex items-center justify-center mx-auto mb-4 transition-colors text-ink/40 group-hover:text-brand-deep">
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
      <section className="py-20 md:py-28 px-6 bg-mist relative bg-noise">
        <div className="max-w-xl mx-auto relative z-10">
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
            onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-line card-inner-glow">

            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-brand-deep/50" />
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
                  <option value="concierge">예식 컨시어지 (예식도우미)</option>
                  <option value="host">예식사회자</option>
                  <option value="vocal">축가</option>
                  <option value="photobooth">웨딩 포토부스</option>
                  <option value="marketing">웨딩홀 마케팅</option>
                  <option value="program">예식 관리 프로그램</option>
                  <option value="package">여러 서비스 함께</option>
                  <option value="partnership">예식장 제휴</option>
                  <option value="careers">채용 지원</option>
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

            <button type="submit" disabled={submitting} className="btn-gold w-full justify-center disabled:opacity-50">
              <span>{submitting ? '접수 중...' : '메시지 보내기'}</span>{!submitting && <Arr />}
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-6">
              입력하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </motion.form>
        </div>
      </section>

      {/* 상담 안내 */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="site-heading text-[24px] md:text-[32px] text-ink text-center">상담은 이렇게 진행됩니다</h2>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '문의 접수', desc: '아래 양식이나 전화로 예식장과 날짜를 알려주세요.' },
              { step: '담당자 연락', desc: '평일 10시부터 18시 사이에 순서대로 연락드립니다.' },
              { step: '구성 제안', desc: '하객 규모와 필요한 서비스에 맞춰 구성을 제안합니다.' },
              { step: '일정 확정', desc: '구성이 정해지면 담당 인력과 일정을 배정합니다.' },
            ].map((item, i) => (
              <li key={item.step} className="border border-line p-6">
                <span className="text-[13px] font-bold text-brand-deep tabular-nums">{i + 1}단계</span>
                <h3 className="mt-2 text-[18px] font-bold text-ink">{item.step}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{item.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-[18px] font-bold text-ink">미리 알려주시면 좋은 것</h3>
              <ul className="mt-4 space-y-2.5">
                {['예식장 이름과 지역', '예식 날짜와 시간', '예상 하객 규모', '필요한 서비스 (컨시어지·사회·축가·포토부스)'].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-[1.7] text-ink/75 break-keep">
                    <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-ink">예식장 담당자시라면</h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-ink/70 break-keep">
                홀 개수와 주말 평균 회차, 현재 인력을 어떻게 채우고 있는지 알려주시면 상담이 빨라집니다.
                제휴는 현장 답사 후 전용 매뉴얼을 설계하는 순서로 진행하며, 1회 체험 운영도 가능합니다.
              </p>
              <Link href="/partnership" className="mt-5 inline-flex items-center h-11 px-5 border border-ink text-[15px] font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                제휴 안내 보기
              </Link>
            </div>
          </div>
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
            {CONTACT_FAQ.map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.05} variants={fade}
                className="group border-b border-gray-100">
                <summary className="cursor-pointer py-6 text-[15px] flex justify-between items-center hover:text-brand-deep transition-colors">
                  {faq.q}
                  <span className="text-ink/40 ml-4 shrink-0 group-open:rotate-45 transition-transform text-[16px]">+</span>
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
