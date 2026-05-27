'use client'

import { useState, useRef } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Search, Play, Heart, Download, Video, Upload, X, Sparkles, Filter, Music, TrendingUp } from 'lucide-react'
import Image from 'next/image'

// Mock data
const genres = [
  'All Genres',
  'Electronic',
  'Hip Hop',
  'Rock',
  'Pop',
  'Jazz',
  'Classical',
  'Ambient',
  'Folk',
  'R&B',
]

const moods = [
  'Energetic',
  'Calm',
  'Uplifting',
  'Dark',
  'Emotional',
  'Confident',
  'Playful',
  'Dramatic',
]

const tracks = [
  {
    id: 1,
    title: 'Midnight Drive',
    artist: 'Neon Dreams',
    duration: '3:24',
    bpm: 120,
    genre: 'Electronic',
    mood: 'Energetic',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Ocean Breeze',
    artist: 'Coastal Sounds',
    duration: '4:12',
    bpm: 95,
    genre: 'Ambient',
    mood: 'Calm',
    artwork: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Urban Pulse',
    artist: 'City Lights',
    duration: '2:58',
    bpm: 140,
    genre: 'Hip Hop',
    mood: 'Confident',
    artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Sunrise Acoustic',
    artist: 'Morning Glory',
    duration: '3:45',
    bpm: 88,
    genre: 'Folk',
    mood: 'Uplifting',
    artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Neon Nights',
    artist: 'Synth Wave',
    duration: '4:02',
    bpm: 128,
    genre: 'Electronic',
    mood: 'Dark',
    artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Corporate Rise',
    artist: 'Business Beat',
    duration: '2:34',
    bpm: 110,
    genre: 'Pop',
    mood: 'Confident',
    artwork: 'https://images.unsplash.com/photo-1�459749411175-04bf5292ceea?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Jazz Lounge',
    artist: 'Smooth Vibes',
    duration: '5:18',
    bpm: 92,
    genre: 'Jazz',
    mood: 'Calm',
    artwork: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Epic Journey',
    artist: 'Cinematic Sounds',
    duration: '6:22',
    bpm: 75,
    genre: 'Classical',
    mood: 'Dramatic',
    artwork: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
  },
]

export default function BrowseMusicV2() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All Genres')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showVideoSync, setShowVideoSync] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      {/* Hero Section with Search */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-electric-blue/80" />
              <span className="text-electric-blue/90">50,000+ Premium Tracks</span>
            </div>
            
            <h1 className="font-display font-bold text-[48px] md:text-[64px] mb-6 text-white leading-[1.1]">
              Browse Music
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              Talk to our AI like you'd talk to a music supervisor
            </p>

            {/* AI Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative flex items-center gap-4 p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Search className="w-6 h-6 text-electric-cyan flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Try: 'Confident but not aggressive for a tech startup...'"
                    className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-electric-blue/50 transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filters - Moods */}
          <div className="flex flex-wrap justify-center gap-3">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood === selectedMood ? null : mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-xl ${
                  selectedMood === mood
                    ? 'bg-gradient-to-r from-electric-purple/40 to-electric-pink/40 border border-electric-purple/60 text-white'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Sync Tool */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => setShowVideoSync(!showVideoSync)}
            className="w-full group relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-cyan via-electric-blue to-electric-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/30 transition-all">
              <Video className="w-6 h-6 text-electric-cyan" />
              <span className="text-lg font-semibold text-white">Video Sync Tool</span>
              <span className="text-sm text-white/60">Preview tracks against your footage</span>
            </div>
          </button>

          {/* Video Upload Area */}
          {showVideoSync && (
            <div className="mt-4 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
              
              {!videoFile ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative cursor-pointer group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
                  <div className="relative flex flex-col items-center justify-center p-16 bg-white/5 border-2 border-dashed border-white/20 hover:border-white/40 rounded-xl transition-all">
                    <Upload className="w-12 h-12 text-white/40 mb-4" />
                    <p className="text-lg font-medium text-white mb-2">Drag a video to preview</p>
                    <p className="text-sm text-white/50">or click here to select a file from your computer</p>
                    <p className="text-xs text-white/30 mt-4">This video will not be uploaded to any server or cloud</p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setVideoFile(null)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <video
                      src={URL.createObjectURL(videoFile)}
                      controls
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-white/60 mt-4 text-center">
                    Click on any track below to preview it with your video
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Genre Filter */}
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-4 h-4 text-white/60" />
                    <h3 className="font-semibold text-white">Genre</h3>
                  </div>
                  <div className="space-y-2">
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          selectedGenre === genre
                            ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-white/60" />
                    <h3 className="font-semibold text-white">Trending</h3>
                  </div>
                  <p className="text-sm text-white/50">
                    Most popular tracks this week
                  </p>
                </div>
              </div>
            </aside>

            {/* Track Grid - Boxed Layout */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">All Tracks</h2>
                  <p className="text-sm text-white/50">{tracks.length} tracks found</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    className="group relative"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/0 via-electric-purple/40 to-electric-blue/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    
                    {/* Track Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/30 overflow-hidden transition-all group-hover:scale-105">
                      {/* Album Artwork */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={track.artwork}
                          alt={track.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                            <Play className="w-7 h-7 text-black fill-black ml-1" />
                          </button>
                        </div>
                        {/* Duration badge */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white">
                          {track.duration}
                        </div>
                      </div>

                      {/* Track Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-1 truncate">
                          {track.title}
                        </h3>
                        <p className="text-sm text-white/50 truncate mb-3">
                          {track.artist}
                        </p>

                        {/* Meta tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                            {track.genre}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                            {track.bpm} BPM
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <button className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium text-white transition-all flex items-center justify-center gap-1">
                            <Heart className="w-3 h-3" />
                            Save
                          </button>
                          <button className="flex-1 px-3 py-2 bg-gradient-to-r from-electric-blue to-electric-purple hover:shadow-lg hover:shadow-electric-blue/50 rounded-lg text-xs font-medium text-white transition-all flex items-center justify-center gap-1">
                            <Download className="w-3 h-3" />
                            License
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all">
                  Load More Tracks
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
