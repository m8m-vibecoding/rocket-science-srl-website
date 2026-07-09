import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Salesforce', href: '#salesforce' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  ['Implémentation Salesforce', 'Poser une architecture claire : objets, champs, pipeline, droits, vues et parcours utilisateurs.'],
  ['Optimisation CRM', 'Retirer la friction, clarifier les écrans et rendre l’usage quotidien plus simple pour les équipes.'],
  ['Automatisation des workflows', 'Transformer les tâches répétitives en automatisations fiables, documentées et maintenables.'],
  ['Données & reporting', 'Nettoyer, structurer et rendre les données exploitables dans des dashboards lisibles.'],
  ['Intégrations', 'Relier Salesforce aux outils existants lorsque l’intégration améliore réellement l’opérationnel.'],
  ['Support opérationnel', 'Former, suivre l’adoption, corriger et améliorer après la mise en production.'],
];

const problems = [
  'Salesforce est présent, mais trop peu utilisé.',
  'Les données clients sont dispersées.',
  'Les équipes travaillent encore avec trop de manuel.',
  'Le pipeline manque de visibilité.',
  'Les dashboards ne soutiennent pas assez la décision.',
  'Les automatisations sont absentes, fragiles ou incomprises.',
];

const method = [
  ['01', 'Observer', 'Audit des processus, des données, des irritants et des priorités terrain.'],
  ['02', 'Structurer', 'Architecture Salesforce lisible, centrée sur les usages et les responsabilités.'],
  ['03', 'Automatiser', 'Mise en place progressive, tests, documentation et contrôle qualité.'],
  ['04', 'Adopter', 'Formation, suivi, corrections et amélioration continue avec les équipes.'],
];

const useCases = ['Lead qualification', 'Pipeline management', 'Sales operations', 'Reporting direction', 'Data cleanup', 'Workflow automation', 'Sales / ops sync'];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45, delay }}>{children}</motion.div>;
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-slate-500"><span className="h-2 w-2 rounded-full bg-accent" />{children}</p>;
}

