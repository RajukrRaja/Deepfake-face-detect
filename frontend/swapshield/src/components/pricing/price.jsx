import React from "react";
import './price.css'


const Price = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$19.99/month",
      features: ["Up to 500 detections", "Basic AI accuracy", "Email support"],
    },
    {
      title: "Pro",
      price: "$49.99/month",
      features: [
        "Up to 5000 detections",
        "Advanced AI accuracy",
        "Priority email support",
        "Real-time results",
      ],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: [
        "Unlimited detections",
        "Custom AI models",
        "Dedicated account manager",
        "API integration",
        "24/7 support",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan</h1>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="choose-plan-btn">
              {plan.title === "Enterprise" ? "Contact Us" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;