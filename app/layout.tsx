import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SITE_URL = 'https://haramevent.kr';
const SITE_NAME = '하람 (HARAM)';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '하람 | 웨딩 컨시어지 · 포토부스 · 전문사회',
    template: '%s | 하람',
  },
  description:
    '하람은 웨딩 컨시어지, 포토부스, 전문사회를 통합 제공하는 프리미엄 예식 매니지먼트입니다. 예식장과 제휴한 전문 예식도우미가 현장 운영을 책임집니다.',
  keywords: [
    '하람',
    '하람 웨딩',
    '하람 컨시어지',
    '예식도우미',
    '포토부스',
    '전문사회',
    '웨딩 컨시어지',
    '결혼식 컨시어지',
    '웨딩 포토부스',
    '예식 사회자',
    '웨딩 MC',
    'HARAM',
    'Haram Wedding',
  ],
  authors: [{ name: '하람' }],
  creator: '하람',
  publisher: '하람',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: '하람 | 웨딩 컨시어지 · 포토부스 · 전문사회',
    description:
      '예식의 품질은 현장에서 결정됩니다. 하람 웨딩 컨시어지, 포토부스, 전문사회가 당신의 결혼식을 완성합니다.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '하람 - 프리미엄 웨딩 매니지먼트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '하람 | 웨딩 컨시어지 · 포토부스 · 전문사회',
    description:
      '예식의 품질은 현장에서 결정됩니다. 하람 웨딩 컨시어지, 포토부스, 전문사회.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // 구글, 네이버 서치 콘솔 인증 시 여기에 추가
    // google: 'your-google-verification-code',
    // other: { 'naver-site-verification': 'your-naver-code' },
  },
  category: 'wedding',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '하람',
  alternateName: ['HARAM', '하람 웨딩', 'Haram Wedding'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    '하람은 웨딩 컨시어지, 포토부스, 전문사회를 통합 제공하는 프리미엄 예식 매니지먼트 회사입니다.',
  telephone: '+82-10-7930-1332',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressRegion: '경기도',
    addressLocality: '수원시 영통구',
  },
  sameAs: [SITE_URL],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-10-7930-1332',
    contactType: 'customer service',
    areaServed: 'KR',
    availableLanguage: ['Korean'],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#localbusiness`,
  name: '하람',
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: '+82-10-7930-1332',
  priceRange: '₩₩',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressRegion: '경기도',
    addressLocality: '수원시 영통구',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '18:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
