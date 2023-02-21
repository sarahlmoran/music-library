const db = require('../db/index');

const createAlbum = async (req, res) => {
    const { name, year, artistId } = req.body

    try {
        const {
            rows: [albumData],
        } = await db.query('INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *', [name, year, artistId]);
        res.status(200).json(albumData);
        console.log(albumData);
        console.log('xxxxxxxxxx');
    } catch(err) {
        res.status(500).json(err.message);
    }
}

module.exports = { createAlbum };