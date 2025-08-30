import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0f19',
        surface: '#111826',
        card: '#161d2e',
        primary: '#22d3ee',
        accent: '#8b5cf6',
      },
    },
  },
  plugins: [],
} satisfies Config
