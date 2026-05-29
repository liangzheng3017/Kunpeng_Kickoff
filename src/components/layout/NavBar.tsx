import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import MenuIcon from '@/icons/MenuIcon'
import XIcon from '@/icons/XIcon'
import HomeIcon from '@/icons/HomeIcon'
import PlaneIcon from '@/icons/PlaneIcon'
import TrendingUpIcon from '@/icons/TrendingUpIcon'
import RadioIcon from '@/icons/RadioIcon'
import UsersIcon from '@/icons/UsersIcon'
import BriefcaseIcon from '@/icons/BriefcaseIcon'
import RocketIcon from '@/icons/RocketIcon'

interface NavLink {
  label: string
  path: string
  icon: React.FC<{ size?: number | string; className?: string }>
}

const NAV_LINKS: NavLink[] = [
  { label: '首页', path: '/', icon: HomeIcon },
  { label: 'AI行程规划', path: '/planner', icon: PlaneIcon },
  { label: '硬标数据库', path: '/metrics', icon: TrendingUpIcon },
  { label: '避雷雷达', path: '/radar', icon: RadioIcon },
  { label: '社区层', path: '/community', icon: UsersIcon },
  { label: '商业模式', path: '/business', icon: BriefcaseIcon },
  { label: '运营路线图', path: '/roadmap', icon: RocketIcon },
]

export default function NavBar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position for glass effect transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
        scrolled
          ? 'glass-card border-b border-border/30'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-heading text-xl font-bold text-foreground transition-opacity hover:opacity-80"
          onClick={closeMobile}
        >
          {/* Logo Icon: stylized compass/plane shape */}
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30">
            <span className="gradient-text-cyan text-lg font-bold">K</span>
          </div>
          <span className="hidden sm:inline">
            Kickoff<span className="text-accent"> 出发</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {NAV_LINKS.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                'hover:bg-secondary/80 hover:text-foreground',
                isActive(path)
                  ? 'bg-primary/15 text-accent'
                  : 'text-muted-foreground'
              )}
            >
              <Icon size={16} className="shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* CTA Button — Desktop */}
          <Button
            size="sm"
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-shadow"
          >
            <PlaneIcon size={15} />
            <span>立即体验</span>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-muted-foreground hover:text-foreground"
                aria-label="打开菜单"
              >
                <MenuIcon size={22} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] border-l-primary/15 bg-background/95 backdrop-blur-xl p-0"
            >
              <SheetHeader className="border-b border-border/30 px-5 py-4">
                <SheetTitle className="flex items-center gap-2.5 font-heading text-lg">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30">
                    <span className="gradient-text-cyan text-base font-bold">K</span>
                  </div>
                  <span>
                    Kickoff<span className="text-accent"> 出发</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-0.5 px-3 py-4" aria-label="移动端导航">
                {NAV_LINKS.map(({ label, path, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMobile}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                      isActive(path)
                        ? 'bg-primary/15 text-accent'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                    )}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span>{label}</span>
                    {isActive(path) && (
                      <span className="ml-auto block size-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-border/30 px-5 py-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-shadow">
                  <PlaneIcon size={16} />
                  <span>立即体验 Kickoff</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
