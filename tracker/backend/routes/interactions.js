const router = require('express').Router();
let Interactions = require('../models/interactions.model');

// needed routes: retrieve, add


// retrieve interactions
router.route('/').get((req, res) => {
    Interaction.find()
        .then(interactions => res.json(interactions))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add interaction



module.exports = router;