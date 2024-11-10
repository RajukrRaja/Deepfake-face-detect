const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/user.model');

// 1. Register User
exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
  }

  const { fullName, email, password, location, jobTitle, institution, avatarUrl } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists. Please login.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      location,
      jobTitle,
      institution,
      avatarUrl,
      friends: [],
      photos: [],
      comments: [],
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({
      message: 'Registration successful',
      userId: user._id,
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        location: user.location,
        jobTitle: user.jobTitle,
        institution: user.institution,
        avatarUrl: user.avatarUrl,
        friends: user.friends,
        photos: user.photos,
        comments: user.comments,
      },
    });
  } catch (error) {
    console.error('Error in user registration:', error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retrieve user profile (excluding password) after successful login
    const userProfile = await User.findById(user._id).select('-password');

    return res.status(200).json({
      message: 'Login successful',
      userId: user._id,
      token,
      user: userProfile
    });
  } catch (error) {
    console.error('Error in user login:', error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// 4. Edit Profile
exports.editUserProfile = async (req, res) => {
  const { fullName, location, jobTitle, institution, avatarUrl } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { fullName, location, jobTitle, institution, avatarUrl },
      { new: true }
    ).select('-password');
    return res.status(200).json({ message: 'Profile updated', user });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// 5. Change Password
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.userId);
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Old password is incorrect.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// 6. Delete Account
exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.userId);
    return res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// 7. Add Friend
exports.addFriend = async (req, res) => {
  const { friendId } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend already added.' });
    }
    user.friends.push(friendId);
    await user.save();
    return res.status(200).json({ message: 'Friend added successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// 8. Remove Friend
exports.removeFriend = async (req, res) => {
  const { friendId } = req.body;
  try {
    const user = await User.findById(req.userId);
    user.friends = user.friends.filter((id) => id !== friendId);
    await user.save();
    return res.status(200).json({ message: 'Friend removed successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
