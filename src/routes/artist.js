const express = require('express');
const artistController = require('../controllers/artist');
const { createArtist, readArtist, getArtistByID, updateArtist } = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist);

router.get('/:id', artistController.getArtistByID);

router.put('/:id', artistController.updateArtist);

module.exports = router;
