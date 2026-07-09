# Design decisions — Rocket Science SRL

## Skill UI/UX

La ressource demandée a été installée localement par clonage :

- Repo : `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
- Emplacement local de travail : `/opt/data/work-skills/ui-ux-pro-max-skill`
- Fichiers inspectés : `README.md`, `CLAUDE.md`, `cli/assets/skills/design-system/SKILL.md`
- Requêtes exécutées via `src/ui-ux-pro-max/scripts/search.py` : landing, style, color, typography, UX, stack React.

La skill est compatible avec l’environnement : Python 3, aucune dépendance externe requise pour le moteur de recherche.

## Recommandations retenues

### Structure UX

Base utilisée : landing B2B service, claire et orientée conversion.
Ordre retenu : hero → douleurs → services → méthode → pourquoi → cas d’usage → Salesforce → CTA → contact.

### Hiérarchie visuelle

- Hero très explicite en 5 secondes.
- Un CTA principal répété : “Planifier un échange”.
- Sections séparées par fonds clairs/sombres pour faciliter la lecture.
- Pas de témoignages, logos clients ou métriques non vérifiés.

### Palette

Inspirée du résultat `B2B Service` de UI UX Pro Max :

- Navy : `#0F172A`
- Ink : `#020617`
- Blue : `#0369A1`
- Green : `#059669`
- Background : `#F8FAFC`
- Cards : `#FFFFFF`
- Borders : `#E2E8F0`

Objectif : blanc dominant, bleu confiance/CRM, vert efficacité/automatisation, noir/navy crédibilité.

### Typographie

- Inter via Google Fonts.
- Titres forts en 700/800.
- Corps 16–18 px, line-height généreux.
- Choix préféré à des polices plus décoratives pour garder une crédibilité B2B belge.

### Spacing et composants

- Container max `1120px`.
- Sections `py-20` minimum.
- Cartes arrondies `2xl/3xl`, bordures fines, ombres douces.
- Touch targets et CTA suffisamment grands.

### Accessibilité

Recommandations UI UX Pro Max appliquées :

- Contraste élevé navy/blanc et texte slate lisible.
- Labels réels sur les champs de formulaire.
- Focus visible avec `.focus-ring`.
- Respect de `prefers-reduced-motion`.
- Icônes décoratives sans dépendance à la couleur seule dans les listes importantes.

### Responsive

- Header simplifié mobile.
- Grilles qui passent de 1 colonne à 2/4 colonnes.
- Hero en 1 colonne mobile puis 2 colonnes desktop.
- Sections pensées pour 375px, 768px, 1024px et 1440px.

## Choix de style

Direction : premium B2B SaaS/consulting sobre.
Éléments “Rocket Science” traités discrètement : orbites, gradients subtils, CRM operations map — pas de fusée cartoon.

## Sources entreprise utilisées

- BCE Public Search : `https://kbopub.economie.fgov.be/kbopub/zoeknummerform.html?nummer=0835698352&lang=fr`
- Companyweb : `https://www.companyweb.be/fr/0835698352/rocket-science`

Les informations Salesforce proviennent du brief client, pas d’une preuve publique. Le site ne mentionne donc aucune certification Salesforce ni partenariat officiel.
