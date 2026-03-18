// app/sponsors/page.tsx
'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import CustomCursor from '@/app/components/CustomCursor'
import SakuraPetals from '@/app/components/SakuraPetals'
import PageHero from '@/app/components/PageHero'
import Footer from '@/app/components/Footer'
import { SPONSORS, TIER_COLOR } from '@/app/utils/data'
import { useTheme } from '@/app/context/ThemeContext'

// New sponsors with logos
const NEW_SPONSORS = [
  { name: 'JioSaavn', tier: 'platinum', emoji: '🎵', desc: 'Leading music streaming platform for all your favorite tunes', logo: '🎵' },
  { name: 'RealMe', tier: 'platinum', emoji: '📱', desc: 'Smart technology for smart living', logo: '📱' },
  { name: 'RedBus', tier: 'gold', emoji: '🚌', desc: 'Your travel partner for amazing journeys', logo: '🚌' },
  { name: 'Zomato', tier: 'gold', emoji: '🍕', desc: 'Delivering happiness to your doorstep', logo: '�' },
  { name: 'Swiggy', tier: 'gold', emoji: '🥘', desc: 'Food delivery at your fingertips', logo: '🛵' },
  { name: 'Ola', tier: 'gold', emoji: '🚗', desc: 'Ride sharing made simple', logo: '�' },
  { name: 'Uber', tier: 'gold', emoji: '🚙', desc: 'Moving forward together', logo: '�' },
  { name: 'PayTM', tier: 'associate', emoji: '💳', desc: 'Simple payments for everyday life', logo: '�' },
  { name: 'PhonePe', tier: 'associate', emoji: '📱', desc: 'Fast, secure, simple payments', logo: '�' },
  { name: 'Google', tier: 'platinum', emoji: '🔍', desc: 'Organizing the world\'s information', logo: '🌐' },
  { name: 'Amazon', tier: 'platinum', emoji: '📦', desc: 'From A to Z, we\'ve got you covered', logo: '📦' },
  { name: 'Flipkart', tier: 'gold', emoji: '🛍️', desc: 'The kart of India', logo: '�' },
  { name: 'Myntra', tier: 'gold', emoji: '👗', desc: 'Fashion for the modern you', logo: '�' },
  { name: 'Nykaa', tier: 'associate', emoji: '💄', desc: 'Beauty and wellness destination', logo: '�' },
  { name: 'BigBasket', tier: 'associate', emoji: '🥬', desc: 'Fresh groceries delivered home', logo: '🛒' },
  { name: 'Domino\'s', tier: 'associate', emoji: '🍕', desc: 'Hot pizzas, happy moments', logo: '🍕' },
  { name: 'KFC', tier: 'associate', emoji: '🍗', desc: 'Finger lickin\' good', logo: '🍗' },
  { name: 'McDonald\'s', tier: 'associate', emoji: '🍔', desc: 'I\'m lovin\' it', logo: '�' },
  { name: 'Starbucks', tier: 'gold', emoji: '☕', desc: 'Your third place, away from home and work', logo: '☕' },
  { name: 'Coca-Cola', tier: 'platinum', emoji: '🥤', desc: 'Taste the feeling', logo: '🥤' }
]

const ALL_SPONSORS = [...SPONSORS, ...NEW_SPONSORS]

const GalaxyCanvas = dynamic(() => import('@/app/components/GalaxyCanvas'), { ssr:false, loading:()=>null })

const TIER_ORDER: Array<'title'|'platinum'|'gold'|'associate'> = ['title','platinum','gold','associate']
const TIER_LABEL = { title:'Title Sponsor', platinum:'Platinum Partners', gold:'Gold Partners', associate:'Associate Partners' }
const TIER_SIZE  = { title:'text-[0.9rem]', platinum:'text-[0.82rem]', gold:'text-[0.78rem]', associate:'text-[0.72rem]' }

