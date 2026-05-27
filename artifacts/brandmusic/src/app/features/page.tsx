import { Link } from 'wouter'
import {
  ArrowRight,
  Search,
  Video,
  Sliders,
  Users,
  Database,
  Zap,
  Shield,
  BarChart,
  Headphones,
  Music,
  Code,
} from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'

const detailedFeatures = [
  {
    icon: Search,
    title: 'Conversational AI Search',
    description:
      'Our model understands briefs like "confident but not aggressive" or "warm, nostalgic, with forward momentum." Describe what you need; skip the scrolling.',
    bullets: [
      'Natural-language queries',
      'Context-aware recommendations',
      'Search by mood, genre, or use case',
      'Learns your preferences over time',
    ],
  },
  {
    icon: Video,
    title: 'Free Video Sync Preview',
    description:
      'Upload an edit and hear options synced against your footage — before you license. Present shortlists to clients and get approvals faster.',
    bullets: [
      'Drag-and-drop upload',
      'Real-time audio sync',
      'Local-only processing',
      'Export preview videos',
    ],
  },
  {
    icon: Sliders,
    title: 'Professional Stem Access',
    description:
      'Every track ships with separated stems (drums, bass, melody, vocals). Give your post team full control over the final mix.',
    bullets: [
      'Isolated instrument tracks',
      'Adjust levels independently',
      'Remove or emphasize elements',
      'Consistent across releases',
    ],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Share shortlists, comment on tracks, and keep stakeholders aligned from concept through final delivery.',
    bullets: [
      'Shared workspaces',
      'Comment threads on tracks',
      'Version history',
      'Role-based permissions',
    ],
  },
]

const additional = [
  { icon: Database, title: '50,000+ premium tracks', body: 'Professionally produced, refreshed weekly.' },
  { icon: Zap, title: 'Instant downloads', body: 'Tracks and stems, ready immediately.' },
  { icon: Shield, title: 'Clear licensing', body: 'Transparent terms, no hidden fees.' },
  { icon: BarChart, title: 'Usage analytics', body: 'Track usage across campaigns for compliance.' },
  { icon: Headphones, title: 'Lossless audio', body: 'WAV downloads, broadcast-ready.' },
  { icon: Music, title: 'Custom commissions', body: 'Original music tailored to your brand.' },
  { icon: Code, title: 'API for live commerce', body: 'Drop the library into product pages and live streams.' },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Features
          </span>
          <h1 className="h-display text-[44px] sm:text-[56px] md:text-[64px] mt-4">
            Built for agency workflows.
          </h1>
          <p className="mt-5 text-[16px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Tools designed for creative directors, producers, and brand teams who need precision, speed, and clean licensing.
          </p>
        </div>
      </section>

      {/* Detailed features */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-3">
          {detailedFeatures.map((f, idx) => (
            <div
              key={f.title}
              className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-7 hover:border-[var(--color-border-default)] transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-md border border-[var(--color-border-default)] bg-[var(--color-background)] flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <span className="mono text-[11px] tracking-[0.18em] text-[var(--color-text-tertiary)]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 className="text-[18px] font-medium text-[var(--color-text-primary)] mb-2">
                {f.title}
              </h2>
              <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed mb-5">
                {f.description}
              </p>
              <ul className="space-y-2">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13px] text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional capabilities grid */}
      <section className="py-20 border-t border-[var(--color-border-subtle)] mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Everything else
            </span>
            <h2 className="h-display text-[28px] md:text-[36px] mt-3">
              A complete toolkit for modern music licensing.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {additional.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-default)] transition-colors"
              >
                <f.icon className="w-4 h-4 text-[var(--color-accent)] mb-4" />
                <h3 className="text-[14.5px] font-medium text-[var(--color-text-primary)] mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="h-display text-[32px] md:text-[40px]">
            Try it on a real brief.
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
            Browse the library and search the way you'd describe the work.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <Link href="/library">
              <Button size="md">
                Browse the library
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="md" variant="outline">Back to home</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
