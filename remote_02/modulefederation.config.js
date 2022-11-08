const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote_02',
  exposes: {
    './Remote2': './src/Remote2',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    '@breakaway/shared-context': {
      import: '@breakaway/shared-context',
      requiredVersion: require('../shared-context/package.json').version,
    },
  },
};
