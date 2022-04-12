const router = require("express").Router();
let User = require("../models/user.model");
const { auth } = require("../auth/auth");

// needed routes: retrieve, add, update, delete

router.get("/", (req, res) => {
  res.status(200).send(`Welcome to login , sign-up api`);
});

router.post("/register", function (req, res) {
  // taking a user
  const newuser = new User(req.body);

  if (newuser.password != newuser.password2)
    return res.status(400).json({ message: "password not match" });

  User.findOne({ email: newuser.email }, function (err, user) {
    if (user)
      return res.status(400).json({ auth: false, message: "email exits" });

    newuser.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false });
      }
      res.status(200).json({
        success: true,
        user: doc,
      });
    });
  });
});

// login user
router.post("/login", function (req, res) {
  let token = req.cookies.auth;
  User.findByToken(token, (err, user) => {
    if (err) return res(err);
    if (user)
      return res.status(400).json({
        error: true,
        message: "You are already logged in",
      });
    else {
      User.findOne({ username: req.body.username }, function (err, user) {
        if (!user)
          return res.json({
            isAuth: false,
            message: " Auth failed ,username not found",
          });

        user.comparepassword(req.body.password, (err, isMatch) => {
          if (!isMatch)
            return res.json({
              isAuth: false,
              message: "password doesn't match",
            });

          user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("auth", user.token).json({
              isAuth: true,
              id: user._id,
              username: user.username,
            });
          });
        });
      });
    }
  });
});

// Retrieves user information
router.get("/profile", auth, function (req, res) {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    username: req.user.username,
  });
});

//logout user
router.get("/logout", auth, function (req, res) {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).json(err);
    res.status(200).json({ message: "Successfully logged out!" });
  });
});

// // retrieve user

// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // add user -- update for user login process

// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;
//     const newUser = new User({username, password, email});
//     newUser.save()
//         .then(() => res.json('Welcome new user!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // update user
// router.route('/update/:id').post((req, res) => {
//     User.findById(req.params.id)
//     .then(user => {
//         user.username = req.body.username;
//         user.password = req.body.password;
//         user.email = req.body.email;
//         user.favorites = req.body.favorites;

//         user.save()
//         .then(() => res.json('User profile has been updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // delete user
// router.route('/:id').delete((req, res) => {
//     User.findByIdAndDelete(req.params.id)
//     .then(() => res.json('User has been deleted '))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
