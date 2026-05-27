import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Search, Play, Music2, Heart } from 'lucide-react'
import { mockTracks } from '@/lib/mockTracks'
import FavoriteButton from '@/components/ui/FavoriteButton'
import AddToPlaylistButton from '@/components/ui/AddToPlaylistButton'
import { useFavorites } from '@/hooks/useFavorites'
import { usePlaylists } from '@/hooks/usePlaylists'
import { useAuth } from '@/contexts/AuthContext'

const moods = ['Energetic', 'Calm', 'Uplifting', 'Dark', 'Emotional', 'Confident', 'Playful', 'Dramatic']

export default function LibraryPage() {
  const { user } = useAuth()
  const { favorites } = useFavorites()
  const { playlists } = usePlaylists()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const filteredTracks = mockTracks.filter((track) => {
    const matchesSearch =
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.genre.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesMood = !selectedMood || track.mood.includes(selectedMood)
    const matchesFavorites =
      !showFavoritesOnly || favorites.some((fav) => fav.track_id === track.id)
    return matchesSearch && matchesMood && matchesFavorites
  })

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Library
          </span>
          <h1 className="h-display text-[44px] sm:text-[56px] md:text-[60px] mt-4">
            Browse music.
          </h1>
          <p className="mt-4 text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Describe what you need — mood, energy, references — the way you'd brief a music supervisor.
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 p-1.5 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface)] focus-within:border-[var(--color-accent)] transition-colors">
            <div className="pl-3 text-[var(--color-text-tertiary)]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tracks by title, artist, or genre"
              placeholder="Confident but not aggressive, for a tech startup…"
              className="flex-1 bg-transparent text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none py-2"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {moods.map((mood) => {
              const active = selectedMood === mood
              return (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(active ? null : mood)}
                  className={`h-8 px-3 rounded-md text-[12.5px] border transition-colors ${
                    active
                      ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)]'
                      : 'bg-[var(--color-surface)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {mood}
                </button>
              )
            })}
          </div>

          {user && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-[12.5px] border transition-colors ${
                  showFavoritesOnly
                    ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)]'
                    : 'bg-[var(--color-surface)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-[var(--color-accent)]' : ''}`}
                />
                Favorites
                <span className="mono text-[11px] text-[var(--color-text-tertiary)]">
                  {favorites.length}
                </span>
              </button>
              <div className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[12.5px] text-[var(--color-text-secondary)]">
                <Music2 className="w-3.5 h-3.5" />
                Playlists
                <span className="mono text-[11px] text-[var(--color-text-tertiary)]">
                  {playlists.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-[14px] font-medium text-[var(--color-text-primary)]">
              {showFavoritesOnly ? 'Your favorites' : 'All tracks'}
            </h2>
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
              {filteredTracks.length} {filteredTracks.length === 1 ? 'track' : 'tracks'}
            </span>
          </div>

          {filteredTracks.length === 0 ? (
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] py-16 text-center">
              <Music2 className="w-6 h-6 text-[var(--color-text-tertiary)] mx-auto mb-3" />
              <h3 className="text-[14px] font-medium text-[var(--color-text-primary)] mb-1">
                {showFavoritesOnly ? 'No favorites yet' : 'No tracks found'}
              </h3>
              <p className="text-[13px] text-[var(--color-text-secondary)]">
                {showFavoritesOnly
                  ? 'Start adding tracks to your favorites.'
                  : 'Try adjusting your search or filters.'}
              </p>
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] divide-y divide-[var(--color-border-subtle)] overflow-hidden">
              {filteredTracks.map((track) => (
                <div
                  key={track.id}
                  className="group flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={track.cover_url}
                      alt={track.title}
                      className="w-11 h-11 rounded-md object-cover border border-[var(--color-border-subtle)]"
                    />
                    <button
                      type="button"
                      aria-label={`Play ${track.title}`}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-ring)] transition-opacity rounded-md"
                    >
                      <Play className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] text-[var(--color-text-primary)] truncate">
                      {track.title}
                    </div>
                    <div className="text-[12px] text-[var(--color-text-tertiary)] truncate">
                      {track.artist}
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
                    {track.genre.slice(0, 2).map((g) => (
                      <span
                        key={g}
                        className="px-2 py-0.5 rounded border border-[var(--color-border-subtle)] text-[11px] text-[var(--color-text-secondary)]"
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                    <span className="mono text-[11px] text-[var(--color-text-tertiary)]">
                      {track.bpm} BPM
                    </span>
                    <span className="mono text-[11px] text-[var(--color-text-tertiary)]">
                      {track.key}
                    </span>
                  </div>

                  <span className="mono text-[11px] text-[var(--color-text-tertiary)] flex-shrink-0">
                    {formatDuration(track.duration)}
                  </span>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <FavoriteButton trackId={track.id} />
                    <AddToPlaylistButton trackId={track.id} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
