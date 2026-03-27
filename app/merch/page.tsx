// app/merch/page.tsx
'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import CustomCursor from '@/app/components/CustomCursor'
import SakuraPetals from '@/app/components/SakuraPetals'
import PageHero from '@/app/components/PageHero'
import Footer from '@/app/components/Footer'
import { MERCH } from '@/app/utils/data'
import { useTheme } from '@/app/context/ThemeContext'
import { MerchItem } from '@/types'

const GalaxyCanvas = dynamic(() => import('@/app/components/GalaxyCanvas'), { ssr:false, loading:()=>null })

export default function MerchPage() {
  const { theme } = useTheme()
  const [cart, setCart] = useState<string[]>([])
  const [selected, setSelected] = useState<MerchItem|null>(null)
  const [added, setAdded] = useState<string|null>(null)

  const addToCart = (id: string) => {
    setCart(c => [...c, id])
    setAdded(id)
    setTimeout(() => setAdded(null), 2000)
  }

  const handleItemClick = (item: MerchItem) => {
    setSelected(item)
  }

  return (
    <>
      <CustomCursor /><GalaxyCanvas subtle /><SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero kana="星のグッズ" title="Merch Store" breadcrumb="Merchandise"
          subtitle="Carry the cosmos with you"
          stat1={{n:`${MERCH.length}`,u:'Items'}} stat2={{n:'Free',u:'Shipping ₹999+'}} stat3={{n:'100%',u:'Cosmic Quality'}} />

        {/* Cart badge */}
        {cart.length > 0 && (
          <motion.div initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}}
            className="fixed bottom-6 right-6 z-[300] flex items-center gap-3 px-5 py-3 rounded-full cursor-none"
            style={{background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,boxShadow:`0 8px 32px ${theme.accent}55`}}>
            <span className="text-lg">🛒</span>
            <span className="font-mono text-[0.68rem] tracking-[2px] font-bold text-black">{cart.length} item{cart.length!==1?'s':''}</span>
          </motion.div>
        )}

        {/* Grid */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {MERCH.map((item, i) => (
              <motion.div key={item.id}
                initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}}
                transition={{duration:.75,delay:i*.06,ease:[0.16,1,0.3,1]}}
                className="relative border overflow-hidden cursor-none group hover:-translate-y-2 transition-all duration-300"
                style={{borderColor:theme.border, background:'transparent'}}
                onClick={() => handleItemClick(item)}
                data-hover>

                {/* Color accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{background:`linear-gradient(90deg,${item.color},transparent)`}} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{background:`radial-gradient(circle at 50% 0%,${item.color}10,transparent 65%)`}} />

                {/* Tag badge */}
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 font-mono text-[0.52rem] tracking-[2px] uppercase rounded-full border"
                  style={{color:item.color,borderColor:`${item.color}50`,background:`${item.color}12`}}>
                  {item.tag}
                </div>

                {/* Icon/Image */}
                <div className="relative z-10 flex items-center justify-center pt-4 pb-2">
                  <motion.div animate={{y:[0,-6,0]}} transition={{duration:3+i*.3,repeat:Infinity,ease:'easeInOut'}}
                    className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {item.icon.startsWith('/') ? (
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxHeight: '320px', minHeight: '320px' }}
                      />
                    ) : (
                      <span>{item.icon}</span>
                    )}
                  </motion.div>
                </div>

                {/* Info */}
                <div className="relative z-10 px-8 pb-8">
                  <h3 className="font-cinzel text-lg tracking-[2px] mb-2" style={{color:theme.text}}>{item.name}</h3>
                  <p className="text-[0.95rem] leading-[1.7] font-light mb-6 line-clamp-2" style={{color:theme.textMid}}>{item.description}</p>

                  {/* Sizes */}
                  {item.sizes && (
                    <div className="flex gap-2 flex-wrap mb-6">
                      {item.sizes.map(s=>(
                        <span key={s} className="px-3 py-1 font-mono text-[0.56rem] tracking-[1px] border rounded"
                          style={{color:theme.textDim,borderColor:theme.border}}>{s}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-cinzel text-2xl" style={{color: item.priceColor || item.color }}>₹{item.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button whileHover={{scale:1.05}} whileTap={{scale:.95}}
                        onClick={(e) => { e.stopPropagation(); window.open(item.registrationLink, '_blank') }}
                        className="px-4 py-2.5 font-mono text-[0.6rem] tracking-[1px] uppercase cursor-none border transition-all"
                        style={{
                          color:theme.textDim,
                          borderColor:item.glowColor || item.color,
                          background:'transparent',
                          boxShadow: `0 0 15px ${(item.glowColor || item.color)}66, 0 0 25px ${(item.glowColor || item.color)}33`,
                          textShadow: `0 0 8px ${(item.glowColor || item.color)}88`
                        }}>
                        Register
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Info strip */}
        <section className="py-12 px-6 border-t border-b" style={{borderColor:theme.border}}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['🚚','Free Shipping','On orders above ₹999'],['🔒','Secure Payment','100% safe checkout'],['♻️','Eco Packaging','Sustainable materials'],['📦','Fast Delivery','3-5 business days']].map(([icon,title,desc])=>(
              <div key={title}>
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-cinzel text-sm mb-1" style={{color:theme.text}}>{title}</div>
                <div className="font-mono text-[0.58rem] tracking-[1px]" style={{color:theme.textDim}}>{desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[500] flex items-center justify-center p-4"
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{scale:.94,y:20}} animate={{scale:1,y:0}} exit={{scale:.94,y:20}}
              transition={{duration:.3,ease:[0.16,1,0.3,1]}}
              className="relative z-10 max-w-md w-full p-8 border"
              style={{borderColor:theme.border, background:'transparent'}}
              onClick={e=>e.stopPropagation()}>
              <button onClick={()=>setSelected(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border cursor-none text-sm transition-all"
                style={{color:theme.textDim,borderColor:theme.border}}>✕</button>
              <div className="text-center mb-4">
                {selected.icon.startsWith('/') ? (
                  <img 
                    src={selected.icon} 
                    alt={selected.name}
                    className="w-full h-full object-cover rounded-lg mx-auto"
                    style={{ maxHeight: '280px', minHeight: '280px' }}
                  />
                ) : (
                  <div className="text-6xl">{selected.icon}</div>
                )}
              </div>
              <div className="absolute top-0 left-0 right-0 h-px" style={{background:`linear-gradient(90deg,transparent,${selected.color},transparent)`}} />
              <h2 className="font-cinzel text-xl text-center tracking-wider mb-1" style={{color:theme.text}}>{selected.name}</h2>
              <p className="font-mono text-[0.6rem] text-center tracking-[2px] mb-4" style={{color:selected.color}}>{selected.tag}</p>
              <p className="text-sm leading-[1.7] mb-6" style={{color:theme.textMid}}>{selected.description}</p>
              {selected.sizes && (
                <div className="mb-5">
                  <div className="font-mono text-[0.58rem] tracking-[2px] uppercase mb-2" style={{color:theme.textDim}}>Available Sizes</div>
                  <div className="flex gap-2 flex-wrap">
                    {selected.sizes.map(s=>(
                      <span key={s} className="px-3 py-1.5 font-mono text-[0.6rem] border cursor-none hover:border-current transition-colors"
                        style={{color:selected.color,borderColor:`${selected.color}44`}}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-2xl" style={{color: selected.priceColor || selected.color }}>₹{selected.price}</span>
                <motion.button whileHover={{scale:1.04}} whileTap={{scale:.96}}
                  onClick={() => { window.open(selected.registrationLink, '_blank'); setSelected(null) }}
                  className="px-8 py-3 font-mono text-[0.68rem] tracking-[2px] uppercase cursor-none border transition-all"
                  style={{
                    color:theme.textDim,
                    borderColor:selected.glowColor || selected.color,
                    background:'transparent',
                    boxShadow: `0 0 15px ${(selected.glowColor || selected.color)}66, 0 0 25px ${(selected.glowColor || selected.color)}33`,
                    textShadow: `0 0 8px ${(selected.glowColor || selected.color)}88`
                  }}>
                  Register
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
