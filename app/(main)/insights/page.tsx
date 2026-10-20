import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';
import { INSIGHTS } from '@/lib/insights';

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        crumb="칼럼"
        title="예식 현장에서 나온 이야기"
        description="예식장 운영자와 예비부부가 자주 묻는 주제를 하나씩 정리합니다."
        image="웨딩홀 운영 기록과 큐시트"
        imageSrc="/images/editorial-2026/operations.webp"
      />

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <ul className="grid md:grid-cols-3 gap-4">
            {INSIGHTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/insights/${post.slug}`}
                  className="group flex flex-col h-full bg-white overflow-hidden border border-line hover:border-ink/30 transition-colors">
                  <Hatch label={post.imageAlt} src={post.image} className="aspect-[4/3]" />
                  <span className="p-6 flex-1 flex flex-col">
                    <span className="flex items-center gap-2 text-[13px] text-ink/50">
                      <span className="font-semibold text-navy">{post.audience}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={post.published} className="tabular-nums">{post.published.replace(/-/g, '.')}</time>
                      <span aria-hidden>·</span>
                      <span>{post.readingMinutes}분</span>
                    </span>
                    <span className="mt-3 flex items-start justify-between gap-4">
                      <span className="text-[19px] font-bold text-ink leading-[1.4] break-keep">{post.title}</span>
                      <IconArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-ink/30 group-hover:text-ink transition-colors" />
                    </span>
                    <span className="mt-3 text-[15px] leading-[1.65] text-ink/60 break-keep">{post.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="현장 상황을 알려주시면 함께 봅니다"
        description="예식장 규모나 예식 날짜를 알려주시면 필요한 구성을 안내해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
