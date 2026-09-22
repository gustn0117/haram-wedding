import Link from 'next/link';
import Hatch from '@/components/Hatch';
import { IconArrowUpRight, IconCamera, IconClipboard, IconMic, IconSparkle } from '@/components/icons';

const SERVICES = [
  { href: '/concierge', name: '예식도우미', desc: '하객 안내와 신부대기실', Icon: IconSparkle },
  { href: '/concierge', name: '예식 컨시어지', desc: '예식장 현장 운영 전담', Icon: IconClipboard },
  { href: '/photobooth', name: '웨딩 포토부스', desc: '맞춤 프레임, 즉석 인화', Icon: IconCamera },
  { href: '/host', name: '예식사회자', desc: '사전 미팅부터 본식 진행', Icon: IconMic },
];

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)_minmax(0,1fr)] lg:min-h-[640px]">
        <Hatch label="신부대기실 디테일" size="600×900" className="hidden lg:block" />

        <div className="px-6 py-24 md:py-28 lg:py-32 text-center flex flex-col items-center justify-center">
          <h2 className="text-[28px] md:text-[40px] font-light leading-[1.4] tracking-[-0.03em] text-ink break-keep">
            필요한 서비스만 골라도,<br />
            <span className="font-bold">현장은 한 팀이 맡습니다</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.75] text-ink/60 max-w-[34em] break-keep">
            따로 신청해도, 함께 신청해도 같은 팀이 예식 당일을 운영합니다.
            업체마다 따로 설명하고 조율할 필요가 없습니다.
          </p>

          <ul className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 border-t border-l border-line">
            {SERVICES.map(({ href, name, desc, Icon }) => (
              <li key={name} className="border-r border-b border-line">
                <Link href={href}
                  className="group relative flex flex-col items-start text-left h-full p-5 md:p-6 hover:bg-mist transition-colors">
                  <Icon className="w-7 h-7 text-gold-deep" />
                  <span className="mt-5 text-[16px] md:text-[17px] font-bold text-ink">{name}</span>
                  <span className="mt-1 text-[13px] leading-[1.5] text-ink/50 break-keep">{desc}</span>
                  <IconArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-ink/25 group-hover:text-ink transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Hatch label="포토부스 프레임 디테일" size="600×900" className="hidden lg:block" />
      </div>
    </section>
  );
}
