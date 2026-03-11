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

const teamMembers = [
  {
    name: "Aya Tanaka",
    role: "Festival Director",
    department: "Computer Science",
    image: "👩‍💻",
    description: "Leading the vision and execution of ATULYAM with passion and creativity."
  },
  {
    name: "Kenji Yamamoto",
    role: "Technical Lead",
    department: "Information Technology",
    image: "👨‍💻",
    description: "Ensuring all tech aspects run smoothly from web to interactive installations."
  },
  {
    name: "Yuki Sato",
    role: "Cultural Coordinator",
    department: "Japanese Studies",
    image: "👩‍🎨",
    description: "Bringing traditional Japanese culture to life through authentic experiences."
  },
  {
    name: "Ryu Nakamura",
    role: "Events Manager",
    department: "Business Administration",
    image: "👨‍💼",
    description: "Coordinating all events and ensuring seamless festival operations."
  },
  {
    name: "Hana Suzuki",
    role: "Design Head",
    department: "Graphic Design",
    image: "👩‍🎨",
    description: "Creating stunning visuals that capture the essence of Haru no Stars."
  },
  {
    name: "Takeshi Watanabe",
    role: "Music Director",
    department: "Music",
    image: "👨‍🎵",
    description: "Curating unforgettable musical experiences throughout the festival."
  },
  {
    name: "Emi Ito",
    role: "Marketing Lead",
    department: "Marketing",
    image: "👩‍📱",
    description: "Spreading the word and engaging our community across all platforms."
  },
  {
    name: "Daigo Hayashi",
    role: "Logistics Coordinator",
    department: "Operations Management",
    image: "👨‍🔧",
    description: "Managing all logistics to ensure everything runs like clockwork."
  }
]

export default function Team() {
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
            私たちのチーム
          </motion.p>
          <motion.h1 {...fade(.42)} className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{ fontSize: 'clamp(3.2rem,11vw,10rem)', filter: `drop-shadow(0 0 50px ${theme.accent}25)` }}>
            TEAM
          </motion.h1>
          <motion.p {...fade(.72)} className="font-jp font-light tracking-[14px] mt-4"
            style={{ fontSize: 'clamp(1rem,3vw,2rem)', color: `${theme.accent2}cc`, textShadow: `0 0 28px ${theme.accent2}55` }}>
            チーム
          </motion.p>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(.2)} className="text-center mb-16">
              <h2 className="font-cinzel font-bold text-4xl tracking-wider mb-6" style={{ color: theme.accent }}>
                Meet Our Team
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: theme.text }}>
                The brilliant minds behind ATULYAM – Haru no Stars. Each member brings unique expertise 
                and passion to make this festival unforgettable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  {...fade(.3 + index * 0.1)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-lg border transition-all duration-300"
                    style={{ 
                      borderColor: theme.border, 
                      backgroundColor: `${theme.bg}22`,
                      boxShadow: `0 0 0 1px ${theme.border}22`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${theme.accent}44`
                      e.currentTarget.style.borderColor = theme.accent
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${theme.border}22`
                      e.currentTarget.style.borderColor = theme.border
                    }}>
                    
                    <div className="text-center space-y-4">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.image}
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-xl mb-1" style={{ color: theme.accent2 }}>
                          {member.name}
                        </h3>
                        <p className="font-semibold text-sm mb-1" style={{ color: theme.accent }}>
                          {member.role}
                        </p>
                        <p className="text-xs opacity-70" style={{ color: theme.text }}>
                          {member.department}
                        </p>
                      </div>
                      
                      <p className="text-sm leading-relaxed" style={{ color: theme.text }}>
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN TEAM SECTION ── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div {...fade(.8)}>
              <h2 className="font-cinzel font-bold text-3xl mb-4" style={{ color: theme.accent }}>
                Want to Join Our Team?
              </h2>
              <p className="text-lg mb-8" style={{ color: theme.text }}>
                We're always looking for passionate individuals who want to contribute to ATULYAM. 
                Whether you're interested in organizing, designing, or helping out during the festival, 
                we'd love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full font-bold tracking-wider transition-all border"
                  style={{ 
                    borderColor: theme.accent2,
                    color: theme.accent2,
                    backgroundColor: 'transparent'
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
