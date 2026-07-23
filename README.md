# Rocket Science SRL Website

Vitrine B2B premium en français pour Rocket Science SRL, société belge spécialisée dans la conception, l’intégration et l’optimisation de solutions Salesforce.

## Expérience

- Positionnement Salesforce clair : Sales Cloud, Service Cloud, Marketing Cloud, Data 360, automatisation, intégrations, sécurité et gouvernance.
- Deux offres orientées devis : **Essentiel** pour TPE/équipes compactes et **Sur mesure** pour PME/infrastructures étendues.
- Navigation desktop et mobile, ancres fonctionnelles, états de focus et support de \`prefers-reduced-motion\`.
- Direction artistique « mission control » : système orbital original, photographie technique et palette crème/cobalt/vert acide.
- Formulaire de contact validé côté client et côté serveur.
- Mentions légales, confidentialité et attribution des médias.

## Stack

- Vite, React, TypeScript
- Framer Motion
- Tailwind CSS
- Lucide React
- Fonction serverless Vercel dans \`api/contact.ts\`

## Développement

\`\`\`bash
npm install
npm run dev
npm run lint
npm run build
\`\`\`

## Formulaire de contact

Le formulaire envoie les demandes via l’API Resend. Configurer ces variables dans Vercel en partant de \`.env.example\` :

- \`RESEND_API_KEY\`
- \`CONTACT_RECIPIENT\`
- \`CONTACT_SENDER\` avec un domaine vérifié

Sans ces variables, l’API renvoie volontairement une erreur 503 et l’interface indique qu’aucune donnée n’a été conservée. Aucun faux succès n’est affiché.

## Validation effectuée

- \`npm run build\`
- \`npm run lint\`
- \`npm audit\` : 0 vulnérabilité
- Playwright/Chrome : 1440×1000, 768×1024 et 390×844
- Aucun débordement horizontal, aucune erreur console, menu mobile et ancre Offres validés

## Médias

Voir [MEDIA_LICENSES.md](./MEDIA_LICENSES.md). Les deux photos sont stockées localement et utilisées sous licence Unsplash. Les illustrations orbitales sont originales.
