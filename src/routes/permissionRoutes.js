// routes/permissionRoutes.js
const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

// Define routes for permission management
router.post('/permissions', permissionController.createPermission);
router.get('/permissions/:roleId', permissionController.getPermissionsByRole);

module.exports = router;
