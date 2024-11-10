const fs = require('fs');
const multer = require('multer');
const Media = require('../models/upload.model'); // Ensure correct path to your model

// Ensure 'uploads' directory exists or create it
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Create a unique filename
  }
});

const upload = multer({ storage }).single('file');

// Middleware to handle file upload
exports.uploadImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return res.status(500).json({ message: 'Multer error: Failed to upload image' });
    } else if (err) {
      console.error('Unknown error uploading file:', err);
      return res.status(500).json({ message: 'Unknown error: Failed to upload image' });
    }
    next();
  });
};

// Controller function to handle database save
exports.handleImageUpload = async (req, res) => {
  // Ensure req.file exists before accessing its properties
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const { originalname, mimetype, size, path } = req.file;

    // Create a new media document with file details
    const media = new Media({
      fileName: originalname,
      filePath: path,
      fileType: mimetype,
      size: size,
    });

    // Save document to MongoDB
    await media.save();
    res.status(201).json({ message: 'File uploaded and saved to database successfully' });
  } catch (err) {
    console.error('Error saving file to database:', err);
    res.status(500).json({ message: 'Failed to save file to database' });
  }
};
