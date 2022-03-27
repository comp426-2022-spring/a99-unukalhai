const router = require('express').Router();
let Resources = require('../models/resources.model');

// needed routes: retrieve, add, update, delete


// retrieve resource
router.route('/').get((req, res) => {
    Resourse.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

    // by name
router.route('/:id').get((req, res) => {
    Resourse.findById(req.params.id)
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

    // by category


    // by ??


// add resource -- update with needed params 

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const website = req.body.website;
    const phoneNumber = req.body.phoneNumber;
    const location = req.body.location;
    const keywords = req.body.keywords;


    const newResource = new Resource({
    name,
    description,
    website,
    phoneNumber,
    location,
    keywords
    });

    newResource.save()
    .then(() => res.json('New resources added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update resource


// delete resource



module.exports = router;