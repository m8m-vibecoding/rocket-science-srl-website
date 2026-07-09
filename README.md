# Rocket Science SRL Website

Site vitrine premium B2B pour Rocket Science SRL, prêt pour Vercel.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion pour animations légères
- lucide-react pour icônes SVG

## Commandes

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Déploiement Vercel

1. Créer/pousser le repo GitHub.
2. Dans Vercel : **Add New Project** → importer le repo.
3. Framework preset : **Vite**.
4. Build command : `npm run build`.
5. Output directory : `dist`.
6. Déployer.

## Formulaire de contact

Le formulaire est une simulation locale afin de ne pas exposer de secret API.
Options recommandées avant publication :

- Formspree : remplacer `onSubmit` dans `src/App.tsx` par un POST vers l’endpoint Formspree.
- Resend : créer une API serverless Vercel `/api/contact` avec clé côté serveur.
- EmailJS : possible côté client, mais limiter les permissions.
- API future : envoyer `name`, `email`, `company`, `need`, `message` vers un backend interne.

## Données Rocket Science à vérifier avant publication

Confirmé via BCE Public Search :

- Dénomination : ROCKET SCIENCE
- Numéro d’entreprise / TVA : BE 0835.698.352
- Statut : actif
- Date de début : 13 avril 2011
- Siège : Groendreef 6, 9810 Nazareth-De Pinte, Belgique
- Forme légale : Société à responsabilité limitée
- Administrateur public BCE : Matthias Stevens
- Activités TVA : soutien aux entreprises nca et conseil informatique / gestion d’installations informatiques

Non trouvé publiquement dans les sources consultées :

- Email
- Téléphone
- Site web officiel
- Page LinkedIn confirmée
- Certification Salesforce
- Références clients

## Checklist avant publication

- [ ] Valider email/téléphone/site officiel avec le client.
- [ ] Ajouter mentions légales et politique de confidentialité.
- [ ] Connecter le formulaire à un backend.
- [ ] Remplacer l’URL du sitemap par le domaine final.
- [ ] Vérifier le rendu mobile/tablette/desktop.
- [ ] Ne pas ajouter de logos clients, chiffres ou certifications sans preuve.
