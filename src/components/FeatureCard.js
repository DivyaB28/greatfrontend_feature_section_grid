import React from "react";
import "./featureCard.css";

const FeatureCard = ({ Icon, title = "", description = "" }) => {
  return (
    <li>
      <div className="icon_wrapper" aria-description="icon">
        <Icon className="icon" />
      </div>
      <p className="feature_title">{title}</p>
      <p className="feature_description">{description}</p>
    </li>
  );
};

export default FeatureCard;
