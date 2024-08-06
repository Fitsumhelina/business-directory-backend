const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Comment Routes', function() {
  it('should get all comments', async function() {
    const res = await request(app).get('/comments');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a comment by ID', async function() {
    const res = await request(app).get('/comments/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('comment_id');
  });

  it('should create a new comment', async function() {
    const res = await request(app)
      .post('/comments')
      .send({
        userId: 1,
        businessId: 1,
        comment: 'Great business!'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('comment_id');
  });

  it('should update a comment by ID', async function() {
    const res = await request(app)
      .put('/comments/1')
      .send({
        comment: 'Updated comment'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('comment', 'Updated comment');
  });

  it('should delete a comment by ID', async function() {
    const res = await request(app).delete('/comments/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.empty;
  });
});
