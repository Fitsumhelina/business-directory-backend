// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes for authentication
router.post('/register', authController.registerUser);
router.post('/login', authController.authenticateUser);

module.exports = router;