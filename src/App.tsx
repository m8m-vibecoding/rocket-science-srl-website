import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle2, Database, Gauge, Layers3, LockKeyhole, Network, Rocket, Settings2, ShieldCheck, Sparkles, Workflow, Zap, type LucideIcon } from 'lucide-react';

type Service = { title: string; description: string; Icon: LucideIcon };

const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Salesforce', href: '#salesforce' },
  { label: 'Contact', href: '#contact' },
];

const pains = [
  'Salesforce sous-utilisé ou devenu trop complexe',
  'Données clients dispersées entre plusieurs outils',
  'Processus manuels qui ralentissent les équipes',
  'Équipes commerciales et opérations mal synchronisées',
  'Reporting peu fiable ou trop long à produire',
  'Automatisations absentes, fragiles ou mal documentées',
  'Manque de visibilité sur le pipeline et les priorités',
];

const services: Service[] = [
  { title: 'Implémentation Salesforce', description: 'Structurer les objets, champs, vues et parcours pour soutenir vos processus réels.', Icon: Layers3 },
  { title: 'Optimisation CRM', description: 'Simplifier l’usage quotidien, réduire les frictions et améliorer la qualité de saisie.', Icon: Gauge },
  { title: 'Automatisation des workflows', description: 'Automatiser les tâches répétitives avec des règles claires, maintenables et utiles.', Icon: Workflow },
  { title: 'Données & structuration', description: 'Nettoyer, organiser et fiabiliser les données avant d’automatiser ou de reporter.', Icon: Database },
  { title: 'Dashboards & reporting', description: 'Construire des tableaux de bord lisibles pour la direction, les ventes et les opérations.', Icon: BarChart3 },
  { title: 'Amélioration continue', description: 'Accompagner les équipes après la mise en place pour corriger, former et faire évoluer.', Icon: Settings2 },
  { title: 'Intégrations existantes', description: 'Connecter Salesforce à vos outils lorsque cela apporte un gain opérationnel mesurable.', Icon: Network },
  { title: 'Automatisation technique', description: 'Assister les équipes sur des automatisations ou scripts internes simples, documentés et sécurisés.', Icon: Zap },
];

const method = [
  ['Audit des processus', 'Cartographie des flux commerciaux, données, irritants et priorités métier avant toute configuration.'],
  ['Architecture Salesforce', 'Définition d’une structure claire : objets, champs, droits, pipeline, automatisations et reporting.'],
  ['Mise en place & automatisation', 'Configuration progressive, tests avec les utilisateurs et documentation opérationnelle.'],
  ['Formation & amélioration', 'Transfert aux équipes, suivi de l’adoption, corrections et évolutions pragmatiques.'],
];

const useCases = ['Suivi commercial', 'Qualification des leads', 'Pipeline management', 'Automatisation des tâches répétitives', 'Reporting direction', 'Synchronisation sales / operations', 'Centralisation des données clients'];
const trust = ['Petite structure agile et réactive', 'Accompagnement direct, sans couche inutile', 'Expertise opérationnelle orientée terrain', 'Solutions simples à utiliser et à maintenir', 'Priorité à l’adoption par les équipes', 'Approche belge, pragmatique et transparente'];
const flow = ['Lead → qualification', 'Opportunity → pipeline', 'Workflow → automation', 'Dashboard → décision'];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

function Button({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const cls = variant === 'primary'
    ? 'bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-blue'
    : 'border border-slate-300 bg-white text-navy hover:border-blue hover:text-blue';
  return <a className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${cls}`} href={href}>{children}<ArrowRight size={16} /></a>;
}

function SectionTitle({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return (
    <div>
      <p className={`mb-3 text-sm font-bold uppercase tracking-[.18em] ${dark ? 'text-mint' : 'text-green'}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
    </div>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input required name={name} type={type} className="focus-ring rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal" />
    </label>
  );
}

