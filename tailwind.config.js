module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    layers: ['components', 'utilities'],
    content: ['./components/**/*.tsx', './pages/**/*.tsx']
  },

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#252529',
      white: '#fcfcfd',

      orange: '#ea9234',
      red: '#d5443c',
      darkred: '#d5443c',
      green: '#5dd961',
      blue: '#5bcaeb',

      yellow: {
        300: '#fced65',
        400: '#f7dd38',
        600: '#f0c811'
      },
      gray: {
        200: '#ededf2',
        300: '#dadae3',
        400: '#cbd5e0',
        500: '#53535b',
        600: '#3b3b40',
        800: '#2e2e33'
      }
    }
  },
  variants: {},
  plugins: []
};
