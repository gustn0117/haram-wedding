import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import { ALL_FAQ } from '@/lib/faq';
import { CONTACT_HREF, PHONE_DISPLAY } from '@/lib/nav';

export default function FaqPage() {
  return (
    <main>
      <PageHero
        crumb="자주 묻는 질문"
        title="자주 묻는 질문"
        description="신청 방법, 운영 지역, 비용, 예식장 제휴 절차를 모았습니다."
        image="예식 준비 디테일"
        imageSrc="/images/editorial-2026/details.webp"
      />

      <section className="bg-white">
        <div className="max-w-[880px] mx-auto px-6 py-16 md:py-24 space-y-14">
          {ALL_FAQ.map((group) => (
            <div key={group.title}>
              <h2 className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em] text-ink">{group.title}</h2>
              <div className="mt-6 border-t border-ink">
                {group.items.map((f) => (
                  <details key={f.q} className="group border-b border-line">
                    <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="shrink-0 w-6 h-6 rounded-full border border-line flex items-center justify-center text-ink/50 group-open:rotate-45 transition-transform" aria-hidden>+</span>
                    </summary>
                    <p className="pb-6 pr-10 text-[15px] leading-[1.8] text-ink/65 break-keep">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <p className="text-[15px] leading-[1.8] text-ink/55 break-keep">
            찾는 답이 없다면 {PHONE_DISPLAY}로 전화 주시거나 문의 양식을 남겨 주세요. 평일 10:00–18:00에 답변드립니다.
          </p>
        </div>
      </section>

      <CtaBand
        title="더 궁금한 점이 있으신가요?"
        description="예식장과 날짜, 필요한 서비스를 알려주시면 구성과 진행 방식을 안내해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
