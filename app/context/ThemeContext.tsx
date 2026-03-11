// app/context/ThemeContext.tsx
'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Theme {
  id: string; name: string; desc: string; icon: string
  swatches: string[]
  bg: string; bg2: string; surface: string
  accent: string; accent2: string
  text: string; textMid: string; textDim: string
  border: string; glow: string
}

export const THEMES: Theme[] = [
  {
    id:'dark', name:'Dark Mode', desc:'Professional dark theme', icon:'🌙',
    swatches:['#1a1540','#1e3a5f','#f0f0f0'],
    bg:'#07061a', bg2:'#0f0c29', surface:'rgba(255,255,255,0.03)',
    accent:'#00f5ff', accent2:'#ff2d78',
    text:'#ffffff', textMid:'rgba(255,255,255,0.65)', textDim:'rgba(255,255,255,0.28)',
    border:'rgba(255,255,255,0.08)', glow:'rgba(0,245,255,0.25)',
  },
  {
    id:'light', name:'Light Mode', desc:'Clean light theme', icon:'☀️',
    swatches:['#f5f5f5','#e8e8ee'],
    bg:'#f0f2ff', bg2:'#e4e7f7', surface:'rgba(255,255,255,0.7)',
    accent:'#6c3fc4', accent2:'#e91e8c',
    text:'#0d0b2a', textMid:'rgba(13,11,42,0.62)', textDim:'rgba(13,11,42,0.32)',
    border:'rgba(13,11,42,0.1)', glow:'rgba(108,63,196,0.2)',
  },
  {
    id:'ocean', name:'Ocean', desc:'Deep ocean blues', icon:'🌊',
    swatches:['#041c2c','#0a4a7a','#cce8f4'],
    bg:'#020d18', bg2:'#041c2c', surface:'rgba(0,100,180,0.08)',
    accent:'#00cfff', accent2:'#80e5ff',
    text:'#e0f4ff', textMid:'rgba(224,244,255,0.62)', textDim:'rgba(224,244,255,0.28)',
    border:'rgba(0,207,255,0.12)', glow:'rgba(0,207,255,0.2)',
  },
  {
    id:'sunset', name:'Sunset', desc:'Warm sunset colors', icon:'🌅',
    swatches:['#2d1b4e','#e05252','#ffd166'],
    bg:'#1a0e2e', bg2:'#2d1b4e', surface:'rgba(255,100,100,0.05)',
    accent:'#ff6b6b', accent2:'#ffd166',
    text:'#fff8f0', textMid:'rgba(255,248,240,0.65)', textDim:'rgba(255,248,240,0.28)',
    border:'rgba(255,107,107,0.14)', glow:'rgba(255,107,107,0.2)',
  },
  {
    id:'forest', name:'Forest', desc:'Natural forest greens', icon:'🌿',
    swatches:['#0a1f14','#1c5c35','#a8e6a3'],
    bg:'#060f09', bg2:'#0a1f14', surface:'rgba(74,222,128,0.04)',
    accent:'#4ade80', accent2:'#a8e6a3',
    text:'#ecfdf5', textMid:'rgba(236,253,245,0.65)', textDim:'rgba(236,253,245,0.28)',
    border:'rgba(74,222,128,0.12)', glow:'rgba(74,222,128,0.2)',
  },
  {
    id:'neon', name:'Neon', desc:'Vibrant neon theme', icon:'⚡',
    swatches:['#0d0d0d','#39ff14','#e040fb'],
    bg:'#050505', bg2:'#0d0d0d', surface:'rgba(57,255,20,0.04)',
    accent:'#39ff14', accent2:'#e040fb',
    text:'#ffffff', textMid:'rgba(255,255,255,0.7)', textDim:'rgba(255,255,255,0.3)',
    border:'rgba(57,255,20,0.14)', glow:'rgba(57,255,20,0.2)',
  },
]

interface Ctx { theme: Theme; setTheme: (id:string)=>void; themes: Theme[] }
const ThemeCtx = createContext<Ctx>({ theme:THEMES[0], setTheme:()=>{}, themes:THEMES })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState('dark')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('atulyam-theme') : null
    if (saved && THEMES.find(t=>t.id===saved)) setId(saved)
  }, [])

  const theme = THEMES.find(t=>t.id===id)??THEMES[0]

  useEffect(() => {
    const r = document.documentElement
    r.style.setProperty('--bg',       theme.bg)
    r.style.setProperty('--bg2',      theme.bg2)
    r.style.setProperty('--surface',  theme.surface)
    r.style.setProperty('--accent',   theme.accent)
    r.style.setProperty('--accent2',  theme.accent2)
    r.style.setProperty('--text',     theme.text)
    r.style.setProperty('--text-mid', theme.textMid)
    r.style.setProperty('--text-dim', theme.textDim)
    r.style.setProperty('--border',   theme.border)
    r.style.setProperty('--glow',     theme.glow)
    document.body.style.background = theme.bg
    document.body.style.color = theme.text
  }, [theme])

  const setTheme = (newId: string) => {
    setId(newId)
    if (typeof window !== 'undefined') localStorage.setItem('atulyam-theme', newId)
  }

  return <ThemeCtx.Provider value={{ theme, setTheme, themes:THEMES }}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => useContext(ThemeCtx)
