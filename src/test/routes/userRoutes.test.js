const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('User Routes', function() {
  it('should get all users', async function() {
    const res = await request(app).get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a user by ID', async function() {
    const res = await request(app).get('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('user_id');
  });

  it('should create a new user', async function() {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('user_id');
  });

  it('should update a user by ID', async function() {
    const res = await request(app)
      .put('/users/1')
      .send({
        name: 'John Updated'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'John Updated');
  });

  it('should delete a user by ID', async function() {
    const res = await request(app).delete('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
