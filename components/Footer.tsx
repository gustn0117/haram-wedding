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
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-[14px] text-white/60 font-light font-serif italic">
            &ldquo;예식의 품질은 현장에서 결정됩니다&rdquo;
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
            <Link href="/contact"
              className="text-[10px] tracking-[0.2em] text-haram-gold border border-haram-gold/30 px-8 py-2.5 rounded-full font-montserrat uppercase
                hover:bg-haram-gold hover:text-haram-navy transition-all duration-500">
              상담 문의
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-6 h-6 opacity-60">
                <Image
                  src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                  alt="HARAM"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold tracking-[0.18em] font-display">HARAM</h3>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 font-light leading-[1.8] mb-4">
              Precious Person in Heaven
            </p>
            <div className="w-6 h-[1px] bg-haram-gold/30" />
          </div>

          {/* Company Info */}
          <div className="text-[11px] text-gray-500 space-y-2.5 font-light">
            <p className="text-[9px] tracking-[0.2em] text-gray-600 uppercase mb-3 font-montserrat">Company</p>
            <p>상호명: 하람</p>
            <p>대표: 김영진</p>
            <p>사업자등록번호: 412-21-01283</p>
            <p>통신판매업신고번호: 2025-용인기흥-01511</p>
          </div>

          {/* Contact */}
          <div className="text-[11px] text-gray-500 space-y-2.5 font-light">
            <p className="text-[9px] tracking-[0.2em] text-gray-600 uppercase mb-3 font-montserrat">Contact</p>
            <p>소재지: 경기도 수원시 영통구</p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-white/70 text-[13px] font-montserrat">010-7930-1332</p>
              <p className="text-gray-600 mt-1 text-[10px]">평일 10시 ~ 18시</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[9px] tracking-[0.2em] text-gray-600 uppercase mb-1 font-montserrat">Menu</p>
            {[
              { href: '/concierge', label: '컨시어지(예식도우미)' },
              { href: '/photobooth', label: '포토부스' },
              { href: '/host', label: '전문사회' },
              { href: '/contact', label: '문의하기' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="text-[11px] text-gray-500 hover:text-haram-gold transition-colors duration-500 font-light">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[9px] text-gray-600 tracking-wider font-montserrat">
            &copy; 2025 HARAM MANAGEMENT. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-haram-gold/30" />
            <div className="w-1 h-1 rounded-full bg-haram-gold/20" />
            <div className="w-1 h-1 rounded-full bg-haram-gold/10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
