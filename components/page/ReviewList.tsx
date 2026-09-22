'use client';

import { useState } from 'react';
import { REVIEWS, type Review } from '@/lib/reviews';

const FILTERS: ('전체' | Review['service'])[] = ['전체', '예식 컨시어지', '웨딩 포토부스', '예식사회자', '통합'];

export default function ReviewList() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('전체');
  const list = filter === '전체' ? REVIEWS : REVIEWS.filter((r) => r.service === filter);

  return (
    <section className="bg-mist">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div role="tablist" aria-label="서비스별 후기" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f === '전체' ? REVIEWS.length : REVIEWS.filter((r) => r.service === f).length;
            const active = f === filter;
            return (
              <button key={f} type="button" role="tab" aria-selected={active} onClick={() => setFilter(f)}
                className={`h-10 px-4 rounded-full text-[14px] font-semibold transition-colors ${
                  active ? 'bg-ink text-white' : 'bg-white text-ink/65 border border-line hover:text-ink hover:border-ink/30'
                }`}>
                {f} <span className={`ml-1 tabular-nums ${active ? 'text-white/60' : 'text-ink/35'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {list.map((r) => (
            <li key={r.author + r.text.slice(0, 12)} className="break-inside-avoid mb-4 bg-white rounded-2xl p-6 md:p-7 border border-line">
              <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-full ${
                r.venue ? 'bg-ink text-white' : 'bg-mist text-gold-deep'
              }`}>
                {r.venue ? '제휴 예식장' : r.service}
              </span>
              <p className="mt-4 text-[15px] leading-[1.8] text-ink/80 break-keep">{r.text}</p>
              <p className="mt-5 pt-4 border-t border-line text-[14px]">
                <span className="font-bold text-ink">{r.author}</span>
                <span className="ml-2 text-ink/45">{r.meta}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
