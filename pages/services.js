import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/213563965871?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات التسجيل والترجمة لمنحة روسيا Open Doors');
const TELEGRAM = 'privet_allo';
const INSTAGRAM = 'ramzi.ay78';

const translationServices = [
  { doc: '🛂 جواز السفر (صفحة البيانات)', dzd: 4400 },
  { doc: '🎓 شهادة البكالوريا', dzd: 5200 },
  { doc: '📋 كشف نقاط البكالوريا', dzd: 5600 },
  { doc: '🎓 ديبلوم / شهادة ليسانس', dzd: 5400 },
  { doc: '📋 كشف نقاط ليسانس', dzd: 6000 },
  { doc: '🎓 ديبلوم / شهادة ماستر', dzd: 5400 },
  { doc: '📋 كشف نقاط ماستر', dzd: 6000 },
  { doc: '🏥 تقرير / تحاليل طبية', dzd: 3600 },
];

const contacts = [
  {
    icon: '💬',
    label: 'واتساب',
    value: '+213563965871',
    link: WHATSAPP_URL,
    sub: 'تواصل مباشر — الأسرع',
  },
  {
    icon: '✈️',
    label: 'تيليجرام',
    value: `@${TELEGRAM}`,
    link: `https://t.me/${TELEGRAM}`,
    sub: 'مراسلة واستفسارات',
  },
  {
    icon: '📸',
    label: 'إنستغرام',
    value: `@${INSTAGRAM}`,
    link: `https://instagram.com/${INSTAGRAM}`,
    sub: 'متابعة التحديثات والنصائح',
  },
];

