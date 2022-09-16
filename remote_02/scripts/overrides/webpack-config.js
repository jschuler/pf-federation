const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

// const isPatternFlyStyles = (stylesheet) =>
//   stylesheet.includes('@patternfly/react-styles/css/') || stylesheet.includes('@patternfly/react-core/');

const override = (config) => {
  config.plugins.push(new ModuleFederationPlugin(require('../../modulefederation.config.js')));

  config.output.publicPath = 'auto';

  // config.module.rules.push({
  //   test: /\.css$/,
  //   include: isPatternFlyStyles,
  //   use: ['null-loader'],
  // });

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
