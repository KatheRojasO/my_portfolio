import React from "react";
const img = require("../../assets/img/new_me.png");

export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="paragraph-container">
          <h2>About Me</h2>
          <p>
            Hello everybody! My name is Katheryn and I’m a junior frontend
            developer ready to take my career to the next level.
          </p>
          <p>
            During my studies I’ve developed some apps and websites, some better
            than the others. That's why I decided to build this website to show
            you my best projects.
          </p>
        </div>
        <div className="img-container">
          <img className="about-img" src={img} alt="me-about"></img>
        </div>
      </div>
    </div>
  );
}
