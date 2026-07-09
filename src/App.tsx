import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import flowImage from './assets/salesforce-flow.svg';
import boardImage from './assets/ops-board.svg';
import methodImage from './assets/method-map.svg';

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Salesforce', href: '#salesforce' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  ['Implémentation Salesforce', 'Architecture claire. Écrans utiles. Pipeline exploitable.'],
  ['Optimisation CRM', 'Moins de friction. Plus d’usage réel.'],
  ['Workflows automatisés', 'Des automatisations sobres, testées, documentées.'],
  ['Données & reporting', 'Données propres. Dashboards lisibles. Décisions rapides.'],
  ['Intégrations', 'Connecter seulement ce qui sert l’opérationnel.'],
  ['Support continu', 'Former, corriger, améliorer après le go-live.'],
];

const problems = ['Sous-utilisation', 'Données dispersées', 'Trop de manuel', 'Pipeline flou', 'Reporting lent', 'Adoption faible'];
const method = [['01', 'Observer'], ['02', 'Structurer'], ['03', 'Automatiser'], ['04', 'Adopter']];
const useCases = ['Lead qualification', 'Pipeline', 'Sales ops', 'Reporting', 'Data cleanup', 'Automation', 'Ops sync'];

const photos = {
  team: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  workshop: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45, delay }}>{children}</motion.div>;
}

function Float({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}>{children}</motion.div>;
}

function SectionKicker({ children }: { children: string }) {
  const items = Array.from({ length: 10 }, (_, index) => <span key={index}>{children}</span>);
  return <div className="label-strip mb-10 border-y border-current/25 py-3 text-xs font-black uppercase tracking-[0.28em] opacity-80"><div className="label-track flex w-max gap-8">{items}</div></div>;
}

function Cta({ href = '#contact', children = 'Planifier un échange', dark = false }: { href?: string; children?: React.ReactNode; dark?: boolean }) {
  return <a href={href} className={`focus-ring group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-wide transition ${dark ? 'border-ink bg-ink text-cream hover:bg-cobalt' : 'border-cream bg-cream text-ink hover:bg-accent'}`}>{children}<ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} /></a>;
}

