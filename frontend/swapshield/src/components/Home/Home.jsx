import React from 'react';
import './Home.css';
import { FaShieldAlt, FaClock, FaUserAlt } from 'react-icons/fa';
import { FiMail, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

      {/* Testimonials Section */}
      <section className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonial-list">
    <div className="testimonial-item">
      <img src="https://plus.unsplash.com/premium_photo-1671656349076-0a8ebbb706fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/50" alt="Customer Alex Johnson" className="customer-image" />
      <p>"This tool is revolutionary! It helped us secure our content and detect deepfakes seamlessly."</p>
      <h4>- Avinash Kumar</h4>
    </div>
    <div className="testimonial-item">
      <img src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/50" alt="Customer Priya Sharma" className="customer-image" />
      <p>"An intuitive platform that offers both efficiency and accuracy. Highly recommend it!"</p>
      <h4>- Raju kr Raja </h4>
    </div>
    <div className="testimonial-item">
      <img src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/50" alt="Customer Michael Lee" className="customer-image" />
      <p>"I was amazed at how quickly it detected manipulated images. Truly a game-changer!"</p>
      <h4>- Milan Raj</h4>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="footer">
  <div className="footer-container">
    <div className="footer-about">
      <h2>About Us</h2>
      <p>
        Deepfake Face Detect is dedicated to ensuring the privacy and security of your digital world by detecting and preventing deepfake images in real time. Built for individuals and businesses alike.
      </p>
    </div>
    <div className="footer-contact">
      <h2>Contact Us</h2>
      <p>Have questions or need support? Connect with us:</p>
      <div className="social-links">
        <a href="mailto:support@deepfakedetect.com" className="social-icon"><FiMail /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FiTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FiFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FiLinkedin /></a>
      </div>
    </div>
    <div className="footer-newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest updates, news, and tips.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Deepfake Face Detect. All Rights Reserved.</p>
  </div>
</section>

    </div>
  );
};

export default Home;
