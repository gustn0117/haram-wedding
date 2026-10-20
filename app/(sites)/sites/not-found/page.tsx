import Link from 'next/link';

export default function SiteNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-[15px] text-ink/50">요청하신 페이지를 찾을 수 없습니다.</p>
        <Link href="/" className="mt-4 inline-flex items-center h-12 px-6 rounded-full bg-ink text-white text-[15px] font-semibold">
          홈으로
        </Link>
      </div>
    </main>
  );
}
