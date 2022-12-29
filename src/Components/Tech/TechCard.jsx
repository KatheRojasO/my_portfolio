import React from "react";
import "../Tech/TechCard.css";

export default function TechCard({ techName, techIcon }) {
  const cardIcon = require(`../../assets/icons/${techIcon}`);

  return (
    <div className="tech-card">
      <div className="tech-card-container">
        <div className="tech-img">
          <img src={cardIcon} alt="not found" />
        </div>
        <div className="tech-name">
          <p>{techName}</p>
        </div>
      </div>
    </div>
  );
}
