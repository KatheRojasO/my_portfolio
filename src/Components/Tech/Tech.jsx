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
          <h2 className="title-red">Project</h2>
          <h2>Technologies</h2>
          <p>
            Here you can find the different technologies I have worked with:
          </p>
        </div>
        <div className="tech-cards">{items}</div>
      </div>
    </div>
  );
}
