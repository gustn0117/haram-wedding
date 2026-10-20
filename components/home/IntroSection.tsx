import Link from 'next/link';
import Image from 'next/image';
import {
  IconArrowUpRight, IconBuilding, IconCamera, IconChart, IconChat,
  IconClipboard, IconDocument, IconMic, IconMusic, IconSparkle, IconUsers,
} from '@/components/icons';
import { INSIGHTS } from '@/lib/insights';
import { CONTACT_HREF } from '@/lib/nav';
import { SERVICES, type ServiceSlug } from '@/lib/services';

const SERVICE_ICONS: Record<ServiceSlug, typeof IconSparkle> = {
  concierge: IconSparkle,
  host: IconMic,
  vocal: IconMusic,
  photobooth: IconCamera,
  marketing: IconChart,
  program: IconClipboard,
};

const SHORTCUTS = [
  ...SERVICES.map((s) => ({ href: s.path, label: s.name, Icon: SERVICE_ICONS[s.slug] })),
  { href: '/partnership', label: '예식장 제휴', Icon: IconBuilding },
  { href: '/careers', label: '인재 채용', Icon: IconUsers },
  { href: '/faq', label: '자주 묻는 질문', Icon: IconChat },
  { href: CONTACT_HREF, label: '상담 문의', Icon: IconDocument },
];

export default function IntroSection() {
  const [lead, ...rest] = INSIGHTS;

  return (
    <>
      {/* 미션 */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-14 md:pt-28 md:pb-16 text-center">
          <h2 className="site-heading text-[26px] md:text-[38px] text-ink break-keep">
            예식의 인상은 공간이 아니라, 흐름에서 결정됩니다.
          </h2>
          <p className="mt-6 inline-block eyebrow-blue">HARAM WEDDING CONCIERGE</p>
          <p className="mt-6 mx-auto max-w-[44em] text-[16px] md:text-[17px] leading-[1.9] text-ink/60 break-keep">
            하람은 단순한 인력 파견 업체가 아닙니다. 예식장의 운영 구조를 분석하고 동선과 응대 방식을 정리해,
            모든 예식이 같은 품질로 진행되도록 돕는 전문 컨시어지 파트너입니다.
          </p>
        </div>
      </section>

      {/* 원형 아이콘 바로가기 */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 pb-20 md:pb-28">
          <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-y-8 gap-x-2">
            {SHORTCUTS.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link href={href} className="group flex flex-col items-center gap-3 text-center">
                  <span className="w-[76px] h-[76px] md:w-[84px] md:h-[84px] rounded-full bg-mist flex items-center justify-center text-ink/70 group-hover:bg-navy-light group-hover:text-navy transition-colors">
                    <Icon className="w-8 h-8" />
                  </span>
                  <span className="text-[14px] font-bold text-ink break-keep">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 소식 */}
      <section className="bg-mist">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="site-heading text-[24px] md:text-[32px] text-ink">예식 현장의 이야기를 전합니다.</h2>
            <Link href="/insights" className="hidden sm:inline-flex items-center gap-2 text-[15px] font-bold text-ink hover:text-navy transition-colors">
              자세히보기
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                <path d="M4 12h15m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.25fr_1fr] gap-4">
            <Link href={`/insights/${lead.slug}`} className="group block bg-white">
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Image src={lead.image} alt={lead.imageAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </span>
              <span className="block p-6 md:p-8">
                <span className="text-[13px] font-bold text-navy">{lead.audience}</span>
                <span className="mt-2 block text-[20px] md:text-[24px] font-extrabold tracking-[-0.03em] text-ink leading-[1.35] break-keep">
                  {lead.title}
                </span>
                <span className="mt-3 block text-[15px] leading-[1.7] text-ink/60 break-keep">{lead.summary}</span>
                <time dateTime={lead.published} className="mt-5 block text-[13px] text-ink/40 tabular-nums">
                  {lead.published.replace(/-/g, '.')}
                </time>
              </span>
            </Link>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link href={`/insights/${post.slug}`} className="group flex flex-col justify-between h-full bg-white p-6 md:p-7 hover:bg-navy-light transition-colors">
                    <span>
                      <span className="text-[13px] font-bold text-navy">{post.audience}</span>
                      <span className="mt-2 flex items-start justify-between gap-4">
                        <span className="text-[18px] font-extrabold tracking-[-0.02em] text-ink leading-[1.4] break-keep">{post.title}</span>
                        <IconArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-ink/25 group-hover:text-navy transition-colors" />
                      </span>
                    </span>
                    <time dateTime={post.published} className="mt-6 block text-[13px] text-ink/40 tabular-nums">
                      {post.published.replace(/-/g, '.')}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/insights" className="sm:hidden mt-8 flex items-center justify-center h-12 bg-white text-[15px] font-bold text-ink">
            칼럼 전체 보기
          </Link>
        </div>
      </section>
    </>
  );
}
