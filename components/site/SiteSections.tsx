import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '@/lib/services';

export function Hero({
  eyebrow, title, body, image, imageAlt, primary, secondary,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  image: string;
  imageAlt: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative">
      <div className="max-w-[1120px] mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-[14px] font-semibold text-[var(--site-accent)]">{eyebrow}</p>
          <h1 className="mt-4 text-[34px] md:text-[52px] font-bold leading-[1.18] tracking-[-0.035em] break-keep">{title}</h1>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.8] text-[var(--site-muted)] break-keep max-w-[32em]">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={primary.href}
              className="inline-flex items-center h-[52px] px-7 rounded-full bg-[var(--site-accent)] text-[var(--site-accent-ink)] text-[15px] font-bold hover:opacity-90 transition-opacity">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href}
                className="inline-flex items-center h-[52px] px-7 rounded-full border border-[var(--site-line)] text-[15px] font-semibold hover:border-[var(--site-ink)] transition-colors">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-[5/6] rounded-[28px] overflow-hidden bg-[var(--site-surface)]">
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Band({ facts }: { facts: Service['facts'] }) {
  return (
    <section className="bg-[var(--site-surface)]">
      <div className="max-w-[1120px] mx-auto px-6 py-10 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {facts.map((f) => (
          <div key={f.label}>
            <p className="text-[13px] text-[var(--site-muted)]">{f.label}</p>
            <p className="mt-2 text-[19px] md:text-[21px] font-bold tracking-[-0.02em] break-keep">{f.value}</p>
            <p className="mt-1 text-[13px] text-[var(--site-muted)] break-keep">{f.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Section({
  id, title, lead, children, tone = 'bg',
}: {
  id?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  tone?: 'bg' | 'surface';
}) {
  return (
    <section id={id} className={tone === 'surface' ? 'bg-[var(--site-surface)]' : 'bg-[var(--site-bg)]'}>
      <div className="max-w-[1120px] mx-auto px-6 py-16 md:py-24">
        <h2 className="text-[26px] md:text-[34px] font-bold tracking-[-0.03em] leading-[1.3] break-keep">{title}</h2>
        {lead && <p className="mt-3 text-[16px] leading-[1.75] text-[var(--site-muted)] break-keep max-w-[42em]">{lead}</p>}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-10">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-4 border-b border-[var(--site-line)] text-[16px] break-keep">
          <svg className="w-5 h-5 mt-0.5 shrink-0 text-[var(--site-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Flow({ steps }: { steps: Service['flow'] }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <li key={s.when} className="rounded-2xl border border-[var(--site-line)] p-6 bg-[var(--site-bg)]">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--site-accent-soft)] text-[var(--site-accent)] text-[14px] font-bold tabular-nums">
            {i + 1}
          </span>
          <p className="mt-4 text-[14px] font-bold text-[var(--site-accent)]">{s.when}</p>
          <p className="mt-1.5 text-[16px] leading-[1.6] break-keep">{s.what}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[var(--site-ink)] max-w-[880px]">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-[var(--site-line)]">
          <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="shrink-0 w-6 h-6 rounded-full border border-[var(--site-line)] flex items-center justify-center text-[var(--site-muted)] group-open:rotate-45 transition-transform" aria-hidden>+</span>
          </summary>
          <p className="pb-6 pr-10 text-[15px] leading-[1.8] text-[var(--site-muted)] break-keep">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-[var(--site-accent)] text-[var(--site-accent-ink)]">
      <div className="max-w-[1120px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h2 className="text-[24px] md:text-[32px] font-bold tracking-[-0.03em] leading-[1.35] break-keep">{title}</h2>
          <p className="mt-3 text-[16px] opacity-85 break-keep">{body}</p>
        </div>
        <Link href="/contact"
          className="inline-flex items-center justify-center h-[56px] px-8 rounded-full bg-white text-[var(--site-ink)] text-[16px] font-bold hover:opacity-90 transition-opacity">
          문의 남기기
        </Link>
      </div>
    </section>
  );
}
