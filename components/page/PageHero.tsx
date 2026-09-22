import Link from 'next/link';
import Hatch from '@/components/Hatch';

type Props = {
  title: string;
  description: string;
  crumb: string;
  image: string;
  imageSrc: string;
};

/** 서브페이지 상단 — 헤더 높이만큼 비우고 제목을 아래쪽에 둔다 */
export default function PageHero({ title, description, crumb, image, imageSrc }: Props) {
  return (
    <section className="relative bg-ink text-white pt-16 md:pt-[112px]">
      <Hatch label={image} src={imageSrc} className="absolute inset-0" priority />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,22,0.8)_0%,rgba(20,20,22,0.35)_100%)]" />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-14 md:pt-28 md:pb-16">
        <nav aria-label="현재 위치" className="text-[13px] text-white/50">
          <Link href="/" className="hover:text-white transition-colors">홈</Link>
          <span className="mx-2 text-white/25">/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <h1 className="mt-4 text-[34px] md:text-[48px] font-bold tracking-[-0.035em] leading-[1.2] break-keep">{title}</h1>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[1.7] text-white/70 max-w-[34em] break-keep">{description}</p>
      </div>
    </section>
  );
}
