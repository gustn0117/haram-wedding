import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { CONTACT_HREF, PHONE_DISPLAY } from '@/lib/nav';
import { SERVICES } from '@/lib/services';

const PILLARS = [
  {
    title: '운영을 시스템으로 다룹니다',
    desc: '경험을 매뉴얼로 만들고, 매뉴얼을 데이터로 관리합니다.',
    points: ['예식장 전용 운영 매뉴얼 자체 발급', '큐 시트, 응대 스크립트, 리스크 매트릭스', '월간 운영 데이터 리뷰와 매뉴얼 업데이트'],
    result: '같은 매뉴얼이면 인력이 바뀌어도 같은 결과',
  },
  {
    title: '흐름의 디테일에 집중합니다',
    desc: '안내 동선과 큐 타이밍을 1초 단위로 설계합니다.',
    points: ['입장, 축가, 퇴장 큐 1초 단위 타이밍', '현장 매니저 1인이 흐름 전체를 조율', '음향, 조명, 사회 큐 동기화'],
    result: '1초 단위 큐 시트와 동선 정합',
  },
  {
    title: '장기적 관점에서 동행합니다',
    desc: '한 번의 행사가 아니라 예식장의 운영 자산을 함께 만듭니다.',
    points: ['최소 3개월 단위 협업 권장', '분기별 운영 리포트와 권고안 회신', '매뉴얼과 운영 자산 예식장 인계'],
    result: '예식장 운영 자산화, 매뉴얼 인계',
  },
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
        title="현장에 흐름을 입히는, 예식장의 운영 파트너"
        description="예식의 인상은 공간이 아니라 흐름에서 결정됩니다. 하람은 그 흐름을 설계하고 운영합니다."
        image="화이트 플라워로 장식한 호텔 웨딩홀"
        imageSrc="/images/hotel-white/main-quote-hotel-ballroom.png"
      />

      <Section title="하람이 하는 일">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div className="text-[16px] md:text-[17px] leading-[1.85] text-ink/70 break-keep space-y-5">
            <p>
              하람은 단순한 행사 인력 파견 업체가 아닙니다. 예식장의 운영 구조를 분석하고, 현장의 동선과
              응대 방식을 정리해 모든 예식이 같은 품질로 진행되도록 돕는 전문 컨시어지 파트너입니다.
            </p>
            <p>
              리허설부터 본식 입장과 퇴장까지 예식의 모든 흐름을 하나의 기준으로 관리합니다. 인력은 바뀌어도
              운영 매뉴얼은 남아, 시간이 지날수록 예식장의 운영 품질이 단단해집니다.
            </p>
          </div>
          <Hatch
            label="예식 운영 체크리스트와 현장 비품"
            src="/images/hotel-white/concierge-timeline.png"
            className="aspect-[3/2] rounded-2xl"
          />
        </div>
      </Section>

      <Section title="하람을 선택하는 이유" tone="mist">
        <ul className="grid md:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <li key={p.title} className="bg-white rounded-2xl border border-line p-6 md:p-7 flex flex-col">
              <h3 className="text-[19px] font-bold text-ink break-keep">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-[14px] text-ink/75 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 break-keep">
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-gold shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-line text-[14px] font-semibold text-gold-deep break-keep">{p.result}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="서비스" description="예식 현장부터 예식장 운영까지 여섯 가지 서비스를 운영합니다.">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={s.path} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-line hover:border-ink/30 transition-colors">
                <Hatch label={s.image} src={s.imageSrc} className="aspect-[4/3]" />
                <span className="p-6 flex-1 flex flex-col">
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-[18px] font-bold text-ink break-keep">{s.name}</span>
                    <IconArrowUpRight className="w-5 h-5 shrink-0 text-ink/30 group-hover:text-ink transition-colors" />
                  </span>
                  <span className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{s.short}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="회사 정보" tone="mist">
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
        description="예식장, 날짜, 필요한 서비스를 알려주시면 구성과 진행 방식을 안내해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
