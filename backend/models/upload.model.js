const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  fileType: { type: String, required: true },
  size: { type: Number, required: true },
  metadata: { type: Object }, // Optional: You can store metadata like duration, width, height, etc.
  uploadedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
