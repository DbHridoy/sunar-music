import { Link } from 'wouter'
import { ArrowRight, Search, Waves, Layers, Users } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Describe what you need',
    body: 'Type a brief the way you would tell a music supervisor — mood, energy, references. Plain language.',
  },
  {
    n: '02',
    icon: Waves,
    title: 'Get matched tracks',
    body: 'Our model surfaces tracks that fit the brief, with stems and licensing details inline.',
  },
  {
    n: '03',
    icon: Layers,
    title: 'Sync to your edit',
    body: 'Preview tracks against your footage, share a shortlist with stakeholders, license in one click.',
  },
]

const proof = [
  'Used by 250+ agencies',
  '50,000+ cleared tracks',
  'Stems on every release',
  'Free video sync preview',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-7 px-2.5 py-1 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface)]">
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              New
            </span>
            <span className="text-[12px] text-[var(--color-text-secondary)]">
              AI music discovery, built for brand work
            </span>
          </div>

          <h1 className="h-display text-[44px] sm:text-[56px] md:text-[64px] text-[var(--color-text-primary)]">
            Music that sounds<br />
            like your brand.
          </h1>

          <p className="mt-6 text-[16px] md:text-[17px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Describe a mood. Get tracks that fit. License in minutes — with stems, video sync, and clear terms on every release.
          </p>

          {/* Search input */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 p-1.5 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface)] focus-within:border-[var(--color-accent)] transition-colors">
              <div className="pl-3 text-[var(--color-text-tertiary)]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                aria-label="Describe the music you need"
                placeholder="Confident but not aggressive, for a tech startup…"
                className="flex-1 bg-transparent text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none py-2"
              />
              <Link href="/library">
                <Button size="sm">
                  Search
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/library">
              <Button size="md">Browse the library</Button>
            </Link>
            <Link href="/features">
              <Button size="md" variant="outline">See features</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {proof.map((p) => (
            <span
              key={p}
              className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              How it works
            </span>
            <h2 className="h-display text-[32px] md:text-[40px] mt-3">
              From brief to final mix in minutes.
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
              A focused workflow for creative directors, producers, and brand teams. No endless scrolling, no clearance surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-default)] transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="mono text-[11px] tracking-[0.18em] text-[var(--color-text-tertiary)]">
                    {s.n}
                  </span>
                  <s.icon className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <h3 className="text-[15px] font-medium text-[var(--color-text-primary)] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for teams */}
      <section className="py-20 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Built for teams
            </span>
            <h2 className="h-display text-[32px] md:text-[40px] mt-3">
              Designed for the way agencies actually work.
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
              Stems on every track. Video sync before licensing. Shared shortlists for stakeholders. Clear, single‑seat pricing — no surprise fees.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Link href="/features">
                <Button size="md">Explore features</Button>
              </Link>
              <Link href="/library">
                <Button size="md" variant="ghost">
                  Browse music
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                <span className="text-[13px] text-[var(--color-text-secondary)]">
                  Shortlist · Q1 Campaign
                </span>
              </div>
              <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                Shared
              </span>
            </div>
            <div className="space-y-2">
              {[
                { t: 'Ambient Drive', a: 'Nova Strings', bpm: 92 },
                { t: 'Forward Motion', a: 'Atlas Audio', bpm: 118 },
                { t: 'Soft Confidence', a: 'Polar Field', bpm: 84 },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center justify-between rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-3 py-2.5"
                >
                  <div>
                    <div className="text-[13.5px] text-[var(--color-text-primary)]">{r.t}</div>
                    <div className="text-[12px] text-[var(--color-text-tertiary)]">{r.a}</div>
                  </div>
                  <span className="mono text-[11px] text-[var(--color-text-tertiary)]">
                    {r.bpm} BPM
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="h-display text-[32px] md:text-[40px]">
            Find your sound.
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
            Start with a search. No account required.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <Link href="/library">
              <Button size="md">Browse the library</Button>
            </Link>
            <Link href="/features">
              <Button size="md" variant="outline">See what's inside</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
