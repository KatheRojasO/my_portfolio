import React from "react";
const img = require("../../assets/img/me-hero-new.png");

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <img src={img} alt="me-hero"/>
        <span className="hero-text-up">
          Hello!
        </span>
        <span className="hero-text-down">
          I'm Katheryn Rojas a frontend developer from Colombia based in
          Stockholm
        </span>
      </div>
    </section>
  );
}
