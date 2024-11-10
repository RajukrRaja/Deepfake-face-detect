const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller'); // Adjust the path if needed

// Define the route for image upload
router.post('/image', uploadController.uploadImage, uploadController.handleImageUpload);

module.exports = router;
