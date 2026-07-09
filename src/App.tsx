import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import flowImage from './assets/salesforce-flow.svg';
import boardImage from './assets/ops-board.svg';
import methodImage from './assets/method-map.svg';

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Salesforce', href: '#salesforce' },
  { label: 'Contact', href: '#contact' },
];

const photos = {
  team: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  workshop: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
};

const problems = ['Sous-utilisation', 'Données dispersées', 'Trop de manuel', 'Pipeline flou', 'Reporting lent', 'Adoption faible'];
const services = ['Implémentation Salesforce', 'Optimisation CRM', 'Workflows automatisés', 'Données & reporting', 'Intégrations utiles', 'Support continu'];
const method = [['01', 'Observer'], ['02', 'Structurer'], ['03', 'Automatiser'], ['04', 'Adopter']];
const useCases = ['Lead qualification', 'Pipeline', 'Sales ops', 'Reporting', 'Data cleanup', 'Automation', 'Ops sync'];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>;
}

function Float({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div animate={{ y: [0, -12, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}>{children}</motion.div>;
}

function SectionLabel({ children, tone = 'dark' }: { children: string; tone?: 'dark' | 'light' }) {
  const items = Array.from({ length: 12 }, (_, index) => <span key={index}>{children}</span>);
  return <div className={`label-strip border-y py-3 text-xs font-black uppercase tracking-[0.3em] ${tone === 'light' ? 'border-cream/20 text-cream/80' : 'border-ink/20 text-ink/70'}`}><div className="label-track flex w-max gap-8">{items}</div></div>;
}

function Cta({ href = '#contact', children = 'Planifier un échange', dark = false }: { href?: string; children?: React.ReactNode; dark?: boolean }) {
  return <a href={href} className={`focus-ring group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-wide transition ${dark ? 'border-ink bg-ink text-cream hover:bg-cobalt' : 'border-cream bg-cream text-ink hover:bg-accent'}`}>{children}<ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} /></a>;
}

function Visual({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`visual-card group overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_30px_90px_rgba(17,17,17,.18)] ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /></div>;
}

function Photo({ src, alt, blob = false, className = '' }: { src: string; alt: string; blob?: boolean; className?: string }) {
  return <figure className={`photo-card group overflow-hidden bg-ink shadow-[0_28px_90px_rgba(17,17,17,.24)] ${blob ? 'blob-mask' : 'rounded-[2rem]'} ${className}`}><img src={src} alt={alt} loading="lazy" className="h-full min-h-[280px] w-full object-cover grayscale contrast-125 transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" /></figure>;
}

export default function App() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  return (
    <main className="bg-cream text-ink">
      <aside className="side-rail hidden md:flex"><span>BE</span><span>Salesforce</span></aside>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a className="focus-ring flex items-center gap-3 rounded-full text-sm font-black uppercase tracking-tight" href="#top" aria-label="Rocket Science SRL accueil"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream">R</span>Rocket Science SRL</a>
          <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.18em] md:flex">{nav.map((item) => <a className="focus-ring rounded hover:text-cobalt" href={item.href} key={item.href}>{item.label}</a>)}</nav>
          <a href="#contact" className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-accent text-2xl font-black text-ink transition hover:bg-cobalt hover:text-cream">+</a>
        </div>
      </header>

      <section id="top" className="hero-noise min-h-screen px-4 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1fr_.92fr] lg:items-end">
          <Reveal>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-cobalt">Salesforce consulting · Belgique · PME & opérations</p>
            <h1 className="max-w-6xl text-[clamp(3.2rem,13vw,12.5rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">Salesforce,<br />sans friction.</h1>
            <div className="mt-8 flex flex-wrap gap-3"><Cta dark /> <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-black uppercase tracking-wide hover:border-cobalt hover:text-cobalt" href="#services">Voir les services <ChevronRight size={16} /></a></div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-[.9fr_1.1fr] sm:items-end">
              <Float><Visual src={flowImage} alt="Schéma abstrait du flux Salesforce" /></Float>
              <div><Photo src={photos.analytics} alt="Dashboard analytics sur ordinateur" blob className="min-h-[430px]" /><p className="mt-5 text-2xl font-black uppercase leading-none tracking-[-0.06em]">Structurer. Automatiser. Exploiter.</p></div>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-[1500px] overflow-hidden border-y border-ink py-5 text-xs font-black uppercase tracking-[0.18em]"><div className="marquee flex w-max gap-10"><span>CRM plus lisible</span><span>Automatisations utiles</span><span>Adoption terrain</span><span>Dashboards actionnables</span><span>Sales ops propres</span><span>CRM plus lisible</span><span>Automatisations utiles</span></div></div>
      </section>

      <section className="panel panel-orange px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel>Constat</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <Reveal><h2 className="max-w-5xl text-[clamp(3.2rem,9vw,10rem)] font-black uppercase leading-[0.84] tracking-[-0.085em] text-orange-soft">Le CRM bloque quand le process reste flou.</h2></Reveal>
            <Reveal delay={0.08}><Photo src={photos.workshop} alt="Atelier opérationnel en équipe" blob className="min-h-[380px]" /></Reveal>
          </div>
          <div className="mt-16 space-y-2 border-t border-ink/20 pt-8">{problems.map((item) => <p className="problem-line" key={item}>{item}</p>)}</div>
        </div>
      </section>

      <section id="services" className="bg-ink px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel tone="light">Services</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <h2 className="text-[clamp(3.1rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Du process au système.</h2>
            <div className="grid gap-5 md:grid-cols-2"><Photo src={photos.team} alt="Cadrage projet et collaboration" /><Visual src={methodImage} alt="Carte de méthode en quatre étapes" className="border-cream/15" /></div>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">{services.map((item) => <span className="service-pill" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section id="methode" className="bg-cobalt px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel tone="light">Méthode</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <h2 className="text-[clamp(3.1rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Simple à utiliser. Solide à maintenir.</h2>
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-cream/25 sm:grid-cols-2">{method.map(([num, title]) => <div className="bg-cobalt p-6" key={num}><span className="text-5xl font-black tracking-[-0.06em] text-accent">{num}</span><h3 className="mt-20 text-2xl font-black uppercase tracking-[-0.04em]">{title}</h3></div>)}</div>
          </div>
        </div>
      </section>

      <section id="salesforce" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel>Salesforce</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <h2 className="text-[clamp(3.1rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Le bon outil, bien configuré.</h2>
            <Visual src={boardImage} alt="Tableau de bord opérationnel abstrait" />
          </div>
          <div className="mt-14 flex flex-wrap gap-3">{useCases.map((item) => <span className="rounded-full border border-ink px-5 py-3 text-sm font-black uppercase tracking-wide transition hover:bg-ink hover:text-cream" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="bg-accent px-4 py-24 text-ink sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_.55fr] lg:items-center">
          <h2 className="text-[clamp(3.5rem,10vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">Prêt à rendre Salesforce clair ?</h2>
          <div className="blob-cta"><a href="#contact">Planifier</a></div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="min-w-0"><SectionLabel>Contact</SectionLabel><h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Décrivez le blocage.</h2><div className="mt-10 border-l-4 border-ink pl-5 text-sm leading-6 text-slate-700"><p><strong>Informations vérifiées :</strong> Rocket Science SRL · BE 0835.698.352 · Groendreef 6, 9810 Nazareth-De Pinte, Belgique.</p><p className="mt-3">Pour les demandes commerciales, utilisez le formulaire.</p></div></div>
          <form onSubmit={submit} className="min-w-0 border-t border-ink pt-2"><div className="grid gap-px bg-ink"><Field label="Nom" name="name" /><Field label="Email" name="email" type="email" /><Field label="Entreprise" name="company" /><label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Besoin principal<select required name="need" className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none"><option>Audit Salesforce</option><option>Automatisation workflow</option><option>Reporting / dashboards</option><option>Optimisation CRM</option><option>Autre besoin</option></select></label><label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Message<textarea required name="message" rows={5} className="focus-ring resize-none bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" placeholder="Contexte, problème, objectif." /></label></div><button className="focus-ring mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:bg-cobalt" type="submit">Envoyer <ArrowUpRight size={17} /></button>{sent && <p role="status" className="mt-5 border border-ink p-4 text-sm font-semibold">Simulation envoyée. Connecter le formulaire avant publication.</p>}</form>
        </div>
      </section>

      <footer className="bg-ink px-4 py-14 text-cream sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_.7fr]"><div><p className="text-5xl font-black uppercase tracking-[-0.07em] sm:text-7xl">Rocket Science SRL</p><p className="mt-4 max-w-2xl text-sm text-slate-300">Groendreef 6, 9810 Nazareth-De Pinte, Belgique · TVA BE 0835.698.352</p></div><div className="flex flex-col gap-3 text-sm font-black uppercase tracking-wide md:items-end"><a href="#top">Accueil</a><a href="#services">Services</a><a href="#contact">Contact</a><span className="text-slate-400">Mentions légales</span></div></div></footer>
    </main>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return <label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">{label}<input required name={name} type={type} className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" /></label>;
}
