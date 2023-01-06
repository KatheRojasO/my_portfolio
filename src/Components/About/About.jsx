import React from "react";
import "../About/About.css";
const img = require("../../assets/me_about.png");

export default function About() {
  return (
    <div id="about">
      <div className="info-container">
        <h2>About Me</h2>
        <p>
          Hello everybody! My name is Katheryn and I’m a junior frontend
          developer ready to take my career to the next level. <br />
          <br />
          During my studies I’ve developed some apps and websites, some better
          than the others. That's why I decided to build this website to show you my best projects.
        </p>
      </div>
      <div className="image-container">
        <img src={img} alt="not found"></img>
      </div>
    </div>
  );
}
