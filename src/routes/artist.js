const express = require('express');
const artistController = require('../controllers/artist');
const { createArtist, readArtist } = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist)

module.exports = router;
