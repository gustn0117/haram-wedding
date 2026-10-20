import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/page/PageHero';
import { IconArrowUpRight } from '@/components/icons';
import type { Service } from '@/lib/services';
import { type Site, siteUrl } from '@/lib/sites';

/**
 * 본사 사이트의 서비스 요약 페이지.
 * 짧은 소개와 핵심 정보만 두고, 자세한 내용은 전용 사이트로 보낸다.
 */
export default function ServiceTeaser({ site, service }: { site: Site; service: Service }) {
  const href = siteUrl(site);

  return (
    <main>
      <PageHero crumb={service.name} title={service.name} description={service.short} image={service.image} imageSrc={service.heroImageSrc} />

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[24px] md:text-[30px] font-bold leading-[1.35] tracking-[-0.03em] text-ink break-keep">
              {service.quote}
            </p>
            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.85] text-ink/65 break-keep">{service.summary}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {service.facts.slice(0, 4).map((f) => (
                <div key={f.label}>
                  <dt className="text-[13px] text-ink/45">{f.label}</dt>
                  <dd className="mt-1 text-[17px] font-bold text-ink break-keep">{f.value}</dd>
                </div>
              ))}
            </dl>

            <a href={href}
              className="mt-10 inline-flex items-center gap-2 h-[56px] px-7 rounded-full bg-ink text-white text-[16px] font-bold hover:bg-brand-darker transition-colors">
              {site.name} 사이트에서 자세히 보기
              <IconArrowUpRight className="w-5 h-5" />
            </a>
            <p className="mt-3 text-[13px] text-ink/45">{site.host}</p>
          </div>

          <div className="relative aspect-[4/3]  overflow-hidden bg-mist">
            <Image src={service.imageSrc} alt={service.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16 flex flex-col md:flex-row md:items-center gap-6">
          <p className="flex-1 text-[16px] md:text-[18px] leading-[1.7] text-ink/70 break-keep">
            다른 서비스와 함께 이용하면 같은 팀이 현장 전체를 맡습니다.
          </p>
          <Link href="/services" className="inline-flex items-center h-12 px-6 rounded-full border border-ink text-[15px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors">
            하람 전체 서비스 보기
          </Link>
        </div>
      </section>
    </main>
  );
}
