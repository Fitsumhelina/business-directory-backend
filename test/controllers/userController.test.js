const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('User Controller', function() {
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

  it('should get a user by ID', async function() {
    const res = await request(app).get('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name');
  });

  it('should update a user', async function() {
    const res = await request(app)
      .put('/users/1')
      .send({ name: 'Jane Doe' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'Jane Doe');
  });

  it('should delete a user', async function() {
    const res = await request(app).delete('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
