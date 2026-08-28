import Link from 'next/link';

const steps = [
  {
    num: '١',
    icon: '📋',
    title: 'تحديد المسار والتحقق من الأهلية',
    desc: 'قبل أي خطوة، حدّد مسارك بناءً على سنّك ومؤهلك الأكاديمي في تاريخ فتح التسجيل (20 أغسطس 2026).',
    details: [
      'Bachelor\'s: من 16 إلى 23 سنة + شهادة البكالوريا الجزائرية (أو في طور الحصول عليها).',
      'Master\'s: من 20 إلى 33 سنة + شهادة ليسانس (أو في سنة التخرج L3).',
      'Doctoral: من 22 إلى 35 سنة + شهادة ماستر أو مهندس دولة.',
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
      'جواز سفر جزائري ساري المفعول — وصفحة البيانات واضحة مع سطر الـMRZ.',
      'بريد إلكتروني دائم وخاص بك تتحكم فيه لسنتين على الأقل.',
      'رقم هاتف جزائري نشط (+213).',
      'المستندات التعليمية: شهادة البكالوريا، كشوف النقاط، أو شهادة ليسانس/ماستر.',
    ],
    warning: 'خانات الهوية (الاسم، تاريخ الميلاد، الجنسية) تُقفل فور إنشاء الحساب ولا يمكن تعديلها ذاتياً.',
  },
  {
    num: '٣',
    icon: '✍️',
    title: 'قراءة الاسم من جواز السفر الجزائري (MRZ)',
    desc: 'الاسم هو أخطر حقل في التقديم — يُكتب بالحروف اللاتينية كما هو في جوازك ويُقفل نهائياً.',
    details: [
      'افتح صفحة بيانات جواز سفرك الجزائري، وانظر للسطر الأول من المنطقة المشفرة (MRZ) في الأسفل: P<DZABENALI<<MOHAMED<AMINE...',
      'اللقب (Nom): ما يسبق العلامتين << يُدوَّن في خانة Family name (مثال: BENALI).',
      'الأسماء (Prénoms): كل ما يأتي بعد العلامتين << يُدوَّن في خانة Name(s) مع استبدال < بمسافة (مثال: MOHAMED AMINE).',
      'تنسيق تاريخ الميلاد: mm/dd/yyyy — الشهر أولاً وليس اليوم. مثال: تاريخ 05/03/2004 في الجواز يُكتب 03/05/2004.',
      'الجنسية: اختر Algeria لتطابق جواز السفر (ويُضبط رمز الهاتف تلقائياً على +213).',
    ],
    warning: 'لا تكتب اسمك كما تعوّدت كتابته بالعربية أو بالهجاء الفرنسي الدارج — المصدر الوحيد الإلزامي هو الحروف اللاتينية في جواز سفرك وسطر الـMRZ.',
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
      'اقرأ الموافقات الإلزامية جيداً قبل الضغط على Register.',
    ],
    warning: 'لا يمكن إتمام التسجيل دون اختيار مجال واحد على الأقل — كل مجال يستلزم خطاب دوافع واختبار دخول منفصلين.',
  },
  {
    num: '٥',
    icon: '📄',
    title: 'رفع المستندات التعليمية',
    desc: 'من القائمة الجانبية: First stage → Education.',
    details: [
      'جميع المستندات يجب أن تكون بالروسية أو الإنجليزية — المستندات بالعربية أو الفرنسية تستلزم ترجمةً مرفقة.',
      'الصيغ المقبولة: PDF أو JPEG أو PNG.',
      'سمّ ملفاتك بأسماء لاتينية واضحة: Baccalaureate_Certificate.pdf، Licence_Transcript.pdf...',
      'إن لم تتخرج بعد، ارفع كشف النقاط الأخير بدلاً من الشهادة.',
      'لرفع صفحة جواز السفر: يجب أن تتضمن صفحة البيانات كاملةً مع سطري MRZ — بصيغة PDF.',
    ],
  },
  {
    num: '٦',
    icon: '💌',
    title: 'كتابة خطاب الدوافع (Motivation Letter)',
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
    title: 'إضافة الإنجازات (Achievements)',
    desc: 'القسم اختياري لجميع المسارات ما عدا Postdoctoral — لكن يُوصى به بشدة.',
    details: [
      'الحد الأقصى: 10 إنجازات لكل نوع من الأنواع الثمانية (لا 10 إجمالاً).',
      'الأنواع الثمانية: منشورات علمية، تقارير مؤتمرات، براءات اختراع، دورات تدريبية، جوائز، خبرة عمل، مشاريع، وشهادات أخرى.',
      'لكل إنجاز: ارفق ملف إثبات واضح بصيغة PDF أو صورة.',
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
      'لكل مجال 3 محاولات — تُسجَّل أفضلها تلقائياً.',
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
      'آخر موعد لسحب الملف المقدَّم للتعديل (Revoke): 18 أكتوبر 2026 قبل الساعة 11:59 مساءً بتوقيت موسكو.',
      'راجع قائمة التحقق (Checklist) الكاملة قبل التقديم.',
      'تأكد أن حالة الجدول ليست Not ready قبل الموعد.',
    ],
    warning: 'جميع المواعيد بتوقيت موسكو (GMT+3) — بفارق ساعتين عن توقيت الجزائر.',
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
      <section className="relative overflow-hidden text-center py-16 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">
          الدليل العملي خطوة بخطوة 2026–2027 🇩🇿
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
          طريقة الالتحاق والتسجيل في Open Doors
        </h1>
        <p className="text-[#8fa3bb] text-sm sm:text-base max-w-2xl mx-auto">
          دليل تفصيلي خطوة بخطوة للطلبة الجزائريين، مبني على الواجهة الرسمية الحالية للمسابقة.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Important Warning */}
        <div className="card card-warning my-0">
          <div className="card-badge">⚠️ تنبيه مهم</div>
          <p className="text-sm">
            المعلومات الواردة هنا مأخوذة من الدليل العملي لدورة 2026–2027. الواجهة والمواعيد قابلة للتحديث — <strong>المرجع النهائي دائماً هو الموقع الرسمي:</strong>{' '}
            <a href="https://od.globaluni.ru" target="_blank" rel="noopener" className="underline text-gold">od.globaluni.ru</a>
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#112236] rounded-2xl shadow-card border border-[#1e3a56] p-6 sm:p-8"
            >
              <div className="flex gap-4 sm:gap-6">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gold text-navy rounded-full flex items-center justify-center font-black text-xl sm:text-2xl shadow-gold">
                  {s.num}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{s.icon}</span>
                    <h2 className="text-white font-bold text-lg sm:text-xl">{s.title}</h2>
                  </div>
                  <p className="text-[#8fa3bb] mb-4 text-xs sm:text-sm">{s.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-[#e8edf2]">
                        <span className="text-gold mt-1 flex-shrink-0">◆</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {s.warning && (
                    <div className="bg-red-950/60 border border-red-500/40 rounded-xl px-4 py-2.5 text-xs text-red-200">
                      ⚠️ {s.warning}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="card text-center p-8 border-gold bg-gradient-to-br from-[#0e1e31] to-[#112236]">
          <h3 className="text-xl font-bold text-white mb-2">هل تحتاج مساعدة في التسجيل أو الترجمة؟</h3>
          <p className="text-[#8fa3bb] text-xs sm:text-sm mb-6 max-w-lg mx-auto">
            نتكفّل بإنشاء حسابك وتدقيق بياناتك وصياغة خطاب الدوافع وترجمة وثائقك باحترافية كاملة.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/services"
              className="bg-gold text-navy font-bold px-7 py-3 rounded-full text-xs hover:bg-gold-light transition shadow-gold"
            >
              🛎️ اطلب خدمة التسجيل والترجمة
            </Link>
            <Link
              href="/faq"
              className="border border-[#1e3a56] text-[#8fa3bb] hover:text-gold hover:border-gold font-bold px-7 py-3 rounded-full text-xs transition"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
