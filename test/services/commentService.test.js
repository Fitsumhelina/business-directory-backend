const { expect } = require('chai');
const sinon = require('sinon');
const CommentService = require('../../services/commentService');
const Comment = require('../../models/Comment');

describe('Comment Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all comments for a business', async function() {
    const mockComments = [{ comment_id: 1, business_id: 1, user_id: 1, text: 'Great!' }];
    sinon.stub(Comment, 'findAll').resolves(mockComments);

    const comments = await CommentService.getAllCommentsForBusiness(1);
    expect(comments).to.be.an('array');
    expect(comments[0]).to.have.property('comment_id');
  });

  it('should add a comment', async function() {
    const newComment = { business_id: 1, user_id: 1, text: 'Great!' };
    sinon.stub(Comment, 'create').resolves(newComment);

    const comment = await CommentService.addComment(newComment);
    expect(comment).to.have.property('text', 'Great!');
  });

  it('should update a comment by ID', async function() {
    const updatedComment = { comment_id: 1, text: 'Updated Comment' };
    sinon.stub(Comment, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(Comment, 'findByPk').resolves(updatedComment);

    const comment = await CommentService.updateComment(1, { text: 'Updated Comment' });
    expect(comment).to.have.property('text', 'Updated Comment');
  });

  it('should delete a comment by ID', async function() {
    sinon.stub(Comment, 'destroy').resolves(1); // Number of affected rows

    const result = await CommentService.deleteComment(1);
    expect(result).to.equal(1);
  });
});
