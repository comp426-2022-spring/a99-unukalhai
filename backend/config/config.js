const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.ATLAS_URI,
  },
  default: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.ATLAS_URI,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
