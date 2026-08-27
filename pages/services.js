import Link from 'next/link';

const WHATSAPP  = '+213563965871';
const TELEGRAM  = 'privet_allo';
const INSTAGRAM = 'ramzi.ay78';

const translationPrices = [
  { doc: '🛂 جواز السفر',                  rub: 1100, dzd: 4400 },
  { doc: '🎓 شهادة البكالوريا',             rub: 1300, dzd: 5200 },
  { doc: '📋 كشف نقاط البكالوريا',          rub: 1400, dzd: 5600 },
  { doc: '🏥 تحاليل طبية (بدون نوتاريوس)', rub: 900,  dzd: 3600 },
  { doc: '🏥 تحاليل طبية (مع النوتاريوس)', rub: 1300, dzd: 5200 },
  { doc: '🎓 ديبلوم ليسونس / ماستر',       rub: 1350, dzd: 5400 },
  { doc: '📋 كشف نقاط ليسونس / ماستر',    rub: 1500, dzd: 6000 },
];

const contacts = [
  {
    icon: '💬',
    label: 'واتساب',
    value: WHATSAPP,
    link: `https://wa.me/${WHATSAPP.replace('+', '')}`,
    color: '#25D366',
    sub: 'تواصل مباشر — الأسرع',
  },
  {
    icon: '✈️',
    label: 'تيليجرام',
    value: `@${TELEGRAM}`,
    link: `https://t.me/${TELEGRAM}`,
    color: '#0D9BD8',
    sub: 'مراسلة أو مكالمة',
  },
  {
    icon: '📸',
    label: 'إنستغرام',
    value: `@${INSTAGRAM}`,
    link: `https://instagram.com/${INSTAGRAM}`,
    color: '#E42F80',
    sub: 'تابعنا للتحديثات',
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section
        className="text-center text-white px-6 py-20"
        style={{ background: 'linear-gradient(135deg, #0D9BD8 0%, #E42F80 100%)' }}
      >
        <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
          خدماتنا للطلبة الجزائريين
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          التسجيل والترجمة الرسمية
        </h1>
        <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
          نتكفّل بتسجيلك الصحيح في منحة Open Doors وبترجمة وثائقك إلى اللغة الروسية —
          بأسعار شفافة ومناسبة.
        </p>
        {/* Quick contact buttons in hero */}
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={`https://wa.me/${WHATSAPP.replace('+', '')}`}
            target="_blank" rel="noopener"
            className="bg-white text-dark font-bold px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition flex items-center gap-2"
          >
            💬 واتساب
          </a>
          <a
            href={`https://t.me/${TELEGRAM}`}
            target="_blank" rel="noopener"
            className="bg-white/20 border border-white text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-white/30 transition flex items-center gap-2"
          >
            ✈️ تيليجرام
          </a>
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank" rel="noopener"
            className="bg-white/20 border border-white text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-white/30 transition flex items-center gap-2"
          >
            📸 إنستغرام
          </a>
        </div>
      </section>

      {/* Important disclaimer */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-sm text-amber-900">
          <strong className="text-base">⚠️ تنبيه مهم:</strong> خدمة التسجيل تعني{' '}
          <strong>ضمان التسجيل الصحيح والمكتمل</strong> في منصة Open Doors،
          وليست ضماناً للقبول أو الحصول على مقعد في المنحة — القبول يعتمد على تقييم اللجنة الرسمية لملفّك.
        </div>
      </section>

      {/* Registration Service */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-2xl shadow-card border-2 border-primary p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-br-2xl">
            ⭐ الأكثر طلباً
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-dark mb-3">
                🖊️ خدمة التسجيل الكامل في المنحة
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                نتولّى عنك إنشاء الحساب وملء جميع البيانات بدقة (الاسم من MRZ، تاريخ الميلاد، الجنسية)،
                إضافة المجالات العلمية، رفع المستندات، وكتابة خطاب الدوافع — حتى يصبح ملفّك
                جاهزاً للتقييم بشكل صحيح.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {[
                  'إنشاء الحساب بالبيانات الصحيحة من جواز السفر',
                  'ملء نموذج التسجيل وتحديد المسار المناسب',
                  'رفع المستندات التعليمية بالصيغة الصحيحة',
                  'مراجعة وتصحيح خطاب الدوافع (4 أسئلة) الذي تكتبه أنت، ثم رفعه بالصيغة الصحيحة',
                  'إضافة الإنجازات وتصنيفها في أنواعها الصحيحة',
                  'متابعة الملف حتى إغلاق باب التسجيل (1 نوفمبر 2026)',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-primary mt-0.5 flex-shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                ⚠️ هذه الخدمة تضمن <strong>التسجيل الصحيح</strong> فقط — وليس الحصول على مقعد في المنحة.
              </div>
            </div>

            {/* Price Card */}
            <div className="flex-shrink-0 text-center bg-primary/5 border-2 border-primary rounded-2xl p-6 min-w-[200px]">
              <div className="text-xs text-muted mb-3 font-medium">سعر الخدمة</div>

              {/* Price DZD */}
              <div className="text-4xl font-black text-primary leading-none">15,000</div>
              <div className="text-base font-bold text-dark mb-1">دينار جزائري</div>

              {/* Divider */}
              <div className="flex items-center gap-2 my-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-muted">أو</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Price RUB */}
              <div className="text-2xl font-black text-dark leading-none">5,000</div>
              <div className="text-sm font-bold text-muted mb-4">روبل روسي</div>

              {/* CTA buttons */}
              <a
                href={`https://wa.me/${WHATSAPP.replace('+', '')}`}
                target="_blank" rel="noopener"
                className="block bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition text-sm mb-2"
              >
                💬 واتساب
              </a>
              <a
                href={`https://t.me/${TELEGRAM}`}
                target="_blank" rel="noopener"
                className="block bg-primary text-white font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition text-sm"
              >
                ✈️ تيليجرام
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Translation Prices */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-dark mb-2">
            🌐 أسعار ترجمة الوثائق إلى الروسية
          </h2>
          <p className="text-muted text-sm mb-3">
            ترجمة رسمية معتمدة إلى اللغة الروسية
          </p>
          <div className="inline-block bg-green-50 border border-green-300 text-green-800 text-sm font-bold px-5 py-2 rounded-full">
            🎁 تخفيض خاص في أسعار الترجمة لمن يطلب خدمة التسجيل + الترجمة معاً
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-200">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-dark text-white text-sm font-bold p-4">
            <div>الوثيقة</div>
            <div className="text-center">بالروبل</div>
            <div className="text-center">بالدينار</div>
          </div>

          {translationPrices.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 p-4 text-sm border-b border-gray-100 items-center ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="font-medium text-dark">{row.doc}</div>
              <div className="text-center text-muted">{row.rub.toLocaleString()} ₽</div>
              <div className="text-center">
                <span className="bg-primary/10 text-primary font-black px-3 py-1 rounded-full text-sm">
                  {row.dzd.toLocaleString()} دج
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-dark mb-2">📱 وسائل التواصل</h2>
          <p className="text-muted text-sm">تواصل معنا عبر أي وسيلة تفضّلها</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.link}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 text-center hover:shadow-lg transition group"
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <div
                className="text-base font-black mb-1 group-hover:opacity-80 transition"
                style={{ color: c.color }}
              >
                {c.label}
              </div>
              <div className="text-dark font-bold text-sm mb-1">{c.value}</div>
              <div className="text-muted text-xs">{c.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Combined offer */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div
          className="rounded-2xl p-6 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #0D9BD8 0%, #E42F80 100%)' }}
        >
          <h3 className="text-xl font-black mb-2">💼 عرض مجمّع — التسجيل + الترجمة</h3>
          <p className="text-white/90 text-sm mb-2">
            خدمة التسجيل الكامل + ترجمة جميع وثائقك بأسعار مخفّضة.
          </p>
          <p className="text-lg font-black mb-4">
            🎁 تخفيض خاص على الترجمة عند طلب الخدمتين معاً
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP.replace('+', '')}`}
              target="_blank" rel="noopener"
              className="bg-white text-dark font-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition text-sm"
            >
              💬 واتساب
            </a>
            <a
              href={`https://t.me/${TELEGRAM}`}
              target="_blank" rel="noopener"
              className="bg-white/20 border border-white text-white font-bold px-6 py-2.5 rounded-full hover:bg-white/30 transition text-sm"
            >
              ✈️ تيليجرام
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-black text-dark mb-6 text-center">أسئلة شائعة حول الخدمة</h2>
        <div className="space-y-3">
          {[
            {
              q: 'هل ضمان التسجيل يعني ضمان القبول في المنحة؟',
              a: 'لا. نضمن تسجيلاً صحيحاً ومكتملاً يُقدَّم للتقييم. القبول يعتمد على نتائج المرحلة الأولى (تقييم الملف) والمرحلة الثانية (الاختبار)، وهي خارج نطاق خدمتنا.',
            },
            {
              q: 'ماذا تشمل خدمة التسجيل بالضبط؟',
              a: 'إنشاء الحساب بالبيانات الصحيحة، ملء النموذج، رفع الوثائق، كتابة خطاب الدوافع، إضافة الإنجازات، ومتابعة الملف حتى إغلاق التسجيل في 1 نوفمبر 2026.',
            },
            {
              q: 'هل الترجمة معتمدة رسمياً؟',
              a: 'نعم، الترجمة تُنجَز بواسطة مترجمين معتمدين إلى اللغة الروسية، وهي الصيغة المطلوبة لرفع المستندات في منصة Open Doors.',
            },
            {
              q: 'كيف أتواصل معكم؟',
              a: `عبر واتساب ${WHATSAPP}، أو تيليجرام @${TELEGRAM}، أو إنستغرام @${INSTAGRAM}.`,
            },
          ].map((f, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-200 p-5 group open:border-primary transition-all">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-bold text-dark text-sm">
                {f.q}
                <span className="text-primary text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="mt-3 text-muted text-sm leading-relaxed border-t border-gray-100 pt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
