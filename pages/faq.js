import Link from 'next/link';

const faqs = [
  {
    q: 'هل المشاركة في Open Doors مجانية للطلبة الجزائريين؟',
    a: 'نعم، المشاركة مجانية بالكامل في جميع المراحل — لا توجد أي رسوم اشتراك رسمية. (البند 17 من قواعد المشاركة)',
  },
  {
    q: 'ما الفرق بين لغة المشاركة ولغة الدراسة في الجامعة؟',
    a: 'لغة المشاركة (الروسية أو الإنجليزية) تُختار عند التسجيل، وهي لغة أسئلة المسابقة فقط. أما لغة الدراسة في الجامعة فيختارها الفائز بعد إعلان النتائج بشكل منفصل تماماً (مع توفير سنة تحضيرية لتعلم اللغة الروسية مجاناً إذا اخترت الدراسة بالروسية).',
  },
  {
    q: 'هل يمكنني التقديم على أكثر من تخصص أو مجال علمي؟',
    a: 'نعم، يمكن إضافة أكثر من مجال. لكن كل مجال يستلزم خطاب دوافع مستقلاً واختبار دخول مستقلاً. يُنصح باختيار المجالات المتقاربة مع تخصصك الجامعي أو البكالوريا حتى تخدم إنجازاتك كلا المجالين دون تشتت.',
  },
  {
    q: 'ماذا أفعل إذا أخطأت في كتابة اسمي أو تاريخ ميلادي؟',
    a: 'خانات الهوية (الاسم، تاريخ الميلاد، الجنسية) تُقفل فور إنشاء الحساب. التصحيح يستلزم مراسلة الدعم الرسمي عبر: opendoors@globaluni.ru. إياك وفتح حساب جديد — فتح أكثر من حساب في نفس الدورة مخالفة توجب الاستبعاد.',
  },
  {
    q: 'هل الترجمة المعتمدة للمستندات إلزامية في المرحلة الأولى؟',
    a: 'أي مستند صادر بالعربية أو الفرنسية يجب إرفاق ترجمة له إلى الروسية أو الإنجليزية. أما التصديق النوتاري فغير مطلوب في المرحلة الأولى — وإنما بعد الفوز عند استكمال إجراءات القبول.',
  },
  {
    q: 'كم عدد محاولات اختبار الدخول (Entry Test) المتاحة؟',
    a: '3 محاولات لكل مجال — وتُسجَّل أفضل نتيجة تلقائياً. مدة الاختبار 60 دقيقة لـ 90 سؤالاً. استغل المحاولة الأولى للاستكشاف ثم راجع الموضوعات قبل خوض المحاولة الثانية.',
  },
  {
    q: 'متى تُعلَن نتائج المرحلة الأولى وما المهلة المتاحة؟',
    a: 'نتائج المرحلة الأولى: 13 نوفمبر 2026. تسجيل المرحلة الثانية يُغلق في 16 نوفمبر — أي 3 أيام فقط. لذلك ابدأ التحضير للمرحلة الثانية مبكراً دون انتظار النتيجة.',
  },
  {
    q: 'ما هو هيكل المرحلة الثانية؟',
    a: 'جلسة اختبار إلكترونية مراقبة بالكاميرا (Proctoring) تتضمن 46 مهمة في 180 دقيقة (25 أساسية، 15 متوسطة، 3 متقدمة، 3 شفوية). تتطلب حاسوباً وكاميرا وإنترنت ثابت بسرعة 1 Mbit/s على الأقل.',
  },
  {
    q: 'ما الفرق بين تاريخ 18 أكتوبر و 1 نوفمبر؟',
    a: '1 نوفمبر: إغلاق التسجيل النهائي وإرسال الملفات المكتملة تلقائياً للتقييم. 18 أكتوبر: آخر موعد لسحب ملف سبق تقديمه مبكراً (Revoke) إذا أردت تعديله قبل 11:59 مساءً بتوقيت موسكو.',
  },
];

export default function FAQ() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-center py-16 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">
          الأسئلة الشائعة · Open Doors 🇩🇿
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          أهم الاستفسارات حول منحة Open Doors
        </h1>
        <p className="text-[#8fa3bb] text-sm max-w-xl mx-auto">
          إجابات موثقة مستخرجة من القواعد الرسمية والتجارب الميدانية للطلبة في المسابقة.
        </p>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="bg-[#112236] rounded-xl border border-[#1e3a56] p-5 group open:border-gold transition-all shadow-card"
          >
            <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-bold text-white text-sm sm:text-base">
              <span>{f.q}</span>
              <span className="text-gold text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
            </summary>
            <p className="mt-3 text-[#8fa3bb] text-xs sm:text-sm leading-relaxed border-t border-[#1e3a56] pt-3">
              {f.a}
            </p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pb-16 px-6">
        <p className="text-[#8fa3bb] text-xs sm:text-sm mb-4">هل لديك استفسار إضافي أو تحتاج مساعدة خاصة في التسجيل؟</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/services"
            className="bg-gold text-navy font-bold px-6 py-2.5 rounded-full text-xs hover:bg-gold-light transition"
          >
            خدمات التسجيل والترجمة
          </Link>
          <a
            href="https://wa.me/213563965871?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9%20%D9%84%D9%85%D9%86%D8%AD%D8%A9%20%D8%B1%D9%88%D8%B3%D9%8A%D8%A7%20Open%20Doors"
            target="_blank"
            rel="noopener"
            className="border border-[#1e3a56] text-[#8fa3bb] hover:text-gold hover:border-gold font-bold px-6 py-2.5 rounded-full text-xs transition"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </section>
    </>
  );
}
