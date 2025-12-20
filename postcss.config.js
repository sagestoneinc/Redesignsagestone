/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-media-minmax': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'cascade-layers': { preserve: false },
      },
    },
  },
};
