import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Hoefler Text', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#14110D',
          800: '#211C16',
          700: '#322C24',
          600: '#4A4338',
          500: '#6E6557',
          400: '#938A7B',
          300: '#B8AF9F',
        },
        paper: {
          0: '#FFFFFF',
          50: '#FBF9F4',
          100: '#F4F1EA',
          200: '#ECE7DC',
        },
        gold: {
          700: '#8A6A3B',
          600: '#9C7A45',
          500: '#B08D57',
          400: '#C4A572',
          300: '#D7BE91',
        },
        line: {
          100: '#E2DBCD',
          200: '#D2C9B8',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        container: '1280px',
        wide: '1440px',
        text: '720px',
      },
    },
  },
  plugins: [],
}

export default config
