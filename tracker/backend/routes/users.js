const router = require('express').Router();
let User = require('../models/user.model');

// needed routes: retrieve, add, update, delete


// retrieve user
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add user -- update for user login process
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('Welcome new user!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update user



// delete user




module.exports = router;