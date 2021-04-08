const express = require('express');
const router = express.Router();
const api = require('./api');


// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/api', api);

module.exports = router;