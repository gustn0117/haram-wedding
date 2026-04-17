import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '하람 포토부스 | 프리미엄 웨딩 포토부스',
  description:
    '하람 포토부스는 예식 컨셉에 맞춘 맞춤형 디자인과 고품질 즉석 인화로 하객에게 특별한 추억을 선물합니다. 전문 스태프 상주, 디지털 파일 제공, 포토북 제작 옵션.',
  keywords: [
    '포토부스',
    '웨딩 포토부스',
    '결혼식 포토부스',
    '하람 포토부스',
    '예식 포토부스',
    '즉석 인화',
    '포토북',
    '하람',
  ],
  alternates: {
    canonical: 'https://haramevent.kr/photobooth',
  },
  openGraph: {
    title: '하람 포토부스 | 프리미엄 웨딩 포토부스',
    description:
      '하객에게 추억을, 부부에게 감동을 선물하는 프리미엄 웨딩 포토부스 서비스.',
    url: 'https://haramevent.kr/photobooth',
    type: 'website',
  },
};

export default function PhotoboothLayout({ children }: { children: React.ReactNode }) {
  return children;
}
