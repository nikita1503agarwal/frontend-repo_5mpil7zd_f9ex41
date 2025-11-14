import React from 'react'
import Spline from '@splinetool/react-spline'
import { Building2, ShieldCheck, Layers, Gauge, ChevronRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400/30 selection:text-neutral-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-neutral-700 to-neutral-900 grid place-items-center shadow-inner shadow-black/40 ring-1 ring-neutral-700/70">
              <Sparkles className="h-4 w-4 text-emerald-300" />
            </div>
            <span className="text-sm uppercase tracking-[0.25em] text-neutral-300">Granite Corp</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/20 transition-colors">
            Let’s Talk <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative min-h-[86vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays to enhance granite/metal vibe. pointer-events-none so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-neutral-950/90" />
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.18),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 ring-1 ring-neutral-700/60 backdrop-blur">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs tracking-wide text-neutral-300">Enterprise-grade, stone-solid</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-white">
              Design that feels carved from dark granite.
            </h1>
            <p className="mt-5 max-w-xl text-neutral-300/90 text-base md:text-lg">
              We craft modern corporate experiences with the permanence of stone and the precision of steel. Minimal. Intentional. Legendary.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-600/20 hover:bg-emerald-400 transition-colors">
                Explore Solutions <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-neutral-200 ring-1 ring-inset ring-neutral-700/70 hover:bg-neutral-900/70 transition-colors">
                Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions — Louder with motion */}
      <section id="solutions" className="relative py-28">
        {/* Granite texture + gridlines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{ backgroundImage: 'radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.08)_0,transparent_50%),radial-gradient(2px_2px_at_80%_60%,rgba(255,255,255,0.06)_0,transparent_50%),radial-gradient(1.5px_1.5px_at_60%_20%,rgba(255,255,255,0.05)_0,transparent_40%)' }} />
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.06]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
            >
              Signature Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-neutral-400 text-lg"
            >
              Not a list of features—three monumental programs engineered to move markets.
            </motion.p>
          </div>

          <div className="mt-14 space-y-8">
            <Slab
              eyebrow="Program I"
              icon={Layers}
              title={<>
                Brand Systems <span className="text-neutral-400">that</span> Endure
              </>}
              desc="A carved-from-stone design language. We build living systems that stay elegant under pressure and scale without entropy."
              bullets={['Visual + interaction tokens','Component libraries + docs','Multi-brand orchestration']}
              statLabel="Avg. design debt reduction"
              statValue="-63%"
              cta="Explore the System"
              index={0}
            />

            <Slab
              eyebrow="Program II"
              icon={Building2}
              title={<>
                Experience Platforms <span className="text-neutral-400">with</span> Velocity
              </>}
              desc="From marketing sites to product surfaces—performance-first builds with global reach and ruthless clarity."
              bullets={['Headless architecture','Internationalization','Performance budgets < 1s LCP']}
              statLabel="Median LCP (global)"
              statValue="0.9s"
              cta="See the Platform"
              accent="emerald"
              index={1}
            />

            <Slab
              eyebrow="Program III"
              icon={ShieldCheck}
              title={<>
                Assurance <span className="text-neutral-400">&</span> Trust
              </>}
              desc="Governance woven into the grain—accessibility, privacy, and security practices that withstand audit and time."
              bullets={['WCAG 2.2 AA','Privacy-by-design','Threat modeling + SLA']}
              statLabel="Audit pass rate"
              statValue="99.3%"
              cta="Review the Standard"
              index={2}
            />
          </div>

          {/* Outcomes marquee */}
          <div className="mt-16">
            <OutcomesMarquee />
          </div>

          {/* Capabilities matrix chips */}
          <div className="mt-14 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60">
            <div className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-neutral-400 border-b border-neutral-800">Capabilities</div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-sm">
              {['Design Tokens','Motion Guidelines','Content Models','A/B Framework','Globalization','Observability','Zero-Trust','Compliance Kits','Playbooks','Component QA'].map((chip)=> (
                <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 to-black/60 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Minimal. Monumental.</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Our philosophy is simple: remove the noise, reveal the form. We build calm, durable interfaces that let your message resonate. Every surface, shadow, and micro-interaction is considered—nothing ornamental, everything intentional.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Strategic clarity from discovery to delivery.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Design systems that scale without friction.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Reliability that feels carved from stone.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-emerald-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.12),transparent_45%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-white">Start a conversation</h4>
              <p className="mt-3 text-neutral-400">Tell us about your goals. We’ll respond within one business day.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 gap-3">
              <input placeholder="Name" className="w-full rounded-md bg-neutral-950 text-neutral-100 placeholder:text-neutral-500 px-4 py-3 ring-1 ring-inset ring-neutral-800 focus:ring-emerald-500/40 outline-none" />
              <input placeholder="Email" type="email" className="w-full rounded-md bg-neutral-950 text-neutral-100 placeholder:text-neutral-500 px-4 py-3 ring-1 ring-inset ring-neutral-800 focus:ring-emerald-500/40 outline-none" />
              <textarea placeholder="Project details" rows={4} className="w-full rounded-md bg-neutral-950 text-neutral-100 placeholder:text-neutral-500 px-4 py-3 ring-1 ring-inset ring-neutral-800 focus:ring-emerald-500/40 outline-none" />
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-600/20 hover:bg-emerald-400 transition-colors">
                Request Consultation <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Granite Corp. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Terms</a>
            <a href="/test" className="hover:text-neutral-200">System</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Slab({ eyebrow, icon: Icon = Gauge, title, desc, bullets = [], statLabel, statValue, cta, accent, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
    >
      {/* Edge glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background: 'radial-gradient(700px_220px_at_0%_0%,rgba(16,185,129,0.10),transparent_60%)' }}
      />

      {/* Sheen sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 -left-1/3 right-1/3 rotate-[8deg] bg-gradient-to-r from-transparent via-white/6 to-transparent"
        initial={{ x: '-60%' }}
        whileHover={{ x: '60%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 text-neutral-400">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-neutral-700/70">
              <Icon className="h-5 w-5 text-emerald-300" />
            </div>
            <span className="text-xs tracking-[0.25em] uppercase">{eyebrow}</span>
          </div>
          <h3 className="mt-4 text-2xl md:text-4xl font-semibold text-white leading-tight">{title}</h3>
          <p className="mt-3 text-neutral-400 text-base md:text-lg max-w-2xl">{desc}</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-sm text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/10 transition-colors">
              {cta} <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black rounded-2xl blur-xl opacity-60" />
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="text-sm text-neutral-400">{statLabel}</div>
            <div className="mt-2 text-4xl md:text-5xl font-semibold text-white tracking-tight">
              <span className={accent === 'emerald' ? 'text-emerald-400' : ''}>{statValue}</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <MiniMetric label="Setup" value="2-4w" />
              <MiniMetric label="Teams" value="5-12" />
              <MiniMetric label="Coverage" value="Global" />
            </div>
            <motion.div
              className="mt-6 h-28 rounded-lg border border-neutral-800"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundImage: 'radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.18),transparent_45%)' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-3 text-center">
      <div className="text-[11px] uppercase tracking-wider text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-semibold text-neutral-100">{value}</div>
    </div>
  )
}

function OutcomesMarquee() {
  const items = [
    '+48% conversion',
    '0.9s global LCP',
    '99.3% audit pass',
    'NPS 72',
    'TTV -42%',
    'Design debt -63%',
    'Bounce -28%',
    'Uptime 99.99%',
  ]
  const row = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950" />
      <motion.div
        className="flex gap-8 whitespace-nowrap py-4 px-6 text-emerald-300/90"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((label, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm md:text-base">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="tracking-wide">{label}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default App
