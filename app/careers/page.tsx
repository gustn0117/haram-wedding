import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { ESTIMATE_HREF } from '@/lib/nav';

const ROLES = [
  {
    title: '예식도우미 (컨시어지 매니저)',
    desc: '제휴 예식장에서 하객 안내, 축의금 접수대, 신부대기실, 식순 진행을 담당합니다.',
    tasks: ['하객 동선 안내와 접수대 운영', '신부대기실과 양가 부모님 의전', '식순 타임라인 확인과 업체 소통'],
  },
  {
    title: '웨딩 포토부스 스태프',
    desc: '포토부스 설치와 철수, 하객 촬영 안내, 즉석 인화를 담당합니다.',
    tasks: ['부스 설치와 장비 점검', '하객 촬영 안내와 소품 관리', '인화물과 디지털 파일 관리'],
  },
  {
    title: '예식사회자',
    desc: '신랑신부와 사전 미팅을 하고, 리허설과 본식 진행을 맡습니다.',
    tasks: ['사전 미팅과 식순 구성', '리허설 참여', '본식 진행과 분위기 리딩'],
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        crumb="인재 채용"
        title="예식 현장을 함께 만들 사람을 찾습니다"
        description="예식도우미, 웨딩 포토부스 스태프, 예식사회자를 모집합니다. 경험이 없어도 교육을 거쳐 현장에 설 수 있습니다."
        image="팀 단체 사진 · 현장 스태프"
      />

      <Section title="모집 분야">
        <ul className="grid md:grid-cols-3 gap-4">
          {ROLES.map((r) => (
            <li key={r.title} className="rounded-2xl border border-line overflow-hidden flex flex-col">
              <Hatch label={r.title} size="800×500" className="aspect-[8/5]" />
              <div className="p-6 flex-1">
                <h3 className="text-[19px] font-bold text-ink break-keep">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{r.desc}</p>
                <ul className="mt-5 space-y-2 text-[14px] text-ink/75">
                  {r.tasks.map((t) => (
                    <li key={t} className="flex gap-2.5 break-keep">
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-gold shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="입사 후 교육" tone="mist">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-center">
          <p className="text-[16px] md:text-[17px] leading-[1.85] text-ink/70 break-keep">
            모든 매니저는 입사 후 4주 동안 집중 교육을 받습니다. 예식 현장 운영, 하객 응대, 돌발 상황 대응,
            의전 매너를 배운 뒤 현장에 배치됩니다.
          </p>
          <Hatch label="교육 장면" size="1200×800" className="aspect-[3/2] rounded-2xl" />
        </div>
      </Section>

      <CtaBand
        title="지원하고 싶다면 연락 주세요"
        description="문의하기에서 이름과 연락처, 지원 분야를 남기거나 전화로 문의하세요."
        href={ESTIMATE_HREF}
        label="지원 문의하기"
      />
    </main>
  );
}
