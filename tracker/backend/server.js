const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();
app.use(cors());
app.use(express.json());

// ATLAS_URI environment variable (stored in .env file)
const uri = process.env.ATLAS_URI;
// Connects to mongoDB
mongoose.connect(uri);

// How we establish database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// intialize passport
app.use(passport.initialize());
app.use(passport.session());
//current User
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
//MIDDLEWARE
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
// ROUTES GO HERE

// Starts listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
