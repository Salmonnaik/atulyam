// app/components/HomeLoader.tsx
'use client'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function HomeLoader() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center" 
         style={{ background: theme.bg }}>
      <div className="relative">
        {/* Animated petals falling */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${Math.random() * 25 + 15}px`,
                height: `${(Math.random() * 25 + 15) * 0.72}px`,
                left: `${Math.random() * 100}%`,
                top: '-20px',
                background: `radial-gradient(ellipse, rgba(255,183,197,0.85), rgba(255,120,160,0.3))`,
                borderRadius: '50% 0 50% 0',
              }}
              animate={{
                translateY: ['0px', '100vh'],
                rotate: [0, 720],
                translateX: [0, Math.random() * 100 - 50],
                opacity: [0.9, 0.9, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        {/* Main loader content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl">🌸</div>
          </motion.div>
          
          <motion.h1 
            className="font-cinzel font-black text-5xl md:text-7xl lg:text-8xl mb-4"
            style={{ 
              color: theme.accent,
              textShadow: `0 0 40px ${theme.accent}`,
              letterSpacing: '0.2em'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ATULYAM
          </motion.h1>
          
          <motion.p
            className="font-jp text-2xl md:text-3xl lg:text-4xl"
            style={{ color: theme.accent2 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            春の星々が目覚める
          </motion.p>

          {/* Loading dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                style={{ backgroundColor: theme.accent }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
