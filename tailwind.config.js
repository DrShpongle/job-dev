const colors = require('tailwindcss/colors')

const bodyFontFamily = '"Open Sans", sans-serif'
const headingsFontFamily = '"Impact", sans-serif'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx, mdx}',
    './src/components/**/*.{js,ts,jsx,tsx, mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      pink: '#ff119a',
      blue: '#11c2ff',
    },
    fontFamily: {
      body: bodyFontFamily,
      headings: headingsFontFamily,
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
