'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}>
            <p className="heading-en text-[20px] font-medium mb-2">HARAM</p>
            <p className="text-[10px] text-gray-500 tracking-[0.1em] mb-6">Wedding Management</p>
            <p className="text-[13px] text-gray-500 leading-[1.9]">
              예식의 품질은 현장에서 결정됩니다.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fade}
            className="text-[12px] text-gray-500 space-y-2.5">
            <p className="text-[10px] text-[#b89d6a] tracking-[0.1em] mb-4">Company</p>
            <p>상호명: 하람 · 대표: 김영진</p>
            <p>사업자등록번호: 412-21-01283</p>
            <p>통신판매업: 2025-용인기흥-01511</p>
          </motion.div>

          {/* Contact */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fade}
            className="text-[12px] text-gray-500 space-y-2.5">
            <p className="text-[10px] text-[#b89d6a] tracking-[0.1em] mb-4">Contact</p>
            <p>경기도 수원시 영통구</p>
            <p className="heading-en text-[18px] text-white/70 !mt-4">010-7930-1332</p>
            <p className="text-[11px] text-gray-600">평일 10시 ~ 18시</p>
          </motion.div>

          {/* Links */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={fade}
            className="flex flex-col gap-3">
            <p className="text-[10px] text-[#b89d6a] tracking-[0.1em] mb-2">Services</p>
            {[
              { href: '/concierge', label: '컨시어지' },
              { href: '/photobooth', label: '포토부스' },
              { href: '/host', label: '전문사회' },
              { href: '/contact', label: '문의하기' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="text-[12px] text-gray-500 hover:text-white transition-colors w-fit">
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-gray-600">&copy; 2025 HARAM. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/haram_wedding" target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-gray-600 hover:text-white transition-colors">Instagram</a>
            <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-gray-600 hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
