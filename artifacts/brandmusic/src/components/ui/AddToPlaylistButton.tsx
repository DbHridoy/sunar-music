import { useState } from 'react'
import { ListPlus, Plus, Check } from 'lucide-react'
import { usePlaylists } from '@/hooks/usePlaylists'
import { useAuth } from '@/contexts/AuthContext'

interface AddToPlaylistButtonProps {
  trackId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function AddToPlaylistButton({ trackId, size = 'md', className = '' }: AddToPlaylistButtonProps) {
  const { user } = useAuth()
  const { playlists, createPlaylist, addTrackToPlaylist } = usePlaylists()
  const [showMenu, setShowMenu] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')
  const [creatingPlaylist, setCreatingPlaylist] = useState(false)
  const [addedToPlaylists, setAddedToPlaylists] = useState<Set<string>>(new Set())

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  const triggerClass = `inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--color-border-subtle)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-default)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-ring)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${className}`

  const handleAddToPlaylist = async (playlistId: string) => {
    if (!user) return
    const { error } = await addTrackToPlaylist(playlistId, trackId)
    if (!error) {
      setAddedToPlaylists((prev) => new Set(prev).add(playlistId))
      setTimeout(() => {
        setAddedToPlaylists((prev) => {
          const next = new Set(prev)
          next.delete(playlistId)
          return next
        })
      }, 2000)
    }
  }

  const handleCreatePlaylist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPlaylistName.trim() || !user) return
    setCreatingPlaylist(true)
    const { data, error } = await createPlaylist(newPlaylistName)
    if (!error && data) {
      await addTrackToPlaylist(data.id, trackId)
      setNewPlaylistName('')
      setAddedToPlaylists((prev) => new Set(prev).add(data.id))
      setTimeout(() => {
        setAddedToPlaylists((prev) => {
          const next = new Set(prev)
          next.delete(data.id)
          return next
        })
      }, 2000)
    }
    setCreatingPlaylist(false)
  }

  if (!user) {
    return (
      <button
        type="button"
        disabled
        title="Sign in to save to a playlist"
        aria-label="Add to playlist"
        className={triggerClass}
      >
        <ListPlus className={sizes[size]} />
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Add to playlist"
        aria-expanded={showMenu}
        className={triggerClass}
      >
        <ListPlus className={sizes[size]} />
      </button>

      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] shadow-xl z-50 overflow-hidden">
            <form onSubmit={handleCreatePlaylist} className="p-2.5 border-b border-[var(--color-border-subtle)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  placeholder="New playlist"
                  aria-label="New playlist name"
                  className="flex-1 h-8 px-2.5 rounded-md border border-[var(--color-border-default)] bg-[var(--color-background)] text-[13px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  disabled={!newPlaylistName.trim() || creatingPlaylist}
                  aria-label="Create playlist"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="max-h-64 overflow-y-auto">
              {playlists.length === 0 ? (
                <div className="p-4 text-center text-[12.5px] text-[var(--color-text-tertiary)]">
                  No playlists yet. Create one above.
                </div>
              ) : (
                playlists.map((playlist) => (
                  <button
                    type="button"
                    key={playlist.id}
                    onClick={() => handleAddToPlaylist(playlist.id)}
                    className="w-full px-3 py-2.5 text-left hover:bg-white/[0.03] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[var(--color-text-secondary)]">
                      {playlist.name}
                    </span>
                    {addedToPlaylists.has(playlist.id) && (
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
