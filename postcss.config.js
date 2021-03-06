if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      tailwindcss: {},
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      },
      '@fullhuman/postcss-purgecss': {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
      },
      cssnano: {
        preset: 'default'
      }
    }
  };
} else {
  module.exports = {
    plugins: {
      tailwindcss: {}
    }
  };
}
