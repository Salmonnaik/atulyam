// app/roadmap/page.tsx
'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import CustomCursor from '@/app/components/CustomCursor'
import SakuraPetals from '@/app/components/SakuraPetals'
import PageHero from '@/app/components/PageHero'
import Footer from '@/app/components/Footer'
import { ROADMAP, EVENTS } from '@/app/utils/data'
import { useTheme } from '@/app/context/ThemeContext'

const GalaxyCanvas = dynamic(() => import('@/app/components/GalaxyCanvas'), { ssr:false, loading:()=>null })

export default function RoadmapPage() {
  const { theme } = useTheme()
  const [activeDay, setActiveDay] = useState(1)
  const dayData = ROADMAP.find(d => d.day === activeDay)!
  const dayEvents = EVENTS.filter(e => e.day === activeDay)

  return (
    <>
      <CustomCursor /><GalaxyCanvas subtle /><SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero kana="三日間の旅" title="3-Day Schedule" breadcrumb="Schedule"
          subtitle="The complete festival journey"
          stat1={{n:'3',u:'Days'}} stat2={{n:'15+',u:'Sessions'}} stat3={{n:'∞',u:'Memories'}} />

        {/* Day selector tabs */}
        <div className="sticky top-[68px] z-50 py-4 px-6 border-b" style={{background:`${theme.bg}ee`,backdropFilter:'blur(24px)',borderColor:theme.border}}>
          <div className="flex gap-4 justify-center flex-wrap">
            {ROADMAP.map(d => (
              <motion.button key={d.day} whileHover={{scale:1.03}} whileTap={{scale:.96}}
                onClick={() => setActiveDay(d.day)}
                className="relative px-8 py-3 font-mono text-[0.65rem] tracking-[2px] uppercase cursor-none transition-all duration-300 overflow-hidden"
                style={{
                  background: activeDay===d.day ? `${d.color}18` : 'transparent',
                  border: `1px solid ${activeDay===d.day ? d.color : theme.border}`,
                  color: activeDay===d.day ? d.color : theme.textDim,
                  boxShadow: activeDay===d.day ? `0 0 20px ${d.color}33, inset 0 0 20px ${d.color}08` : 'none',
                  borderRadius: '4px',
                }}>
                <span className="relative z-10">
                  <span className="font-cinzel font-bold mr-2">Day {d.day}</span>
                  <span className="hidden sm:inline opacity-70">· {d.date}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Day content */}
        <section className="py-16 px-6 lg:px-16 max-w-[1100px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeDay}
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
              transition={{duration:.5,ease:[0.16,1,0.3,1]}}>

              {/* Day header */}
              <div className="text-center mb-14">
                <motion.div initial={{scale:.9}} animate={{scale:1}} transition={{delay:.05,duration:.6}}
                  className="inline-block px-6 py-2 font-mono text-[0.6rem] tracking-[4px] uppercase mb-4 border rounded-full"
                  style={{color:dayData.color,borderColor:`${dayData.color}44`,background:`${dayData.color}10`}}>
                  {dayData.date}
                </motion.div>
                <h2 className="font-cinzel font-black mb-2" style={{fontSize:'clamp(2rem,5vw,4rem)',color:dayData.color,textShadow:`0 0 30px ${dayData.color}44`}}>
                  {dayData.title}
                </h2>
                <p className="font-jp tracking-[6px] text-sm" style={{color:theme.textDim}}>{dayData.subtitle}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">

                {/* Schedule timeline */}
                <div>
                  <h3 className="font-cinzel text-lg mb-6 tracking-wider" style={{color:theme.textMid}}>Schedule</h3>
                  <div className="relative pl-8">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-2 bottom-2 w-px" style={{background:`linear-gradient(to bottom,${dayData.color},${dayData.color}22)`}} />

                    {dayData.schedule.map((item, i) => (
                      <motion.div key={i} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}}
                        transition={{delay:.1+i*.08,duration:.6}}
                        className="relative mb-7 last:mb-0">
                        {/* Dot */}
                        <div className="absolute -left-[21px] top-[6px] w-3 h-3 rounded-full border-2 flex-shrink-0"
                          style={{background:i===0?dayData.color:theme.bg,borderColor:dayData.color,boxShadow:i===0?`0 0 10px ${dayData.color}`:'none'}} />

                        <div className="glass-card p-4 border-l-2 transition-all hover:translate-x-1 duration-200"
                          style={{borderLeftColor:`${dayData.color}80`,borderColor:theme.border}}>
                          <div className="font-mono text-[0.6rem] tracking-[2px] mb-1" style={{color:dayData.color}}>{item.time}</div>
                          <div className="font-body text-base font-medium" style={{color:theme.text}}>{item.event}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Events for this day */}
                <div>
                  <h3 className="font-cinzel text-lg mb-6 tracking-wider" style={{color:theme.textMid}}>Events on Day {activeDay}</h3>
                  <div className="space-y-4">
                    {dayEvents.length > 0 ? dayEvents.map((event,i) => (
                      <motion.div key={event.id} initial={{opacity:0,x:12}} animate={{opacity:1,x:0}}
                        transition={{delay:.1+i*.08,duration:.6}}
                        className="glass-card p-5 border cursor-none group hover:-translate-y-1 transition-all duration-300"
                        style={{borderColor:theme.border}}>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-3xl">{event.icon}</span>
                          <div>
                            <div className="font-cinzel text-base tracking-wide" style={{color:theme.text}}>{event.name}</div>
                            <div className="font-jp text-[0.72rem] tracking-[2px]" style={{color:event.color}}>{event.tagline}</div>
                          </div>
                          <div className="ml-auto font-cinzel text-sm" style={{color:'#ffd700'}}>{event.prize}</div>
                        </div>
                        <div className="flex items-center gap-4 font-mono text-[0.58rem] tracking-[2px] uppercase">
                          <span style={{color:theme.textDim}}>📍 {event.venue}</span>
                          <span className="px-3 py-1 border rounded-full" style={{color:event.color,borderColor:`${event.color}44`,background:`${event.color}10`}}>
                            {event.fee}
                          </span>
                        </div>
                      </motion.div>
                    )) : (
                      <div className="text-center py-12 font-mono text-sm" style={{color:theme.textDim}}>No events scheduled.</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Day navigation */}
          <div className="flex justify-between mt-16 pt-8 border-t" style={{borderColor:theme.border}}>
            <motion.button whileHover={{scale:1.04,x:-3}} whileTap={{scale:.97}}
              onClick={() => setActiveDay(d => Math.max(1,d-1))}
              disabled={activeDay===1}
              className="px-8 py-3 font-mono text-[0.65rem] tracking-[2px] uppercase cursor-none clip border transition-all disabled:opacity-30"
              style={{color:theme.textDim,borderColor:theme.border}}>
              ← Previous Day
            </motion.button>
            <motion.button whileHover={{scale:1.04,x:3}} whileTap={{scale:.97}}
              onClick={() => setActiveDay(d => Math.min(3,d+1))}
              disabled={activeDay===3}
              className="px-8 py-3 font-mono text-[0.65rem] tracking-[2px] uppercase cursor-none clip border transition-all disabled:opacity-30"
              style={{color:theme.accent,borderColor:`${theme.accent}44`}}>
              Next Day →
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
