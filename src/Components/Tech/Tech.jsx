import React from "react";
import techData from "../../techData.json";
import TechCard from "./TechCard";
import "../Tech/Tech.css";

export default function Tech() {

  const items = techData.map((item) => {
    return <TechCard techName={item.name} techIcon={item.image} />;
  });

  return (
    <div id="tech">
      <div className="tech-info">
        <h2>Technologies I've used</h2>
        <p>To develop the different apps and websites, I had to learn:</p>
      </div>
      <div className="tech-cards-container">
        <div className="tech-cards">
          {items}
        </div>
      </div>
    </div>
  );
}
