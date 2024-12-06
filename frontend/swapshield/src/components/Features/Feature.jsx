import React from "react";
import "./Feature.css";

const Features = () => {
  const featureList = [
    {
      title: "Job Listings with Filters",
      description:
        "Explore thousands of jobs with advanced filtering options to find the perfect fit for you.",
      icon: "📝",
    },
    {
      title: "User Authentication",
      description:
        "Secure login for both job seekers and employers to access tailored features.",
      icon: "🔒",
    },
    {
      title: "Resume Builder",
      description:
        "Create or upload your professional resume to impress potential employers.",
      icon: "📄",
    },
    
  ];

  return (
    <div className="features-container">
      <h2 className="features-title">Top Features</h2>
      <div className="features-grid">
        {featureList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
