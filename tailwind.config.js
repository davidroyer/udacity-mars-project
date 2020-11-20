const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        space: ['Orbitron', 'serif'],
        sans: ['Lato', ...defaultTheme.fontFamily.sans] // Ensure fonts with spaces have " " surrounding it.
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  experimental: {
    applyComplexClasses: true
  }
};
