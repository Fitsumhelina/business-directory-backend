// services/commentService.js
const Comment = require('../models/Comment');

async function createComment(data) {
  try {
    const comment = await Comment.forge(data).save();
    return comment;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
}

async function getCommentsByBusiness(businessId) {
  try {
    const comments = await Comment.where({ business_id: businessId }).fetchAll();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
}

async function deleteComment(id) {
  try {
    const comment = await Comment.where({ comment_id: id }).fetch({ require: true });
    await comment.destroy();
    return comment;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
}

module.exports = {
  createComment,
  getCommentsByBusiness,
  deleteComment
};
