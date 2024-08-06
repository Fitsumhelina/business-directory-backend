const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Auth Routes', function() {
  it('should register a new user', async function() {
    const res = await request(app)
      .post('/auth/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('user_id');
  });

  it('should login a user', async function() {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'john@example.com',
        password: 'password123'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('should get the current user', async function() {
    // Replace with a valid token
    const token = 'your_jwt_token';
    const res = await request(app)
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name');
  });
});
