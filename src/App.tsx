import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Browse from './routes/Browse'
import Library from './routes/Library'
import Auth from './routes/Auth'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PlayerBar from './components/PlayerBar'

export default function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-4 md:gap-6 p-4 md:p-6">
        <Sidebar />
        <div className="space-y-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/library" element={<Library />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <PlayerBar />
    </div>
  )
}
