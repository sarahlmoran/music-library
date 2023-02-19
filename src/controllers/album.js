const db = require('../db/index');

const createAlbum = async (req, res) => {
    const { name, year, artistID } = req.body
}

module.exports = { createAlbum };