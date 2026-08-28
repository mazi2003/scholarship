export default function FloatingWhatsApp() {
  const WHATSAPP_URL = 'https://wa.me/213563965871?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات التسجيل والترجمة لمنحة روسيا Open Doors');

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <span className="text-2xl leading-none">💬</span>
      <span className="text-xs font-bold font-body hidden sm:inline-block">
        تواصل معنا للاستفسار والتسجيل
      </span>
      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
    </a>
  );
}
