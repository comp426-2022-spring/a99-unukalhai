const User = require("../models/user.model");

let auth = (req, res, next) => {
  // get avaliable token
  let token = req.cookies.auth;
  // checks for login status
  User.findByToken(token, (err, user) => {
    console.log("AUTH", user);
    if (err) throw err;
    if (!user)
      return res.json({
        error: true,
        user: user,
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
