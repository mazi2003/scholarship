export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_TO = process.env.SENDGRID_TO;

  if (!SENDGRID_API_KEY || !SENDGRID_TO) {
    // In development, just log the message
    console.log('Contact form submission:', { name, email, message });
    return res.status(200).json({ ok: true });
  }

  const body = JSON.stringify({
    personalizations: [{ to: [{ email: SENDGRID_TO }] }],
    from: { email: 'no-reply@open-doors-dz.vercel.app' },
    subject: `رسالة جديدة من ${name} – Open Doors الجزائر`,
    content: [
      {
        type: 'text/plain',
        value: `الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`,
      },
    ],
  });

  try {
    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!sgRes.ok) {
      const err = await sgRes.text();
      console.error('SendGrid error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Fetch error:', e);
    return res.status(500).json({ error: 'Network error' });
  }
}
