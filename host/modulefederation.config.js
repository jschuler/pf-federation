const { dependencies } = require('./package.json');

// host url: https://pf-css-modules-host.surge.sh
module.exports = {
  name: 'host',
  remotes: {
    // remote_01: 'remote_01@http://localhost:3002/remoteEntry.js',
    remote_01: 'remote_01@https://pf-css-modules-1.surge.sh/remoteEntry.js',
    // remote_02: 'remote_02@http://localhost:3003/remoteEntry.js',
    remote_02: 'remote_02@https://pf-css-modules-2.surge.sh/remoteEntry.js',
  },
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
  },
};
