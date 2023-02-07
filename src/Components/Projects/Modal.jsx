import React from "react";
import ReactDOM from "react-dom";
const closeButton = require("../../assets/icons/close.png");

export default function Modal({ open, project, onClose }) {
  const { name, description, tech, image, gitLink, website } = project;

  const modalImage = require(`../../assets/img/${image}`);

  if (!open) return null;

  const techOptions = tech.map((tech) => {
    return (
      <li>
        <span className="tech-options">{tech}</span>
      </li>
    );
  });

  return ReactDOM.createPortal(
    <div>
      <div className="overlay-style" />
      <div className="modal-style">
        <img
          className="close-button"
          src={closeButton}
          alt="not found"
          onClick={onClose}
        />
        <div className="modal-container">
          <img className="modal-img" src={modalImage} alt="project-img" />
          <div className="container">
            <h2>{name}</h2>
            <ul className="tech-list">{techOptions}</ul>
            <p className="description">{description}</p>
            <a className="web-link" href={website} target="_blank" rel="noopener noreferrer">
              Visit the website
            </a>
            <a className="git-link" href={gitLink} target="_blank" rel="noopener noreferrer">
              Git repository
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
