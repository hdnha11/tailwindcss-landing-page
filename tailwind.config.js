const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: 'hsl(0deg 83% 45%)',
          light: 'hsl(10deg 77% 69%)',
        },
        green: {
          light: 'hsl(159deg 23% 64%)',
        },
        yellow: {
          dark: 'hsl(46deg 100% 29%)',
        },
        orange: {
          ...colors.orange,
          lighter: 'hsl(30deg 54% 89%)',
          light: 'hsl(38deg 78% 77%)',
        },
        cyan: {
          ...colors.cyan,
          dark: 'hsl(206deg 35% 29%)',
        },
        teal: {
          ...colors.teal,
          light: 'hsl(181deg 54% 80%)',
        },
      },
      fontFamily: {
        heading: '"DM Serif Display", serif',
        body: '"Nunito Sans", sans-serif',
      },
      borderRadius: {
        large: '46px',
      },
      boxShadow: {
        '3xl': '5px 8px 14px 4px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
