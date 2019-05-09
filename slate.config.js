/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  'webpack.extend': {
    resolve: {
      alias: {
        jquery: path.resolve('./node_modules/jquery'),
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    },
  },
  // Add Postcss plugins
  'webpack.postcss.plugins': (config, defaultValue) => {
    const plugins = [];
    // Process TailwindCSS styles
    plugins.push(
      tailwindcss('./src/styles/utilities/tailwind.js'),
    );
    // Purge unused CSS when running 'npm run build' for production
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        purgecss({ content: ['./src/**/*.liquid']}),
      // Add other plugins from webpack config including autoprefixer and cssnano (minifier)
        ...defaultValue
      );
    }
    return plugins;
  },
};
