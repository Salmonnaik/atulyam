'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useState } from 'react'
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

const webTeamPhotos = [
  {
    id: 1,
    title: 'Team Collaboration',
    description: 'Brainstorming session for the new website design',
    category: 'meeting',
    image: '👨‍💻'
  },
  {
    id: 2,
    title: 'Late Night Coding',
    description: 'Pushing the final features before launch',
    category: 'development',
    image: '💻'
  },
  {
    id: 3,
    title: 'Design Review',
    description: 'Finalizing the UI/UX with the team',
    category: 'design',
    image: '🎨'
  },
  {
    id: 4,
    title: 'Deployment Success',
    description: 'Celebrating the successful website launch',
    category: 'celebration',
    image: '🚀'
  },
  {
    id: 5,
    title: 'Debugging Session',
    description: 'Solving complex technical challenges together',
    category: 'development',
    image: '🔧'
  },
  {
    id: 6,
    title: 'Team Planning',
    description: 'Planning the architecture and features',
    category: 'meeting',
    image: '📋'
  },
  {
    id: 7,
    title: 'Code Review',
    description: 'Ensuring code quality and best practices',
    category: 'development',
    image: '👀'
  },
  {
    id: 8,
    title: 'Team Celebration',
    description: 'After successful deployment party',
    category: 'celebration',
    image: '🎉'
  },
  {
    id: 9,
    title: 'Client Presentation',
    description: 'Presenting the final product to stakeholders',
    category: 'presentation',
    image: '📊'
  }
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'meeting', name: 'Meetings' },
  { id: 'development', name: 'Development' },
  { id: 'design', name: 'Design' },
  { id: 'celebration', name: 'Celebration' },
  { id: 'presentation', name: 'Presentation' }
]

export default function WebTeamPage() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<typeof webTeamPhotos[0] | null>(null)

  const filteredPhotos = webTeamPhotos.filter(photo => {
    return selectedCategory === 'all' || photo.category === selectedCategory
  })

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
            ウェブチーム
          </motion.p>
          <motion.h1 {...fade(.42)} className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{ fontSize: 'clamp(3.2rem,11vw,10rem)', filter: `drop-shadow(0 0 50px ${theme.accent}25)` }}>
            WEB TEAM
          </motion.h1>
          <motion.p {...fade(.72)} className="font-jp font-light tracking-[14px] mt-4"
            style={{ fontSize: 'clamp(1rem,3vw,2rem)', color: `${theme.accent2}cc`, textShadow: `0 0 28px ${theme.accent2}55` }}>
            ウェブ開発チーム
          </motion.p>
        </section>

        {/* ── TEAM INTRODUCTION ── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fade(.2)} className="space-y-6">
              <h2 className="font-cinzel font-bold text-3xl" style={{ color: theme.accent }}>
                The Minds Behind ATULYAM
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: theme.textMid }}>
                Meet the talented Web Team that brought the ATULYAM digital experience to life. 
                From concept to deployment, our team of developers and designers worked tirelessly 
                to create an immersive online platform that captures the essence of our festival.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍💻</div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: theme.accent2 }}>Development</h3>
                  <p className="text-sm" style={{ color: theme.textMid }}>Cutting-edge code and architecture</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: theme.accent2 }}>Design</h3>
                  <p className="text-sm" style={{ color: theme.textMid }}>Beautiful and intuitive interfaces</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: theme.accent2 }}>Innovation</h3>
                  <p className="text-sm" style={{ color: theme.textMid }}>Pushing boundaries with technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FILTER SECTION ── */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(.3)}>
              <h3 className="text-center font-semibold mb-4" style={{ color: theme.accent2 }}>
                Filter by Category
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category.id ? 'font-bold' : ''
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id 
                        ? theme.accent 
                        : 'transparent',
                      color: selectedCategory === category.id 
                        ? theme.bg 
                        : theme.accent2,
                      border: `1px solid ${theme.accent2}`
                    }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PHOTOS GRID ── */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  {...fade(.4 + index * 0.05)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                  style={{ 
                    border: `1px solid ${theme.border}33`,
                    backgroundColor: `${theme.bg}11`
                  }}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <p className="font-bold text-lg mb-1">{photo.title}</p>
                        <p className="text-sm opacity-80">{photo.category}</p>
                      </div>
                    </div>
                    {/* Placeholder for photo */}
                    <div className="w-full h-full flex items-center justify-center text-6xl" style={{ backgroundColor: `${theme.accent}22` }}>
                      {photo.image}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.accent2 }}>
                      {photo.title}
                    </h3>
                    <p className="text-sm" style={{ color: theme.textMid }}>
                      {photo.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPhotos.length === 0 && (
              <motion.div {...fade(.4)} className="text-center py-20">
                <p className="text-xl" style={{ color: theme.text }}>
                  No photos found for the selected category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── LIGHTBOX MODAL ── */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center text-8xl" style={{ backgroundColor: `${theme.accent}22` }}>
                  {selectedPhoto.image}
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                  <p className="text-lg opacity-80 mb-1">{selectedPhoto.description}</p>
                  <p className="text-sm opacity-60">Category: {selectedPhoto.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <Footer />
      </main>
    </>
  )
}
