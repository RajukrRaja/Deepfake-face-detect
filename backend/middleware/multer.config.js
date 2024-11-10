const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Make sure the 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Multer upload middleware for image files
const upload = multer({ storage });

// Middleware for image upload
exports.uploadImage = upload.single('file'); // Expecting the field name to be 'file'

// Controller function to handle the image upload response
exports.handleImageUpload = (req, res) => {
  if (req.file) {
    res.status(200).json({
      message: 'Image file uploaded successfully',
      file: req.file,
    });
  } else {
    res.status(400).json({ message: 'Failed to upload image file' });
  }
};
