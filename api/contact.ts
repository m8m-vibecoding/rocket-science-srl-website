type ContactRequest = { method?: string; body?: Record<string, unknown> };
type ContactResponse = { setHeader: (name: string, value: string) => void; status: (code: number) => { json: (body: unknown) => void } };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request: ContactRequest, response: ContactResponse) {
  if (request.method !== 'POST') { response.setHeader('Allow', 'POST'); return response.status(405).json({ error: 'Méthode non autorisée.' }); }
  const { name, email, company, project, message, consent } = request.body ?? {};
  const recipient = process.env.CONTACT_RECIPIENT;
  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_SENDER ?? 'Rocket Science Website <onboarding@resend.dev>';
  if (!name || !email || !message || !consent || !emailPattern.test(String(email))) return response.status(400).json({ error: 'Informations invalides ou incomplètes.' });
  if (!recipient || !apiKey) return response.status(503).json({ error: 'Le formulaire doit encore être configuré.' });
  const safe = (value: unknown) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: sender, to: [recipient], reply_to: email, subject: 'Nouvelle demande Rocket Science — ' + (project || 'Projet Salesforce'), html: '<h1>Nouvelle demande via le site</h1><p><strong>Nom :</strong> ' + safe(name) + '</p><p><strong>Email :</strong> ' + safe(email) + '</p><p><strong>Entreprise :</strong> ' + safe(company) + '</p><p><strong>Projet :</strong> ' + safe(project) + '</p><p><strong>Contexte :</strong></p><p>' + safe(message).replaceAll('\n', '<br />') + '</p>' })
  });
  if (!resendResponse.ok) return response.status(502).json({ error: 'Le service d’envoi a refusé la demande.' });
  return response.status(200).json({ ok: true });
}
