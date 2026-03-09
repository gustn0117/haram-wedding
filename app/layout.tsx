import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HARAM - Precious Person in Heaven',
  description: '예식의 품질은 현장에서 결정됩니다. 하람 웨딩 컨시어지, 포토부스, 전문사회',
  openGraph: {
    title: 'HARAM - 하람 웨딩',
    description: '예식의 품질은 현장에서 결정됩니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
