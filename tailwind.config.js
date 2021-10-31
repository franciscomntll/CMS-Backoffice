const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', 'layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ['Mulish', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors : {
        esmerald: colors.emerald
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      appearance: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