export default function Services() {
  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden text-center py-16 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">
          خدمات مخصصة للطلبة الجزائريين 🇩🇿
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          خدمات التسجيل والترجمة الرسمية
        </h1>
        <p className="text-[#8fa3bb] text-sm sm:text-base max-w-xl mx-auto mb-6">
          نتكفّل بجميع مراحل تسجيلك الدقيق في منحة Open Doors وبترجمة كافة وثائقك الأكاديمية إلى الروسية وفق المعايير المطلوبة.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="bg-[#25D366] text-white font-bold px-5 py-2 rounded-full text-xs hover:opacity-90 transition flex items-center gap-2"
          >
            💬 تواصل عبر واتساب
          </a>
          <a
            href={`https://t.me/${TELEGRAM}`}
            target="_blank"
            rel="noopener"
            className="bg-[#0D9BD8] text-white font-bold px-5 py-2 rounded-full text-xs hover:opacity-90 transition flex items-center gap-2"
          >
            ✈️ تيليجرام
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* ── Disclaimer ── */}
        <div className="card card-warning my-0">
          <div className="card-badge">⚠️ تنبيه وأمانة مهنية</div>
          <p className="text-sm">
            خدمة التسجيل تعني <strong>ضمان التسجيل الصحيح والمكتمل واستيفاء كافة الشروط الرسمية</strong> في منصة Open Doors وتجنب أخطاء الإقفال في الهوية وتنسيق خطابات الدوافع، وليست ضماناً للقبول النهائي — فالقبول يعتمد حصراً على تقييم اللجنة الأكاديمية للملف واجتياز اختبار المرحلة الثانية.
          </p>
        </div>

        {/* ── Registration Service Card ── */}
        <section className="bg-[#112236] border-2 border-gold rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-card">
          <div className="absolute top-0 left-0 bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-br-xl">
            ⭐ الخدمة الأكثر طلباً
          </div>
          <h2 className="text-2xl font-black text-white mb-1 mt-4">🖊️ خدمة التسجيل الكامل في المنحة</h2>
          <div className="text-3xl font-black text-gold mt-2 mb-1">
            15,000 دج
          </div>
          <p className="text-[#8fa3bb] text-sm leading-relaxed mb-6">
            نتولّى عنك إنشاء الحساب، نقل وتدقيق بيانات الهوية من جواز السفر، ضبط المسارات الدراسية والمجالات، صياغة ومراجعة خطابات الدوافع (Motivation Letter) للأسئلة الأربعة، رفع المستندات وترتيب الإنجازات باحترافية حتى إغلاق التسجيل.
          </p>
          <ul className="space-y-2.5 text-sm text-[#e8edf2] mb-6">
            {[
              'إنشاء الحساب بالبيانات اللاتينية الدقيقة المطابقة لجواز السفر',
              'اختيار المسار الأكاديمي المناسب وضبط المجالات العلمية المتناسقة',
              'رفع وتنسيق المستندات والشهادات التعليمية وكشوف النقاط',
              'صياغة ومراجعة خطاب الدوافع للأسئلة الأربعة وضمان خلوه من الاقتباس النصي',
              'إضافة الإنجازات وتصنيفها في الأنواع الثمانية الصحيحة',
              'متابعة الملف والتأكد من إرساله قبل 1 نوفمبر 2026',
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className="text-gold font-bold mt-0.5 flex-shrink-0">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="block text-center bg-[#25D366] text-white font-bold py-3 rounded-xl hover:opacity-90 transition text-sm"
          >
            💬 اطلب خدمة التسجيل عبر واتساب
          </a>
        </section>

        {/* ── Translation Pricing Table ── */}
        <section>
          <h2 className="text-2xl font-black text-white mb-2">🌐 أسعار ترجمة الوثائق إلى الروسية</h2>
          <p className="text-[#8fa3bb] text-sm mb-6">
            ترجمة رسمية دقيقة لجميع وثائقك الأكاديمية بصيغة مقبولة لدى لجان منحة Open Doors والجامعات الروسية.
          </p>
          <div className="bg-[#112236] rounded-2xl border border-[#1e3a56] overflow-hidden shadow-card max-w-2xl mx-auto">
            <div className="grid grid-cols-2 bg-[#0d1b2a] px-5 py-3 text-xs font-bold text-gold uppercase tracking-wider border-b border-[#1e3a56]">
              <span>الوثيقة</span>
              <span className="text-center">السعر بالدينار (DZD)</span>
            </div>
            {translationServices.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-5 py-3.5 items-center text-sm border-b border-[#1e3a56]/50 last:border-0 ${
                  i % 2 === 0 ? 'bg-[#112236]' : 'bg-[#0e1e31]'
                }`}
              >
                <span className="text-[#e8edf2] text-xs sm:text-sm">{item.doc}</span>
                <span className="text-center text-gold font-mono font-bold">{item.dzd.toLocaleString()} دج</span>
              </div>
            ))}
            <div className="px-5 py-3 bg-gold/10 border-t border-gold/40 text-xs text-amber-300 font-semibold text-center">
              🎁 خصم خاص على الترجمة عند طلب خدمة التسجيل معاً — اسأل عنه عند التواصل.
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-block bg-gold text-navy font-bold px-7 py-3 rounded-full text-sm hover:bg-gold-light transition shadow-gold"
            >
              اطلب ترجمة وثائقك الآن ←
            </a>
          </div>
        </section>

        {/* ── Direct Contacts ── */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white mb-1">📱 قنوات التواصل المباشر</h2>
            <p className="text-[#8fa3bb] text-xs">تواصل معنا عبر القناة المفضلة لديك للاستفسار أو بدء التسجيل</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener"
                className="bg-[#112236] rounded-2xl border border-[#1e3a56] p-6 text-center hover:border-gold transition group shadow-card"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="text-base font-bold text-white mb-1 group-hover:text-gold transition">{c.label}</div>
                <div className="text-gold font-mono text-sm mb-1">{c.value}</div>
                <div className="text-[#8fa3bb] text-xs">{c.sub}</div>
              </a>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pb-8">
          <h2 className="text-xl font-black text-white mb-6 text-center">أسئلة شائعة حول الخدمة</h2>
          <div className="space-y-3">
            {[
              {
                q: 'هل ضمان التسجيل يعني ضمان القبول النهائي في المنحة؟',
                a: 'لا. نضمن لك تسجيلاً صحيحاً 100% ومطابقاً لشروط المنحة وتفادي أخطاء الإقفال في الهوية وتنسيق الملف لتقديمه بأفضل صورة ممكنة. القبول النهائي يعتمد على نتائج تقييم اللجنة الأكاديمية واجتياز اختبار المرحلة الثانية.',
              },
              {
                q: 'ماذا تشمل خدمة التسجيل الكامل بالضبط؟',
                a: 'إنشاء الحساب، تدقيق بيانات الهوية، ملء الاستمارة وتحديد المسار، مراجعة خطاب الدوافع للأسئلة الأربعة، رفع المستندات وترتيب الإنجازات ومتابعة الملف حتى الإرسال النهائي.',
              },
              {
                q: 'هل الترجمة معتمدة ومقبولة لدى الجامعات الروسية؟',
                a: 'نعم، الترجمة تُنجز إلى اللغة الروسية بدقة واحترافية وفق الصيغ الرسمية المعتمدة لرفع المستندات في منصة Open Doors.',
              },
              {
                q: 'كيف يتم الدفع وتسليم الوثائق؟',
                a: 'يمكن الدفع عبر CCP / بريدي موب بالدينار الجزائري. يتم التسليم والمتابعة مباشرة عبر واتساب أو تيليجرام.',
              },
            ].map((f, i) => (
              <details
                key={i}
                className="bg-[#112236] rounded-xl border border-[#1e3a56] p-5 group open:border-gold transition-all"
              >
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-bold text-white text-sm">
                  {f.q}
                  <span className="text-gold text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="mt-3 text-[#8fa3bb] text-xs sm:text-sm leading-relaxed border-t border-[#1e3a56] pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
