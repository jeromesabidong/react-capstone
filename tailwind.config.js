/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-green': '#495e57',
      'primary-yellow': '#f4ce14',
      'secondary-coral': '#ee9972',
      'secondary-nude': '#fbdabb',
      'secondary-grey': '#edefee',
      'secondary-dark-grey': '#333333',
    },
    fontFamily: {
      'sans': ['Karla'],
      'serif': ['Markazi Text'],
    },
    extend: {},
  },
  plugins: [], 
}

