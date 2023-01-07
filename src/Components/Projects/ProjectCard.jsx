import React, { useState } from "react";
import "../Projects/ProjectCard.css";
import Modal from "./Modal";

export default function ProjectCard({ projectName, projectImage, description, projectTech, isProjectDone,}) {
  
  const cardImage = require(`../../assets/img/${projectImage}`);

  const [isOpen, setIsOpen] = useState(false);

  const setProjectInfo = () => {
    if (isProjectDone === true) {
      return (
        <div className="project-info">
          <img src={cardImage} alt="not found" onClick={() => setIsOpen(true)} />
          <p>{projectName}</p>
        </div>
      );
    } else {
      return (
        <div className="project-info">
          <div className="coming-soon">Coming Soon</div>
          <img src={cardImage} alt="not found" />
          <p>{projectName}</p>
        </div>
      );
    }
  };

  return (
    <div className="project-card">
      {setProjectInfo()}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-container">
          <img src={cardImage} alt="not found" />
          <div className="modal-info">
            <h2>{projectName}</h2>
            <ul className="tech-list">
              {projectTech.map((tech) => {
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
      </Modal>
    </div>
  );
}
