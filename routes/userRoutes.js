const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user management
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;