import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#111738',
        accent: '#E6C068',
        gold: '#D4AF37',
        text: '#F8F8F8',
        accentBlue: '#4DA3FF',
        darkHover: '#1A2342',
      },
      boxShadow: {
        soft: '0 25px 80px rgba(0, 0, 0, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
