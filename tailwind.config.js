/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#f43f5e',
          600: '#e11d48',
        },
        pink: {
          500: '#ec4899',
          600: '#db2777',
        },
        purple: {
          600: '#9333ea',
        },
      },
    },
  },
  plugins: [],
}
