const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

/*describe('Create album', () => {
    let artist;
    beforeEach(async () => {
        const { rows } = await db.query(
            'INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *',
            ['Frank Ocean', 'R&B']
        );

        artist = rows[0];
    });*/



describe('create album', () => {
    let artist;
    beforeEach(async () => {
        const { rows } = await db.query(
            'INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *',
            ['Frank Ocean', 'R&B']
        );

        artist = rows[0];
    });
    describe('/albums', () => {
        describe('POST', () => {
            it('creates a new album in the database', async () => {
                const { status,body } = await request(app).post(`/artists/${artist.id}/albums`).send({
                    name: 'Channel Orange',
                    year: 2012,
                    artistId: `${artist.id}`,
                });

                expect(status).to.equal(200);
                expect(body.name).to.equal('Channel Orange');
                expect(body.year).to.equal(2012);
                expect(body.artistId).to.equal(1);

                const {
                    rows: [albumData],
                } = await db.query(`SELECT * FROM Artists WHERE id = ${body.id}`);
                expect(albumData.name).to.equal('Channel Orange');
                expect(albumData.year).to.equal(2012);
                expect(albumData.artistId).to.equal(1);
            });
        });
    });
});
