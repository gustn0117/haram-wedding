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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const showBg = scrolled || !isHome;

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
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBg
            ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-100/80 shadow-sm shadow-black/[0.02]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          {/* Logo – pure text, serif monogram style */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className={`logo-text transition-colors duration-500 ${
              showBg ? 'text-haram-dark' : 'text-white'
            }`}>
              H
            </span>
            <span className={`logo-divider transition-colors duration-500 ${
              showBg ? 'text-haram-dark' : 'text-white'
            }`} />
            <div className="flex flex-col">
              <span className={`text-[11px] font-medium tracking-[0.18em] transition-colors duration-500 ${
                showBg ? 'text-haram-dark' : 'text-white'
              }`}>
                HARAM
              </span>
              <span className={`logo-sub transition-colors duration-500 ${
                showBg ? 'text-haram-dark' : 'text-white'
              }`}>
                Wedding
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`relative text-[12px] tracking-[0.05em] transition-colors duration-300 py-1 group/link ${
                  showBg
                    ? pathname === link.href ? 'text-haram-dark' : 'text-gray-400 hover:text-haram-dark'
                    : pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
                }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-haram-gold transition-all duration-500 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover/link:w-full'
                }`} />
              </Link>
            ))}
            <Link href="/contact"
              className={`text-[11px] tracking-[0.1em] px-6 py-2.5 transition-all duration-500 group/btn flex items-center gap-2 ${
                showBg
                  ? 'bg-haram-dark text-white hover:bg-haram-gold'
                  : 'border border-white/25 text-white/80 hover:border-haram-gold hover:text-haram-gold'
              }`}>
              <span>문의하기</span>
              <svg className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden relative w-7 h-7 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? 'rotate-45' : '-translate-y-[5px]'}`} />
            <span className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? '-rotate-45' : 'translate-y-[5px]'}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="pt-28 px-8 h-full flex flex-col">
              <div className="flex-1 space-y-0">
                {[...links, { href: '/contact', label: '문의하기' }].map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}>
                    <Link href={link.href}
                      className={`flex items-center justify-between py-5 text-[18px] border-b border-gray-100 group/mlink ${
                        pathname === link.href ? 'text-haram-gold' : 'text-haram-dark'
                      }`}
                      onClick={() => setMobileOpen(false)}>
                      <span>{link.label}</span>
                      <svg className="w-4 h-4 text-gray-300 group-hover/mlink:text-haram-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div className="pb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}>
                <div className="w-8 h-[1px] bg-haram-gold mb-6" />
                <p className="text-[22px] font-serif text-haram-dark tracking-wider">010-7930-1332</p>
                <p className="mt-2 text-[12px] text-gray-400">평일 10시 ~ 18시</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
