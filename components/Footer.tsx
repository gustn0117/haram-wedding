import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-haram-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs text-gray-400 mb-1 tracking-widest">Precious Person in Heaven</p>
            <h3 className="text-2xl font-semibold tracking-wider font-display">HARAM</h3>
          </div>

          <div className="text-sm text-gray-300 space-y-1 font-light">
            <p><span className="text-gray-400">상호명:</span> 하람</p>
            <p><span className="text-gray-400">대표:</span> 김영진</p>
            <p><span className="text-gray-400">사업자등록번호:</span> 412-21-01283</p>
            <p><span className="text-gray-400">통신판매업신고번호:</span> 2025-용인기흥-01511</p>
          </div>

          <div>
            <div className="text-sm text-gray-300 space-y-1 font-light mb-6">
              <p>소재지: 경기도 수원시 영통구</p>
              <p className="text-gray-400">고객지원:</p>
              <p>Tel. 010-7930-1332</p>
              <p>평일 10시 ~ 18시</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/concierge" className="text-gray-400 hover:text-white transition-colors">컨시어지(예식도우미)</Link>
              <Link href="/photobooth" className="text-gray-400 hover:text-white transition-colors">포토부스</Link>
              <Link href="/host" className="text-gray-400 hover:text-white transition-colors">전문사회</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">문의하기</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">Copyright 2025 @ HARAM MANAGEMENT All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
