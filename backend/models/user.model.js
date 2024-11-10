const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  jobTitle: String,
  institution: String,
  avatarUrl: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  photos: [String],
  comments: [String],
});

module.exports = mongoose.model('User', userSchema);
