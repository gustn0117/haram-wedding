import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 | 하람 웨딩 상담',
  description:
    '하람 웨딩 컨시어지, 포토부스, 전문사회 서비스 문의. 전화 010-7930-1332 또는 온라인 문의 양식으로 맞춤 상담을 받으실 수 있습니다.',
  keywords: [
    '하람 문의',
    '하람 웨딩 상담',
    '웨딩 컨시어지 문의',
    '포토부스 문의',
    '전문사회 문의',
    '예식 상담',
    '하람',
  ],
  alternates: {
    canonical: 'https://haramevent.kr/contact',
  },
  openGraph: {
    title: '문의하기 | 하람 웨딩 상담',
    description: '하람 웨딩 서비스 맞춤 상담 문의. 010-7930-1332',
    url: 'https://haramevent.kr/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
