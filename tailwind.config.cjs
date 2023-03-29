/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
        amazing: 'amazingKids',
      },
      colors: {
        blu: '#004db3',
        neutral: '#a1a1a1',
        bluT: '#AAC4E6',
        bluFaded: '#e7e7e7',
        bluLight: '#CCDBF0',
        greyLight: '#F8F9FC',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(100%)' },
        },
        reshape: {
          '50%': {
            transform: 'scale(1.1)',
            opacity: '.8',
          },
        },
      },
      animation: {
        'free-flow': 'carousel 10s linear infinite',
        resize: 'reshape 2s linear infinite',
      },
      screens: {
        xs: '550px',
        xxs: '428px',
      },
    },
  },
  plugins: [],
}
