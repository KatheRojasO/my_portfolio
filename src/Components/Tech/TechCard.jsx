import React from "react";

export default function TechCard({ techName, techIcon }) {
  const cardIcon = require(`../../assets/icons/${techIcon}`);

  return (
    <div className="tech-card">
      <div className="tech-card-container">
        <img className="tech-img" src={cardIcon} alt="tech-icon" />
        <p className="tech-name">{techName}</p>
      </div>
    </div>
  );
}
