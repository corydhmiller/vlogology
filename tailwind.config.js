module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['./pages/**/*.js', './components/**/*.js']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
