'use client';

import { useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';

type Status = 'idle' | 'sending' | 'done' | 'error';

/** 서브도메인 사이트 문의 양식 — service 값으로 어느 사이트에서 왔는지 구분한다 */
export default function SiteContactForm({ service, serviceLabel }: { service: string; serviceLabel: string }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setForm({ name: '', phone: '', date: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full h-[52px] px-4 bg-[var(--site-bg)] border border-[var(--site-line)] text-[15px] outline-none focus:border-[var(--site-accent)] transition-colors';

  if (status === 'done') {
    return (
      <div className="border border-[var(--site-line)] bg-[var(--site-bg)] p-8 text-center">
        <p className="text-[18px] font-bold">문의가 접수되었습니다</p>
        <p className="mt-2 text-[15px] text-[var(--site-muted)] break-keep">
          평일 10:00–18:00에 순서대로 연락드립니다. 급하시면 {PHONE_DISPLAY}로 전화 주세요.
        </p>
        <button type="button" onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center h-11 px-5 border border-[var(--site-line)] text-[14px] font-bold">
          문의 하나 더 남기기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-[var(--site-line)] bg-[var(--site-surface)] p-6 md:p-8">
      <p className="text-[14px] text-[var(--site-muted)]">
        문의 분야 <span className="font-semibold text-[var(--site-ink)]">{serviceLabel}</span>
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-[14px] font-medium mb-2">이름 <span className="text-[var(--site-accent)]">*</span></span>
          <input name="name" value={form.name} onChange={change} required className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className="block text-[14px] font-medium mb-2">연락처 <span className="text-[var(--site-accent)]">*</span></span>
          <input name="phone" value={form.phone} onChange={change} required className={field} inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" />
        </label>
        <label className="block">
          <span className="block text-[14px] font-medium mb-2">예식 예정일</span>
          <input type="date" name="date" value={form.date} onChange={change} className={field} />
        </label>
        <label className="block">
          <span className="block text-[14px] font-medium mb-2">이메일</span>
          <input type="email" name="email" value={form.email} onChange={change} className={field} autoComplete="email" />
        </label>
      </div>

      <label className="block mt-4">
        <span className="block text-[14px] font-medium mb-2">문의 내용 <span className="text-[var(--site-accent)]">*</span></span>
        <textarea name="message" value={form.message} onChange={change} required rows={5}
          placeholder="예식장 이름과 하객 규모를 함께 알려주시면 더 정확히 안내해 드립니다."
          className="w-full p-4 bg-[var(--site-bg)] border border-[var(--site-line)] text-[15px] leading-[1.7] outline-none focus:border-[var(--site-accent)] transition-colors resize-y" />
      </label>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-[14px] text-[var(--site-accent)]">
          접수에 실패했습니다. 다시 시도하시거나 {PHONE_DISPLAY}로 전화 주세요.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" disabled={status === 'sending'}
          className="inline-flex items-center h-[52px] px-7 bg-[var(--site-accent)] text-[var(--site-accent-ink)] text-[15px] font-bold disabled:opacity-60 hover:opacity-90 transition-opacity">
          {status === 'sending' ? '보내는 중…' : '문의 보내기'}
        </button>
        <a href={PHONE_TEL} className="inline-flex items-center h-[52px] px-7 border border-[var(--site-line)] text-[15px] font-bold tabular-nums">
          전화 {PHONE_DISPLAY}
        </a>
      </div>
    </form>
  );
}
