import React from 'react'
import Spline from '@splinetool/react-spline'
import { Building2, ShieldCheck, Layers, Gauge, ChevronRight, Sparkles } from 'lucide-react'

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

      {/* Solutions */}
      <section id="solutions" className="relative py-24 md:py-32">
        {/* subtle granite speckle */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.08) 0, transparent 50%), radial-gradient(2px 2px at 80% 60%, rgba(255,255,255,0.06) 0, transparent 50%), radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.05) 0, transparent 40%)' }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Solutions, hewn to endure</h2>
            <p className="mt-3 text-neutral-400 max-w-xl">Purpose-built capabilities for teams that demand clarity, control, and calm.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Building2}
              title="Corporate Websites"
              desc="Elegant, high-performance websites that communicate strength and precision."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Compliance & Trust"
              desc="Accessibility, security, and governance baked into every detail."
            />
            <FeatureCard
              icon={Layers}
              title="Design Systems"
              desc="Cohesive UI libraries that scale across products and teams."
            />
            <FeatureCard
              icon={Gauge}
              title="Performance"
              desc="Lightning-fast experiences tuned for global audiences."
            />
            <FeatureCard
              icon={Sparkles}
              title="Brand Craft"
              desc="Identity and art direction with a timeless, minimal aesthetic."
            />
            <FeatureCard
              icon={ChevronRight}
              title="Advisory"
              desc="Executive guidance that aligns design with business outcomes."
            />
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

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors hover:border-neutral-700">
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(16,185,129,0.10), transparent 60%)' }} />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-neutral-700/70">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{desc}</p>
      </div>
    </div>
  )
}

export default App
