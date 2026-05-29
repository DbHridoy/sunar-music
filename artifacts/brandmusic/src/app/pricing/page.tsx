import { Link } from 'wouter'
import { Check } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/ forever',
    blurb: 'Start Searching and try video sync.',
    features: ['Unlimited search', 'Video sync previews', 'Personal shortlists'],
    cta: 'Start Searching',
    href: '/library',
    featured: false,
  },
  {
    name: 'Studio',
    price: '$49',
    cadence: '/ seat / mo',
    blurb: 'For agencies licensing music often.',
    features: [
      'Everything in Starter',
      'Stems on every track',
      'Shared team shortlists',
    ],
    cta: 'Start Searching',
    href: '/library',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    blurb: 'For brand teams and broadcast.',
    features: [
      'Everything in Studio',
      'Custom commissions',
      'Sonic branding workshops',
      'Dedicated account team',
    ],
    cta: 'Start Searching',
    href: '/library',
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Pricing
            </span>
            <h1 className="h-display text-[40px] md:text-[56px] mt-3 leading-[1.05]">
              Straightforward, per seat.
            </h1>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
              Start free and upgrade when your team licenses regularly. No hidden fees, no surprise sync charges.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg border p-6 flex flex-col ${
                  p.featured
                    ? 'border-[var(--color-accent)] bg-[var(--color-surface-elevated)]'
                    : 'border-[var(--color-border-subtle)] bg-[var(--color-surface)]'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
                    {p.name}
                  </span>
                  {p.featured && (
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="h-display text-[32px] text-[var(--color-text-primary)]">
                    {p.price}
                  </span>
                  {p.cadence && (
                    <span className="text-[12px] text-[var(--color-text-tertiary)]">
                      {p.cadence}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[var(--color-text-secondary)] mb-5">{p.blurb}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13px] text-[var(--color-text-secondary)]"
                    >
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href}>
                  <Button
                    size="md"
                    variant={p.featured ? 'primary' : 'outline'}
                    fullWidth
                  >
                    {p.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
