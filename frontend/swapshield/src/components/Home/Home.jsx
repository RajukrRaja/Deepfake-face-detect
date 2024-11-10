import React from 'react';
import './Home.css';
import { FaShieldAlt, FaClock, FaUserAlt } from 'react-icons/fa';
import { FiMail, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import Register from '../Register/Register';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Deepfake Face Detect</h1>
        <p className="tagline">Detect and prevent deepfake images with cutting-edge technology.</p>
        <Link to="/register">
        <button className="cta-button">Sign Up Now</button>
      </Link>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Deepfake Face Detect</h2>
        <p>
          Our platform utilizes state-of-the-art algorithms to detect and prevent deepfake images in real-time. Built for both individuals and businesses, Deepfake Face Detect ensures
          privacy and security while maintaining ease of use.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <h3>Privacy & Security</h3>
            <p>Ensure the highest level of privacy and security for your images and data.</p>
          </div>
          <div className="feature-item">
            <FaClock className="feature-icon" />
            <h3>Real-Time Detection</h3>
            <p>Detect deepfakes in real-time with our fast and efficient algorithm.</p>
          </div>
          <div className="feature-item">
            <FaUserAlt className="feature-icon" />
            <h3>Easy to Use</h3>
            <p>Our platform is user-friendly, designed for both beginners and professionals.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Have questions or need support? Reach out to us through any of the following channels:</p>
        <div className="social-links">
          <FiMail className="social-icon" />
          <FiTwitter className="social-icon" />
          <FiFacebook className="social-icon" />
          <FiLinkedin className="social-icon" />
        </div>
      </section>

    </div>
  );
};

export default Home;
