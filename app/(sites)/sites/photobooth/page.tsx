import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { Band, CheckList, ContactBand, Faq, Flow, GuideArticle, Hero, Section } from '@/components/site/SiteSections';
import { GUIDES } from '@/lib/guides';
import { PHOTOBOOTH_FAQ } from '@/lib/faq';
import { faqJsonLd } from '@/lib/seo';
import { serviceBySlug } from '@/lib/services';
import { siteBySlug } from '@/lib/sites';

const site = siteBySlug('photobooth');
const service = serviceBySlug('photobooth');

export default function PhotoboothHome() {
  return (
    <>
      <JsonLd data={faqJsonLd(PHOTOBOOTH_FAQ)} />

      <Hero
        eyebrow="예식장 출장 웨딩 포토부스"
        title={<>식이 끝나도 손에 남는,<br />그날의 한 장</>}
        body="하객이 직접 찍고 즉석에서 인화해 가져갑니다. 운영 스태프가 현장에 상주해 촬영 안내부터 인화, 소모품 관리까지 맡습니다."
        image={site.heroImage}
        imageAlt="웨딩 포토부스와 즉석 인화 사진"
        primary={{ href: '/contact', label: '문의 남기기' }}
        secondary={{ href: '/#how', label: '운영 방식 보기' }}
      />

      <Band facts={service.facts} />

      <Section id="service" title="무엇이 포함되나요" lead="장비 설치부터 철수까지, 예식장에서 따로 준비할 것이 없습니다.">
        <CheckList items={service.included} />
      </Section>

      <Section id="how" title="운영 방식" lead="예식장 사정에 맞게 고를 수 있습니다." tone="surface">
        <ul className="grid md:grid-cols-3 gap-4">
          {service.options?.map((o) => (
            <li key={o.name} className="bg-[var(--site-bg)] border border-[var(--site-line)] p-6">
              <h3 className="text-[18px] font-bold break-keep">{o.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[var(--site-muted)] break-keep">{o.desc}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[15px] text-[var(--site-muted)] break-keep">
          주말 정기 운영도 가능합니다. 건당 운영과 월 대여 중 어느 쪽이 맞을지 상담에서 함께 정합니다.
        </p>
      </Section>

      <Section id="flow" title="진행 순서">
        <Flow steps={service.flow} />
      </Section>

      <Section title="현장은 이렇게 꾸며집니다" tone="surface">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/editorial-2026/photobooth.webp" alt="예식장에 설치한 웨딩 포토부스" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/editorial-2026/details.webp" alt="포토부스 인화물과 예식 디테일" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
        <p className="mt-6 text-[15px] text-[var(--site-muted)] break-keep">
          실제 운영 사진은 준비되는 대로 추가합니다.
        </p>
      </Section>

      <Section id="faq" title="자주 묻는 질문">
        <Faq items={PHOTOBOOTH_FAQ} />
      </Section>

      {GUIDES.photobooth && <GuideArticle guide={GUIDES.photobooth} />}

      <ContactBand
        title="예식 날짜가 정해졌다면 먼저 물어보세요"
        body="예식장과 날짜, 하객 규모를 알려주시면 가능한 구성을 안내해 드립니다."
      />
    </>
  );
}
