import Link from 'next/link';
import {
  IconBuilding, IconCamera, IconChart, IconChat,
  IconClipboard, IconDocument, IconMic, IconMusic, IconSparkle, IconUsers,
} from '@/components/icons';
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
                  <span className="w-[76px] h-[76px] md:w-[84px] md:h-[84px] rounded-full bg-mist flex items-center justify-center text-ink/70 group-hover:bg-brand-light group-hover:text-brand-deep transition-colors">
                    <Icon className="w-8 h-8" />
                  </span>
                  <span className="text-[14px] font-bold text-ink break-keep">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
