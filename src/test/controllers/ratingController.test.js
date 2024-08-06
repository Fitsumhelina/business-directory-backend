const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Rating Controller', function() {
  it('should create a new rating', async function() {
    const res = await request(app)
      .post('/ratings')
      .send({
        userId: 1,
        businessId: 1,
        rating: 5
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('rating_id');
  });

  it('should get a rating by ID', async function() {
    const res = await request(app).get('/ratings/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('rating');
  });

  it('should update a rating', async function() {
    const res = await request(app)
      .put('/ratings/1')
      .send({ rating: 4 });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('rating', 4);
  });

  it('should delete a rating', async function() {
    const res = await request(app).delete('/ratings/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
