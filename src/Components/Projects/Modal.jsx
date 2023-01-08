import React from "react";
import ReactDOM from "react-dom";
const closeButton = require("../../assets/icons/close.png");

export default function Modal({ open, project, onClose }) {
  const { name, description, tech, image } = project;

  const modalImage = require(`../../assets/img/${image}`);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="overlay-style" />
      <div className="modal-style">
        <img className='close-button' src={closeButton} alt="not found" onClick={onClose} />
        <div className="modal-container">
          <img src={modalImage} alt="not found" />
          <div className="modal-info">
            <h2>{name}</h2>
            <ul className="tech-list">
              {tech.map((tech) => {
                return (
                  <li>
                    <span className="tech-options">{tech}</span>
                  </li>
                );
              })}
            </ul>
            <p className="description">{description}</p>
            <button className="btn-app"> Visit website/App</button>
            <button className="btn-git"> Git repository</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
