import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--color-text-primary)]">
              brandmusic
            </span>
            <span className="text-[13px] text-[var(--color-text-tertiary)]">
              AI-powered music licensing.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/library"
              className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Browse Music
            </Link>
            <Link
              href="/features"
              className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Features
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[12px] text-[var(--color-text-tertiary)]">
            © 2026 Brandmusic
          </p>
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
            v0.1 — Beta
          </p>
        </div>
      </div>
    </footer>
  )
}
