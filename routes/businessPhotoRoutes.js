// routes/businessPhotoRoutes.js
const express = require('express');
const router = express.Router();
const businessPhotoController = require('../controllers/businessPhotoController');

// Define routes for business photo management
router.post('/business-photos', businessPhotoController.addBusinessPhoto);
router.get('/business-photos/:businessId', businessPhotoController.getBusinessPhotos);
router.delete('/business-photos/:id', businessPhotoController.deleteBusinessPhoto);

module.exports = router;
