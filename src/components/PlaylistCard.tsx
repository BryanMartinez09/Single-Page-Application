import { Track } from '@/context/PlayerContext'
import { usePlayer } from '@/context/PlayerContext'
import { Play } from 'lucide-react'
import { KeyboardEvent, useMemo, useState } from 'react'
import { coverFor } from '@/utils/covers'

type Props = {
  name: string
  cover?: string
  tracks: Track[]
  subtitle?: string
  className?: string
  rounded?: 'xl' | '2xl' | '3xl'
}

export default function PlaylistCard({
  name,
  cover,
  tracks,
  subtitle,
  className,
  rounded = '2xl',
}: Props) {
  const { setQueue, playTrack } = usePlayer()
  const [loaded, setLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Portada: si no viene o falla, usamos una real del pool
  const fallback = useMemo(() => coverFor(name), [name])
  const src = imgError ? fallback : (cover || fallback)

  const start = () => {
    if (!tracks?.length) return
    setQueue(tracks, 0)
    playTrack(tracks[0], tracks)
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start() }
  }

  const radius =
    rounded === '3xl' ? 'rounded-3xl' : rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl'

  return (
    <button
      onClick={start}
      onKeyDown={onKey}
      aria-label={`Reproducir playlist ${name}`}
      className={[
        'group relative overflow-hidden text-left',
        radius,
        'border border-white/10 bg-card/70 backdrop-blur shadow-md',
        'transition transform hover:-translate-y-[2px] hover:shadow-lg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
        className ?? '',
      ].join(' ')}
    >
      {/* Contenedor con ratio estable: 4/3 en móvil, square en md+ */}
      <div className="relative">
        <div className={`${radius} overflow-hidden`}>
          <div className="relative aspect-[4/3] md:aspect-square">
            {!loaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}
            <img
              src={src}
              alt={`Portada de ${name}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        {/* Gradiente para mejorar legibilidad del texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Texto */}
      <div className="p-3">
        <div className="font-medium truncate" title={name}>{name}</div>
        <div className="text-xs text-white/60 truncate">
          {subtitle ?? `${tracks?.length ?? 0} canciones`}
        </div>
      </div>

      {/* Botones de play: círculo en móvil, ‘pill’ en sm+ */}
      <div className="absolute bottom-3 right-3 space-x-2">
        <span
          className={[
            'inline-flex sm:hidden items-center justify-center h-10 w-10 rounded-full',
            'bg-primary text-white shadow-md transition',
            'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0',
          ].join(' ')}
        >
          <Play size={18} />
        </span>

        <span
          className={[
            'hidden sm:inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm',
            'bg-accent/20 text-accent border border-white/10 shadow-sm transition',
            'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0',
          ].join(' ')}
        >
          <Play size={16} className="mr-0.5" /> Reproducir
        </span>
      </div>

      {/* Ring suave en hover */}
      <div className={`pointer-events-none absolute inset-0 ${radius} ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/30 transition`} />
    </button>
  )
}
