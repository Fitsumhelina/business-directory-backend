const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Business Routes', function() {
  it('should get all businesses', async function() {
    const res = await request(app).get('/businesses');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a business by ID', async function() {
    const res = await request(app).get('/businesses/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('business_id');
  });

  it('should create a new business', async function() {
    const res = await request(app)
      .post('/businesses')
      .send({
        name: 'Business One',
        description: 'Description of Business One',
        category: 'Category1',
        subcategory: 'Subcategory1',
        address: '123 Main St',
        phone: '123-456-7890',
        email: 'business@example.com',
        website: 'https://example.com',
        hours: '9 AM - 5 PM'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('business_id');
  });

  it('should update a business by ID', async function() {
    const res = await request(app)
      .put('/businesses/1')
      .send({
        name: 'Business One Updated'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'Business One Updated');
  });

  it('should delete a business by ID', async function() {
    const res = await request(app).delete('/businesses/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
