const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('Update album', () => {
    let artists;
    let albums;
    beforeEach(async () => {
      let responses;
      responses = await Promise.all([
        db.query(
          'INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *',
          ['Frank Ocean', 'R&B']
        ),
      ]);
      artists = responses.map(({ rows }) => rows[0]);
      const artistId = artists[0].id;
  
      responses = await Promise.all([
        db.query(
            'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
                ['Channel Orange', '2012', artistId]
        ),
        db.query(
            'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
            ['Blond', '2016', artistId]
        ),
        db.query(
            'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
            ['Moon River', '2018', artistId]
        ),
        db.query(
            'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
            ['Novacane', '2011', artistId]
        ),
      ]);
      albums = responses.map(({ rows }) => rows[0]);
    });
  
    describe('PATCH /albums/{id}', () => {
      it('updates the album and returns the updated record', async () => {
        const { status, body } = await request(app)
          .patch(`/albums/${albums.id}`)
          .send({ name: 'something different', year: 2012, artistId: 1 });
        expect(status).to.equal(200);

        expect(body).to.deep.equal({
            id: albums.id,
            name: 'something different',
            year: 2012,
            artistId: 1,
        });
      });
  
      it('returns a 404 if the album does not exist', async () => {
        const { status, body } = await request(app)
          .patch('/albums/999999999')
          .send({name:'something different', year: 2012, artistId: 1 });
        expect(status).to.equal(404);
        expect(body.message).to.equal('album 999999999 does not exist');
      });
    });
  });


