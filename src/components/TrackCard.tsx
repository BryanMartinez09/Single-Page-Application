import { Track } from '@/context/PlayerContext'
import { usePlayer } from '@/context/PlayerContext'
import { Play } from 'lucide-react'
import { KeyboardEvent } from 'react'

type Props = {
  name: string
  cover: string
  tracks: Track[]
  subtitle?: string
  className?: string
}

export default function PlaylistCard({ name, cover, tracks, subtitle, className }: Props) {
  const { setQueue, playTrack } = usePlayer()

  const start = () => {
    if (!tracks?.length) return
    setQueue(tracks, 0)
    playTrack(tracks[0], tracks)
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      start()
    }
  }

  return (
    <button
      onClick={start}
      onKeyDown={onKey}
      aria-label={`Reproducir playlist ${name}`}
      className={[
        'group relative overflow-hidden text-left',
        // superficie
        'rounded-2xl border border-white/10 bg-card/70 backdrop-blur shadow-md',
        // animaciones y foco accesible
        'transition transform hover:-translate-y-[2px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
        className ?? ''
      ].join(' ')}
    >
      {/* Imagen con aspect ratio estable y lazy-load */}
      <div className="relative">
        <img
          src={cover}
          alt={`Portada de ${name}`}
          loading="lazy"
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Gradiente para legibilidad del texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Texto */}
      <div className="p-3">
        <div className="font-medium truncate" title={name}>{name}</div>
        <div className="text-xs text-white/60 truncate">
          {subtitle ?? `${tracks?.length ?? 0} canciones`}
        </div>
      </div>

      {/* Botón Play flotante */}
      <div className="absolute bottom-3 right-3">
        <span
          className={[
            'inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm',
            'bg-accent/20 text-accent border border-white/10',
            'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0',
            'transition'
          ].join(' ')}
        >
          <Play size={16} className="mr-0.5" /> Reproducir
        </span>
      </div>

      {/* Ring suave al hacer hover para dar feedback en tarjetas oscuras */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/30 transition" />
    </button>
  )
}
