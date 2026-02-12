import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1e24',
          red: '#8b1e1e',
          gold: '#c6a43c',
          black: '#0a0c0f',
        },
        secondary: {
          ink: '#2c2c2c',
          paper: '#f5f0e6',
          bamboo: '#2d5a27',
          steel: '#4a5c66',
          edge: '#bcc0c7',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'sword-slash': 'swordSlash 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'ink-spread': 'inkSpread 1.2s ease-out',
      },
      keyframes: {
        swordSlash: {
          '0%': { transform: 'scaleX(0)', opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        inkSpread: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        }
      },
      backgroundImage: {
        'samurai-pattern': "url('/images/samurai-pattern.png')",
        'ninja-pattern': "url('/images/ninja-pattern.png')",
        'japanese-calligraphy': "url('/images/japanese-calligraphy.jpg')",
      }
    },
  },
  plugins: [],
}

export default config