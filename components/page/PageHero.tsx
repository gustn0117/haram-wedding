import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  crumb: string;
  image: string;
  imageSrc: string;
};

/** 서브페이지 상단 — 좁은 이미지 띠 + 그 아래 breadcrumb·제목·가로선 */
export default function PageHero({ title, description, crumb, image, imageSrc }: Props) {
  return (
    <>
      <div className="relative h-[180px] md:h-[260px] bg-ink">
        <Image src={imageSrc} alt={image} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <nav aria-label="현재 위치" className="flex items-center gap-2 pt-7 text-[13px] text-ink/50">
          <Link href="/" aria-label="홈" className="hover:text-ink transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
              <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span aria-hidden className="text-ink/25">›</span>
          <span className="text-ink/70">{crumb}</span>
        </nav>

        <h1 className="site-heading mt-6 text-[30px] md:text-[42px] text-ink break-keep">{title}</h1>
        <p className="mt-4 text-[16px] md:text-[17px] leading-[1.75] text-ink/60 break-keep max-w-[46em]">{description}</p>
        <div className="mt-8 border-t-2 border-ink" />
      </div>
    </>
  );
}
