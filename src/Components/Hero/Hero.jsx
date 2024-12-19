import React from "react";
const img = require("../../assets/img/me-hero-new.png");

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="image-container">
          <img src={img} alt="me-hero" className="me-hero" />
        </div>
        <div className="text-container">
          <span className="hero-text-up">Hello World!</span><br></br>
          <p className="hero-text-down">
            I'm Katheryn Rojas a frontend developer from Colombia based in Stockholm
          </p>
        </div>
      </div>
    </section>
  );
}
