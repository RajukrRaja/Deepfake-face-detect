const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../middleware/isauthenticate');

const router = express.Router();

// Register route
router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], userController.registerUser);

// Login route
router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], userController.loginUser);

// Profile routes
router.get('/profile', authenticateToken, userController.getUserProfile);
router.put('/profile', authenticateToken, userController.editUserProfile);

// Additional routes
router.put('/change-password', authenticateToken, userController.changePassword);
router.delete('/delete-account', authenticateToken, userController.deleteAccount);
router.post('/add-friend', authenticateToken, userController.addFriend);
router.delete('/remove-friend', authenticateToken, userController.removeFriend);

module.exports = router;
