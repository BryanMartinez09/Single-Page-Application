import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

export type Track = {
  id: string
  title: string
  artist: string
  cover: string
  url: string
  duration?: number
}

type PlayerContextType = {
  queue: Track[]
  currentIndex: number
  current?: Track
  isPlaying: boolean
  volume: number
  progress: number
  setQueue: (q: Track[], startIndex?: number) => void
  playTrack: (track: Track, queue?: Track[]) => void
  togglePlay: () => void
  next: () => void
  prev: () => void
  seek: (time: number) => void
  setVolume: (v: number) => void
}

const PlayerContext = createContext<PlayerContextType | null>(null)

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef(new Audio())
  const [queue, setQueueState] = useState<Track[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolumeState] = useState(0.7)

  const current = queue[currentIndex]

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = volume
    const onTime = () => setProgress(audio.currentTime)
    const onEnd = () => next()
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnd)
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (current) {
      audio.src = current.url
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }, [current?.id])

  const setQueue = (q: Track[], startIndex = 0) => {
    setQueueState(q)
    setCurrentIndex(startIndex)
  }

  const playTrack = (track: Track, q?: Track[]) => {
    if (q) setQueueState(q)
    const idx = (q || queue).findIndex(t => t.id === track.id)
    setCurrentIndex(idx >= 0 ? idx : 0)
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!current) return
    if (audio.paused) { audio.play(); setIsPlaying(true) } else { audio.pause(); setIsPlaying(false) }
  }

  const next = () => {
    if (queue.length === 0) return
    setCurrentIndex((i) => (i + 1) % queue.length)
  }

  const prev = () => {
    if (queue.length === 0) return
    setCurrentIndex((i) => (i - 1 + queue.length) % queue.length)
  }

  const seek = (time: number) => {
    audioRef.current.currentTime = time
  }

  const setVolume = (v: number) => {
    setVolumeState(v)
    audioRef.current.volume = v
  }

  const value = useMemo<PlayerContextType>(() => ({
    queue, currentIndex, current, isPlaying, volume, progress,
    setQueue, playTrack, togglePlay, next, prev, seek, setVolume
  }), [queue, currentIndex, current?.id, isPlaying, volume, progress])

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider')
  return ctx
}
