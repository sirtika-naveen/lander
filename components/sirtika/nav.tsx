'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Problem', href: '/#problem' },
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'Framework', href: '/#framework' },
    { label: 'The Program', href: '/#program' },
    { label: 'AI Platform', href: '/ai-platform' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#1A2744', borderBottom: '1px solid #2D3A5F' }}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="font-bold text-xl tracking-widest text-white">
          SIRTIKA™
        </a>

        {/* Desktop nav links - centered */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA button - right */}
        <div className="hidden md:block">
          <button
            className="px-6 py-2 font-semibold text-xs tracking-widest uppercase transition-all"
            style={{
              backgroundColor: '#C9A84C',
              color: '#1A2744',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#B8964A';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A84C';
            }}
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-4" style={{ backgroundColor: '#1A2744', borderColor: '#2D3A5F' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="w-full px-6 py-2 font-semibold text-xs tracking-widest uppercase transition-all mt-4"
            style={{
              backgroundColor: '#C9A84C',
              color: '#1A2744',
            }}
          >
            Book Strategy Call
          </button>
        </div>
      )}
    </header>
  );
}