function Cta({ href = '#contact', children = 'Planifier un échange', dark = false }: { href?: string; children?: React.ReactNode; dark?: boolean }) {
  return <a href={href} className={`focus-ring group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-wide transition ${dark ? 'border-ink bg-ink text-cream hover:bg-cobalt' : 'border-cream bg-cream text-ink hover:bg-accent'}`}>{children}<ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} /></a>;
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

      <section id="top" className="min-h-screen px-4 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <Reveal>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-cobalt">Salesforce consulting · Belgique · PME & opérations</p>
            <h1 className="max-w-6xl text-[clamp(3.15rem,13vw,12.5rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">
              Salesforce,<br />sans friction.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-xl pb-3 lg:ml-auto">
              <p className="text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">Rocket Science SRL aide les entreprises à structurer, automatiser et optimiser leurs opérations avec Salesforce.</p>
              <p className="mt-6 text-base leading-7 text-slate-700">Pas de promesse floue. Pas de jargon décoratif. Une intervention senior pour rendre le CRM plus clair, plus fiable et plus adopté par les équipes.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Cta dark /> <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-black uppercase tracking-wide hover:border-cobalt hover:text-cobalt" href="#services">Voir les services <ChevronRight size={16} /></a></div>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1500px] border-y border-ink text-xs font-black uppercase tracking-[0.18em] md:grid-cols-3">
          {['CRM plus lisible', 'Automatisations utiles', 'Adoption terrain'].map((item) => <div className="border-ink py-5 md:border-r md:last:border-r-0" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="bg-ink px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Constat</SectionKicker>
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal><h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">Le CRM ne manque pas de puissance. Il manque souvent de clarté.</h2></Reveal>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-cream/15 bg-cream/15 sm:grid-cols-2">
              {problems.map((problem) => <Reveal key={problem}><div className="min-h-32 bg-ink p-6"><Check className="mb-6 text-accent" size={19} /><p className="text-xl font-semibold leading-tight tracking-[-0.035em]">{problem}</p></div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Services</SectionKicker>
          <h2 className="max-w-5xl text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Du process au système.</h2>
          <div className="mt-14 border-t border-ink">
            {services.map(([title, desc]) => <Reveal key={title}><article className="grid gap-5 border-b border-ink py-8 transition hover:bg-white/45 md:grid-cols-[.6fr_1fr_.08fr]"><h3 className="text-2xl font-black uppercase tracking-[-0.045em]">{title}</h3><p className="max-w-3xl text-lg leading-7 text-slate-700">{desc}</p><ArrowUpRight className="hidden justify-self-end md:block" /></article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="methode" className="bg-cobalt px-4 py-24 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Méthode</SectionKicker>
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <h2 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Simple à utiliser. Solide à maintenir.</h2>
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-cream/25">
              {method.map(([num, title, desc]) => <Reveal key={num}><div className="grid gap-4 bg-cobalt p-6 sm:grid-cols-[90px_1fr]"><span className="text-4xl font-black tracking-[-0.06em] text-accent">{num}</span><div><h3 className="text-2xl font-black uppercase tracking-[-0.04em]">{title}</h3><p className="mt-2 max-w-2xl text-lg leading-7 text-blue-50">{desc}</p></div></div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="salesforce" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker>Salesforce</SectionKicker>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <h2 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Le bon outil, bien configuré.</h2>
            <div className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.03em] text-slate-700">
              <p>Salesforce devient utile quand les processus sont clairs, les données propres, les automatisations compréhensibles et les dashboards actionnables.</p>
              <p className="mt-6">Rocket Science SRL travaille sur cette zone concrète : faire passer Salesforce d’un outil “présent” à un système vraiment exploité.</p>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">{useCases.map((item) => <span className="rounded-full border border-ink px-5 py-3 text-sm font-black uppercase tracking-wide" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="bg-accent px-4 py-24 text-ink sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_.6fr] lg:items-end">
          <h2 className="text-[clamp(3.5rem,10vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">Prêt à rendre Salesforce clair ?</h2>
          <div><p className="text-2xl font-semibold leading-tight tracking-[-0.04em]">Un premier échange suffit pour cadrer les priorités : données, pipeline, reporting, automatisation ou adoption.</p><div className="mt-8"><Cta dark /></div></div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionKicker>Contact</SectionKicker>
            <h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Décrivez le blocage.</h2>
            <div className="mt-10 border-l-4 border-ink pl-5 text-sm leading-6 text-slate-700">
              <p><strong>Informations vérifiées :</strong> Rocket Science SRL · BE 0835.698.352 · Groendreef 6, 9810 Nazareth-De Pinte, Belgique.</p>
              <p className="mt-3">Pour les demandes commerciales, utilisez le formulaire. Les coordonnées directes seront ajoutées après validation client.</p>
            </div>
          </div>
          <form onSubmit={submit} className="border-t border-ink pt-2">
            <div className="grid gap-px bg-ink">
              <Field label="Nom" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Entreprise" name="company" />
              <label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Besoin principal<select required name="need" className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none"><option>Audit Salesforce</option><option>Automatisation workflow</option><option>Reporting / dashboards</option><option>Optimisation CRM</option><option>Autre besoin</option></select></label>
              <label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">Message<textarea required name="message" rows={5} className="focus-ring resize-none bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" placeholder="Contexte, problème, objectif." /></label>
            </div>
            <button className="focus-ring mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:bg-cobalt" type="submit">Envoyer <ArrowUpRight size={17} /></button>
            {sent && <p role="status" className="mt-5 border border-ink p-4 text-sm font-semibold">Simulation envoyée. Connecter le formulaire à Formspree, Resend, EmailJS ou une API avant publication.</p>}
          </form>
        </div>
      </section>

      <footer className="bg-ink px-4 py-14 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_.7fr]">
          <div><p className="text-5xl font-black uppercase tracking-[-0.07em] sm:text-7xl">Rocket Science SRL</p><p className="mt-4 max-w-2xl text-sm text-slate-300">Groendreef 6, 9810 Nazareth-De Pinte, Belgique · TVA BE 0835.698.352</p></div>
          <div className="flex flex-col gap-3 text-sm font-black uppercase tracking-wide md:items-end"><a href="#top">Accueil</a><a href="#services">Services</a><a href="#contact">Contact</a><span className="text-slate-400">Mentions légales</span></div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return <label className="grid gap-3 bg-cream p-5 text-xs font-black uppercase tracking-[0.18em]">{label}<input required name={name} type={type} className="focus-ring bg-transparent text-lg font-semibold normal-case tracking-normal outline-none" /></label>;
}
