const colors = require('tailwindcss/colors')

const bodyFontFamily = '"Open Sans", sans-serif'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx, mdx}',
    './src/components/**/*.{js,ts,jsx,tsx, mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      body: bodyFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
