const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.ATLAS_URI,
  },
  default: {
    SECRET: "mysecretkey",
    DATABASE:
      "mongodb+srv://unukalhai:unukalhai@cluster0.g0vy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
