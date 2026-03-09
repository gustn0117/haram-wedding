import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HARAM - 하람 웨딩 컨시어지',
  description: '예식의 품질은 현장에서 결정됩니다. 하람 웨딩 컨시어지, 포토부스, 전문사회',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
