import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import {
  BRAND,
  HOME,
  NAVER_SITE_VERIFICATION,
  SITE_URL,
  pageMetadata,
  siteJsonLd,
} from '@/lib/seo';

const home = pageMetadata(HOME);

export const metadata: Metadata = {
  ...home,
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME.title,
    template: `%s | ${BRAND}`,
  },
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  verification: {
    other: { 'naver-site-verification': NAVER_SITE_VERIFICATION },
  },
  category: 'wedding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <JsonLd data={siteJsonLd} />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
