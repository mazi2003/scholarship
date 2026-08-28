import Link from 'next/link';

const tracks = [
  {
    name: "Bachelor's (ليسانس)",
    age: '16–23 سنة',
    qual: 'شهادة البكالوريا الجزائرية (أو في طور الحصول عليها)',
    stages: 'مرحلتان (2)',
    prize: 'مقعد دراسي ممول بالكامل ضمن الحصة الحكومية الروسية',
    color: 'border-gold bg-[#112236]',
  },
  {
    name: "Master's (ماستر)",
    age: '20–33 سنة',
    qual: 'شهادة ليسانس (أو في سنة التخرج L3)',
    stages: 'مرحلتان (2)',
    prize: 'مقعد دراسي ممول بالكامل ضمن الحصة الحكومية الروسية',
    color: 'border-[#1e3a56] bg-[#112236]',
  },
  {
    name: 'Doctoral (دكتوراه)',
    age: '22–35 سنة',
    qual: 'شهادة ماستر أو مهندس دولة (أو في سنة التخرج M2)',
    stages: '3 مراحل',
    prize: 'مقعد دراسي وبحثي ممول ضمن الحصة الحكومية الروسية',
    color: 'border-[#1e3a56] bg-[#112236]',
  },
  {
    name: 'Postdoctoral (ما بعد الدكتوراه)',
    age: '24–39 سنة',
    qual: 'شهادة دكتوراه مُكتملة (PhD / Doctor of Sciences)',
    stages: '3 مراحل',
    prize: 'موقع بحثي ممول (وليس مقعداً دراسياً)',
    color: 'border-amber-500/50 bg-[#112236]',
  },
];

const fields = [
  'Clinical Medicine and Public Health',
  'Biology and Biotechnology',
  'Applied Mathematics and Artificial Intelligence',
  'Computer and Data Science',
  'Engineering and Technology',
  'Urbanism and Civil Engineering',
  'Economics and Econometrics',
  'Business and Management',
  'Social Sciences',
  'Humanities',
  'Law',
  'Linguistics and Languages',
  'Arts and Culture',
  'Education',
];

export default function Scholarship() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-center py-16 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">
          Open Doors 2026–2027 · دليل الطلبة الجزائريين 🇩🇿
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          عن منحة Open Doors الروسية
        </h1>
        <p className="text-[#8fa3bb] text-sm sm:text-base max-w-2xl mx-auto">
          أولمبياد أكاديمي دولي يتيح للطلبة الأجانب المتميزين فرصة الدراسة والبحث في روسيا عبر الحصة الحكومية الروسية —{' '}
          <strong className="text-gold">مجانية بالكامل، لا توجد أي رسوم مشاركة.</strong>
        </p>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-[#112236] rounded-2xl shadow-card border border-[#1e3a56] p-6 sm:p-8 mb-10">
          <h2 className="text-gold font-bold text-xl sm:text-2xl mb-4">ما هي منحة Open Doors؟</h2>
          <p className="text-[#8fa3bb] leading-relaxed mb-4 text-sm sm:text-base">
            Open Doors هي مسابقة أكاديمية دولية تنظمها جمعية الجامعات الروسية الرائدة (Global Universities Association)، تُتيح للطلبة من خارج روسيا (بما في ذلك الطلبة الجزائريين) التنافس للحصول على مقعد دراسي ممول بالكامل في مرحلة الليسانس، الماستر، أو الدكتوراه، أو موقع بحثي في مرحلة ما بعد الدكتوراه.
          </p>
          <p className="text-[#8fa3bb] leading-relaxed mb-4 text-sm sm:text-base">
            تتكون المسابقة من مرحلتين رئيسيتين (أو ثلاث لمساري الدكتوراه وما بعدها): تقييم الملف الأكاديمي (Portfolio) في المرحلة الأولى، ثم جلسة اختبار إلكتروني مباشر خاضع للمراقبة (Proctoring) في المرحلة الثانية.
          </p>
          <div className="card card-official my-0">
            <div className="card-badge">رسمي — البند 17</div>
            <p>المشاركة في Open Doors مجانية بالكامل في جميع مراحلها — لا توجد أي رسوم تسجيل رسمية إطلاقاً.</p>
          </div>
        </div>

        {/* Tracks */}
        <h2 className="text-white font-black text-2xl mb-3 text-center">المسارات الأربعة وشروط السن</h2>
        <p className="text-[#8fa3bb] text-center mb-8 text-xs sm:text-sm">
          يُحتسب السن في تاريخ فتح التسجيل: <strong>20 أغسطس 2026</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {tracks.map((t) => (
            <div key={t.name} className={`rounded-2xl border-2 p-6 ${t.color}`}>
              <h3 className="font-bold text-lg text-white mb-3 flex items-center justify-between">
                <span>{t.name}</span>
                <span className="text-gold text-xs px-2.5 py-0.5 rounded bg-gold/10">{t.stages}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#8fa3bb]">
                <li><strong className="text-white">السن المطلوب:</strong> {t.age}</li>
                <li><strong className="text-white">المؤهل المطلوب:</strong> {t.qual}</li>
                <li><strong className="text-white">الجائزة:</strong> {t.prize}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Subject Areas */}
        <h2 className="text-white font-black text-2xl mb-3 text-center">المجالات العلمية المتاحة (14 مجالاً)</h2>
        <p className="text-[#8fa3bb] text-center mb-6 text-xs sm:text-sm">
          يجب اختيار مجال واحد على الأقل — وكل مجال يتطلب خطاب دوافع واختبار دخول منفصلَين:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {fields.map((f, i) => (
            <div key={i} className="bg-[#112236] border border-[#1e3a56] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#e8edf2] flex items-center gap-3">
              <span className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">
                {i + 1}
              </span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/#part3"
            className="inline-block bg-gold text-navy font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gold-light transition shadow-gold"
          >
            اطّلع على خطوات التسجيل التفصيلية في الدليل ←
          </Link>
        </div>
      </section>
    </>
  );
}
