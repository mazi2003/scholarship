import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Interactive checklist state
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Deadline: November 1, 2026 23:59:59 GMT+3 (Moscow Time)
    const target = new Date('2026-11-01T23:59:59+03:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Interactive Date of Birth & Track Eligibility Tool State
  const [birthDay, setBirthDay] = useState('05');
  const [birthMonth, setBirthMonth] = useState('03');
  const [birthYear, setBirthYear] = useState('2004');
  const [degreeLevel, setDegreeLevel] = useState('bac');
  const [copied, setCopied] = useState(false);

  // Compute formatted American date: mm/dd/yyyy
  const formattedAmericanDate = `${String(birthMonth).padStart(2, '0')}/${String(birthDay).padStart(2, '0')}/${birthYear}`;

  // Calculate age on registration opening date: August 20, 2026
  const calcAge = () => {
    const y = parseInt(birthYear, 10) || 2000;
    const m = parseInt(birthMonth, 10) || 1;
    const d = parseInt(birthDay, 10) || 1;
    const birthDate = new Date(y, m - 1, d);
    const refDate = new Date(2026, 7, 20); // 20 August 2026
    let age = refDate.getFullYear() - birthDate.getFullYear();
    const mDiff = refDate.getMonth() - birthDate.getMonth();
    if (mDiff < 0 || (mDiff === 0 && refDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const calculatedAge = calcAge();

  // Track Eligibility based on rules
  const getEligibility = () => {
    if (degreeLevel === 'bac') {
      if (calculatedAge >= 16 && calculatedAge <= 23) {
        return { track: "Bachelor's (ليسانس)", status: 'eligible', desc: 'مؤهل لمسار البكالوريوس/الليسانس (السن بين 16 و 23 سنة)' };
      }
      return { track: "Bachelor's (ليسانس)", status: 'warning', desc: 'تنبيه: السن خارج النطاق المعتاد لمسار البكالوريوس (16–23 سنة)' };
    }
    if (degreeLevel === 'licence') {
      if (calculatedAge >= 20 && calculatedAge <= 33) {
        return { track: "Master's (ماستر)", status: 'eligible', desc: 'مؤهل لمسار الماجستير/الماستر (السن بين 20 و 33 سنة)' };
      }
      return { track: "Master's (ماستر)", status: 'warning', desc: 'تنبيه: السن خارج النطاق المعتاد لمسار الماستر (20–33 سنة)' };
    }
    if (degreeLevel === 'master') {
      if (calculatedAge >= 22 && calculatedAge <= 35) {
        return { track: "Doctoral (دكتوراه)", status: 'eligible', desc: 'مؤهل لمسار الدكتوراه (السن بين 22 و 35 سنة)' };
      }
      return { track: "Doctoral (دكتوراه)", status: 'warning', desc: 'تنبيه: السن خارج النطاق المعتاد لمسار الدكتوراه (22–35 سنة)' };
    }
    if (degreeLevel === 'phd') {
      if (calculatedAge >= 24 && calculatedAge <= 39) {
        return { track: "Postdoctoral (ما بعد الدكتوراه)", status: 'eligible', desc: 'مؤهل لمسار أبحاث ما بعد الدكتوراه (السن بين 24 و 39 سنة)' };
      }
      return { track: "Postdoctoral (ما بعد الدكتوراه)", status: 'warning', desc: 'تنبيه: السن خارج النطاق المعتاد لمسار Postdoc (24–39 سنة)' };
    }
    return { track: 'غير محدد', status: 'unknown', desc: '' };
  };

  const eligibility = getEligibility();

  const handleCopyDate = () => {
    navigator.clipboard.writeText(formattedAmericanDate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden text-center py-20 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-gold uppercase mb-4">
            OPEN DOORS · دليل الطلبة الجزائريين 🇩🇿
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-2">
            دليل <span className="text-gold">Open Doors</span> العملي
          </h1>

          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-light mb-4">
            2026–2027
          </div>

          <p className="text-base sm:text-lg text-[#8fa3bb] max-w-2xl mx-auto mb-2">
            من أول التسجيل لحد تجهيز الـPortfolio والاستعداد للمرحلة الثانية.
          </p>
          <p className="text-xs sm:text-sm text-[#8fa3bb] max-w-xl mx-auto italic mb-8">
            شرح عملي خطوة بخطوة بالواجهة الحالية — مكيّف وموجّه للطلبة الجزائريين.
          </p>

          {/* ── Countdown Timer Widget ── */}
          <div className="bg-[#112236]/90 border border-gold/40 rounded-2xl p-4 sm:p-5 max-w-lg mx-auto mb-10 shadow-2xl backdrop-blur-md">
            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
              <span>⏳ الوقت المتبقي حتى إغلاق باب التسجيل (1 نوفمبر 2026)</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#0d1b2a] border border-[#1e3a56] rounded-xl py-2 px-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{timeLeft.days}</div>
                <div className="text-[10px] text-[#8fa3bb]">يوم</div>
              </div>
              <div className="bg-[#0d1b2a] border border-[#1e3a56] rounded-xl py-2 px-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{timeLeft.hours}</div>
                <div className="text-[10px] text-[#8fa3bb]">ساعة</div>
              </div>
              <div className="bg-[#0d1b2a] border border-[#1e3a56] rounded-xl py-2 px-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{timeLeft.minutes}</div>
                <div className="text-[10px] text-[#8fa3bb]">دقيقة</div>
              </div>
              <div className="bg-[#0d1b2a] border border-[#1e3a56] rounded-xl py-2 px-1">
                <div className="text-2xl sm:text-3xl font-black text-gold font-mono">{timeLeft.seconds}</div>
                <div className="text-[10px] text-[#8fa3bb]">ثانية</div>
              </div>
            </div>
          </div>

          {/* Timeline steps */}
          <div className="relative flex justify-center items-start max-w-2xl mx-auto mb-10">
            <div className="absolute top-4 right-[10%] left-[10%] h-[2px] bg-gold/40 -z-0" />
            <div className="grid grid-cols-4 w-full gap-2 relative z-10">
              {[
                { num: '01', title: 'التسجيل والاسم الصح' },
                { num: '02', title: 'تجهيز الملف' },
                { num: '03', title: 'اختبار الدخول' },
                { num: '04', title: 'المرحلة الثانية' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gold border-[3px] border-[#0d1b2a] shadow-[0_0_0_2px_#c9a84c]" />
                  <span className="text-[11px] font-bold text-gold">{step.num}</span>
                  <span className="text-xs font-semibold text-white leading-tight">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            <div className="bg-[#112236] border border-[#1e3a56] rounded-lg px-3 py-1 text-xs text-[#8fa3bb]">
              إصدار <span className="text-gold font-bold">1.2</span>
            </div>
            <div className="bg-[#112236] border border-[#1e3a56] rounded-lg px-3 py-1 text-xs text-[#8fa3bb]">
              آخر مراجعة <span className="text-gold font-bold">21·08·2026</span>
            </div>
            <div className="bg-[#112236] border border-[#1e3a56] rounded-lg px-3 py-1 text-xs text-[#8fa3bb]">
              دورة <span className="text-gold font-bold">2026–2027</span>
            </div>
            <div className="bg-[#112236] border border-gold/40 rounded-lg px-3 py-1 text-xs text-white">
              موجّه إلى <span className="text-gold font-bold">الطلبة في الجزائر 🇩🇿</span>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="bg-gold text-navy font-black px-7 py-3 rounded-full text-sm hover:bg-gold-light transition shadow-gold"
            >
              🛎️ اطلب خدمة التسجيل والترجمة
            </Link>
            <a
              href="#toc"
              className="border border-[#1e3a56] text-white hover:border-gold hover:text-gold font-bold px-7 py-3 rounded-full text-sm transition"
            >
              تصفح الدليل خطوة بخطوة ↓
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6">
        {/* ─── TOC ─── */}
        <div id="toc" className="toc mt-10">
          <div className="toc-title">محتويات الدليل العملي</div>
          <ul className="toc-list">
            <li><a href="#part0"><span className="toc-num">—</span> قبل ما تبدأ</a></li>
            <li><a href="#part1"><span className="toc-num">1</span> اعرف الملعب — المواعيد والمسارات</a></li>
            <li><a href="#part2"><span className="toc-num">2</span> الاسم وجواز السفر الجزائري</a></li>
            <li><a href="#part3"><span className="toc-num">3</span> التسجيل وحاسبة الأهلية</a></li>
            <li><a href="#part4"><span className="toc-num">4</span> الحساب والملف (Portfolio)</a></li>
            <li><a href="#motivation"><span className="toc-num">4B</span> خطاب الدوافع (Motivation Letter)</a></li>
            <li><a href="#part5"><span className="toc-num">5</span> الإنجازات بعمق (Achievements)</a></li>
            <li><a href="#part6"><span className="toc-num">6</span> اختبار الدخول (Entry Test)</a></li>
            <li><a href="#part7"><span className="toc-num">7</span> مسارات وجامعات ومواعيد</a></li>
            <li><a href="#checklist"><span className="toc-num">8</span> الـChecklist التفاعلية والطباعة</a></li>
            <li><a href="#part9"><span className="toc-num">9</span> المرحلة الثانية والاستعداد لها</a></li>
            <li><a href="#errors"><span className="toc-num">10</span> أخطاء شائعة تتكرر كل سنة</a></li>
            <li><a href="#services"><span className="toc-num">★</span> خدمات التسجيل والترجمة للجزائريين</a></li>
            <li><a href="#resources"><span className="toc-num">—</span> المصادر والروابط الرسمية</a></li>
          </ul>
        </div>

        {/* ══════════════════════════════════════════
             PART 0: قبل ما تبدأ
        ═══════════════════════════════════════════ */}
        <section id="part0">
          <div className="part-header">
            <div className="part-eyebrow">قبل ما تبدأ</div>
            <h2 className="part-title">الإصدار وتاريخ المراجعة</h2>
          </div>

          <p>
            هذا الدليل يشرح واجهة حية لمنصة Open Doors — ومن المهم معرفة تاريخ مراجعة المعلومات وكيفية متابعة التحديثات إن طرأ أي تغيير على الواجهة أو الشروط.
          </p>

          <div className="card card-warning mt-4">
            <div className="card-badge">⚠ تنبيه مهم</div>
            <p>
              كل قاعدة ومرحلة في هذا الدليل تمت مراجعتها من موقع Open Doors الرسمي ومن داخل حساب حقيقي مشارك في المسابقة. <strong>المرجع النهائي دائماً هو موقع Open Doors الرسمي</strong>، وهذا الدليل وُضِع لتبسيط الفهم والتسجيل الصحيح دون الوقوع في الأخطاء الشائعة.
            </p>
          </div>

          <h3 className="section-title">الدليل لمن، وماذا يقدّم لك؟</h3>
          <p>
            Open Doors هي أولمبياد دولية تفتح طريق منح ممولة بالكامل للدراسة والبحث في روسيا ضمن الحصة الحكومية الروسية. المسابقة لها 4 مسارات، وهذا الدليل مخصص ومكيف للطالب الجزائري الذي يقدّم لأول مرة:
          </p>

          <div className="info-box">
            <h4>المسارات الأربعة (وفق النظام التعليمي الجزائري)</h4>
            <ul>
              <li><strong>Bachelor's (ليسانس)</strong> — لحاملي شهادة البكالوريا الجزائرية (أو طلاب السنة الثالثة ثانوي المقبلين على اجتيازها).</li>
              <li><strong>Master's (ماستر)</strong> — لحاملي شهادة الليسانس (أو طلاب سنة التخرج L3).</li>
              <li><strong>Doctoral (دكتوراه)</strong> — لحاملي شهادة الماستر أو مهندس دولة (أو طلاب سنة التخرج M2).</li>
              <li><strong>Postdoctoral (ما بعد الدكتوراه)</strong> — لحاملي شهادة الدكتوراه والراغبين في موقع بحثي ممول في روسيا.</li>
            </ul>
          </div>

          <h3 className="section-title">ما الذي تحتاجه قبل فتح نموذج التسجيل؟</h3>
          <p>
            جهّز هذه العناصر قبل البدء لملء الاستمارة بتركيز ودفعة واحدة:
          </p>
          <ul className="checklist">
            <li><strong>جواز السفر الجزائري (البيومتري)</strong> — ساري المفعول مع وضوح صفحة البيانات والسطرين في الأسفل (MRZ).</li>
            <li><strong>بريد إلكتروني دائم وخاص بك</strong> — تتحكم فيه لسنتين على الأقل (تجنّب الإيميلات المؤقتة أو بريد الجامعة الذي قد يُغلق).</li>
            <li><strong>رقم هاتف جزائري نشط (+213)</strong>.</li>
            <li><strong>المستندات التعليمية</strong> — شهادة البكالوريا، كشوف النقاط، أو شهادة الليسانس/الماستر حسب المسار.</li>
          </ul>

          <div className="card card-experience">
            <div className="card-badge">من تجربتنا — EXPERIENCE</div>
            <p>
              لا تستعجل التسجيل في اليوم الأول دون تحضير، وفي نفس الوقت لا تؤجل للأسبوع الأخير. <strong>خانات الهوية (الاسم، تاريخ الميلاد، الجنسية) تُقفل نهائياً لحظة إنشاء الحساب</strong> — والأهم هو الدخول بملف جاهز وبيانات صحيحة.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 1: اعرف الملعب
        ═══════════════════════════════════════════ */}
        <section id="part1">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الأول</div>
            <h2 className="part-title">اعرف الملعب — المواعيد والمسارات</h2>
          </div>

          <h3 className="section-title">أهم المواعيد الرسمية لدورة 2026–2027</h3>
          <p>قبل أي خطوة، ثبّت هذه المواعيد في مفكرتك. <strong>جميع المواعيد بتوقيت موسكو (GMT+3) — وليس توقيت الجزائر.</strong></p>

          <div className="dates-grid">
            <div className="date-card">
              <div className="date-badge">20 Aug → 1 Nov 2026</div>
              <div className="date-desc">التسجيل وتجهيز الـPortfolio — الفترة المتاحة لإنشاء الحساب وتعديل الملف.</div>
            </div>
            <div className="date-card">
              <div className="date-badge">18 Oct 2026</div>
              <div className="date-desc">آخر موعد لسحب ملف Portfolio تم تقديمه مبكراً لتعديله (Revoke) قبل 11:59 مساءً بتوقيت موسكو.</div>
            </div>
            <div className="date-card">
              <div className="date-badge">1 Nov 2026</div>
              <div className="date-desc">إغلاق باب التسجيل والتعديل — والملف المكتمل يُرسل تلقائياً للتقييم في نفس اليوم.</div>
            </div>
            <div className="date-card">
              <div className="date-badge">13 Nov 2026</div>
              <div className="date-desc">إعلان نتائج المرحلة الأولى (تقييم الملفات).</div>
            </div>
            <div className="date-card">
              <div className="date-badge">16 Nov 2026</div>
              <div className="date-desc">آخر موعد لتأكيد التسجيل في المرحلة الثانية — أيام قليلة جداً بعد النتائج، لذا ابدأ التحضير مبكراً.</div>
            </div>
            <div className="date-card">
              <div className="date-badge">6 Dec 2026</div>
              <div className="date-desc">آخر موعد لرفع فيديو مسار Postdoctoral (خاص بهذا المسار فقط).</div>
            </div>
            <div className="date-card">
              <div className="date-badge">21 Dec 2026</div>
              <div className="date-desc">نتائج المرحلة الثانية وإعلان الفائزين والوصفاء لمساري ليسانس وماستر.</div>
            </div>
            <div className="date-card">
              <div className="date-badge">22 Dec → 26 Feb 2027</div>
              <div className="date-desc">المرحلة الثالثة — لمساري الدكتوراه وما بعد الدكتوراه.</div>
            </div>
          </div>

          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>"المشاركة في Open Doors مجانية بالكامل — لا توجد أي رسوم اشتراك في أي مرحلة من مراحل المسابقة."</blockquote>
            <p className="source-ref">المصدر: Open Doors Rules — البند 17</p>
          </div>

          <div className="card card-warning">
            <div className="card-badge">⚠ تحذير التوقيت</div>
            <p>
              جميع المواعيد بتوقيت موسكو (+3 GMT). فارق التوقيت مع الجزائر هو ساعتان (+2). «آخر يوم» بتوقيتك قد يكون قد انتهى فعلياً في موسكو — <strong>لا تؤجل لآخر الساعات.</strong>
            </p>
          </div>

          <h3 className="section-title">المسارات الأربعة وشروطها (للطالب الجزائري)</h3>
          <p>حدّد مسارك من الجدول التالي — <strong>السن يُحسب في تاريخ فتح التسجيل 20 أغسطس 2026:</strong></p>

          <table className="tracks-table">
            <thead>
              <tr>
                <th>الشرط</th>
                <th>Bachelor's (ليسانس)</th>
                <th>Master's (ماستر)</th>
                <th>Doctoral (دكتوراه)</th>
                <th>Postdoctoral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-head">السن المطلوب</td>
                <td>16–23 سنة</td>
                <td>20–33 سنة</td>
                <td>22–35 سنة</td>
                <td>24–39 سنة</td>
              </tr>
              <tr>
                <td className="row-head">المؤهل المطلوب</td>
                <td>شهادة البكالوريا (أو في طور الحصول عليها)</td>
                <td>شهادة ليسانس (أو في سنة التخرج)</td>
                <td>شهادة ماستر / مهندس (أو في سنة التخرج)</td>
                <td>شهادة دكتوراه مُكتملة</td>
              </tr>
              <tr>
                <td className="row-head">عدد المراحل</td>
                <td>مرحلتان (2)</td>
                <td>مرحلتان (2)</td>
                <td>3 مراحل</td>
                <td>3 مراحل (بحثية)</td>
              </tr>
              <tr>
                <td className="row-head">الجائزة</td>
                <td colspan="3">مقعد دراسي ممول بالكامل ضمن الحصة الحكومية الروسية</td>
                <td>موقع بحثي ممول — ليس مقعداً دراسياً</td>
              </tr>
            </tbody>
          </table>

          <div className="card card-experience">
            <div className="card-badge">من تجربتنا — EXPERIENCE</div>
            <p>
              لو كنت في سنة التخرج (L3 أو M2) — استمارة التسجيل ستعرض لك المسار المؤهل له تلقائياً بناءً على تاريخ ميلادك ومؤهلك. <strong>لا تختر مساراً أعلى بمؤهل لم يكتمل دون استيفاء الشروط.</strong>
            </p>
          </div>

          <h3 className="section-title">خريطة رحلة التقديم في 5 محطات</h3>
          <div className="strategy-steps">
            <div className="strategy-step">
              <div className="step-circle">1</div>
              <div className="step-body">
                <h4>التسجيل بالاسم الصحيح والمطابق</h4>
                <p>الإيميل، البيانات من جواز السفر، واختيار المجالات العلمية — بعد Register تُقفل بيانات الهوية.</p>
              </div>
            </div>
            <div className="strategy-step">
              <div className="step-circle">2</div>
              <div className="step-body">
                <h4>لوحة الحساب — جدول ملف الـPortfolio</h4>
                <p>إكمال الخانات الأربع لكل مجال: المستندات التعليمية، خطاب الدوافع، الإنجازات، واختبار الدخول.</p>
              </div>
            </div>
            <div className="strategy-step">
              <div className="step-circle">3</div>
              <div className="step-body">
                <h4>اختبار الدخول — Entry Test</h4>
                <p>90 مهمة في 60 دقيقة، مع 3 محاولات لكل مجال يُسجّل النظام أفضلها.</p>
              </div>
            </div>
            <div className="strategy-step">
              <div className="step-circle">4</div>
              <div className="step-body">
                <h4>1 نوفمبر — الإرسال التلقائي للتقييم</h4>
                <p>الملف المكتمل يُرسل تلقائياً للجنة التحكيم، ويُغلق باب التعديل والتسجيل.</p>
              </div>
            </div>
            <div className="strategy-step">
              <div className="step-circle">5</div>
              <div className="step-body">
                <h4>النتائج ← المرحلة الثانية المباشرة</h4>
                <p>إعلان المؤهلين يوم 13 نوفمبر، وإغلاق تأكيد المرحلة الثانية في 16 نوفمبر — الاستعداد يبدأ فوراً.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 2: الاسم والMRZ
        ═══════════════════════════════════════════ */}
        <section id="part2">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الثاني</div>
            <h2 className="part-title">الاسم وجواز السفر الجزائري 🇩🇿</h2>
          </div>

          <h3 className="section-title">لماذا يُعدّ الاسم أخطر حقل في التقديم؟</h3>
          <p>
            أربع خانات في استمارة التسجيل — <strong>Date of birth</strong> و<strong>Name (names)</strong> و<strong>Family name</strong> و<strong>Citizenship</strong> — تُكتب مرة واحدة وتُقفل نهائياً فور إنشاء الحساب.
          </p>

          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>
              "The 'Citizenship', 'Family name', 'Name(s)' and 'Date of Birth' fields must exactly match the details in the foreign passport you plan to use for identification within the Russian Federation"
            </blockquote>
            <p>
              يعني: هذه الخانات الأربع يجب أن تطابق جواز سفرك الجزائري البيومتري <strong>حرفياً باللغة اللاتينية</strong> — كما هي مدونة في وثيقتك الرسمية.
            </p>
            <p className="source-ref">المصدر: استمارة التسجيل + Open Doors Rules — البند 27</p>
          </div>

          <div className="card card-warning">
            <div className="card-badge">⚠ قبل الحفظ</div>
            <p>
              لا يمكن التعديل الذاتي بعد إنشاء الحساب — وأي تصحيح يستلزم مراسلة الدعم الرسمي مع إثباتات. لذلك <strong>افتح جواز سفرك الجزائري أمامك أولاً، وانقل البيانات كما هي مطبوعة تماماً.</strong>
            </p>
          </div>

          {/* ─── Algerian Passport Visual Simulation ─── */}
          <h3 className="section-title">محاكاة صفحة بيانات جواز السفر الجزائري البيومتري</h3>
          <p>
            هذا نموذج يوضح كيفية أخذ البيانات مباشرة من صفحة جواز السفر الجزائري:
          </p>

          <div className="bg-[#0b1622] border-2 border-[#1e3a56] rounded-2xl p-6 my-6 shadow-2xl relative overflow-hidden font-sans">
            {/* Passport Header */}
            <div className="border-b border-[#1e3a56] pb-4 mb-5 text-center">
              <div className="text-[11px] text-gold font-bold tracking-widest uppercase">الجمهورية الجزائرية الديمقراطية الشعبية</div>
              <div className="text-xs text-white font-extrabold tracking-wider uppercase mt-0.5">REPUBLIQUE ALGERIENNE DEMOCRATIQUE ET POPULAIRE · PASSPORT</div>
            </div>

            {/* Passport Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">اللقب / Nom / Surname</div>
                <div className="text-gold font-mono font-bold text-base tracking-wider">BENALI</div>
                <div className="text-[10px] text-green-400 mt-1">← يُنقل إلى خانة: <strong>Family name</strong></div>
              </div>

              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">الأسماء / Prénoms / Given names</div>
                <div className="text-gold font-mono font-bold text-base tracking-wider">MOHAMED AMINE</div>
                <div className="text-[10px] text-green-400 mt-1">← يُنقل إلى خانة: <strong>Name (names)</strong></div>
              </div>

              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">تاريخ الميلاد / Date de naissance</div>
                <div className="text-white font-mono font-bold text-sm tracking-wider">05/03/2004 <span className="text-[#8fa3bb] text-xs font-normal">(5 مارس 2004)</span></div>
                <div className="text-[10px] text-amber-300 mt-1">⚠️ يُحوّل في الموقع إلى mm/dd/yyyy: <strong>03/05/2004</strong></div>
              </div>

              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">الجنسية / Nationalité / Nationality</div>
                <div className="text-white font-mono font-bold text-sm tracking-wider">Algérienne / DZA</div>
                <div className="text-[10px] text-green-400 mt-1">← اختر من القائمة: <strong>Algeria</strong></div>
              </div>

              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">رقم جواز السفر / N° du passeport</div>
                <div className="text-white font-mono font-bold text-sm tracking-wider">19AB12345</div>
                <div className="text-[10px] text-green-400 mt-1">← يُنقل إلى خانة: <strong>Passport No</strong></div>
              </div>

              <div className="bg-[#112236] border border-[#1e3a56] rounded-xl p-3.5">
                <div className="text-[#8fa3bb] text-[11px] mb-1">تاريخ الصلاحية / Date d'expiration</div>
                <div className="text-white font-mono font-bold text-sm tracking-wider">09/06/2032</div>
                <div className="text-[10px] text-green-400 mt-1">← يُكتب في صفحة الجواز: <strong>09-06-2032</strong></div>
              </div>
            </div>
          </div>

          <h3 className="section-title">مطابقة حقول الجواز مع استمارة Open Doors</h3>
          <div className="form-mock">
            <div className="form-mock-title">فورم التسجيل الرسمي — خانات الهوية والاسم</div>
            <div className="form-row">
              <div className="form-label">Family name (اللقب)</div>
              <div className="form-input font-mono font-bold text-white">BENALI</div>
              <div className="form-hint">حروف لاتينية كبيرة كما في Nom بجواز السفر</div>
            </div>
            <div className="form-row">
              <div className="form-label">Name (names) (الاسم الشخصي)</div>
              <div className="form-input font-mono font-bold text-white">MOHAMED AMINE</div>
              <div className="form-hint">حروف لاتينية كبيرة كما في Prénoms بجواز السفر مع فصل الأسماء بمسافات</div>
            </div>
            <div className="form-row">
              <div className="form-label">Date of birth (تاريخ الميلاد بتنسيق mm/dd/yyyy)</div>
              <div className="form-input font-mono font-bold text-gold">03/05/2004</div>
              <div className="form-hint">الشهر أولاً (03) ثم اليوم (05) ثم السنة (2004) لتاريخ 5 مارس 2004</div>
            </div>
            <div className="form-row">
              <div className="form-label">Citizenship (الجنسية)</div>
              <div className="form-input font-mono font-bold text-white">Algeria</div>
              <div className="form-hint">اختر Algeria من القائمة (رمز الهاتف سيتغير تلقائياً إلى +213)</div>
            </div>
            <div className="form-checkbox">Family name is not indicated (تُترك فارغة، إلا إذا كان الجواز لا يحتوي على لقب أصلاً)</div>
            <div className="form-checkbox">Name is not indicated (تُترك فارغة، إلا إذا كان الجواز لا يحتوي على اسم أصلاً)</div>
          </div>

          <h3 className="section-title">جدول مقارنة: أخطاء شائعة في كتابة الاسم</h3>
          <div className="do-dont">
            <div className="dont-side">
              <h4>❌ أخطاء ممنوعة</h4>
              <div className="dont-item">كتابة الاسم بالهجاء الفرنسي الدارج إن اختلف بحرف واحد عن جواز السفر</div>
              <div className="dont-item">عكس الترتيب بوضع الاسم في خانة Family name واللقب في Name(s)</div>
              <div className="dont-item">إضافة اسم الأب أو الجد إذا لم يكن مدوناً في حقل Prénoms بجواز السفر</div>
              <div className="dont-item">اختصار الاسم المركب (مثل كتابة Mohamed فقط بدلاً من MOHAMED AMINE)</div>
              <div className="dont-item">كتابة الاسم بالحروف العربية أو ترجمته ذاتياً</div>
            </div>
            <div className="do-side">
              <h4>✓ الطريقة الصحيحة</h4>
              <div className="do-item">نقل الحروف اللاتينية كما هي مطبوعة في جواز السفر حرفاً بحرف</div>
              <div className="do-item">اللقب في Family name، والأسماء في Name(s)</div>
              <div className="do-item">الالتزام التام بما هو مدون في صفحة بيانات الجواز الجزائري</div>
              <div className="do-item">كتابة كل مكونات الاسم وفصلها بمسافة عادية</div>
              <div className="do-item">الاعتماد الحصري على الحروف اللاتينية في الجواز الجزائري</div>
            </div>
          </div>

          <div className="card card-warning">
            <div className="card-badge">⚠ ماذا لو وقع خطأ في التسجيل؟</div>
            <p>
              <strong>إياك وفتح حساب ثانٍ</strong> — فالقواعد تحظر امتلاك أكثر من حساب في الدورة نفسها (البند 22)، وفتح حساب بديل قد يعرضك للإقصاء التام. الحل الوحيد هو مراسلة الدعم الرسمي لتصحيح الخطأ عبر البريد: <code>opendoors@globaluni.ru</code>.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 3: التسجيل خطوة بخطوة + حاسبة الأهلية
        ═══════════════════════════════════════════ */}
        <section id="part3">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الثالث</div>
            <h2 className="part-title">التسجيل خطوة بخطوة وحاسبة الأهلية 🛠️</h2>
          </div>

          {/* ── Interactive Date Formatter & Track Eligibility Tool ── */}
          <div className="bg-[#112236] border-2 border-gold rounded-2xl p-6 sm:p-8 my-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚡</span>
              <h3 className="text-xl font-bold text-white">حاسبة الأهلية ومولّد تاريخ الميلاد الصحيح</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#8fa3bb] mb-6">
              أدخل تاريخ ميلادك ومستواك الدراسي الحالي للتأكد من المسار المؤهل له وتوليد الصيغة الأمريكية <code>mm/dd/yyyy</code> لنسخها مباشرة في الاستمارة:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
              <div>
                <label className="block text-[11px] font-bold text-gold mb-1">اليوم (Day)</label>
                <select
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-gold"
                >
                  {Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gold mb-1">الشهر (Month)</label>
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-gold"
                >
                  {[
                    { m: '01', name: '01 - جانفي' },
                    { m: '02', name: '02 - فيفري' },
                    { m: '03', name: '03 - مارس' },
                    { m: '04', name: '04 - أفريل' },
                    { m: '05', name: '05 - ماي' },
                    { m: '06', name: '06 - جوان' },
                    { m: '07', name: '07 - جويلية' },
                    { m: '08', name: '08 - أوت' },
                    { m: '09', name: '09 - سبتمبر' },
                    { m: '10', name: '10 - أكتوبر' },
                    { m: '11', name: '11 - نوفمبر' },
                    { m: '12', name: '12 - ديسمبر' },
                  ].map((item) => (
                    <option key={item.m} value={item.m}>{item.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gold mb-1">السنة (Year)</label>
                <select
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-gold"
                >
                  {Array.from({ length: 28 }, (_, i) => String(2010 - i)).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gold mb-1">المؤهل الأكاديمي</label>
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-gold"
                >
                  <option value="bac">شهادة البكالوريا</option>
                  <option value="licence">شهادة ليسانس / L3</option>
                  <option value="master">شهادة ماستر / M2 / مهندس</option>
                  <option value="phd">شهادة دكتوراه</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0d1b2a] border border-[#1e3a56] rounded-xl p-4">
              <div>
                <div className="text-[11px] text-[#8fa3bb] mb-1">الصيغة المطلوبة في الاستمارة (Date of birth):</div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-black text-gold font-mono tracking-wider">{formattedAmericanDate}</span>
                  <button
                    onClick={handleCopyDate}
                    className="bg-gold/15 hover:bg-gold hover:text-navy text-gold text-xs font-bold px-3 py-1.5 rounded-lg transition"
                  >
                    {copied ? '✅ تم النسخ!' : '📋 نسخ'}
                  </button>
                </div>
                <div className="text-[10px] text-[#8fa3bb] mt-1">تنسيق (mm/dd/yyyy): الشهر {birthMonth} / اليوم {birthDay} / السنة {birthYear}</div>
              </div>

              <div>
                <div className="text-[11px] text-[#8fa3bb] mb-1">السن المحتسب في 20 أغسطس 2026: <strong className="text-white">{calculatedAge} سنة</strong></div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>المسار: <strong className="text-gold">{eligibility.track}</strong></span>
                  {eligibility.status === 'eligible' && (
                    <span className="bg-green-900/60 border border-green-500/50 text-green-300 text-[10px] px-2 py-0.5 rounded-full">
                      مستوفي للسن
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-[#8fa3bb] mt-0.5">{eligibility.desc}</div>
              </div>
            </div>
          </div>

          <h3 className="sub-title">1. البريد الإلكتروني والموافقة الأولية</h3>
          <p>
            تبدأ صفحة التسجيل بإدخال الإيميل والموافقة الأولى. هذا الإيميل سيكون اسم المستخدم للدخول وتلقي كافة المراسلات الرسمية.
          </p>

          <div className="form-mock">
            <div className="form-mock-title">Registration — الشاشة الأولى</div>
            <div className="form-row">
              <div className="form-label">① Email</div>
              <div className="form-input text-gray-400">your.email@gmail.com</div>
              <div className="form-hint">"This email address will be used as the login for your personal account"</div>
            </div>
            <div className="form-checkbox">② I give my consent to the processing of email address in accordance with the legislation of the Russian Federation</div>
            <div className="mt-3">
              <div className="bg-gold text-navy font-bold text-center py-2 rounded-md cursor-pointer">③ Continue</div>
            </div>
          </div>

          <div className="card card-experience">
            <div className="card-badge">من تجربتنا — EXPERIENCE</div>
            <p>
              استخدم إيميلك الشخصي الدائم الذي ستتحكم فيه لسنتين على الأقل. في حال الفوز، ستصل عليه وثائق المنحة الرسمية والتأشيرة.
            </p>
          </div>

          <h3 className="sub-title">2. لغة المشاركة (Language of participation)</h3>
          <p>
            تختار هنا لغة <strong>المسابقة والأسئلة</strong> (الروسية أو الإنجليزية). وهي منفصلة تماماً عن لغة الدراسة بالجامعة لاحقاً.
          </p>

          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>
              "You will complete the Open Doors tasks in the language you select for participation. Winners and runners-up will choose their preferred language of instruction at a Russian university separately after the Open Doors results have been announced"
            </blockquote>
            <p>
              أي أنك لو اخترت English لأسئلة المسابقة، يمكنك بعد الفوز اختيار الدراسة باللغة الروسية (مع سنة تحضيرية لتعلم اللغة مجاناً) أو بالإنجليزية.
            </p>
          </div>

          <h3 className="sub-title">3. الجنسية (Citizenship) ورمز الهاتف</h3>
          <p>
            اختر <strong>Algeria</strong> من القائمة المنسدلة. سيتم ضبط رمز الهاتف تلقائياً على <code>+213</code>.
          </p>

          <h3 className="sub-title">4. اختيار المجالات العلمية (Subject Areas)</h3>
          <p>
            يجب اختيار مجال علمي واحد على الأقل من قائمة الـ 14 مجالاً لإتمام التسجيل.
          </p>

          <div className="info-box">
            <h4>استراتيجية اختيار المجالات:</h4>
            <ul>
              <li>كل مجال تختاره يتطلب <strong>خطاب دوافع مستقلاً واختبار دخول مستقلاً</strong>.</li>
              <li>المستندات التعليمية والإنجازات تكون مشتركة لجميع المجالات في حسابك.</li>
              <li>اختر المجالات المتقاربة علمياً (مثال: Computer and Data Science + Applied Mathematics) حتى تخدم إنجازاتك وخلفيتك الأكاديمية كلا المجالين.</li>
            </ul>
          </div>

          <h3 className="sub-title">5. الموافقات الإلزامية الخمس وزر Register</h3>
          <div className="form-mock">
            <div className="form-mock-title">الموافقات قبل تفعيل زر التسجيل</div>
            <div className="form-checkbox">① تأكيد صحة البيانات والوثائق واستيفاء شروط البند 3 للترشح.</div>
            <div className="form-checkbox">② قبول القواعد الرسمية لمسابقة Open Doors 2026.</div>
            <div className="form-checkbox">③ الموافقة على سياسة الخصوصية واستخدام ملفات تعريف الارتباط (Cookies).</div>
            <div className="form-checkbox">④ الموافقة على معالجة البيانات الشخصية (ونموج ولي الأمر للقُصّر أقل من 18 سنة).</div>
            <div className="form-checkbox text-gray-500">⑤ الموافقة على النشرة البريدية (اختيارية).</div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 4: الحساب والملف
        ═══════════════════════════════════════════ */}
        <section id="part4">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الرابع</div>
            <h2 className="part-title">إدارة الحساب وملف الـPortfolio</h2>
          </div>

          <h3 className="section-title">جدول الـPortfolio في الواجهة الحالية</h3>
          <p>
            بمجرد الضغط على Register، ستنتقل مباشرة إلى جدول ملفك. كل صف يمثل مجالاً علمياً، ولكل مجال 4 عناصر أساسية:
          </p>

          <div className="portfolio-grid">
            <div className="portfolio-header">
              <div className="ph-cell">Subject area, track</div>
              <div className="ph-cell">Education documents</div>
              <div className="ph-cell">Motivation letter</div>
              <div className="ph-cell">Entry test</div>
              <div className="ph-cell">Score</div>
              <div className="ph-cell">Status</div>
            </div>
            <div className="portfolio-row">
              <div className="pr-cell subject">Applied Mathematics<br />Master's</div>
              <div className="pr-cell highlight">Not filled in<br />Add</div>
              <div className="pr-cell highlight">Not filled in<br />Add</div>
              <div className="pr-cell highlight">Not passed<br />Get tested</div>
              <div className="pr-cell gold">Add achievement</div>
              <div className="pr-cell highlight text-[10px]">Not ready to be sent for verification</div>
            </div>
          </div>

          <h3 className="section-title">رفع جواز السفر والمستندات التعليمية</h3>
          <div className="info-box">
            <h4>قواعد رفع الوثائق:</h4>
            <ul>
              <li><strong>جواز السفر:</strong> رفع نسخة Scan بصيغة PDF تتضمن صفحة البيانات كاملة بإضاءة واضحة.</li>
              <li><strong>الشهادات وكشوف النقاط:</strong> رفع أصل الوثيقة + الترجمة إلى الروسية أو الإنجليزية في ملف PDF واحد لكل مؤهل.</li>
              <li><strong>تسمية الملفات:</strong> سمّ ملفاتك بأسماء واضحة باللاتينية، مثل: <code>Baccalaureate_Certificate.pdf</code> أو <code>Licence_Transcripts.pdf</code>.</li>
            </ul>
          </div>

          <div className="card card-unverified">
            <div className="card-badge">الترجمة والتوثيق للمرحلة الأولى</div>
            <p>
              تنص القواعد والـ FAQ على أن المستندات باللغات الأخرى (العربية والفرنسية) يجب إرفاق ترجمة لها إلى الروسية أو الإنجليزية. <strong>التصديق النوتاري (Notary) ليس شرطاً إجبارياً في المرحلة الأولى</strong> بل بعد الفوز والترشيح النهائي، ولكن الترجمة الدقيقة الخالية من الأخطاء في الأسماء والمصطلحات ضرورية جداً لنيل أعلى تقييم.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 4B: خطاب الدوافع
        ═══════════════════════════════════════════ */}
        <section id="motivation">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الرابع — تابع</div>
            <h2 className="part-title">خطاب الدوافع (Motivation Letter)</h2>
          </div>

          <div className="card card-warning">
            <div className="card-badge">⚠ تحذير رسمي من الاقتباس الآلي</div>
            <p>
              <strong>"Detection of textual borrowings in the motivation letter will lead to a reduction in the evaluation score!"</strong>
            </p>
            <p>
              أي اقتباس أو نسخ من الإنترنت أو استخدام نماذج جاهزة يؤدي لخصم نقاط التقييم تلقائياً. اكتب الخطاب بأسلوبك الشخصي الحقيقي.
            </p>
          </div>

          <h3 className="section-title">هيكل خطاب الدوافع والأسئلة الأربعة</h3>
          <div className="info-box">
            <h4>الأسئلة الأربعة في المنصة:</h4>
            <ul>
              <li><strong>① Personal goals (أهدافك الشخصية):</strong> ما هدفك المهني والأكاديمي في جملة محددة، وكيف تخدم هذه المنحة مسارك المستقبلي وأثر عودتك؟</li>
              <li><strong>② Professional achievements (إنجازاتك المهنية):</strong> اختر أهم 2–3 إنجازات مرتبطة بالمجال مع ذكر دورك الفعلي والنتيجة الملموسة.</li>
              <li><strong>③ The reason for choosing a subject (سبب اختيار المجال):</strong> ما التجربة أو اللحظة الواقعية التي جعلتك تختار هذا التخصص وكيف يرتبط بدراستك السابقة؟</li>
              <li><strong>④ The reason for choosing to study in Russia (لماذا روسيا؟):</strong> اذكر سبباً علمياً محدداً في روسيا يخدم مجالك (مدرسة علمية، مخابر، برامج متقدمة) وأظهر استعدادك للالتزام بالدراسة هناك.</li>
            </ul>
          </div>

          <div className="arrow-chain">
            <div className="arrow-pill">اهتماماتك العلمية</div>
            <div className="arrow-sep">←</div>
            <div className="arrow-pill">خلفيتك الدراسية</div>
            <div className="arrow-sep">←</div>
            <div className="arrow-pill">إنجازاتك</div>
            <div className="arrow-sep">←</div>
            <div className="arrow-pill">هدفك</div>
            <div className="arrow-sep">←</div>
            <div className="arrow-pill">سبب اختيار التخصص</div>
            <div className="arrow-sep">←</div>
            <div className="arrow-pill">لماذا روسيا؟</div>
          </div>

          <div className="card card-experience">
            <div className="card-badge">من تجربتنا — قاعدة الخيط الواحد</div>
            <p>
              الأسئلة الأربعة تُقرأ في شاشة واحدة أمام المحكّم. تأكد من عدم تكرار نفس المعلومات في سؤالين، ومن وجود ترابط وتسلسل منطقي متماسك كقصة واحدة.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 5: الإنجازات
        ═══════════════════════════════════════════ */}
        <section id="part5">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الخامس</div>
            <h2 className="part-title">الإنجازات بعمق (Achievements)</h2>
          </div>

          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>
              "A maximum of 10 achievements per type may be added. Achievements are a common requirement section for all selected Subject areas."
            </blockquote>
            <p>
              الحد الأقصى هو <strong>10 إنجازات لكل نوع من الأنواع الثمانية</strong> (وليس 10 إجمالاً). الإنجازات مشتركة بين جميع مجالاتك وتُرفع مرة واحدة.
            </p>
          </div>

          <h3 className="section-title">أنواع الإنجازات الثمانية المعتمدة</h3>
          <div className="achieve-types">
            <div className="achieve-type-card">
              <div className="achieve-num">1</div>
              <div>
                <div className="achieve-name">Publications</div>
                <div className="achieve-desc">أبحاث ومقالات علمية منشورة</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">2</div>
              <div>
                <div className="achieve-name">Report at a Conference</div>
                <div className="achieve-desc">مشاركة بمداخلة أو ملصق في مؤتمر علمي</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">3</div>
              <div>
                <div className="achieve-name">Patent / Scientific Discovery</div>
                <div className="achieve-desc">براءة اختراع أو اكتشاف علمي مسجل</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">4</div>
              <div>
                <div className="achieve-name">Online Study Courses</div>
                <div className="achieve-desc">شهادات دورات تدريبية أونلاين في صلب تخصصك</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">5</div>
              <div>
                <div className="achieve-name">Awards for competitions</div>
                <div className="achieve-desc">جوائز مسابقات وأولمبيادات علمية ومسابقات برمجة</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">6</div>
              <div>
                <div className="achieve-name">Work experience</div>
                <div className="achieve-desc">خبرة عمل، تربصات ميدانية وتدريب تطبيقي</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">7</div>
              <div>
                <div className="achieve-name">Participation in projects</div>
                <div className="achieve-desc">مشاركة في مشاريع بحثية أو تطويرية بدور محدد</div>
              </div>
            </div>
            <div className="achieve-type-card">
              <div className="achieve-num">8</div>
              <div>
                <div className="achieve-name">Other awards & certificates</div>
                <div className="achieve-desc">شهادات التكريم، اللغات، ورسائل التوصية الداعمة</div>
              </div>
            </div>
          </div>

          <div className="card card-warning">
            <div className="card-badge">⚠ جودة الإثبات أهم من العدد</div>
            <p>
              التصنيف الخاطئ للإنجازات لمحاولة ملء الخانات يضعف الملف. إنجاز واحد موثق بوثيقة إثبات رسمية واضحة أفضل بكثير من عدة شهادات شكلية لا صلة لها بالمجال.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 6: اختبار الدخول
        ═══════════════════════════════════════════ */}
        <section id="part6">
          <div className="part-header">
            <div className="part-eyebrow">الجزء السادس</div>
            <h2 className="part-title">اختبار الدخول (Entry Test)</h2>
          </div>

          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>
              "The entry test must be completed for each selected Subject area. Each Subject area test may be attempted up to three times, with the best result recorded."
            </blockquote>
            <p>
              اختبار الدخول إلزامي لكل مجال اخترته. لديك <strong>3 محاولات</strong> لكل اختبار، والنظام يحتسب <strong>أعلى نتيجة</strong> تلقائياً.
            </p>
          </div>

          <div className="info-box">
            <h4>تفاصيل الاختبار:</h4>
            <ul>
              <li><strong>عدد المهام: 90 سؤالاً ومهمة</strong> (هذا عدد المهام وليس درجة الامتحان).</li>
              <li><strong>المدة الزمنية: 60 دقيقة</strong> — أي بمعدل أقل من دقيقة لكل سؤال، والسرعة عامل حاسم.</li>
            </ul>
          </div>

          <div className="strategy-steps">
            <div className="strategy-step">
              <div className="step-circle">1</div>
              <div className="step-body">
                <h4>المحاولة الأولى: الاستكشاف وقياس المستوى</h4>
                <p>تعرف على طبيعة الأسئلة وإيقاع الوقت لتحديد نقاط الضعف بدقة.</p>
              </div>
            </div>
            <div className="step-between">
              <strong>+ المراجعة والتحضير:</strong> راجع الموضوعات ونماذج Demo Tasks وركّز على الثغرات التي ظهرت في المحاولة الأولى.
            </div>
            <div className="strategy-step">
              <div className="step-circle">2</div>
              <div className="step-body">
                <h4>المحاولة الثانية: تحقيق القفزة النوعية</h4>
                <p>ادخل المحاولة الثانية بعد التحضير الفعلي لتحقيق النتيجة الأقوى.</p>
              </div>
            </div>
            <div className="strategy-step">
              <div className="step-circle">3</div>
              <div className="step-body">
                <h4>المحاولة الثالثة: فرصة التحسين الإضافية</h4>
                <p>استخدمها بهدوء لتحسين النتيجة إن احتجت لذلك دون ضغط.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 7: المسارات والجامعات
        ═══════════════════════════════════════════ */}
        <section id="part7">
          <div className="part-header">
            <div className="part-eyebrow">الجزء السابع</div>
            <h2 className="part-title">مسارات وجامعات ومواعيد حاسمة</h2>
          </div>

          <h3 className="section-title">اختيار الجامعات الـ 6 المفضلة</h3>
          <div className="card card-official">
            <div className="card-badge">رسمي — OFFICIAL</div>
            <blockquote>"Select up to six universities, at least one of which must be an Open Doors Organizing University."</blockquote>
            <p>
              يمكنك ترتيب حتى 6 جامعات كترتيب أولي. هذا الترتيب ليس نهائياً، بل يتم الاختيار والتأكيد الفعلي بعد الفوز حسب التخصصات المتوفرة في كل جامعة.
            </p>
          </div>

          <h3 className="section-title">التاريخان اللذان يتكرر الخلط بينهما كل عام</h3>
          <div className="two-dates">
            <div className="two-date-card primary">
              <div className="two-date-date">1 Nov 2026</div>
              <div className="two-date-title">الإرسال التلقائي للتقييم</div>
              <div className="two-date-desc">الملفات المكتملة تُرسل تلقائياً للتحكيم، ويُغلق باب التعديل نهائياً في هذا اليوم.</div>
            </div>
            <div className="two-date-card secondary">
              <div className="two-date-date">18 Oct 2026</div>
              <div className="two-date-title">آخر موعد لسحب الملف (Revoke)</div>
              <div className="two-date-desc">إذا قدّمت ملفك مبكراً وأردت إجراء أي تعديل، يجب سحبه قبل 18 أكتوبر الساعة 11:59م بتوقيت موسكو.</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 8: الـChecklist
        ═══════════════════════════════════════════ */}
        <section id="checklist">
          <div className="part-header">
            <div className="part-eyebrow">الجزء الثامن</div>
            <h2 className="part-title">قائمة التحقق التفاعلية (Checklist)</h2>
          </div>
          <p>
            اضغط على أي بند بعد التأكد منه لتحديد اكتماله. نتائج تقييم الملف غير قابلة للاستئناف، لذا راجع ملفك بدقة:
          </p>

          <div className="final-checklist">
            {/* الهوية */}
            <div className="final-section">
              <div className="final-section-title">الهوية وبيانات الجواز</div>
              {[
                { id: 'c1', text: 'الاسم واللقب مدخلان بالحروف اللاتينية كما في جواز السفر الجزائري حرفاً بحرف' },
                { id: 'c2', text: 'تاريخ الميلاد مدخل بالصيغة الصحيحة mm/dd/yyyy (الشهر أولاً)' },
                { id: 'c3', text: 'الجنسية محددة على Algeria ورمز الهاتف +213' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`final-item ${checkedItems[item.id] ? 'opacity-50 border-gold' : ''}`}
                >
                  <span className="final-item-check">{checkedItems[item.id] ? '☑' : '☐'}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* المستندات */}
            <div className="final-section">
              <div className="final-section-title">المستندات والشهادات</div>
              {[
                { id: 'c4', text: 'سكان جواز السفر واضح بصيغة PDF ويشمل صفحة البيانات كاملة' },
                { id: 'c5', text: 'شهادة البكالوريا / الليسانس / الماستر مرفوعة مع الترجمة المرفقة' },
                { id: 'c6', text: 'كشوف النقاط مرفوعة ومترجمة بصيغة واضحة' },
                { id: 'c7', text: 'الملفات مسمّاة بأسماء لاتينية واضحة خالية من الرموز المعقدة' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`final-item ${checkedItems[item.id] ? 'opacity-50 border-gold' : ''}`}
                >
                  <span className="final-item-check">{checkedItems[item.id] ? '☑' : '☐'}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* الـPortfolio */}
            <div className="final-section">
              <div className="final-section-title">ملف الـPortfolio</div>
              {[
                { id: 'c8', text: 'خطاب دوافع مكتمل لكل مجال بأسلوبك الشخصي وبدون اقتباس' },
                { id: 'c9', text: 'الإجابات الأربعة لخطاب الدوافع تشكل قصة متماسكة ومترابطة' },
                { id: 'c10', text: 'الإنجازات مصنفة في أنواعها الصحيحة مع إرفاق الوثائق الداعمة' },
                { id: 'c11', text: 'اجتياز اختبار الدخول (Entry test) لكل مجال واستغلال المحاولات' },
                { id: 'c12', text: 'حالة جدول الـPortfolio جاهزة وليست Not ready قبل 1 نوفمبر' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`final-item ${checkedItems[item.id] ? 'opacity-50 border-gold' : ''}`}
                >
                  <span className="final-item-check">{checkedItems[item.id] ? '☑' : '☐'}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             PART 9: المرحلة الثانية
        ═══════════════════════════════════════════ */}
        <section id="part9">
          <div className="part-header">
            <div className="part-eyebrow">الجزء التاسع</div>
            <h2 className="part-title">المرحلة الثانية (الاختبار المباشر)</h2>
          </div>

          <h3 className="section-title">أرقام وهيكل المرحلة الثانية</h3>
          <p>
            تُجرى المرحلة الثانية بين 13 نوفمبر و 21 ديسمبر 2026 بجلسة اختبار خاضعة للمراقبة الإلكترونية (Proctoring):
          </p>

          <div className="stage2-grid">
            <div className="stage2-card">
              <div className="stage2-num gold">46</div>
              <div className="stage2-label">مهمة إجمالاً</div>
            </div>
            <div className="stage2-card">
              <div className="stage2-num text-white">25</div>
              <div className="stage2-label">أساسية (إجابة واحدة)</div>
            </div>
            <div className="stage2-card">
              <div className="stage2-num text-white">15</div>
              <div className="stage2-label">متوسطة (متعددة)</div>
            </div>
            <div className="stage2-card">
              <div className="stage2-num text-white">3</div>
              <div className="stage2-label">متقدمة (مفصلة)</div>
            </div>
            <div className="stage2-card">
              <div className="stage2-num text-white">3</div>
              <div className="stage2-label">شفوية</div>
            </div>
          </div>

          <div className="stage2-row2">
            <div className="stage2-card2">
              <div className="stage2-num2">180</div>
              <div className="stage2-label2">دقيقة إجمالاً</div>
            </div>
            <div className="stage2-card2">
              <div className="stage2-num2">175</div>
              <div className="stage2-label2">للجزء المكتوب</div>
            </div>
            <div className="stage2-card2">
              <div className="stage2-num2">5</div>
              <div className="stage2-label2">للجزء الشفوي</div>
            </div>
          </div>

          <div className="card card-official">
            <div className="card-badge">رسمي — المراقبة الإلكترونية</div>
            <p>
              تتطلب الجلسة جهاز حاسوب وكاميرا ويب متصلة مع إنترنت ثابت بسرعة 1 Mbit/s على الأقل. الشاشة والكاميرا تكونان قيد التسجيل طوال مدة الاختبار.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             ERRORS: الأخطاء الشائعة
        ═══════════════════════════════════════════ */}
        <section id="errors">
          <div className="part-header">
            <div className="part-eyebrow">الجزء العاشر</div>
            <h2 className="part-title">أخطاء شائعة تتكرر كل سنة</h2>
          </div>

          <div className="errors-list">
            <div className="error-item">
              <div className="error-ref">الاسم</div>
              <div>كتابة الاسم بهجاء غير مطابق لجواز السفر، ثم اكتشاف إقفال الخانات بعد التسجيل.</div>
            </div>
            <div className="error-item">
              <div className="error-ref">تاريخ الميلاد</div>
              <div>إدخال التاريخ بصيغة يوم/شهر بدلاً من شهر/يوم (mm/dd/yyyy).</div>
            </div>
            <div className="error-item">
              <div className="error-ref">المواعيد</div>
              <div>الخلط بين موعد السحب للتعديل (18 أكتوبر) وموعد الإغلاق النهائي (1 نوفمبر).</div>
            </div>
            <div className="error-item">
              <div className="error-ref">الإنجازات</div>
              <div>الاعتقاد بأن الحد الأقصى 10 إنجازات إجمالاً (بينما الصحيح هو 10 لكل نوع من الأنواع الثمانية).</div>
            </div>
            <div className="error-item">
              <div className="error-ref">اختبار الدخول</div>
              <div>استهلاك المحاولات الثلاث في يومين دون مراجعة أو تحضير بين المحاولات.</div>
            </div>
            <div className="error-item">
              <div className="error-ref">حساب ثانٍ</div>
              <div>محاولة فتح حساب جديد لتصحيح خطأ مطبعي بدلاً من التواصل مع الدعم الرسمي، مما يعرض الملف للاستبعاد.</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             SERVICES & REGISTRATION ASSISTANCE
        ═══════════════════════════════════════════ */}
        <section id="services" className="pt-6">
          <div className="part-header">
            <div className="part-eyebrow">خدماتنا للطلبة الجزائريين 🇩🇿</div>
            <h2 className="part-title">التسجيل والترجمة المعتمدة</h2>
          </div>

          <p>
            إذا كنت تريد ضمان تسجيل صحيح واحترافي لملفك وتوفير وقتك وجهدك في الترجمة وصياغة خطابات الدوافع:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* بطاقة خدمة التسجيل */}
            <div className="bg-[#112236] border-2 border-gold rounded-2xl p-6 relative flex flex-col justify-between">
              <div className="absolute top-0 left-0 bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-br-xl">
                ⭐ الخدمة الأكثر طلباً
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 mt-2">🖊️ خدمة التسجيل الكامل في المنحة</h3>
                <p className="text-xs text-[#8fa3bb] leading-relaxed mb-4">
                  نتولى إنشاء الحساب بدقة من جواز السفر، ملء النموذج، ضبط المسارات، مراجعة وتنسيق خطابات الدوافع (4 أسئلة)، رفع المستندات وترتيب الإنجازات حتى الإرسال النهائي.
                </p>
                <div className="text-2xl font-black text-gold mb-1">15,000 دج</div>
                <div className="text-[11px] text-amber-300 mb-6">⚠️ الخدمة تضمن التسجيل الصحيح والمكتمل للملف وفق القواعد الرسمية.</div>
              </div>
              <a
                href="https://wa.me/213563965871?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9%20%D9%84%D9%85%D9%86%D8%AD%D8%A9%20%D8%B1%D9%88%D8%B3%D9%8A%D8%A7%20Open%20Doors"
                target="_blank"
                rel="noopener"
                className="block text-center bg-[#25D366] text-white font-bold py-2.5 rounded-full text-xs hover:opacity-90 transition"
              >
                💬 اطلب التسجيل عبر واتساب
              </a>
            </div>

            {/* بطاقة خدمة الترجمة */}
            <div className="bg-[#112236] border border-[#1e3a56] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🌐 ترجمة المستندات إلى الروسية</h3>
                <p className="text-xs text-[#8fa3bb] leading-relaxed mb-4">
                  ترجمة رسمية دقيقة لشهادات البكالوريا، كشوف النقاط، شهادات الليسانس والماستر، جواز السفر والتقارير الطبية بصيغة مقبولة لدى لجان المنحة.
                </p>
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-3 text-xs text-gold-light mb-6">
                  🎁 خصم خاص على الترجمة عند طلب خدمة التسجيل معاً!
                </div>
              </div>
              <Link
                href="/services"
                className="block text-center bg-gold text-navy font-bold py-2.5 rounded-full text-xs hover:bg-gold-light transition"
              >
                اطّلع على قائمة أسعار الترجمة الكاملة واستخدم الحاسبة التفاعلية ←
              </Link>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══════════════════════════════════════════
             RESOURCES & OFFICIAL LINKS
        ═══════════════════════════════════════════ */}
        <section id="resources">
          <div className="part-header">
            <div className="part-eyebrow">المصادر الرسمية</div>
            <h2 className="part-title">الروابط والمتابعة</h2>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-num">1</div>
              <div className="resource-title">موقع Open Doors الرسمي</div>
              <div className="resource-desc">البوابة الرسمية لإنشاء الحساب ومتابعة شروط وتفاصيل المسابقة.</div>
              <a href="https://od.globaluni.ru" className="resource-link" target="_blank" rel="noopener">od.globaluni.ru</a>
            </div>
            <div className="resource-card">
              <div className="resource-num">2</div>
              <div className="resource-title">قنوات التواصل والمساندة</div>
              <div className="resource-desc">تواصل معنا عبر واتساب أو تيليجرام لأي استفسار أو مساعدة في التسجيل.</div>
              <a href="https://wa.me/213563965871?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9%20%D9%84%D9%85%D9%86%D8%AD%D8%A9%20%D8%B1%D9%88%D8%B3%D9%8A%D8%A7%20Open%20Doors" className="resource-link" target="_blank" rel="noopener">+213 563 965 871</a>
            </div>
            <div className="resource-card">
              <div className="resource-num">3</div>
              <div className="resource-title">تيليجرام مباشر</div>
              <div className="resource-desc">مراسلة مباشرة لطرح الأسئلة واستلام تحديثات المنحة أولاً بأول.</div>
              <a href="https://t.me/privet_allo" className="resource-link" target="_blank" rel="noopener">@privet_allo</a>
            </div>
            <div className="resource-card">
              <div className="resource-num">4</div>
              <div className="resource-title">إنستغرام للتحديثات</div>
              <div className="resource-desc">نصائح ومشاركات يومية حول الدراسة والمنح في روسيا.</div>
              <a href="https://instagram.com/ramzi.ay78" className="resource-link" target="_blank" rel="noopener">@ramzi.ay78</a>
            </div>
          </div>

          {/* Final inspirational card */}
          <div className="card text-center p-8 my-8 border-gold bg-gradient-to-br from-[#0e1e31] to-[#112236]">
            <h3 className="text-2xl font-black text-white mb-3">كلمة ختامية للطلبة الجزائريين 🇩🇿</h3>
            <p className="max-w-xl mx-auto text-[#8fa3bb] text-sm leading-relaxed mb-6">
              منحة Open Doors فرصة حقيقية للحصول على مقعد دراسي ممول بالكامل في أرقى الجامعات الروسية. النجاح يبدأ من التسجيل المنظم والدقيق، وبناء ملف يعكس كفاءتك واهتمامك الحقيقي. نرجو لكم جميعاً كل التوفيق والنجاح.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center text-lg font-black text-navy">
                🇩🇿
              </div>
              <div className="text-right">
                <div className="font-bold text-white text-sm">دليل منحة Open Doors</div>
                <div className="text-xs text-gold">خدمة الطلبة الجزائريين في روسيا</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
