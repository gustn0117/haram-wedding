'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="https://framerusercontent.com/images/lVHB6hvbITPzgZZf9kn72Ij4vE.png"
              alt="HARAM Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-haram-gold">HR</span>
            <span className="text-xs text-gray-600 font-light">Precious Person in Heaven</span>
          </div>
        </Link>

        {/* Menu */}
        <div className={`flex gap-8 text-sm font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          <Link
            href="/concierge"
            className={`hover:text-haram-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            컨시어지(예식도우미)
          </Link>
          <Link
            href="/photobooth"
            className={`hover:text-haram-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            포토부스
          </Link>
          <Link
            href="/host"
            className={`hover:text-haram-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            전문사회
          </Link>
          <Link
            href="/contact"
            className={`hover:text-haram-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            문의하기
          </Link>
        </div>
      </div>
    </nav>
  );
}
