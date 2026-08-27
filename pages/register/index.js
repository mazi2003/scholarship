import Link from 'next/link';

const steps = [
  {
    num: '١',
    icon: '📋',
    title: 'تحديد المسار والتحقق من الأهلية',
    desc: 'قبل أي خطوة، حدّد مسارك بناءً على سنّك ومؤهلك الأكاديمي في تاريخ فتح التسجيل (20 أغسطس 2026).',
    details: [
      'Bachelor\'s: من 16 إلى 23 سنة + شهادة ثانوية (أو في طور الحصول عليها).',
      'Master\'s: من 20 إلى 33 سنة + بكالوريوس (أو في سنة التخرج).',
      'Doctoral: من 22 إلى 35 سنة + ماجستير أو ما يعادله.',
      'Postdoctoral: من 24 إلى 39 سنة + دكتوراه مُكتمَلة وقت تقديم الملف.',
    ],
    warning: 'السنّ يُحتسب في تاريخ فتح التسجيل — 20 أغسطس 2026.',
  },
  {
    num: '٢',
    icon: '🛂',
    title: 'تحضير البيانات قبل فتح النموذج',
    desc: 'جهّز هذه العناصر قبل فتح نموذج التسجيل حتى تملأه دفعةً واحدة دون توقف.',
    details: [
      'جواز سفر ساري المفعول — وصفحة البيانات واضحة مع المنطقة القابلة للقراءة الآلية (MRZ).',
      'بريد إلكتروني دائم تتحكم فيه لسنتين على الأقل — ليس بريد مدرسة يُغلق بعد التخرج.',
      'رقم هاتف نشط.',
      'المستندات التعليمية: الشهادة أو كشف درجات حديث إن لم تتخرج بعد.',
    ],
    warning: 'خانات الهوية (الاسم، تاريخ الميلاد، الجنسية) تُقفل فور إنشاء الحساب ولا يمكن تعديلها بنفسك — التصحيح يستلزم التواصل مع الدعم.',
  },
  {
    num: '٣',
    icon: '✍️',
    title: 'قراءة الاسم من جواز السفر (MRZ)',
    desc: 'الاسم هو أخطر حقل في التقديم — يُكتب مرةً واحدة ويُقفل.',
    details: [
      'افتح سطر الاسم في المنطقة القابلة للقراءة الآلية (MRZ) أسفل صفحة بيانات جوازك.',
      'ما يسبق العلامتين << يُدوَّن في خانة Family name.',
      'كل ما يأتي بعد العلامتين << يُدوَّن في خانة Name(s) — مع إبدال العلامات < بمسافات.',
      'تنسيق تاريخ الميلاد: mm/dd/yyyy — الشهر أولاً. مثال: 03/05/2004 = 5 مارس 2004.',
      'الجنسية يجب أن تطابق جواز السفر الذي ستستخدمه طوال المسابقة.',
    ],
    warning: 'لا تكتب اسمك كما تعوّدت كتابته بالعربية — المصدر الوحيد هو الحروف اللاتينية في جوازك.',
  },
  {
    num: '٤',
    icon: '🖊️',
    title: 'ملء نموذج التسجيل وتأكيد المسار',
    desc: 'بعد إدخال تاريخ الميلاد، يعرض النموذج المسار الذي تؤهّلك بياناتك له تلقائياً.',
    details: [
      'أدخل البريد الإلكتروني وأعطِ موافقتك، ثم اضغط Continue.',
      'اختر لغة المشاركة: الروسية أو الإنجليزية — وهي لغة أسئلة المسابقة فقط، لا لغة الدراسة.',
      'أضف تخصصاً علمياً واحداً على الأقل من قائمة المجالات الأربعة عشر.',
      'اقرأ الموافقات الأربع الإلزامية جيداً قبل الضغط على Register.',
    ],
    warning: 'لا يمكن إتمام التسجيل دون اختيار مجال واحد على الأقل — كل مجال يستلزم خطاب دوافع واختبار دخول منفصلين.',
  },
  {
    num: '٥',
    icon: '📄',
    title: 'رفع المستندات التعليمية',
    desc: 'من القائمة الجانبية: First stage → Education.',
    details: [
      'جميع المستندات يجب أن تكون بالروسية أو الإنجليزية — المستندات بلغات أخرى تستلزم ترجمةً مرفقة.',
      'الصيغ المقبولة: PDF أو JPEG أو PNG.',
      'سمّ ملفاتك بأسماء واضحة: Bachelor_Degree.pdf، Bachelor_Transcript.pdf...',
      'إن لم تتخرج بعد، ارفع كشف الدرجات الأخير بدلاً من الشهادة.',
      'لرفع صفحة جواز السفر: يجب أن تتضمن صفحة البيانات كاملةً مع سطري MRZ — بصيغة PDF.',
    ],
  },
  {
    num: '٦',
    icon: '💌',
    title: 'كتابة خطاب الدوافع',
    desc: 'خطاب منفصل لكل مجال علمي اخترته — يُكتب داخل المنصة مباشرةً، لا يُرفع كملف.',
    details: [
      'السؤال الأول — Personal goals: هدفك الواضح وعلاقة المنحة بمسارك.',
      'السؤال الثاني — Professional achievements: إنجازاتك التي تثبت كفاءتك في المجال.',
      'السؤال الثالث — The reason for choosing a subject: سبب اختيارك لهذا المجال تحديداً.',
      'السؤال الرابع — The reason for choosing to study in Russia: لماذا روسيا لدراسة مجالك؟',
      'الأسئلة الأربعة يجب أن تشكّل قصةً واحدة متماسكة — لا تكرار ولا تناقض.',
    ],
    warning: 'الاقتباس النصي من الإنترنت أو من خطابات جاهزة يُخفّض درجة التقييم تلقائياً.',
  },
  {
    num: '٧',
    icon: '🏆',
    title: 'إضافة الإنجازات',
    desc: 'القسم اختياري لجميع المسارات ما عدا Postdoctoral — لكن يُوصى به بشدة.',
    details: [
      'الحد الأقصى: 10 إنجازات لكل نوع من الأنواع الثمانية (لا 10 إجمالاً).',
      'الأنواع الثمانية: منشورات علمية، تقارير مؤتمرات، براءات اختراع، كورسات أونلاين ذات صلة، جوائز مسابقات، خبرة عمل، مشاركة في مشاريع، شهادات أخرى (بما فيها اللغات).',
      'لكل إنجاز: ارفق ملف إثبات واضح بصيغة PDF أو JPEG أو PNG.',
      'ابدأ بالأهم، وصنّف كل إنجاز في نوعه الصحيح — التصنيف الخاطئ يضعف مصداقية الملف.',
    ],
  },
  {
    num: '٨',
    icon: '📝',
    title: 'اختبار الدخول (Entry Test)',
    desc: 'First stage → Entry test — اختبار لكل مجال اخترته.',
    details: [
      '90 مهمة في 60 دقيقة — أقل من دقيقة للمهمة الواحدة، السرعة جزء من الاختبار.',
      'لكل مجال 3 محاولات — تُسجَّل أفضلها لا آخرها.',
      'الاستراتيجية: استخدم المحاولة الأولى للاستكشاف وتحديد نقاط الضعف، ثم ذاكر، ثم ادخل المحاولة الثانية بعد التحضير الفعلي.',
      'لا تحرق المحاولات الثلاث في يومين — المحاولة الثالثة فرصة تحسين أخيرة.',
    ],
  },
  {
    num: '٩',
    icon: '📤',
    title: 'تقديم الملف ومراقبة المواعيد',
    desc: 'يُرسَل الملف المكتمل تلقائياً في 1 نوفمبر 2026 — أو يمكنك تقديمه مبكراً بنفسك.',
    details: [
      'آخر موعد لسحب الملف المقدَّم للتعديل: 18 أكتوبر 2026 قبل الساعة 11:59 مساءً بتوقيت موسكو.',
      'راجع قائمة التحقق (Checklist) الكاملة قبل التقديم.',
      'تأكد أن حالة الجدول ليست Not ready قبل الموعد.',
    ],
    warning: 'جميع المواعيد بتوقيت موسكو (GMT+3) — آخر يوم بتوقيتك المحلي قد يكون قد انتهى فعلياً في موسكو.',
  },
  {
    num: '١٠',
    icon: '🏅',
    title: 'الاستعداد للمرحلة الثانية من الآن',
    desc: 'نتائج المرحلة الأولى تُعلَن في 13 نوفمبر وتسجيل المرحلة الثانية يُغلق في 16 نوفمبر — أي ثلاثة أيام فقط.',
    details: [
      'المرحلة الثانية: 46 مهمة (25 أساسية، 15 متوسطة، 3 متقدمة، 3 شفهية) في 180 دقيقة.',
      'الجلسة بنظام المراقبة الإلكترونية — كاميرا ويب + إنترنت ثابت بسرعة 1 Mbit/s على الأقل.',
      'ابدأ بمراجعة ملف البرنامج (Program) وملف نماذج المهام (Sample Tasks) من الآن.',
      'كل ساعة تذاكر الآن تُحتسب مرتين: للمرحلة الأولى والثانية معاً.',
    ],
  },
];

