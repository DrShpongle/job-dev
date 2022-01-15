const colors = require('tailwindcss/colors')

const bodyFontFamily = '"Open Sans", sans-serif'
const headingsFontFamily = '"Impact", sans-serif'
const accentedFontFamily = '"Surf Up"'

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
      gray: '#f8f8f8',
    },
    fontFamily: {
      body: bodyFontFamily,
      headings: headingsFontFamily,
      accented: accentedFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
