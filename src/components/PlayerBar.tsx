import { useMemo } from 'react'
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react'
import { usePlayer } from '@/context/PlayerContext'

export default function PlayerBar() {
  const { current, isPlaying, togglePlay, next, prev, progress, seek, volume, setVolume } = usePlayer()
  const duration = useMemo(() => 30, []) // simple placeholder for UI

  return (
    <footer className="sticky bottom-0 z-30 border-t border-white/10 bg-surface/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center gap-4">
        <div className="min-w-0 flex items-center gap-3">
          {current ? (
            <>
              <img src={current.cover} className="h-12 w-12 rounded-lg object-cover" alt="" />
              <div className="min-w-0">
                <div className="font-medium truncate">{current.title}</div>
                <div className="text-xs text-white/60 truncate">{current.artist}</div>
              </div>
            </>
          ) : (
            <div className="text-white/60">Selecciona una canción</div>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost" onClick={prev} aria-label="Anterior"><SkipBack size={18}/></button>
            <button className="btn btn-primary" onClick={togglePlay} disabled={!current} aria-label="Reproducir/Pausar">
              {isPlaying ? <Pause size={18}/> : <Play size={18}/>}
            </button>
            <button className="btn btn-ghost" onClick={next} aria-label="Siguiente"><SkipForward size={18}/></button>
          </div>
          <input
            type="range" min={0} max={duration} step={0.1}
            value={Math.min(progress, duration)}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full accent-primary mt-2"
          />
        </div>

        <div className="flex items-center gap-2 w-40">
          <Volume2 size={18}/>
          <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e)=> setVolume(Number(e.target.value))} className="w-full accent-primary"/>
        </div>
      </div>
    </footer>
  )
}