export default function RegisterGuide() {
  return (
    <>
      {/* Header */}
      <section
        className="text-center text-white px-6 py-20"
        style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #2A9D8F 100%)' }}
      >
        <span className="inline-block bg-gold/20 text-gold text-sm font-heading px-4 py-1 rounded-full mb-4">
          الدليل العملي 2026–2027
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
          طريقة الالتحاق بمنحة Open Doors
        </h1>
        <p className="text-gray-200 font-body text-lg max-w-2xl mx-auto">
          دليل تفصيلي خطوة بخطوة، مبني على الواجهة الرسمية الحالية للمسابقة.
          كل خطوة موثّقة من المصادر الرسمية وتجربة المشاركين الفعليين.
        </p>
      </section>

      {/* Important Warning */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-sm font-body text-amber-900">
          <strong className="font-heading text-base">⚠️ تنبيه مهم:</strong> المعلومات الواردة هنا مأخوذة من الدليل العملي لدورة 2026–2027 بتاريخ مراجعة 21 أغسطس 2026.
          الواجهة والمواعيد قابلة للتغيير خلال الموسم — <strong>المرجع النهائي دائماً هو الموقع الرسمي</strong>:
          <a href="https://od.globaluni.ru" target="_blank" rel="noopener" className="underline mr-1">od.globaluni.ru</a>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-6 pb-6 space-y-6">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-white rounded-2xl shadow-card border border-gray-100 p-8"
          >
            <div className="flex gap-5">
              {/* Number */}
              <div className="flex-shrink-0 w-14 h-14 bg-teal text-white rounded-full flex items-center justify-center font-heading font-black text-2xl shadow-md">
                {s.num}
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h2 className="text-navy font-heading font-bold text-xl">{s.title}</h2>
                </div>
                <p className="text-muted font-body mb-4 text-sm">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-body text-gray-700">
                      <span className="text-teal mt-1 flex-shrink-0">◆</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                {s.warning && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-body text-red-800">
                    ⚠️ {s.warning}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Checklist */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div id="dates" className="bg-navy rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-heading font-black text-gold mb-6">📅 المواعيد الرئيسية</h2>
          <div className="space-y-3 font-body text-sm">
            {[
              { date: '20 أغسطس 2026', desc: 'فتح باب التسجيل وتجهيز الملف' },
              { date: '18 أكتوبر 2026', desc: 'آخر موعد لسحب الملف المقدَّم للتعديل (قبل 11:59 مساءً بتوقيت موسكو)' },
              { date: '1 نوفمبر 2026', desc: 'إغلاق التسجيل والتعديل — إرسال الملفات المكتملة تلقائياً للتقييم' },
              { date: '13 نوفمبر 2026', desc: 'إعلان نتائج المرحلة الأولى' },
              { date: '16 نوفمبر 2026', desc: 'آخر موعد لتسجيل المرحلة الثانية' },
              { date: '6 ديسمبر 2026', desc: 'آخر موعد لرفع فيديو مسار Postdoctoral' },
              { date: '21 ديسمبر 2026', desc: 'نتائج المرحلة الثانية لمساري البكالوريوس والماجستير' },
              { date: '22 ديسمبر 2026 → 26 فبراير 2027', desc: 'المرحلة الثالثة لمساري الدكتوراه وما بعد الدكتوراه' },
            ].map((d, i) => (
              <div key={i} className="flex gap-4 items-start bg-white/10 rounded-xl px-4 py-3">
                <span className="text-gold font-heading font-bold whitespace-nowrap min-w-[180px]">{d.date}</span>
                <span className="text-gray-200">{d.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-heading font-black text-red-800 mb-6">🚫 أخطاء شائعة يجب تجنّبها</h2>
          <ul className="space-y-3 font-body text-sm text-red-900">
            {[
              'كتابة الاسم بإملاء مختلف عن جواز السفر — المصدر الوحيد هو سطر MRZ.',
              'إدخال تاريخ الميلاد بصيغة يوم/شهر بدل شهر/يوم — النموذج لا يُنبّهك على الخطأ.',
              'فتح حساب آخر لتصحيح خطأ إملائي — مخالفة تؤدي إلى الاستبعاد، استخدم الدعم الرسمي.',
              'الاعتقاد بأن الحد الأقصى للإنجازات 10 إجمالاً — الصحيح: 10 لكل نوع من الأنواع الثمانية.',
              'حرق المحاولات الثلاث لاختبار الدخول في يومين — وزّعها بحكمة.',
              'انتظار نتيجة المرحلة الأولى للبدء بالتحضير للمرحلة الثانية — لا يبقى لك إلا ثلاثة أيام.',
              'الاعتماد على "حد ما قاله" بدلاً من الرجوع للمصدر الرسمي.',
            ].map((e, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center pb-20 px-6">
        <div className="bg-light rounded-2xl border border-gray-200 max-w-2xl mx-auto p-10">
          <h3 className="text-navy font-heading font-black text-2xl mb-3">هل لديك سؤال؟</h3>
          <p className="text-muted font-body mb-6">تواصل معنا أو تابع الصفحة الرسمية للتحديثات.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-teal text-white font-heading font-bold px-8 py-3 rounded-full hover:bg-teal/80 transition"
            >
              تواصل معنا
            </Link>
            <Link
              href="/faq"
              className="border-2 border-teal text-teal font-heading font-bold px-8 py-3 rounded-full hover:bg-teal hover:text-white transition"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
