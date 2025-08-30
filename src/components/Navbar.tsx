import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, Library, Home, LogIn } from 'lucide-react'
import logo from '/log.png'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-20 w-20" alt="logo" />
          <span className="font-semibold tracking-wide">Kodigo Music</span>
        </Link>
        <nav className="ml-4 md:ml-8 hidden md:flex items-center gap-2">
          <Tab to="/" icon={<Home size={18} />} active={pathname === '/'}>Inicio</Tab>
          <Tab to="/browse" icon={<Search size={18} />} active={pathname.startsWith('/browse')}>Explorar</Tab>
          <Tab to="/library" icon={<Library size={18} />} active={pathname.startsWith('/library')}>Tu Biblioteca</Tab>
        </nav>
        <div className="ml-auto">
          <NavLink to="/auth" className="btn btn-primary">
            <LogIn className="mr-2 h-4 w-4" /> Entrar
          </NavLink>
        </div>
      </div>
    </header>
  )
}

function Tab({ to, icon, children, active }: any) {
  return (
    <NavLink to={to} className={`btn btn-ghost ${active ? 'bg-white/5' : ''}`}>
      <span className="mr-2">{icon}</span>{children}
    </NavLink>
  )
}
