import { Play } from 'lucide-react'
import { Track } from '@/context/PlayerContext'
import { usePlayer } from '@/context/PlayerContext'

export default function TrackCard({ track, queue }: { track: Track; queue: Track[] }) {
  const { playTrack } = usePlayer()
  return (
    <button onClick={() => playTrack(track, queue)} className="group relative card-surface overflow-hidden text-left">
      <img src={track.cover} alt="" className="h-44 w-full object-cover group-hover:scale-105 transition" />
      <div className="p-3">
        <div className="font-medium truncate">{track.title}</div>
        <div className="text-xs text-white/60 truncate">{track.artist}</div>
      </div>
      <div className="absolute bottom-4 right-4">
        <span className="btn btn-primary opacity-0 group-hover:opacity-100"><Play size={16} className="mr-1"/>Play</span>
      </div>
    </button>
  )
}
