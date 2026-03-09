'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-haram-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="relative w-5 h-5 opacity-70">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM" fill className="object-contain brightness-200"
                />
              </div>
              <span className="text-[14px] font-medium tracking-[0.15em]">HARAM</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-[1.9]">
              예식의 품질은 현장에서 결정됩니다
            </p>
          </div>

          <div className="text-[12px] text-gray-500 space-y-2">
            <p className="text-[11px] text-gray-400 font-medium mb-3">회사 정보</p>
            <p>상호명: 하람 &middot; 대표: 김영진</p>
            <p>사업자등록번호: 412-21-01283</p>
            <p>통신판매업: 2025-용인기흥-01511</p>
          </div>

          <div className="text-[12px] text-gray-500 space-y-2">
            <p className="text-[11px] text-gray-400 font-medium mb-3">연락처</p>
            <p>경기도 수원시 영통구</p>
            <p className="text-white/80 text-[14px] mt-3">010-7930-1332</p>
            <p className="text-gray-600 text-[11px]">평일 10시 ~ 18시</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] text-gray-400 font-medium mb-1">서비스</p>
            {[
              { href: '/concierge', label: '컨시어지' },
              { href: '/photobooth', label: '포토부스' },
              { href: '/host', label: '전문사회' },
              { href: '/contact', label: '문의하기' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="text-[12px] text-gray-500 hover:text-white transition-colors duration-300 w-fit">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5">
          <p className="text-[10px] text-gray-600">&copy; 2025 HARAM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
