import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted solution for Deepfake Face Detection.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At <strong>DeepFake Detector</strong>, our mission is to create a
            safer digital environment by providing cutting-edge tools for
            detecting and mitigating the effects of deepfake technologies. We
            believe in promoting transparency and trust in the digital world.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Advanced AI Models:</strong> Leveraging state-of-the-art
              machine learning algorithms to detect even the most sophisticated
              deepfakes.
            </li>
            <li>
              <strong>Scalability:</strong> Designed to support businesses of
              all sizes with custom and enterprise solutions.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Easy-to-use tools for
              individuals and professionals alike.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a team of passionate AI enthusiasts, software engineers, and
            ethical tech advocates dedicated to combating digital manipulation.
            Our commitment to excellence and innovation drives everything we
            do.
          </p>
        </div>

        <div className="about-footer">
          <h2>Join Us in Creating a Safer Digital World</h2>
          <p>
            Whether you're an individual, a business, or an organization, our
            tools are designed to empower you to tackle the challenges of
            deepfake technology. Let's work together to promote authenticity in
            the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;