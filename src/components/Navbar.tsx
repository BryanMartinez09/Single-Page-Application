import { Link, NavLink, useLocation } from 'react-router-dom'
import { Home, Search, Library, LogIn, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Cerrar el menú al cambiar de ruta
  useEffect(() => { setOpen(false) }, [pathname])

  const linkBase =
    'inline-flex items-center gap-2 px-3 py-2 rounded-xl transition text-sm md:text-[15px] font-medium'
  const isActive = (p: boolean) => p ? 'bg-white/10' : 'hover:bg-white/5'

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* Si el archivo está en /public usa ruta absoluta */}
          <img src="log.png" className="h-8 w-8 rounded-sm object-contain" alt="Kodigo Music" />
          <Link to="/" className="font-semibold tracking-wide">Kodigo Music</Link>
        </div>

        {/* Desktop nav */}
        <nav className="ml-6 hidden md:flex items-center gap-1">
          <NavLink to="/" className={({isActive: a}) => `${linkBase} ${isActive(a)}`}>
            <Home size={18}/> Inicio
          </NavLink>
          <NavLink to="/browse" className={({isActive: a}) => `${linkBase} ${isActive(a)}`}>
            <Search size={18}/> Explorar
          </NavLink>
          
        </nav>

        {/* Search pill (desktop) */}
        <div className="ml-auto hidden md:block">
          <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition rounded-2xl px-3 py-1.5 border border-white/10">
            <Search size={16} className="opacity-70" />
            <input
              placeholder="¿Qué quieres escuchar?"
              className="bg-transparent outline-none text-sm w-64 placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Auth button */}
        <div className="ml-3 hidden md:block">
          <NavLink to="/auth" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30">
            <LogIn size={16}/> Entrar
          </NavLink>
        </div>

        {/* Mobile toggler */}
        <button
          className="ml-auto md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-white/10"
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-background">
          <div className="px-4 py-3 space-y-2">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10">
              <Search size={16} className="opacity-70" />
              <input
                placeholder="Buscar"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/50"
              />
            </div>

            <NavItem to="/" icon={<Home size={18}/>} active={pathname === '/'}>Inicio</NavItem>
            <NavItem to="/browse" icon={<Search size={18}/> } active={pathname.startsWith('/browse')}>Explorar</NavItem>
            <NavItem to="/library" icon={<Library size={18}/> } active={pathname.startsWith('/library')}>Tu Biblioteca</NavItem>

            <NavLink
              to="/auth"
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30"
            >
              <LogIn size={16}/> Entrar
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ to, icon, children, active }: { to: string; icon: React.ReactNode; children: React.ReactNode; active: boolean }) {
  return (
    <NavLink
      to={to}
      className={`flex items-center gap-2 ${active ? 'bg-white/10' : 'hover:bg-white/5'} px-3 py-2 rounded-xl`}
    >
      {icon} <span>{children}</span>
    </NavLink>
  )
}
