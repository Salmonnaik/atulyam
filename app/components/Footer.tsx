// app/components/Footer.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="relative z-10 pt-8 pb-6 px-8 border-t" style={{ borderColor:theme.border }}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Left: Brand Info */}
          <div className="text-center md:text-left">
            <div className="font-cinzel text-lg tracking-[4px] mb-1" style={{ color:theme.accent, textShadow:`0 0 14px ${theme.accent}` }}>ATULYAM</div>
            <p className="font-jp text-xs tracking-[4px] mb-2" style={{ color:theme.textDim }}>春の星々 · Haru no Stars</p>
            <p className="text-xs leading-relaxed" style={{ color:theme.textMid }}>
              Annual Cultural & Technical Festival<br/>
              April 9-11, 2026<br/>
              College of Engineering
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-sm mb-3" style={{ color:theme.accent2 }}>Quick Links</h4>
            <div className="flex flex-col gap-1">
              {[['Home','/'],['Events','/events'],['Roadmap','/roadmap'],['Merch','/merch'],['Gallery','/gallery'],['Team','/team'],['Sponsors','/sponsors']].map(([l,h])=>(
                <Link key={h} href={h} className="font-mono text-xs no-underline cursor-none hover:opacity-80 transition-opacity" style={{ color:theme.textDim }}>{l}</Link>
              ))}
            </div>
          </div>

          {/* Right: Contact & Credits */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-sm mb-3" style={{ color:theme.accent2 }}>Contact</h4>
            <div className="space-y-1 mb-3">
              <p className="text-xs" style={{ color:theme.textMid }}>📧 atulyam@college.edu</p>
              <p className="text-xs" style={{ color:theme.textMid }}>📱 +91 98765 43210</p>
              <p className="text-xs" style={{ color:theme.textMid }}>📍 College Campus, City</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href="/web-team" 
                className="font-mono text-[0.75rem] tracking-[2px] no-underline cursor-none transition-all duration-300 block" 
                style={{ 
                  color: '#ff2d78',
                  textShadow: '0 0 10px rgba(255, 45, 120, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff6b9d'
                  e.currentTarget.style.textShadow = '0 0 85px rgba(255, 45, 120, 0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ff2d78'
                  e.currentTarget.style.textShadow = '0 0 10px rgba(255, 45, 120, 0.5)'
                }}
              >
                Website is developed by Web Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-4" style={{ borderColor:theme.border }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-[0.75rem] tracking-[2px]" 
              style={{ 
                color: '#00f5ff',
                textShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
              }}
            >
              © 2026 ATULYAM. All Rights Reserved.
            </motion.p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                ['📘', 'Facebook'],
                ['📷', 'Instagram'], 
                ['🐦', 'Twitter'],
                ['📺', 'YouTube']
              ].map(([icon, name]) => (
                <motion.button
                  key={name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl cursor-none transition-all"
                  style={{ color: theme.accent2 }}
                  title={name}
                >
                  {icon}
                </motion.button>
              ))}
            </div>

            {/* Additional Info */}
            <p className="text-xs" style={{ color: theme.textDim }}>
              🎪 3 Days • 50+ Events • 10,000+ Attendees
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
