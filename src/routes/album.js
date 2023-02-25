const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

router.post('/:id/albums/', albumController.createAlbum);

router.get('/', albumController.readAlbum);

router.get('/:id', albumController.getAlbumById);

router.patch('/:id', albumController.updateAlbum);

router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
