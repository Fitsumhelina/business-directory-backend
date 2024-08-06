// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes for comment management
router.post('/comments', commentController.createComment);
router.get('/comments/:businessId', commentController.getCommentsByBusiness);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
