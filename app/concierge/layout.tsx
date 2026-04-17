import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '하람 컨시어지 | 예식장 전용 B2B 웨딩 컨시어지',
  description:
    '하람 컨시어지는 예식장과 직접 제휴하여 현장 운영을 책임지는 프리미엄 B2B 웨딩 컨시어지 서비스입니다. 전문 예식도우미가 하객 안내, 식순 조율, 돌발 대응까지 완벽하게 관리합니다.',
  keywords: [
    '하람 컨시어지',
    '웨딩 컨시어지',
    '예식 컨시어지',
    '예식도우미',
    '예식장 매니저',
    '결혼식 컨시어지',
    '예식 매니지먼트',
    '하람',
  ],
  alternates: {
    canonical: 'https://haramevent.kr/concierge',
  },
  openGraph: {
    title: '하람 컨시어지 | 예식장 전용 B2B 웨딩 컨시어지',
    description:
      '예식장과 직접 제휴하여 현장 운영의 모든 것을 책임집니다. 전문 예식도우미가 상주하는 프리미엄 컨시어지 서비스.',
    url: 'https://haramevent.kr/concierge',
    type: 'website',
  },
};

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
