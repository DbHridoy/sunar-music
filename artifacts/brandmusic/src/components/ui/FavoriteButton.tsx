import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useFavorites } from '@/hooks/useFavorites'
import { useAuth } from '@/contexts/AuthContext'

interface FavoriteButtonProps {
  trackId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function FavoriteButton({ trackId, size = 'md', className = '' }: FavoriteButtonProps) {
  const { user } = useAuth()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [loading, setLoading] = useState(false)
  const favorite = !!user && isFavorite(trackId)

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user) return
    setLoading(true)
    await toggleFavorite(trackId)
    setLoading(false)
  }

  const disabled = !user || loading

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      title={!user ? 'Sign in to favorite tracks' : favorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--color-border-subtle)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-default)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-ring)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
        favorite ? 'text-[var(--color-accent)] border-[var(--color-accent)]' : ''
      } ${className}`}
    >
      <Heart className={`${sizes[size]} ${favorite ? 'fill-[var(--color-accent)]' : ''}`} />
    </button>
  )
}
