'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const bg = scrolled || !isHome;

  const links = [
    { href: '/concierge', label: '컨시어지' },
    { href: '/photobooth', label: '포토부스' },
    { href: '/host', label: '전문사회' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          bg
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className={`heading-en text-[22px] font-medium transition-colors duration-300 ${
              bg ? 'text-[#1a1a1a]' : 'text-white'
            }`}>
              HARAM
            </span>
            <span className={`text-[9px] tracking-[0.15em] transition-colors duration-300 ${
              bg ? 'text-gray-400' : 'text-white/40'
            }`}>
              Wedding
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-[13px] transition-colors duration-300 ${
                  bg
                    ? pathname === link.href ? 'text-[#1a1a1a]' : 'text-gray-400 hover:text-[#1a1a1a]'
                    : pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className={`text-[12px] px-6 py-2.5 transition-all duration-300 ${
                bg
                  ? 'bg-[#1a1a1a] text-white hover:bg-[#b89d6a]'
                  : 'border border-white/20 text-white/70 hover:border-[#b89d6a] hover:text-[#b89d6a]'
              }`}>
              문의하기
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden relative w-6 h-6 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${bg ? 'bg-[#1a1a1a]' : 'bg-white'} ${mobileOpen ? 'rotate-45' : '-translate-y-[4px]'}`} />
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${bg ? 'bg-[#1a1a1a]' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${bg ? 'bg-[#1a1a1a]' : 'bg-white'} ${mobileOpen ? '-rotate-45' : 'translate-y-[4px]'}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="pt-24 px-8 h-full flex flex-col">
              <div className="flex-1 space-y-0">
                {[...links, { href: '/contact', label: '문의하기' }].map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}>
                    <Link href={link.href}
                      className={`flex items-center justify-between py-5 border-b border-gray-100 ${
                        pathname === link.href ? 'text-[#b89d6a]' : 'text-[#1a1a1a]'
                      }`}
                      onClick={() => setMobileOpen(false)}>
                      <span className="text-[18px] font-light">{link.label}</span>
                      <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div className="pb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}>
                <p className="heading-en text-[22px] text-[#1a1a1a]">010-7930-1332</p>
                <p className="text-[11px] text-gray-400 mt-2">평일 10시 ~ 18시</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
