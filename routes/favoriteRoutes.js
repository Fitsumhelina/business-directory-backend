// routes/favoriteRoutes.js
const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

// Define routes for user favorites
router.post('/favorites', favoriteController.addFavorite);
router.get('/favorites/:userId', favoriteController.getFavoritesByUser);
router.delete('/favorites/:userId/:businessId', favoriteController.removeFavorite);

module.exports = router;