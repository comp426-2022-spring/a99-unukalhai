const router = require("express").Router();
let User = require("../models/user.model");
const { auth } = require("../auth/auth");
const { update } = require("../models/user.model");
const { route } = require("express/lib/application");

// needed routes: retrieve, add, update, delete

router.get("/", (req, res) => {
  res.status(200).send(`Welcome to login , sign-up api`);
});

router.post("/signup", function (req, res) {
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
          return res.status(400).json({
            isAuth: false,
            message: "Username not found",
          });

        user.comparepassword(req.body.password, (err, isMatch) => {
          if (!isMatch)
            return res.status(400).json({
              isAuth: false,
              message: "Username or/and Password Is Incorrect",
            });

          user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("auth", user.token).json({
              isAuth: true,
              id: user._id,
              username: user.username,
              email: user.email,
              name: user.name,
              password: user.password,
            });
          });
        });
      });
    }
  });
});

// Retrieves user information
// router.get("/profile", auth, function (req, res) {
//   res.status(200).json({
//     isAuth: true,
//     id: req.user._id,
//     name: req.user.name,
//     email: req.user.email,
//     username: req.user.username,
//   });
// });

// Update User Profile Information - Able to Update username password or email
router.post("/update-userInfo", async (req, res) => {
  // Find user in database
  console.log("enter api endpoint");
  console.log("Request Body", req.body);
  const user = await User.findOne({ _id: req.body._id });
  console.log("user", user);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      username: updatedUser.username,
      email: updatedUser.email,
      password: updatedUser.password,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//DELETE USER ACCOUNT
router.post("/delete-user", async (req, res) => {
  try {
    console.log("Body", req.body);
    await User.findOneAndDelete({ _id: req.body._id });
    res.status(200).json({ message: "User Deleted Successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message || "Error while deleting using" });
  }
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
