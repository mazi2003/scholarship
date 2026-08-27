import Link from 'next/link';

const tracks = [
  {
    name: "Bachelor's",
    age: '16–23 سنة',
    qual: 'شهادة ثانوية أو في طور الحصول عليها',
    stages: '2 مراحل',
    prize: 'مقعد دراسي ممول ضمن الحصة الحكومية الروسية',
    color: 'bg-teal/10 border-teal',
  },
  {
    name: "Master's",
    age: '20–33 سنة',
    qual: 'بكالوريوس أو في سنة التخرج',
    stages: '2 مراحل',
    prize: 'مقعد دراسي ممول ضمن الحصة الحكومية الروسية',
    color: 'bg-blue-50 border-blue-300',
  },
  {
    name: 'Doctoral',
    age: '22–35 سنة',
    qual: 'ماجستير أو Specialist أو في سنة التخرج',
    stages: '3 مراحل',
    prize: 'مقعد دراسي ممول ضمن الحصة الحكومية الروسية',
    color: 'bg-purple-50 border-purple-300',
  },
  {
    name: 'Postdoctoral',
    age: '24–39 سنة',
    qual: 'دكتوراه مُكتمَلة (PhD / Candidate / Doctor of Sciences)',
    stages: '3 مراحل',
    prize: 'موقع بحثي (ليس مقعداً دراسياً)',
    color: 'bg-amber-50 border-amber-300',
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
      <section
        className="text-center text-white px-6 py-20"
        style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #2A9D8F 100%)' }}
      >
        <span className="inline-block bg-gold/20 text-gold text-sm font-heading px-4 py-1 rounded-full mb-4">
          Open Doors 2026–2027
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">عن منحة Open Doors</h1>
        <p className="text-gray-200 font-body max-w-2xl mx-auto text-lg">
          أولمبياد دولي يُتيح للطلبة الأجانب المتميزين فرصة الدراسة والبحث في روسيا
          عبر الحصة الحكومية الروسية — <strong>مجانية بالكامل، لا توجد أي رسوم مشاركة.</strong>
        </p>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 mb-10">
          <h2 className="text-navy font-heading font-black text-2xl mb-4">ما هي منحة Open Doors؟</h2>
          <p className="text-gray-700 font-body leading-loose mb-4">
            Open Doors هي مسابقة أكاديمية دولية تنظّمها جامعات روسية مرموقة، تُتيح لمواطني الدول الأجنبية
            (غير الروس) التقديم للحصول على مقعد دراسي ممول في مرحلة البكالوريوس أو الماجستير أو الدكتوراه،
            أو موقع بحثي في مرحلة ما بعد الدكتوراه.
          </p>
          <p className="text-gray-700 font-body leading-loose mb-4">
            المسابقة مُنظَّمة على مرحلتين أساسيتين (أو ثلاث لمساري الدكتوراه وما بعدها):
            تقييم الملف الإلكتروني في المرحلة الأولى، ثم جلسة اختبار مباشر في المرحلة الثانية.
          </p>
          <div className="bg-teal/10 border border-teal rounded-xl p-4 text-sm font-body text-teal-900">
            <strong>رسمي:</strong> المشاركة في Open Doors مجانية بالكامل — لا توجد أي رسوم اشتراك في أي مرحلة. (البند 17 من قواعد المشاركة)
          </div>
        </div>

        {/* Tracks */}
        <h2 className="text-navy font-heading font-black text-2xl mb-6 text-center">المسارات الأربعة</h2>
        <p className="text-muted font-body text-center mb-8 text-sm">حدّد مسارك بناءً على سنّك ومؤهلك في تاريخ فتح التسجيل: <strong>20 أغسطس 2026</strong></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {tracks.map((t) => (
            <div key={t.name} className={`rounded-2xl border-2 p-6 ${t.color}`}>
              <h3 className="font-heading font-black text-xl text-navy mb-3">{t.name}</h3>
              <ul className="space-y-2 font-body text-sm text-gray-700">
                <li><span className="font-semibold text-navy">السن:</span> {t.age}</li>
                <li><span className="font-semibold text-navy">المؤهل:</span> {t.qual}</li>
                <li><span className="font-semibold text-navy">عدد المراحل:</span> {t.stages}</li>
                <li><span className="font-semibold text-navy">الجائزة:</span> {t.prize}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Postdoctoral note */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-12 font-body text-sm text-amber-900">
          <strong className="font-heading">⚠️ ملاحظة بشأن مسار Postdoctoral:</strong> هذا المسار مختلف جوهرياً عن المسارات الأخرى.
          المرحلة الثانية فيه عبارة عن فيديو عرض نتائج بحثية لا جلسة أسئلة. الجائزة موقع بحثي لا مقعد دراسي.
          آخر موعد لرفع الفيديو: <strong>6 ديسمبر 2026</strong>.
        </div>

        {/* Subject Areas */}
        <h2 className="text-navy font-heading font-black text-2xl mb-6 text-center">المجالات العلمية المتاحة</h2>
        <p className="text-muted font-body text-center mb-6 text-sm">
          يجب اختيار مجال واحد على الأقل من المجالات الأربعة عشر — كل مجال يستلزم خطاب دوافع واختبار دخول منفصلَين.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {fields.map((f, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-700 flex items-center gap-2">
              <span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center text-xs font-heading font-bold flex-shrink-0">{i + 1}</span>
              {f}
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 mb-10">
          <h2 className="text-navy font-heading font-black text-xl mb-4">لغة المشاركة والمستندات</h2>
          <ul className="space-y-3 font-body text-sm text-gray-700">
            <li className="flex gap-3"><span className="text-teal">◆</span> لغتا المسابقة الرسميتان: <strong>الروسية والإنجليزية</strong> — الواجهة والأسئلة وملف الترشح.</li>
            <li className="flex gap-3"><span className="text-teal">◆</span> لغة المشاركة تُختار عند التسجيل — وهي لغة أسئلة المسابقة فقط، لا لغة الدراسة في الجامعة.</li>
            <li className="flex gap-3"><span className="text-teal">◆</span> جميع المستندات المرفوعة يجب أن تكون بالروسية أو الإنجليزية — المستندات بلغات أخرى تستلزم ترجمةً مرفقة.</li>
            <li className="flex gap-3"><span className="text-teal">◆</span> اختيار لغة الدراسة في الجامعة يكون لاحقاً، بعد إعلان النتائج.</li>
          </ul>
        </div>

        {/* Universities */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
          <h2 className="text-navy font-heading font-black text-xl mb-4">تفضيلات الجامعات</h2>
          <p className="text-gray-700 font-body text-sm leading-relaxed mb-3">
            يمكن ترتيب تفضيلات حتى 6 جامعات داخل الحساب — يجب أن تكون واحدة منها على الأقل من الجامعات المنظِّمة لـ Open Doors.
          </p>
          <p className="text-gray-700 font-body text-sm leading-relaxed">
            هذا الترتيب ليس قراراً نهائياً ملزماً — الاختيار الفعلي يتمّ بعد النتائج بناءً على البرامج المتاحة
            لمجالك في كل جامعة. لا يتوفر برنامجك بالضرورة في كل الجامعات.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <Link
          href="/register"
          className="bg-teal text-white font-heading font-bold px-10 py-3 rounded-full text-lg hover:bg-teal/80 transition shadow-md"
        >
          اطّلع على خطوات التسجيل التفصيلية ←
        </Link>
      </section>
    </>
  );
}
