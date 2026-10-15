import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#FAF7F2',
          cream: '#F5EFE6',
          burgundy: '#6B1A2A',
          'burgundy-dark': '#4A0F1C',
          'burgundy-light': '#8B2E42',
          rose: '#C4788A',
          'rose-muted': '#D4929F',
          gold: '#C9A84C',
          'gold-light': '#D4B96A',
          charcoal: '#2C2C2C',
          'charcoal-light': '#4A4A4A',
          'gray-warm': '#8A8178',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
