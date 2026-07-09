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


## Images libres de droit

Le site utilise des visuels abstraits SVG créés pour le projet et trois photos distantes issues d’Unsplash, utilisées sous Unsplash License :

- `photo-1552664730-d307ca884978` — atelier / cadrage équipe
- `photo-1460925895917-afdab827c52f` — analytics / dashboard
- `photo-1551434678-e076c223a692` — travail d’équipe / organisation

À remplacer par des photos client si Rocket Science SRL fournit des visuels propriétaires.


## Actualisation direction artistique mobile / Copula-inspired

La version actuelle reprend des principes visibles dans les références fournies sans copier les assets : grands aplats de couleur, typographie très large, labels en enfilade, barre verticale latérale, photo découpée en forme organique, CTA en blob, copywriting minimal et sections plus visuelles que textuelles.
