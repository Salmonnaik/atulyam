// app/components/ThemeSwitcher.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, THEMES } from '@/app/context/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  return (
    <div ref={ref} className="relative z-[200]">

      {/* ── Toggle button – matches screenshot: circle with icon ── */}
      <motion.button
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-none select-none"
        style={{
          background: open
            ? `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`
            : 'rgba(255,255,255,0.06)',
          border: `1.5px solid ${open ? theme.accent : 'rgba(255,255,255,0.12)'}`,
          boxShadow: open ? `0 0 20px ${theme.accent}55, 0 0 40px ${theme.accent}22` : 'none',
        }}
        data-hover aria-label="Choose theme"
      >
        <span className="text-base leading-none">{open ? '🌙' : '☀️'}</span>
        {open && (
          <span className="absolute inset-0 rounded-full animate-ping-slow opacity-20"
            style={{ background: theme.accent }} />
        )}
      </motion.button>

      {/* ── Panel – matches screenshot exactly ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, scale:0.94, y:-6 }}
            animate={{ opacity:1, scale:1,    y:0  }}
            exit={{   opacity:0, scale:0.94, y:-6  }}
            transition={{ duration:0.2, ease:[0.16,1,0.3,1] }}
            className="absolute right-0 top-[52px] w-[280px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background:'rgba(16,13,34,0.97)',
              backdropFilter:'blur(36px)',
              WebkitBackdropFilter:'blur(36px)',
              border:'1px solid rgba(255,255,255,0.08)',
              boxShadow:'0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
              <p className="font-cinzel font-bold text-xl text-white tracking-wide">Choose Theme</p>
            </div>

            {/* Theme rows */}
            <div className="px-3 pb-4 space-y-[2px] max-h-[440px] overflow-y-auto no-scroll">
              {THEMES.map((t, i) => {
                const active = t.id === theme.id
                return (
                  <motion.button
                    key={t.id}
                    initial={{ opacity:0, x:8 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay: i * 0.035 }}
                    onClick={() => { setTheme(t.id); setOpen(false) }}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl cursor-none text-left group"
                    style={{
                      background: active
                        ? `linear-gradient(135deg,${t.accent}20,${t.accent2}12)`
                        : 'transparent',
                      border: active
                        ? `1px solid ${t.accent}50`
                        : '1px solid transparent',
                    }}
                    onMouseEnter={e => { if(!active)(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { if(!active)(e.currentTarget as HTMLElement).style.background='transparent' }}
                    data-hover
                  >
                    {/* Swatches – exactly 3 dots like screenshot */}
                    <div className="flex items-center gap-[4px] flex-shrink-0 w-14">
                      {t.swatches.map((s, si) => (
                        <span key={si} className="rounded-full border border-black/20 block flex-shrink-0"
                          style={{
                            width:  si===0?16:si===1?16:12,
                            height: si===0?16:si===1?16:12,
                            background: s,
                            boxShadow: active && si===1 ? `0 0 8px ${s}` : 'none',
                          }} />
                      ))}
                    </div>

                    {/* Text block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm leading-none">{t.icon}</span>
                        <span className="font-cinzel font-bold text-[0.85rem] tracking-wide"
                          style={{ color: active ? t.accent : 'rgba(255,255,255,0.88)' }}>
                          {t.name}
                        </span>
                      </div>
                      <p className="font-mono text-[0.58rem] tracking-wider"
                        style={{ color:'rgba(255,255,255,0.35)' }}>
                        {t.desc}
                      </p>
                    </div>

                    {/* Active pink dot – matches screenshot */}
                    {active && (
                      <motion.div layoutId="theme-dot"
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background:t.accent2, boxShadow:`0 0 10px ${t.accent2}` }} />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Bottom caption */}
            <div className="px-5 py-3 border-t" style={{ borderColor:'rgba(255,255,255,0.05)' }}>
              <p className="font-mono text-[0.52rem] tracking-[2px] uppercase text-center"
                style={{ color:'rgba(255,255,255,0.18)' }}>
                Saved automatically · {THEMES.length} themes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
