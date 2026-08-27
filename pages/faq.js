import Link from 'next/link';

const faqs = [
  {
    q: 'هل المشاركة في Open Doors مجانية؟',
    a: 'نعم، المشاركة مجانية بالكامل في جميع المراحل — لا توجد أي رسوم اشتراك. (البند 17 من قواعد المشاركة)',
  },
  {
    q: 'ما الفرق بين لغة المشاركة ولغة الدراسة؟',
    a: 'لغة المشاركة (الروسية أو الإنجليزية) تُختار عند التسجيل، وهي لغة أسئلة المسابقة فقط. أما لغة الدراسة في الجامعة فيختارها الفائز بعد إعلان النتائج بشكل منفصل تماماً.',
  },
  {
    q: 'هل يمكنني التقديم على أكثر من مجال علمي؟',
    a: 'نعم، يمكن إضافة أكثر من مجال. لكن كل مجال يستلزم خطاب دوافع مستقلاً واختبار دخول مستقلاً. اختر المجالات المتقاربة مع خلفيتك الأكاديمية الفعلية لأن مذاكرتك لن تتشتت.',
  },
  {
    q: 'ماذا يحدث إذا أخطأت في كتابة اسمي أو تاريخ ميلادي؟',
    a: 'خانات الهوية (الاسم، تاريخ الميلاد، الجنسية) تُقفل فور إنشاء الحساب. التصحيح يستلزم التواصل مع الدعم الرسمي عبر: opendoors@globaluni.ru. لا تفتح حساباً جديداً — فتح أكثر من حساب في نفس الدورة مخالفة توجب الاستبعاد.',
  },
  {
    q: 'هل الترجمة المعتمدة للمستندات إلزامية؟',
    a: 'أي مستند بلغة غير الروسية أو الإنجليزية يجب أن يُرافقه ترجمة. أما التوثيق (التصديق النوتاري) فغير مطلوب في المرحلة الأولى — لكن يُنصح بالتواصل مع الدعم للتأكد قبل صرف أي تكلفة إضافية.',
  },
  {
    q: 'كم عدد محاولات اختبار الدخول المتاحة؟',
    a: '3 محاولات لكل مجال — تُسجَّل أفضل نتيجة لا آخرها. الاختبار: 90 مهمة في 60 دقيقة. لا تحرق المحاولات في يومين — استخدم الأولى للاستكشاف وتحديد نقاط الضعف.',
  },
  {
    q: 'متى تُعلَن النتائج وما الخطوة التالية؟',
    a: 'نتائج المرحلة الأولى: 13 نوفمبر 2026. تسجيل المرحلة الثانية يُغلق في 16 نوفمبر — أي ثلاثة أيام فقط. ابدأ التحضير للمرحلة الثانية من الآن، لا بعد النتيجة.',
  },
  {
    q: 'ما شكل المرحلة الثانية؟',
    a: 'جلسة إلكترونية مراقبة (Proctoring) تحتوي على 46 مهمة في 180 دقيقة: 25 أساسية، 15 متوسطة، 3 متقدمة، و3 شفهية. تتطلب كمبيوتر وكاميرا ويب وإنترنت ثابت بسرعة 1 Mbit/s على الأقل. مسار Postdoctoral مختلف: عرض فيديو نتائج بحثية.',
  },
  {
    q: 'ماذا أفعل لو كان لديّ حساب من دورة سابقة؟',
    a: 'تواصل مع دعم Open Doors أولاً قبل أي خطوة. الحساب القديم يحتفظ ببيانات الهوية والمستندات السابقة، لكن يتصفّر لخطابات الدوافع والنتائج والمجالات. لا تفتح حساباً جديداً — القواعد تمنع امتلاك أكثر من حساب في نفس الدورة.',
  },
  {
    q: 'ما الفرق بين تاريخ 18 أكتوبر و1 نوفمبر؟',
    a: '1 نوفمبر: إغلاق التسجيل — الملفات المكتملة تُرسَل تلقائياً للتقييم. 18 أكتوبر: آخر موعد لسحب ملف سبق تقديمه مبكراً إذا أردت إجراء تعديلات عليه (قبل 11:59 مساءً بتوقيت موسكو). الخلط بين التاريخين يكلّف الطلاب ملفاتهم كل عام.',
  },
];

export default function FAQ() {
  return (
    <>
      {/* Header */}
      <section
        className="text-center text-white px-6 py-20"
        style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #2A9D8F 100%)' }}
      >
        <h1 className="text-4xl font-heading font-black mb-3">الأسئلة الشائعة</h1>
        <p className="text-gray-200 font-body max-w-xl mx-auto">
          إجابات على أكثر الأسئلة تكراراً حول منحة Open Doors 2026–2027،
          مستخرَجة من الدليل العملي ومن القواعد الرسمية.
        </p>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 group open:border-teal transition-all"
          >
            <summary className="cursor-pointer list-none flex justify-between items-start gap-4">
              <span className="font-heading font-bold text-navy text-base leading-snug">{f.q}</span>
              <span className="text-teal text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
            </summary>
            <p className="mt-4 text-muted font-body leading-relaxed border-t border-gray-100 pt-4 text-sm">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <p className="text-muted font-body mb-4 text-sm">لم تجد إجابة لسؤالك؟</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="bg-teal text-white font-heading font-bold px-8 py-3 rounded-full hover:bg-teal/80 transition"
          >
            تواصل معنا
          </Link>
          <a
            href="mailto:opendoors@globaluni.ru"
            className="border-2 border-teal text-teal font-heading font-bold px-8 py-3 rounded-full hover:bg-teal hover:text-white transition"
          >
            الدعم الرسمي للمنحة
          </a>
        </div>
      </section>
    </>
  );
}
