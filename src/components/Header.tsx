'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
              Hillali Trading
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#00CCFF] transition-colors drop-shadow-md">
              Inicio
            </Link>
            <Link href="/funding" className="text-white hover:text-[#00CCFF] transition-colors drop-shadow-md">
              Financiamiento
            </Link>
            <Link href="/indicators" className="text-white hover:text-[#00CCFF] transition-colors drop-shadow-md">
              Indicadores
            </Link>
            <Link href="/mentorship" className="text-white hover:text-[#00CCFF] transition-colors drop-shadow-md">
              Mentoría
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00CCFF] focus:outline-none drop-shadow-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t shadow-lg">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-[#C71585] transition-colors">
                Inicio
              </Link>
              <Link href="/funding" className="block px-3 py-2 text-gray-900 hover:text-[#C71585] transition-colors">
                Financiamiento
              </Link>
              <Link href="/indicators" className="block px-3 py-2 text-gray-900 hover:text-[#C71585] transition-colors">
                Indicadores
              </Link>
              <Link href="/mentorship" className="block px-3 py-2 text-gray-900 hover:text-[#C71585] transition-colors">
                Mentoría
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}