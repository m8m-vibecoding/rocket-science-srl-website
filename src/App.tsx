import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BarChart3, Check, Database, Gauge, Layers3, Menu, Orbit, ShieldCheck, Sparkles, Workflow, X } from 'lucide-react';

const navigation = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Offres', href: '#offres' },
  { label: 'Contact', href: '#contact' },
];

const expertise = [
  ['01', 'Sales Cloud', 'Pipeline, opportunités, prévisions et processus commerciaux réunis dans un système lisible.', BarChart3],
  ['02', 'Service Cloud', 'Demandes, connaissances et support structurés pour une expérience client plus fluide.', Layers3],
  ['03', 'Marketing Cloud', 'Segmentation, parcours et activations marketing reliés à vos données clients.', Sparkles],
  ['04', 'Data 360 & intégrations', 'Sources connectées, données fiabilisées et contexte exploitable dans vos opérations.', Database],
  ['05', 'Automatisation', 'Workflows, validations et synchronisations conçus autour du travail réel des équipes.', Workflow],
  ['06', 'Sécurité & gouvernance', 'Accès, consentement, qualité et traçabilité intégrés dès la conception.', ShieldCheck],
] as const;

const steps = [
  ['01', 'Cadrer', 'Objectifs, utilisateurs, données et contraintes sont traduits en un périmètre net.'],
  ['02', 'Architecturer', 'Le modèle, les flux et les intégrations sont dessinés avant la configuration.'],
  ['03', 'Déployer', 'La solution est livrée par étapes, testée sur des scénarios métier concrets.'],
  ['04', 'Transmettre', 'Documentation, formation et suivi permettent aux équipes de prendre la main.'],
];

const offers = [
  { eyebrow: 'TPE & équipes compactes', title: 'Essentiel', intro: 'Un socle Salesforce propre pour remplacer les fichiers dispersés et structurer la croissance.', items: ['Cadrage et audit de départ', 'Configuration du CRM et du pipeline', 'Import, nettoyage et règles de données', 'Automatisations prioritaires', 'Tableaux de bord essentiels', 'Formation et prise en main', 'Contrôles d’accès et bonnes pratiques RGPD'] },
  { eyebrow: 'PME & infrastructures étendues', title: 'Sur mesure', intro: 'Une architecture Salesforce dimensionnée pour plusieurs équipes, systèmes et parcours clients.', items: ['Architecture multi-cloud', 'Sales, Service, Marketing et Data 360', 'Intégrations avec vos outils métier', 'Gouvernance, rôles et sécurité avancée', 'Migration et fiabilisation des données', 'Recette, conduite du changement et formation', 'Feuille de route et amélioration continue'], featured: true },
];

const easing = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, delay, ease: easing }}>{children}</motion.div>;
}

function Button({ href, children, variant = 'primary', onClick }: { href: string; children: ReactNode; variant?: 'primary' | 'light' | 'ghost'; onClick?: () => void }) {
  return <a className={'button button--' + variant} href={href} onClick={onClick}><span>{children}</span><ArrowUpRight aria-hidden="true" size={17} /></a>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={'eyebrow ' + (light ? 'eyebrow--light' : '')}><span aria-hidden="true" />{children}</p>;
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><img src="/rocket-science-logo.png" alt="" /></span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  return <header className="site-header">
    <div className="header-inner">
      <a className="brand" href="#accueil" aria-label="Rocket Science SRL — accueil"><BrandMark /><span>Rocket Science</span></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
      <Button href="#contact">Parler de votre projet</Button>
      <button className="menu-toggle" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" aria-label="Navigation mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{navigation.map((item, index) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}<p>Conseil & intégration Salesforce · Belgique</p></motion.nav>}</AnimatePresence>
  </header>;
}

function MissionVisual() {
  const reduceMotion = useReducedMotion();
  return <div className="mission-visual" aria-label="Illustration d’un écosystème Salesforce connecté">
    <div className="mission-grid" />
    <motion.div className="orbit orbit--outer" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 30, ease: 'linear', repeat: Infinity }}><span className="satellite satellite--one">Data</span><span className="satellite satellite--two">Service</span></motion.div>
    <motion.div className="orbit orbit--inner" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 22, ease: 'linear', repeat: Infinity }}><span className="satellite satellite--three">Sales</span></motion.div>
    <div className="mission-core"><BrandMark /><strong>Votre<br />système</strong></div><div className="status-chip"><span />Architecture alignée</div>
  </div>;
}

