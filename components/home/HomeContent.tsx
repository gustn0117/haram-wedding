import Link from 'next/link';
import Image from 'next/image';
import { IconArrowUpRight } from '@/components/icons';
import { HOME_FAQ } from '@/lib/faq';
import { CONTACT_HREF, PHONE_DISPLAY, PHONE_TEL } from '@/lib/nav';
import { SERVICE_AREAS } from '@/lib/seo';
import { SERVICES } from '@/lib/services';

/** 홈 본문 — 서비스 설명, 운영 지역, 자주 묻는 질문 */
export default function HomeContent() {
  return (
    <>
      {/* 서비스 */}
      <section className="bg-mist">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="site-heading text-[24px] md:text-[32px] text-ink break-keep">
                예식에 필요한 여섯 가지를 직접 운영합니다
              </h2>
              <p className="mt-3 text-[16px] leading-[1.75] text-ink/60 break-keep max-w-[44em]">
                인력과 진행, 장비, 홍보까지 한 팀이 맡습니다. 필요한 서비스만 골라 신청할 수 있습니다.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[15px] font-bold text-ink hover:text-brand-deep transition-colors">
              서비스 전체 보기
              <IconArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className="group flex flex-col h-full bg-white border border-line hover:border-ink/30 transition-colors overflow-hidden">
                  <span className="relative block aspect-[16/10]">
                    <Image src={s.imageSrc} alt={s.image} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                  </span>
                  <span className="flex-1 p-6">
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-[19px] font-extrabold tracking-[-0.02em] text-ink">{s.name}</span>
                      {s.audience === '예식장' && (
                        <span className="shrink-0 text-[11px] font-bold text-brand-deep border border-brand/60 px-1.5 py-0.5">예식장</span>
                      )}
                    </span>
                    <span className="mt-2 block text-[15px] leading-[1.65] text-ink/60 break-keep">{s.short}</span>
                    <span className="mt-4 block text-[14px] leading-[1.7] text-ink/50 break-keep">{s.summary.split('.')[0]}.</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 운영 지역 */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="site-heading text-[24px] md:text-[32px] text-ink break-keep">
              수원에서 시작해 전국 예식장에서 운영합니다
            </h2>
            <p className="mt-4 text-[16px] md:text-[17px] leading-[1.85] text-ink/65 break-keep">
              경기도 수원시 영통구에 기반을 두고 서울과 경기 전역을 상시 운영하며, 대전과 부산에서도 제휴 예식장을 맡고 있습니다.
              목록에 없는 지역도 예식장 위치를 알려주시면 진행 가능 여부를 안내해 드립니다.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="h-9 px-3.5 bg-mist border border-line flex items-center text-[14px] font-medium text-ink">
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Link href={CONTACT_HREF} className="inline-flex items-center h-[50px] px-7 bg-brand-deep text-white text-[15px] font-bold hover:bg-brand-darker transition-colors">
                상담 문의
              </Link>
              <a href={PHONE_TEL} className="inline-flex items-center h-[50px] px-7 border border-line text-[15px] font-bold text-ink tabular-nums hover:border-ink transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image src="/images/editorial-2026/concierge-desk.webp" alt="예식장 안내 데스크와 운영 체크리스트"
              fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="bg-mist">
        <div className="max-w-[880px] mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="site-heading text-[24px] md:text-[32px] text-ink">자주 묻는 질문</h2>
            <Link href="/faq" className="inline-flex items-center gap-2 text-[15px] font-bold text-ink hover:text-brand-deep transition-colors">
              전체 보기
              <IconArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 border-t border-ink">
            {HOME_FAQ.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-line flex items-center justify-center text-ink/50 group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="pb-6 pr-10 text-[15px] leading-[1.8] text-ink/65 break-keep">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
