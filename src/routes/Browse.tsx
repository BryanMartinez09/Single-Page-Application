import PlaylistCard from '@/components/PlaylistCard'
import { categories } from './data'

export default function Browse() {
  return (
    <div className="space-y-8">
      <header className="card-surface p-6">
        <h1 className="text-2xl font-semibold">Explorar</h1>
        <p className="text-white/70 mt-1">Categorías y mood para cada momento.</p>
      </header>

      {categories.map((c) => (
        <section key={c.title}>
          <h2 className="text-lg font-semibold mb-3">{c.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.playlists.map((p) => <PlaylistCard key={p.name} {...p} />)}
          </div>
        </section>
      ))}
    </div>
  )
}