export default function App() {
  const [selectedOffer, setSelectedOffer] = useState('Projet Salesforce');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const chooseOffer = (offer: string) => { setSelectedOffer(offer); window.setTimeout(() => document.querySelector<HTMLInputElement>('#nom')?.focus(), 550); };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setFormState('sending'); const form = event.currentTarget; const payload = Object.fromEntries(new FormData(form).entries());
    try { const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!response.ok) throw new Error('Contact endpoint unavailable'); form.reset(); setSelectedOffer('Projet Salesforce'); setFormState('success'); } catch { setFormState('error'); }
  };

  return <main>
    <a className="skip-link" href="#contenu">Aller au contenu</a><Header />
    <section className="hero" id="accueil"><div className="hero-glow" /><div className="page-shell hero-layout" id="contenu">
      <Reveal className="hero-copy"><Eyebrow>Conseil & intégration Salesforce · Belgique</Eyebrow><h1>Votre Salesforce.<span>Enfin à votre mesure.</span></h1><p className="hero-lead">Rocket Science transforme vos enjeux commerciaux, service, marketing et data en un système Salesforce clair, sûr et réellement adopté.</p><div className="hero-actions"><Button href="#contact">Cadrer votre projet</Button><a className="text-link" href="#expertises">Explorer les expertises <ArrowDown aria-hidden="true" size={16} /></a></div></Reveal>
      <Reveal className="hero-art" delay={0.12}><MissionVisual /></Reveal>
    </div><div className="page-shell signal-row" aria-label="Principes d’intervention"><span>Architecture utile</span><span>Données maîtrisées</span><span>Adoption terrain</span><span>Sécurité intégrée</span></div></section>

    <section className="statement section-dark"><div className="page-shell statement-layout"><Reveal><Eyebrow light>Le point de départ</Eyebrow><h2>Salesforce n’est puissant que lorsqu’il épouse vraiment votre métier.</h2></Reveal><Reveal className="statement-aside" delay={0.1}><p>Nous relions les processus, les équipes et les données. Chaque choix de configuration répond à un usage concret — pas à une démonstration technique.</p><div className="statement-index"><span>01</span><span>Du besoin au système</span></div></Reveal></div></section>

    <section className="expertise section-light" id="expertises"><div className="page-shell"><div className="section-heading"><Reveal><Eyebrow>Expertises connectées</Eyebrow><h2>Un seul écosystème.<br />Six leviers.</h2></Reveal><Reveal delay={0.08}><p>Une intervention cohérente sur les briques Salesforce qui structurent la relation client et les opérations.</p></Reveal></div><div className="expertise-list">{expertise.map(([index, name, detail, Icon], itemIndex) => <Reveal className="expertise-row" delay={itemIndex * 0.035} key={name}><span className="expertise-number">{index}</span><span className="expertise-icon"><Icon aria-hidden="true" /></span><h3>{name}</h3><p>{detail}</p></Reveal>)}</div></div></section>

    <section className="visual-break"><div className="visual-break__image" role="img" aria-label="Circuit électronique vu en gros plan" /><div className="visual-break__overlay"><div className="page-shell"><Reveal><Eyebrow light>Conçu pour durer</Eyebrow><p className="visual-quote">Moins de friction.<br />Plus de signal.</p></Reveal></div></div></section>

    <section className="method section-cobalt" id="methode"><div className="page-shell"><div className="section-heading section-heading--light"><Reveal><Eyebrow light>La trajectoire</Eyebrow><h2>Du cadrage à l’autonomie.</h2></Reveal><Reveal delay={0.08}><p>Des décisions visibles, des validations régulières et une transmission pensée dès le premier jour.</p></Reveal></div><div className="steps">{steps.map(([number, title, description], index) => <Reveal className="step" delay={index * 0.05} key={number}><div className="step-top"><span>{number}</span><Orbit aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></section>

    <section className="proof section-light"><div className="page-shell proof-layout"><Reveal className="proof-photo"><img src="/media/workspace.jpg" alt="Poste de travail dédié à la conception d’une solution numérique" loading="lazy" /><span>Exécution attentive · documentation claire</span></Reveal><Reveal className="proof-copy" delay={0.1}><Eyebrow>Une delivery responsable</Eyebrow><h2>La complexité reste derrière. La maîtrise passe devant.</h2><div className="principles"><div><ShieldCheck aria-hidden="true" /><p><strong>Sécurité dès la conception</strong>Accès, données sensibles et traçabilité font partie de l’architecture.</p></div><div><Gauge aria-hidden="true" /><p><strong>Performance opérationnelle</strong>Les automatisations servent le rythme des équipes, sans ajouter de dette invisible.</p></div><div><Workflow aria-hidden="true" /><p><strong>Continuité</strong>Votre système est documenté, testable et transmissible.</p></div></div></Reveal></div></section>

    <section className="offers section-ink" id="offres"><div className="page-shell"><div className="section-heading section-heading--light"><Reveal><Eyebrow light>Deux points de départ</Eyebrow><h2>Un périmètre adapté.<br />Un devis clair.</h2></Reveal><Reveal delay={0.08}><p>Chaque organisation est différente. Ces offres structurent la discussion ; le budget final suit toujours votre architecture et vos priorités.</p></Reveal></div><div className="offer-grid">{offers.map((offer, index) => <Reveal className={'offer-card ' + (offer.featured ? 'offer-card--featured' : '')} delay={index * 0.08} key={offer.title}><p className="offer-eyebrow">{offer.eyebrow}</p><div className="offer-title"><h3>{offer.title}</h3><span>Sur devis</span></div><p className="offer-intro">{offer.intro}</p><ul>{offer.items.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}</ul><Button href="#contact" variant={offer.featured ? 'light' : 'ghost'} onClick={() => chooseOffer(offer.title)}>Demander un devis</Button></Reveal>)}</div><p className="offer-note">Licences Salesforce et services tiers non inclus · périmètre confirmé après cadrage</p></div></section>

    <section className="contact section-acid" id="contact"><div className="page-shell contact-layout"><Reveal className="contact-copy"><Eyebrow>Prochaine étape</Eyebrow><h2>Parlons du point qui bloque.</h2><p>Donnez-nous le contexte. Nous vous répondrons avec les premières questions utiles pour cadrer la mission.</p><div className="company-card"><BrandMark /><div><strong>Rocket Science SRL</strong><span>BE 0835.698.352</span><span>Groendreef 6, 9810 Nazareth-De Pinte</span><span>Belgique</span></div></div></Reveal><Reveal className="form-wrap" delay={0.1}><form onSubmit={submit}><div className="form-grid"><Field id="nom" name="name" label="Nom" autoComplete="name" /><Field id="email" name="email" label="Email professionnel" type="email" autoComplete="email" /><Field id="entreprise" name="company" label="Entreprise" autoComplete="organization" /><label className="field"><span>Projet</span><select name="project" value={selectedOffer} onChange={(event) => setSelectedOffer(event.target.value)}><option>Projet Salesforce</option><option>Essentiel</option><option>Sur mesure</option><option>Audit ou optimisation</option><option>Data, sécurité ou intégration</option></select></label></div><label className="field field--message"><span>Votre contexte</span><textarea name="message" rows={5} required aria-label="Objectif, difficulté actuelle et équipe concernée" /></label><label className="consent"><input type="checkbox" name="consent" required /><span>J’accepte que mes données soient utilisées uniquement pour répondre à cette demande.</span></label><button className="button button--primary submit-button" type="submit" disabled={formState === 'sending'}><span>{formState === 'sending' ? 'Envoi…' : 'Envoyer la demande'}</span><ArrowUpRight aria-hidden="true" size={17} /></button><div className="form-status" aria-live="polite">{formState === 'success' && <p>Merci. Votre demande a bien été transmise.</p>}{formState === 'error' && <p>L’envoi n’est pas encore disponible. Vous pouvez réessayer plus tard ; aucune donnée n’a été conservée.</p>}</div></form></Reveal></div></section>

    <footer className="footer"><div className="page-shell"><div className="footer-top"><a className="brand brand--footer" href="#accueil"><BrandMark /><span>Rocket Science</span></a><p>Des systèmes Salesforce conçus autour du métier.</p><a className="back-top" href="#accueil" aria-label="Retour en haut"><ArrowUpRight aria-hidden="true" /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Rocket Science SRL · BE 0835.698.352</p><nav aria-label="Liens de pied de page"><a href="#mentions-legales">Mentions légales</a><a href="#confidentialite">Confidentialité</a><a href="https://trust.salesforce.com/" target="_blank" rel="noreferrer">Salesforce Trust</a></nav></div><div className="legal-panels"><article id="mentions-legales"><h2>Mentions légales</h2><p>Éditeur : Rocket Science SRL, Groendreef 6, 9810 Nazareth-De Pinte, Belgique. Numéro d’entreprise et TVA : BE 0835.698.352.</p><p>Salesforce, Sales Cloud, Service Cloud, Marketing Cloud et Data 360 sont des marques de Salesforce, Inc. Le présent site n’implique aucune certification ou affiliation non déclarée.</p></article><article id="confidentialite"><h2>Confidentialité</h2><p>Les informations envoyées via le formulaire servent uniquement à traiter votre demande. Elles ne sont ni vendues ni utilisées à des fins publicitaires. Vous pouvez demander l’accès, la rectification ou la suppression de vos données auprès de l’équipe Rocket Science.</p><p>Visuels : photos Unsplash de Umberto et Christopher Gower, utilisées sous licence Unsplash. Illustrations orbitales originales créées pour Rocket Science SRL.</p></article></div></div></footer>
  </main>;
}

function Field({ id, name, label, type = 'text', autoComplete }: { id: string; name: string; label: string; type?: string; autoComplete?: string }) {
  return <label className="field" htmlFor={id}><span>{label}</span><input id={id} name={name} type={type} autoComplete={autoComplete} required /></label>;
}
