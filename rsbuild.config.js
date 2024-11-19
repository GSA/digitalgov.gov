const { defineConfig } = require('@rsbuild/core');

module.exports = defineConfig({
  source: {
    entry: {
      // JS entries only
      'stream-images': './themes/digital.gov/src/js/stream-images.js',
      'uswds': './node_modules/@uswds/uswds/dist/js/uswds.js',
      'uswds-init': './node_modules/@uswds/uswds/dist/js/uswds-init.js'
    },
    moduleType: 'commonjs'
  },
  output: {
    path: 'themes/digital.gov/static/dist',
    filename: {
      js: 'js/[name].js'
    },
    cleanDistPath: true
  },
  tools: {
    rspack: {
      optimization: {
        minimize: process.env.NODE_ENV === 'production'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            type: 'javascript/auto',
            parser: {
              commonjs: true
            }
          }
        ]
      }
    }
  },
  dev: {
    writeToDisk: true
  }
});
