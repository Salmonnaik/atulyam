// app/events/page.tsx
'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import CustomCursor from '@/app/components/CustomCursor'
import SakuraPetals from '@/app/components/SakuraPetals'
import PageHero from '@/app/components/PageHero'
import EventCard from './components/EventCard'
import Footer from '@/app/components/Footer'
import { EVENTS } from '@/app/utils/data'
import { useTheme } from '@/app/context/ThemeContext'
import Link from 'next/link'

const GalaxyCanvas = dynamic(() => import('@/app/components/GalaxyCanvas'), { ssr:false, loading:()=>null })
const FILTERS = ['All','Day 1','Day 2','Day 3']

export default function EventsPage() {
  const [active, setActive] = useState('All')
  const { theme } = useTheme()

  const filtered = active === 'All' ? EVENTS
    : active === 'Day 1' ? EVENTS.filter(e=>e.day===1)
    : active === 'Day 2' ? EVENTS.filter(e=>e.day===2)
    : EVENTS.filter(e=>e.day===3)

  return (
    <>
      <CustomCursor /><GalaxyCanvas subtle /><SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero kana="六つの舞台" title="Choose Your Stage" breadcrumb="Events"
          subtitle="Five arenas · Infinite glory"
          stat1={{n:'6',u:'Categories'}} stat2={{n:'50+',u:'Sub-Events'}} stat3={{n:'₹1.1L',u:'Total Prize'}} />

        {/* Filter bar */}
        <div className="sticky top-[68px] z-50 py-4 px-6 border-b" style={{background:`${theme.bg}ee`,backdropFilter:'blur(24px)',borderColor:theme.border}}>
          <div className="flex gap-3 justify-center flex-wrap">
            {FILTERS.map((f,i)=>(
              <motion.button key={f} initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} transition={{delay:i*.04}}
                onClick={()=>setActive(f)}
                className="px-6 py-2 font-mono text-[0.62rem] tracking-[2.5px] uppercase transition-all duration-300 cursor-none clip"
                style={{
                  background: active===f ? `linear-gradient(135deg,${theme.accent},${theme.accent}bb)` : 'transparent',
                  color: active===f ? '#000' : theme.textDim,
                  border: `1px solid ${active===f ? theme.accent : theme.border}`,
                  boxShadow: active===f ? `0 0 20px ${theme.accent}44` : 'none',
                }}>
                {f}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((e,i) => <EventCard key={e.id} event={e} index={i} />)}
          </div>
        </section>

        {/* Link to roadmap */}
        <section className="py-14 text-center px-6">
          <p className="font-jp text-sm tracking-[4px] mb-6" style={{color:theme.textDim}}>See the full festival schedule</p>
          <Link href="/roadmap">
            <motion.div whileHover={{scale:1.04,y:-2}} whileTap={{scale:.97}}
              className="inline-block px-12 py-4 font-mono text-[0.72rem] tracking-[3px] uppercase cursor-none clip border transition-all"
              style={{color:theme.accent2,borderColor:`${theme.accent2}44`,background:'transparent'}}>
              View 3-Day Roadmap →
            </motion.div>
          </Link>
        </section>
      </main>
    </>
  )
}
