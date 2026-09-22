import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import Section from '@/components/page/Section';
import CtaBand from '@/components/page/CtaBand';
import { ESTIMATE_HREF } from '@/lib/nav';

const BENEFITS = [
  { title: '고객 만족도와 재추천', desc: '전문 매니저의 현장 관리로 예식장 이용 고객의 만족도가 올라가고, 입소문으로 이어집니다.' },
  { title: '운영 리스크 관리', desc: '돌발 상황 대응 체계와 사전 시나리오로 예식 현장의 변수를 미리 차단합니다.' },
  { title: '내부 인력 부담 절감', desc: '현장 운영을 외부 전문 인력이 맡아, 예식장 직원은 핵심 업무에 집중할 수 있습니다.' },
  { title: '프리미엄 상품 구성', desc: '컨시어지를 예식장 패키지에 포함해 다른 예식장과 차별화된 상품을 만들 수 있습니다.' },
];

// 도입 절차 — 실제 순서대로 진행된다
const STEPS = [
  { title: '제휴 상담', desc: '예식장 규모, 월간 예식 건수, 기존 운영 방식을 듣고 서비스 구성을 제안합니다.', out: '비용 구조와 서비스 범위 협의' },
  { title: '현장 답사', desc: '예식장을 방문해 공간 구조, 하객 동선, 시설, 음향과 조명 환경을 확인합니다.', out: '동선 분석, 시설 점검 리포트' },
  { title: '매뉴얼 설계', desc: '답사 결과로 예식장 전용 운영 매뉴얼, 체크리스트, 비상 대응 시나리오를 만듭니다.', out: '전용 매뉴얼, 체크리스트' },
  { title: '전담 운영', desc: '교육받은 전문 매니저를 배치해 운영을 시작하고, 월간 리포트로 결과를 공유합니다.', out: '전담 매니저 배치, 월간 리포트' },
];

export default function PartnershipPage() {
  return (
    <main>
      <PageHero
        crumb="제휴 안내"
        title="예식장 현장 운영, 하람에 맡기세요"
        description="예식장 전용 B2B 예식 컨시어지입니다. 제휴 예식장에는 교육받은 예식도우미가 전담으로 배치됩니다."
        image="제휴 예식장 · 로비 전경"
      />

      <Section title="제휴하면 달라지는 것">
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {BENEFITS.map((b) => (
            <li key={b.title} className="border-t border-ink pt-5">
              <h3 className="text-[18px] font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink/60 break-keep">{b.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="도입 절차" description="상담부터 운영 시작까지 네 단계로 진행합니다." tone="mist">
        <ol className="grid md:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="bg-white rounded-2xl p-6 border border-line flex flex-col">
              <span className="text-[13px] font-bold text-gold-deep tabular-nums">{i + 1}단계</span>
              <h3 className="mt-2 text-[19px] font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink/60 break-keep flex-1">{s.desc}</p>
              <p className="mt-5 pt-4 border-t border-line text-[13px] text-ink/50 break-keep">{s.out}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="현장 운영 방식이 궁금하다면">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <Hatch label="예식 컨시어지 운영 장면" size="1200×800" className="aspect-[3/2] rounded-2xl" />
          <div>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-ink/70 break-keep">
              하객 동선 설계, 분 단위 식순 관리, 업체 간 소통, VIP 의전까지 예식 컨시어지가 하는 일을 자세히 정리했습니다.
            </p>
            <Link href="/concierge" className="mt-6 inline-flex items-center h-12 px-6 rounded-full border border-ink text-[15px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors">
              예식 컨시어지 자세히 보기
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="제휴 상담을 신청하세요"
        description="예식장 규모와 월간 예식 건수를 알려주시면 맞춤 견적을 드립니다. 1회 체험 운영도 가능합니다."
        href={ESTIMATE_HREF}
        label="제휴 상담 신청"
      />
    </main>
  );
}