export default function SponsorsPage() {
  const { theme } = useTheme()

  return (
    <>
      <CustomCursor /><GalaxyCanvas subtle /><SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero kana="スポンサー" title="Our Sponsors" breadcrumb="Sponsors"
          subtitle="The constellations powering Atulyam"
          stat1={{n:`${ALL_SPONSORS.length}`,u:'Partners'}} stat2={{n:'4',u:'Tiers'}} />

        {/* Tier sections */}
        <section className="py-16 px-6 lg:px-20 max-w-[1200px] mx-auto">
          {TIER_ORDER.map(tier => {
            const tierSponsors = ALL_SPONSORS.filter(s => s.tier === tier)
            if (!tierSponsors.length) return null
            const accentColor = TIER_COLOR[tier]
            return (
              <motion.div key={tier} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
                viewport={{once:true,margin:'-60px'}} transition={{duration:.9,ease:[0.16,1,0.3,1]}}
                className="mb-16 last:mb-0">

                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1" style={{background:`linear-gradient(90deg,${accentColor}60,transparent)`}} />
                  <div className="flex items-center gap-2 px-5 py-2 border rounded-full font-mono text-[0.6rem] tracking-[3px] uppercase"
                    style={{color:accentColor,borderColor:`${accentColor}40`,background:`${accentColor}0a`}}>
                    <span style={{textShadow:`0 0 8px ${accentColor}`}}>✦</span>
                    {TIER_LABEL[tier]}
                  </div>
                  <div className="h-px flex-1" style={{background:`linear-gradient(270deg,${accentColor}60,transparent)`}} />
                </div>

                {/* Sponsor cards */}
                <div className={`grid gap-8 ${tier==='title'?'grid-cols-1 max-w-2xl mx-auto':tier==='platinum'?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3':tier==='gold'?'grid-cols-2 md:grid-cols-3 lg:grid-cols-4':'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                  {tierSponsors.map((s, i) => (
                    <motion.div key={s.name}
                      initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}}
                      viewport={{once:true,margin:'-30px'}} transition={{delay:i*.08,duration:.7}}
                      className="relative glass-card border overflow-hidden cursor-none group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                      style={{borderColor:theme.border}}
                      data-hover>

                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{background:`radial-gradient(circle at center,${accentColor}15,transparent 70%)`}} />
                      
                      {/* Card content */}
                      <div className="p-8 text-center">
                        {/* Logo - Larger and centered */}
                        <div className="flex justify-center mb-6">
                          <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0 border-2 shadow-lg"
                            style={{background:`${accentColor}15`,borderColor:`${accentColor}30`}}>
                            {'logo' in s ? s.logo : s.emoji}
                          </div>
                        </div>
                        
                        {/* Sponsor name */}
                        <h3 className="font-cinzel font-bold text-xl mb-2 tracking-wide" style={{color:theme.text}}>
                          {s.name}
                        </h3>
                        
                        {/* Tier badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                          style={{ 
                            backgroundColor: `${accentColor}20`, 
                            color: accentColor,
                            border: `1px solid ${accentColor}40`
                          }}>
                          <span className="mr-1">✦</span>
                          {tier === 'title' ? 'Title Sponsor' : tier === 'platinum' ? 'Platinum' : tier === 'gold' ? 'Gold' : 'Associate'}
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm leading-relaxed mb-6" style={{color:theme.textMid}}>
                          {s.desc}
                        </p>

                        {/* Partner badge for higher tiers */}
                        {tier !== 'associate' && (
                          <div className="flex items-center justify-center pt-4 border-t" style={{borderColor:theme.border}}>
                            <span className="font-mono text-xs tracking-wider uppercase" style={{color:theme.textDim}}>
                              Official Partner
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </section>

        {/* Become a sponsor CTA */}
        <section className="py-20 px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.9}} className="max-w-2xl mx-auto text-center glass-card border p-12 relative overflow-hidden"
            style={{borderColor:theme.border}}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{background:`linear-gradient(90deg,transparent,${theme.accent},${theme.accent2},transparent)`}} />
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="font-cinzel font-bold text-2xl mb-4" style={{color:theme.text}}>Become a Sponsor</h2>
            <p className="font-light leading-relaxed mb-8 max-w-md mx-auto" style={{color:theme.textMid}}>
              Partner with Atulyam and place your brand at the heart of a vibrant, creative, 3,000+ student cultural universe.
            </p>
            <motion.a href="mailto:sponsors@atulyam.edu" whileHover={{scale:1.04,y:-2}} whileTap={{scale:.97}}
              className="inline-block px-12 py-4 font-mono text-[0.72rem] font-bold tracking-[3px] uppercase text-black cursor-none clip no-underline"
              style={{background:`linear-gradient(135deg,${theme.accent},${theme.accent}cc)`,boxShadow:`0 0 28px ${theme.accent}44`}}>
              Get in Touch ✦
            </motion.a>
          </motion.div>
        </section>
      </main>
    </>
  )
}
