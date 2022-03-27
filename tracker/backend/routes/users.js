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
    const password = req.body.password;
    const email = req.body.email;
    const newUser = new User({username, password, email});
    newUser.save()
        .then(() => res.json('Welcome new user!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update user
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        user.favorites = req.body.favorites;

        user.save()
        .then(() => res.json('User profile has been updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


// delete user
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User has been deleted '))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;