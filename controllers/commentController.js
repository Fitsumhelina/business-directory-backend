// controllers/commentController.js
const commentService = require('../services/commentService');

async function createComment(req, res) {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating comment' });
  }
}

async function getComments(req, res) {
  try {
    const comments = await commentService.getCommentsByBusiness(req.params.businessId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await commentService.deleteComment(req.params.id);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting comment' });
  }
}

module.exports = {
  createComment,
  getComments,
  deleteComment
};