function Visual({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`visual-card group overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_30px_90px_rgba(17,17,17,.18)] ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /></div>;
}

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <figure className={`photo-card group overflow-hidden rounded-[2rem] border border-ink/10 bg-ink shadow-[0_28px_90px_rgba(17,17,17,.22)] ${className}`}><img src={src} alt={alt} loading="lazy" className="h-full min-h-[280px] w-full object-cover grayscale contrast-125 transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" /></figure>;
}

export default function App() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  return (
    <main className="bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a className="focus-ring flex items-center gap-3 rounded-full text-sm font-black uppercase tracking-tight" href="#top" aria-label="Rocket Science SRL accueil"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream">R</span>Rocket Science SRL</a>
          <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.18em] md:flex">{nav.map((item) => <a className="focus-ring rounded hover:text-cobalt" href={item.href} key={item.href}>{item.label}</a>)}</nav>
          <a href="#contact" className="focus-ring hidden rounded-full bg-accent px-4 py-2 text-xs font-black uppercase tracking-wide text-ink transition hover:bg-cobalt hover:text-cream md:inline-flex">Échanger</a>
        </div>
      </header>

      <section id="top" className="hero-noise min-h-screen px-4 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <Reveal>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-cobalt">Salesforce consulting · Belgique · PME & opérations</p>
            <h1 className="max-w-6xl text-[clamp(3.15rem,13vw,12.5rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">Salesforce,<br />sans friction.</h1>
            <div className="mt-8 flex flex-wrap gap-3"><Cta dark /> <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-black uppercase tracking-wide hover:border-cobalt hover:text-cobalt" href="#services">Voir les services <ChevronRight size={16} /></a></div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-[1.1fr_.9fr]">
                <Float><Visual src={flowImage} alt="Schéma abstrait du flux Salesforce : leads, automatisation, reporting" /></Float>
                <Photo src={photos.analytics} alt="Dashboard et analytics sur ordinateur portable" className="min-h-[360px] sm:translate-y-10" />
              </div>
              <p className="max-w-xl text-xl font-semibold leading-tight tracking-[-0.04em]">Structurer. Automatiser. Exploiter.</p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-[1500px] overflow-hidden border-y border-ink py-5 text-xs font-black uppercase tracking-[0.18em]">
          <div className="marquee flex w-max gap-10"><span>CRM plus lisible</span><span>Automatisations utiles</span><span>Adoption terrain</span><span>Dashboards actionnables</span><span>Sales ops propres</span><span>CRM plus lisible</span><span>Automatisations utiles</span></div>
        </div>
      </section>

      <section className="bg-ink px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Constat</SectionKicker>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <Reveal><h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">Le CRM ne manque pas de puissance. Il manque de clarté.</h2></Reveal>
            <Reveal delay={0.08}><div className="grid gap-5 md:grid-cols-2"><Photo src={photos.workshop} alt="Atelier opérationnel en équipe" className="border-cream/15" /><Visual src={boardImage} alt="Tableau de bord opérationnel abstrait" className="border-cream/15" /></div></Reveal>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-cream/15 bg-cream/15 sm:grid-cols-3 lg:grid-cols-6">
            {problems.map((problem) => <div key={problem} className="bg-ink p-5"><Check className="mb-8 text-accent" size={18} /><p className="text-lg font-black uppercase tracking-[-0.04em]">{problem}</p></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Services</SectionKicker>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <h2 className="max-w-5xl text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Du process au système.</h2>
            <div className="grid gap-5 md:grid-cols-2"><Photo src={photos.team} alt="Session de travail et cadrage de projet" /><Visual src={methodImage} alt="Carte visuelle de méthode en quatre étapes" /></div>
          </div>
          <div className="mt-14 border-t border-ink">
            {services.map(([title, desc]) => <Reveal key={title}><article className="grid gap-5 border-b border-ink py-7 transition hover:bg-white/45 md:grid-cols-[.55fr_1fr_.08fr]"><h3 className="text-2xl font-black uppercase tracking-[-0.045em]">{title}</h3><p className="max-w-3xl text-lg leading-7 text-slate-700">{desc}</p><ArrowUpRight className="hidden justify-self-end md:block" /></article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="methode" className="bg-cobalt px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="min-w-0"><SectionKicker>Méthode</SectionKicker><h2 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Simple à utiliser. Solide à maintenir.</h2></div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-cream/25">
            {method.map(([num, title]) => <div className="bg-cobalt p-6" key={num}><span className="text-5xl font-black tracking-[-0.06em] text-accent">{num}</span><h3 className="mt-16 text-2xl font-black uppercase tracking-[-0.04em]">{title}</h3></div>)}
          </div>
        </div>
      </section>

      <section id="salesforce" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Salesforce</SectionKicker>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <h2 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Le bon outil, bien configuré.</h2>
            <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-700">Process clairs. Données propres. Automatisations compréhensibles. Dashboards utiles.</p>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">{useCases.map((item) => <span className="rounded-full border border-ink px-5 py-3 text-sm font-black uppercase tracking-wide transition hover:bg-ink hover:text-cream" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="bg-accent px-4 py-24 text-ink sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_.6fr] lg:items-end">
          <h2 className="text-[clamp(3.5rem,10vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">Prêt à rendre Salesforce clair ?</h2>
          <div><p className="text-2xl font-semibold leading-tight tracking-[-0.04em]">Un premier échange. Des priorités claires. Un plan d’action.</p><div className="mt-8"><Cta dark /></div></div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="min-w-0">
            <SectionKicker>Contact</SectionKicker>
            <h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Décrivez le blocage.</h2>
            <div className="mt-10 border-l-4 border-ink pl-5 text-sm leading-6 text-slate-700"><p><strong>Informations vérifiées :</strong> Rocket Science SRL · BE 0835.698.352 · Groendreef 6, 9810 Nazareth-De Pinte, Belgique.</p><p className="mt-3">Pour les demandes commerciales, utilisez le formulaire.</p></div>
          </div>
          <form onSubmit={submit} className="min-w-0 border-t border-ink pt-2">
            <div className="grid gap-px bg-ink"><Field label="Nom" name="name" /><Field label="Email" name="email" type="email" /><Field label="Entreprise" name="company" /><label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Besoin principal<select required name="need" className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none"><option>Audit Salesforce</option><option>Automatisation workflow</option><option>Reporting / dashboards</option><option>Optimisation CRM</option><option>Autre besoin</option></select></label><label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Message<textarea required name="message" rows={5} className="focus-ring resize-none bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" placeholder="Contexte, problème, objectif." /></label></div>
            <button className="focus-ring mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:bg-cobalt" type="submit">Envoyer <ArrowUpRight size={17} /></button>
            {sent && <p role="status" className="mt-5 border border-ink p-4 text-sm font-semibold">Simulation envoyée. Connecter le formulaire avant publication.</p>}
          </form>
        </div>
      </section>

      <footer className="bg-ink px-4 py-14 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_.7fr]"><div><p className="text-5xl font-black uppercase tracking-[-0.07em] sm:text-7xl">Rocket Science SRL</p><p className="mt-4 max-w-2xl text-sm text-slate-300">Groendreef 6, 9810 Nazareth-De Pinte, Belgique · TVA BE 0835.698.352</p></div><div className="flex flex-col gap-3 text-sm font-black uppercase tracking-wide md:items-end"><a href="#top">Accueil</a><a href="#services">Services</a><a href="#contact">Contact</a><span className="text-slate-400">Mentions légales</span></div></div>
      </footer>
    </main>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return <label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">{label}<input required name={name} type={type} className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" /></label>;
}
