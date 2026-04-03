// app/context/HomeLoadingContext.tsx
'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface HomeLoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const HomeLoadingContext = createContext<HomeLoadingContextType | undefined>(undefined)

export function HomeLoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  // Auto-hide loader after content loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds minimum loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <HomeLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </HomeLoadingContext.Provider>
  )
}

export function useHomeLoading() {
  const context = useContext(HomeLoadingContext)
  if (context === undefined) {
    throw new Error('useHomeLoading must be used within a HomeLoadingProvider')
  }
  return context
}
