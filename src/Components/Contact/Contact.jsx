import React from "react";
import data from "../../JsonFiles/contactData.json";

export default function Contact() {
  const items = data.map((item) => {
    const contactIcon = require(`../../assets/icons/${item.image}`);

    return (
      <li id={item.id}>
        <img className="icons" src={contactIcon} alt="contact-icon" />
        <span>{item.info}</span>
      </li>
    );
  });

  return (
    <div id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Here you can find my contact information in case you're interested in
          work with me
        </p>
        {items}
      </div>
    </div>
  );
}
