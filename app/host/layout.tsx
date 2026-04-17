import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '하람 전문사회 | 프리미엄 웨딩 MC',
  description:
    '하람 전문사회는 부부의 스토리를 파악한 맞춤형 진행으로 예식에 감동을 더합니다. 사전 미팅, 식순 구성, 리허설 참여, 현장 분위기 리딩까지 완벽한 MC 서비스.',
  keywords: [
    '전문사회',
    '웨딩 MC',
    '예식 사회자',
    '결혼식 사회자',
    '하람 전문사회',
    '전문 MC',
    '웨딩 사회자',
    '하람',
  ],
  alternates: {
    canonical: 'https://haramevent.kr/host',
  },
  openGraph: {
    title: '하람 전문사회 | 프리미엄 웨딩 MC',
    description:
      '격식과 감동 사이, 완벽한 균형을 잡는 프리미엄 전문 MC.',
    url: 'https://haramevent.kr/host',
    type: 'website',
  },
};

export default function HostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
