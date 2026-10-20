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
    <section className="relative bg-[#1a1a1a] text-white">
      <div className="relative h-[min(72vh,620px)] min-h-[440px] overflow-hidden">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,18,0.84)_0%,rgba(12,14,18,0.45)_58%,rgba(12,14,18,0.15)_100%)]" />

        <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center pb-20 md:pb-24">
          <p className="text-[14px] md:text-[15px] font-bold text-white/85">{eyebrow}</p>
          <h1 className="site-heading mt-4 text-[32px] sm:text-[42px] lg:text-[52px] break-keep max-w-[20em]">{title}</h1>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.8] text-white/75 break-keep max-w-[34em]">{body}</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link href={primary.href}
              className="inline-flex items-center h-[50px] px-7 bg-[var(--site-accent)] text-[var(--site-accent-ink)] text-[15px] font-bold hover:opacity-90 transition-opacity">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href}
                className="inline-flex items-center h-[50px] px-7 border border-white/50 text-[15px] font-bold hover:bg-white hover:text-[var(--site-ink)] transition-colors">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Band({ facts }: { facts: Service['facts'] }) {
  return (
    <section className="bg-[var(--site-bg)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative -mt-12 md:-mt-16 bg-[var(--site-bg)] shadow-[0_10px_40px_rgba(16,24,40,0.10)] px-6 md:px-10 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 divide-[var(--site-line)]">
        {facts.map((f) => (
          <div key={f.label}>
            <p className="text-[13px] text-[var(--site-muted)]">{f.label}</p>
            <p className="mt-2 text-[19px] md:text-[21px] font-bold tracking-[-0.02em] break-keep">{f.value}</p>
            <p className="mt-1 text-[13px] text-[var(--site-muted)] break-keep">{f.note}</p>
          </div>
        ))}
        </div>
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
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
        <h2 className="site-heading text-[24px] md:text-[32px] break-keep">{title}</h2>
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
        <li key={s.when} className="border border-[var(--site-line)] p-6 bg-[var(--site-bg)]">
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
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h2 className="text-[24px] md:text-[32px] font-bold tracking-[-0.03em] leading-[1.35] break-keep">{title}</h2>
          <p className="mt-3 text-[16px] opacity-85 break-keep">{body}</p>
        </div>
        <Link href="/contact"
          className="inline-flex items-center justify-center h-[56px] px-8 bg-white text-[var(--site-ink)] text-[16px] font-bold hover:opacity-90 transition-opacity">
          문의 남기기
        </Link>
      </div>
    </section>
  );
}
