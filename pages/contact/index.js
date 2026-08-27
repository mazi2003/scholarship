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
      <section
        className="text-center text-white px-6 py-20"
        style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #2A9D8F 100%)' }}
      >
        <h1 className="text-4xl font-heading font-black mb-3">تواصل معنا</h1>
        <p className="text-gray-200 font-body max-w-lg mx-auto">
          هل لديك سؤال حول المنحة أو التسجيل؟ أرسل لنا رسالة وسنردّ عليك في أقرب وقت.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="text-center bg-teal/10 border border-teal rounded-2xl p-10">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-navy font-heading font-bold text-2xl mb-2">تم إرسال رسالتك بنجاح!</h2>
            <p className="text-muted font-body">سنتواصل معك في أقرب وقت ممكن.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 space-y-5"
          >
            <div>
              <label className="block text-navy font-heading font-semibold mb-1">الاسم الكامل</label>
              <input
                name="name"
                placeholder="أدخل اسمك"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>
            <div>
              <label className="block text-navy font-heading font-semibold mb-1">البريد الإلكتروني</label>
              <input
                name="email"
                type="email"
                placeholder="example@univ.dz"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>
            <div>
              <label className="block text-navy font-heading font-semibold mb-1">الرسالة</label>
              <textarea
                name="message"
                placeholder="اكتب سؤالك أو استفسارك هنا..."
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal text-white font-heading font-bold py-3 rounded-xl hover:bg-teal/80 transition text-lg"
            >
              إرسال الرسالة
            </button>
          </form>
        )}
      </section>
    </>
  );
}
