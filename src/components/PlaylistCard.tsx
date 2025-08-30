import { Track } from '@/context/PlayerContext'
import { usePlayer } from '@/context/PlayerContext'
import { Play } from 'lucide-react'

export default function PlaylistCard({ name, cover, tracks }: { name: string; cover: string; tracks: Track[] }) {
  const { setQueue, playTrack } = usePlayer()
  const start = () => {
    setQueue(tracks, 0)
    playTrack(tracks[0], tracks)
  }
  return (
    <button onClick={start} className="group relative card-surface overflow-hidden text-left">
      <img src={cover} alt="" className="h-44 w-full object-cover group-hover:scale-105 transition" />
      <div className="p-3">
        <div className="font-medium truncate">{name}</div>
        <div className="text-xs text-white/60 truncate">{tracks.length} canciones</div>
      </div>
      <div className="absolute bottom-4 right-4">
        <span className="btn btn-accent opacity-0 group-hover:opacity-100"><Play size={16} className="mr-1"/>Reproducir</span>
      </div>
    </button>
  )
}
