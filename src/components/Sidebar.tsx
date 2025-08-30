import { NavLink } from 'react-router-dom'
import { Heart, Home, Library, Search, Plus } from 'lucide-react'

export default function Sidebar() {
  const base =
    'flex items-center gap-3 px-3 py-2 rounded-xl transition text-sm font-medium'
  const isActive = (a: boolean) =>
    a ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-white/80'

  return (
    <aside className="hidden md:flex flex-col gap-6 card-surface p-4 w-60 h-fit sticky top-[68px] rounded-2xl">
      {/* Title / Branding */}
      <div>
        <h2 className="text-xs uppercase tracking-wide text-white/50 mb-2">Navegación</h2>
        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive: a }) => `${base} ${isActive(a)}`}
          >
            <Home size={18} /> Inicio
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive: a }) => `${base} ${isActive(a)}`}
          >
            <Search size={18} /> Explorar
          </NavLink>
          <NavLink
            to="/library"
            className={({ isActive: a }) => `${base} ${isActive(a)}`}
          >
           
          </NavLink>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Sección extra */}
      <div>
        <h2 className="text-xs uppercase tracking-wide text-white/50 mb-2">Tu música</h2>
        <nav className="space-y-1">
          <a
            href="#liked"
            className={`${base} hover:text-pink-400 hover:bg-pink-400/10 text-white/80`}
          >
            <Heart size={18} /> Favoritos
          </a>
          <a
            href="#create"
            className={`${base} hover:text-secondary hover:bg-secondary/10 text-white/80`}
          >
            <Plus size={18} /> Crear playlist
          </a>
        </nav>
      </div>

      {/* Footer pequeño */}
      <div className="mt-auto text-xs text-white/40 px-2">
        © {new Date().getFullYear()} Kodigo Music
      </div>
    </aside>
  )
}
