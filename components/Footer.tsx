'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-haram-dark text-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-haram-gold/30 to-transparent" />

      {/* Pre-footer quote */}
      <div className="py-16 md:py-20 text-center border-b border-white/5">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
          className="text-[18px] md:text-[24px] font-serif italic text-white/30 tracking-wide">
          &ldquo;Precious Person in Heaven&rdquo;
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative w-5 h-5 opacity-70">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM" fill className="object-contain brightness-200"
                />
              </div>
              <span className="text-[14px] font-medium tracking-[0.15em]">HARAM</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-[1.9] mb-6">
              예식의 품질은 현장에서 결정됩니다
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/haram_wedding" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-haram-gold/50 hover:text-haram-gold transition-all duration-300 text-gray-500 text-[12px]">
                IG
              </a>
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-haram-gold/50 hover:text-haram-gold transition-all duration-300 text-gray-500 text-[12px]">
                N
              </a>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.08} variants={fade}
            className="text-[12px] text-gray-500 space-y-2.5">
            <p className="text-[10px] tracking-[0.15em] text-haram-gold/60 uppercase mb-4">Company</p>
            <p>상호명: 하람 · 대표: 김영진</p>
            <p>사업자등록번호: 412-21-01283</p>
            <p>통신판매업: 2025-용인기흥-01511</p>
          </motion.div>

          {/* Contact */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.16} variants={fade}
            className="text-[12px] text-gray-500 space-y-2.5">
            <p className="text-[10px] tracking-[0.15em] text-haram-gold/60 uppercase mb-4">Contact</p>
            <p>경기도 수원시 영통구</p>
            <p className="text-white/80 text-[16px] font-serif tracking-wide mt-4">010-7930-1332</p>
            <p className="text-gray-600 text-[11px]">평일 10시 ~ 18시</p>
          </motion.div>

          {/* Services */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.24} variants={fade}
            className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.15em] text-haram-gold/60 uppercase mb-2">Services</p>
            {[
              { href: '/concierge', label: '컨시어지', en: 'Concierge' },
              { href: '/photobooth', label: '포토부스', en: 'Photobooth' },
              { href: '/host', label: '전문사회', en: 'Host' },
              { href: '/contact', label: '문의하기', en: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="group flex items-center gap-3 text-[12px] text-gray-500 hover:text-white transition-colors duration-300 w-fit">
                <span className="w-3 h-[1px] bg-gray-700 group-hover:bg-haram-gold group-hover:w-5 transition-all duration-300" />
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600">&copy; 2025 HARAM. All Rights Reserved.</p>
          <p className="text-[10px] text-gray-700 tracking-wider">WEDDING MANAGEMENT</p>
        </div>
      </div>
    </footer>
  );
}
