import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        jp:     ['"Noto Serif JP"', 'serif'],
        mono:   ['"Space Mono"', 'monospace'],
        body:   ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'slide-l':  'slideL 32s linear infinite',
        'slide-r':  'slideR 26s linear infinite',
        'petal':    'petalFall 13s linear infinite',
        'float':    'float 6s ease-in-out infinite',
        'ping-slow':'pingSlow 2.5s ease-in-out infinite',
        'shimmer':  'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        slideL:   { from:{transform:'translateX(0)'}, to:{transform:'translateX(-50%)'} },
        slideR:   { from:{transform:'translateX(-50%)'}, to:{transform:'translateX(0)'} },
        petalFall:{ '0%':{transform:'translateY(-30px) rotate(0deg)',opacity:'0.9'}, '100%':{transform:'translateY(110vh) rotate(800deg) translateX(90px)',opacity:'0'} },
        float:    { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-16px)'} },
        pingSlow: { '0%,100%':{opacity:'0.2',transform:'scale(1)'}, '50%':{opacity:'0.5',transform:'scale(1.15)'} },
        shimmer:  { '0%,100%':{backgroundPosition:'0% 50%'}, '50%':{backgroundPosition:'100% 50%'} },
      },
    },
  },
  plugins: [],
}
export default config
