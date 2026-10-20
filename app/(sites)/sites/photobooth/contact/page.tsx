import type { Metadata } from 'next';
import SiteContactForm from '@/components/site/SiteContactForm';
import { siteMetadata } from '@/lib/site-seo';
import { siteBySlug } from '@/lib/sites';

const site = siteBySlug('photobooth');

export const metadata: Metadata = siteMetadata(site, {
  path: '/contact',
  title: '문의하기',
  description: '웨딩 포토부스 대여 문의. 예식장과 날짜, 하객 규모를 알려주시면 가능한 구성을 안내해 드립니다.',
});

export default function PhotoboothContact() {
  return (
    <section className="bg-[var(--site-bg)]">
      <div className="max-w-[760px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-[32px] md:text-[42px] font-bold tracking-[-0.035em] leading-[1.25] break-keep">
          포토부스 문의
        </h1>
        <p className="mt-4 text-[16px] md:text-[17px] leading-[1.8] text-[var(--site-muted)] break-keep">
          예식장과 날짜, 하객 규모를 알려주시면 가능한 구성과 진행 방식을 안내해 드립니다.
          건당 운영과 월 대여 중 어느 쪽이 맞을지도 함께 봐 드립니다.
        </p>

        <div className="mt-10">
          <SiteContactForm service="photobooth" serviceLabel="웨딩 포토부스" />
        </div>
      </div>
    </section>
  );
}
