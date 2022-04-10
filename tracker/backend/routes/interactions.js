const router = require('express').Router();
const Interaction = require('../models/interactions.model');
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

    const newInteraction = new Interaction({
    description,
    date
    });

    newInteraction.save()
    .then(() => res.json('Interaction logged'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;