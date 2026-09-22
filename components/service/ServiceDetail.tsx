import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';
import { REVIEWS, type Review } from '@/lib/reviews';
import { SERVICES, type Service } from '@/lib/services';
import type { FaqItem } from '@/lib/faq';

const REVIEW_KEY: Partial<Record<Service['slug'], Review['service']>> = {
  concierge: '예식 컨시어지',
  host: '예식사회자',
  photobooth: '웨딩 포토부스',
};

const STATE_STYLE = {
  완료: 'border border-gold text-gold-deep',
  진행: 'bg-ink text-white',
  대기: 'border border-line text-ink/45',
};

function Wrap({ children, tone = 'white' }: { children: React.ReactNode; tone?: 'white' | 'mist' }) {
  return (
    <section className={tone === 'mist' ? 'bg-mist' : 'bg-white'}>
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}

function H2({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 mb-8 md:mb-10">
      <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] text-ink">{children}</h2>
      {note && <p className="text-[14px] text-ink/45">{note}</p>}
    </div>
  );
}

/** 서비스별 고유 블록 */
function Signature({ s }: { s: Service }) {
  if (s.pipeline) {
    return (
      <Wrap tone="mist">
        <H2 note="자체 교육 과정 이수자만 현장에 투입합니다">인력 제공부터 배치까지</H2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.pipeline.map((p, i) => (
            <li key={p.title} className="relative bg-white rounded-2xl border border-line p-6">
              <span className="text-[13px] font-bold text-gold-deep tabular-nums">{i + 1}단계</span>
              <h3 className="mt-2 text-[19px] font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    );
  }

  if (s.metrics) {
    const m = s.metrics;
    return (
      <Wrap tone="mist">
        <H2 note={m.note}>{m.title}</H2>
        <table className="w-full max-w-[880px] text-[15px]">
          <caption className="sr-only">{`${m.title} (${m.note})`}</caption>
          <thead className="sr-only">
            <tr><th scope="col">항목</th><th scope="col">값</th></tr>
          </thead>
          <tbody>
            {m.rows.map((r) => (
              <tr key={r.label} className="group" title={`${r.label} ${r.value}${m.unit}`}>
                <th scope="row" className="w-[132px] md:w-[168px] py-2.5 pr-4 text-left font-medium text-ink/75 whitespace-nowrap">{r.label}</th>
                <td className="py-2.5">
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 h-3 rounded-full bg-white">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-ink group-hover:bg-gold-deep transition-colors"
                        style={{ width: `${(r.value / m.max) * 100}%` }} />
                    </div>
                    <span className="w-14 text-right font-bold text-ink tabular-nums">
                      {r.value}<span className="ml-0.5 text-[12px] font-medium text-ink/45">{m.unit}</span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrap>
    );
  }

  if (s.options) {
    return (
      <Wrap tone="mist">
        <H2 note="예식장 사정에 맞게 고를 수 있습니다">운영 방식</H2>
        <ul className="grid md:grid-cols-3 gap-4">
          {s.options.map((o) => (
            <li key={o.name} className="bg-white rounded-2xl border border-line p-6">
              <h3 className="text-[18px] font-bold text-ink break-keep">{o.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{o.desc}</p>
            </li>
          ))}
        </ul>
      </Wrap>
    );
  }

  if (s.funnel) {
    return (
      <Wrap tone="mist">
        <H2 note="월 단위로 상시 운영합니다">단계별 운영 범위</H2>
        <ol className="space-y-2 max-w-[880px]">
          {s.funnel.map((f, i) => (
            <li key={f.stage} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
              <span
                className={`shrink-0 h-11 flex items-center px-4 rounded-lg text-[15px] font-semibold ${i === s.funnel!.length - 1 ? 'bg-gold text-white' : 'bg-ink text-white'}`}
                style={{ width: `min(100%, ${100 - i * 12}%)`, maxWidth: `${340 - i * 44}px`, minWidth: '140px' }}>
                {f.stage}
              </span>
              <span className="text-[15px] text-ink/65 break-keep">{f.work}</span>
            </li>
          ))}
        </ol>
      </Wrap>
    );
  }

  if (s.ledger) {
    return (
      <Wrap tone="mist">
        <H2 note="주말 하루, 홀 2개 예시 화면">회차 통합 현황</H2>
        <div className="max-w-[880px] bg-white rounded-2xl border border-line overflow-hidden">
          <table className="w-full text-[15px]">
            <thead className="bg-mist/60 text-[13px] text-ink/50">
              <tr>
                <th scope="col" className="text-left font-medium px-5 py-3">시간</th>
                <th scope="col" className="text-left font-medium px-5 py-3">홀</th>
                <th scope="col" className="text-left font-medium px-5 py-3">담당</th>
                <th scope="col" className="text-right font-medium px-5 py-3">상태</th>
              </tr>
            </thead>
            <tbody>
              {s.ledger.map((l) => (
                <tr key={l.time + l.hall} className="border-t border-line">
                  <td className="px-5 py-3.5 font-semibold text-ink tabular-nums">{l.time}</td>
                  <td className="px-5 py-3.5 text-ink/75">{l.hall}</td>
                  <td className="px-5 py-3.5 text-ink/75">{l.staff}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-md ${STATE_STYLE[l.state]}`}>{l.state}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrap>
    );
  }

  return null;
}

export default function ServiceDetail({ service: s, faq }: { service: Service; faq?: FaqItem[] }) {
  const reviewKey = REVIEW_KEY[s.slug];
  const reviews = reviewKey ? REVIEWS.filter((r) => r.service === reviewKey).slice(0, 3) : [];
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <PageHero
        crumb={s.name}
        title={s.name}
        description={s.short}
        image={s.image}
        imageSrc={s.heroImageSrc}
      />

      {/* 소개 + 핵심 정보 */}
      <Wrap>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          <div>
            <span className="inline-block text-[13px] font-semibold text-gold-deep bg-mist rounded-full px-3 py-1">
              {s.audience === '예식장' ? '예식장 전용' : '신랑신부 · 예식장'}
            </span>
            <p className="mt-6 text-[26px] md:text-[32px] font-bold leading-[1.35] tracking-[-0.03em] text-ink break-keep">
              {s.quote}
            </p>
            <p className="mt-6 text-[16px] md:text-[17px] leading-[1.85] text-ink/65 break-keep">{s.summary}</p>
          </div>
          <Hatch label={s.image} src={s.imageSrc} className="aspect-[4/3] rounded-2xl" />
        </div>

        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y-2 border-ink">
          {s.facts.map((f, i) => (
            <div key={f.label} className={`py-6 px-1 md:px-6 ${i % 2 === 1 ? 'pl-5 md:pl-6 border-l border-line' : ''} ${i >= 2 ? 'border-t lg:border-t-0 border-line' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
              <dt className="text-[13px] text-ink/45">{f.label}</dt>
              <dd className="mt-2 text-[19px] md:text-[22px] font-bold tracking-[-0.02em] text-ink break-keep">{f.value}</dd>
              <dd className="mt-1 text-[13px] text-ink/50 break-keep">{f.note}</dd>
            </div>
          ))}
        </dl>
      </Wrap>

      <Signature s={s} />

      {/* 포함 사항 + 운영 흐름 */}
      <Wrap>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <H2>포함 사항</H2>
            <ul className="border-t border-ink">
              {s.included.map((item) => (
                <li key={item} className="flex gap-3 py-4 border-b border-line text-[16px] text-ink/80 break-keep">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-gold-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <H2>운영 흐름</H2>
            <ol className="relative border-l-2 border-line ml-1.5">
              {s.flow.map((f) => (
                <li key={f.when} className="relative pl-7 pb-7 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gold" />
                  <p className="text-[14px] font-bold text-gold-deep tabular-nums">{f.when}</p>
                  <p className="mt-1 text-[16px] text-ink/80 break-keep">{f.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Wrap>

      {reviews.length > 0 && (
        <Wrap tone="mist">
          <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] text-ink">이용 후기</h2>
            <Link href="/reviews" className="text-[14px] font-semibold text-ink/60 hover:text-ink underline underline-offset-4">후기 전체 보기</Link>
          </div>
          <ul className="grid md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <li key={r.author + r.text.slice(0, 10)} className="bg-white rounded-2xl border border-line p-6 flex flex-col">
                <p className="text-[15px] leading-[1.8] text-ink/80 break-keep flex-1">{r.text}</p>
                <p className="mt-5 pt-4 border-t border-line text-[14px]">
                  <span className="font-bold text-ink">{r.author}</span>
                  <span className="ml-2 text-ink/45">{r.meta}</span>
                </p>
              </li>
            ))}
          </ul>
        </Wrap>
      )}

      {faq && faq.length > 0 && (
        <Wrap>
          <H2>자주 묻는 질문</H2>
          <div className="border-t border-ink max-w-[880px]">
            {faq.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-line flex items-center justify-center text-ink/50 group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="pb-6 pr-10 text-[15px] leading-[1.8] text-ink/65 break-keep">{f.a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      )}

      {/* 다른 서비스 — 바로 위 섹션과 배경이 겹치지 않게 번갈아 둔다 */}
      <Wrap tone={faq?.length || !reviews.length ? 'mist' : 'white'}>
        <H2>함께 이용하는 서비스</H2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={o.path} className="group relative flex flex-col h-full bg-white rounded-2xl border border-line p-5 hover:border-ink/30 transition-colors">
                <span className="text-[16px] font-bold text-ink pr-6">{o.name}</span>
                <span className="mt-1.5 text-[13px] leading-[1.55] text-ink/50 break-keep">{o.short}</span>
                <IconArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-ink/25 group-hover:text-ink transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>

      <CtaBand
        title={`${s.name} 상담이 필요하신가요?`}
        description={s.audience === '예식장' ? '예식장 규모와 월간 예식 건수를 알려주시면 구성과 조건을 안내해 드립니다.' : '예식장과 날짜를 알려주시면 진행 가능 여부와 구성을 안내해 드립니다.'}
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
