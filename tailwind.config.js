/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom-opacity': {
          700: 'rgba(255, 255, 255, 0.60)',
          800: 'rgba(255, 255, 255, 0.30)',
          400: 'rgba(245, 245, 245, 1)'
        },
        'gray-admin': '#8B8B8B',
        'black-btn': '#161616',
        'light-gray-admin':'#F5F5F5',
        'light-green-admin':'#E2F7D8'
      },
      backgroundImage: {
        'header-cat-profile': "url('../src/assets/images/cat-profile.png')",
      },
    },
  },
  plugins: [],
}
