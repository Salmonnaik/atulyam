// app/components/SakuraPetals.tsx
'use client'
import { useEffect, useRef } from 'react'
export default function SakuraPetals() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const c=ref.current; if(!c) return
    const spawn=()=>{
      const p=document.createElement('div'), sz=Math.random()*20+10, dur=Math.random()*6+4, delay=Math.random()*2
      p.style.cssText=`position:absolute;width:${sz}px;height:${sz*.72}px;left:${Math.random()*100}%;top:-30px;background:radial-gradient(ellipse,rgba(255,183,197,0.85),rgba(255,120,160,0.3));border-radius:50% 0 50% 0;animation:petalFall ${dur}s ${delay}s linear forwards;pointer-events:none;opacity:0;`
      c.appendChild(p); setTimeout(()=>p.remove(),(dur+delay)*1000+500)
    }
    for(let i=0;i<25;i++) spawn()
    const id=setInterval(spawn,200)
    return()=>clearInterval(id)
  },[])
  return (
    <>
      <style>{`@keyframes petalFall{0%{transform:translateY(-30px) rotate(0deg);opacity:.9}100%{transform:translateY(110vh) rotate(800deg) translateX(90px);opacity:0}}`}</style>
      <div ref={ref} className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden />
    </>
  )
}
