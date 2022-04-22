const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./config/config").get(process.env.NODE_ENV);
const router = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(cookieParser());

// Establishes connection to database
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) console.log(err);
    console.log("MongoDB database connection established successfully");
  }
);

// ROUTES
app.use(router);

// Starts listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
