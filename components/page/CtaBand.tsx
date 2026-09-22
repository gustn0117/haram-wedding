import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';

type Props = { title: string; description: string; href: string; label: string };

export default function CtaBand({ title, description, href, label }: Props) {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div className="flex-1">
          <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] leading-[1.35] break-keep">{title}</h2>
          <p className="mt-3 text-[15px] md:text-[16px] text-white/60 break-keep">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={href} className="inline-flex items-center h-[52px] px-7 rounded-full bg-gold-light text-ink text-[15px] font-bold hover:bg-white transition-colors">
            {label}
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center h-[52px] px-7 rounded-full border border-white/30 text-[15px] font-semibold tabular-nums hover:border-white transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
