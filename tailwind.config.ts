import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:      '#0D3A6E',
          'navy-dark': '#081D3C',
          'navy-mid':  '#1A4A8A',
          gold:      '#C89520',
          'gold-light': '#F0B830',
          'gold-dark':  '#A07010',
          cream:     '#F7F4EE',
          light:     '#F0F4F8',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in':    'fade-in 0.5s ease-out forwards',
        shimmer:      'shimmer 2.5s linear infinite',
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(135deg, #081D3C 0%, #0D3A6E 50%, #1A4A8A 100%)',
        'gold-gradient':  'linear-gradient(135deg, #A07010 0%, #C89520 50%, #F0B830 100%)',
        'stats-gradient': 'linear-gradient(160deg, #0A2040 0%, #0D3A6E 55%, #0F4280 100%)',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(0,0,0,0.25)',
        gold:         '0 4px 24px rgba(200,149,32,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
