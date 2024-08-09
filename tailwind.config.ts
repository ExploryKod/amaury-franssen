import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      minHeight: {
        'hero': 'calc(100vh - 96px)',
      },
      backgroundImage: {
        'span-bg': 'var(--span-bg)'
      },
      colors: {
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)'
        },
        'button-secondary': 'var(--button-secondary)',
        'button-text': 'var(--button-text)',
        'text-secondary': 'var(--text-secondary)',
        'background-secondary': 'var(--background-secondary)',
        secondary: {
          DEFAULT: 'var(--secondary)', 
          '700': 'rgba(9, 127, 165, 0.8)'
        },
        button: {
          DEFAULT: 'var(--button)'
        },
        buttonlight: 'var(--button-light)',
        buttonxlight: 'var(--button-xlight)',
        selected: 'var(--selected)',
        dropdown: 'var(--dropdown)',
        dropdownHover: 'var(--dropdown-hover)',
        buttonSecondary: 'var(--button-secondary)'
      },
      boxShadow: {
        'secondary-blue': '0 7.4px 0 rgba(149, 127, 165, 0.7)', 
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'var(--rubik)']
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
