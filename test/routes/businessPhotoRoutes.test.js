const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Business Photo Routes', function() {
  it('should get all business photos', async function() {
    const res = await request(app).get('/business-photos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a business photo by ID', async function() {
    const res = await request(app).get('/business-photos/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('photo_id');
  });

  it('should upload a new business photo', async function() {
    const res = await request(app)
      .post('/business-photos')
      .send({
        businessId: 1,
        photoUrl: 'https://example.com/photo.jpg'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('photo_id');
  });

  it('should update a business photo by ID', async function() {
    const res = await request(app)
      .put('/business-photos/1')
      .send({
        photoUrl: 'https://example.com/updated-photo.jpg'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('photoUrl', 'https://example.com/updated-photo.jpg');
  });

  it('should delete a business photo by ID', async function() {
    const res = await request(app).delete('/business-photos/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
