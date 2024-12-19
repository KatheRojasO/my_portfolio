import React from "react";
const img = require("../../assets/img/me-about.png");

export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="paragraph-container">
          <h2 className="title-red">Introduce</h2>
          <h2>About Me</h2>
          <p>
            Hello everybody! My name is Katheryn and I’m a Software Developer with almost 2 years of
            experience as a Frontend Developer in different startups.
          </p>
          <p>
            I have a bachelor of technology in Software Development, and recently my curiosity led me
            to become a Java Fullstack Developer.
          </p>
          <p>
            I’m passionate about coding, solving problems and I’m always looking for new challenges that allow me to
            learn and grow as a professional. Here you can find some of my best projects and my contact information.
          </p>
        </div>
        <div className="img-container">
          <img className="about-img" src={img} alt="me-about"></img>
        </div>
      </div>
    </div>
  );
}
