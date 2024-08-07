const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Rating Routes', function() {
  it('should get all ratings', async function() {
    const res = await request(app).get('/ratings');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a rating by ID', async function() {
    const res = await request(app).get('/ratings/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('rating_id');
  });

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

  it('should update a rating by ID', async function() {
    const res = await request(app)
      .put('/ratings/1')
      .send({
        rating: 4
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('rating', 4);
  });

  it('should delete a rating by ID', async function() {
    const res = await request(app).delete('/ratings/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
