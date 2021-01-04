// next.config.js

module.exports = {
  images: {
    loader: 'cloudinary',
    path: process.env.CLOUDINARY_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: ['@svgr/webpack']
    });

    return config;
  }
};
