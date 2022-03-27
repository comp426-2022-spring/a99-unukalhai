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
router.route('/add').post((req, res) => {
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
    description,
    date
    });

    newExercise.save()
    .then(() => res.json('Interaction logged'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;