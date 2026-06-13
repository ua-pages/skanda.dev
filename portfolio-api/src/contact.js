import { nadislatyLider } from './telegram.js';

const requiredFields = ['name', 'contact', 'service', 'budget', 'timeline', 'message'];

const validations = {
  name:     { min: 2,  max: 80  },
  contact:  { min: 3,  max: 140 },
  service:  { min: 0,  max: 120 },
  budget:   { min: 0,  max: 80  },
  timeline: { min: 0,  max: 80  },
  message:  { min: 12, max: 2000 },
};

function validuvaty(dto) {
  const errors = [];
  for (const field of requiredFields) {
    const val = dto[field];
    if (typeof val !== 'string') {
      errors.push(`${field} must be a string`);
      continue;
    }
    const { min, max } = validations[field];
    if (min > 0 && val.length < min) errors.push(`${field} must be at least ${min} characters`);
    if (val.length > max) errors.push(`${field} must be at most ${max} characters`);
  }
  return errors;
}

export async function obrobytyKontakt(req, res) {
  const buffers = [];
  for await (const chunk of req) buffers.push(chunk);
  const body = JSON.parse(Buffer.concat(buffers).toString());

  const errors = validuvaty(body);
  if (errors.length > 0) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, errors }));
    return;
  }

  console.log(`New lead from ${body.name} (${body.contact})`);

  try {
    await nadislatyLider(body);
  } catch (err) {
    console.error('Failed to send lead:', err);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: true }));
}
