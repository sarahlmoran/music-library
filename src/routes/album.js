const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

/**
 * @swagger
 * /artists/{artistID}/albums/:
 *  post:
 *      tags: 
 *          - albums
 *      description: Create new album
 *      parameters:
 *        - in: path
 *          name: artistID
 *          schema:
 *              type: number
 *          required: true
 *          description: ID of the artist the album belongs to
 *        - in: body
 *          name: album
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - name
 *                - year
 *              properties:
 *                  name:
 *                      type: string
 *                  year:
 *                      type: number
 *      responses:
 *          200:
 *              description: Album created
 */

router.post('/:id/albums/', albumController.createAlbum);

/**
 * @swagger
 * /albums:
 *  get:
 *      tags: 
 *          - albums
 *      description: returns all album records in the database.
 *      responses:
 *          200:
 *              description: All albums returned 
 */

router.get('/', albumController.readAlbum);

/**
 * @swagger
 * /albums/{albumID}:
 *  get:
 *      tags: 
 *          - albums
 *      description: get album by id
 *      parameters:
 *        - in: path
 *          name: albumID
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of album
 *      responses:
 *          200:
 *              description: All albums returned 
 *          404:
 *              description: Album ID does not exist
 */

router.get('/:id', albumController.getAlbumById);

/**
 * @swagger
 * /albums/{albumID}:
 *  patch:
 *      tags:
 *          - albums
 *      description: Update an albums name, year or artistid using their ID
 *      parameters:
 *        - in: path
 *          name: albumID
 *          schema:
 *              type: integer
 *          required: true
 *          description: ID of the album to update
 *        - in: body
 *          name: album
 *          description: The album data to be updated
 *          schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  year:
 *                      type: number
*                  artistId:
 *                      type: number 
 *          required:
 *            - name
 *            - year
 *            - artistId
 *      responses:
 *          200:
 *              description: The updated album
 *          404:
 *              description: The album could not be found
 */

router.patch('/:id', albumController.updateAlbum);

/**
 * @swagger
 * /albums/{albumID}:
 *  delete:
 *      tags: 
 *          - albums
 *      description: Delete album
 *      parameters:
 *        - in: path
 *          name: albumID
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of album to delete
 *      responses:
 *          200:
 *              description: Album that was deleted
 *          404:
 *              description: Album ID does not exist
 */

router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
