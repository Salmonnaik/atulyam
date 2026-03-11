// app/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/app/context/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

export const LINKS = [
  { label:'Home',    href:'/'         },
  { label:'Events',  href:'/events'   },
  { label:'Schedule',href:'/roadmap'  },
  { label:'Sponsors',href:'/sponsors' },
  { label:'Merch',   href:'/merch'    },
  { label:'Team',    href:'/team'     },
  { label:'About',   href:'/about'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-16 py-4 flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? `color-mix(in srgb,${theme.bg} 80%,transparent)` : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.border}` : 'none',
      }}
    >
      {/* Logo */}
      <Link href="/" className="font-cinzel text-[0.95rem] tracking-[4px] no-underline cursor-none"
        style={{ color:theme.accent, textShadow:`0 0 18px ${theme.accent}` }}>
        ATULYAM
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-8 list-none items-center">
        {LINKS.map(l => {
          const active = path === l.href
          return (
            <li key={l.href}>
              <Link href={l.href}
                className="font-mono text-[0.65rem] tracking-[2.5px] uppercase no-underline relative group cursor-none transition-colors duration-200"
                style={{ color: active ? theme.accent : theme.textDim }}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ width:active?'100%':'0%', background:theme.accent, boxShadow:`0 0 6px ${theme.accent}` }} />
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Right: ThemeSwitcher + Register */}
      <div className="hidden lg:flex items-center gap-4">
        <ThemeSwitcher />
        <Link href="/events"
          className="px-5 py-2 font-mono text-[0.62rem] tracking-[2px] uppercase text-black cursor-none clip transition-all duration-200 hover:scale-105"
          style={{ background:`linear-gradient(135deg,${theme.accent},${theme.accent}bb)`, boxShadow:`0 0 20px ${theme.accent}44` }}>
          Register
        </Link>
      </div>

      {/* Mobile right */}
      <div className="lg:hidden flex items-center gap-3">
        <ThemeSwitcher />
        <button className="flex flex-col gap-[5px] cursor-none bg-transparent border-none" onClick={() => setOpen(!open)}>
          {[0,1,2].map(i => (
            <span key={i} className={`block h-px transition-all duration-300 ${
              i===0?`${open?'w-6 rotate-45 translate-y-[7px]':'w-6'}`:
              i===1?`${open?'w-0 opacity-0':'w-4'}`:
              `${open?'w-6 -rotate-45 -translate-y-[7px]':'w-6'}`}`}
              style={{ background:theme.accent, boxShadow:`0 0 6px ${theme.accent}`, width:i===1&&!open?'16px':'24px' }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 py-5 lg:hidden"
          style={{ background:`${theme.bg}f5`, backdropFilter:'blur(24px)', borderBottom:`1px solid ${theme.border}` }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-8 py-3 font-mono text-[0.68rem] tracking-[3px] uppercase no-underline cursor-none transition-colors"
              style={{ color: path===l.href ? theme.accent : theme.textDim }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
