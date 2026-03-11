'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
import SakuraPetals from '../components/SakuraPetals'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

const GalaxyCanvas = dynamic(() => import('../components/GalaxyCanvas'), { ssr: false, loading: () => null })

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] }
})

export default function About() {
  const { theme } = useTheme()

  return (
    <>
      <CustomCursor /><GalaxyCanvas /><SakuraPetals />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20"
              style={{ background: `radial-gradient(ellipse,${theme.bg2},transparent 70%)` }} />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-10"
              style={{ background: `radial-gradient(ellipse,${theme.accent}44,transparent 70%)` }} />
          </div>
          
          <motion.p {...fade(.12)} className="font-jp text-sm tracking-[10px] mb-5" style={{ color: `${theme.accent2}80` }}>
            私たちの物語
          </motion.p>
          <motion.h1 {...fade(.42)} className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{ fontSize: 'clamp(3.2rem,11vw,10rem)', filter: `drop-shadow(0 0 50px ${theme.accent}25)` }}>
            ABOUT
          </motion.h1>
          <motion.p {...fade(.72)} className="font-jp font-light tracking-[14px] mt-4"
            style={{ fontSize: 'clamp(1rem,3vw,2rem)', color: `${theme.accent2}cc`, textShadow: `0 0 28px ${theme.accent2}55` }}>
            物語
          </motion.p>
        </section>

        {/* ── ABOUT CONTENT ── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <motion.div {...fade(.2)} className="text-center space-y-6">
              <h2 className="font-cinzel font-bold text-4xl tracking-wider" style={{ color: theme.accent }}>
                What is ATULYAM?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: theme.text }}>
                ATULYAM – Haru no Stars is our annual cultural festival where Japanese spring aesthetics meet cosmic wonder. 
                A celebration of art, music, technology, and creativity that brings together students from all disciplines 
                to create something truly extraordinary.
              </p>
            </motion.div>

            <motion.div {...fade(.4)} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-cinzel font-bold text-2xl" style={{ color: theme.accent2 }}>
                  Our Vision
                </h3>
                <p className="leading-relaxed" style={{ color: theme.text }}>
                  To create a space where creativity knows no bounds, where traditional Japanese culture 
                  harmonizes with modern innovation, and where every star can shine brightly.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-cinzel font-bold text-2xl" style={{ color: theme.accent2 }}>
                  Our Mission
                </h3>
                <p className="leading-relaxed" style={{ color: theme.text }}>
                  To inspire, connect, and celebrate the diverse talents of our community through 
                  immersive experiences that blend art, technology, and cultural heritage.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(.6)} className="text-center space-y-6">
              <h3 className="font-cinzel font-bold text-3xl" style={{ color: theme.accent }}>
                Festival Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: `${theme.bg}22` }}>
                  <div className="text-2xl mb-3">🌸</div>
                  <h4 className="font-bold mb-2" style={{ color: theme.accent2 }}>Cultural Events</h4>
                  <p className="text-sm" style={{ color: theme.text }}>Traditional performances, art exhibitions, and cultural workshops</p>
                </div>
                <div className="p-6 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: `${theme.bg}22` }}>
                  <div className="text-2xl mb-3">🎵</div>
                  <h4 className="font-bold mb-2" style={{ color: theme.accent2 }}>Music & Dance</h4>
                  <p className="text-sm" style={{ color: theme.text }}>Live concerts, dance competitions, and DJ nights</p>
                </div>
                <div className="p-6 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: `${theme.bg}22` }}>
                  <div className="text-2xl mb-3">🚀</div>
                  <h4 className="font-bold mb-2" style={{ color: theme.accent2 }}>Tech & Innovation</h4>
                  <p className="text-sm" style={{ color: theme.text }}>Hackathons, tech showcases, and interactive installations</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fade(.8)} className="text-center space-y-4">
              <h3 className="font-cinzel font-bold text-3xl" style={{ color: theme.accent }}>
                Join Us
              </h3>
              <p className="text-lg" style={{ color: theme.text }}>
                Whether you're an artist, performer, tech enthusiast, or simply someone who loves to celebrate creativity, 
                ATULYAM has something for you. Come be part of this magical journey where spring meets stars.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-bold tracking-wider transition-all"
                style={{ 
                  backgroundColor: theme.accent, 
                  color: theme.bg,
                  boxShadow: `0 0 30px ${theme.accent}44`
                }}
              >
                Get Involved
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
