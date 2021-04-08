const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'thk',
        mongodb_password: 'thkisthebest',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'thk-site-dev',
      },
    };
  }
  

  return {
    env: {
      mongodb_username: 'thk',
      mongodb_password: 'thkisthebest',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'thk-site',
    },
  };
};
