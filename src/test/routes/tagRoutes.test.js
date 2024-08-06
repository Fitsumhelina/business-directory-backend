const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Tag Routes', function() {
  it('should get all tags', async function() {
    const res = await request(app).get('/tags');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a tag by ID', async function() {
    const res = await request(app).get('/tags/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('tag_id');
  });

  it('should create a new tag', async function() {
    const res = await request(app)
      .post('/tags')
      .send({
        name: 'Tag1'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('tag_id');
  });

  it('should update a tag by ID', async function() {
    const res = await request(app)
      .put('/tags/1')
      .send({
        name: 'Tag1 Updated'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'Tag1 Updated');
  });

  it('should delete a tag by ID', async function() {
    const res = await request(app).delete('/tags/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
