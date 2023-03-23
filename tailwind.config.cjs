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
      },
    },
  },
  plugins: [],
}
