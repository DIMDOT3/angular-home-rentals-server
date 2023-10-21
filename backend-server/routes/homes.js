const express = require('express');
const router = express.Router();
const locations = require('../data/locations.json');

router.get('/', (req, res) => {
    res.json(locations);
});

router.get('/:id', (req, res) => {
    const location = locations.filter(location => location.id === Number(req.params.id));
    res.json(location[0]);
});

module.exports = router;