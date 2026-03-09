'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const showBg = scrolled || !isHome;

  const links = [
    { href: '/concierge', label: '컨시어지' },
    { href: '/photobooth', label: '포토부스' },
    { href: '/host', label: '전문사회' },
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBg ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span
            className={`text-xl font-semibold tracking-wider transition-colors font-display ${
              showBg ? 'text-gray-900' : 'text-white'
            }`}
          >
            HARAM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] tracking-wide transition-colors hover:opacity-70 ${
                showBg ? 'text-gray-700' : 'text-white'
              } ${pathname === link.href ? 'font-medium' : 'font-light'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-[1.5px] transition-all ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] transition-all ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] transition-all ${showBg ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-gray-700 text-sm border-b border-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
