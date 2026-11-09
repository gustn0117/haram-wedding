import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import CtaBand from '@/components/page/CtaBand';
import { CONTACT_HREF } from '@/lib/nav';
import { STORIES, storyBySlug, type Block } from '@/lib/stories';
import { articleJsonLd, storyBreadcrumbJsonLd, storyMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return STORIES.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = storyBySlug(params.slug);
  return post ? storyMetadata(post) : {};
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="mt-11 mb-3 text-[20px] md:text-[24px] font-extrabold tracking-[-0.02em] text-ink break-keep">
              {block.text}
            </h2>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="my-6 space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.85] text-ink/75 break-keep">
                  <span className="mt-[12px] w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'quote') {
          return (
            <blockquote key={i} className="my-10 border-l-2 border-brand pl-6 text-[18px] md:text-[20px] leading-[1.7] font-bold text-ink break-keep">
              {block.text}
            </blockquote>
          );
        }
        return (
          <p key={i} className="my-5 text-[16px] md:text-[17px] leading-[1.9] text-ink/75 break-keep">
            {block.text}
          </p>
        );
      })}
    </>
  );
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const post = storyBySlug(params.slug);
  if (!post) notFound();

  const others = STORIES.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={[articleJsonLd(post), storyBreadcrumbJsonLd(post)]} />

      <article>
        <header className="bg-mist">
          <div className="max-w-[760px] mx-auto px-6 pt-28 md:pt-32 pb-12">
            <nav aria-label="현재 위치" className="text-[13px] text-ink/50">
              <Link href="/" className="hover:text-ink transition-colors">홈</Link>
              <span className="mx-2 text-ink/25">/</span>
              <Link href="/stories" className="hover:text-ink transition-colors">칼럼</Link>
            </nav>
            <h1 className="site-heading mt-4 text-[28px] md:text-[38px] text-ink break-keep">{post.title}</h1>
            <p className="mt-5 text-[17px] leading-[1.75] text-ink/60 break-keep">{post.summary}</p>
            <p className="mt-6 flex flex-wrap items-center gap-2 text-[14px] text-ink/50">
              <span className="font-bold text-brand-deep">{post.audience}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.published} className="tabular-nums">{post.published.replace(/-/g, '.')}</time>
              <span aria-hidden>·</span>
              <span>읽는 데 {post.readingMinutes}분</span>
            </p>
          </div>
        </header>

        <div className="max-w-[760px] mx-auto px-6">
          <div className="relative aspect-[16/9] -mt-4 overflow-hidden bg-mist">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 768px) 760px, 100vw" className="object-cover" />
          </div>
          <div className="py-12 md:py-16">
            <Body blocks={post.body} />
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-mist">
          <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
            <h2 className="site-heading text-[22px] md:text-[26px] text-ink">다른 글</h2>
            <ul className="mt-8 grid md:grid-cols-3 gap-4">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link href={`/stories/${p.slug}`} className="block h-full bg-white border border-line p-6 hover:border-ink/30 transition-colors">
                    <span className="text-[13px] font-bold text-brand-deep">{p.audience}</span>
                    <span className="mt-2 block text-[18px] font-extrabold text-ink leading-[1.4] break-keep">{p.title}</span>
                    <span className="mt-2 block text-[15px] leading-[1.6] text-ink/60 break-keep">{p.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title="예식 현장에 대해 더 묻고 싶다면"
        description="예식장 규모나 예식 날짜를 알려주시면 필요한 구성을 안내해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
