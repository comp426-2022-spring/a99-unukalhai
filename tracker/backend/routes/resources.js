const router = require('express').Router();
let Resources = require('../models/resources.model');

// needed routes: retrieve, add, update, delete


// retrieve resource

router.route('/').get((req, res) => {
    Resourses.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Resources.findById(req.params.id)
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});



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

router.route('/update/:id').post((req, res) => {
    Resources.findById(req.params.id)
    .then(resources => {
        resources.name = req.body.name;
        resources.description = req.body.description;
        resources.website = req.body.website;
        resources.phoneNumber = req.body.phoneNumber;
        resources.location = req.body.location;
        resources.keywords = req.body.keywords;

        resources.save()
        .then(() => res.json('Resources has been updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


// delete resource

router.route('/:id').delete((req, res) => {
    Resources.findByIdAndDelete(req.params.id)
    .then(() => res.json('Resources has been deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;