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
      },
      gradientColor: theme => ({
        'blue': theme('colors.blue.500'),
        'purple': theme('colors.customPurple'),
        'pink': theme('colors.customPink'),
        'transparent': 'transparent',
      })
    },
  },
  plugins: [],
}

