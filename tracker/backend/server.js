const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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

// ROUTES GO HERE

// Starts listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
