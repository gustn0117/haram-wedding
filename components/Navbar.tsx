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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const showBg = scrolled || !isHome;

  const links = [
    { href: '/concierge', label: '컨시어지(예식도우미)' },
    { href: '/photobooth', label: '포토부스' },
    { href: '/host', label: '전문사회' },
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBg
            ? 'bg-white/97 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity">
              <Image
                src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
                alt="HARAM"
                fill
                className={`object-contain transition-all duration-300 ${showBg ? '' : 'brightness-200'}`}
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-[13px] font-semibold tracking-[0.15em] transition-colors font-display ${
                showBg ? 'text-gray-900' : 'text-white'
              }`}>
                HARAM
              </span>
              <span className={`text-[8px] tracking-[0.08em] font-light transition-colors ${
                showBg ? 'text-gray-400' : 'text-white/50'
              }`}>
                Precious Person in Heaven
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`relative text-[12.5px] tracking-[0.03em] transition-all duration-300 hover:opacity-100 ${
                  showBg ? 'text-gray-500 hover:text-gray-900' : 'text-white/70 hover:text-white'
                } ${pathname === link.href ? 'opacity-100 font-medium' : 'font-light opacity-85'}`}>
                {link.label}
                {pathname === link.href && (
                  <motion.div layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-haram-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-5 h-[1px] transition-all duration-300 ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="pt-24 px-8">
              {links.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <Link href={link.href}
                    className={`block py-5 text-2xl font-light border-b border-gray-100 transition-colors ${
                      pathname === link.href ? 'text-haram-gold' : 'text-gray-900'
                    }`}
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="mt-12">
                <p className="text-[11px] tracking-[0.2em] text-haram-gold mb-3 font-montserrat uppercase">Contact</p>
                <p className="text-lg text-gray-900 font-light">010-7930-1332</p>
                <p className="mt-1 text-sm text-gray-400 font-light">평일 10시 ~ 18시</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
