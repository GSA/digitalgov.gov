const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'inline-source-map',
  entry: {
    'stream-images': './themes/digital.gov/src/js/stream-images.js',
    'uswds': './node_modules/@uswds/uswds/dist/js/uswds.js',
    'uswds-init': './node_modules/@uswds/uswds/dist/js/uswds-init.js'
  },
  output: {
    path: path.resolve(__dirname, 'themes/digital.gov/static/dist/js'),
    filename: '[name].js',
    clean: true,
    environment: {
      module: false
    }
  },
  resolve: { 
    extensionAlias: {
      '.js': ['.js', '.ts']
    }
  },
  optimization: {
    minimize: isProduction
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
  },
  target: 'browserslist'
};

module.exports = config;
