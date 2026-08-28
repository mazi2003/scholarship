import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert('حدث خطأ. يرجى المحاولة مجددًا.');
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-center py-16 px-6 border-b border-[#1e3a56] bg-gradient-to-b from-[#0a1520] via-[#0d1b2a] to-[#112236]">
        <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">
          تواصل معنا · خدمة الطلبة الجزائريين 🇩🇿
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">تواصل معنا</h1>
        <p className="text-[#8fa3bb] text-sm max-w-lg mx-auto">
          هل لديك سؤال حول منحة Open Doors أو ترغب في الاستفسار عن خدمات التسجيل والترجمة؟ أرسل لنا رسالتك.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {submitted ? (
          <div className="text-center bg-[#112236] border border-gold rounded-2xl p-10 shadow-card">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-white font-bold text-2xl mb-2">تم إرسال رسالتك بنجاح!</h2>
            <p className="text-[#8fa3bb] text-sm">سنتواصل معك في أقرب وقت ممكن عبر البريد أو الهاتف.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#112236] rounded-2xl shadow-card border border-[#1e3a56] p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-white font-semibold text-sm mb-1.5">الاسم واللقب</label>
              <input
                name="name"
                placeholder="أدخل اسمك الكامل"
                className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold placeholder:text-[#4a6a88]"
                required
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-sm mb-1.5">البريد الإلكتروني</label>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold placeholder:text-[#4a6a88]"
                required
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-sm mb-1.5">رقم الهاتف (واتساب إن وجد)</label>
              <input
                name="phone"
                type="tel"
                placeholder="+213..."
                className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold placeholder:text-[#4a6a88]"
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-sm mb-1.5">الرسالة أو الاستفسار</label>
              <textarea
                name="message"
                placeholder="اكتب سؤالك أو استفسارك هنا..."
                rows={5}
                className="w-full bg-[#0d1b2a] border border-[#1e3a56] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold placeholder:text-[#4a6a88]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-navy font-bold py-3.5 rounded-xl hover:bg-gold-light transition text-sm shadow-gold"
            >
              إرسال الرسالة
            </button>
          </form>
        )}
      </section>
    </>
  );
}
