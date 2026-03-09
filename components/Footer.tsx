'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-haram-navy text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-haram-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-6 h-6 opacity-60">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
              <div>
                <p className="text-[9px] text-gray-500 tracking-[0.15em]">Precious Person in Heaven</p>
                <h3 className="text-lg font-semibold tracking-[0.15em] font-display">HARAM</h3>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="text-[13px] text-gray-400 space-y-2 font-light">
            <p><span className="text-gray-500 mr-2">상호명:</span>하람</p>
            <p><span className="text-gray-500 mr-2">대표:</span>김영진</p>
            <p><span className="text-gray-500 mr-2">사업자등록번호:</span>412-21-01283</p>
            <p><span className="text-gray-500 mr-2">통신판매업신고번호:</span>2025-용인기흥-01511</p>
          </div>

          {/* Contact */}
          <div className="text-[13px] text-gray-400 space-y-2 font-light">
            <p>소재지: 경기도 수원시 영통구</p>
            <div className="mt-4">
              <p className="text-gray-500 text-[11px] tracking-widest mb-1">고객지원</p>
              <p className="text-white/80">Tel. 010-7930-1332</p>
              <p className="text-gray-500">평일 10시 ~ 18시</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            {[
              { href: '/concierge', label: '컨시어지(예식도우미)' },
              { href: '/photobooth', label: '포토부스' },
              { href: '/host', label: '전문사회' },
              { href: '/contact', label: '문의하기' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="text-[13px] text-gray-500 hover:text-white/80 transition-colors duration-300 font-light">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-[11px] text-gray-600 text-center tracking-wide">
            Copyright 2025 @ HARAM MANAGEMENT All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
