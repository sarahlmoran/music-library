const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('Update album', () => {
  let artists;
  let albums;
  let album;
  beforeEach(async () => {
    let responses;
    responses = await Promise.all([
      db.query(
        'INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *',
        ['Frank Ocean', 'R&B']
      ),
    ]);
    artists = responses.map(({ rows }) => rows[0]);
    const artistid = artists[0].id;

    responses = await Promise.all([
      db.query(
        'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
        ['Channel Orange', '2012', artistid]
      ),
      db.query(
        'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
        ['Blond', '2016', artistid]
      ),
      db.query(
        'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
        ['Moon River', '2018', artistid]
      ),
      db.query(
        'INSERT INTO Albums(name, year, artistId) VALUES ( $1, $2, $3) RETURNING *',
        ['Novacane', '2011', artistid]
      ),
    ]);
    albums = responses.map(({ rows }) => rows[0]);
    album = albums[0];
  });

  describe('PATCH /albums/{id}', () => {
    it('updates the album and returns the updated record', async () => {
      const { status, body } = await request(app)
        .patch(`/albums/${album.id}`)
        .send({
          name: 'something different',
          year: 2012,
          artistid: album.artistid,
        });
      expect(status).to.equal(200);

      expect(body).to.deep.equal({
        id: album.id,
        name: 'something different',
        year: 2012,
        artistid: album.artistid,
      });
    });

    it('returns a 404 if the album does not exist', async () => {
      const { status, body } = await request(app)
        .patch('/albums/999999999')
        .send({
          name: 'something different',
          year: 2012,
          artistid: album.artistsid,
        });
      expect(status).to.equal(404);
      expect(body.message).to.equal('album 999999999 does not exist');
    });
  });
});
