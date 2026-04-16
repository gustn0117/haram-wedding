export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <style>{`
        .admin-layout ~ footer,
        nav { display: none !important; }
      `}</style>
      {children}
    </div>
  );
}
