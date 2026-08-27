export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10 mt-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Contact icons row */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://wa.me/213563965871"
            target="_blank" rel="noopener"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            💬 واتساب
          </a>
          <a
            href="https://t.me/privet_allo"
            target="_blank" rel="noopener"
            className="flex items-center gap-2 bg-[#0D9BD8] text-white font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            ✈️ @privet_allo
          </a>
          <a
            href="https://instagram.com/ramzi.ay78"
            target="_blank" rel="noopener"
            className="flex items-center gap-2 bg-[#E42F80] text-white font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            📸 @ramzi.ay78
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-5" />

        {/* Bottom text */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-1">🎓 دليل منحة Open Doors للطلبة الجزائريين — 2026–2027</p>
          <p className="text-xs text-gray-500">
            المرجع النهائي دائماً هو الموقع الرسمي:{' '}
            <a
              href="https://od.globaluni.ru"
              target="_blank" rel="noopener"
              className="text-primary underline hover:text-blue-300 transition"
            >
              od.globaluni.ru
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
