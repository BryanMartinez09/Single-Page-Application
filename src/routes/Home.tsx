import PlaylistCard from '@/components/PlaylistCard'
import TrackCard from '@/components/TrackCard'
import { trendingPlaylists, newReleases } from './data'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.2),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="card-surface p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Bienvenido a Kodigo Music</h1>
          <p className="text-white/70 mt-2 max-w-2xl">Explora playlists, descubre nuevos lanzamientos y disfruta un reproductor simple inspirado en Spotify/Deezer/Apple Music.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Tendencias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingPlaylists.map((p) => (
            <PlaylistCard key={p.name} {...p} />
          ))}
        </div>
      </section>

  
    </div>
  )
}
