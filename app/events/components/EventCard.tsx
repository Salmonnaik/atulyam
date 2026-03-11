// app/events/components/EventCard.tsx
'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { EventItem } from '@/types'
import { useTheme } from '@/app/context/ThemeContext'

export default function EventCard({ event, index }: { event:EventItem; index:number }) {
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({x:0,y:0})
  const [hov, setHov] = useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return
    setTilt({ x:((e.clientY-r.top)/r.height-.5)*12, y:-((e.clientX-r.left)/r.width-.5)*12 })
  }

  return (
    <motion.article
      ref={ref}
      initial={{opacity:0,y:55}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}}
      transition={{duration:.85,delay:index*.07,ease:[0.16,1,0.3,1]}}
      style={{rotateX:tilt.x,rotateY:tilt.y,transformStyle:'preserve-3d'}}
      onMouseMove={onMove}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>{setTilt({x:0,y:0});setHov(false)}}
      className="relative overflow-hidden cursor-none group transition-all duration-300 glass-card"
      data-hover
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 h-[2px] transition-all duration-500"
        style={{width:hov?'100%':'0%',background:`linear-gradient(90deg,${event.color},transparent)`}} />
      {/* Left glow bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{background:`linear-gradient(to bottom,transparent,${event.color},transparent)`,boxShadow:`0 0 12px ${event.color}`}} />
      {/* BG radial */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{background:`radial-gradient(circle at 50% 0%,${event.color}15,transparent 65%)`}} />

      <div className="p-8 md:p-10 relative z-10">
        {/* Icon + prize */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-5xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{event.icon}</span>
          <div className="text-right">
            <div className="font-mono text-[0.52rem] tracking-[2px] uppercase mb-1" style={{color:theme.textDim}}>Prize</div>
            <div className="font-cinzel text-lg" style={{color:'#ffd700',textShadow:'0 0 12px rgba(255,215,0,0.5)'}}>{event.prize}</div>
          </div>
        </div>
        <h3 className="font-cinzel text-xl tracking-[2px] mb-1" style={{color:theme.text}}>{event.name}</h3>
        <p className="font-jp text-[0.78rem] tracking-[3px] mb-5" style={{color:event.color}}>{event.tagline}</p>
        <p className="text-[0.95rem] leading-[1.75] font-light mb-6" style={{color:theme.textMid}}>{event.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {event.tags.map(t=>(
            <span key={t} className="px-3 py-1 font-mono text-[0.56rem] tracking-[2px] uppercase border" style={{borderColor:theme.border,color:theme.textDim}}>{t}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 mb-6 border" style={{borderColor:theme.border,background:theme.surface}}>
          {[['📅 Date',event.date],['📍 Venue',event.venue],['🏆 Prize',event.prize],['💳 Fee',event.fee]].map(([l,v])=>(
            <div key={l}>
              <div className="font-mono text-[0.52rem] tracking-[2px] uppercase mb-1" style={{color:theme.textDim}}>{l}</div>
              <div className="text-sm" style={{color:l.includes('Prize')?'#ffd700':theme.textMid}}>{v}</div>
            </div>
          ))}
        </div>
        <motion.a 
          href="https://forms.google.com/example" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{scale:1.02}} 
          whileTap={{scale:.97}}
          className="w-full py-4 font-mono text-[0.7rem] font-bold tracking-[3px] uppercase text-black cursor-none clip text-center no-underline block"
          style={{background:`linear-gradient(135deg,${event.color},${event.color}bb)`,boxShadow:hov?`0 0 28px ${event.color}55`:'none'}}>
          Register Now ✦
        </motion.a>
      </div>
    </motion.article>
  )
}
