/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}", "/node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        sky: colors.sky,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

