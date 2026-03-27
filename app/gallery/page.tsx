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

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/atulyam-2025-1.jpg',
    alt: 'Opening Ceremony ATULYAM 2025',
    category: 'ceremony',
    year: 2025,
    title: 'Grand Opening'
  },
  {
    id: 2,
    src: '/images/gallery/atulyam-2025-2.jpg',
    alt: 'Dance Competition Finals',
    category: 'dance',
    year: 2025,
    title: 'Dance Finals'
  },
  {
    id: 3,
    src: '/images/gallery/atulyam-2025-3.jpg',
    alt: 'Music Battle of Bands',
    category: 'music',
    year: 2025,
    title: 'Battle of Bands'
  },
  {
    id: 4,
    src: '/images/gallery/atulyam-2025-4.jpg',
    alt: 'Art Exhibition',
    category: 'art',
    year: 2025,
    title: 'Art Showcase'
  },
  {
    id: 5,
    src: '/images/gallery/atulyam-2025-5.jpg',
    alt: 'Gaming Tournament',
    category: 'gaming',
    year: 2025,
    title: 'Gaming Arena'
  },
  {
    id: 6,
    src: '/images/gallery/atulyam-2025-6.jpg',
    alt: 'Coding Hackathon',
    category: 'coding',
    year: 2025,
    title: 'Hackathon'
  },
  {
    id: 7,
    src: '/images/gallery/atulyam-2025-7.jpg',
    alt: 'Cultural Night Performance',
    category: 'culture',
    year: 2025,
    title: 'Cultural Night'
  },
  {
    id: 8,
    src: '/images/gallery/atulyam-2025-8.jpg',
    alt: 'Drama Competition',
    category: 'drama',
    year: 2025,
    title: 'Drama Fest'
  },
  {
    id: 9,
    src: '/images/gallery/atulyam-2025-9.jpg',
    alt: 'Sakura Lantern Release',
    category: 'culture',
    year: 2025,
    title: 'Lantern Release'
  },
  {
    id: 10,
    src: '/images/gallery/atulyam-2025-10.jpg',
    alt: 'Star Night Concert',
    category: 'music',
    year: 2025,
    title: 'Star Night'
  },
  {
    id: 11,
    src: '/images/gallery/atulyam-2025-11.jpg',
    alt: 'Awards Ceremony',
    category: 'ceremony',
    year: 2025,
    title: 'Awards Ceremony'
  },
  {
    id: 12,
    src: '/images/gallery/atulyam-2025-12.jpg',
    alt: 'Team Celebration',
    category: 'culture',
    year: 2025,
    title: 'Team Victory'
  },
  {
    id: 13,
    src: '/images/gallery/atulyam-2025-13.jpg',
    alt: 'Fashion Show',
    category: 'fashion',
    year: 2025,
    title: 'Fashion Showcase'
  },
  {
    id: 14,
    src: '/images/gallery/atulyam-2025-14.jpg',
    alt: 'Photography Exhibition',
    category: 'art',
    year: 2025,
    title: 'Photo Exhibit'
  },
  {
    id: 15,
    src: '/images/gallery/atulyam-2025-15.jpg',
    alt: 'Robotics Competition',
    category: 'tech',
    year: 2025,
    title: 'Robo Wars'
  },
  {
    id: 16,
    src: '/images/gallery/atulyam-2025-16.jpg',
    alt: 'Food Festival',
    category: 'food',
    year: 2025,
    title: 'Food Fest'
  }
]

export default function Gallery() {
  const { theme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

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
            写真集
          </motion.p>
          <motion.h1 {...fade(.42)} className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{ fontSize: 'clamp(3.2rem,11vw,10rem)', filter: `drop-shadow(0 0 50px ${theme.accent}25)` }}>
            GALLERY
          </motion.h1>
          <motion.p {...fade(.72)} className="font-jp font-light tracking-[14px] mt-4"
            style={{ fontSize: 'clamp(1rem,3vw,2rem)', color: `${theme.accent2}cc`, textShadow: `0 0 28px ${theme.accent2}55` }}>
            ギャラリー
          </motion.p>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fade(0.2)} className="text-center mb-12">
              <h2
                className="font-cinzel font-bold text-3xl tracking-wider mb-4"
                style={{ color: theme.accent }}
              >
                ATULYAM 2025 Memories
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: theme.text }}
              >
                Relive the magical moments from last year's festival. From electrifying performances 
                to heartfelt celebrations, these captures tell the story of ATULYAM 2025.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  {...fade(.3 + index * 0.05)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                  style={{ 
                    border: `1px solid ${theme.border}33`,
                    backgroundColor: `${theme.bg}11`
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <p className="font-bold text-lg mb-1">{image.title}</p>
                        <p className="text-sm opacity-80">{image.year}</p>
                      </div>
                    </div>
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${theme.accent}22` }}>
                      <span className="text-4xl opacity-50">📸</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX MODAL ── */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: `${theme.accent}22` }}>
                  <span className="text-6xl opacity-50">📸</span>
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-lg opacity-80 mb-1">{selectedImage.alt}</p>
                  <p className="text-sm opacity-60">ATULYAM {selectedImage.year}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
    </>
  )
}
