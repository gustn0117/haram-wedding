import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { CONTACT_HREF } from '@/lib/nav';
import { serviceBySlug } from '@/lib/services';
import { ROLES } from '@/lib/roles';

const PIPELINE = serviceBySlug('concierge').pipeline!;


export default function CareersPage() {
  return (
    <main>
      <PageHero
        crumb="인재 채용"
        title="예식 현장을 함께 만들 사람을 찾습니다"
        description="예식도우미, 웨딩 포토부스 스태프, 예식사회자, 축가 보컬리스트를 모집합니다. 항공·호텔 등 서비스 계열 지망생과 경험자를 우대합니다."
        image="웨딩 플라워로 꾸민 예식장 로비"
        imageSrc="/images/editorial-2026/home-hero.webp"
      />

      <Section title="모집 분야">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROLES.map((r) => (
            <li key={r.title} className="border border-line overflow-hidden flex flex-col">
              <Hatch label={r.title} src={r.imageSrc} className="aspect-[8/5]" />
              <div className="p-6 flex-1">
                <h3 className="text-[19px] font-bold text-ink break-keep">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{r.description}</p>
                <ul className="mt-5 space-y-2 text-[14px] text-ink/75">
                  {r.tasks.map((t) => (
                    <li key={t} className="flex gap-2.5 break-keep">
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-brand-deep shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="선발부터 배치까지" description="자체 교육 과정을 이수하고 현장 실무 평가를 통과한 인원만 현장에 투입합니다." tone="mist">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PIPELINE.map((p, i) => (
            <li key={p.title} className="bg-white border border-line p-6">
              <span className="text-[13px] font-bold text-brand-deep tabular-nums">{i + 1}단계</span>
              <h3 className="mt-2 text-[19px] font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="입사 후 교육">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-center">
          <p className="text-[16px] md:text-[17px] leading-[1.85] text-ink/70 break-keep">
            모든 매니저는 입사 후 4주 동안 집중 교육을 받습니다. 예식 현장 운영, 하객 응대, 돌발 상황 대응,
            의전 매너를 배운 뒤 현장에 배치됩니다.
          </p>
          <Hatch
            label="현장 교육에 사용하는 예식 운영 체크리스트"
            src="/images/editorial-2026/operations.webp"
            className="aspect-[3/2] "
          />
        </div>
      </Section>

      <Section title="지원 절차" description="서류 검토부터 현장 배치까지 보통 2~4주가 걸립니다." tone="mist">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '지원', desc: '문의 양식이나 전화로 이름과 연락처, 지원 분야를 남깁니다.' },
            { step: '면접', desc: '담당자가 연락드려 경험과 가능한 요일, 희망 지역을 확인합니다.' },
            { step: '교육', desc: '예식 운영 매뉴얼과 응대 표준을 배우는 교육 과정을 이수합니다.' },
            { step: '배치', desc: '현장 실무 평가를 통과하면 홀 구성과 회차에 맞춰 배치됩니다.' },
          ].map((item, i) => (
            <li key={item.step} className="bg-white border border-line p-6">
              <span className="text-[13px] font-bold text-brand-deep tabular-nums">{i + 1}단계</span>
              <h3 className="mt-2 text-[19px] font-bold text-ink">{item.step}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="이런 분과 일하고 싶습니다">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-[18px] font-bold text-ink">지원 자격</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                '주말 예식 근무가 가능한 분',
                '하객 응대에 거부감이 없는 분',
                '정해진 시간과 순서를 지키는 것을 중요하게 생각하는 분',
                '예식 현장 경험이 없어도 교육을 끝까지 이수할 의지가 있는 분',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-[1.7] text-ink/75 break-keep">
                  <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-ink">우대 사항</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                '항공·호텔 등 서비스 계열 전공자 또는 경험자',
                '웨딩홀, 컨벤션, 행사 현장 근무 경험',
                '수원·용인·성남·화성 등 경기권 거주',
                '포토부스 장비나 음향 장비를 다뤄본 경험',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-[1.7] text-ink/75 break-keep">
                  <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-[15px] leading-[1.8] text-ink/55 break-keep max-w-[46em]">
          근무 지역과 가능한 요일은 지원 후 상담에서 조율합니다. 분야별 모집 인원과 일정은 예식 일정에 따라 달라지므로 문의해 주세요.
        </p>
      </Section>

      <CtaBand
        title="지원하고 싶다면 연락 주세요"
        description="문의하기에서 이름과 연락처, 지원 분야를 남기거나 전화로 문의하세요."
        href={CONTACT_HREF}
        label="지원 문의하기"
      />
    </main>
  );
}
