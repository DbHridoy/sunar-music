import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        'background-secondary': '#111111',
        surface: '#1A1A1A',
        'surface-elevated': '#252525',
        'surface-hover': '#2A2A2A',
        'electric-blue': '#0066FF',
        'electric-cyan': '#00D4FF',
        'electric-purple': '#8B5CF6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-tertiary': '#707070',
        'border-light': '#2A2A2A',
        'border-medium': '#3A3A3A',
        'border-dark': '#4A4A4A',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-clash)'],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-md': '0 0 40px rgba(0, 102, 255, 0.4)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
