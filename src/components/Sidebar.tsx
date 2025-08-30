import { NavLink } from 'react-router-dom'
import { Heart, Home, Library, Search } from 'lucide-react'

export default function Sidebar() {
  const link = 'flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition'
  const active = 'bg-white/5'
  return (
    <aside className="card-surface p-4 h-fit sticky top-[68px] hidden md:block">
      <div className="text-sm text-white/60 mb-2">Navegación</div>
      <nav className="space-y-1">
        <NavLink to="/" className={({isActive}) => isActive ? `${link} ${active}` : link}><Home size={18}/>Inicio</NavLink>
        <NavLink to="/browse" className={({isActive}) => isActive ? `${link} ${active}` : link}><Search size={18}/>Explorar</NavLink>
        <NavLink to="/library" className={({isActive}) => isActive ? `${link} ${active}` : link}><Library size={18}/>Tu Biblioteca</NavLink>
        <a className={link} href="#liked"><Heart size={18}/>Favoritos</a>
      </nav>
    </aside>
  )
}
