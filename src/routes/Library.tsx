import TrackCard from '@/components/TrackCard'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Track } from '@/context/PlayerContext'
import { newReleases } from './data'

export default function Library() {
  const [liked, setLiked] = useLocalStorage<Track[]>('liked', [])

  const toggleLike = (t: Track) => {
    setLiked((prev) => prev.find(x => x.id === t.id) ? prev.filter(x => x.id !== t.id) : [...prev, t])
  }

  return (
    <div className="space-y-8">
      <header className="card-surface p-6">
        
        <p className="text-white/70 mt-1">Tus canciones favoritas (se guardan en LocalStorage).</p>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">Favoritos</h2>
        {liked.length === 0 ? (
          <p className="text-white/60">Aún no tienes favoritos. Explora y haz clic en el corazón.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {liked.map((t) => (
              <div key={t.id} className="relative">
                <TrackCard track={t} queue={liked} />
                <button
                  onClick={() => toggleLike(t)}
                  className="absolute top-2 right-2 text-xs bg-white/10 px-2 py-1 rounded-full"
                >Quitar</button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Recomendados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newReleases.map((t) => (
            <div key={t.id} className="relative">
              <TrackCard track={t} queue={newReleases} />
              <button
                onClick={() => toggleLike(t)}
                className="absolute top-2 right-2 text-xs bg-white/10 px-2 py-1 rounded-full"
              >♥</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
