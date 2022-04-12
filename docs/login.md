# LOGIN SET UP

**Use passport: Mongoose plugin that simplifies building username and password login with Passport**

## Part 00: Installing Libraries

- go to backend directory: `cd backend`
- run `npm install passport-local-mongoose validator isempty passport-jwt`

## Part 01: adding to model

- added to user.model.js
- add homepage, login form, and user profile

## Part 02: validation

- create register.js (validation flow)
  - checks name, email, and password when user registers
  - if email exists, send error message
  - hash password to allow for secure encryption
- create login.js (validation flow)
  - checks email and password during login

## Part 03: config

- passport.js

## Part 04: login route (login user and return JWT token from config)

- added to users.js
- check validation
- find user by email
- check password
- sign token
- export router

## Part 05: pulling routes into server.js file

- middleware
- database configuration
- connect to MongoDB
- passport middleware
- passport config
- routes

# Attempt 2

- npm install express body-parser cookie-parser bcrypt mongoose jsonwebtoken nodemon
