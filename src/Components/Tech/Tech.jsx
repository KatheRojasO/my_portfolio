import React from "react";
import techData from "../../JsonFiles/techData.json";
import TechCard from "./TechCard";

export default function Tech() {
  const items = techData.map((item) => {
    return <TechCard techName={item.name} techIcon={item.image} />;
  });

  return (
    <div id="tech">
      <div className="container">
        <div>
          <h2>Technologies used</h2>
          <p>
            Here you can find the different technologies I have used during all
            this time:
          </p>
        </div>
        <div className="tech-cards">{items}</div>
      </div>
    </div>
  );
}
