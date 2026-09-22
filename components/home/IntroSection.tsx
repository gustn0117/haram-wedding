import Link from 'next/link';
import Hatch from '@/components/Hatch';
import { IconArrowUpRight, IconCamera, IconChart, IconClipboard, IconMic, IconMusic, IconSparkle } from '@/components/icons';
import { SERVICES, type ServiceSlug } from '@/lib/services';

const ICONS: Record<ServiceSlug, typeof IconSparkle> = {
  concierge: IconSparkle,
  host: IconMic,
  vocal: IconMusic,
  photobooth: IconCamera,
  marketing: IconChart,
  program: IconClipboard,
};

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)_minmax(0,1fr)] lg:min-h-[640px]">
        <Hatch
          label="플라워 장식이 놓인 웨딩홀 입구"
          src="/images/editorial-2026/intro-vertical.png"
          className="hidden lg:block"
        />

        <div className="px-6 py-24 md:py-28 lg:py-32 text-center flex flex-col items-center justify-center">
          <h2 className="text-[28px] md:text-[40px] font-light leading-[1.4] tracking-[-0.03em] text-ink break-keep">
            예식 현장부터 예식장 운영까지,<br />
            <span className="font-bold">한 파트너가 맡습니다</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.75] text-ink/60 max-w-[34em] break-keep">
            하람은 단순한 인력 파견 업체가 아닙니다. 예식장의 운영 구조를 분석하고
            동선과 응대 방식을 정리해, 모든 예식이 같은 품질로 진행되도록 돕습니다.
          </p>

          <ul className="mt-12 w-full grid grid-cols-2 md:grid-cols-3 border-t border-l border-line">
            {SERVICES.map(({ slug, path, name, short }) => {
              const Icon = ICONS[slug];
              return (
              <li key={slug} className="border-r border-b border-line">
                <Link href={path}
                  className="group relative flex flex-col items-start text-left h-full p-5 md:p-6 hover:bg-mist transition-colors">
                  <Icon className="w-7 h-7 text-gold-deep" />
                  <span className="mt-5 text-[16px] md:text-[17px] font-bold text-ink">{name}</span>
                  <span className="mt-1 text-[13px] leading-[1.5] text-ink/50 break-keep">{short}</span>
                  <IconArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-ink/25 group-hover:text-ink transition-colors" />
                </Link>
              </li>
              );
            })}
          </ul>
        </div>

        <Hatch
          label="웨딩 포토부스와 인화 사진"
          src="/images/editorial-2026/photobooth.png"
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
