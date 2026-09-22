import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { ESTIMATE_HREF, PHONE_DISPLAY } from '@/lib/nav';

const SERVICES = [
  { href: '/concierge', name: '예식 컨시어지 · 예식도우미', desc: '예식장과 제휴해 하객 안내, 신부대기실, 식순 진행을 전담합니다.' },
  { href: '/photobooth', name: '웨딩 포토부스', desc: '예식 컨셉에 맞춘 프레임과 즉석 인화로 하객 포토존을 운영합니다.' },
  { href: '/host', name: '예식사회자', desc: '사전 미팅과 리허설로 두 사람만의 식순을 함께 만듭니다.' },
];

const COMPANY = [
  ['상호', '하람'],
  ['대표', '김영진'],
  ['사업자등록번호', '412-21-01283'],
  ['통신판매업', '2025-용인기흥-01511'],
  ['소재지', '경기도 수원시 영통구'],
  ['고객센터', `${PHONE_DISPLAY} (평일 10:00 – 18:00)`],
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="하람소개"
        title="결혼식다운 결혼식을 만듭니다"
        description="결혼식의 완성도는 당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다. 하람은 그 현장을 운영하는 회사입니다."
        image="대표 이미지 · 예식 현장 팀"
      />

      <Section title="하람이 하는 일">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div className="text-[16px] md:text-[17px] leading-[1.85] text-ink/70 break-keep space-y-5">
            <p>
              하람은 결혼식 당일 현장에서 생기는 흐름, 동선, 분위기, 변수를 경험으로 관리합니다.
              예식도우미, 예식 컨시어지, 웨딩 포토부스, 예식사회자를 한 팀으로 운영하기 때문에
              신랑신부와 예식장은 여러 업체를 따로 조율하지 않아도 됩니다.
            </p>
            <p>필요한 서비스만 골라 신청할 수 있고, 함께 신청하면 같은 팀이 예식 전체를 맡습니다.</p>
          </div>
          <Hatch label="현장 운영 장면" size="1200×800" className="aspect-[3/2] rounded-2xl" />
        </div>
      </Section>

      <Section title="서비스" tone="mist">
        <ul className="grid md:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-line hover:border-ink/30 transition-colors">
                <Hatch label={s.name} size="800×600" className="aspect-[4/3]" />
                <span className="p-6 flex-1 flex flex-col">
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-[18px] font-bold text-ink break-keep">{s.name}</span>
                    <IconArrowUpRight className="w-5 h-5 shrink-0 text-ink/30 group-hover:text-ink transition-colors" />
                  </span>
                  <span className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{s.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="회사 정보">
        <dl className="border-t-2 border-ink max-w-[760px]">
          {COMPANY.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] border-b border-line py-4 text-[15px]">
              <dt className="text-ink/50">{k}</dt>
              <dd className="text-ink font-medium tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        title="예식 날짜가 정해졌다면 먼저 상담해 보세요"
        description="예식장, 날짜, 필요한 서비스를 알려주시면 구성과 견적을 안내해 드립니다."
        href={ESTIMATE_HREF}
        label="무료 견적 받기"
      />
    </main>
  );
}
