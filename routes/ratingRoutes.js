// routes/ratingRoutes.js
const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

// Define routes for rating management
router.post('/ratings', ratingController.createRating);
router.get('/ratings/:businessId', ratingController.getRatingsByBusiness);
router.get('/ratings/average/:businessId', ratingController.getAverageRating);

module.exports = router;