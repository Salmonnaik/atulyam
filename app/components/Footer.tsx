// app/components/Footer.tsx
'use client'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="relative z-10 pt-12 pb-8 px-8 border-t" style={{ borderColor:theme.border }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-cinzel text-lg tracking-[4px] mb-1" style={{ color:theme.accent, textShadow:`0 0 14px ${theme.accent}` }}>ATULYAM</div>
          <p className="font-jp text-xs tracking-[4px]" style={{ color:theme.textDim }}>春の星々 · Haru no Stars</p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {[['Home','/'],['Events','/events'],['Roadmap','/roadmap'],['Merch','/merch'],['Sponsors','/sponsors']].map(([l,h])=>(
            <Link key={h} href={h} className="font-mono text-[0.58rem] tracking-[2px] uppercase no-underline cursor-none hover:opacity-80 transition-opacity" style={{ color:theme.textDim }}>{l}</Link>
          ))}
        </div>
        <p className="font-mono text-[0.55rem] tracking-[2px]" style={{ color:theme.textDim }}>© 2026 ATULYAM</p>
      </div>
    </footer>
  )
}
