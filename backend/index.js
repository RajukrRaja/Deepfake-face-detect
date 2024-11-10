require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet'); // For security headers
const userRoutes = require('./routes/user.route'); // Import user routes
const uploadRoutes = require('./routes/upload.router'); // Import file upload routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(helmet()); // Set security headers

// Use routes
app.use('/api/users', userRoutes); // User endpoints
app.use('/upload', uploadRoutes); // File upload endpoints

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
