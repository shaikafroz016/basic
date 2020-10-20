const router = require('express').Router();
let Location = require('../models/locations_modal');

router.route('/').get((req, res) => {
  Location.find()
    .then(locations => res.json(locations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const city = req.body.city;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newLocation = new Location({
    city,
    description,
    duration,
    date,
  });

  newLocation.save()
  .then(() => res.json('Location added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Location.findById(req.params.id)
    .then(location => res.json(location))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Location.findByIdAndDelete(req.params.id)
    .then(() => res.json('Location deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Location.findById(req.params.id)
    .then(location => {
      location.city = req.body.city;
      location.description = req.body.description;
      location.duration = Number(req.body.duration);
      location.date = Date.parse(req.body.date);

      location.save()
        .then(() => res.json('Location updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;