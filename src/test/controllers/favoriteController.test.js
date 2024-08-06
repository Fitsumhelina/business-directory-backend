const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Favorite Controller', function() {
  it('should add a business to favorites', async function() {
    const res = await request(app)
      .post('/favorites')
      .send({
        userId: 1,
        businessId: 1
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('favorite_id');
  });

  it('should get a favorite by ID', async function() {
    const res = await request(app).get('/favorites/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('businessId');
  });

  it('should delete a favorite', async function() {
    const res = await request(app).delete('/favorites/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
