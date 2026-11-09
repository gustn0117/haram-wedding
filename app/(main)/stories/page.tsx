import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';
import { STORIES } from '@/lib/stories';

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        crumb="칼럼"
        title="예식 현장에서 나온 이야기"
        description="인력 배치, 큐 시트, 성수기 운영까지 실제로 부딪히는 주제를 정리합니다."
        image="예식 운영 기록과 큐시트"
        imageSrc="/images/editorial-2026/operations.webp"
      />

      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STORIES.map((post) => (
              <li key={post.slug}>
                <Link href={`/stories/${post.slug}`}
                  className="group flex flex-col h-full border border-line hover:border-ink/30 transition-colors overflow-hidden">
                  <span className="relative block aspect-[16/10]">
                    <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover" />
                  </span>
                  <span className="flex-1 p-6">
                    <span className="flex items-center gap-2 text-[13px] text-ink/50">
                      <span className="font-bold text-brand-deep">{post.audience}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={post.published} className="tabular-nums">{post.published.replace(/-/g, '.')}</time>
                      <span aria-hidden>·</span>
                      <span>{post.readingMinutes}분</span>
                    </span>
                    <span className="mt-3 flex items-start justify-between gap-3">
                      <span className="text-[19px] font-extrabold tracking-[-0.02em] text-ink leading-[1.4] break-keep">{post.title}</span>
                      <IconArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-ink/25 group-hover:text-brand-deep transition-colors" />
                    </span>
                    <span className="mt-3 block text-[15px] leading-[1.7] text-ink/60 break-keep">{post.summary}</span>
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
