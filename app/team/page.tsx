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

const teamCategories = [
  {
    id: "faculty-coordinators",
    name: "Faculty Coordinators",
    members: [
      {
        name: "Dr. Sarah Johnson",
        role: "Faculty Coordinator",
        department: "Computer Science",
        image: "👩‍🏫",
        description: "Guiding the technical aspects and ensuring academic excellence.",
        social: {
          instagram: "https://instagram.com/sarahjohnson",
          linkedin: "https://linkedin.com/in/sarahjohnson"
        }
      },
      {
        name: "Prof. Michael Chen",
        role: "Faculty Coordinator", 
        department: "Information Technology",
        image: "👨‍🏫",
        description: "Overseeing infrastructure and technology integration.",
        social: {
          instagram: "https://instagram.com/michaelchen",
          linkedin: "https://linkedin.com/in/michaelchen"
        }
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Faculty Coordinator",
        department: "Design",
        image: "👩‍🏫",
        description: "Mentoring creative teams and design innovation.",
        social: {
          instagram: "https://instagram.com/emilyrodriguez",
          linkedin: "https://linkedin.com/in/emilyrodriguez"
        }
      },
      {
        name: "Prof. David Kim",
        role: "Faculty Coordinator",
        department: "Business Administration",
        image: "👨‍🏫",
        description: "Managing organizational structure and operations.",
        social: {
          instagram: "https://instagram.com/davidkim",
          linkedin: "https://linkedin.com/in/davidkim"
        }
      },
      {
        name: "Dr. Lisa Wang",
        role: "Faculty Coordinator",
        department: "Media Studies",
        image: "👩‍🏫",
        description: "Guiding media and publicity strategies.",
        social: {
          instagram: "https://instagram.com/lisawang",
          linkedin: "https://linkedin.com/in/lisawang"
        }
      },
      {
        name: "Prof. James Miller",
        role: "Faculty Coordinator",
        department: "Finance",
        image: "👨‍🏫",
        description: "Overseeing budget management and financial planning.",
        social: {
          instagram: "https://instagram.com/jamesmiller",
          linkedin: "https://linkedin.com/in/jamesmiller"
        }
      }
    ]
  },
  {
    id: "head-coordinator",
    name: "Head Coordinator",
    members: [
      {
        name: "Aya Tanaka",
        role: "Head Coordinator",
        department: "Computer Science",
        image: "👩‍💻",
        description: "Leading the vision and execution of ATULYAM with passion and creativity.",
        social: {
          instagram: "https://instagram.com/ayatanaka",
          linkedin: "https://linkedin.com/in/ayatanaka"
        }
      }
    ]
  },
  {
    id: "web-team",
    name: "Web Team",
    members: [
      {
        name: "Dr. Sarah Johnson",
        role: "Faculty Coordinator",
        department: "Computer Science",
        image: "👩‍🏫",
        description: "Guiding the technical aspects and ensuring academic excellence.",
        social: {
          instagram: "https://instagram.com/sarahjohnson",
          linkedin: "https://linkedin.com/in/sarahjohnson"
        }
      },
      {
        name: "Kenji Yamamoto",
        role: "Technical Lead",
        department: "Information Technology",
        image: "👨‍💻",
        description: "Ensuring all tech aspects run smoothly from web to interactive installations.",
        social: {
          instagram: "https://instagram.com/kenjiyamamoto",
          linkedin: "https://linkedin.com/in/kenjiyamamoto"
        }
      },
      {
        name: "Takeshi Watanabe",
        role: "Web Developer",
        department: "Computer Science",
        image: "👨‍💻",
        description: "Building and maintaining the festival website and digital platforms.",
        social: {
          instagram: "https://instagram.com/takeshiwatanabe",
          linkedin: "https://linkedin.com/in/takeshiwatanabe"
        }
      }
    ]
  },
  {
    id: "events-management",
    name: "Events Management",
    members: [
      {
        name: "Ryu Nakamura",
        role: "Events Manager",
        department: "Business Administration",
        image: "👨‍💼",
        description: "Coordinating all events and ensuring seamless festival operations.",
        social: {
          instagram: "https://instagram.com/ryunakamura",
          linkedin: "https://linkedin.com/in/ryunakamura"
        }
      }
    ]
  },
  {
    id: "decoration-team",
    name: "Decoration Team",
    members: [
      {
        name: "Yuki Sato",
        role: "Decoration Lead",
        department: "Japanese Studies",
        image: "👩‍🎨",
        description: "Creating stunning visual experiences and ambiance.",
        social: {
          instagram: "https://instagram.com/yukisato",
          linkedin: "https://linkedin.com/in/yukisato"
        }
      }
    ]
  },
  {
    id: "show-security",
    name: "Show & Security Management",
    members: [
      {
        name: "Daigo Hayashi",
        role: "Security Head",
        department: "Operations Management",
        image: "👨‍🔧",
        description: "Ensuring safety and smooth event execution.",
        social: {
          instagram: "https://instagram.com/daigohayashi",
          linkedin: "https://linkedin.com/in/daigohayashi"
        }
      }
    ]
  },
  {
    id: "sponsor-team",
    name: "Sponsor Team",
    members: [
      {
        name: "Emi Ito",
        role: "Sponsor Lead",
        department: "Marketing",
        image: "👩‍💰",
        description: "Managing sponsor relationships and partnerships.",
        social: {
          instagram: "https://instagram.com/emiito",
          linkedin: "https://linkedin.com/in/emiito"
        }
      }
    ]
  },
  {
    id: "media-publicity",
    name: "Media & Publicity Team",
    members: [
      {
        name: "Hana Suzuki",
        role: "Media Lead",
        department: "Graphic Design",
        image: "👩‍🎨",
        description: "Creating stunning visuals that capture the essence of Haru no Stars.",
        social: {
          instagram: "https://instagram.com/hanasuzuki",
          linkedin: "https://linkedin.com/in/hanasuzuki"
        }
      }
    ]
  },
  {
    id: "marketing-sponsorship",
    name: "Marketing & Sponsorship Team",
    members: [
      {
        name: "Emi Ito",
        role: "Marketing Lead",
        department: "Marketing",
        image: "👩‍📱",
        description: "Spreading the word and engaging our community across all platforms.",
        social: {
          instagram: "https://instagram.com/emiito",
          linkedin: "https://linkedin.com/in/emiito"
        }
      }
    ]
  },
  {
    id: "design-team",
    name: "Design Team",
    members: [
      {
        name: "Hana Suzuki",
        role: "Design Head",
        department: "Graphic Design",
        image: "👩‍🎨",
        description: "Creating stunning visuals that capture the essence of Haru no Stars.",
        social: {
          instagram: "https://instagram.com/hanasuzuki",
          linkedin: "https://linkedin.com/in/hanasuzuki"
        }
      }
    ]
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

        {/* ── TEAM SECTION ── */}
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

            {/* Display all team categories in linear layout */}
            <div className="space-y-20">
              {teamCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  {...fade(.3 + categoryIndex * 0.1)}
                  className="space-y-8"
                >
                  <h3 className="font-cinzel font-bold text-2xl text-center" style={{ color: theme.accent2 }}>
                    {category.name}
                  </h3>
                  
                  <div className={`grid gap-6 ${
                    category.members.length === 1 
                      ? 'grid-cols-1 max-w-md mx-auto' 
                      : category.members.length === 3
                      ? 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'
                      : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}>
                    {category.members.map((member, memberIndex) => (
                      <motion.div
                        key={member.name}
                        {...fade(.4 + memberIndex * 0.05)}
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
                              <h4 className="font-bold text-xl mb-1" style={{ color: theme.accent2 }}>
                                {member.name}
                              </h4>
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
                            
                            {/* Social Media Links */}
                            <div className="flex justify-center space-x-3 pt-2">
                              <a
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor: `${theme.accent}20`,
                                  color: '#E1306C'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#E1306C'
                                  e.currentTarget.style.color = 'white'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = `${theme.accent}20`
                                  e.currentTarget.style.color = '#E1306C'
                                }}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                </svg>
                              </a>
                              <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor: `${theme.accent}20`,
                                  color: '#0077B5'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#0077B5'
                                  e.currentTarget.style.color = 'white'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = `${theme.accent}20`
                                  e.currentTarget.style.color = '#0077B5'
                                }}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
