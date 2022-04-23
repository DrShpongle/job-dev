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
        DEFAULT: '1.25rem',
        md: '2rem',
      },
    },
    extend: {
      screens: {
        'hover-hover': {raw: '(hover: hover)'},
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            fontSize: theme('fontSize.lg'),
            h3: {
              fontSize: theme('fontSize.xl'),
              lineHeight: theme('lineHeight.normal'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        'prose-sm': {
          css: {
            fontSize: theme('fontSize.sm'),
            h3: {
              fontSize: theme('fontSize.lg'),
            },
          },
        },
        'prose-lg': {
          css: {
            fontSize: theme('fontSize.xl'),
            h3: {
              fontSize: theme('fontSize.2xl'),
            },
          },
        },
        'prose-xl': {
          css: {
            fontSize: theme('fontSize.2xl'),
            h3: {
              fontSize: theme('fontSize.3xl'),
            },
          },
        },
        'prose-2xl': {
          css: {
            fontSize: theme('fontSize.2xl'),
            h3: {
              fontSize: theme('fontSize.4xl'),
            },
          },
        },
      }),
      boxShadow: {
        iphone: 'inset 0 2px 40px 0 rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
