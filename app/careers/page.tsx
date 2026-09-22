import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { CONTACT_HREF } from '@/lib/nav';
import { serviceBySlug } from '@/lib/services';

const PIPELINE = serviceBySlug('concierge').pipeline!;

const ROLES = [
  {
    title: '예식도우미 (컨시어지 매니저)',
    desc: '제휴 예식장에서 하객 안내, 축의금 접수대, 신부대기실, 식순 진행을 담당합니다.',
    tasks: ['하객 동선 안내와 접수대 운영', '신부대기실과 양가 부모님 의전', '식순 타임라인 확인과 업체 소통'],
    imageSrc: '/images/editorial-2026/concierge-desk.png',
  },
  {
    title: '웨딩 포토부스 스태프',
    desc: '포토부스 설치와 철수, 하객 촬영 안내, 즉석 인화를 담당합니다.',
    tasks: ['부스 설치와 장비 점검', '하객 촬영 안내와 소품 관리', '인화물과 디지털 파일 관리'],
    imageSrc: '/images/editorial-2026/photobooth.png',
  },
  {
    title: '예식사회자',
    desc: '신랑신부와 대본을 협의하고, 큐 시트에 맞춰 본식 진행을 맡습니다.',
    tasks: ['대본 작성과 비대면 협의', '큐 시트 기반 음향팀 동기화', '입장부터 퇴장까지 본식 진행'],
    imageSrc: '/images/editorial-2026/host-vocal.png',
  },
  {
    title: '축가 보컬리스트',
    desc: '신랑신부와 곡목과 키를 협의하고, 본식에서 라이브 축가를 부릅니다.',
    tasks: ['곡목, 키, 편곡 사전 협의', '음향팀과 사운드 체크', '본식 라이브 공연'],
    imageSrc: '/images/editorial-2026/host-vocal.png',
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        crumb="인재 채용"
        title="예식 현장을 함께 만들 사람을 찾습니다"
        description="예식도우미, 웨딩 포토부스 스태프, 예식사회자, 축가 보컬리스트를 모집합니다. 항공·호텔 등 서비스 계열 지망생과 경험자를 우대합니다."
        image="웨딩 플라워로 꾸민 예식장 로비"
        imageSrc="/images/editorial-2026/home-hero.png"
      />

      <Section title="모집 분야">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROLES.map((r) => (
            <li key={r.title} className="rounded-2xl border border-line overflow-hidden flex flex-col">
              <Hatch label={r.title} src={r.imageSrc} className="aspect-[8/5]" />
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

      <Section title="선발부터 배치까지" description="자체 교육 과정을 이수하고 현장 실무 평가를 통과한 인원만 현장에 투입합니다." tone="mist">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PIPELINE.map((p, i) => (
            <li key={p.title} className="bg-white rounded-2xl border border-line p-6">
              <span className="text-[13px] font-bold text-gold-deep tabular-nums">{i + 1}단계</span>
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
            src="/images/editorial-2026/operations.png"
            className="aspect-[3/2] rounded-2xl"
          />
        </div>
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
