import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0d1b2a]/95 border-b border-[#1e3a56] backdrop-blur-md px-4 sm:px-8 flex items-center justify-between h-14">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-gold font-bold text-sm sm:text-base tracking-wider">
          دليل الطلبة الجزائريين DZ
        </span>
      </Link>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/services"
          className="bg-gold text-navy font-bold px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs hover:bg-gold-light transition shadow-sm"
        >
          🛎️ خدمة التسجيل والترجمة
        </Link>
        <a
          href="https://od.globaluni.ru"
          target="_blank"
          rel="noopener"
          className="border border-[#1e3a56] text-[#8fa3bb] hover:text-gold hover:border-gold font-medium px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs transition hidden xs:inline-block"
        >
          الموقع الرسمي ↗
        </a>
      </div>
    </nav>
  );
}
