import { Track } from '@/context/PlayerContext'

// Algunas portadas y audios públicos (de muestra)
const covers = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514917053845-3c7450b2e8c2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
]

// URLs de audio demo (dominio público / ejemplos)
const audios = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
]

export const newReleases: Track[] = [
  { id: 't1', title: 'Blue Neon', artist: 'Nova', cover: covers[0], url: audios[0] },
  { id: 't2', title: 'Gravity', artist: 'Echoes', cover: covers[1], url: audios[1] },
  { id: 't3', title: 'Midnight Drive', artist: 'Astra', cover: covers[2], url: audios[2] },
  { id: 't4', title: 'Sunset Avenue', artist: 'Lumen', cover: covers[3], url: audios[3] },
  { id: 't5', title: 'Dreamweaver', artist: 'Aurora', cover: covers[4], url: audios[4] },
]

export const trendingPlaylists = [
  {
    name: 'Top Hits',
    cover: covers[1],
    tracks: newReleases,
  },
  {
    name: 'Focus Beats',
    cover: covers[4],
    tracks: newReleases.slice().reverse(),
  },
  {
    name: 'Chill Vibes',
    cover: covers[2],
    tracks: newReleases,
  },
  {
    name: 'Workout',
    cover: covers[3],
    tracks: newReleases,
  },
  {
    name: 'Latin Mix',
    cover: covers[0],
    tracks: newReleases,
  },
]

export const categories = [
  { title: 'Energía', playlists: trendingPlaylists },
  { title: 'Relajación', playlists: trendingPlaylists.slice().reverse() },
]
