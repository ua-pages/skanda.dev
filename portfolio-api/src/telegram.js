export async function nadislatyLider(dto) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram credentials not configured. Lead accepted but not sent.');
    return;
  }

  const text = [
    '🔥 New portfolio lead',
    '',
    `Name: ${dto.name}`,
    `Contact: ${dto.contact}`,
    `Service: ${dto.service}`,
    `Budget: ${dto.budget}`,
    `Timeline: ${dto.timeline}`,
    '',
    'Message:',
    dto.message,
  ].join('\n');

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Telegram send failed:', err);
  }
}
