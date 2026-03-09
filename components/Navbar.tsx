'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBg
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-6 h-6">
              <Image
                src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                alt="HARAM"
                fill
                className={`object-contain transition-all duration-500 ${showBg ? '' : 'brightness-200'}`}
              />
            </div>
            <span className={`text-[14px] font-medium tracking-[0.15em] transition-colors duration-500 ${
              showBg ? 'text-haram-dark' : 'text-white'
            }`}>
              HARAM
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-[13px] transition-colors duration-300 ${
                  showBg
                    ? pathname === link.href ? 'text-haram-dark font-normal' : 'text-gray-400 hover:text-haram-dark'
                    : pathname === link.href ? 'text-white font-normal' : 'text-white/50 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden relative w-7 h-7 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`absolute block w-4.5 h-[1.5px] transition-all duration-300 rounded-full ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute block w-4.5 h-[1.5px] transition-all duration-300 rounded-full ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-4.5 h-[1.5px] transition-all duration-300 rounded-full ${showBg ? 'bg-haram-dark' : 'bg-white'} ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </motion.nav>

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
                {links.map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}>
                    <Link href={link.href}
                      className={`block py-5 text-[18px] border-b border-gray-100 ${
                        pathname === link.href ? 'text-haram-gold font-normal' : 'text-haram-dark'
                      }`}
                      onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="pb-10">
                <p className="text-[18px] text-haram-dark tracking-wide">010-7930-1332</p>
                <p className="mt-1 text-[12px] text-gray-400">평일 10시 ~ 18시</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
