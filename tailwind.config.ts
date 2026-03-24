import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fece2c',
        'primary-dark': '#e6b800',
        dark: '#111111',
        'dark-2': '#1a1a1a',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
