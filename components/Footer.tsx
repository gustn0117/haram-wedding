'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-haram-navy text-white relative overflow-hidden">
      {/* Top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-haram-gold/30 to-transparent" />

      {/* Pre-footer CTA strip */}
      <div className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center md:text-left">
            <p className="text-[20px] md:text-[24px] font-light text-white/90 font-serif italic leading-relaxed">
              &ldquo;예식의 품질은 현장에서 결정됩니다&rdquo;
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <Link href="/contact"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-haram-gold border border-haram-gold/30 px-8 py-3 rounded-full font-montserrat uppercase
                hover:bg-haram-gold hover:text-haram-navy transition-all duration-500">
              상담 문의
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative w-6 h-6 opacity-60">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
              <h3 className="text-[15px] font-semibold tracking-[0.18em] font-display">HARAM</h3>
            </div>
            <p className="text-[12px] text-gray-500 font-light leading-[2] mb-6 max-w-[280px]">
              결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를 경험을 바탕으로 관리하는 회사입니다.
            </p>
            <div className="w-8 h-[1px] bg-haram-gold/30" />
          </div>

          {/* Company Info */}
          <div className="md:col-span-3 text-[11px] text-gray-500 space-y-2.5 font-light">
            <p className="text-[9px] tracking-[0.2em] text-haram-gold/60 uppercase mb-4 font-montserrat font-medium">Company</p>
            <p>상호명: 하람</p>
            <p>대표: 김영진</p>
            <p>사업자등록번호: 412-21-01283</p>
            <p>통신판매업신고번호: 2025-용인기흥-01511</p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 text-[11px] text-gray-500 space-y-2.5 font-light">
            <p className="text-[9px] tracking-[0.2em] text-haram-gold/60 uppercase mb-4 font-montserrat font-medium">Contact</p>
            <p>소재지: 경기도 수원시 영통구</p>
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-white/70 text-[14px] font-montserrat tracking-wide">010-7930-1332</p>
              <p className="text-gray-600 mt-1.5 text-[10px]">평일 10시 ~ 18시</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <p className="text-[9px] tracking-[0.2em] text-haram-gold/60 uppercase mb-2 font-montserrat font-medium">Menu</p>
            {[
              { href: '/concierge', label: '컨시어지(예식도우미)' },
              { href: '/photobooth', label: '포토부스' },
              { href: '/host', label: '전문사회' },
              { href: '/contact', label: '문의하기' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="text-[11px] text-gray-500 hover:text-haram-gold transition-colors duration-500 font-light hover-line w-fit">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] text-gray-600 tracking-wider font-montserrat">
            &copy; 2025 HARAM MANAGEMENT. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-haram-gold/30" />
            <div className="w-1 h-1 rounded-full bg-haram-gold/20" />
            <div className="w-1 h-1 rounded-full bg-haram-gold/10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
