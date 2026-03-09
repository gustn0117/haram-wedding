import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-haram-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-8 mb-12 pb-8 border-b border-gray-600">
          {/* Left - Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-light text-gray-300">Precious Person in Heaven</span>
            </div>
            <span className="text-lg font-bold text-haram-gold">HARAM</span>
          </div>

          {/* Center - Company Info */}
          <div className="text-sm text-gray-300 space-y-1 flex flex-col justify-start">
            <div>상호명: <span className="font-medium">하람</span></div>
            <div>대표: <span className="font-medium">김영진</span></div>
            <div>사업자등록번호: <span className="font-medium">412-21-01283</span></div>
            <div>통신판매업신고번호: <span className="font-medium">2025-용인기흥-01511</span></div>
          </div>

          {/* Right - Contact & Address */}
          <div className="text-sm text-gray-300 space-y-2 flex flex-col justify-start">
            <div className="font-medium">소재지: <span>경기도 수원시 영통구</span></div>
            <div className="space-y-1">
              <div className="font-medium">고객지원</div>
              <div>Tel. 010-7930-1332</div>
              <div className="text-xs text-gray-400">평일 10시 ~ 18시</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          {/* Left - Copyright */}
          <div className="text-xs text-gray-400">
            Copyright 2025 @ HARAM MANAGEMENT All Right Reserved
          </div>

          {/* Right - Navigation Links */}
          <div className="flex gap-6 text-xs text-gray-300">
            <Link href="/concierge" className="hover:text-haram-gold transition-colors">
              컨시어지(예식도우미)
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/photobooth" className="hover:text-haram-gold transition-colors">
              포토부스
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/host" className="hover:text-haram-gold transition-colors">
              전문사회
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/contact" className="hover:text-haram-gold transition-colors">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
