import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <style>{`
        .admin-layout ~ footer,
        .site-header,
        .mobile-dock-spacer { display: none !important; }
      `}</style>
      {children}
    </div>
  );
}
