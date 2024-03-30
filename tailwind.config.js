/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
      colors: {
        customPurple: '#7F4BFF',
        customPink: '#ED24FF'
      }
    },
  },
  plugins: [],
}

