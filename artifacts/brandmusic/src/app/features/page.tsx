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
  Check,
} from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'

const detailedFeatures = [
  {
    icon: Search,
    eyebrow: 'AI Discovery',
    title: 'Conversational AI Search',
    description:
      'Our model understands briefs like "confident but not aggressive" or "warm, nostalgic, with forward momentum." Describe what you need; skip the scrolling.',
    bullets: [
      'Natural-language queries',
      'Context-aware recommendations',
      'Search by mood, genre, or use case',
      'Learns your preferences over time',
    ],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=900&fit=crop',
  },
  {
    icon: Video,
    eyebrow: 'Video Sync',
    title: 'Free Video Sync Preview',
    description:
      'Upload an edit and hear options synced against your footage — before you license. Present shortlists to clients and get approvals faster.',
    bullets: [
      'Drag-and-drop upload',
      'Real-time audio sync',
      'Local-only processing',
      'Export preview videos',
    ],
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=900&fit=crop',
  },
  {
    icon: Sliders,
    eyebrow: 'Stems',
    title: 'Professional Stem Access',
    description:
      'Every track ships with separated stems (drums, bass, melody, vocals). Give your post team full control over the final mix.',
    bullets: [
      'Isolated instrument tracks',
      'Adjust levels independently',
      'Remove or emphasize elements',
      'Consistent across releases',
    ],
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=900&fit=crop',
  },
  {
    icon: Users,
    eyebrow: 'Collaboration',
    title: 'Team Collaboration',
    description:
      'Share shortlists, comment on tracks, and keep stakeholders aligned from concept through final delivery.',
    bullets: [
      'Shared workspaces',
      'Comment threads on tracks',
      'Version history',
      'Role-based permissions',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop',
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

const useCases = [
  {
    tag: 'Agency',
    title: 'Pitch decks & concept reels',
    body: 'Shortlist tracks against rough cuts, present alongside the storyboard, decide before licensing.',
  },
  {
    tag: 'Brand',
    title: 'Always-on social',
    body: 'Stem-level edits keep a single brand cue fresh across every cut-down, every platform.',
  },
  {
    tag: 'Production',
    title: 'Post-production fit',
    body: 'Match cues to picture lock in minutes, request alternates, deliver final mix without scope creep.',
  },
  {
    tag: 'Broadcast',
    title: 'Spot campaigns & promos',
    body: 'Cleared masters with usage analytics for compliance across networks and markets.',
  },
]

const compare = [
  { row: 'Cleared for commercial use', us: true, them: true },
  { row: 'AI-powered brief search', us: true, them: false },
  { row: 'Stems on every release', us: true, them: false },
  { row: 'Free video sync preview', us: true, them: false },
  { row: 'Shared team shortlists', us: true, them: false },
  { row: 'Custom commissions', us: true, them: false },
  { row: 'Single transparent license', us: true, them: false },
]

const testimonial = {
  quote:
    'Brandmusic replaced three tools and two manual review loops. Our team finds music faster and our clients sign off in the first round.',
  name: 'Priya Anand',
  role: 'Head of Production, Field Studio',
}

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

      {/* Detailed features — alternating image + content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {detailedFeatures.map((f, idx) => {
            const reverse = idx % 2 === 1
            return (
              <div
                key={f.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-md border border-[var(--color-border-default)] bg-[var(--color-surface)] flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                      {f.eyebrow} · {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="h-display text-[28px] md:text-[36px] mb-4">{f.title}</h2>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {f.description}
                  </p>
                  <ul className="space-y-2.5">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-text-secondary)]"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-1.5">
                    <div className="aspect-[4/3] rounded-md overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
                      <img
                        src={f.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Additional capabilities */}
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

      {/* Use cases */}
      <section className="py-20 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Use cases
            </span>
            <h2 className="h-display text-[28px] md:text-[36px] mt-3">
              Wherever music meets a deadline.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-default)] transition-colors"
              >
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {u.tag}
                </span>
                <h3 className="text-[16px] font-medium text-[var(--color-text-primary)] mt-3 mb-2">
                  {u.title}
                </h3>
                <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-20 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              How we compare
            </span>
            <h2 className="h-display text-[28px] md:text-[36px] mt-3">
              Built for the work, not just the catalog.
            </h2>
          </div>

          <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] overflow-hidden">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] px-5 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]">
              <span className="text-[12px] text-[var(--color-text-tertiary)]"></span>
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] text-center">
                Brandmusic
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] text-center">
                Stock libraries
              </span>
            </div>
            {compare.map((r) => (
              <div
                key={r.row}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center px-5 py-3.5 border-b border-[var(--color-border-subtle)] last:border-b-0"
              >
                <span className="text-[13.5px] text-[var(--color-text-secondary)]">{r.row}</span>
                <span className="text-center">
                  {r.us ? (
                    <Check className="inline w-4 h-4 text-[var(--color-accent)]" />
                  ) : (
                    <span className="text-[var(--color-text-tertiary)]">—</span>
                  )}
                </span>
                <span className="text-center">
                  {r.them ? (
                    <Check className="inline w-4 h-4 text-[var(--color-text-tertiary)]" />
                  ) : (
                    <span className="text-[var(--color-text-tertiary)]">—</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-3xl mx-auto px-6">
          <figure className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 md:p-10 text-center">
            <blockquote className="h-display text-[22px] md:text-[26px] text-[var(--color-text-primary)] leading-snug">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-[13px] text-[var(--color-text-tertiary)]">
              <span className="text-[var(--color-text-primary)]">{testimonial.name}</span>
              {' · '}
              {testimonial.role}
            </figcaption>
          </figure>
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
