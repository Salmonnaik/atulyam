// app/components/PageHero.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'

interface Props {
  kana?: string; title: string; subtitle?: string
  desc?: string; breadcrumb: string
  stat1?: {n:string;u:string}; stat2?: {n:string;u:string}; stat3?: {n:string;u:string}
}

export default function PageHero({ kana, title, subtitle, desc, breadcrumb, stat1, stat2, stat3 }: Props) {
  const { theme } = useTheme()
  const stats = [stat1, stat2, stat3].filter(Boolean)
  return (
    <section className="relative min-h-[52vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-15"
          style={{ background:`radial-gradient(ellipse,${theme.bg2} 0%,transparent 70%)` }} />
      </div>
      <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{duration:.6}}
        className="flex items-center gap-2 font-mono text-[0.58rem] tracking-[3px] uppercase mb-7" style={{ color:theme.textDim }}>
        <Link href="/" className="no-underline cursor-none hover:opacity-80 transition-opacity" style={{ color:theme.textDim }}>Home</Link>
        <span style={{ color:theme.border }}>›</span>
        <span style={{ color:theme.accent }}>{breadcrumb}</span>
      </motion.div>
      {kana && <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.08,duration:.7}}
        className="font-jp text-sm tracking-[8px] mb-4" style={{ color:`${theme.accent2}90` }}>{kana}</motion.p>}
      <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.18,duration:.9,ease:[0.16,1,0.3,1]}}
        className="font-cinzel font-black leading-[0.92] tracking-[4px] t-hero mb-4"
        style={{ fontSize:'clamp(2.8rem,9vw,7rem)', filter:`drop-shadow(0 0 35px ${theme.accent}22)` }}>
        {title}
      </motion.h1>
      {subtitle && <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3,duration:.7}}
        className="font-mono text-[0.68rem] tracking-[4px] uppercase mb-3" style={{ color:theme.textDim }}>{subtitle}</motion.p>}
      {desc && <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4,duration:.7}}
        className="max-w-lg text-base leading-relaxed font-light mb-6" style={{ color:theme.textMid }}>{desc}</motion.p>}
      {stats.length>0 && (
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.55,duration:.7}}
          className="flex gap-10 flex-wrap justify-center mt-4">
          {stats.map((s,i) => s && (
            <div key={i} className="text-center">
              <div className="font-cinzel text-2xl" style={{ color:theme.accent, textShadow:`0 0 12px ${theme.accent}55` }}>{s.n}</div>
              <div className="font-mono text-[0.55rem] tracking-[2px] uppercase mt-0.5" style={{ color:theme.textDim }}>{s.u}</div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  )
}
