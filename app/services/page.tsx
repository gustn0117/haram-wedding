import Link from 'next/link';
import Hatch from '@/components/Hatch';
import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import { IconArrowUpRight } from '@/components/icons';
import { CONTACT_HREF } from '@/lib/nav';
import { SERVICES, type Service } from '@/lib/services';

const GROUPS: { title: string; description: string; filter: (s: Service) => boolean }[] = [
  {
    title: '예식 당일을 채우는 서비스',
    description: '신랑신부와 예식장 모두 신청할 수 있습니다.',
    filter: (s) => s.audience !== '예식장',
  },
  {
    title: '예식장을 위한 서비스',
    description: '예식장과 계약해 운영하는 서비스입니다.',
    filter: (s) => s.audience === '예식장',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="서비스"
        title="예식의 흐름부터 예식장 운영까지"
        description="컨시어지, 사회, 축가, 포토부스, 마케팅, 운영 프로그램까지 한 파트너가 맡습니다. 필요한 것만 골라 이용하세요."
        image="서비스 대표 이미지 · 예식 현장"
        imageSrc="/images/hotel-white/concierge-cta.png"
      />

      {GROUPS.map((g, gi) => (
        <section key={g.title} className={gi % 2 ? 'bg-mist' : 'bg-white'}>
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] text-ink">{g.title}</h2>
            <p className="mt-2 text-[16px] text-ink/55">{g.description}</p>
            <ul className="mt-10 grid md:grid-cols-3 gap-4">
              {SERVICES.filter(g.filter).map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}
                    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-line hover:border-ink/30 transition-colors">
                    <Hatch label={s.image} src={s.imageSrc} className="aspect-[4/3]" />
                    <span className="p-6 flex-1 flex flex-col">
                      <span className="flex items-start justify-between gap-4">
                        <span className="text-[20px] font-bold text-ink">{s.name}</span>
                        <IconArrowUpRight className="w-5 h-5 shrink-0 text-ink/30 group-hover:text-ink transition-colors" />
                      </span>
                      <span className="mt-2 text-[15px] leading-[1.65] text-ink/60 break-keep">{s.short}</span>
                      <span className="mt-5 pt-4 border-t border-line text-[14px] italic text-ink/50 break-keep">“{s.quote}”</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand
        title="어떤 구성이 맞을지 모르겠다면"
        description="예식장 규모나 예식 날짜를 알려주시면 필요한 서비스 구성을 함께 정해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
