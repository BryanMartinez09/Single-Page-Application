import { useMemo, useState } from 'react'
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react'
import { usePlayer } from '@/context/PlayerContext'

export default function PlayerBar() {
  const { current, isPlaying, togglePlay, next, prev, progress, seek, volume, setVolume } = usePlayer()
  const duration = useMemo(() => 30, []) // placeholder UI
  const [muted, setMuted] = useState(false)

  const toggleMute = () => {
    if (muted) { setVolume(0.7); setMuted(false) }
    else { setVolume(0); setMuted(true) }
  }

  return (
    <footer className="sticky bottom-0 z-40 border-t border-white/10 bg-surface/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 md:px-6 py-3 grid grid-cols-2 md:grid-cols-[1fr,2fr,1fr] items-center gap-3 md:gap-6">
        {/* Track info */}
        <div className="col-span-2 md:col-span-1 min-w-0 flex items-center gap-3 md:gap-4">
          {current ? (
            <>
              <img src={current.cover} className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover" alt="" />
              <div className="min-w-0">
                <div className="font-medium truncate">{current.title}</div>
                <div className="text-xs text-white/60 truncate">{current.artist}</div>
              </div>
            </>
          ) : (
            <div className="text-white/60 text-sm">Selecciona una canción</div>
          )}
        </div>

        {/* Controls + progress */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" onClick={prev} aria-label="Anterior">
              <SkipBack size={18}/>
            </button>
            <button
              className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/30 disabled:opacity-50"
              onClick={togglePlay}
              disabled={!current}
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause size={18}/> : <Play size={18}/>}
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" onClick={next} aria-label="Siguiente">
              <SkipForward size={18}/>
            </button>
          </div>

          {/* Barra de progreso */}
          <div className="mt-2 w-full flex items-center gap-2">
            <span className="hidden md:block text-[11px] tabular-nums text-white/60 w-10 text-right">
              {formatSeconds(Math.min(progress, duration))}
            </span>
            <input
              type="range"
              min={0}
              max={duration}
              step={0.1}
              value={Math.min(progress, duration)}
              onChange={(e) => seek(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <span className="hidden md:block text-[11px] tabular-nums text-white/60 w-10">
              {formatSeconds(duration)}
            </span>
          </div>
        </div>

        {/* Volume */}
        <div className="col-span-2 md:col-span-1 flex items-center justify-end gap-2">
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
            onClick={toggleMute}
            aria-label={muted || volume === 0 ? 'Activar audio' : 'Silenciar'}
          >
            {(muted || volume === 0) ? <VolumeX size={18}/> : <Volume2 size={18}/>}
          </button>
          {/* En móvil oculto el slider para no saturar */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="hidden sm:block w-28 md:w-40 accent-primary"
          />
        </div>
      </div>
    </footer>
  )
}

function formatSeconds(s: number) {
  const mm = Math.floor(s / 60)
  const ss = Math.floor(s % 60)
  return `${mm}:${String(ss).padStart(2, '0')}`
}
