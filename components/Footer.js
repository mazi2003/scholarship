import Link from 'next/link';

export default function Footer() {
  const WHATSAPP_URL = 'https://wa.me/213563965871?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات التسجيل والترجمة لمنحة روسيا Open Doors');

  return (
    <footer className="bg-[#080f18] border-t border-[#1e3a56] py-12 px-6 mt-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Contact buttons */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2 rounded-full text-xs hover:opacity-90 transition"
          >
            💬 واتساب (+213563965871)
          </a>
          <a
            href="https://t.me/privet_allo"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-[#0D9BD8] text-white font-bold px-5 py-2 rounded-full text-xs hover:opacity-90 transition"
          >
            ✈️ تيليجرام (@privet_allo)
          </a>
          <a
            href="https://instagram.com/ramzi.ay78"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-[#E42F80] text-white font-bold px-5 py-2 rounded-full text-xs hover:opacity-90 transition"
          >
            📸 إنستغرام (@ramzi.ay78)
          </a>
          <Link
            href="/services"
            className="flex items-center gap-2 bg-gold text-navy font-bold px-5 py-2 rounded-full text-xs hover:bg-gold-light transition"
          >
            💼 خدمات التسجيل والترجمة
          </Link>
        </div>

        <p className="text-xs text-[#8fa3bb] mb-2">
          إصدار 1.2 · آخر مراجعة للمعلومات والواجهة 21·08·2026 · دليل منحة Open Doors للطلبة الجزائريين 🇩🇿
        </p>
        <p className="text-xs text-[#4a6a88] max-w-xl mx-auto leading-relaxed">
          الموقع والواجهة ممكن يتغيروا خلال الموسم — المرجع النهائي دائماً هو الموقع الرسمي:{' '}
          <a
            href="https://od.globaluni.ru"
            target="_blank"
            rel="noopener"
            className="text-gold underline hover:text-gold-light"
          >
            od.globaluni.ru
          </a>
        </p>
      </div>
    </footer>
  );
}