export default function App() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#accueil" className="focus-ring flex items-center gap-3 rounded-full font-extrabold text-navy"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-navy text-mint"><Rocket size={18} /></span>Rocket Science SRL</a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">{nav.map((n) => <a className="focus-ring rounded hover:text-blue" key={n.href} href={n.href}>{n.label}</a>)}</nav>
          <a href="#contact" className="focus-ring hidden rounded-full bg-green px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-emerald-700 md:inline-flex">Planifier un échange</a>
        </div>
      </header>

      <section id="accueil" className="relative bg-orbital py-20 sm:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <Fade>
            <div>
              <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700">Salesforce clarity · automation intelligence · Belgian B2B consulting</p>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">Structurez, automatisez et optimisez vos opérations avec Salesforce.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Rocket Science SRL aide les entreprises à transformer Salesforce en un outil clair, fiable et réellement adopté par les équipes commerciales, IT et opérationnelles.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="#contact">Planifier un échange</Button><Button href="#services" variant="secondary">Voir les services</Button></div>
            </div>
          </Fade>
          <Fade delay={0.12}>
            <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-soft backdrop-blur">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-200/50 blur-3xl" />
              <div className="rounded-[1.5rem] bg-navy p-6 text-white">
                <div className="mb-6 flex items-center justify-between"><span className="text-sm text-slate-300">CRM Operations Map</span><ShieldCheck className="text-mint" /></div>
                <div className="grid gap-3">{flow.map((x, i) => <div key={x} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4"><span>{x}</span><span className="rounded-full bg-mint/20 px-3 py-1 text-xs text-mint">Étape {i + 1}</span></div>)}</div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue to-green p-4"><p className="font-semibold">Objectif : moins de friction, plus de visibilité, une adoption durable.</p></div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-20"><div className="container"><Fade><SectionTitle eyebrow="Problèmes fréquents" title="Quand Salesforce existe, mais ne travaille pas encore pour vos équipes." text="Le sujet n’est pas seulement la configuration : c’est l’alignement entre processus, données, reporting et adoption." /></Fade><div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{pains.map((p) => <Fade key={p}><div className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"><CheckCircle2 className="mt-1 shrink-0 text-green" size={20} /><p className="font-medium text-slate-700">{p}</p></div></Fade>)}</div></div></section>

      <section id="services" className="bg-white py-20"><div className="container"><SectionTitle eyebrow="Services" title="Un accompagnement Salesforce orienté opérations, données et automatisation." text="Chaque intervention part de vos processus réels : ce qui doit être suivi, simplifié, automatisé ou rendu plus fiable." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({ title, description, Icon }) => <Fade key={title}><article className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-card"><Icon className="mb-5 text-blue transition group-hover:text-green" size={28} /><h3 className="text-lg font-bold text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></article></Fade>)}</div></div></section>

      <section id="methode" className="py-20"><div className="container"><SectionTitle eyebrow="Méthode" title="Quatre étapes pour éviter les configurations isolées et les automatisations fragiles." text="Une méthode courte, lisible et centrée sur l’usage." /><div className="mt-12 grid gap-6 lg:grid-cols-4">{method.map(([title, desc], i) => <Fade key={title} delay={i * 0.05}><div className="relative h-full rounded-3xl bg-white p-6 shadow-card"><span className="mb-8 inline-grid h-11 w-11 place-items-center rounded-2xl bg-navy text-sm font-bold text-white">0{i + 1}</span><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p></div></Fade>)}</div></div></section>

      <section className="bg-navy py-20 text-white"><div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><SectionTitle dark eyebrow="Pourquoi Rocket Science SRL" title="Small team, senior execution : une approche directe et pragmatique." text="Pour les PME et équipes belges qui veulent avancer vite, sans transformer Salesforce en usine à gaz." /><div className="grid gap-4 sm:grid-cols-2">{trust.map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Sparkles className="mb-4 text-mint" /><p className="font-semibold">{x}</p></div>)}</div></div></section>

      <section className="py-20"><div className="container"><SectionTitle eyebrow="Cas d’usage" title="Des usages concrets, sans promesse artificielle." text="Le site ne cite aucun client, certification ou chiffre non vérifié. Il se concentre sur les besoins opérationnels fréquents autour de Salesforce." /><div className="mt-10 flex flex-wrap gap-3">{useCases.map((u) => <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-card" key={u}>{u}</span>)}</div></div></section>

      <section id="salesforce" className="bg-white py-20"><div className="container grid gap-10 lg:grid-cols-2"><SectionTitle eyebrow="Salesforce" title="Un CRM puissant devient utile quand il est structuré autour de vos processus." text="Salesforce peut centraliser les données, automatiser les actions et donner une meilleure visibilité à la direction. Mais sa valeur dépend de la clarté des processus, de la qualité des données, des dashboards et de l’adoption par les équipes." /><div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"><LockKeyhole className="mb-5 text-green" /><h3 className="text-2xl font-bold">Ce que Rocket Science SRL privilégie</h3><ul className="mt-6 space-y-4 text-slate-700">{['Des champs utiles, pas une accumulation de complexité.', 'Des automatisations compréhensibles et documentées.', 'Des dashboards qui soutiennent les décisions.', 'Une formation orientée gestes quotidiens, pas théorie abstraite.'].map((x) => <li className="flex gap-3" key={x}><CheckCircle2 className="mt-1 text-green" size={18} /><span>{x}</span></li>)}</ul></div></div></section>

      <section className="py-20"><div className="container rounded-[2rem] bg-gradient-to-br from-navy via-blue to-green p-8 text-white shadow-soft sm:p-12"><div className="max-w-3xl"><h2 className="text-3xl font-extrabold sm:text-5xl">Transformez Salesforce en outil clair, utile et adopté par vos équipes.</h2><p className="mt-5 text-lg text-slate-100">Un premier échange permet de cadrer vos priorités : données, pipeline, reporting, automatisation ou adoption.</p><div className="mt-8"><a className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-navy" href="#contact">Planifier un échange <ArrowRight size={16} /></a></div></div></div></section>

      <section id="contact" className="bg-white py-20"><div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><SectionTitle eyebrow="Contact" title="Décrivez votre besoin principal." text="Le formulaire est prêt côté interface. À connecter ensuite à Formspree, Resend, EmailJS ou une API interne." /><div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600"><p><strong>Informations publiques vérifiées :</strong> Rocket Science SRL · BE 0835.698.352 · Groendreef 6, 9810 Nazareth-De Pinte, Belgique.</p><p className="mt-2">La BCE ne publie pas d’email, téléphone ou site web pour cette entité.</p></div></div><form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-card"><div className="grid gap-5 sm:grid-cols-2"><Field label="Nom" name="name" /><Field label="Email" name="email" type="email" /><Field label="Entreprise" name="company" /><label className="grid gap-2 text-sm font-semibold text-slate-700">Besoin principal<select required name="need" className="focus-ring rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal"><option>Audit Salesforce</option><option>Automatisation workflow</option><option>Reporting / dashboards</option><option>Optimisation CRM</option><option>Autre besoin</option></select></label></div><label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">Message<textarea required name="message" rows={5} className="focus-ring resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal" placeholder="Expliquez brièvement votre contexte Salesforce ou opérationnel." /></label><button className="focus-ring mt-6 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-blue" type="submit">Envoyer</button>{sent && <p role="status" className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800">Simulation envoyée. Connectez un backend avant publication.</p>}</form></div></section>

      <footer className="border-t border-slate-200 bg-slate-50 py-10"><div className="container flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"><div><p className="font-bold text-navy">Rocket Science SRL</p><p>Groendreef 6, 9810 Nazareth-De Pinte, Belgique · TVA BE 0835.698.352</p></div><div className="flex gap-4"><a href="#" className="hover:text-blue">Mentions légales à prévoir</a><a href="#" className="hover:text-blue">Confidentialité à prévoir</a></div></div></footer>
    </main>
  );
}
