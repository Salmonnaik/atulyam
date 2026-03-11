// app/components/CustomCursor.tsx
'use client'
import { useEffect, useRef } from 'react'
export default function CustomCursor() {
  const dot=useRef<HTMLDivElement>(null), ring=useRef<HTMLDivElement>(null)
  const pos=useRef({x:0,y:0}), cur=useRef({x:0,y:0}), raf=useRef<number>()
  useEffect(()=>{
    const mv=(e:MouseEvent)=>{ pos.current={x:e.clientX,y:e.clientY}; if(dot.current)dot.current.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)` }
    const lp=()=>{ cur.current.x+=(pos.current.x-cur.current.x)*.11; cur.current.y+=(pos.current.y-cur.current.y)*.11; if(ring.current)ring.current.style.transform=`translate(${cur.current.x}px,${cur.current.y}px) translate(-50%,-50%)`; raf.current=requestAnimationFrame(lp) }
    document.addEventListener('mousemove',mv); raf.current=requestAnimationFrame(lp)
    return()=>{ document.removeEventListener('mousemove',mv); if(raf.current)cancelAnimationFrame(raf.current) }
  },[])
  return (<><div ref={dot} id="cur-dot"/><div ref={ring} id="cur-ring"/></>)
}
