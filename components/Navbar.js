import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-lg sm:text-xl tracking-tight">
            Open Doors
          </span>
          <span className="text-dark text-xs sm:text-sm font-medium hidden sm:block">| دليل الطلبة الجزائريين</span>
        </a>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/services"
            className="bg-pink text-white font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            🛎️ اطلب خدمة التسجيل
          </Link>
          <a
            href="https://od.globaluni.ru"
            target="_blank" rel="noopener"
            className="border border-primary text-primary font-semibold px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition"
          >
            الموقع الرسمي ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-dark text-2xl p-1"
          aria-label="القائمة"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="block bg-pink text-white font-bold px-5 py-3 rounded-xl text-center text-sm"
          >
            🛎️ اطلب خدمة التسجيل
          </Link>
          <a
            href="https://od.globaluni.ru"
            target="_blank" rel="noopener"
            className="block border border-primary text-primary font-semibold px-5 py-3 rounded-xl text-center text-sm"
          >
            الموقع الرسمي ↗
          </a>
        </div>
      )}
    </nav>
  );
}
