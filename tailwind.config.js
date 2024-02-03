/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom': {
          700: 'rgba(255, 255, 255, 0.60)',
          800: 'rgba(255, 255, 255, 0.30)',
        },
      }
    },
  },
  plugins: [],
}
