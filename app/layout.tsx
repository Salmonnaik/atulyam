// app/layout.tsx
import type { Metadata } from 'next'
import './styles/globals.css'
import { ThemeProvider } from './context/ThemeContext'
import { HomeLoadingProvider } from './context/HomeLoadingContext'

export const metadata: Metadata = {
  title: 'ATULYAM – Haru no Stars',
  description: 'College cultural festival – Japanese spring meets cosmic stars.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise">
        <HomeLoadingProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HomeLoadingProvider>
      </body>
    </html>
  )
}
