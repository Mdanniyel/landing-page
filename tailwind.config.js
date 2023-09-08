/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}", 'node_modules/preline/dist/*.js'],
  theme: {
    fontFamily: {
      heebo: ['Heebo', 'sans-serif'],
      noto: ['Noto Sans Hebrew', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('preline/plugin')],
}