/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight:      '#060D1F',
        'arctic-cyan': '#38BDF8',
        'mox-blue':    '#0EA5E9',
        'ghost-white': '#EEF2FF',
        'deep-navy':   '#0A1628',
        sky:           '#7DD3FC',
        ice:           '#F2F6FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
