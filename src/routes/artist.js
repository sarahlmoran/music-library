const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

/**
 * @swagger
 * /artists:
 *  post:
 *      tags: 
 *          - artists
 *      description: Create new artist
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: artist
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - name
 *                - genre
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *      responses:
 *          201:
 *              description: Artist created
 */

router.post('/', artistController.createArtist);

/**
 * @swagger
 * /artists:
 *  get:
 *      tags: 
 *          - artists
 *      description: returns all artist records in the database.
 *      responses:
 *          200:
 *              description: All artists returned 
 */

router.get('/', artistController.readArtist);

/**
 * @swagger
 * /artists/{id}:
 *  get:
 *      tags: 
 *          - artists
 *      description: get artist by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of artist
 *      responses:
 *          200:
 *              description: Artist with specified id
 *          404:
 *              description: Artist ID does not exist
 */

router.get('/:id', artistController.getArtistByID);

/**
 * @swagger
 * /artists/{id}:
 *  put:
 *      tags:
 *          - artists
 *      description: Update an artists name, genre or both using their ID
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *          required: true
 *          description: ID of the artist to update
 *        - in: body
 *          name: artist
 *          description: The artist data to be updated
 *          schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *          required:
 *            - name
 *            - genre
 *          example:
 *            name: Britney Spears
 *            genre: pop
 *      responses:
 *          200:
 *              description: The updated artist
 *          404:
 *              description: The artist could not be found
 */

router.put('/:id', artistController.updateArtist);
/**
 * @swagger
 * /artists/{id}:
 *  patch:
 *      tags:
 *          - artists
 *      description: Update an artists name, genre or both using their ID
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *          required: true
 *          description: ID of the artist to update
 *        - in: body
 *          name: artist
 *          description: The artist data to be updated
 *          schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *          required:
 *            - name
 *          example:
 *            name: Britney Spears
 *            genre: pop
 *      responses:
 *          200:
 *              description: The updated artist
 *          404:
 *              description: The artist could not be found
 */
router.patch('/:id', artistController.updateArtistPatch);

/**
 * @swagger
 * /artists/{id}:
 *  delete:
 *      tags: 
 *          - artists
 *      description: Delete artist
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of artist to delete
 *      responses:
 *          200:
 *              description: Artist that was deleted
 *          404:
 *              description: Artist ID does not exist
 */

router.delete('/:id', artistController.deleteArtist);

module.exports = router;
