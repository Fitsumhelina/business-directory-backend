const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Role Routes', function() {
  it('should get all roles', async function() {
    const res = await request(app).get('/roles');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a role by ID', async function() {
    const res = await request(app).get('/roles/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('role_id');
  });

  it('should create a new role', async function() {
    const res = await request(app)
      .post('/roles')
      .send({
        name: 'Admin'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('role_id');
  });

  it('should update a role by ID', async function() {
    const res = await request(app)
      .put('/roles/1')
      .send({
        name: 'Admin Updated'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'Admin Updated');
  });

  it('should delete a role by ID', async function() {
    const res = await request(app).delete('/roles/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
