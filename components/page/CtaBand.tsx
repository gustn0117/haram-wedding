import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';

type Props = { title: string; description: string; href: string; label: string };

export default function CtaBand({ title, description, href, label }: Props) {
  return (
    <section className="bg-brand-deep text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div className="flex-1">
          <h2 className="site-heading text-[22px] md:text-[30px] break-keep">{title}</h2>
          <p className="mt-3 text-[15px] md:text-[16px] text-white/70 break-keep">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link href={href} className="inline-flex items-center h-[52px] px-7 bg-white text-brand-deep text-[15px] font-bold hover:bg-brand-deep hover:text-white transition-colors">
            {label}
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center h-[52px] px-7 border border-white/40 text-[15px] font-bold tabular-nums hover:bg-white/10 transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
