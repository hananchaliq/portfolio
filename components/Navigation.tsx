'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Home,
  User,
  Route,
  Wrench,
  FolderOpen,
  Send,
} from 'lucide-react';

const navItems = [
  { href: '#awal', label: 'Awal', Icon: Home },
  { href: '#siapa-saya', label: 'Siapa Saya', Icon: User },
  { href: '#jejak-saya', label: 'Jejak Saya', Icon: Route },
  { href: '#senjata', label: 'Senjata Utama', tooltipLabel: 'Senjata', Icon: Wrench },
  { href: '#ruang-karya', label: 'Ruang Karya', Icon: FolderOpen },
  { href: '#hubungi-saya', label: 'Terhubung dengan Saya', Icon: Send },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="navigasi">
      {/* Desktop Vertical Sidebar */}
      <nav className="fade-left duration-1500 hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 p-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-16">
        {navItems.map((item) => {
          const IconComponent = item.Icon;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group relative flex items-center justify-center w-12 h-12 text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute left-20 px-4 py-2 bg-black/90 border border-white/10 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 -translate-x-3 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible transition-all duration-300 pointer-events-none shadow-2xl">
                {item.tooltipLabel || item.label}
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-black rotate-45 border-l border-b border-white/10" />
              </div>
            </a>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <nav id="mobile-nav" className="fade-bot duration-1500 sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div ref={wrapperRef} className="relative w-[90vw] justify-center flex" id="navWrapper">
          {/* PILLS MAIN BAR */}
          <div className="w-[11rem] flex items-center justify-between px-5 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full shadow-2xl">
            {/* LOGO kiri */}
            <a href="#awal" className="text-white font-bold tracking-widest text-sm">
              HANAN NRC
            </a>

            {/* TOGGLE kanan */}
            <button
              id="toggleBtn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle navigation"
              className="relative w-8 h-6 flex flex-col justify-evenly items-center group cursor-pointer"
            >
              <span
                className={`bar h-[2px] w-[70%] bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`bar h-[2px] w-[70%] bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </button>
          </div>

          {/* MENU */}
          <div
            id="menu"
            className={`absolute left-0 bottom-full mb-2 w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom transition-all duration-300 ${
              isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'
            }`}
          >
            {navItems.map((item) => {
              const IconComponent = item.Icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="menu-item flex items-center gap-3 px-5 py-3 text-white hover:bg-white/10 transition-colors"
                >
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
