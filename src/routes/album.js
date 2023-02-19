const express = require('express');
const albumController = require('../controllers/album');
const { createAlbum } = require('../controllers/album');

const router = express.Router();

router.post('/artists/:id/albums', albumController.createAlbum)

module.exports = router;